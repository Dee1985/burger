const mysql = require("mysql2");

const connection =
  mysql.createConnection(process.env.JAWSDB_URL) ||
  mysql.createConnection({
    host: "localhost",

    // Your port
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "burger_DB"
  });

// mysql.createConnection({
//   host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

//   // Your port
//   port: 3306,

//   // Your username
//   user: "gth62dmtre4psth7",

//   // Your password
//   password: "ksr1mmx2ag4md0io",
//   database: "tuy70od0o65ain69"
// });

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
