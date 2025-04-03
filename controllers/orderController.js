// create order

const Order = require("../models/orderModel");

module.exports.createOrder = async (req, res) => {
    try {
        console.log(req.user);
        const { products } = req.body;

        const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
        console.log(totalPrice);

        const order = new Order({
            user: req.user.id,
            products: products,
            totalPrice: totalPrice,
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
        const orders = await Order.find().populate("user", "username email").populate("products.productId");
        res.status(200).json({ message: " order fetched!", orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "create order failed!", error: error.message });
    }
};
