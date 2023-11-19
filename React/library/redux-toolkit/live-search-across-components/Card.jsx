import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../data/Item";
import ProductCard from "./ProductCard";
import { selectSearchInput } from "../features/searchSlice";

const Card = () => {
    const dispatch = useDispatch();
    const searchInput = useSelector(selectSearchInput);
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const allProductsData = await allProducts();
            setProducts(allProductsData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredProducts = products.filter((item) =>
        item.namaBarang.toLowerCase().startsWith(searchInput.toLowerCase())
    );

    const handleAddToCart = (item) => {
        dispatch(addItemToCart(item));
    };

    return (
        <div>
            {filteredProducts.length > 0 ? (
                <div>
                    {filteredProducts.map((item) => (
                        <ProductCard key={item.id} item={item} onAddToCart={() => handleAddToCart(item)} />
                    ))}
                </div>
            ) : (
                <div>
                    <p>Barang tidak ada</p>
                </div>
            )}
        </div>
    );
};

export default Card;
