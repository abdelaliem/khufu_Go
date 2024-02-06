const conn = require("../config/db");
function getAllbooks() {
    // here i had to return a promise so i can use async and await in the controller
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
