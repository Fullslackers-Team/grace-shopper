const client = require("./client");
const { users, orders, products, orderItems } = require("./seedData");
const { addItemToOrder } = require("./adapters/orderItems");
const { createOrder } = require("./adapters/orders");
const { createProduct } = require("./adapters/products");
const { createUser } = require("./adapters/users");

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
      username VARCHAR(255),
      password VARCHAR(255),
      role VARCHAR(255) NOT NULL DEFAULT 'user'
	  );
	  CREATE UNIQUE INDEX allow_guests_users_username ON users(username)
		WHERE username <> 'guest';
	`);

		await client.query(`CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description VARCHAR(900) NOT NULL,
        img_url VARCHAR(255) NOT NULL,
        price NUMERIC NOT NULL,
        rating NUMERIC NOT NULL,
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
			await createUser(false, user.username, user.password);
		}
		for (const product of products) {
			await createProduct(product.name, product.price, product.description, product.stock, product.img_url, product.rating);
		}
		// for (const order of orders) {
		//   await createOrder(order.creator_id, order.status);
		// }
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
