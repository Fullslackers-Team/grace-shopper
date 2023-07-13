const client = require("../client");

const bcrypt = require("bcrypt");
const saltRounds = 10;

async function createUser(guest, username, password) {
	try {
		const hashedPassword = bcrypt.hashSync(guest ? "123" : password, saltRounds);
		const {
			rows: [user],
		} = await client.query(
			`
        INSERT INTO users("username", "password", "role") 
        VALUES($1, $2, $3) 
        RETURNING *;
      `,
			guest ? ["guest", null, "guest"] : [username, hashedPassword, "user"]
		);

		const {
			rows: [order],
		} = await client.query(
			`
        INSERT INTO orders(creator_id, status) 
        VALUES($1, $2) 
        RETURNING *;
      `,
			[user.id, "cart"]
		);
		return user;
	} catch (error) {
		throw error;
	}
}

async function authUser(username, password) {
	try {
		const {
			rows: [user],
		} = await client.query(
			`
        SELECT *
        FROM users
        WHERE username=$1;
      `,
			[username]
		);

		const res = bcrypt.compareSync(password, user.password);

		if (res) {
			return user;
		} else {
			return null;
		}
	} catch (error) {
		throw error;
	}
}

async function getUserById(id) {
	try {
		const {
			rows: [user],
		} = await client.query(
			`
        SELECT *
        FROM users
        WHERE id=$1;
      `,
			[id]
		);

		return user;
	} catch (error) {
		throw error;
	}
}

async function getUserByUsername(username) {
	try {
		const {
			rows: [user],
		} = await client.query(
			`
        SELECT *
        FROM users
        WHERE username=$1;
      `,
			[username]
		);

		return user;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createUser,
	authUser,
	getUserById,
	getUserByUsername,
};
