const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bookRoute = require("./routes/bookRoutes");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoutes");
const Product = require("./models/productModel");
const upload = require("./middlewares/multer");
const userModel = require("./models/userModel");
const { verifyToken } = require("./middlewares/authMiddleware");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use(express.static("./uploads"));

require("dotenv").config();
app.use(cookieParser());
connectDB();

app.use(bookRoute);
app.use(authRoute);
app.use(orderRoute);
app.use("/user", userRoute);

// app.post("/upload", verifyToken, upload.any("file"), async (req, res) => {
//     const avatar = req.files.map((file) => {
//         return `http://localhost:${process.env.PORT}/${file.originalname}`;
//     });
//     console.log(avatar);

//     // const user = await userModel.findByIdAndUpdate(req.user.id, { $set: { avatar: avatar } }, { new: true });
//     // console.log(user);
//     // res.json(user);
// });

app.listen(process.env.PORT, () => {
    console.log("server is running!");
});
