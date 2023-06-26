export const getOrders = async () => {
	try {
		const response = await fetch(`api/orders`);
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
	getOrders();
};

export const deleteOrder = async () => {
	try {
		const response = await fetch(`api/orders`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		console.log("Result from Delete", result);
		return result;
	} catch (error) {
		console.error(error);
	}
	deleteOrder();
};
