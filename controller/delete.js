const conn = require('../connection.js')


function deletes(sql) {
  return new Promise((resolve, reject) => {
    conn.query(sql, (err, result) => {
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        resolve(result)
      }
    })
  })
}

module.exports = deletes;