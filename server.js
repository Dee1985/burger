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
const newPosts = [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("orders", { startingContent: homeStartingContent, posts: posts });
  // console.log(posts);
});

app.post("/", function(req, res) {
  // console.log(req.body.burgerName);
  const post = {
    name: req.body.burgerName
  };
  posts.push(post);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
