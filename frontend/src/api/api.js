import axios from 'axios';

const API_URL = process.env.API_URL;

export const getShops = () => axios.get(`${API_URL}/shops`);
export const getShopById = (id) => axios.get(`${API_URL}/shops/${id}`);
export const getProductsByShop = (shopId) => axios.get(`${API_URL}/products/${shopId}/products`);
