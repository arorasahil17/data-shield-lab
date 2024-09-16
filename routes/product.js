const express = require("express");
const router = express.Router();
const { addProduct, getProduct } = require("../controller/product");
const upload = require("../middleware/uploadProduct");

router
  .post("/add/product", upload.single("productPdf"), addProduct)
  .get("/get/products", getProduct);

module.exports = router;
