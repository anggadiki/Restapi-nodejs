const express = require("express");
const Product = require("../model/service");
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

const router = express.Router();

//route get
router.get("/product", getProducts);

//route get product by id
router.get("/product/:id", getProductById);

//route post
router.post("/product", addProduct);

//update data by id
router.put("/product/:id", updateProduct);

//delete data by id
router.delete("/product/:id", deleteProduct);

module.exports = router;
