export async function getOrders() {
	try {
		const response = await fetch(`api/orders`);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}

export async function getOrderByCreatorId(creator_id) {
	try {
		const response = await fetch(`api/orders/${creator_id}`);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}
export async function createOrder(creator_id, status) {
	try {
		const resp = await fetch(`/api/orders`, {
			method: "POST",
			body: JSON.stringify({
				creator_id,
				status,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result;
	} catch (err) {
		console.error(err);
	}
}

export async function editOrder(creator_id, status) {
	try {
		const resp = await fetch(`/api/orders/creator_id`, {
			method: "PATCH",
			body: JSON.stringify({
				creator_id,
				status,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result;
	} catch (err) {
		console.error(err);
	}
}

export async function deleteOrder() {
	try {
		const response = await fetch(`api/orders`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}
