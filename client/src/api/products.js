export default async function createProduct(id) {
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
  
  export default async function updateProduct(id) {
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
  
  export default async function getAllProducts(id) {
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
  
  export default async function destroyProduct(id) {
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
  