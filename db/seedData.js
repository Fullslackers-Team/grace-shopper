const users = [
  { username: "Brandon", password: 1234 },
  { username: "Rian", password: 12345 },
  { username: "Maggie", password: 123456 },
  { username: "Ali", password: 1234567 },
  { username: "Chris", password: 123456789 },
  { username: "Pawan", password: 1234567891 },
  { username: "Collin", password: 1234567892 },
];

const products = [
  {
    name: "chew toy",
    description: "made of rubber, squeeks",
    price: 5,
    stock: 50,
  },
  {
    name: "Pet Amor",
    description: "flea and ticket shampoo",
    price: 7.99,
    stock: 10,
  },
  {
    name: "Science Diet",
    description: "dry kibble",
    price: 65,
    stock: 5,
  },
  {
    name: "Kong Ultra Strong",
    description: "double door wired crate",
    price: 100,
    stock: 10,
  },
];

// const productCategories = [{ name: "food" }, { name: "toys" }];

// const petTypes = [];

const orders = [
  { creator_id: 1, status: "shipped" },
  { creator_id: 2, status: "complete" },
  { creator_id: 3, status: "in_cart" },
  { creator_id: 4, status: "complete" },
];

const orderItems = [
  { order_id: 1, product_id: 1 },
  { order_id: 2, product_id: 2 },
  { order_id: 3, product_id: 3 },
  { order_id: 4, product_id: 4 },
];
