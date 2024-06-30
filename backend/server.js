const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const coffeeShopRoutes = require('./routes/coffeeShopRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/shops', coffeeShopRoutes);
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
