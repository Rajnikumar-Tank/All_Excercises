const conn = require('../connection.js')

function getForUpdate(sql) {
  return new Promise((resolve, reject) => {
    conn.query(sql, (err, result) => {
      if (err) {
        console.error("getForUpdate Error:" + err);
        reject(err);
      }
      return resolve(result);
    })
  })
}

module.exports = getForUpdate;