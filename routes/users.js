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

  router.get("/",(req, res) => {
    if (req.session) {
      res.redirect("/index");
      //select 9 random quizzes to display through DB then show them in view
    } else {
      res.redirect("/login");
    }
  });

  router.get("/quiz/new", (req, res) => {
    if (req.session !== true) {
      res.redirect("/login");
    } else {
      const user = req.session.user_id;
      let templateVars = {
        user: users[user],
      };
      res.render("new_quizz", templateVars);
    }
  });

  router.post("quiz/new",(req, res) => {
    //insert new quiz into quiz database
    const quiz = req.params.new_quiz;
    if (req.session !== true) {
      res.send("Please log in to view.").redirect("/login");
    }
    //save quiz to database
    res.render("quizzes_view");
  });

  router.get("/quiz/:quizID", (req, res) => {
    //db query which quiz it is, then display it in a template var?
    res.render("quiz", templateVars);
  });

  router.get("/user", (req, res) => {
    //db query which user it is, then display quizzes created in a template var?
    res.render("user", templateVars);
  });

  router.get("/user/:quizID", (req, res) => {
//db query - look in user to find which quiz result ^ route neets to change
    res.render("result", templateVars);
  });

  router.get("/result/:id", (req, res) => {
    //db query to find result, name of quiz, score, stored in template vars
    res.render("result", templateVars);
  })

  return router;
};


//form for user to make quiz

//quiz url - can be unlisted or public
;
//page for user to view all of the quizzes they created
//upon completion of quiz, shareable link to result of attempt
//show all quizzes - public - you don’t need to login to view or take quiz, only to make 1

