/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into /,
 *   these routes are mounted onto /
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/login", (req, res) => {
    if (req.session !== true) {
      res.render("login");
    } else {
      let user = req.session.user_id;
      let templateVars = {
        user: users[user],
      };
      res.render("quizzes_view");
    }
  });

  router.post("/login", (req, res) => {
    res.render("user_homepage");
  });

  router.get("/register", (req, res) => {
    res.render("register")
  });

  router.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email === '' || password === '') {

    } else {//queries
      //register user in database. how?
    }
    // req.session.user_id = email;
    res.redirect("/quizzes_view");
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/urls");
  });

//   app.route("/login")
//   .get((req, res) => {
//     if (req.session !== true) {
//       res.render("login");
//     } else {
//       let user = req.session.user_id;
//       let templateVars = {
//         user: users[user],
//       };
//       res.render("quizzes_view");
//     }})
//   .post((req, res) => {
//   //verify email using db query, then set cookie, then
//   res.render("user_homepage");
// });

// app.route("/register")
//   .get((req, res) => {
//       res.render("register")
//   })
//   .post((req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     if (email === '' || password === '') {

//     } else if {//queries
//       //register user in database. how?
//     }
//     req.session.user_id = email;
//     res.redirect("/quizzes_view");
//   });

  // app.post("/logout", (req, res) => {
  //   req.session = null;
  //   res.redirect("/urls");
  // });


  return router;
};
