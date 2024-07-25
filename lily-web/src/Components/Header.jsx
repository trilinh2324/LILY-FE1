// src/components/Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import biểu tượng tìm kiếm từ react-icons
import './Header.css';
import logo1 from'./Image/logo/logo2.png'
import { BsPersonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <div className='Hearder-nav'>
        <header className="header">
          <div className="header-section section1">
                <img
                  src={logo1}
                  alt="Logo"
                  style={{ width: '100px', height: '80px', paddingLeft: '40px', paddingTop: '0px' }}
                />
             
          </div>
          <div className="header-section section2">
            <div className="search-bar">
              <input style={{fontSize:'18px'}} type="text" placeholder="Nhập từ khóa bạn cần tìm " />
              <FaSearch className="search-icon" />
            </div>
          </div>
          <div className="header-section section3">
            <div style={{ fontSize:'20px',fontWeight:'bold'}}className="column1">
               <a >Tư vấn bán hàng</a><br/>
               <a>0339806596</a> 
            </div>
            <div  style={{fontSize:'20px',fontWeight:'bold'}} className="column2">
               <a>Hotline</a><br/> 
                <a>0866093674</a> 
                 </div>
            <div  style={{fontSize:'20px',fontWeight:'bold'}} className="column3">
           <a>SALE</a> <br/>
           <a>Tin tức </a> 
                </div>
          </div>
          <div  className="header-section section4">
            <div style={{marginLeft:'-50px',paddingTop:'40px'}}>
          <a  style={{fontSize:'30px'}}><BsPersonFill /></a>  <a style={{fontSize:'25px',paddingRight:' 15px'}}> Đăng nhập</a>
       <a style={{fontSize:'30px'}}><FaCartShopping /></a>   <a style={{fontSize:'25px',paddingRight:' 15px'}}>Giỏ hàng</a>
            </div>
         
         </div>
        </header>
        <div style={{fontSize:'20px'}} className="category">
          <ul style={{ paddingTop: '10px'}}>
      
            <li><a href="#category1">TRANG SỨC NAM</a></li>
            <li><a href="#category2">TRANG SỨC NỮ</a></li>
            <li><a href="#category3">NHẪN CƯỚI ĐẸP</a></li>
            <li><a href="#category3">TRANG SỨC BẠC</a></li>
            <li><a href="#category3">TRANG SỨC CÔNG GIÁO</a></li>
            <li><a href="#category3">ĐÁ QUÝ THIÊN NHIÊN</a></li>
            <li><a href="#category3">VÒNG TAY ĐÁ</a></li>
            <li><a href="#category3">ĐÁ PHONG THỦY</a></li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
