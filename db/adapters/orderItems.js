const client = require("../client");

async function getAllItemsFromOrder(order_id) {
  try {
    const { rows } = await client.query(
      `
        SELECT * FROM order_items
        WHERE order_id=$1;
      `,
      [order_id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addItemsToOrder(order_id, product_ids) {
  try {
    const queryVars = product_ids;
    queryVars.unshift(order_id);
    console.log(queryVars);

    let queryValues = [];
    for (let i = 2; i < product_ids.length + 1; i++) {
      queryValues.push(`($1, $${i})`);
    }
    queryValues[queryValues.length - 1] = `${
      queryValues[queryValues.length - 1]
    };`;
    queryValues = queryValues.join(", ");
    console.log(`		    INSERT INTO order_items(order_id, product_id)
    VALUES ${queryValues}
    RETURNING *;`);

    const {
      rows: [orderItems],
    } = await client.query(
      `
		    INSERT INTO order_items(order_id, product_id)
		    VALUES ${queryValues}
		  `,
      queryVars
    );
    return orderItems;
  } catch (error) {
    throw error;
  }
}

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

// Do you want to return the deleted item????
async function removeItemFromOrder(order_id, product_id) {
  try {
    await client.query(
      `
      DELETE FROM order_items
      WHERE order_id = $1 AND product_id = $2;
      `,
      [order_id, product_id]
    );
    return true;
  } catch (error) {
    throw error;
  }
}

async function removeAllItemsFromOrder(order_id) {
  try {
    await client.query(
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

module.exports = {
  getAllItemsFromOrder,
  addItemToOrder,
  addItemsToOrder,
  removeItemFromOrder,
  removeAllItemsFromOrder,
};
