// src/Components/Cart/useCart.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Đảm bảo đường dẫn chính xác

const useCart = () => {
  const { user } = useAuth(); // Lấy thông tin người dùng từ AuthContext
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && user.id) {
      axios.get(`http://localhost:8090/api/cart/user/${user.id}`)
        .then(response => {
          setCart(response.data);
          setLoading(false);
        })
        .catch(error => {
          if (error.response) {
            // Yêu cầu đã được gửi và server đã phản hồi với mã trạng thái không thành công
            console.error('Response error:', error.response.data);
            setError(error.response.data);
          } else if (error.request) {
            // Yêu cầu đã được gửi nhưng không có phản hồi từ server
            console.error('Request error:', error.request);
            setError('No response from server.');
          } else {
            // Lỗi khác xảy ra khi thiết lập yêu cầu
            console.error('Error message:', error.message);
            setError(error.message);
          }
          setLoading(false);
        });
    } else {
      console.error('User ID is invalid:', user);
      setLoading(false);
    }
  }, [user]);

  return { cart, loading, error };
};

export default useCart;
