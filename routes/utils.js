const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  try {
    const token = req.signedCookies.token;
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.status(401).send({
      name: "Unauthorized",
      message: "Please Log In",
    });
    return;
  }
  next();
};

// check admin util function
// check is the req.user's role is the admin

module.exports = { authRequired };
