'use client';
import React, { useRef } from 'react';
import './industrycustom.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";


const sectors = [
  {
    iconImage: "https://eleks.com/wp-content/uploads/fintech-icon-blue.svg",
    title: "Fintech",
    points: ["Navigate financial risks with ease", "Speed up transactions, reduce costs"],
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1749709451/industry-fintech-big_zcogxd.jpg"
  },
  {
    iconImage: "https://eleks.com/wp-content/uploads/healthcare-blue-icon.svg",
    title: "Healthcare",
    points: ["Deliver exceptional patient service", "Automate tasks, optimise costs"],
    image: "https://eleks.com/wp-content/uploads/industry-healthcare-big.jpg"
  },
  {
    iconImage: "https://eleks.com/wp-content/uploads/gas-and-energy-blue-icon.svg",
    title: "Energy",
    points: ["Boost efficiency", "Reduce carbon footprint"],
    image: "https://eleks.com/wp-content/uploads/industry-energy-big.jpg"
  },
  {
    iconImage: "https://eleks.com/wp-content/uploads/government-icon-blue.svg",
    title: "Government",
    points: ["Digitise services", "Cybersecurity support"],
    image: "https://eleks.com/wp-content/uploads/industry-government-big.jpg"
  }
];


function IndustryCustom() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="sector-slider-container">
      <div className="slider-header">
        <h2 className="slider-title">Game-changing solutions tailored for every sector</h2>
        <div className="slider-buttons">
          <button onClick={() => sliderRef.current.slickPrev()} className="slider-arrow"><FaChevronLeft /></button>
          <button onClick={() => sliderRef.current.slickNext()} className="slider-arrow"><FaChevronRight/></button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {sectors.map((sector, index) => (
          <div className="sector-slide" key={index}>
            <div className="sector-card">
              <div className="sector-image-wrapper">
                <img src={sector.image} alt={sector.title} />
                <div className="sector-image-overlay"></div>
              </div>
              <div className="sector-content">
                <div className="sector-icon">
                  <img src={sector.iconImage} alt={`${sector.title} icon`} />
                </div>
                <h3 className="sector-title">{sector.title}</h3>
                <div className="sector-points">
                  {sector.points.map((point, i) => (
                    <p key={i}>{point}</p>
                  ))}
                </div>
              </div>
              <div className="sector-footer">
  <button className="sector-btn">
    <span className="btn-icon left-icon"><MdArrowOutward /></span>
    <span className="btn-text">View Industry</span>
    <span className="btn-icon right-icon"><MdArrowOutward /></span>
  </button>
</div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default IndustryCustom;
