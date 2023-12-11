import { useState } from 'react';
import ProductCard from './ProductCard';
import products from './data';

const ProductSection = () => {
    // State untuk menyimpan nilai filter pencarian produk
    const [filterBox, setFilterBox] = useState('');

    // Meng-update nilai pencarian saat input berubah
    const handleFilterBox = (e) => {
        // Mengubah nilai filterBox menjadi lowercase untuk pencarian case-insensitive
        setFilterBox(e.target.value.toLowerCase());
    }

    // Filter produk berdasarkan nilai pencarian
    const filteredProducts = filterBox
        ? products.filter((product) =>
            // Mengecek apakah nama produk mengandung nilai filterBox yang telah diubah menjadi lowercase
            product.nama.toLowerCase().includes(filterBox)
        )
        : products; // Jika tidak ada nilai filterBox, tampilkan semua produk

    return (
        <div>
            {/* Input untuk pengguna memasukkan kriteria pencarian */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={filterBox}
                    onChange={handleFilterBox}
                />
            </div>
            {/* Menampilkan daftar produk yang telah difilter */}
            <div className="products-container">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductSection;
