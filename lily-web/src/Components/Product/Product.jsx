import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';
import ProductDetail from './ProductDetail';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    ProductService.getProductById(productId).then((response) => {
      setProduct(response.data);
    }).catch((error) => {
      console.error("There was an error fetching the product details!", error);
    });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Code: {product.code}</p>
      <p>Price: {product.formattedPrice} ₫</p>
      <img style={{ width: '100px', height: '100px' }} src={`http://localhost:8080/Image/${product.image}`} alt={product.name} />
      <p>Description: {product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Fate: {product.fate}</p>
      <ProductDetail detail={product.productDetail} />
    </div>
  );
};

export default Product;
