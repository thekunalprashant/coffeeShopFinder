import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getShops = async () => {
  try {
    const response = await axios.get(`${API_URL}/shops`);
    console.log(response.data, "kunal");
    return response.data;
  } catch (error) {
    console.error('Error fetching shops:', error);
    throw error;
  }
};

export const getShopById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/shops/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching shop with ID ${id}:`, error);
    throw error;
  }
};

export const getProductsByShop = async (shopId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${shopId}/products`);
    return response;
  } catch (error) {
    console.error(`Error fetching products for shop ID ${shopId}:`, error);
    throw error;
  }
};
