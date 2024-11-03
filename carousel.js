// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Loop } from 'swiper';

// Configure Swiper to use modules
SwiperCore.use([Autoplay]);

const Carousel = () => {
  return (
    <section id="carousel">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
      >
        <SwiperSlide><div className="slide">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="slide">Slide 2</div></SwiperSlide>
        <SwiperSlide><div className="slide">Slide 3</div></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
