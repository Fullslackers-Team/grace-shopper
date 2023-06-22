const usersRouter = require("express").Router();
const {
  createUser,
  getUserByUsername,
  getUser,
  getUserById,
} = require("../db/adapters/users");
const jwt = require("jsonwebtoken");
const { authRequired } = require("./utils");

usersRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    next({
      name: "Password Error",
      message: "Password must be longer than 8 characters",
    });
  } else {
    try {
      const _user = await getUserByUsername(username);
      if (_user) {
        next({
          name: "Username Error",
          message: "Username alread in use, please try again!",
        });
      }
      const user = await createUser({ username, password });
      res.send({
        message: "Registration was a success!",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next({
      name: "Information Error",
      message: "Please supply both a username and password",
    });
  } else {
    try {
      const _user = await getUserByUsername(username);
      if (!_user) {
        next({
          name: "Does Not Exist Error",
          message: "A user by that username does not exist",
        });
      }
      const user = await getUser({ username, password });
      if (user) {
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
          message: "Username or password is incorrect",
        });
      }
    } catch (error) {
      next(error);
    }
  }
});

usersRouter.get("/me", authRequired, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/id/:creator_id", async (req, res, next) => {
  const { creator_id } = req.params;
  try {
    const user = await getUserById(creator_id);
    res.send({
      message: `Getting user by Id is successful`,
      user,
    });
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
