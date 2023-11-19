// Card.jsx
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/ItemService";
import ProductCard from "./ProductCard";

const Card = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const allProductsData = await getAllProducts();
            setProducts(allProductsData);
        } catch (error) {
            console.error('Failed to fetch products:', error);
            // Handle error here: You can use a toast, display an error message, or any other method
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-[100px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productName={product.namaBarang}
                        productImage={product.img}
                        productPrice={product.hargaBarang}
                    />
                ))}
            </div>
        </div>
    );
};

export default Card;