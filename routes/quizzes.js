const express = require('express');
const router  = express.Router();
const { get9Quizzes } = require('../helpers/get9Quizzes');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const app = express();

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
        res.status(500).json({ error: err.message });
      });
  });
  router.get("/random9", (req, res) => {
    get9Quizzes(db)
    .then(quizzes => {
      res.json({ quizzes });
    })
  })

  router.get("/quiz/new", (req, res) => {
    if (!req.session.user_id) {
      res.redirect("/login");
    } else {
      let templateVars = {
        user: response.rows[0]
      }
      res.render("new_quizz", templateVars);
    }
  });

  router.post("quiz/new",(req, res) => {
    if (!req.session.user_id) {
      res.send("Please log in to view.").redirect("/login");
    } else {
    db.query(`INSERT INTO quizzes (title_id, question, choice_a, choice_b, choice_c, answer) VALUES (1, '?', '', '', '', '');`)
    db.query(`INSERT INTO quiz_names (total_score) VALUES (COUNT(quizzes.question);`)
      .then(response => {
        let templateVars = {
          user: response.rows[0]
        }
        res.render("user", templateVars)
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      })
    }
  });

  router.get("/:quizID", (req, res) => {
<<<<<<< HEAD
    //console.log(req.session);
      db.query(`SELECT quizzes.id AS q_id, quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score
=======
    db.query(`SELECT quizzes.id AS q_id, quiz_names.id, question, choice_a AS A, choice_b AS B, choice_c as C, answer AS D, total_score
>>>>>>> game-branch-2
      FROM quiz_names
      JOIN quizzes ON title_id = quiz_names.id
      WHERE quiz_names.id = ${req.params.quizID}`)
        .then(response => {
<<<<<<< HEAD
            console.log(response);
          if (false) {
            res.redirect("/login");
            return;
=======
          console.log(response);
          let templateVars = {
            user: {name: "Alice"},
            data: response.rows
>>>>>>> game-branch-2
          }
          res.render("quizz", templateVars);
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    });

//upon completion of quiz, shareable link to result of attempt
  router.get("/result/:id", (req, res) => {
    console.log(req.session);
    db.query(`SELECT name, title, score, total_score
    FROM results
    JOIN users ON users.id = user_id
    JOIN quiz_names ON quiz_names.id = results.quiz_id
    WHERE results.id = ${results.id}`)
    .then(response => {
      // console.log(response);
      let templateVars = {
        user: response.rows[0]
      }
      res.render("result", templateVars);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  })

  router.get("/hello", (req, res) => {
    res.json({"hello" : "goodbye"});
  });

  return router;
};
