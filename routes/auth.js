/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into /,
 *   these routes are mounted onto /
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const { user } = require('pg/lib/defaults');
const db = new Pool(dbParams);
db.connect();

module.exports = (db) => {
  router.get("/login", (req, res) => {
    if (!req.session.user_id) {
      let templateVars = {
        user: null
      }
     res.render("login", templateVars);
    } else {
      res.redirect("/");
    }
  });

  router.post("/login", (req, res) => {
    console.log("HELLO WORLD");
    const { email, password } = req.body;

    db.query(`SELECT * FROM users WHERE email = $1`, [email])
      .then(data => {
        console.log("data.rows[0]", data.rows[0]);
        if (password === data.rows[0].password) {
        req.session.user_id = data.rows[0].id;
        console.log("req.session", req.session);
        res.redirect("/");
        } else {
          res.send({error: "error"});
          return;
        }
      })
      .catch(err => {
        res
        .status(500)
        .json({error: err.message});
     });
  });

  router.get("/register", (req, res) => {
      let templateVars = {
        user: null
      }
      res.render("register", templateVars);
  });

  router.post("/register", (req, res) => {
    const { name, email, password} = req.body;
    db.query(`INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id;
      `, [name, email, password])
      .then(data => {
        req.session.user_id = data.rows[0].id;
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
