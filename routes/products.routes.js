const express = require("express");
const Router = express.Router();

const {
  getAllProducts,
  getProductById,
  getProductByBrand,
  getProductsByCategory,
  addProduct,

  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
//======Get All Products=======
Router.get("/", getAllProducts);
//=================Get Product By Id===============
Router.get("/:id", getProductById);
//=================Get Product By Id===============
Router.get("/", getProductsByCategory);
//=================Get Product By Id===============
Router.get("/", getProductByBrand);
//=================Add Product=====================
Router.post("/", addProduct);
//=================Update Product======================
Router.put("/:id", updateProduct);
//=================Delete Product======================
Router.delete("/:id", deleteProduct);
module.exports = Router;
