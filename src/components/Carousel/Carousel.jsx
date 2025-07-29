import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Asegúrate de tener estilos si deseas

const images = [
  '/Img/Car1.jpg',
  '/Img/Car2.jpg',
  '/Img/Car3.jpg',
];

const waitTime = 3000; // 3 segundos

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, waitTime);

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
}

export default Carousel;