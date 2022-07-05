const res = require("express/lib/response");
const { DATE } = require("mysql/lib/protocol/constants/types");
const pool = require("../controller/config");
let db = {};

db.loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "select * from user where username=? and password=?",
      [username, password],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        console.log(results);
        return resolve(results);
      }
    );
  });
};
db.createUser = (name, phone,username,password,email) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "insert into register (name,phone,username,password,email) values(?,?,?,?)",
      [name, phone,username, password,email],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        console.log(results);
        return resolve(results);
      }
    );
  });
};

module.exports=db;