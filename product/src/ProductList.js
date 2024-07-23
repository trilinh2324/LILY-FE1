// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts().then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.error("There was an error fetching the products!", error);
    });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
             <img style={{width :'100px', height:'100px'}} src={`http://localhost:8080/Image/${product.image}`} alt={product.name}  />
            <h3>{product.name}</h3>
            <p style={{color:'red'}}> {product.formattedPrice} ₫ </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
