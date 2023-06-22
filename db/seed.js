const { removeAllItemsFromOrder, addItemToOrder } = require("./adapters/orderItems");
const { createOrders } = require("./adapters/orders");
const { createProduct } = require("./adapters/products");
const { createUser } = require("./adapters/users");
const client = require("./client");
const { users, orders, products, orderItems } = require("./seedData");

async function dropTables() {
  try {
    await client.query(
      `
	  DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS products; 
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS order_items;
	  `
    );
  } catch (error) {
    console.error(error);
  }
}

async function createTables() {
  try {
    await client.query(`CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL DEFAULT 'user'
    );`);

    await client.query(`CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        stock INTEGER NOT NULL
      );`);

    await client.query(`CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        creator_id INTEGER NOT NULL,
        status VARCHAR(255) NOT NULL
      );`);

    await client.query(`CREATE TABLE order_items (
        id SERIAL PRIMARY KEY,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL
      );`);
  } catch (error) {
    console.log(error);
  }
}

async function populateTables() {
  console.log("Populating tables...");
  try {
    for (const user of users) {
      await createUser(user.username, user.password);
    }
    for (const product of products) {
      await createProduct(product.name, product.price, product.description, product.stock);
    }
    for (const order of orders) {
      await createOrders(order.creator_id, order.status);
    }
    for (const order_item of orderItems) {
      await addItemToOrder(order_item.order_id, order_item.product_id);
    }
  } catch (error) {
    console.error(error);
  }
}

async function rebuildDb() {
  client.connect();
  try {
    console.log("Dropping Tables...");
    await dropTables();
    console.log("Tables Dropped");
    console.log("Creating Tables...");
    await createTables();
    console.log("Tables Created");
    console.log("Populating Tables...");
    await populateTables();
    console.log("Tables Populated");
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDb();
