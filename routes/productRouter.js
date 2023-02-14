const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getProduct,
  rating,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");
const { auth } = require("../middelwares/auth");
const { authAdmin } = require("../middelwares/authAdmin");
const { uploadProductImage } = require("../middelwares/multer");

router.get("/", getProducts);
router.post("/", auth, authAdmin, uploadProductImage, createProduct);
router.put("/ratings", auth, rating);
router.get("/:id", getProduct);
router.put("/:id", auth, authAdmin, editProduct);
router.delete("/:id", auth, authAdmin, deleteProduct);

module.exports = router;
