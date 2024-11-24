import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const slides = [
    "https://eratani.co.id/hero/3.jpg",
    "https://eratani.co.id/hero/1.jpg",
    "https://eratani.co.id/hero/2.jpg",
  ];

  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="hero-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-overlay">
        <h1>Lebih Dekat dengan Petani</h1>
        <p>Bersama Eratani, jadikan pertanian lebih maju dan produktif.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
