const client = require("../client");

async function createProduct(name, price, description, stock) {
  try {
    const {
      rows: [products],
    } = await client.query(
      `
            INSERT INTO products(name, price, description, stock)
            VALUES($1, $2, $3, $4)
            ON CONFLICT (name) DO NOTHING
            RETURNING *;
        `,
      [name, price, description, stock]
    );
    return products;
  } catch (error) {
    throw error;
  }
}

async function updateProduct(name, price, description, stock, id) {
  try {
    const {
      rows: [updateProduct],
    } = await client.query(
      `
        UPDATE products
        SET name = $2, price = $3, description = $4, stock = $5 
        WHERE  id = $1;
       `,
      [name, price, description, stock, id]
    );
    return updateProduct;
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    const { rows } = await client.query(
      `
            SELECT *
            FROM products;
            `
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getProductById(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM products
          WHERE id=$1;
          `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function destroyProduct(id) {
  try {
    await client.query(
      `
        DELETE FROM products
        WHERE id= $1;
        `,
      [id]
    );
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  destroyProduct,
};
