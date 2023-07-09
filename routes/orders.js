const ordersRouter = require("express").Router();
const { authRequired, adminRequired } = require("./utils");
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

ordersRouter.delete(
	"/:orderId",
	authRequired,
	adminRequired,
	async (req, res, next) => {
		try {
			const { orderId } = req.params;
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
	}
);

ordersRouter.patch("/", authRequired, async (req, res, next) => {
	const { creator_id, status } = req.body;
	try {
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

ordersRouter.get("/:creator_id", async (req, res, next) => {
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
