import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.css';
import logo1 from './Image/logo/logo2.png';
import { BsPersonFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất không?');
    if (confirmLogout) {
      logout();
      navigate('/'); // Chuyển hướng đến trang chủ
    }
  };

  return (
    <div className="Header-nav">
      <header className="header">
        <div className="header-section section1">
          <Link to="/">
            <img src={logo1} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="header-section section2">
          <div className="search-bar">
            <input type="text" placeholder="Nhập từ khóa bạn cần tìm" />
            <FaSearch className="search-icon" />
          </div>
        </div>
        <div className="header-section section3">
          <div className="column1">
            <a>Tư vấn bán hàng</a><br />
            <a>0339806596</a>
          </div>
          <div className="column2">
            <a>Hotline</a><br />
            <a>0866093674</a>
          </div>
          <div className="column3">
            <a>SALE</a><br />
            <a>Tin tức</a>
          </div>
        </div>
        <div className="header-section section4">
          <div className="user-actions">
            {user ? (
              <div>
                <a style={{ color: 'white', marginRight: '10px' }}>
                 <span style={{ color: 'black' }}>{user.userName}</span> <br/>
                  <a onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                  Đăng xuất
                </a>
                </a>
                
              </div>
            ) : (
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
                <a style={{ color: 'white' }} className="icon">
                  <BsPersonFill />
                </a>
                <span>Đăng nhập</span>
              </Link>
            )}
            <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>
              <a style={{ color: 'white', textDecoration: 'none' }} className="icon">
                <FaCartShopping />
              </a>
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="category">
          <ul>
            <li className="category-item">
              <a  href="#" >TRANG SỨC NAM</a>
              <div className="sub-category">
                <a href="#">Dây chuyền vàng</a>
                <a href="#">Bộ Trang Sức Vàng</a>
                <a href="#">Kẹp Caravat Vàng</a>
                <a href="#">Lắc tay nam vàng</a>
                <a href="#">Mặt Dây Chuyền Nam</a>
                <a href="#">Nhẫn Nam Bạc</a>
                <a href="#">Nhẫn Nam Đẹp</a>
                <a href="#">Thắt Lưng Vàng Tây</a>
              </div>
            </li>
            <li className="category-item">
              <a  href="#">TRANG SỨC NỮ</a>
              <div className="sub-category">
                <a href="#">Dây Chuyền Nữ</a>
                <a href="#">Dây Mặt Chữ Vàng</a>
                <a href="#">Hoa Tai Vàng Đá Quý</a>
                <a href="#">Kiềng Vàng</a>
                <a href="#">Mặt Dây Vàng Đá Quý</a>
                <a href="#">Nhẫn Đính Hôn</a>
                <a href="#">Nhẫn Nữ Đá Quý</a>
                <a href="#">Lắc Vàng Tây Đá Quý</a>
                <a href="#">Lắc Chân Vàng</a>
                <a href="#">Lắc Vàng Trẻ Em</a>
                <a href="#">Trang Sức Bộ</a>
                <a href="#">Vỏ Nhẫn Kim Cương</a>
                <a href="#">Ghim Cài Áo Vàng</a>
                <a href="#">Con Giáp Vàng 24k</a>
                <a href="#">Vòng tay vàng tây</a>
              </div>
            </li>
            <li className="category-item">
              <a  href="#">NHẪN CƯỚI ĐẸP</a>
              <div className="sub-category">
                <a href="#">Nhẫn Cưới Vàng Tây</a>
                <a href="#">Nhẫn Cưới Vàng 18k</a>
                <a href="#">Nhẫn Cưới Trơn</a>
                <a href="#">Nhẫn Cưới Vàng Trắng</a>
                <a href="#">Nhẫn Cưới Kim Cương</a>
                <a href="#">Nhẫn Cưới Theo Mệnh</a>
                <a href="#">Nhẫn Cưới Giá Rẻ</a>
              </div>
            </li>
            <li className="category-item">
              <a  href="#">TRANG SỨC BẠC</a>
              <div className="sub-category">
                <a href="#">Bông Tai</a>
                <a href="#">Dây chuyền bạc đẹp</a>
                <a href="#">Lắc Trẻ Em</a>
                <a href="#">Lắc bạc đẹp</a>
                <a href="#">Mặt dây chuyền bạc đẹp</a>
                <a href="#">Mặt Dây Chữ</a>
                <a href="#">Nhẫn Ngọc Rồng</a>
                <a href="#">Nhẫn nữ bạc đẹp</a>
                <a href="#">Nhẫn ngón chân</a>
                <a href="#">Nhẫn Đôi</a>
              </div>
            </li>
            <li className="category-item">
              <a  href="#">TRANG SỨC CÔNG GIÁO</a>
              <div className="sub-category">
                <a href="#">Chuỗi Mân Côi</a>
                <a href="#">Mặt Thánh Giá</a>
                <a href="#">Mặt Dây Công Giáo</a>
                <a href="#">Nhẫn Công Giáo</a>
              </div>
            </li>
            <ul  className="category-item">
              <li><a  href="#">ĐÁ QUÝ THIÊN NHIÊN</a></li>
              <div className="sub-category">
                <div  className="sub-category-grid">
                  <div>
                    <ul>
                  <li><a href="#">Amber-Hổ Phách</a></li> 
                  <li><a href="#">Aventurine</a></li>  
                  <li><a href="#">Garnet</a></li>
                  <li><a href="#">Aquamarine</a></li> 
                  <li><a href="#">Apatite</a></li>
                  <li><a href="#">Đá Mắt Hổ</a></li>  
                  <li><a href="#">Berin -beryl</a></li> 
                  <li><a href="#">Diopside</a></li> 
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><a href="#">Canxedon</a></li>
                      <li><a href="#">Đá Mặt Trời</a></li>
                      <li><a href="#">Fluorit</a></li>
                      <li><a href="#">Anyolite-Zoisite</a></li>  
                      <li><a href="#">Gỗ Hóa Thạch</a></li>
                      <li><a href="#">Iolite</a></li>
                      <li><a href="#">Vàng găm-Pirit</a></li>
                      <li><a href="#">Emerald</a></li>
                      
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li> <a href="#">KIM CƯƠNG TỰ NHIÊN</a></li>
                      <li> <a href="#">Kyanit</a></li>
                      <li> <a href="#">Kim Cương Nhân Tạo</a></li>
                      <li><a href="#">Lapis Lazuli</a></li>
                      <li> <a href="#">Labradorit</a></li>
                      <li> <a href="#">Mã Não</a></li>
                      <li>  <a href="#">Malachit-Đá lông công</a></li>
                      <li>  <a href="#">Moon Stone</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li> <a href="#">NGỌC CẨM THẠCH</a></li>
                      <li> <a href="#">Ngọc Trai</a></li>
                      <li><a href="#">Ngọc Pakistan</a></li>
                      <li><a href="#">Opal</a></li>
                      <li> <a href="#">Ngọc mắt mèo</a></li>
                      <li> <a href="#">Obsidian</a></li>                 
                      <li><a href="#">Ốc Anh Vũ Hóa Thạch</a></li>
                      <li><a href="#">Ruby</a></li>                   
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><a href="#">Pietersite</a></li>
                     
                      <li><a href="#">Ngọc Nephrite</a></li>
                      <li><a href="#">Sapphire</a></li>
                      <li> <a href="#">Thạch Anh Vàng</a></li>
                      <li> <a href="#">San Hô Đỏ</a></li>                     
                      <li><a href="#">Thạch Anh Tím</a></li> 
                      <li><a href="#">Turquoise</a></li>
                      <li><a href="#">Thạch Anh</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
            <li className="category-item">
              <a  href="#">VÒNG TAY ĐÁ</a>
              <div className="sub-category">
                <a href="#">Vòng Tay Thạch Anh</a>
                <a href="#">Vòng Tay Mã Não</a>
                <a href="#">Vòng Tay Tỳ Hưu</a>
                <a href="#">Vòng Tay Đá Phong Thủy</a>
                <a href="#">Vòng Tay Đá Phong Thủy Nam</a>
                <a href="#">Vòng Tay Đá Phong Thủy Nữ</a>
                <a href="#">Vòng Tay Mix Charm</a>
              </div>
            </li>
            <li className="category-item">
              <a  href="#">ĐÁ PHONG THỦY</a>
              <div className="sub-category">
                <a href="#">Cầu Đá Quý Thiên Nhiên</a>
                <a href="#">Cây Đá Quý Tài Lộc</a>
                <a href="#">Dây đeo Điện Thoại</a>
                <a href="#">Động Thạch Anh</a>
                <a href="#">Tháp Văn Xương</a>
                <a href="#">Thất Tinh Trận</a>
                <a href="#">Tụ Bát Bảo</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
 
  );
};

export default Header;