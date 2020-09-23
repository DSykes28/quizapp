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
    res.redirect("/user_homepage");
  } else {
    res.redirect("/login_register");
  }
});

//form for user to make quiz
app.route("/quiz/new")
.get((req, res) => {
  const user = req.session.user_id;
  if (!user) {
    res.redirect('/login_register');
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
  res.render("quizzes_view");
});

//quiz url - can be unlisted or public
app.get("/quiz/:quizID", (req, res) => {
  res.render("results");
});

//page for user to view all of the quizzes they created
app.route("/login")
  .get((req, res) => {
  res.render("login");
}).post((req, res) => {
  //verify email using some helper function, then set cookie, then
  res.render("user_homepage");
})
//upon completion of quiz, shareable link to result of attempt
//show all quizzes - public - you don’t need to login to view or take quiz, only to make 1
app.get("/results", (req, res) => {
  res.render("result");
});


app.route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email === '' || password === '') {

    } else if (getUserByEmail(email. users)) {

    } else {
      //register user in database. how?
    }
    req.session.user_id = email;
    res.redirect("/quizzes_view");
  });

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/urls");
})
