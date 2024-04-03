const conn=require('../connection.js')


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