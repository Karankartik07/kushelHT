'use client';

import React, { useState, useEffect, useRef } from 'react';
import './customservice.css';
import { MdArrowOutward } from 'react-icons/md';
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const services = [
  {
    title: "Custom software development",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://media.nature.com/w1248/magazine-assets/d41586-025-01860-z/d41586-025-01860-z_51094000.jpg?as=webp",
  },
  {
    title: "Mobile application development",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "Dedicated teams",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "Artificial intelligence",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://media.nature.com/w1248/magazine-assets/d41586-025-01860-z/d41586-025-01860-z_51094000.jpg?as=webp",
  },
  {
    title: "Ecommerce development",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "UI/UX design",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "Quality assurance",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://media.nature.com/w1248/magazine-assets/d41586-025-01860-z/d41586-025-01860-z_51094000.jpg?as=webp",
  },
  {
    title: "Data & analytics",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "Cloud & devops",
    desc: "We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
  },
];

const ExpandableCard = ({ title, desc, image, onHoverChange, onNext, onPrev, isVisible }) => {
  return (
    <div
      className="expand-card"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <div className="image-box">
        <img src={image} alt={title} />
      </div>
      <div className="content-box">
        <h2><span>{title}</span></h2>
        <p>{desc}</p>

        <a className="view-service" href="#">
          <span className="view-text">
            <span className="icon left-icon"><MdArrowOutward /></span>
            <span className="texttt1">View service</span>
            <span className="icon right-icon"><MdArrowOutward /></span>
          </span>
        </a>

        <div className={`bottom-controls ${isVisible ? 'animate-progress' : ''}`}>
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
          <div className="arrows">
            <button onClick={onPrev}><HiArrowSmallLeft /></button>
            <button onClick={onNext}><HiArrowSmallRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomServices = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isHovered) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered, isVisible]);

  const toggleExpand = (index) => setActive(index);

  return (
    <div className="services-section" ref={sectionRef}>
      <div className="section-header">
        <h2>Full-cycle software development services</h2>
        <p>
          We serve as an end-to-end technology partner, delivering high-quality
          software solutions relying on profound technical expertise and deep
          understanding of the business domain.
        </p>
      </div>

      <div className="services-slider-wrapper">
        <div className="right-panel">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              {active !== index && (
                <div className="service-tab" onClick={() => toggleExpand(index)}>
                  <p>{service.title}</p>
                  <span className="plus">+</span>
                </div>
              )}
              {active === index && (index !== 0 || isVisible) && (
                <div className={`expand-wrapper ${index === 0 ? 'ltr' : 'rtl'}`}>
                  <ExpandableCard
                    title={service.title}
                    desc={service.desc}
                    image={service.image}
                    onHoverChange={setIsHovered}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    isVisible={isVisible}
                    index={index}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <a className="bottom-service-btn" href="#">
        <span className="bottom-btn-text">
          <span className="icon left-icon"><MdArrowOutward /></span>
          <span className="texttt1">All Services</span>
          <span className="icon right-icon"><MdArrowOutward /></span>
        </span>
      </a>
    </div>
  );
};

export default CustomServices;
