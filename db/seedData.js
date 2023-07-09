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
  {
    name: "Donut Cuddler Bed",
    description: "Calming Shag Fur",
    price: "25",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/145724_MAIN._AC_SL600_V1671734310_.jpg",
    stock: 10,
  },
  {
    name: "Wire Dog Crate",
    description: "Sliding Double Door",
    price: "115",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/217625_MAIN._AC_SL600_V1580827476_.jpg",
    stock: 10,
  },
  {
    name: "KONG Tugga Wubba",
    description: "Extra strong fiber pull and tug toy",
    price: "12",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/53461_MAIN._AC_SL600_V1492195064_.jpg",
    stock: 10,
  },
  {
    name: "Honest Kitchen Dog Food",
    description: "Whole Grain Chicken Recipe",
    price: "78",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/85700_MAIN._AC_SL600_V1657661035_.jpg",
    stock: 10,
  },
  {
    name: "Milk Bone Dog Treat",
    description: "Bone marrow dog treat",
    price: "12",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/99863_MAIN._AC_SL600_V1627422000_.jpg",
    stock: 10,
  },
  {
    name: "Frisco Heavy Duty Cat Tree",
    description: "Frisco Heavy Duty Cat Tree",
    price: "60",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/166719_MAIN._AC_SL600_V1674509894_.jpg",
    stock: 50,
  },
  {
    name: "Dome Cleanstep Litter Box",
    description: "Dome Cleanstep Litter Box",
    price: "37",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/68666_MAIN._AC_SL600_V1565284344_.jpg",
    stock: 50,
  },
  {
    name: "Yeowww! Organic Catnip 2oz Tub",
    description: "Yeowww! Organic Catnip 2oz Tub",
    price: "11",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/catalog/103031._AC_SL600_V1467808857_.jpg",
    stock: 50,
  },
  {
    name: "Frisco Sisal Cat Scratching Post",
    description: "Frisco Sisal Cat Scratching Post",
    price: "17",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/140151_MAIN._AC_SL600_V1674156327_.jpg",
    stock: 50,
  },
  {
    name: "Honest Kitchen Grain Free Chicken Recipe",
    description: "Honest Kitchen Grain Free Chicken Recipe",
    price: "47",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/324313_MAIN._AC_SL600_V1635802909_.jpg",
    stock: 50,
  },
  {
    name: "REPTI ZOO Tank Stand Terrarium",
    description: "REPTI ZOO Tank Stand Terrarium",
    price: "260",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/839670_MAIN._AC_SL600_V1682003172_.jpg",
    stock: 50,
  },
  {
    name: "HerpCult Acrylic Clear-Top Habitat",
    description: "HerpCult Acrylic Clear-Top Habitat",
    price: "100",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/294804_MAIN._AC_SL600_V1621029202_.jpg",
    stock: 50,
  },
  {
    name: "Oiibo Full Glass Terrarium 24-gal",
    description: "Oiibo Full Glass Terrarium 24-gal",
    price: "180",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/262856_MAIN._AC_SL600_V1621521433_.jpg",
    stock: 50,
  },
  {
    name: "REPTI ZOO Tempered Glass Terrarium",
    description: "REPTI ZOO Tempered Glass Terrarium",
    price: "190",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/697614_MAIN._AC_SL600_V1667406002_.jpg",
    stock: 50,
  },
  {
    name: "New Age Pet ECOPLEX Mojave Habitat",
    description: "New Age Pet ECOPLEX Mojave Habitat",
    price: "310",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/242180_MAIN._AC_SL600_V1619204278_.jpg",
    stock: 50,
  },
];

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
