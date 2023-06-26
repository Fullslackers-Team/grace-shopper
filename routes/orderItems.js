const express = require("express");
const { addItemToOrder, removeItemFromOrder, removeAllItemsFromOrder } = require("../db/adapters/orderItems");
const router = express.Router();

// addItemToOrder, removeItemFromOrder, removeAllItemsFromOrder

router.get("/", async (req, res, next) => {
  try {
    res.send({ succes: true, name: "Success", message: "Added product to order" });
  } catch (error) {
    next(error);
  }
});

router.post("/:orderId/:productId", async (req, res, next) => {
  try {
    const { orderId, productId } = req.params;
    const addedItem = await addItemToOrder(orderId, productId);
    res.send({ succes: true, name: "Success", message: "Added product to order", data: addedItem });
  } catch (error) {
    next(error);
  }
});

router.delete("/:orderId/:productId", async (req, res, next) => {
  try {
    const { orderId, productId } = req.params;
    await removeItemFromOrder(orderId, productId);
    res.send({ succes: true, name: "Success", message: "Removed product from order" });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/all/:orderId", async (req, res, next) => {
  try {
    const { orderId } = req.params;
    await removeAllItemsFromOrder(orderId);
    res.send({ succes: true, name: "Success", message: "Removed all products from order" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
