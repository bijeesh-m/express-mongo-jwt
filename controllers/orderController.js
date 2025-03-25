// create order

const Order = require("../models/orderModel");

module.exports.createOrder = async (req, res) => {
    try {
        console.log(req.user);
        const { product, totalPrice } = req.body;
        const order = new Order({
            user: req.user.id,
            product: product,
            totalPrice,
        });
        const newOrder = await order.save();
        res.status(201).json({ message: " order placed!", newOrder });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "create order failed!", error: error.message });
    }
};

//get all orders

module.exports.allOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user").populate("product");
        res.status(200).json({ message: " order fetched!", orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "create order failed!", error: error.message });
    }
};
