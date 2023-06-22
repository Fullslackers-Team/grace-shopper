const ordersRouter = require("express").Router();
const {
	createOrder,
	editOrder,
	destroyOrder,
	getOrderbyCreatorId,
} = require("../db/adapters/orders");
const { authRequired } = require("./utils");

ordersRouter.post("/", async (req, res, next) => {
	try {
		const { creator_id, status } = req.body;
		const createdOrder = await createOrder({
			creator_id,
			status,
		});
		res.send(createdOrder);
	} catch (error) {
		next(error);
	}
});

// attach routes later

ordersRouter.delete("/:orderId", authRequired, async (req, res, next) => {
	try {
		const { orderId } = req.params;
		if ((req.order.id = orderId.creator_id)) {
			const order = await destroyOrder(id);
			res.send(order);
		} else {
			next({ message: "You are not authorized to delete this order." });
		}
	} catch (error) {
		next(error);
	}
});

ordersRouter.patch("/:id", authRequired, async (req, res, next) => {
	const { id } = req.params;
	const { creator_id, status } = req.body;
	try {
		const order = await getOrderbyId(+id);
		if (+req.order.id === order.creator_id) {
			const editedOrder = await editOrder(+id, creator_id, status);
			res.send(editedOrder);
		} else {
			res.send("Order couldn't be found");
		}
	} catch (error) {
		next(error);
	}
});

ordersRouter.get("/:creator_id/routes", async (req, res, next) => {
	try {
		const { creator_id } = req.params.activityId;
		const orderbyCreatorId = await getOrderbyCreatorId(creator_id);
		res.send(orderbyCreatorId);
	} catch (error) {
		next(error);
	}
});

module.exports = ordersRouter;
