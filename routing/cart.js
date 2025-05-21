const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/add", cartController.addProductToCart);
router.post("/cleanup", cartController.cleanupCart);

module.exports = router; 