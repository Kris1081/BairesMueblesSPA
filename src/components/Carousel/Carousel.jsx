import React, {useState} from 'react';
import './Carousel.css';

const images = [
    
    '/Img/Car1.jpg',
    '/Img/Car2.jpg',
    '/Img/Car3.jpg',
];
function Carousel(){
    const[currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1)% images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length)% images.length)
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>‹</button>
            <img src={images[currentIndex]} alt="slide" />
            <button onClick={nextSlide}>›</button>
        </div>
    );
    
}

export default Carousel;