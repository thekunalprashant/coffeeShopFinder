import axios from 'axios';

const API_URL = "https://coffee-shop-finderbr.vercel.app/api";

export const getShops = () => {
  return axios.get(`${API_URL}/shops`)
    .then(response => {
      console.log(response.data)
      return response.data; 
    })
    .catch(error => {
      console.error('Error fetching shops:', error);
      throw error; 
    });
};

export const getShopById = (id) => {
  return axios.get(`${API_URL}/shops/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(`Error fetching shop with ID ${id}:`, error);
      throw error;
    });
};

export const getProductsByShop = (shopId) => {
  return axios.get(`${API_URL}/products/${shopId}/products`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(`Error fetching products for shop ID ${shopId}:`, error);
      throw error;
    });
};
