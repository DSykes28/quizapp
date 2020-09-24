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
      db.query(`SELECT * FROM users;`)
      .then(data => {
        //  const users = data.rows;
        //  res.json({ users });
      })
       .catch(err => {
         res.status(500).json({ error: err.message });
       });
      let user = req.session.user_id;
      let templateVars = {
        user: users[user],
      };
      res.render("index");
    }
  });

  router.post("/login", (req, res) => {
    res.render("user_homepage");
  });

  router.get("/register", (req, res) => {
    // db.query(`SELECT * FROM users;`)
    // .then(data => {
    //   const users = data.rows;
    //   res.json({ users });
    // })
    // .catch(err => {
    //   res
    //     .status(500)
    //     .json({ error: err.message });
    // });
    res.render("register")
  });

  router.post("/register", (req, res) => {
//check db for user, if exists return error
    const email = req.body.email;
    const password = req.body.password;
    if (email === '' || password === '') {
      // res.send(error);

    } else {
      // db.query(`INSERT into users;`)
      // .then(data => {
      //   const users = data.rows;
      //   res.json({ users });
      // })
      // .catch(err => {
      //   res
      //     .status(500)
      //     .json({ error: err.message });
      // })
      //register user in database. how?
    }
    // req.session.user_id = email;
    res.redirect("/quizzes_view");
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return router;
};
