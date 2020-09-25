/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router  = express.Router();
const cookieSession = require('cookie-session');
const getQuizzes = require('../helpers/get9Quizzes');

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

  router.get("/user", (req, res) => {
    //db query which user it is, then display quizzes created in a template var?
    res.render("user", templateVars);
  });

  router.get("/user/:quizID", (req, res) => {
//db query - look in user to find which quiz result ^ route neets to change
    res.render("result", templateVars);
  });

  return router;
};


//form for user to make quiz

//quiz url - can be unlisted or public
;
//page for user to view all of the quizzes they created
//upon completion of quiz, shareable link to result of attempt
//show all quizzes - public - you don’t need to login to view or take quiz, only to make 1

