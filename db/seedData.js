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
    name: "Blue Buffalo Life Protection",
    description:
      "Blue Buffalo Life Protection Formula was created for the holistic health and well-being of adult dogs. All formulas start with real meat, whole grains, garden veggies and fruit, plus added LifeSource Bits, a precise blend of nutrients that have been enhanced with a Super 7 package of antioxidant-rich ingredients. This Adult Chicken & Brown Rice Recipe features delicious, protein-rich deboned chicken and other natural ingredients for a healthy meal your dog will love.",
    price: "60.99",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/46861_MAIN._AC_SL600_V1636150598_.jpg",
    stock: 50,
  },
  {
    name: "Seresto Flea & Tick Collar",
    description:
      "With its innovative delivery system, these tick collars offer a breakthrough in tick and flea control for your petite pooch and your furry feline. You will receive the Seresto Flea & Tick Collar for Dogs, up to 18-lbs + Flea & Tick Collar for Cats, both of which are veterinarian recommended treatments to repel and kill fleas on contact. Inside the unique polymer matrix of this easy-to-use, non-greasy, odorless collar are two active ingredients: imidacloprid to control flea infestations, and flumethrin to repel and kill ticks, larvae and nymphs. These ingredients work together to provide dual-action protection against parasitic pests for up to eight months!",
    price: "129.16",
    rating: 1,
    img_url:
      "https://image.chewy.com/is/image/catalog/293840_MAIN._AC_SL600_V1662160171_.jpg",
    stock: 10,
  },
  {
    name: "Science Diet",
    description:
      "Give your furry friend breakthrough weight management nutrition by feeding him Hill Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food! This yummy recipe is crafted with protein from real chicken to support lean muscle maintenance. It is specifically designed for adult dogs who need to be mindful of their weight. You will love knowing that it is backed by decades of cutting-edge research, and your dog will love the way every bite tastes!",
    price: "85.99",
    rating: 2,
    img_url:
      "https://image.chewy.com/is/image/catalog/794870_MAIN._AC_SL600_V1679493087_.jpg",
    stock: 5,
  },
  {
    name: "Seat Cover & Hammock",
    description:
      "Set yourself up for a paws-itive car ride with the KONG 2-In-1 Bench Seat Cover & Dog Hammock. It converts from a hammock to a simple seat cover so you can choose how to make your pooch comfortable and keep your car clean. Quilted, waterproof fabric helps keep your seats free from dirt, slobber and dog hair. The mesh window design allows for plenty of airflow and gives you a view of him as he lounges in the back seat. Plus, installation is a snap with six anchor points and adjustable straps for a snug fit.",
    price: "62.99",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/194866_MAIN._AC_SL600_V1570129953_.jpg",
    stock: 10,
  },
  {
    name: "Donut Cuddler Bed",
    description:
      "Help your furry friend get the restful sleep she deserves with this Luxury Shag Donut Self-Heating pet bed. The round design creates a protective atmosphere, while the bolstered edge gives additional orthopedic support and serves as a paw-sitively purr-fect headrest. Unique insulation layer radiates warmth from your pets own body heat. It is machine washable, dryer-safe and comes in a soft faux-shag material that will keep your pal warm, cozy and comforted.",
    price: "26.24",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/145724_MAIN._AC_SL600_V1671734310_.jpg",
    stock: 10,
  },
  {
    name: "Wire Dog Crate",
    description:
      "Give your pupper his own paw-fect little home with the Lucky Dog Sliding Double Door Dog Crate. You will appreciate having a place to keep your pet safe and secure at home, on the road or while training. The sliding door system is made to give you and your pet easy and instant access to his new home without a door sticking out. Complete with corner stabilizers to prevent rattling, it is designed for optimal convenience. The reinforced and coated panels are built to be rust resistant for long-lasting use. The rubber feet will protect your floors while the leak-proof pan inside is removable for easy cleaning when needed. Your knees and shins will thank you for saving them from many potential bumps and bruises while your doggo is resting comfortably in his new sliding door crate.",
    price: "127.49",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/217625_MAIN._AC_SL600_V1580827476_.jpg",
    stock: 10,
  },
  {
    name: "KONG Tugga Wubba",
    description:
      "The KONG Tugga Wubba is a fun, interactive tug and toss toy made with durable reinforced nylon and tails on both ends for twice the shaking fun. The tails make it easy to pick up, throw or tug for healthy interactive exercise. Tugga Wubba's twisted rope even helps satisfy natural instincts while cleaning teeth.",
    price: "11.99",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/53461_MAIN._AC_SL600_V1492195064_.jpg",
    stock: 10,
  },
  {
    name: "Honest Kitchen Dog Food",
    description:
      "The Honest Kitchen Whole Grain Chicken Recipe Dehydrated Dog Food is crafted with human grade, whole foods to provide your pet with some of the best nutrition possible! This whole grain recipe is formulated with uncompromising quality control standards using real, recognizable ingredients, like free-range chicken, that are gently dehydrated to maintain nutrient and taste. And to meet The Honest Kitchen 100% human-grade standard, the same whole foods you would recognize in your own kitchen are used to make this recipe. Plus, this dog food is made in a human food facility! To serve, simply add warm water and wait three minutes for a tasty, homemade meal your canine companion will go head over tail for!",
    price: "73.22",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/85700_MAIN._AC_SL600_V1657661035_.jpg",
    stock: 10,
  },
  {
    name: "Milk Bone Dog Treat",
    description:
      "Your little carnivore will roll over for the unique texture and savory taste of Milk-Bone MaroSnacksReal Bone Marrow Dog Treats. The shell on these droolworthy morsels encases a real bone marrow center, so they are crunchy on the outside and meaty on the inside. Plus, they are made with calcium and use only natural ingredients as sources of color. Best yet, these biscuits are baked with love in the USA.",
    price: "10.99",
    rating: 5,
    img_url:
      "https://image.chewy.com/is/image/catalog/99863_MAIN._AC_SL600_V1627422000_.jpg",
    stock: 10,
  },
  {
    name: "Frisco Heavy Duty Cat Tree",
    description:
      "Your kitty is going places with this cat tree from Frisco by Chewy! There is a perch to lounge on, a penthouse bed for catching Zs, a cozy private condo, and a toy to swat and bat. Oh, and there is plenty of scratching room with three scratching posts that are fully wrapped with sisal rope. Sisal rope has the scratchable texture cats love because it feels a lot like scratching on tree bark, a feline favorite. Scratching is essential to keeping claws healthy and it feels good for kitties, too. The private condo is the perfect hangout spot for when your kitty wants some quiet time. That pretty much covers all the purr necessities—scratching, lounging, napping and playing. The double-layered baseboard provides extra stability as they scratch the posts and jump on and off, and it is sturdy enough for larger kitties.",
    price: "59.23",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/166719_MAIN._AC_SL600_V1674509894_.jpg",
    stock: 50,
  },
  {
    name: "Dome Cleanstep Litter Box",
    description:
      "Petmate's Cleanstep litter box offers a sleek, step design to catch litter from your cat's paws and a hooded top to ensure privacy for private moments. Features an enclosed design to contain litter scatter and large filter to minimize unwanted odors.",
    price: "57.99",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/68666_MAIN._AC_SL600_V1565284344_.jpg",
    stock: 50,
  },
  {
    name: "Yeowww! Organic Catnip",
    description:
      "No cat day is complete without a pinch of Yeowww! Organic Catnip. This is not just any catnip — it comes from farmers that harvest the best organically grown catnip around. This high-quality signature blend contains just leaves and flower tops for the most effective catnip. It is superior to your everyday catnip in terms of freshness, color and aroma. No chemicals or pesticides are used in cultivation, which means Yeowww! catnip is completely safe for cats and humans. Sprinkle a little on your kittys favorite scratcher or use it to stuff your own handmade toys.",
    price: "10.99",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/catalog/103031._AC_SL600_V1467808857_.jpg",
    stock: 50,
  },
  {
    name: "Frisco Scratching Post",
    description:
      "There is nothing prickly about this cactus cat scratching post from Frisco by Chewy! This tri-post, sisal-wrapped design stands up to the power of playtime, and the stable, double-layer baseboard allows your cactus kitty to stretch, paw and scratch all day with total support. The top and bottom of the cactus feature a plush, moppy fabric material that feels great for cats to nuzzle. This fun cactus shape with bright pink blossoms adds a cute design element to your home, plus it is super easy to assemble.",
    price: "52.60",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/252548_MAIN._AC_SL600_V1660408308_.jpg",
    stock: 50,
  },
  {
    name: "Honest Kitchen Cat Food",
    description:
      "Treat your little hunter to purr-fect nutrition and flavor with The Honest Kitchen Dehydrated Grain Free Chicken Cat Food. The Honest Kitchen believes human-grade whole foods provide pets the best nutrition possible. This grain free chicken recipe is made with real whole food ingredients that are gently dehydrated to maintain nutrients and taste. Just add warm water and wait three minutes for a tasty, homemade meal that you and your cat will love!",
    price: "46.95",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/324313_MAIN._AC_SL600_V1635802909_.jpg",
    stock: 50,
  },
  {
    name: "REPTI ZOO Tank Stand",
    description:
      "Give your scaly friends a comfortable place to breed with REPTIZOO Tank Stand Terrarium w/Breeding Boxes Reptile Cabinet! This two-tier terrarium cabinet is an ideal place to store breeding boxes or pet supplies. This space-saving cabinet comes with a plastic breeding box that you can easily and smoothly pull out to perform maintenance. Equipped with two universal braking wheels, you can move it around at your convenience. Suitable for most terrariums, this practical and beautiful stand is easy to assemble.",
    price: "260",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/839670_MAIN._AC_SL600_V1682003172_.jpg",
    stock: 50,
  },
  {
    name: "HerpCult Acrylic Habitat",
    description:
      "The HerpCult Acrylic Clear-Top Reptile Habitat is a convenient and sturdy home for your reptile pals. The transparent sides and top mean you can easily keep an eye on your pets, while the stackable design saves space. The sliding, one-click closure with strong magnetic snaps make it a snap to access your reptiles and keep them secure. Ventilation holes on both sides offer ample airflow so your reptiles feel comfortable in their home sweet home.",
    price: "100",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/294804_MAIN._AC_SL600_V1621029202_.jpg",
    stock: 50,
  },
  {
    name: "Oiibo Full Glass Terrarium",
    description:
      "House your reptilian or amphibian friends in comfort and style with OiiBO Full Glass Front Opening Reptile Tank Terrarium! This sturdy, hygienic setup is easy to clean with its removable screen cover which provides your pals with plenty of ventilation while allowing light to permeate through. Plus, the screen has specialized inlets for tubing and wiring, so you can customize your terrarium as needed. The front doors open independently and lock for added safety—additionally, the doors are watertight, so you can have a pool for your more aquatically inclined pals. The raised bottom has plenty of space for a substrate heater as well. This insulating, glass setup is ideal for keeping your little buddies safe, warm, and moist!",
    price: "180",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/262856_MAIN._AC_SL600_V1621521433_.jpg",
    stock: 50,
  },
  {
    name: "REPTI ZOO Tempered Glass",
    description:
      "Give your scaly sidekick the kicking crib they have always wanted with the Tempered Glass Front Opening with Double Hinge Door Terrarium from REPTI ZOO! Featuring a removable full screen top, this spacious terrarium allows for both UVB and infrared penetration to help keep your pet reptile or amphibian feeling their best. It includes dual front-opening doors for easy access, but its special locking mechanisms make sure access is never too easy for children and pets. And thanks to its watertight design, you can add a small pool or natural water feature to delight the amphibian in your life.",
    price: "190",
    rating: 4,
    img_url:
      "https://image.chewy.com/is/image/catalog/697614_MAIN._AC_SL600_V1667406002_.jpg",
    stock: 50,
  },
  {
    name: "ECOPLEX Mojave Habitat",
    description:
      "Your scaly sidekick is going to love hanging out in this New Age Pet ECOFLEX Mojave Reptile Lounge. Designed with front sliding glass doors and a large, mesh screen top, you will be able to easily access your pet, clean and use most UV and heat lamp set-ups. It also has vented side panels to ensure your reptile gets plenty of air and ventilation. It is made with ECOFLEX, a proprietary composite blend of reclaimed wood fiber byproducts and recycled polymers, creating a moisture-resistant material that is durable, does not retain odor and is easy to clean! This lounge habitat can be used indoors or outdoors.",
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
