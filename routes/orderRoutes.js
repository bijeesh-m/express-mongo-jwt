const express = require("express");
const orderController = require("../controllers/orderController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/order", verifyToken, orderController.createOrder);
router.get("/orders", verifyToken, orderController.allOrders);

module.exports = router;
