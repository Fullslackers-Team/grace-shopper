const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { getUserByUsername, createUser, authUser } = require("../db/adapters/users");
const { authRequired } = require("./utils");

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    next({
      name: "Password Error",
      message: "Password must be longer than 8 characters.",
    });
  } else {
    try {
      const user = await createUser(username, password);
      res.send({
        message: "Registration was a success!",
        user,
      });
    } catch (error) {
      if (error.code === "23505") {
        next({
          name: "UsernameTaken",
          error: "An account with that username already exists.",
        });
      }
      next(error);
    }
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next({
      name: "Information Error",
      message: "Please supply both a username and password.",
    });
  } else {
    try {
      const user = await authUser(username, password);
      if (user) {
        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET, {
          expiresIn: "2w",
        });
        res.cookie("token", token, {
          sameSite: "strict",
          httpOnly: true,
          signed: true,
        });
        res.send({
          message: "Login Successful",
          user,
        });
      } else {
        next({
          name: "Incorrect Information Error",
          message: "Username or password is incorrect.",
        });
      }
    } catch (error) {
      next(error);
    }
  }
});

router.post("/logout", authRequired, async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out.",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
