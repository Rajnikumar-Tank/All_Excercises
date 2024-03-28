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
        console.log('Database connected!!'+conn.config.database);
    }
})
function getForUpdate(sql){
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,result)=>{
            if(err){
                console.error("getForUpdate Error:"+err);
                reject(err);
            }
            return resolve(result);
        })
    })
}

module.exports=getForUpdate;