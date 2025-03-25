const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderID: {
        type: String,
        default: () => Date.now(),
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    totalPrice: Number,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
