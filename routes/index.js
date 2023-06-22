const router = require("express").Router();

// GET /api/health
router.get("/health", (req, res, next) => {
  res.send({
    message: "Api is up and healthy!",
  });
});

router.use("/auth", require("./auth.js"));
router.use("/orders", require("./orders.js"));
router.use("/order-items", require("./orderItems.js"));
router.use("/products", require("./products.js"));

router.all("*", (req, res, next) => {
  next({
    name: "Not found",
    message: "That endpoint does not exists",
  });
});

module.exports = router;
