import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './cart.css';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [updatedQuantities, setUpdatedQuantities] = useState({}); // Track updated quantities
  const [showZeroQuantityToast, setShowZeroQuantityToast] = useState(false); // Track if zero quantity toast has been shown

  useEffect(() => {
    if (user && user.userId) {
      fetchCartItems(user.userId);
    }
  }, [user]);

  const fetchCartItems = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/cart/user/${userId}`);
      setCartItems(response.data);
      calculateTotal(response.data);
    } catch (error) {
      setError('Có lỗi xảy ra khi lấy dữ liệu giỏ hàng.');
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const removeItemFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/api/cart/removeFromCart/${id}`);
      if (!showZeroQuantityToast) {
        setShowZeroQuantityToast(true);
        toast.success('Đã xóa sản phẩm có số lượng bằng 0 khỏi giỏ hàng.', { autoClose: 2000 });
      } else {
        toast.success('Sản phẩm đã bị xóa khỏi giỏ hàng.', { autoClose: 2000 });
      }
      if (user && user.userId) {
        fetchCartItems(user.userId);
      }
    } catch (error) {
      setError('Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng.');
      console.error('Error removing item from cart:', error);
    }
  };

  const handleQuantityChange = (id, value) => {
    const item = cartItems.find(item => item.id === id);
    const maxQuantity = item?.product?.quantity || 0;
    let quantity = parseInt(value, 10);

    if (isNaN(quantity) || quantity < 0) {
     
    }

    if (quantity > maxQuantity) {
      toast.error(`Số lượng "${item.product.name}" vượt quá số lượng có sẵn.`, { autoClose: 3000 });
      quantity = maxQuantity; 
    }

    setUpdatedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const updateCartItemQuantity = async (id, quantity) => {
    try {
      const response = await axios.patch(`http://localhost:8090/api/cart/updateQuantity/${id}`, { quantity });
      return response;
    } catch (error) {
      throw new Error(error.response?.data || 'Có lỗi xảy ra khi cập nhật số lượng sản phẩm.');
    }
  };

  const handleUpdateClick = async () => {
    const invalidQuantities = Object.entries(updatedQuantities).filter(([id, quantity]) => quantity <= 0);

    if (invalidQuantities.length > 0) {
      await Promise.all(invalidQuantities.map(([id]) => removeItemFromCart(id)));
      if (user && user.userId) {
        fetchCartItems(user.userId);
      }
      return;
    }

    const exceededQuantities = cartItems.filter(item => {
      const newQuantity = updatedQuantities[item.id] !== undefined ? updatedQuantities[item.id] : item.quantity;
      return newQuantity > item.product.quantity;
    });

    if (exceededQuantities.length > 0) {
      exceededQuantities.forEach(item => {
        toast.error(`Số lượng "${item.product.name}" vượt quá số lượng có sẵn.`, { autoClose: 3000 });
      });
      return;
    }

    const updatePromises = cartItems.map(async (item) => {
      const quantity = updatedQuantities[item.id] !== undefined ? updatedQuantities[item.id] : item.quantity;
      try {
        if (quantity <= 0) {
          await removeItemFromCart(item.id); 
        } else {
          await updateCartItemQuantity(item.id, quantity);
        }
      } catch (error) {
        setError(error.message);
      }
    });

    try {
      await Promise.all(updatePromises);
      toast.success('Cập nhật giỏ hàng thành công.', { autoClose: 2000 });
      if (user && user.userId) {
        fetchCartItems(user.userId);
      }
    } catch (error) {
      setError('Có lỗi xảy ra khi cập nhật giỏ hàng.');
      console.error('Error updating cart items:', error);
    }
  };

  if (!user) {
    return <p>Bạn cần đăng nhập để xem giỏ hàng.</p>;
  }

  return (
    <div className='form-con'>
      <Header />
      <div className='form-top'>
        <div className='form-top1'>
          <Link to="/" style={{ marginLeft: '270px', color: 'rgb(0, 132, 255)' }}>Mua thêm sản phẩm khác</Link>
          <span style={{ marginLeft: '500px' }}>Giỏ hàng của bạn</span>
        </div>
        <div className='form-nav'>
          <div className='form-header'>
            <div className='LIST-CART'></div>
            <div className="cart-container">
              <ToastContainer />
              {error && <div className="error-message">{error}</div>}
              {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Giỏ hàng của bạn đang trống.</p>
              ) : (
                <div>
                  <ul className="cart-items">
                    {cartItems.map((item) => (
                      <li key={item.id} className="cart-item">
                        <div className='navH-cart'>
                          <div className='nav-left'>
                            <a 
                              style={{ borderRadius: '50px', color: 'black', position: 'absolute', marginLeft: '15px', marginTop: '-8px', backgroundColor: '#f4f4f4', width: '25px', height: '25px', textAlign: 'center', textDecoration: 'none' }} 
                              onClick={() => removeItemFromCart(item.id)} 
                              className="remove-button"
                            >
                              X
                            </a>
                            <img 
                              src={`http://localhost:8090/Image/${item.product.image}`} 
                              style={{ width: '100px', height: '100px', marginLeft: '20px' }} 
                              alt={item.product.name} 
                              className="cart-item-image" 
                            />
                            <a 
                              style={{ width: 'fit-content', display: 'inline-block', position: 'relative', top: '-40px' }}
                            >
                              {item.product.name}
                            </a>
                          </div>
                          <div className='nav-right'>
                            <br />
                            <a 
                              style={{ paddingTop: '20px', color: 'red', marginRight: '100px' }}
                            >
                              {item.product.price.toLocaleString()} ₫
                            </a>
                            <br />
                            <div>
                              <input
                                style={{ width: '70px' }}
                                type="number"
                                value={updatedQuantities[item.id] !== undefined ? updatedQuantities[item.id] : item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <hr className="custom-hr3" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px', marginLeft: '60%' }}>Tổng số tiền : {totalAmount.toLocaleString()} ₫</span>
          </div>
          <hr className="custom-hr1" />
          <div className='formButton'>
            <button onClick={handleUpdateClick} className="update-button">Cập nhật giỏ hàng</button>
          </div>
          <hr className="custom-hr1" /><br/>
        <div className='from-home'>
          <form >
            <div >
              <label>Người nhận hàng:</label>
              <input style={{marginLeft:'100px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="recipient"
              
              />
            </div><br/>
            <div>
              <label>Số điện thoại:</label>
              <input style={{marginLeft:'130px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="phone"
                
              />
            </div><br/>
            <div>
              <label>Email:</label>
              <input style={{marginLeft:'185px',width:'500px',padding:'10px',height:'35px'}}
                type="email"
                name="email"
               
              />
            </div><br/>
            <div>
              <label>Khu vực phân phối:</label>
              <select   style={{marginLeft:'90px',width:'110px',height:'35px'}}
                name="region"
                 >
                <option value="VIETNAM"> VIỆT NAM</option>
                <option value="JAPAN">NHẬT BẢN</option>
              </select>
          
              
              <select  style={{marginLeft:'10px',width:'190px',height:'35px'}}
                name="province"
               
              >
                <option value="">Chọn tỉnh/thành phố</option>
          
              </select>
        
            
              <select  style={{marginLeft:'10px',width:'170px',height:'35px'}}
                name="district"
               
              >
                <option value="">Chọn quận/huyện</option>
               
              </select>
            </div><br/>
            <div>
              <label>Địa chỉ:</label>
              <input style={{marginLeft:'178px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="address" />
            </div><br/>
            <div>
              <label>Thời gian giao hàng:</label>
              <input  style={{marginLeft:'85px',width:'500px',padding:'10px',height:'35px'}}
                type="text"
                name="deliveryTime"  />
            </div><br/>
            <hr className="custom-hr1" />
            <button style={{marginTop:'10px',marginBottom:'50px',marginLeft:'40%'}} type="submit">Xác nhận </button>
          </form>
          </div>
        </div>
       <div className='form-footer'>
<a>Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của LILY JEWELERY.COM</a>
       </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;