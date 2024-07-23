import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <img 
        src={`http://localhost:8080/Image/${product.image}`} 
        alt={product.name} 
        style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '10px' }} 
      />
      <p style={{ color: 'red', fontSize: '24px' }}>{product.formattedPrice} ₫</p>
      <p>{product.description}</p>
      <p><strong>Color:</strong> {product.productDetail.color}</p>
      <p><strong>Type:</strong> {product.productDetail.type}</p>
      <p><strong>Material:</strong> {product.productDetail.material}</p>
      <p><strong>Stone:</strong> {product.productDetail.stone}</p>
      <p><strong>Degree of Perfection:</strong> {product.productDetail.degreeOfPerfection}</p>
      <p><strong>Gender:</strong> {product.productDetail.genderProduct}</p>
    </div>
  );
};

export default ProductDetail;
