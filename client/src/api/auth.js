export async function login(username, password) {
	try {
		const resp = await fetch(`/api/auth/login`, {
			method: "POST",
			body: {
				username,
				password,
			},
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

export async function register(username, password) {
	try {
		const resp = await fetch(`/api/auth/register`, {
			method: "POST",
			body: {
				username,
				password,
			},
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

export async function logout() {
	try {
		const resp = await fetch(`/api/auth/logout`, {
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
