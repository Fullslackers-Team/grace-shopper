const client = require("../client");

async function addItemToOrder(order_id, product_id) {
  try {
    const {
      rows: [orderItem],
    } = await client.query(
      `
        INSERT INTO order_items(order_id, product_id)
        VALUES($1,$2)
        RETURNING *;
      `,
      [order_id, product_id]
    );
    return orderItem;
  } catch (error) {
    throw error;
  }
}

async function removeItemFromOrder(order_id, product_id) {
  try {
    const resp = await client.query(
      `
      SELECT * FROM order_items;
      `
    );
    console.log(resp);
    // const resp = await client.query(
    //   `
    //   DELETE FROM order_items
    //   WHERE order_id = $1 AND product_id = $2;
    //   `,
    //   [order_id, product_id]
    // );
    return true;
  } catch (error) {
    throw error;
  }
}

async function removeAllItemsFromOrder(order_id) {
  try {
    const resp = await client.query(
      `
        DELETE FROM order_items
        WHERE order_id = $1;
      `,
      [order_id]
    );
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = { addItemToOrder, removeItemFromOrder, removeAllItemsFromOrder };
