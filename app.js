// display rating function
function displayRating(rating) {
  let stars;
  if (rating <= 0.9) {
    stars = `  <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating === 1) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating === 2) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating === 3) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating === 4) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating === 5) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>`;
    return stars;
  } else if (rating <= 1.9) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating <= 2.9) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating <= 3.9) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>`;
    return stars;
  } else if (rating <= 4.999) {
    stars = ` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>`;
    return stars;
  }
}

// display rating
let a = displayRating(5);

let productInner = document.querySelector(".product-inner");

const data = [
  {
    title: "Organic Vegetables",
    description:
      "A variety of fresh, organic vegetables directly from the farm.",
    price: 3.99,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E=",
  },
  {
    title: "Freshly Washed Veggies",
    description: "Clean and fresh vegetables ready for cooking.",
    price: 5.99,
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/183416989/photo/washing-vegetables.jpg?s=612x612&w=0&k=20&c=M8n6DFs12wPryk3t6DATJpQZ_e9u9dYlF_74sVDqy5U=",
  },
  {
    title: "Farm Market Produce",
    description: "Fresh produce sourced from local farms and markets.",
    price: 6.49,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/935302158/photo/fresh-vegetables-at-a-market-in-india.jpg?s=612x612&w=0&k=20&c=3Pgxxcgv6so68Geax-Txa5Qvb2a5MIKR1ZH_Pq0x3f8=",
  },
  {
    title: "Mixed Veggie Basket",
    description: "A perfect mix of vegetables for your daily cooking.",
    price: 4.99,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/1214565321/photo/mix-veg-sabji-or-sabzi.jpg?s=612x612&w=0&k=20&c=s1WWma5v0raBXyykCn0YiOwIE05Gk3JKvIbIG1JOyss=",
  },
  {
    title: "Healthy Salad Bowl",
    description: "Freshly made, nutrient-rich salad with organic vegetables.",
    price: 8.99,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/491377819/photo/smiling-woman-with-kitchen-apron-and-eating-salad.jpg?s=612x612&w=0&k=20&c=cRIWsys4fVKtnN-clUQZBA6cVAuzrQZbZDe1j4JiQL0=",
  },
  {
    title: "Fruit and Veggie Market",
    description: "An assortment of fresh fruits and vegetables.",
    price: 7.89,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/188081154/photo/fruit-market-with-various-colorful-fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=ULTr8MB_lt5ZNAE7_ykEG4F0KuDikISvOiPqqc19k64=",
  },
  {
    title: "Garden-Fresh Produce",
    description: "Organic fruits and vegetables straight from the garden.",
    price: 9.49,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=612x612&w=0&k=20&c=KoF5Ue-g3wO3vXPgLw9e2Qzf498Yow7WGXMSCNz7O60=",
  },
  {
    title: "Fresh Cauliflower",
    description: "Crisp, organic cauliflower perfect for any recipe.",
    price: 2.99,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/186828790/photo/cauliflower-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=oLL9OeCwhHolL-MqXb3CZEkL0NyE483_vEqm3Tj0Lzo=",
  },
  {
    title: "Colorful Fruit Mix",
    description: "A rainbow assortment of fresh fruits to boost your diet.",
    price: 11.99,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/641809790/photo/fresh-colorful-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=_uhMbnZ6h10dbu--7lfazAlyeMVcW3Cz7FCaLsTXCsM=",
  },
  {
    title: "Seasonal Veggie Box",
    description: "A curated box of seasonal vegetables handpicked from farms.",
    price: 14.99,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/1524823226/photo/colorful-raw-fruits-and-vegetables-varied-vegan-food-vivid-rainbow-arrangement.webp?a=1&b=1&s=612x612&w=0&k=20&c=9hGA8exwJfDRlnS7inY0Z_nwmpRm9JgK5OwOw79JAGA=",
  },
  {
    title: "Traditional Bitter Gourd",
    description:
      "Green and organic bitter gourd, known for its health benefits.",
    price: 3.59,
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM=",
  },
  {
    title: "Indian Vegetable Mix",
    description: "A combination of fresh vegetables, great for Indian curries.",
    price: 6.79,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg=",
  },
  {
    title: "Hearty Avocados",
    description: "Rich and creamy organic avocados, perfect for salads.",
    price: 9.99,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/2162394061/photo/avocados-in-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=ROy1Tm8ZnEipRgCcTInQzCsB51D8Vi4CSVCBWuog2i0=",
  },
  {
    title: "Organic Herbs Pack",
    description: "A mix of flavorful organic herbs for seasoning your meals.",
    price: 5.99,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg=",
  },
  {
    title: "Natural Veggie Platter",
    description: "A collection of freshly harvested vegetables.",
    price: 7.49,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM=",
  },
  {
    title: "Natural Lemon Pack",
    description: "Fresh and juicy organic lemons perfect for making lemonade.",
    price: 2.49,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E=",
  },
  {
    title: "Sweet Mangoes",
    description: "Delicious, naturally ripened mangoes bursting with flavor.",
    price: 12.99,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E=",
  },
  {
    title: "Carrot Bunch",
    description: "Freshly harvested carrots rich in vitamins and minerals.",
    price: 2.99,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/935302158/photo/fresh-vegetables-at-a-market-in-india.jpg?s=612x612&w=0&k=20&c=3Pgxxcgv6so68Geax-Txa5Qvb2a5MIKR1ZH_Pq0x3f8=",
  },
  {
    title: "Ripe Papayas",
    description: "Sweet and nutritious papayas picked at peak ripeness.",
    price: 4.89,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/183416989/photo/washing-vegetables.jpg?s=612x612&w=0&k=20&c=M8n6DFs12wPryk3t6DATJpQZ_e9u9dYlF_74sVDqy5U=",
  },
  {
    title: "Fresh Bananas",
    description: "Organic bananas perfect for snacking or baking.",
    price: 1.99,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/935302158/photo/fresh-vegetables-at-a-market-in-india.jpg?s=612x612&w=0&k=20&c=3Pgxxcgv6so68Geax-Txa5Qvb2a5MIKR1ZH_Pq0x3f8=",
  },
  {
    title: "Organic Spinach",
    description: "Fresh organic spinach leaves loaded with nutrients.",
    price: 3.29,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=612x612&w=0&k=20&c=KoF5Ue-g3wO3vXPgLw9e2Qzf498Yow7WGXMSCNz7O60=",
  },
  {
    title: "Farm Fresh Eggs",
    description: "Organic free-range eggs, fresh from the farm.",
    price: 5.49,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/186828790/photo/cauliflower-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=oLL9OeCwhHolL-MqXb3CZEkL0NyE483_vEqm3Tj0Lzo=",
  },
  {
    title: "Organic Pumpkin",
    description: "A large, naturally grown pumpkin for soups and pies.",
    price: 4.99,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E=",
  },
  {
    title: "Fresh Green Beans",
    description: "Crisp and tender green beans, perfect for any meal.",
    price: 2.79,
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg=",
  },
  {
    title: "Zucchini Baskets",
    description:
      "Organic zucchinis, freshly picked and ready for grilling or baking.",
    price: 3.49,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg=",
  },
  {
    "title": "Organic Broccoli",
    "description": "Fresh, nutrient-rich organic broccoli, perfect for steaming or roasting.",
    "price": 3.99,
    "rating": 4.8,
    "image": "https://media.istockphoto.com/id/491377819/photo/smiling-woman-with-kitchen-apron-and-eating-salad.jpg?s=612x612&w=0&k=20&c=cRIWsys4fVKtnN-clUQZBA6cVAuzrQZbZDe1j4JiQL0="
  },
  {
    "title": "Organic Sweet Potatoes",
    "description": "Rich in fiber and vitamins, perfect for baking or mashing.",
    "price": 2.99,
    "rating": 4.7,
    "image": "https://media.istockphoto.com/id/188081154/photo/fruit-market-with-various-colorful-fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=ULTr8MB_lt5ZNAE7_ykEG4F0KuDikISvOiPqqc19k64="
  },
  {
    "title": "Green Bell Peppers",
    "description": "Fresh, crisp green bell peppers ideal for salads and stir-fries.",
    "price": 1.79,
    "rating": 4.5,
    "image": "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=612x612&w=0&k=20&c=KoF5Ue-g3wO3vXPgLw9e2Qzf498Yow7WGXMSCNz7O60="
  },
  {
    "title": "Organic Avocados",
    "description": "Creamy organic avocados, great for guacamole or toast.",
    "price": 6.49,
    "rating": 4.9,
    "image": "https://media.istockphoto.com/id/2162394061/photo/avocados-in-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=ROy1Tm8ZnEipRgCcTInQzCsB51D8Vi4CSVCBWuog2i0="
  },
  {
    "title": "Fresh Pineapple",
    "description": "Sweet and tangy pineapple, perfect for smoothies or desserts.",
    "price": 4.29,
    "rating": 4.8,
    "image": "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg="
  },
  {
    "title": "Mixed Herb Pack",
    "description": "A mix of organic herbs including basil, cilantro, and parsley.",
    "price": 2.59,
    "rating": 4.7,
    "image": "https://media.istockphoto.com/id/540107022/photo/vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=U2mF77zJS0TfsTpHkS-2bZUOIueo4GoIoM04ZHNgASg="
  },
  {
    "title": "Farm Fresh Eggs (12 Pack)",
    "description": "Organic eggs from free-range hens, rich in flavor and nutrients.",
    "price": 3.79,
    "rating": 4.9,
    "image": "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM="
  },
  {
    "title": "Juicy Strawberries",
    "description": "Naturally sweet and juicy strawberries, perfect for desserts.",
    "price": 5.49,
    "rating": 4.6,
    "image": "https://media.istockphoto.com/id/1219614606/photo/washing-vegetables-in-kitchen.jpg?s=612x612&w=0&k=20&c=CZ4OzyG1Y6hXqYRSulzxdKhg-9W3lVyhfVidaW3TxKk="
  },
  {
    "title": "Fresh Ginger Root",
    "description": "Spicy and aromatic ginger root, ideal for cooking or teas.",
    "price": 1.99,
    "rating": 4.5,
    "image": "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=612x612&w=0&k=20&c=KoF5Ue-g3wO3vXPgLw9e2Qzf498Yow7WGXMSCNz7O60="
  },
  {
    "title": "Farm Fresh Milk",
    "description": "Organic whole milk from grass-fed cows, fresh and creamy.",
    "price": 4.99,
    "rating": 4.8,
    "image": "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg="
  },
  {
    "title": "Whole Wheat Bread",
    "description": "Freshly baked whole wheat bread, rich in fiber and nutrients.",
    "price": 3.49,
    "rating": 4.6,
    "image": "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E="
  },
  {
    "title": "Organic Blueberries",
    "description": "Fresh, antioxidant-rich blueberries, perfect for snacking or baking.",
    "price": 4.99,
    "rating": 4.9,
    "image": "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E="
  },
  {
    "title": "Free-Range Chicken Breast",
    "description": "Juicy and tender free-range chicken breast, rich in protein.",
    "price": 7.99,
    "rating": 4.8,
    "image": "https://media.istockphoto.com/id/491377819/photo/smiling-woman-with-kitchen-apron-and-eating-salad.jpg?s=612x612&w=0&k=20&c=cRIWsys4fVKtnN-clUQZBA6cVAuzrQZbZDe1j4JiQL0="
  },
  {
    "title": "Raw Almonds",
    "description": "Crunchy and healthy raw almonds, full of nutrients and fiber.",
    "price": 9.49,
    "rating": 4.7,
    "image": "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E="
  },
  {
    "title": "Fresh Coconut Water",
    "description": "Refreshing and hydrating coconut water, rich in electrolytes.",
    "price": 2.99,
    "rating": 4.8,
    "image": "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM="
  },
  {
    "title": "Sweet Corn",
    "description": "Freshly harvested sweet corn, perfect for grilling or boiling.",
    "price": 1.99,
    "rating": 4.7,
    "image": "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=612x612&w=0&k=20&c=KoF5Ue-g3wO3vXPgLw9e2Qzf498Yow7WGXMSCNz7O60="
  },
  {
    "title": "Raw Honey",
    "description": "100% pure raw honey, harvested from local farms.",
    "price": 7.99,
    "rating": 4.9,
    "image": "https://media.istockphoto.com/id/540107022/photo/vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=U2mF77zJS0TfsTpHkS-2bZUOIueo4GoIoM04ZHNgASg="
  },
  {
    "title": "Organic Kale",
    "description": "Fresh organic kale, rich in antioxidants and vitamins.",
    "price": 3.99,
    "rating": 4.6,
    "image": "https://media.istockphoto.com/id/491377819/photo/smiling-woman-with-kitchen-apron-and-eating-salad.jpg?s=612x612&w=0&k=20&c=cRIWsys4fVKtnN-clUQZBA6cVAuzrQZbZDe1j4JiQL0="
  },
  {
    "title": "Fresh Apples",
    "description": "Crisp and juicy apples, great for snacking or baking.",
    "price": 2.49,
    "rating": 4.8,
    "image": "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg="
  },
  {
    "title": "Organic Pears",
    "description": "Sweet and juicy organic pears, rich in fiber and vitamins.",
    "price": 3.29,
    "rating": 4.7,
    "image": "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM="
  },
  {
    "title": "Butternut Squash",
    "description": "Sweet and tender butternut squash, perfect for soups and roasting.",
    "price": 4.59,
    "rating": 4.8,
    "image": "https://media.istockphoto.com/id/491377819/photo/smiling-woman-with-kitchen-apron-and-eating-salad.jpg?s=612x612&w=0&k=20&c=cRIWsys4fVKtnN-clUQZBA6cVAuzrQZbZDe1j4JiQL0="
  }
];

async function fetchData() {
  // let responce =await fetch("https://fakestoreapi.com/products");
  // let data=await responce.json();
  data.forEach((arr) => {
    let fontStar = displayRating(arr.rating);
    let productIteam = `            
        <div class="product-iteam">
            <div class="product-img">
                <img src=${arr.image} alt=${arr.title}>
            </div>
            <div class="product-info">
                <h3 class="product-title">${arr.title}</h3>
                <p class="product-description">${arr.description}</p>
                <div class="product-price">
                    <div class="priceing">
                        
                        <div class="price">$ ${arr.price}</div>
                    </div>
                    <div class="heart-icon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
                <div class="rating">
                    <div class="rating-icons">
                       ${fontStar}
                    </div>
                    <span>
                        ${arr.rating}
                    </span>
                </div>
                <div class="btn-card">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>add to card</span>
                </div>
            </div>
        </div>`;
    productInner.insertAdjacentHTML("beforeend", productIteam);
  });
}
fetchData();
