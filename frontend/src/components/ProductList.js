"use client";
import React, { useEffect, useState } from 'react';
import { getProductsByShop } from '../api/api';

const ProductList = ({ shopId }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    getProductsByShop(shopId).then((response) => {
      setProducts(response.data);
    });
  }, [shopId]);

  const categories = ['all', 'coffee', 'drinks', 'food'];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category.toLowerCase() === selectedCategory);

  return (
    <div>
      <h2 className='text-2xl font-bold p-3 bg-orange-900 rounded-md my-4 text-white'>Products</h2>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              cursor: 'pointer',
              backgroundColor: selectedCategory === category ? 'brown' : 'black',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className='p-6  flex flex-col gap-6'>
        {filteredProducts.map((product) => (
          <div key={product._id} className='bg-white w-96 p-3 flex justify-between'>
            <p className='text-lg font-bold'>{product.name}</p>
            <p className='text-lg font-bold text-red-700'>Rs {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
