// src/routes/productRoutes.js
// Definisi rute-rute untuk produk
const express = require("express");
const productController = require("../controller/productController");

const router = express.Router();

router.get("/products", productController.getProducts); // Mendapatkan semua produk
router.get("/products/:id", productController.getOneProduct); // Mendapatkan satu produk berdasarkan ID
router.post("/products", productController.createProduct); // Membuat produk baru
router.patch("/products/:id", productController.updateProduct); // Memperbarui produk berdasarkan ID
router.delete("/products/:id", productController.deleteProduct); // Menghapus produk berdasarkan ID

module.exports = router;
