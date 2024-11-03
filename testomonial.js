// Testimonials.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <Swiper
        loop={true}
        effect="slide"
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide><div className="testimonial">Testimonial 1</div></SwiperSlide>
        <SwiperSlide><div className="testimonial">Testimonial 2</div></SwiperSlide>
        <SwiperSlide><div className="testimonial">Testimonial 3</div></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
