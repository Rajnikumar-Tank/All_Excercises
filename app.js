const express = require('express');

const app=express()

const mysql=require('mysql')
const uniqueId=require('generate-unique-id')
const jwt = require('jsonwebtoken');
const cookie=require('cookie-parser');
const dotenv=require('dotenv');
const md5=require('md5');

dotenv.config();
const port = process.env.PORT; 

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cookie()) 

const applicationForm=require('./routes/applicationForm/app.js')
const paginationGrid=require('./routes/paginationGrid/app.js')
const studentDetails =require('./routes/StudentDetails/app.js')
const dynamicTable=require('./routes/DynamicTable/app.js')
const delemiterSearch=require('./routes/delemiterSearch/app.js')
app.use('/applicationForm',applicationForm)
app.use('/paginationGrid',paginationGrid)
app.use('/studentDetails',studentDetails)
app.use('/dynamicGrid',dynamicTable)
app.use('/delemiterSearch',delemiterSearch)
const conn = mysql.createConnection({
    database: 'userData',
    host: 'localhost',
    user: 'root',
    password: 'root' 
})
conn.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Database connected!!')
    }
})
app.get('/signup', (req, res) => {
    res.render('index');
})
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

app.post('/signup', async (req, res) => {
    const data = req.body;
    let salt = Math.floor(Math.random() * 5000);
    let pwd = md5(data.cpwd + salt);
    let token=uniqueId({
        length:12,
    })
    let query = 'select id from user_registrations where email_id ="' + data.email + '"';
    let result = await executeDML(query);
    if (result != "") {
        res.json({ msg: "Please enter other emailId" })
    }
    else {
        let sql = "insert into user_registrations(first_name,last_name,email_id,salt,activation_token,password) values('" + data.firstName + "','" + data.lastName + "','" + data.email + "','" + salt + "','" + token + "','" + pwd + "');";
        let result = await executeDML(sql);
        console.log(result)
        res.json({ id: result.insertId, token: token })
    }
})
app.get('/activeLink', (req, res) => {
    if(req.query.id != undefined){
        res.render('activeAccount', { data: req.query })
    }
    else if(req.query.email){
        res.render('activeAccount',{eid:req.query.email})
    }
})
app.post('/active', async (req, res) => {
    let data = req.body
    let sql = 'select activation_token,created_at from user_registrations where id=' + data.id;
    let output = await executeDML(sql);
    res.json(output[0]);
})
app.get('/forgot',(req,res)=>{
    res.render('forgot');
})
app.post('/checkEmail',async(req,res)=>{
    const eid=req.body.email;
    let sql='select * from user_registrations where email_id="'+eid+'"';
    let result=await executeDML(sql);
    console.log(result);
    if(result.length != 0 ){
        res.json({msg:'ok',email:eid})
    }
    else{
        res.json({msg:'invalid'})
    }
})

app.get('/passwordForm',(req,res)=>{
    res.render('updatePswd',{eid:req.query.eid})
})
app.post('/updatePassword',async(req,res)=>{
    data=req.body;
    let salt = Math.floor(Math.random() * 5000);
    let pwd = md5(data.npwd + salt);
    let sql='update user_registrations set salt='+ salt +', password="'+pwd+'" where email_id="'+data.email+'"';
    let output=await executeDML(sql);
    if(output){
        res.json({msg:"Your Password Updated!!"})
    }
})
app.get('/activate', async (req, res) => {
    var id = req.query.id;
    var token = req.query.token;
    let sql = 'select activation_token,TIME_TO_SEC(timediff(now(),created_at)) as duration from user_registrations where id=' + id;
    let output = await executeDML(sql);
    console.log(output);
    console.log(new Date(output[0].duration));
    if(output[0].duration > 60*10) {
        sql = 'delete from user_registrations where id=' + id;
        output = await executeDML(sql)
        res.render('thank', { errMsg: "Time out for activate your account!!", id: id })
    }
    else if (output[0].activation_token != token) {
        sql = 'delete from user_registrations where id=' + id;
        output = await executeDML(sql)
        res.render('thank', { errMsg: 'Something went wrong! Try Again!' });
    }
    else {
        sql = 'update user_registrations set status=1 where id= ' + id;
        output = await executeDML(sql);
        console.log(output)
        
        res.render('thank', { msg: "Thank you! Your account Activated!! ", id: id })
    }
})
app.get('/', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const data = req.body
    let sql = 'select status,password,salt from user_registrations where email_id="' + data.email + '"';
    let result = await executeDML(sql);
    console.log(result[0]);
    let jwt_token=jwt.sign({email:data.email},process.env.SECRET,{
        expiresIn:"1h",
    })
    console.log(jwt_token)
    if (result[0]) {

        let log_pwd = md5(data.password + result[0].salt)
        if (log_pwd == result[0].password) {
            
            res.json({ jwt:jwt_token,msg: 'You are login Successfully!!', status: result[0].status })
        }
        else {
            res.json({ msg: 'Email Id and Password not match!!' })
        }
    }
    else {
        res.json({ msg: 'Email Id and Password not match!!' })
    }
})
function authoriseToken(req,res,next){
    let token = req.cookies.token;
    console.log(token);
    console.log(req.cookies.token);
    if(!token){
        res.render('login',{msg:"Access Denied!!"});
        return;
    }
    try {
        const data=jwt.verify(token,process.env.SECRET);
        req.email=data.email;
        next();                     
    } catch (error) {
        res.render('login',{msg:"Session Expired.."})
    }
}
app.get('/home',authoriseToken,(req,res)=>{
    console.log(req.query) 
    res.render('home')
})
app.get('/dynamicTable', authoriseToken,(req,res)=>{
    res.render('dynamicTable/dynamicTable')
})

app.get('/kukukube', authoriseToken,(req,res)=>{
    res.render('kukukube/kukukube')
})

app.get('/tictactoe', authoriseToken,(req,res)=>{
    res.render('tictactoe/tictactoe')
})

app.get('/tableOfEvents', authoriseToken,(req,res)=>{
    res.render('tableOfEvents/tableOfEvent')
})

app.listen(port,()=>{
    console.log('Server is running on:'+port)
})