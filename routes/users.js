const usersRouter = require("express").Router();
const { getUserById } = require("../db/adapters/users");
const { authRequired } = require("./utils");

usersRouter.get("/me", authRequired, async (req, res, next) => {
  try {
    res.send({
      success: true,
      message: `Getting user is successful`,
      data: req.user,
    });
  } catch (error) {
    next(error);
  }
});

// Is this needed?
usersRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.send({
      success: true,
      message: `Getting user by id is successful`,
      user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
