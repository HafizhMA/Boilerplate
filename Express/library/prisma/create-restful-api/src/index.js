// create-restful-api/src/index.js 
// Konfigurasi Express untuk server
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config(); // Mengatur konfigurasi dari file .env

const PORT = process.env.PORT; // Mendapatkan port dari variabel lingkungan

app.use(express.json()); // Menggunakan middleware untuk parsing JSON

// Mengimpor rute produk
const productRoutes = require("./routes/productRoutes");
app.use(productRoutes); // Menggunakan rute produk

// Endpoint sederhana untuk path '/api'
app.get("/api", (req, res) => {
  res.send("hallo");
});

// Server mendengarkan pada port yang telah ditentukan
app.listen(PORT, () => {
  console.log(`express api running on port ${PORT}`);
});