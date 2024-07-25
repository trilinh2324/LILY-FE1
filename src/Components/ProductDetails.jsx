import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`/api/products/${productId}`);
                setProduct(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading product details.</p>;
    if (!product) return <p>No product found.</p>;

    return (
        <div className="product-details">
            <h1>{product.category.name}</h1>
            <h2>{product.products[0].name}</h2>
            <img src={product.products[0].imagePath} alt={product.products[0].name} />
            <p>Price: {product.products[0].formattedPrice} VND</p>
            <p>Description: {product.products[0].description}</p>
            <h3>Details:</h3>
            <ul>
                <li>Color: {product.productDetail.color}</li>
                <li>Type: {product.productDetail.type}</li>
                <li>Material: {product.productDetail.material}</li>
                <li>Stone: {product.productDetail.stone}</li>
                <li>Degree of Perfection: {product.productDetail.degreeOfPerfection}</li>
                <li>Gender: {product.productDetail.genderProduct}</li>
            </ul>
        </div>
    );
};

export default ProductDetails;
