const users = [
	{ username: "Brandon", password: "1234" },
	{ username: "Rian", password: "12345" },
	{ username: "Maggie", password: "123456" },
	{ username: "Ali", password: "1234567" },
	{ username: "Chris", password: "123456789" },
	{ username: "Pawan", password: "1234567891" },
	{ username: "Collin", password: "1234567892" },
];

const products = [
	{
		name: "chew toy",
		description: "made of rubber, squeeks",
		price: "5",
		rating: 4,
		img_url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04N3mRhvfBzlBm3a0lbZDEwO1cmZaM5RTzKzQC6yblqDmnSZJ5E4KgspoU_2WLexB8MY&usqp=CAU",
		stock: 50,
	},
	{
		name: "Pet Amor",
		description: "flea and ticket shampoo",
		price: "7.99",
		rating: 1,
		img_url: "https://m.media-amazon.com/images/I/71W1uHpWZWL.jpg",
		stock: 10,
	},
	{
		name: "Science Diet",
		description: "dry kibble",
		price: "65",
		rating: 2,
		img_url:
			"https://m.media-amazon.com/images/I/71NIQZcRxzL._AC_UF1000,1000_QL80_.jpg",
		stock: 5,
	},
	{
		name: "Kong Ultra Strong",
		description: "double door wired crate",
		price: "100",
		rating: 5,
		img_url:
			"https://hawthornpetsupplies.co.uk/wp-content/uploads/2017/03/245834_d4600d552429432682395cdcf5cc21cc.jpg",
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
	{ order_id: 3, product_id: 2 },
	{ order_id: 3, product_id: 3 },
];

module.exports = { users, products, orders, orderItems };
