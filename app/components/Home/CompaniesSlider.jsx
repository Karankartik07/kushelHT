"use client";

import React from "react";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slider1Images = [
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png", alt: "Lafayette Shooters project logo by Kushel Digi Solutions" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png", alt: "2nd Amendment project logo by Kushel Digi Solutions" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png", alt: "KICK-EEZ image for ecommerce website development by Kushel Digi Solutions" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668956/blackrhino_bufosy.png", alt: "Black Rhino ecommerce logo", className: "w-[45%]" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png", alt: "CodePXLProject logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1_171280660_tyojfe.png", alt: "Sites and Scopes logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668955/70904_228x204_1_l5j13v.png", alt: "MadFish Solutions logo", className: "w-[45%]" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668955/Slide365_Logo_1_sgrncf.png", alt: "Slide365 logo" },
];

const slider2Images = [
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/rifle_zq5k1k.png", alt: "Rifle Supply logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1171280661_capgvx.png", className: "w-[40%] sm:w-[50%]", alt: "Ride ready Logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668955/2AA_Logo_Black_2_1_ickkxz.png", className: "w-[40%] sm:w-[50%]", alt: "Armored project logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668955/sa_rqpzv0.png", alt: "Serv A Pure logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/graco_tw5ipb.png", alt: "GRACO CORPORATION logo" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058139/Group_1171281500_kye3hk.png", alt: "Top Brasst logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/solenoid_f5nbub.png", alt: "Solenoid Ninja Logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/typhoon_sorthk.png", alt: "Typhoon Defense Logo" },
];

const slider3Images = [
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/bobcat_fo7ruq.png", alt: "Bobcat Armament logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/four_sob0lr.png", alt: "Four Oaks Farm logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668954/landf_swe3ad.jpg", alt: "Land Big Fish logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743672316/Group_1171280670_1_fsujvq.png", alt: "Survival Mode Tactical logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png", alt: "Lafayette Shooters Logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png", alt: "2nd Amendment Logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png", alt: "KICK-EEZ Logo" },
  { src: "https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png", alt: "CodePXL Logo" },
];

const SwiperSlider = ({ images, reverse }) => (
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: reverse }}
    loop={true}
    speed={4000}
    slidesPerView={4}
    spaceBetween={20}
    breakpoints={{
      0: { slidesPerView: 2 },
      600: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    className="my-5"
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center items-center p-2 w-[90%] h-[150px] bg-white mx-auto">
          <Image
            width={298}
            height={173}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className={`object-contain w-[52%] sm:w-[65%] ${img.className || ""}`}
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const CompaniesSlider = () => {
  return (
    <section className="w-full bg-[#f5f3ef] py-[50px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-[30px]">
          <p className="text-center text-[32px] md:text-[32px] sm:text-[25px] leading-[35px] font-bold max-w-[90%] mx-auto">
            Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
          </p>
        </div>
        <SwiperSlider images={slider1Images} />
        <SwiperSlider images={slider2Images} reverse />
        <SwiperSlider images={slider3Images} />
      </div>
    </section>
  );
};

export default CompaniesSlider;
