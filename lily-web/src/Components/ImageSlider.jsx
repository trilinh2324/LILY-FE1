import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 

// Import các hình ảnh
import home1 from './Image/home1.jpg';
import home2 from './Image/home2.jpg'; // Thêm các ảnh khác
import home3 from './Image/home3.jpg';


// Mảng chứa các đường dẫn hình ảnh
const images = [home1, home2, home3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider" onClick={handleClick}>
      <img style={{marginTop:'20px'}} src={images[currentIndex]} alt="Slider" className="slider-image" />
    </div>
  );
};

export default ImageSlider;
