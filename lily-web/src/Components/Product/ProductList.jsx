import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const displayedProducts = products.slice(0, 4);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {displayedProducts.map((product) => (
        <div key={product.id} style={{ margin: '10px' }}>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img style={{ width: '300px', height: '250px' }} src={`http://localhost:8080/Image/${product.image}`} alt={product.name} />
            <p >{product.name}</p>
            <a>Mã số: {product.code}</a><br/>
            <a style={{ fontWeight: 'bold', fontSize: '16px' }}>Giá: {product.formattedPrice}₫</a>
            <p>Xem chi tiết</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
