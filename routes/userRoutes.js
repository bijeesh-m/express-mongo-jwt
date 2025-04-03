const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/multer");

router.post("/upload", upload.single("file"), userController.upload);

module.exports = router;
