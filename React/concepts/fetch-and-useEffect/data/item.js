// fetch-and-useEffect/data/item.js
// install axios npm install axios
import axios from 'axios';

// endpoint API
const API_URL = 'http://localhost:2000';

// Fungsi untuk mengambil semua produk dari API
export const allProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data; // Mengembalikan data produk yang diambil
  } catch (error) {
    throw error; // Melemparkan error jika pengambilan gagal
  }
};