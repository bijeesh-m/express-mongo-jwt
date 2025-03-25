const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const bookRoute = require("./routes/bookRoutes");
const authRoute = require("./routes/authRoutes");
const orderRoute = require("./routes/orderRoutes");
const Product = require("./models/productModel");

const app = express();

app.use(express.json());
require("dotenv").config();
app.use(cookieParser());
connectDB();

app.use(bookRoute);
app.use(authRoute);
app.use(orderRoute);

app.get("/", async (req, res) => {
    await Product.find();
});

app.listen(process.env.PORT, () => {
    console.log("server is running!");
});
