const { Client } = require("pg");

const dbName = process.env.DATABASE_NAME || `grace-shopper`;

const client = new Client({
  connectionString: process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
});

module.exports = client;
