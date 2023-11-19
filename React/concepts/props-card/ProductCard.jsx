// ProductCard.jsx
const ProductCard = ({ productName, productImage, productPrice, onAddToCart }) => {
  const handleAddToCart = () => {
    // Lakukan logika tambahkan ke keranjang di sini
    onAddToCart();
  };

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
        <button
          onClick={handleAddToCart}
        >
          tambahkan
        </button>
      </div>
    </div>
  );
};

export default ProductCard;