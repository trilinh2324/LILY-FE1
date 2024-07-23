import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsMinecart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdLogOut } from 'react-icons/io';
import { useContext, useState } from 'react';
import UserContext from './User/UserContext';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../Components/Image/logo-kimtim2.png';
import '../Components/HeaderNavbar.css';
import { BiCube } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

function HeaderNavbar({ cartItems }) {
  const { loginStatus, setLoginStatus } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState("");

  const handleLogout = () => {
    setLoginStatus("logout");
  };

  function handleSearch() {
    if (searchInput.toLowerCase().includes("sofa")) {
      return "/sofa";
    } else if (searchInput.toLowerCase().includes("chair")) {
      return "/chair";
    } else if (searchInput.toLowerCase().includes("table")) {
      return "/table";
    } else if (searchInput.toLowerCase().includes("product")) {
      return "/products";
    } else if (searchInput.toLowerCase().includes("bed")) {
      return "/bed";
    }
  }

  const toggleButtonActiveState = (event) => {
    event.preventDefault();
    const button = event.target;
    button.classList.toggle('active');
  };

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <div className='Nav-full'> 
          <div className="Nav-bar">
            <div className="left-section">
              <Link className="logo" to="/">
                <img
                  src={logo1}
                  alt="Logo"
                  style={{ width: '100px', height: '80px', paddingLeft: '40px', paddingTop: '15px' }}
                />
              </Link>
            </div>

            <form id="search-form" action="/search" method="get">
              <div className="search-container">
                <CiSearch className="search-icon" />
                <input type="text" id="search-input" name="query" placeholder="Tìm kiếm sản phẩm..." />
              </div>
            </form>

            <div className="right-section">
              <button className="hoverable-button">
                {loginStatus === "success" ? (
                  <Link className="login-logo link-text" to="/" onClick={handleLogout}>
                    <IoMdLogOut />
                  </Link>
                ) : (
                  <Link className="login-logo link-text" to="/login">
                    <AiOutlineUser />
                    Tài khoản
                  </Link>
                )}
              </button>
              <button className="hoverable-button">
                <Link className="cart-logo link-text" to="/">
                  <BiCube />
                  Sản phẩm đã xem
                </Link>
              </button>
              <Link className="cart-logo" to="/cart">
                <BsMinecart/>
                <Badge pill bg="secondary" className="cart-badge">
                  {cartItems.length}
                </Badge>
              </Link>
            </div>
          </div>

          <div className="third-nav">
            <Link to="/" className="service-text">VÒNG TAY</Link>
            <a className="service-text" href="/">NHẪN</a>
            <a className="service-text" href="/">DÂY CHUYỀN</a>
            <a className="service-text" href="/">BÔNG TAI</a>
            <a className="service-text" href="/">KHUYÊN XỎ</a>
            <a className="service-text" href="/">TRANG SỨC ĐÔI</a>
            <a className="service-text" href="/">TRANG SỨC BỘ</a>
            <a className="service-text" href="/">PHONG THỦY</a>
            <a className="service-text" href="/">QUÀ TẶNG</a>
            <a className="service-text" href="/">PHỤ KIỆN</a>
            <a className="service-text" href="/">SẢN PHẨM MỚI</a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
