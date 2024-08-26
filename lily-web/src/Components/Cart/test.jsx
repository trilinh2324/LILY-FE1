import './test1.css';
import Header from '../Header';
import Footer from '../Footer';
import NhanHangTaiShop from '../Image/buy/GIAOHANG.gif';
import GiaoHangTaiNha from '../Image/buy/NHANHANG.gif';
import BankMoney from '../Image/buy/CHUYENKHOANG.gif';
import MoneyHome from '../Image/buy/Tratien.png';
import QRBANK from '../Image/buy/QR.jpg';

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const Buy = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedMethod, setSelectedMethod] = useState('');
    const { state } = useLocation();
    const formData = state?.formData || {};

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
            toast.success('Sản phẩm đã bị xóa khỏi giỏ hàng.', { autoClose: 2000 });
            if (user && user.userId) {
                fetchCartItems(user.userId);
            }
        } catch (error) {
            setError('Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng.');
            console.error('Error removing item from cart:', error);
        }
    };

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };

    return (
        <div className='Home-buy'>
            <div className='Home-buy1'>
                <Header />
                <div className='Buy-nav'>
                    <div className='Buy1-form1'>
                        <p style={{ paddingTop: '30px', marginLeft: '25px', fontWeight: 'bold' }}>Phương Thức Vận Chuyển</p>
                        <div className='Buy1-form1-nav1'>
                            <div className={`Buy1-form1-nav2 ${selectedMethod === 'shop' ? 'selected' : ''}`}onClick={() => handleMethodSelect('shop')} >
                                <img src={NhanHangTaiShop} alt="NhanHangTaiShop" /><br />
                                <a style={{ fontSize: '15px' }}>Miễn cước <br /><a style={{ fontSize: '14px' }}> Miễn cước hoá đơn  <br />trên 5.000.000₫</a></a>
                            </div>
                            <div
                                className={`Buy1-form1-nav3 ${selectedMethod === 'home' ? 'selected' : ''}`}
                                onClick={() => handleMethodSelect('home')}
                            >
                                <img style={{ marginRight: '40px' }} src={GiaoHangTaiNha} alt="GiaoHangTaiNha" /><br />
                                <a style={{ fontSize: '15px', marginLeft: '40px' }}>Miễn cước <br /><a style={{ fontSize: '14px', marginLeft: '15px' }}> Miễn cước hoá đơn <br /> <a style={{ marginLeft: '25px' }}>trên 5.000.000₫</a> </a></a>
                            </div>
                        </div><br />
                        <div className='Buy-TT'>
                            <div style={{ paddingTop: '5px', paddingBottom: '5px', width: '80%', backgroundColor: '#f8f8f8', marginLeft: '40px', border: '2px solid #ececec' }}>
                                <a style={{ marginLeft: '10px' }}>  Áp dụng cho KH đặt giữ hàng tại ShowRoom:</a>
                            </div>
                            <p style={{ paddingTop: '30px', marginLeft: '25px', fontWeight: 'bold' }}>Phương Thức Thanh Toán</p>
                            <div>
                                <img style={{ marginLeft: '50px' }} src={BankMoney} alt="ChuyenKhoan" />
                                <img style={{ width: '130px', height: '50px', border: '2px solid #ececec', marginLeft: '100px' }} src={MoneyHome} alt="MoneyHome" />
                            </div><br />
                            <div style={{ paddingTop: '5px', paddingBottom: '5px', width: '80%', backgroundColor: '#f8f8f8', marginLeft: '40px', border: '2px solid #ececec' }}>
                                <a style={{ marginLeft: '10px' }}>Ngân hàng BIDV </a><br />
                                <a style={{ marginLeft: '10px' }}>Số TK : 2131187208 </a><br />
                                <a style={{ marginLeft: '10px' }}>Chủ TK : LE TRI LINH </a><br />
                                <a style={{ marginLeft: '10px' }}>Xem thêm các số tài khoản ngân hàng khác, xin mời xem <a style={{ color: 'red' }}>tại đây</a></a>
                                <img style={{ width: '200px', height: '300px', marginLeft: '10px' }} src={QRBANK} alt="QRBANK" />
                            </div><br />
                            <div>
                                <a style={{ marginLeft: '20px', fontSize: '18px', fontWeight: 'bold' }}>  Bạn có yêu cầu khác ?</a><br /><br />
                                <textarea style={{ marginLeft: '40px', width: '490px' }} id="description" name="description" />
                            </div><br />
                            <div style={{ paddingTop: '10px', paddingBottom: '10px', width: '80%', backgroundColor: '#f8f8f8', marginLeft: '40px', border: '2px solid #ececec' }}>
                            </div><br />
                        </div>
                    </div>
                    <div className='Buy1-form2'>
                        <div className="cart-container">
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
                                                        <a style={{ paddingTop: '15px', marginRight: '50px' }}>
                                                            {item.product.price.toLocaleString()}₫ X <a >{item.quantity}</a>
                                                        </a>
                                                        <br />
                                                    </div>
                                                </div>
                                                <hr className="custom-hr3" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <span style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '20px' }}> Thông tin đơn hàng </span><br />
                            <a style={{ marginLeft: '30px', color: 'black' }}>{formData.name}</a><br />
                            <a style={{ marginLeft: '30px', color: 'black' }}>{formData.phone_number}</a><br />
                            <a style={{ marginLeft: '30px', color: 'black' }}>{formData.email}</a><br />
                            <a style={{ marginLeft: '30px', color: 'black' }}>{formData.address}</a><br />
                            <a style={{ marginLeft: '30px', color: 'black' }}>{formData.time}</a><br />
                            <span style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '20px' }}> Tổng Tiền </span><br />
                            <a style={{ marginLeft: '30px', color: 'red', fontSize: '30px' }}> {totalAmount.toLocaleString()}₫</a>
                            <button className='datmua'>Đặt Mua</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Buy;
