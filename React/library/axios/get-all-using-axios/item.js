// item.js
import axios from 'axios';

const API_URL = 'http://localhost:2000';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};