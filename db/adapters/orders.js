const client = require("../client");

async function createOrder(creator_id, status) {
	try {
		const {
			rows: [orders],
		} = await client.query(
			`
      INSERT INTO orders(creator_id, status)
      VALUES($1,$2)
      RETURNING *;
      `,
			[creator_id, status]
		);
		return orders;
	} catch (error) {
		throw error;
	}
}

async function editOrder(id, status) {
	try {
		const {
			rows: [editedOrder],
		} = await client.query(
			`
			UPDATE orders
      SET  status = $2
      WHERE  id = $1
      RETURNING *;
      `,
			[id, status]
		);
		return editedOrder;
	} catch (error) {
		throw error;
	}
}

async function destroyOrder(id) {
	try {
		const { rows } = await client.query(
			`
      DELETE from orders
      WHERE id = $1
      RETURNING *;

      `,
			[id]
		);
		return true;
	} catch (error) {
		throw error;
	}
}

async function getOrderbyCreatorId(creator_id) {
	try {
		const {
			rows: [order],
		} = await client.query(
			`
    	SELECT * FROM orders
    	WHERE creator_id=$1;
  		`,
			[creator_id]
		);
		return order;
	} catch (error) {
		throw error;
	}
}

module.exports = { createOrder, editOrder, destroyOrder, getOrderbyCreatorId };
