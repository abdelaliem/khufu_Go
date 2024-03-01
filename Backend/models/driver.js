const con = require("../config/db");
const bookUsers = (busId) => {
  return new Promise((resolve, reject) => {
    const quary = "SELECT `lat`,`lang`  FROM `users` WHERE `requested`=?";
    con.query(quary, [busId], (err, data) => {
      if (data) {
        resolve(data);
      } else {
        reject("can't get users");
      }
    });
  });
};

const applyBooks = (userId, busId) => {
  return new Promise((resolve, reject) => {
    const quary1 = "SELECT `requested` FROM `users` WHERE `id`=?";
    con.query(quary1, [userId], (err, [data]) => {
      if (data["requested"] != 0) {
        console.log(data);
        resolve("already requested");
      } else {
        const quary = "UPDATE `users` SET `requested`=? where `id`=?";
        con.query(quary, [busId, userId], (err, data) => {
          if (data) {
            resolve("applied successfully");
          } else {
            reject("can't book this bus");
          }
        });
      }
    });
  });
};

const cancelAplly = (userId) => {
  return new Promise((resolve, reject) => {
    const quary = "UPDATE `users` SET `requested`=0 where `id`=?";
    con.query(quary, [userId], (err, data) => {
      if (data) {
        resolve("canceld successfully");
      } else {
        reject("can't cancel ");
      }
    });
  });
};

const bookDone = (userId) => {
  return new Promise((resolve, reject) => {
    const quary = "UPDATE `users` SET `requested`=0 where `id`=?";
    con.query(quary, [userId], (err, data) => {
      if (data) {
        resolve("done successfully");
      } else {
        reject("didn't done");
      }
    });
  });
};
const UpdateBusLocation = (lat, lang, busId) => {
  return new Promise((resolve, reject) => {
    const quary = "UPDATE `drivers` SET `lang`=?,`lat`=? WHERE `bus_id` = ?";
    con.query(quary, [lang, lat, busId], (err, data) => {
      if (data) {
        resolve("data updated successfully");
      } else {
        reject("data didn't updated");
      }
    });
  });
};
const UpdateUserLocation = (lat, lang, userId) => {
  return new Promise((resolve, reject) => {
    const quary = "UPDATE `users` SET `lang`=?,`lat`=? WHERE `id` = ?";
    con.query(quary, [lang, lat, userId], (err, data) => {
      if (data) {
        resolve("data updated successfully");
      } else {
        reject("data didn't updated");
      }
    });
  });
};
module.exports = {
  bookUsers,
  applyBooks,
  cancelAplly,
  bookDone,
  UpdateBusLocation,
  UpdateUserLocation
};
