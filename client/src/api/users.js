export async function getUser() {
  try {
    const resp = await fetch(`/api/users/me`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await resp.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
