const ordersRouter = require("express").Router();
const { authRequired } = require("./utils");
const {
  createOrder,
  editOrder,
  destroyOrder,
  getOrderbyCreatorId,
} = require("../db/adapters/orders");

ordersRouter.post("/", async (req, res, next) => {
  try {
    const { creator_id, status } = req.body;
    const createdOrder = await createOrder(creator_id, status);
    res.send({
      success: true,
      message: "Successfully created order.",
      data: createdOrder,
    });
  } catch (error) {
    next(error);
  }
});

ordersRouter.delete("/:orderId", authRequired, async (req, res, next) => {
  try {
    const { orderId } = req.params;
    // Make sure the user is an admin, or read the order from the db
    // does the creator_id of the order match the req.user.id
    const order = await destroyOrder(orderId);
    if (!order.length) {
      next({
        name: "NotFound",
        message: "An order with that id does not exist.",
      });
    } else {
      res.send({
        success: true,
        message: "Successfully deleted order.",
        data: order,
      });
    }
  } catch (error) {
    next(error);
  }
});

// Needs to check if the logged in user is the creator of the order
// Which order are we trying to patch?
ordersRouter.patch("/:orderId", authRequired, async (req, res, next) => {
  const { creator_id, status } = req.body;
  try {
    // Did you mean to pass the orderId?????
    const order = await getOrderbyCreatorId(creator_id);
    if (order) {
      const editedOrder = await editOrder(creator_id, status);
      res.send({
        success: true,
        message: "Successfully updated order.",
        data: editedOrder,
      });
    } else {
      res.send("You have not created an order yet.");
    }
  } catch (error) {
    next(error);
  }
});

// Same thing, double check the adapter and it's args
ordersRouter.get("/:id", async (req, res, next) => {
  try {
    const { creator_id } = req.params;
    const orderbyCreatorId = await getOrderbyCreatorId(creator_id);
    res.send({
      success: true,
      message: "Successfully fetched order.",
      data: orderbyCreatorId,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = ordersRouter;
