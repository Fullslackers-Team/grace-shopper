const usersRoute = require("express").Router();
const { getUserByUsername } = require("../db/adapters/users");
const { getAllProducts } = require("../db/adapters/products");

module.exports = usersRoute;
