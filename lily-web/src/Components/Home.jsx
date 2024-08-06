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
          <h4>SẢN PHẨM MỚI</h4>
          <ProductList />
        </section>
        <section className="hero">
          <h4>NHẪN NAM ĐẸP</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>DÂY CHUYỀN VÀNG</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>MẶT DÂY VÀNG ĐÁ QUÝ</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>DÂY CHUYỀN NỮ</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>MẶT DÂY CHUYỀN CHỮ VÀNG</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>HOA TAI VÀNG ĐÁ QUÝ</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>KIỀNG VÀNG</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>VÒNG TAY VÀNG TÂY</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>TRANG SỨC BỘ</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>LẮC CHÂN VÀNG</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>LẮC VÀNG TÂY ĐÁ QUÝ</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>NGỌC CẨM THẠCH</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>RUBY</h4>
          <p>Your journey starts here.</p>
        </section>
        <section className="hero">
          <h4>KIM CƯƠNG</h4>
          <p>Your journey starts here.</p>
        </section>
        
      </main>
      <Footer />
    </div>
    
  );
};

export default Home;
