export async function loginGuest(userId) {
	try {
		const resp = await fetch(`/api/auth/guest/${userId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result;
	} catch (error) {
		const result = await error.json();
		console.error(result);
	}
}

export async function login(username, password) {
	try {
		const resp = await fetch(`/api/auth/login`, {
			method: "POST",
			body: JSON.stringify({
				username,
				password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		return result;
	} catch (error) {
		const result = await error.json();
		console.error(result);
	}
}

export async function register(guest, username, password) {
	try {
		const resp = await fetch(`/api/auth/register`, {
			method: "POST",

			body: JSON.stringify(
				guest
					? {
							username: "guest",
							password: null,
							guest: true,
					  }
					: {
							username,
							password,
							guest: false,
					  }
			),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await resp.json();
		console.log(result);
		return result;
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
