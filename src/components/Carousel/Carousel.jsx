import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const images = [
  '/Img/Car1.jpg',
  '/Img/Car2.jpg',
  '/Img/Car3.jpg',
];

const waitTime = 2500; 

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, waitTime);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
}

export default Carousel;