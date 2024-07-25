
import React from 'react';
import './Home.css';
import ImageSlider from '../Components/ImageSlider';
const Home = () => {
  return (
    <div>
       <ImageSlider />
    
    <main className="home">
       
      <section className="hero">
        <h1>Welcome to MySite</h1>
        <p>Your journey starts here.</p>
      
      </section>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Description of Feature 1</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Description of Feature 2</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Description of Feature 3</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Description of Feature 3</p>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Description of Feature 1</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Description of Feature 2</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Description of Feature 3</p>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Description of Feature 1</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Description of Feature 2</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Description of Feature 3</p>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Description of Feature 1</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Description of Feature 2</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Description of Feature 3</p>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Description of Feature 1</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Description of Feature 2</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Description of Feature 3</p>
        </div>
      </section>
    </main>
    <div class="footer-nav">
  <div  style={{fontWeight:'bold',fontSize:'20px'}} class="footer-section">
  <a>Đăng ký email nhận tin:
    <a>  <input style={{width:'300px',height:'40px',fontSize:'20px',padding:'10px'}} type="email" />
     <a> <button style={{width:'50px',height:'44px',backgroundColor:'red'}}> OK</button></a>
    </a>
  </a>
  </div>
  <div class="footer-section">Section 2</div>
</div>

    </div>
  );
};

export default Home;
