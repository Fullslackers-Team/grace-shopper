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

module.exports = { createOrders };
