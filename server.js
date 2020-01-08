// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const connection = require("./db/db.js");

const homeStartingContent =
  "Add a new burger to the menu and click the submit button.";

const app = express();
const PORT = process.env.PORT || 5500;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const posts = [];
// Setting up EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("orders");
  // console.log(posts);
});

app.get("/allOrders", (req, res) => {
  connection.query("SELECT * FROM orders", function(err, results) {
    res.json(results);
  });
});

app.post("/", function(req, res) {
  console.log("inside / route", req.body.burgerName);
  const post = {
    order_text: req.body.burgerName,
    devoured: false
  };
  connection.query(
    "INSERT INTO orders (order_text, devoured) VALUES (?,?)",
    [post.order_text, post.devoured],
    function(err, results) {
      console.log(err, results);
    }
  );
  // posts.push(post);
});

app.put("/update/:id", (req, res) => {
  console.log("about to update", req.params);
  const sqlCommand = "UPDATE orders SET devoured = ? WHERE id = ?";
  connection.query(sqlCommand, [true, req.params.id], function(err, results) {
    console.log(err, results);
    res.json(results);
  });
});
// ==============================================================================================================================================
// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
