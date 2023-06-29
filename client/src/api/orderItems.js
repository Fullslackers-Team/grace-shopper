export async function getOrderItems(orderId) {
	try {
		const resp = await fetch(`/api/order-items/${orderId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result.data;
	} catch (error) {
		console.error(error);
	}
}

export async function addProductToOrder(orderId, productId) {
	try {
		const resp = await fetch(`/api/order-items/${orderId}/${productId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result.data;
	} catch (error) {
		console.error(error);
	}
}

export async function removeProductFromOrder(orderId, productId) {
	try {
		const resp = await fetch(`/api/order-items/product/${orderId}/${productId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result.data;
	} catch (error) {
		console.error(error);
	}
}

export async function removeAllProductsFromOrder(orderId) {
	try {
		const resp = await fetch(`/api/order-items/all/${orderId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result.data;
	} catch (error) {
		console.error(error);
	}
}
