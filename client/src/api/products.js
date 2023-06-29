export async function getProduct(id) {
	try {
		const resp = await fetch(`/api/products/${id}`, {
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

export async function getAllProducts() {
	try {
		const resp = await fetch(`/api/products`, {
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

export async function createProduct(id) {
	try {
		const resp = await fetch(`/api/products/${id}`, {
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

export async function updateProduct(id) {
	try {
		const resp = await fetch(`/api/products/${id}`, {
			method: "PATCH",
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

export async function destroyProduct(id) {
	try {
		const resp = await fetch(`/api/products/${id}`, {
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
