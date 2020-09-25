/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into /,
 *   these routes are mounted onto /
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = (db) => {
  router.get("/login", (req, res) => {
    if (req.session !== true) {
     res.render("login");
    } else {
      res.redirect("/");
    }
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      console.log("hello!");
      db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password])
      .then(response => {
        console.log(response);
        req.session.user_id = email;
        res.render("index", response)
      })
      .catch(err => {
        res.send(err);
     })
    }
  });

  router.get("/register", (req, res) => {
    if (req.session !== true) {
      res.render("register");
    }
  });

  router.post("/register", (req, res) => {
//check db for user, if exists return error
    const email = req.body.email;
    const password = req.body.password;
    if (email === '' || password === '') {
      // res.send(error);

    } else {
      // db.query(`INSERT into users;`)
      // .then(data => {
      //   const users = data.rows;
      //   res.json({ users });
      // })
      // .catch(err => {
      //   res
      //     .status(500)
      //     .json({ error: err.message });
      // })
      //register user in database. how?
    }
    // req.session.user_id = email;
    res.redirect("/quizzes_view");
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return router;
};
