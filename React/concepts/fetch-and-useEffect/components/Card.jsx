// fetch-and-useEffect/components/Card.jsx
import React, { useEffect, useState } from "react";
import { allProducts } from "../data/item"; // Mengimpor fungsi untuk mengambil produk
import ProductCard from "./ProductCard"; // Mengimpor komponen ProductCard

const Card = () => {
    // State untuk menyimpan produk yang diambil
    const [products, setProducts] = useState([]);

    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
        try {
            // Mengambil semua produk menggunakan fungsi dari 'item.js'
            const allProductsData = await allProducts();
            // Mengatur produk yang diambil ke dalam state
            setProducts(allProductsData);
        } catch (error) {
            console.error("Error fetching data:", error); // Mencatat error jika pengambilan gagal
        }
    };

    // Menggunakan useEffect untuk mengambil data saat komponen dimuat
    useEffect(() => {
        fetchData(); // Mengambil data saat render pertama kali
    }, []);

    return (
        <div className="container mx-auto py-[100px]">
            {/* Menampilkan produk jika ada, jika tidak menampilkan pesan */}
            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} /> // Menampilkan setiap produk menggunakan komponen ProductCard
                    ))}
                </div>
            ) : (
                <div className="flex mt-52 justify-center h-screen w-full">
                    <p className="font-bold text-xl">Barang tidak ada</p> {/* Menampilkan pesan jika tidak ada produk */}
                </div>
            )}
        </div>
    );
};

export default Card;