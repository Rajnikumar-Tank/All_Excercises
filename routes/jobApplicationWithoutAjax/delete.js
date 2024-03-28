const mysql=require('mysql')

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:"jobAppDB29"
})
conn.connect((err) => {
    if (err) {
        console.log('error:' + err);
    }
    else {
        console.log('Database for delete connected!!'+conn.config.database);
    }
})

function deletes(sql){
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,result)=>{
            if(err){
                console.log(err)
                reject(err);
            }
            else{
                resolve(result)
            }
        })
    })
}

module.exports=deletes;