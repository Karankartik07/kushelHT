"use client";
import React from "react";
import "./cycle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744959579/Mask_group_46_qqvbvk.png",
    title: "Decoupled Architecture",
    description: "Define and align your project’s vision with internal goals.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744959579/Mask_group_47_eo2g00.png",
    title: "Omnichannel Experience",
    description: "UI/UX design services for engaging and efficient digital products.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744959843/Mask_group_48_ejfo7p.png",
    title: "Faster Page Load Times",
    description: "Robust architecture design for scalable software solutions.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744959843/Mask_group_49_gsjujw.png",
    title: "Customizable Frontend Design",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960432/Mask_group_55_molofs.png",
    title: "Centralized Backend Management",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960441/Mask_group_50_b07bs9.png",
    title: "Personalization",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960440/Mask_group_51_o200tw.png",
    title: "Advanced Search and Navigation",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960439/Mask_group_52_lfvdue.png",
    title: "Robust Security and Compliance",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960438/Mask_group_53_kjj9ap.png",
    title: "Multi-Device Support",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960432/Mask_group_55_molofs.png",
    title: "Marketing Automation Integration",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960432/Mask_group_56_sij6rm.png",
    title: "API-First Approach",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960432/Mask_group_57_iy77ii.png",
    title: "Microservices Architecture",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960431/Mask_group_58_perzs9.png",
    title: "Headless CMS Integration",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960431/Mask_group_59_xambcd.png",
    title: "PWA Compatibility",
    description: "Full-cycle development tailored to business goals and needs.",
  },

  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744960440/Mask_group_51_o200tw.png", 
    title: "Advanced Analytics and Reporting",
    description: "Full-cycle development tailored to business goals and needs.",
  },
];

const FullCycleEngineering = () => {
  const firstHalf = services.slice(0, 7);
  const secondHalf = services.slice(7, 15); // 8 cards

  return (
    <div className="full-cycle-container">
      <div className="header-with-buttons">
        <h3 className="full-cycle-heading">Features of Headless Commerce</h3>
      </div>

      <p className="full-cycle-subtext">
        Headless Commerce can power your online store by offering scalability,
        flexibility, seamless integrations and advanced features that will
        definitely drive success in the eCommerce landscape.
      </p>

      <div className="dual-swiper-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="service-slider"
        >
          {firstHalf.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="service-icon">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="service-slider reverse-slider"
        >
          {secondHalf.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="service-icon">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FullCycleEngineering;
