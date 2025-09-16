'use client';

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewSlider.css';
import Slider from "react-slick";
import Image from "next/image";

const slider1Images = [
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png', alt: "Lafayette Shooters project logo by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png', alt: "2nd Amendment project logo by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png', alt: "KICK-EEZ image for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668956/blackrhino_bufosy.png', alt: "Black Rhino image for ecommerce website development by Kushel Digi Solutions", className: 'black-rhino-img' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png', alt: "CodePXLProject logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1_171280660_tyojfe.png', alt: "Sites and Scopes Project logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/70904_228x204_1_l5j13v.png', alt: "MadFish Solutions project logo by Kushel Digi Solutions", className: 'madfish-img' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/Slide365_Logo_1_sgrncf.png', alt: "Slide365 project logo by Kushel Digi Solutions" },
];

const slider2Images = [
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/rifle_zq5k1k.png', alt: "Rifle Supply logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1171280661_capgvx.png', className: 'ride-img', alt: "Ride ready Logo for ecommerce website development  by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/2AA_Logo_Black_2_1_ickkxz.png', className: 'armore-img', alt: "Project logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/sa_rqpzv0.png', alt: "Serv A Pure logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/graco_tw5ipb.png', alt: "GRACO CORPORATION for ecommerce website development" },
  // { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/topbrasstactical_miqpat.png' },
  { src: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058139/Group_1171281500_kye3hk.png', alt: "Top Brasst Logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/solenoid_f5nbub.png', alt: "SoleSolenoid Ninja Logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/typhoon_sorthk.png', alt: "Typhoon Defense Logo for ecommerce website development " },
];

const slider3Images = [
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/bobcat_fo7ruq.png', alt: "Bobcat Armament logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/four_sob0lr.png', alt: "Four Oaks Farm logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/landf_swe3ad.jpg', alt: "Land Big FIsh logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743672316/Group_1171280670_1_fsujvq.png', alt: "Survival Mode Tactical logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png', alt: "Lafayette Shooters Logo image for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png', alt: "2nd Amendment  Logo image for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png', alt: "KICK-EEZ Logo image for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png', alt: "CodePXL image for ecommerce website development by Kushel Digi Solutions" },
];

const CompaniesSlider = () => {
  const [autoplaySpeed, setAutoplaySpeed] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplaySpeed(4000);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const commonSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: autoplaySpeed,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnHover: false,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const renderSlider = (images, rtl = false) => (
    <Slider {...commonSettings} rtl={rtl} className="custom-slider">
      {images.map((img, index) => (
        <div className="slide-item" key={index}>
          <Image
            width={298}
            height={173}
            loading="lazy"
            src={img.src}
            alt={img.alt}
            className={img.className || ''}
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <>
      <section className="logo-container">
        <div className="logo-sliders">
          <div className="logo-heading">
            <p className="primary-heading">
              Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
            </p>
          </div>
          {renderSlider(slider1Images)}
          {renderSlider(slider2Images, true)}
          {renderSlider(slider3Images)}
        </div>
      </section>
    </>
  );
};

export default CompaniesSlider;
