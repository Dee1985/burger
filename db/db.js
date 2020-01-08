const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gth62dmtre4psth7",
  password: "ksr1mmx2ag4md0io",
  database: "tuy70od0o65ain69",
  use_env_variable: "JAWSDB_URL"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
