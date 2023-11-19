// Card.jsx
import ProductCard from "./ProductCard";

const Card = ({ item }) => {
  const handleAddToCart = () => {
    // Lakukan logika tambahkan ke keranjang di sini
  };

  return (
    <ProductCard
      key={item.id}
      productName={item.namaBarang}
      productImage={item.img}
      productPrice={item.hargaBarang}
      onAddToCart={handleAddToCart}
    />
  );
};

export default Card;