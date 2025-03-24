const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");

router.get("/books", verifyToken, verifyRole(["Admin", "User"]), bookController.getAllBooks);

//Get book by its ID

router.get("/books/:bookId", bookController.bookById);

router.post("/books", bookController.createBook);
router.put("/books/:bookId", bookController.updateBook);
router.delete("/books/:bookId", bookController.deleteBook);

module.exports = router;
