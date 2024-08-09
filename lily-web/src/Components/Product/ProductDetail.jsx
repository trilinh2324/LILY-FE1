import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import Header from '../Header';
import Footer from '../Footer';
import linkedinIcon from '../Image/icon-tron/iconlinkedin.png';
import facebookIcon from '../Image/icon-tron/iconfacebook1.png';
import interestIcon from '../Image/icon-tron/iconpinterest1.png';
import twitterIcon from '../Image/icon-tron/icontwitte1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addToCart = async (username, productId, quantity) => {
  try {
    const response = await axios.post(`http://localhost:8090/api/cart/addToCart/${productId}/${username}`, null, {
      params: {
        quantity,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const ProductDetail = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const navigate = useNavigate(); // Hook để điều hướng

  const handleAddToCart = async () => {
    if (!user) {
      toast.info('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng', {
        onClose: () => navigate('/login'), // Chuyển đến trang đăng nhập sau khi thông báo kết thúc
        autoClose: 1000,
      });
      return;
    }

    try {
      await addToCart(user.userName, product.id, count);
      toast.success('Sản phẩm đã được thêm vào giỏ hàng', {
        onClose: () => navigate('/cart'), // Chuyển đến trang giỏ hàng sau khi thông báo kết thúc
        autoClose: 1000,
      });
    } catch (error) {
      toast.error('Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng');
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:8090/api/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the product details!', error);
      });
  }, [id]);

  if (!product) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  const category = product.category || {};
  const productDetail = product.productDetail || {};

  return (
    <div>
      <Header />
      <div className="product-detail-container">
        <ul className="breadcrumb">
          <li><Link to="/">Trang chủ</Link></li>
          {category.id && (
            <>
              <li><Link to={`/category/${category.id}`}>{category.name}</Link></li>
              <li><Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.name}</Link></li>
            </>
          )}
        </ul>
        <div className="product-main-info">
          <img className="product-image" src={`http://localhost:8090/Image/${product.image}`} alt={product.name} />
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>Mã số: {product.code} | Thương hiệu: LILY</p>
            <p>Giá: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{product.formattedPrice}₫</span>/Chiếc</p>
            <p>Phù hợp với: {product.fate}</p>

            <ProductCounter count={count} setCount={setCount} product={product} />

            <div className="purchase-buttons">
              <button className="purchase-button" onClick={handleAddToCart}>
                <span>Đặt Mua Ngay</span>
                <br />
                <span className="small-text">Giao hàng toàn quốc</span>
              </button>

              <button className="purchase-button">
                <a>0339.806.596</a><br />
                <a style={{ fontSize: '12px' }}>Gọi Ngay Để Mua</a>
              </button>
            </div>
            <a style={{ fontWeight: 'bold', fontSize: '18px' }}>Giao hàng toàn quốc</a>
            <div className="social-share-container">
              <span className="social-share-text">Chia sẻ lên mạng xã hội</span>
              <div className="social-icons">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=your_url">
                  <img src={facebookIcon} alt="facebook" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/shareArticle?mini=true&url=your_url">
                  <img src={linkedinIcon} alt="linkedin" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://pinterest.com/pin/create/button/?url=your_url">
                  <img src={interestIcon} alt="pinterest" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?url=your_url">
                  <img src={twitterIcon} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="custom-hr" />
        <div className="product-details-container">
          <div className="product-details1">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Loại sản phẩm: <Link style={{ color: '#000dc4', textDecoration: 'none' }} to={`/category/${category.id}`}>{category.name}</Link></p>
            {productDetail.goldType && <p>Loại vàng: {productDetail.goldType}</p>}
            {productDetail.goldPurity && <p>Độ tinh khiết của vàng: {productDetail.goldPurity} %</p>}
            {productDetail.goldWeight && <p>Trọng lượng vàng: {productDetail.goldWeight} Chỉ</p>}
            {productDetail.goldColor && <p>Màu sắc vàng: {productDetail.goldColor}</p>}
            {productDetail.stoneType && <p>Loại đá chủ: {productDetail.stoneType}</p>}
            {productDetail.stoneQuantity && <p>Số lượng đá: {productDetail.stoneQuantity} Viên</p>}
            {productDetail.stoneWeight && <p>Trọng lượng đá: {productDetail.stoneWeight} carat</p>}
            {productDetail.stoneColor && <p>Màu sắc đá chủ: {productDetail.stoneColor}</p>}
            {productDetail.stoneShape && <p>Hình dạng đá chủ: {productDetail.stoneShape}</p>}
            {productDetail.stoneClarity && <p>Độ tinh khiết của đá chủ: {productDetail.stoneClarity}</p>}
            {productDetail.pendantLength && <p>Chiều dài: {productDetail.pendantLength} mm</p>}
            {productDetail.pendantWidth && <p>Chiều rộng: {productDetail.pendantWidth} mm</p>}
            {productDetail.pendantHeight && <p>Chiều cao: {productDetail.pendantHeight} mm</p>}
            {productDetail.warrantyPeriod && <p>Thời gian bảo hành: {productDetail.warrantyPeriod}</p>}
            {productDetail.origin && <p>Xuất xứ: {productDetail.origin}</p>}
            {productDetail.buybackOption !== undefined && <p>Có thu mua lại: {productDetail.buybackOption ? 'Có' : 'Không'}</p>}
            {productDetail.gemstoneCertification && <p>Giấy kiểm định đá quý: {productDetail.gemstoneCertification}</p>}
            {productDetail.lifetimeService !== undefined && <p>Dịch vụ miễn phí trọn đời: {productDetail.lifetimeService ? 'Có' : 'Không'}</p>}
            <p>Giá sản phẩm thay đổi theo trọng lượng. Vui lòng liên hệ hotline để được tư vấn.</p>
          </div>
          <div className="product-details2">
            <div style={{ backgroundColor: '#d4d0d0', padding: '10px' }} className='tableTop'>
              <a>Sản phẩm liên quan</a>
            </div>
            <div>
              {/* Your related products component here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer /> {/* Component để hiển thị thông báo */}
    </div>
  );
};

const ProductCounter = ({ count, setCount, product }) => {
  const price = parseFloat(product.formattedPrice.replace(/[^0-9.-]+/g, ""));

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const total = (count * price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  return (
    <div className="counter">
      Số lượng:
      <button onClick={decrement} className="counter-button">-</button>
      <span className="counter-number">{count}</span>
      <button onClick={increment} className="counter-button">+</button>
      <div style={{ marginLeft: '10px' }}>
        Tổng cộng: <span>{total}</span>
      </div>
    </div>
  );
};

export default ProductDetail;
