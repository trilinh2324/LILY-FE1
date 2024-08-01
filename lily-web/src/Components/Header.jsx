// src/components/Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.css';
import logo1 from './Image/logo/logo2.png';
import { BsPersonFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { useParams, Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className='Header-nav'>
        <header className="header">
          <div className="header-section section1">
            
          <Link to="/">
        <img src={logo1} alt="Logo" className="logo" />
      </Link>
            
           
          </div>
          <div className="header-section section2">
            <div  className="search-bar">
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
              <a style={{color:'white'}} className="icon"><BsPersonFill /></a>  <a> Đăng nhập</a>
              <a  style={{color:'white'}} className="icon"><FaCartShopping /></a>  <a>Giỏ hàng</a>
            </div>
          </div>
        </header>
        <div className="category">
          <ul>
            <li><a href="#category1">TRANG SỨC NAM</a></li>
            <li><a href="#category2">TRANG SỨC NỮ</a></li>
            <li><a href="#category3">NHẪN CƯỚI ĐẸP</a></li>
            <li><a href="#category4">TRANG SỨC BẠC</a></li>
            <li><a href="#category5">TRANG SỨC CÔNG GIÁO</a></li>
            <li><a href="#category6">ĐÁ QUÝ THIÊN NHIÊN</a></li>
            <li><a href="#category7">VÒNG TAY ĐÁ</a></li>
            <li><a href="#category8">ĐÁ PHONG THỦY</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
