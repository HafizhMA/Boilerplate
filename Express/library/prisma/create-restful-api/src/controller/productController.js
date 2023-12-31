// src/controller/productController.js
// Kontroler untuk mengelola operasi-operasi terkait produk
// seperti mengambil, membuat, memperbarui, dan menghapus produk
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};

// get one products berdasarkan id
exports.getOneProduct = async (req, res) => {
  const { id } = req.params; // Assuming the product ID is in the request parameters

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (product) {
    return res.json({
      status: 200,
      data: product,
    });
  } else {
    return res.json({
      status: 404,
      message: "No such data",
    });
  }
};

// Fungsi untuk membuat produk baru
exports.createProduct = async (req, res) => {
  const newProductData = req.body;

  if (!newProductData.namaBarang || !newProductData.deskripsiBarang || !newProductData.hargaBarang || !newProductData.quantity) {
    return res.json({
      status: 400,
      message: "Bad Request: Missing required data",
    });
  }

  try {
    const product = await prisma.product.create({
      data: {
        namaBarang: newProductData.namaBarang,
        deskripsiBarang: newProductData.deskripsiBarang,
        img: newProductData.img,
        hargaBarang: newProductData.hargaBarang,
        quantity: newProductData.quantity,
      },
    });

    res.json({
      status: 201,
      data: product,
      message: "Data successfully posted",
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};

// Fungsi untuk memperbarui produk yang ada
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;

  if (!updatedProductData.namaBarang || !updatedProductData.deskripsiBarang || !updatedProductData.hargaBarang || !updatedProductData.quantity) {
    return res.json({
      status: 400,
      message: "Bad Request: Missing required data",
    });
  }

  try {
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        namaBarang: updatedProductData.namaBarang,
        deskripsiBarang: updatedProductData.deskripsiBarang,
        img: updatedProductData.img,
        hargaBarang: updatedProductData.hargaBarang,
        quantity: updatedProductData.quantity,
      },
    });

    res.json({
      status: 200,
      data: updatedProduct,
      message: "Data successfully updated",
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};

// Fungsi untuk menghapus produk berdasarkan ID
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    await prisma.product.delete({
      where: { id: productId },
    });

    res.json({
      status: 200,
      message: "Data successfully deleted",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};