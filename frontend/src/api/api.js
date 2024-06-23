import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getShops = () => axios.get(`${API_URL}/shops`);
export const getShopById = (id) => axios.get(`${API_URL}/shops/${id}`);
export const getProductsByShop = (shopId) => axios.get(`${API_URL}/products/${shopId}/products`);
