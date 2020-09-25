/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router  = express.Router();
const cookieSession = require('cookie-session')
const bodyParser = require("body-parser");

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

 //page for user to view all of the quizzes they created
  router.get("/user", (req, res) => {
    if (req.session !== true) {
      res.render("login");
    } else {
    db.query(`SELECT name from users
      WHERE email = ${req.body.email}`)
      .then(response => {
        console.log(response);
        res.render("user", { response });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    }
  });

  router.get("/user/:quizID", (req, res) => {
    if (req.session !== true) {
      res.render("login");
    } else {
      console.log(req);
    db.query(`SELECT name, title, score, total_score
    FROM results
    JOIN users ON users.id = user_id
    JOIN quiz_names ON quiz_names.id = results.quiz_id
    WHERE quiz_id = ${req.body}`)
      .then(response => {
        console.log(response)
        res.render("result", templateVars);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    }
  });
  return router;
}
//quiz url - can be unlisted or public;
//show all quizzes - public - you don’t need to login to view or take quiz, only to make 1

