// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));
app.use(bodyParser.urlencoded({ extended: false }));

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// create current user middleware




// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const authRoutes = require("./routes/auth");
const quizzesRoutes = require("./routes/quizzes");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/", authRoutes(db));
app.use("/quizzes", quizzesRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  if (!req.session.user_id) {
    let templateVars = {
      user: null
    }
    res.render("index", templateVars);
  } else {
    console.log("user_ID", req.session.user_id);
    db.query(`SELECT *
    FROM users
    WHERE id = ${req.session.user_id};`)
      .then(response => {
        let templateVars = {
          user: response.rows[0] };
        console.log("user", templateVars.user);
        res.render("index", templateVars);
      })
    .catch(err => {
      res.status(500).json({ error: err.message });
    })
  }
});

app.get("/result", (req, res) => {
  let templateVars = {user: {name: "Alice"}};


  res.render("result", templateVars);});

  app.get("/new_quizz", (req, res) => {
    let templateVars = {user: {name: "Alice"}};


    res.render("new_quizz", templateVars);});

    app.get("/user", (req, res) => {
      let templateVars = {user: {name: "Alice"}};


      res.render("user", templateVars);});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
