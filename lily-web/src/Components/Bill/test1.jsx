import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './test1.css';
import Header from '../Header';
import Footer from '../Footer';
import NhanHangTaiShop from '../Image/buy/GIAOHANG.gif';
import GiaoHangTaiNha from '../Image/buy/NHANHANG.gif';
import BankMoney from '../Image/buy/Chuyenkhoan.png';
import MoneyHome from '../Image/buy/tratien.png';
import QRBANK from '../Image/buy/QR.jpg';

const Buy = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPayableAmount, setTotalPayableAmount] = useState(0);
    const [showZeroQuantityToast] = useState(false);
    const { state } = useLocation();
    const formData = state?.formData || {};
    const [selectedMethod, setSelectedMethod] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.userId) {
            fetchCartItems(user.userId);
        }
    }, [user]);

    useEffect(() => {
        // Tính toán lại tổng tiền khi phương thức vận chuyển thay đổi
        calculateTotal(cartItems, selectedMethod);
    }, [selectedMethod, cartItems]);

    const fetchCartItems = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8090/api/cart/user/${userId}`);
            setCartItems(response.data);
            calculateTotal(response.data, selectedMethod);
        } catch (error) {
            setError('Có lỗi xảy ra khi lấy dữ liệu giỏ hàng.');
            console.error('Error fetching cart items:', error);
        }
    };

    const calculateTotal = (items, method) => {
        const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        setTotalAmount(total);

       
        let payableAmount = total;
        if (method === 'home' && total < 5000000) {
            payableAmount += 50000;
        }
        setTotalPayableAmount(payableAmount);
    };

    const removeItemFromCart = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/api/cart/removeFromCart/${id}`);
            if (!showZeroQuantityToast) {
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

    const handlePaymentChange = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
        calculateTotal(cartItems, method);

    };
    const handleOrderSubmit = async () => {
        const orderData = {
            recipientName: formData.recipientName,
            recipientPhone: formData.phoneNumber,
            recipientEmail: formData.email,
            selectedCountry: formData.selectedCountry,
            selectedProvince: formData.selectedProvince,
            selectedDistrict: formData.selectedDistrict,
            recipientAddress: formData.address,
            deliveryTime: formData.deliveryTime,
            shippingMethod: selectedMethod,
            paymentMethod: selectedPayment,
            items: cartItems.map(item => ({
                productId: item.product.id, 
                quantity: item.quantity,
                price: item.product.price
            })),
            totalAmount: totalAmount,
            totalPayableAmount: totalPayableAmount,
            description: document.getElementById('description').value,
            user: { id: user.userId },
        };
    
        try {
            await axios.post('http://localhost:8090/api/bill/create', orderData);
            toast.success('Đơn hàng đã được gửi thành công!', { autoClose: 1000 });
            await Promise.all(cartItems.map(item => 
                axios.delete(`http://localhost:8090/api/cart/removeFromCart/${item.id}`)
            ));
             navigate('/bill');
        } catch (error) {
            toast.error('Có lỗi xảy ra khi gửi đơn hàng.', { autoClose: 1000 });
            console.error('Error sending order:', error);
        }
    };
    
    
    
