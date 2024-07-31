import React from 'react';
import './Home.css';
import ImageSlider from '../Components/ImageSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faPinterest,  } from '@fortawesome/free-brands-svg-icons';
import zaloIcon from '../Components/Image/iconzalo.png';
import youtubeIcon from '../Components/Image/iconyoutube.png';
import TwitterIcon from '../Components/Image/icontwitter.png';
import intagramIcon from '../Components/Image/iconinstagram.png';
import pinterestIcon from '../Components/Image/iconpinterest.png';
import facebookIcon from '../Components/Image/iconfacebook.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductList  from './Product/ProductList';
const Home = () => {
  return (
    <div>
       <Header />
      <ImageSlider />
      <main className="home">
        <section className="hero">
          <h2>SẢN PHẨM MỚI</h2>
          <ProductList />
        </section>
        <section className="hero">
          <h2>NHẪN NAM ĐẸP</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>DÂY CHUYỀN VÀNG</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>MẶT DÂY VÀNG ĐÁ QUÝ</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>DÂY CHUYỀN NỮ</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>MẶT DÂY CHUYỀN CHỮ VÀNG</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>HOA TAI VÀNG ĐÁ QUÝ</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>KIỀNG VÀNG</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>VÒNG TAY VÀNG TÂY</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>TRANG SỨC BỘ</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>LẮC CHÂN VÀNG</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>LẮC VÀNG TÂY ĐÁ QUÝ</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>NGỌC CẨM THẠCH</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>RUBY</h2>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h2>KIM CƯƠNG</h2>
          <p>Your journey starts here.</p>
        </section>
        
      </main>
      <Footer />
    </div>
    
  );
};

export default Home;
