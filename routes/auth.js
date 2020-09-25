/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into /,
 *   these routes are mounted onto /
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router = express.Router();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const { user } = require('pg/lib/defaults');
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
      db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [email, password])
      .then(response => {
        req.session.user_id = response.rows[0].id;
        req.session.save();
        console.log(req.session);
        res.redirect("/");
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
    const { name, email, password} = req.body;
    if (email === '' || password === '') {
      res.status("400").send("Please do not leave either field blank!");
    } else if (email) {
      db.query(`SELECT * FROM users WHERE email = $1`, [email])
      if (email === true) {
        res.status("200").send("A user with this email exists! Please log in or try again with a new email address.");
      }
    }
    db.query(`INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id;
      `, [name, email, password])
      .then(response => {
        req.session.save() = response.rows[0].id;
        res.redirect("/");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      })
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return router;
};
