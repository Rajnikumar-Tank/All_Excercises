const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'jobAppDB29',
    dateStrings:'true'
})

conn.connect((err) => {
    if (err) {
        console.log('error:' + err);
    }
    else {
        console.log('Database connected!!');
    }
})

function update(sql){
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,result)=>{
            if(err){
                console.error(err)
                reject(err);
            }
            else{
                console.log(result);
                resolve(result);
            }
        })
    })
}

module.exports=update;