// ProductCard.jsx
const ProductCard = ({ productName, productImage, productPrice, onAddToCart }) => {
  const handleAddToCart = () => {
    // Lakukan logika tambahkan ke keranjang di sini
    onAddToCart();
  };

  return (
    <div className="card max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img
        className="w-[300px] h-64 object-cover"
        src={productImage}
        alt={productName}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl">{productName}</div>
        <p className="text-gray-700 text-base my-2">
          Harga: Rp {productPrice.toLocaleString()}
        </p>
        <button
          className="py-1 px-2 font-bold rounded bg-slate-500 text-white transition 
              duration-300 hover:bg-slate-200 hover:text-black"
          onClick={handleAddToCart}
        >
          tambahkan
        </button>
      </div>
    </div>
  );
};

export default ProductCard;