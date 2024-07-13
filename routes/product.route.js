const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, updateProduct, createProduct, deleteProduct} = require("../controllers/product.controller.js");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

module.exports = router;