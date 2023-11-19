// ProductCard.jsx
const ProductCard = ({ productName, productImage, productPrice }) => {

    return (
        <div>
            <img
                src={productImage}
                alt={productName}
            />
            <div>
                <div>{productName}</div>
                <p>
                    Harga: Rp {productPrice.toLocaleString()}
                </p>
                <button>
                    tambahkan
                </button>
            </div>
        </div>
    );
};

export default ProductCard;