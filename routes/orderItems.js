const express = require("express");
const router = express.Router();
const { addItemToOrder, removeItemFromOrder, removeAllItemsFromOrder, getAllItemsFromOrder } = require("../db/adapters/orderItems");

router.get("/:orderId", async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const orderItems = await getAllItemsFromOrder(orderId);
    res.send({ succes: true, name: "Success", message: "Successfully retrieved items in order", data: orderItems });
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

router.delete("/item/:orderId/:productId", async (req, res, next) => {
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
