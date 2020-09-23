/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router  = express.Router();

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
  return router;
};

app.get("/",(req, res) => {
  const user = req.session.user_id;
  if (user) {
    res.redirect("/index");
  } else {
    res.redirect("/login");
  }
});

//form for user to make quiz
app.route("/quiz/new")
.get((req, res) => {
  const user = req.session.user_id;
  if (!user) {
    res.redirect("/login");
  } else {
    let templateVars = {
      user: users[user],
    };
    res.render("new_quiz", templateVars);
  }
})
.post((req, res) => {
  const quiz = req.params.new_quiz;
  const user = req.session.user_id
  if (!user) {
    res.send("Please log in to view.").redirect("/login");
  }
  //save quiz to database
  res.render("quizzes_view");
});

//quiz url - can be unlisted or public
app.get("/quiz/:quizID", (req, res) => {
  res.render("quiz");
});

//page for user to view all of the quizzes they created

//upon completion of quiz, shareable link to result of attempt
//show all quizzes - public - you don’t need to login to view or take quiz, only to make 1
app.get("/user/:quizID", (req, res) => {
  res.render("result");
});

