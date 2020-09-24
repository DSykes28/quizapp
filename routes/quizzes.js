const express = require('express');
const app = express();
const router  = express.Router();
const { get9Quizzes } = require('../helpers/get9Quizzes');

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

  router.get("/random9", (req, res) => {
    get9Quizzes(db)
    .then(quizzes => {
      res.json({ quizzes });
    })
  })

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
    let templateVars = {
      user: users[user],
      quizzes: ________,
      score: ________
    }
    //save quiz to database
    res.render("user", templateVars);
  });

  router.get("/quiz/:quizID", (req, res) => {
    //db query which quiz it is, then display it in a template var?
    res.render("quiz", templateVars);
  });

  router.get("/result/:id", (req, res) => {
    //db query to find result, name of quiz, score, stored in template vars
    res.render("result", templateVars);
  })

  router.get("/hello", (req, res) => {
    res.json({"hello" : "goodbye"});
  })

  return router;
};
