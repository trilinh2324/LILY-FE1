import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/api/cart/user/${userId}`);
                setCartItems(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching cart items');
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [userId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Cart Items</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <h3>{item.product.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.product.price}</p> 
                        <img src={`http://localhost:8090/Image/${item.product.image}`} alt={item.product.name}  />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
