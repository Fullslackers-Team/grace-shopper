const client = require("../client");

async function createOrders(creator_id, status) {
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
      		RETURNING *;`,
      [id, status]
    );
    return editedOrder;
  } catch (error) {
    throw error;
  }
}

async function destroyOrder(id, status) {
  try {
    const {
      rows: [destroyedOrder],
    } = await client.query(
      `DELETE from orders
          WHERE id = $1
          `,
      [id, status]
    );
    return destroyedOrder;
  } catch (error) {
    throw error;
  }
}

module.exports = { createOrders, editOrder, destroyOrder };
