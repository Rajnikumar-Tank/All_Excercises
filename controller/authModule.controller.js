const uniqueId = require('generate-unique-id')
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const dotenv = require('dotenv');
dotenv.config();
const conn = require('../connection.js')
// router.get('/signup', (req, res) => {
const authModuleSignup = (req, res) => {
  res.render('authModule/index');
}
function executeDML(sql) {
  return new Promise((resolve, reject) => {
    conn.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result)
      }
    })

  })
}

// router.post('/signup', async (req, res) => {
const authModuleSignupPost = async (req, res) => {
  const data = req.body;
  let salt = Math.floor(Math.random() * 5000);
  let pwd = md5(data.cpwd + salt);
  let token = uniqueId({
    length: 12,
  })
  let query = 'select id from user_registrations where email_id ="' + data.email + '"';
  let result = await executeDML(query);
  if (result != "") {
    res.json({ msg: "Please enter other emailId" })
  }
  else {
    let sql = "insert into user_registrations(first_name,last_name,email_id,salt,activation_token,password) values('" + data.firstName + "','" + data.lastName + "','" + data.email + "','" + salt + "','" + token + "','" + pwd + "');";
    let result = await executeDML(sql);
    // console.log(result)
    res.json({ id: result.insertId, token: token })
  }
}
// router.get('/activeLink', (req, res) => {
const authModuleActiveLink = (req, res) => {
  if (req.query.id != undefined) {
    res.render('authModule/activeAccount', { data: req.query })
  }
  else if (req.query.email) {
    res.render('authModule/activeAccount', { eid: req.query.email })
  }
}
// router.post('/active', async (req, res) => {
const authModuleActive = async (req, res) => {
  let data = req.body
  let sql = 'select activation_token,created_at from user_registrations where id=' + data.id;
  let output = await executeDML(sql);
  res.json(output[0]);
}
// router.get('/forgot',(req,res)=>{
const authModuleForgot = (req, res) => {
  res.render('authModule/forgot');
}
// router.post('/checkEmail',async(req,res)=>{
const authModuleCheckEmail = async (req, res) => {
  const eid = req.body.email;
  let sql = 'select * from user_registrations where email_id="' + eid + '"';
  let result = await executeDML(sql);
  console.log(result);
  if (result.length != 0) {
    res.json({ msg: 'ok', email: eid })
  }
  else {
    res.json({ msg: 'invalid' })
  }
}

// router.get('/passwordForm',(req,res)=>{
const authModulepasswordForm = (req, res) => {
  res.render('authModule/updatePswd', { eid: req.query.eid })
}
// router.post('/updatePassword',async(req,res)=>{
const authModualUpdatePassword = async (req, res) => {
  data = req.body;
  let salt = Math.floor(Math.random() * 5000);
  let pwd = md5(data.npwd + salt);
  let sql = 'update user_registrations set salt=' + salt + ', password="' + pwd + '" where email_id="' + data.email + '"';
  let output = await executeDML(sql);
  if (output) {
    res.json({ msg: "Your Password Updated!!" })
  }
}
// router.get('/activate', async (req, res) => {
const authModuleActivate = async (req, res) => {
  var id = req.query.id;
  var token = req.query.token;
  let sql = 'select activation_token,TIME_TO_SEC(timediff(now(),created_at)) as duration from user_registrations where id=' + id;
  let output = await executeDML(sql);
  console.log(output);
  console.log(new Date(output[0].duration));
  if (output[0].duration > 60 * 10) {
    sql = 'delete from user_registrations where id=' + id;
    output = await executeDML(sql)
    res.render('authModule/thank', { errMsg: "Time out for activate your account!!", id: id })
  }
  else if (output[0].activation_token != token) {
    sql = 'delete from user_registrations where id=' + id;
    output = await executeDML(sql)
    res.render('authModule/thank', { errMsg: 'Something went wrong! Try Again!' });
  }
  else {
    sql = 'update user_registrations set status=1 where id= ' + id;
    output = await executeDML(sql);
    console.log(output)

    res.render('authModule/thank', { msg: "Thank you! Your account Activated!! ", id: id })
  }
}
// router.get('/', (req, res) => {
const authModuleHome = (req, res) => {
  res.render('authModule/login')
}
// router.post('/login', async (req, res) => {
const authModuleLoginPost = async (req, res) => {
  const data = req.body
  let sql = 'select status,password,salt from user_registrations where email_id="' + data.email + '"';
  let result = await executeDML(sql);
  console.log(result[0]);
  let jwt_token = jwt.sign({ email: data.email }, process.env.SECRET, {
    expiresIn: "20m",
  })
  console.log(jwt_token)
  if (result[0]) {

    let log_pwd = md5(data.password + result[0].salt)
    if (log_pwd == result[0].password) {

      res.json({ jwt: jwt_token, msg: 'You are login Successfully!!', status: result[0].status })
    }
    else {
      res.json({ msg: 'Email Id and Password not match!!' })
    }
  }
  else {
    res.json({ msg: 'Email Id and Password not match!!' })
  }
}

// router.get('/home',authoriseToken,(req,res)=>{
const authModuleHomePage = (req, res) => {
  console.log(req.query)
  res.render('authModule/home')
}

module.exports = { authModualUpdatePassword, authModuleActivate, authModuleActive, authModuleActiveLink, authModuleCheckEmail, authModuleForgot, authModuleHome, authModuleHomePage, authModuleLoginPost, authModuleSignup, authModuleSignupPost, authModulepasswordForm }