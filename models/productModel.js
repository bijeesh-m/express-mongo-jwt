const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productID: {
        type: String,
        default: () => Date.now(),
    },
    productName: String,
    description: String,
    price: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
