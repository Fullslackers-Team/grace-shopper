const { createOrders } = require("./adatapters/orders");
const { createUser } = require("./adatapters/users");
const client = require("./client");
const { users, orders } = require("./seedData");

async function dropTables() {
	console.log("Dropping tables...");
	try {
		await client.query(
			`DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS products; 
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS order_items;`
		);
	} catch (error) {
		console.error(error);
	}
}

async function createTables() {
	console.log("Creating tables...");
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
        description VARCHAR(255) UNIQUE NOT NULL,
        price INTEGER NOT NULL,
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
			console.log("users table populated");
		}
		// for (const product of products) {
		// 	await createProduct(product);
		// 	console.log("products table populated");
		// }
		for (const order of orders) {
			await createOrders(order.creator_id, order.status);
			console.log("order table populated");
		}
		// for (const order_item of order_items) {
		// 	await createOrder_items(order_item);
		// 	console.log("order_items table populated");
		// }
	} catch (error) {
		console.error(error);
	}
}

async function rebuildDb() {
	client.connect();
	try {
		console.log("testing github");
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
