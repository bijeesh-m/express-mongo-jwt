const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const bookRoute = require("./routes/bookRoutes");
const authRoute = require("./routes/authRoutes");

const app = express();

app.use(express.json());
require("dotenv").config();
app.use(cookieParser());
connectDB();

app.use(bookRoute);
app.use(authRoute);

app.listen(process.env.PORT, () => {
    console.log("server is running!");
});
