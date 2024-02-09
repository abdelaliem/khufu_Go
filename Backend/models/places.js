const conn = require("../config/db");
function getPlaceID(lat,lang) {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM `books`";
    conn.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
}

module.exports = { getAllbooks };
