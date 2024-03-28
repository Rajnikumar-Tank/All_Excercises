const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'jobAppDB29'
})

conn.connect((err) => {
    if (err) {
        console.log('error:' + err);
    }
    else {
        console.log('Database connected!!'+conn.config.database);
    }
})
function insert(sql, data){
    // console.log(typeof(data));
    return new Promise((resolve,reject)=>{
        console.log(data);    
        conn.query(sql,data,(err,result)=>{
            if(err){
                console.log(err);
                reject(err)
            }
            // console.log("Reuslt");
            console.log(result);
            if(result?.insertId != undefined){
                resolve(result.insertId);
            }
            else{
                resolve();
            }
        })
    })
}
module.exports=insert