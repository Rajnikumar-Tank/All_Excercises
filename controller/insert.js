const conn = require('../connection.js')

function insert(sql, data) {
  // console.log(typeof(data));
  return new Promise((resolve, reject) => {
    // console.log(data);    
    conn.query(sql, data, (err, result) => {
      if (err) {
        console.log(err);
        reject(err)
      }
      // console.log("Reuslt");
      // console.log(result);
      if (result?.insertId != undefined) {
        resolve(result.insertId);
      }
      else {
        resolve();
      }
    })
  })
}
module.exports = insert