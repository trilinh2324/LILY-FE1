// src/components/Products.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams và Link
import UserContext from './UserContext';
import './Products.css';

const Products = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); // Thêm state để lưu thông báo lỗi
  const { products } = useContext(UserContext);

  useEffect(() => {
    if (productId) {
      // Nếu có productId trong URL, lấy dữ liệu chi tiết sản phẩm
      fetch(`http://localhost:8080/api/products/${productId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Product not found');
          }
          return response.json();
        })
        .then(data => setProduct(data))
        .catch(error => setError(error.message)); // Lưu thông báo lỗi
    } else {
      // Nếu không có productId, hiển thị danh sách sản phẩm
      setProduct(null);
      setError(null); // Đặt lỗi thành null khi không có productId
    }
  }, [productId]);

  if (error) {
    // Hiển thị thông báo lỗi nếu có lỗi
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (productId && product) {
    // Hiển thị chi tiết sản phẩm
    return (
      <div style={{ padding: '20px' }}>
        <h2>{product.name}</h2>
        <img 
          src={`http://localhost:8080/Image/${product.image}`} 
          alt={product.name} 
          style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '10px' }} 
        />
        <p style={{ color: 'red', fontSize: '24px' }}>{product.price} ₫</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Color:</strong> {product.color}</p>
        <p><strong>Type:</strong> {product.type}</p>
        <p><strong>Material:</strong> {product.material}</p>
        <p><strong>Stone:</strong> {product.stone}</p>
        <p><strong>Degree of Perfection:</strong> {product.degreeOfPerfection}</p>
        <p><strong>Gender:</strong> {product.genderProduct}</p>
      </div>
    );
  }

  // Hiển thị danh sách sản phẩm nếu không có productId
  return (
    <div>
      <h3 className="BestSellerH3"> 
        <div className="hr-container">
          <div className="hr-text">SẢN PHẨM MỚI</div>
        </div>
      </h3>
      <div>
        {products.map((productRow, rowIndex) => (
          <div key={rowIndex} className="row BestSellCategory" style={{ marginBottom: '20px' }}>
            {productRow.map((product) => (
              <div key={product.id} className="col-6 col-md-3" style={{ backgroundColor: 'rgb(243 240 240)', margin: '10px', borderRadius: '10px', width: '350px', height: '400px' }}>
                <Link to={`/products/${product.id}`} className="BestSellimageContainer linkWithoutDecoration" style={{ display: 'block', height: '100%', borderRadius: '10px' }}>
                  <img style={{ width: '100%', height: '60%', borderRadius: '10px 10px 0 0', objectFit: 'cover' }} src={`http://localhost:8080/Image/${product.image}`} alt={product.name} />
                  <div style={{ padding: '10px', width: '100%' }}>
                    <h4>{product.name}</h4>
                    <p style={{ color: 'red' }}>{product.price} ₫</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
