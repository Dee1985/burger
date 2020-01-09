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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
