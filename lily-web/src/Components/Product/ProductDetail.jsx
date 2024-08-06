import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductService from './ProductService';
import './ProductDetail.css';
import Header from '../Header';
import Footer from '../Footer';
import linkedinIcon from '../Image/icon-tron/iconlinkedin.png';
import facebookIcon from '../Image/icon-tron/iconfacebook1.png';
import interestIcon from '../Image/icon-tron/iconpinterest1.png';
import twitterIcon from '../Image/icon-tron/icontwitte1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    ProductService.getProductById(id).then((response) => {
      setProduct(response.data);
    }).catch((error) => {
      console.error("There was an error fetching the product details!", error);
    });
  }, [id]);

  if (!product) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  const handleAddToCart = () => {
    localStorage.setItem('cartProduct', JSON.stringify({
      image: product.image,
      name: product.name,
      price: product.formattedPrice,
      quantity: count  
    }));
    
    window.location.href = '/cart';
  };

  return (
    <div>
      <Header />
      <div className="product-detail-container">
        <ul className="breadcrumb">
          
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to={`/category/${product.category.id}`}>{product.category.name}</Link></li>
          <li><Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.name}</Link></li>
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
                <a>0339.806.596</a><br/>
                <a style={{fontSize:'12px'}}> Gọi Ngay Để Mua</a>
              </button>
            </div>
            <a style={{ fontWeight: 'bold', fontSize: '18px' }}>Giao hàng toàn quốc</a>
            <p>
              <div className="social-share-container">
                <span className="social-share-text">Chia sẻ lên mạng xã hội</span>
                <div className="social-icons">
                  <a target="_blank" rel="noreferrer" href="">
                    <img src={facebookIcon} alt="facebook" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="">
                    <img src={linkedinIcon} alt="linkedin" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="">
                    <img src={interestIcon} alt="interest" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="">
                    <img src={twitterIcon} alt="twitter" />
                  </a>
                </div>
              </div>
            </p>
          </div>
        </div>
        <hr className="custom-hr" />
        <div className="product-details-container">
          <div className="product-details1">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Loại sản phẩm: <Link style={{ color: '#000dc4', textDecoration: 'none' }} to={`/category/${product.category.id}`}>{product.category.name}</Link></p>
            {product.productDetail.goldType && <p>Loại vàng: {product.productDetail.goldType}</p>}
            {product.productDetail.goldPurity && <p>Độ tinh khiết của vàng: {product.productDetail.goldPurity} %</p>}
            {product.productDetail.goldWeight && <p>Trọng lượng vàng: {product.productDetail.goldWeight} Chỉ</p>}
            {product.productDetail.goldColor && <p>Màu sắc vàng: {product.productDetail.goldColor}</p>}
            {product.productDetail.stoneType && <p>Loại đá chủ: {product.productDetail.stoneType}</p>}
            {product.productDetail.stoneQuantity && <p>Số lượng đá : {product.productDetail.stoneQuantity} Viên</p>}
            {product.productDetail.stoneWeight && <p>Trọng lượng đá : {product.productDetail.stoneWeight} carat</p>}
            {product.productDetail.stoneColor && <p>Màu sắc đá chủ: {product.productDetail.stoneColor}</p>}
            {product.productDetail.stoneShape && <p>Hình dạng đá chủ: {product.productDetail.stoneShape}</p>}
            {product.productDetail.stoneClarity && <p>Độ tinh khiết của đá chủ: {product.productDetail.stoneClarity}</p>}
            {product.productDetail.pendantLength && <p>Chiều dài: {product.productDetail.pendantLength} mm</p>}
            {product.productDetail.pendantWidth && <p>Chiều rộng: {product.productDetail.pendantWidth} mm</p>}
            {product.productDetail.pendantHeight && <p>Chiều cao: {product.productDetail.pendantHeight} mm</p>}
            {product.productDetail.warrantyPeriod && <p>Thời gian bảo hành: {product.productDetail.warrantyPeriod}</p>}
            {product.productDetail.origin && <p>Xuất xứ: {product.productDetail.origin}</p>}
            {product.productDetail.buybackOption !== undefined && <p>Có thu mua lại: {product.productDetail.buybackOption ? 'Có' : 'Không'}</p>}
            {product.productDetail.gemstoneCertification && <p>Giấy kiểm định đá quý: {product.productDetail.gemstoneCertification}</p>}
            {product.productDetail.lifetimeService !== undefined && <p>Dịch vụ miễn phí trọn đời: {product.productDetail.lifetimeService ? 'Có' : 'Không'}</p>}
            <p>Giá sản phẩm thay đổi theo trọng lượng. Vui lòng liên hệ hotline để được tư vấn.</p>
          </div>
          <div className="product-details2">
            <div style={{backgroundColor:'#d4d0d0' , padding:'10px'}} className='tableTop' >
              <a>bạn cần gọi TƯ VẤN ?</a> <br/>
              <input style={{width:'300px',padding:'7px'}} type="text" id="name" name="name" placeholder='Tên của anh/chị'/><br/>
              <input style={{marginTop:'5px',width:'300px',padding:'7px'}} type="text" id="phone" name="phone" placeholder='Nhập số điện thoại của anh/chị' /><br/>
              <button style={{marginTop:'5px',width:'300px',height:'60px',backgroundColor:'red'}} type="submit">
                <a style={{color:'white'}}>HÃY GỌI LẠI CHO TÔI!!!</a><br/>
                <a style={{color:'white'}}> Tôi đang rất quan tâm sản phẩm này</a>
              </button>
            </div>
            <div>
              <table style={{borderLeft:' 1px solid  #e7e6e6',borderRight:'1px solid  #e7e6e6'}} className="table">
                <thead>
                  <tr>
                    <th scope="col">Thông Số</th>
                    <td></td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Loại sản phẩm</td>
                    <td>{product.category.name}</td>
                  </tr>
                  <tr>
                    <td>Thương hiệu</td>
                    <td>LILY</td>
                  </tr>
                  <tr>
                    <td>Kiểu chế tác</td>
                    <td>Thiết kế thủ công tinh xảo phù hợp làm quà tặng sinh nhật hoặc trong các dịp ý nghĩa</td>
                  </tr>
                  <tr>
                    <td>Loại vàng</td>
                    <td>{product.productDetail.goldType}</td>
                  </tr>
                  <tr>
                    <td>Trọng lượng vàng tham khảo</td>
                    <td>{product.productDetail.goldWeight} Chỉ</td>
                  </tr>
                  <tr>
                    <td>Màu vàng</td>
                    <td>{product.productDetail.goldColor}</td>
                  </tr>
                  <tr>
                    <td>Bảo hành</td>
                    <td>{product.productDetail.warrantyPeriod}</td>
                  </tr>
                  <tr>
                    <td>Xuất xứ</td>
                    <td>{product.productDetail.origin}</td>
                  </tr>
                  <tr>
                    <td>Thu mua lại</td>
                    <td>{product.productDetail.buybackOption ? 'Có' : 'Không'}</td>
                  </tr>
                  <tr>
                    <td>Phạm vi bán</td>
                    <td style={{ letterSpacing:'1px' }}>Giao hàng toàn quốc</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br/>
            <div>
              <div style={{backgroundColor:'#d4d0d0' , padding:'10px',width:'320px'}}>
                <a>Sản phẩm liên quan</a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
