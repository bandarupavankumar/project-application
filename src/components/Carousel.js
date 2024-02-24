import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // Change the speed here (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="assets/carousel/1.jpg" alt="slide1" />
      </div>
      <div>
        <img src="assets/carousel/2.jpg" alt="slide2" />
      </div>
      <div>
        <img src="assets/carousel/3.jpg" alt="slide3" />
      </div>
      <div>
        <img src="assets/carousel/4.jpg" alt="slide3" />
      </div>
      <div>
        <img src="assets/carousel/5.jpg" alt="slide3" />
      </div>
    </Slider>
  );
};

export default Carousel;