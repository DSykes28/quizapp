const express = require('express');
const app = express();
const router  = express.Router();
const { get9Quizzes } = require('../helpers/get9Quizzes');
const { response } = require('express');

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

  router.get("/:quizID", (req, res) => {
    console.log(req.session);
      db.query(`SELECT quizzes.id AS q_id, quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score
      FROM quiz_names
      JOIN quizzes ON title_id = user_id
      WHERE quiz_names.id = ${req.params.quizID}`)
        .then(response => {
          console.log(response);
          if (false) {
            res.redirect("/login");
            return;
          }
          res.render("quizz", {data: response.rows});
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });

  // router.post("/quiz/:quizID", (req, res) => {
  //   res.render("quizz")
  // })

  router.get("/result/:id", (req, res) => {
    //db query to find result, name of quiz, score, stored in template vars
    res.render("result", templateVars);
  })

  router.get("/hello", (req, res) => {
    res.json({"hello" : "goodbye"});
  })

  return router;
};
