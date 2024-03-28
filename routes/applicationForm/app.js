const express=require('express')
const router=express.Router();
const mysql=require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'root',
    database: 'userDatabase'
})

conn.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log('Database connected!!!'+conn.config.database);
    }
})

router.get('/', (req, res) => {
    res.render("ApplicationForm/index.ejs", { title: 'home' });
})

router.post('/getData', (req, res) => {
    const user = req.body;
    sql = `
        insert into usersDetails(firstname ,lastname,age,phone,emailId ,gender,hobbies,address)
        values('`+ user.firstName + `','` + user.lastname + `',` + user.age + `,
        '` + user.phone + `','` + user.email + `','` + user.gender + `','` + user.hobi + `','` + user.address + `');`

    conn.query(sql,(err)=>{
        if(err) throw err;
        else{
            console.log('User Inserted!!!');
        }
    })
})
router.get('/alluser', (req, res) => {
    const sql="Select * from usersDetails;"
    conn.query(sql,(err,result)=>{
        if(err) {
            console.error(err);
            return;
        }
        else{
            var userDetails=[]
            for(let i=0;i<result.length;i++){
                userDetails[i]={}
                userDetails[i].userId=result[i].userId;
                userDetails[i].firstName=result[i].firstname;
                userDetails[i].lastname=result[i].lastname;
                userDetails[i].email=result[i].emailId;
                userDetails[i].phone=result[i].phone;
            }
            // console.log(result);
            // userDetails=result;
            
            console.log(userDetails);
            res.render("ApplicationForm/allUser.ejs", { usersData : userDetails });
        }
    })
    
})
router.get('/oneUser', (req, res) => {
   
    userId = req.query.userId;
    var user1 = {};
    sql='select * from usersDetails where userId='+userId+";";
    conn.query(sql,(err,result)=>{
        if(err){
            console.error(err);
        }
        else{
            user1.firstName=result[0].firstname;
            user1.lastname=result[0].lastname;
            user1.age=result[0].age;
            user1.phone=result[0].phone;
            user1.email=result[0].emailId;
            user1.gender=result[0].gender;
            user1.hobi=result[0].hobbies;
            user1.address=result[0].address;
        }
        
        // console.log(user1);
        res.render('ApplicationForm/oneUser.ejs', { user1 })
    })
})

module.exports=router