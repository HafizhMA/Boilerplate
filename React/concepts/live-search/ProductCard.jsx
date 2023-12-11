import React from 'react';

// prop card
const ProductCard = ({ product }) => {

    return (
        <div className="product-card">
            <div>
                <div>{product.nama}</div>
                <p>Harga: Rp {product.harga.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default ProductCard;
