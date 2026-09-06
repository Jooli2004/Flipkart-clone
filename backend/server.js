const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Apple iPhone 15",
    price: "₹69,999",
    category: "Mobiles",
    description:
      "Apple iPhone 15 features a powerful A16 Bionic chip, advanced dual camera system, Super Retina XDR display, Dynamic Island and long-lasting battery performance."
  },

  {
    id: 2,
    name: "Samsung Smartphone",
    price: "₹24,999",
    category: "Mobiles",
    description:
      "Samsung Smartphone offers a high-quality display, powerful processor, advanced camera system, smooth performance and a reliable battery for everyday use."
  },

  {
    id: 3,
    name: "OnePlus Smartphone",
    price: "₹29,999",
    category: "Mobiles",
    description:
      "OnePlus Smartphone provides fast performance, a smooth display, high-quality cameras, fast charging technology and a stylish modern design."
  },

  {
    id: 4,
    name: "MacBook Laptop",
    price: "₹89,999",
    category: "Electronics",
    description:
      "MacBook Laptop delivers powerful performance, a premium Retina display, fast processing, excellent battery life and a lightweight premium design."
  },

  {
    id: 5,
    name: "Wireless Headphones",
    price: "₹2,999",
    category: "Electronics",
    description:
      "Wireless Headphones provide clear sound, comfortable ear cushions, Bluetooth connectivity, long battery life and an immersive listening experience."
  },

  {
    id: 6,
    name: "Smart Watch",
    price: "₹3,499",
    category: "Electronics",
    description:
      "Smart Watch helps you track daily activity, steps, heart rate and notifications while offering a stylish design and long battery life."
  },

  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "₹1,999",
    category: "Electronics",
    description:
      "Bluetooth Speaker delivers powerful sound, wireless connectivity, portable design and reliable battery life for music anywhere."
  },

  {
    id: 8,
    name: "DSLR Camera",
    price: "₹45,999",
    category: "Electronics",
    description:
      "DSLR Camera offers high-resolution photography, interchangeable lenses, fast autofocus and professional-level image quality."
  },

  {
    id: 9,
    name: "Running Shoes",
    price: "₹2,499",
    category: "Fashion",
    description:
      "Running Shoes feature lightweight construction, comfortable cushioning, breathable material and strong grip for daily running and workouts."
  },

  {
    id: 10,
    name: "Casual Shoes",
    price: "₹1,999",
    category: "Fashion",
    description:
      "Casual Shoes offer a comfortable fit, stylish appearance, durable material and lightweight design suitable for everyday wear."
  },

  {
    id: 11,
    name: "Men's T-Shirt",
    price: "₹999",
    category: "Fashion",
    description:
      "Men's T-Shirt is made with comfortable fabric and features a stylish design, soft feel and relaxed fit for everyday wear."
  },

  {
    id: 12,
    name: "Women's Handbag",
    price: "₹2,299",
    category: "Fashion",
    description:
      "Women's Handbag features a stylish design, spacious compartments and durable material, making it suitable for daily use and special occasions."
  },

  {
    id: 13,
    name: "Laptop Backpack",
    price: "₹1,499",
    category: "Fashion",
    description:
      "Laptop Backpack provides padded laptop protection, multiple storage compartments, comfortable straps and a durable design."
  },

  {
    id: 14,
    name: "Sunglasses",
    price: "₹1,299",
    category: "Fashion",
    description:
      "Sunglasses feature a stylish frame, comfortable fit and protective lenses, making them suitable for everyday outdoor use."
  },

  {
    id: 15,
    name: "Premium Perfume",
    price: "₹1,799",
    category: "Beauty",
    description:
      "Premium Perfume offers a long-lasting fragrance with a pleasant and refreshing scent, suitable for daily use and special occasions."
  },

  {
    id: 16,
    name: "Skin Care Set",
    price: "₹1,599",
    category: "Beauty",
    description:
      "Skin Care Set includes essential skincare products designed to cleanse, nourish and refresh your skin for a healthy appearance."
  },

  {
    id: 17,
    name: "Modern Sofa",
    price: "₹24,999",
    category: "Home & Furniture",
    description:
      "Modern Sofa features comfortable seating, durable material and a stylish contemporary design that enhances your living room."
  },

  {
    id: 18,
    name: "Office Chair",
    price: "₹6,999",
    category: "Home & Furniture",
    description:
      "Office Chair provides comfortable seating, adjustable features, ergonomic support and a durable design for long working hours."
  },

  {
    id: 19,
    name: "Bajaj Mixer Grinder",
    price: "₹3,999",
    category: "Appliances",
    description:
      "Bajaj Mixer Grinder features a powerful motor, durable jars and efficient grinding performance for preparing everyday food and drinks."
  },

  {
    id: 20,
    name: "Wireless Keyboard",
    price: "₹1,799",
    category: "Electronics",
    description:
      "Wireless Keyboard offers comfortable typing, reliable wireless connectivity, compact design and compatibility with multiple devices."
  }
];


app.get("/", (req, res) => {
  res.send("Flipkart Clone Backend is Running!");
});


app.get("/products", (req, res) => {
  res.json(products);
});


app.listen(5000, () => {
  console.log(
    "Server is running on http://localhost:5000"
  );
});