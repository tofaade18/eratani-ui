import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Wasroni",
      role: "Petani",
      quote:
        "Harapan saya Eratani semakin meluas karena sangat amat dibantu dengan adanya Eratani. Terima kasih Eratani!",
      image: "https://via.placeholder.com/150", // Replace with actual image
      buttonText: "Putar Video",
    },
    {
        name: "Teguh",
        role: "Petani",
        quote:
          "Terima kasih Eratani! Semoga Eratani semakin meluas karena sangat amat dibantu dengan adanya Eratani.",
        image: "https://via.placeholder.com/150", // Replace with actual image
        buttonText: "Putar Video",
    }
  ];

  const services = [
    {
      title: "Pembiayaan",
      description:
        "Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian.",
      icon: "💰", // Replace with actual icon/image if needed
    },
    {
      title: "Manajemen Rantai Pasok",
      description:
        "Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi.",
      icon: "🔗", // Replace with actual icon/image if needed
    },
    {
      title: "Distribusi & Penjualan",
      description:
        "Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi.",
      icon: "🚚", // Replace with actual icon/image if needed
    },
  ];

  return (
    <section className="support-farmers-section">
      {/* Services Section */}
      <h2 className="section-title">Peduli Petani Bersama Eratani</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <h2 className="section-title">Kata Mereka</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <button className="testimonial-button">
                {testimonial.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
