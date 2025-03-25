const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderID: {
        type: String,
        default: () => Date.now(),
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