return (
    <div className='Home-buy'>
        <div className='Home-buy1'>
            <Header />
            <div className='Buy-nav'>
                <div className='Buy1-form1'>
                    <p style={{ paddingTop: '30px', marginLeft: '25px', fontWeight: 'bold' }}>Phương Thức Vận Chuyển</p>
                    <div className='Buy1-form1-nav1'>
                        <div className='Buy1-form1-nav2'>
                            <a
                                className={`buy-color1 ${selectedMethod === 'shop' ? 'selected' : ''}`}
                                onClick={() => handleMethodSelect('shop')}
                            >
                                <img src={NhanHangTaiShop} alt="NhanHangTaiShop" /><br />
                            </a>
                            <a style={{ fontSize: '15px' }}>Miễn cước <br /><a style={{ fontSize: '14px' }}> Miễn cước hoá đơn  <br />trên 5.000.000₫</a></a>
                        </div>
                        <div className='Buy1-form1-nav3'>
                            <a
                                className={`buy-color2 ${selectedMethod === 'home' ? 'selected' : ''}`}
                                onClick={() => handleMethodSelect('home')}
                            >
                                <img style={{ marginRight: '40px' }} src={GiaoHangTaiNha} alt="GiaoHangTaiNha" /><br />
                            </a>
                            <a style={{ fontSize: '15px', marginLeft: '50px' }}>
                                {totalAmount < 5000000 ? '50.000₫ ' : 'Miễn cước'}
                                <br />
                                {totalAmount >= 5000000 ? (
                                    <a style={{ fontSize: '14px', marginLeft: '15px' }}> Miễn cước hoá đơn <br /> <a style={{ marginLeft: '25px' }}>trên 5.000.000₫</a></a>
                                ) : <a style={{ fontSize: '14px', marginLeft: '15px' }}> Miễn cước hoá đơn <br /> <a style={{ marginLeft: '25px' }}>trên 5.000.000₫</a></a>}
                            </a>
                        </div>
                    </div><br />
                    <div className='Buy-TT'>
                        <div style={{ paddingTop: '5px', paddingBottom: '5px', width: '80%', backgroundColor: '  #f8f8f8', marginLeft: '40px', border: '2px solid #ececec' }}>
                            <a style={{ marginLeft: '10px' }}>Hộp và túi đựng cao cấp cho khách có thẻ VIP hoặc Thẻ Đen</a>
                        </div>
                        <p style={{ paddingTop: '30px', marginLeft: '25px', fontWeight: 'bold' }}>Phương Thức Thanh Toán</p>
                        <div>
                            <div style={{ paddingTop: '5px', paddingBottom: '5px', width: '80%', backgroundColor: '#f8f8f8', marginLeft: '40px', border: '1px solid #ececec' }}>
                                <label>
                                    <input
                                        style={{ marginLeft: '20px' }}
                                        type='radio'
                                        checked={selectedPayment === 'bank'}
                                        onChange={() => handlePaymentChange('bank')}
                                    />
                                    <img style={{ marginLeft: '20px', width: '30px', height: '30px' }} src={BankMoney} alt="ChuyenKhoan" />
                                    Chuyển khoản qua ngân hàng
                                </label>

                                {selectedPayment === 'bank' && (
                                    <div className='buy-hiden' style={{ paddingBottom: '20px' }}>
                                        <hr className="custom-hr3" />
                                        <a style={{ marginLeft: '10px' }}>Ngân hàng BIDV </a><br />
                                        <a style={{ marginLeft: '10px' }}>Số TK: 2131187208 </a><br />
                                        <a style={{ marginLeft: '10px' }}>Chủ TK: LE TRI LINH </a><br />
                                        <a style={{ marginLeft: '10px' }}>Nội dung:Thanh toán cho đơn hàng <a style={{ fontWeight: 'bold' }}>[ số điện thoại của bạn]</a> </a>
                                        <img style={{ width: '200px', height: '300px', marginLeft: '10px' }} src={QRBANK} alt="QRBANK" />
                                    </div>
                                )}
                            </div>
                            <div style={{ paddingTop: '5px', paddingBottom: '5px', width: '80%', backgroundColor: '#f8f8f8', marginLeft: '40px', border: '1px solid #ececec' }}>
                                <label>
                                    <input
                                        style={{ marginLeft: '20px' }}
                                        type='radio'
                                        checked={selectedPayment === 'cod'}
                                        onChange={() => handlePaymentChange('cod')}
                                    />
                                    <img style={{ marginLeft: '20px', width: '30px', height: '30px' }} src={MoneyHome} alt="MoneyHome" />
                                    Thanh toán khi nhận hàng (COD)
                                </label>
                            </div><br />
                        </div>
                        <div>
                            <a style={{ marginLeft: '20px', fontSize: '18px', fontWeight: 'bold' }}>  Bạn có yêu cầu khác ?</a><br /><br />
                            <textarea style={{ marginLeft: '40px', width: '490px' }} id="description" name="description" />
                        </div><br />
                        <div style={{ paddingTop: '10px', paddingBottom: '10px', width: '80%', backgroundColor: '  #f8f8f8', marginLeft: '40px', border: '2px solid #ececec' }}>
                        </div><br />

                    </div>

                </div>
                <div className='Buy1-form2'>
                    <div className='Buy1-form2-top'>
                        <div className="Buy-Left">
                            <div className='left-buy1'>
                                <a style={{ marginLeft: '10px' }}>Danh sách hàng hóa</a>
                                <a href='/cart' style={{ marginLeft: '55%', color: 'black', textDecoration: 'none' }}>Điều chỉnh</a>
                            </div>
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
                                                        <a href='#'
                                                            style={{
                                                                textAlign: 'center', borderRadius: '50%', color: 'black', position: 'absolute', marginTop: '-7px', backgroundColor: '#f4f4f4', width: '15px', height: '15px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-5px'
                                                            }}
                                                            onClick={() => removeItemFromCart(item.id)}
                                                            className="remove-button" >
                                                            x
                                                        </a>
                                                        <img
                                                            src={`http://localhost:8090/Image/${item.product.image}`}
                                                            style={{ width: '50px', height: '50px' }}
                                                            alt={item.product.name}
                                                            className="cart-item-image"
                                                        />
                                                        <a
                                                            style={{ width: 'fit-content', display: 'inline-block', position: 'relative', top: '-19px' }}
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
                            <span style={{ fontSize: '16px', marginLeft: '60%' }}>Tổng số tiền : {totalAmount.toLocaleString()} ₫</span>
                        </div>
                        <div className='left-buy1'>
                            <a style={{ marginLeft: '10px' }}>Thông tin giao hàng</a>
                            <a href='/cart' style={{ marginLeft: '55%', color: 'black', textDecoration: 'none' }}>Điều chỉnh</a>
                        </div>

                        <div className='from-adress'>
                            <div>Người nhận hàng: <a style={{ color: 'black' }}>{formData.recipientName}</a></div>
                            <div>Số điện thoại:<a style={{ color: 'black' }}> {formData.phoneNumber}</a>   </div>
                            <div>Email:  <a style={{ color: 'black' }}>{formData.email}</a></div>
                            <div>Khu vực phân phối:  <a style={{ color: 'black' }}>{formData.selectedCountry}, {formData.selectedProvince}, {formData.selectedDistrict}</a> </div>
                            <div>Địa chỉ nhận hàng: <a style={{ color: 'black' }}>{formData.address}</a></div>
                            <div>Thời gian giao hàng: <a style={{ color: 'black' }}>{formData.deliveryTime}</a></div>
                        </div><br />
                        <div className='left-buy1'>
                            <a style={{ marginLeft: '10px' }}>Tổng chi phí</a>
                        </div><br />
                        <div>
                            <span style={{ fontSize: '16px', marginLeft: '50%' }}>Tổng số tiền sản phẩm: {totalAmount.toLocaleString()} ₫</span>
                        </div><br />
                        <div className="dashed-line"></div><br />
                        <div>
                            <span style={{ fontSize: '20px', marginLeft: '45%' }}>Tổng số tiền phải trả: <a style={{ fontSize: '24px' }}>{totalPayableAmount.toLocaleString()}</a> ₫</span>
                        </div><br />
                        <div style={{ marginLeft: '65%', paddingBottom: '30px' }}>
                            <a href='/cart' style={{ color: 'black', textDecoration: 'none' }}>Mua Tiếp  </a>
                            <button onClick={handleOrderSubmit}>Gửi đơn hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Buy-footer'>Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của LILY JEWELRY.COM</div>
        </div>
        <Footer />
    </div>
);
};

export default Buy;