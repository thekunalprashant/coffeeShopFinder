const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const coffeeShopRoutes = require("./routes/coffeeShopRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(
  cors({
    origin: ["https://coffee-shop-finder-3prl.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/shops", coffeeShopRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
