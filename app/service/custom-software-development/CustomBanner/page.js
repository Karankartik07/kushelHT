'use client';
import React from "react";
import Image from "next/image";
import "./custombanner.css";

const CustomBanner = () => {
  return (
    <section className="custom-banner-section">
      <div className="custom-banner-overlay">
        <div className="custom-banner-container">
          <h1 className="custom-banner-heading">
            Best Custom <br />
            <span className="custom-banner-span">Software Development Company</span>
          </h1>
          <p className="custom-banner-subtext">
            As a full-service software development company, we have been helping
            organizations across the globe build powerful software solutions and
            foster innovation. Our team of creative software developers and
            designers has extensive expertise in designing and developing
            cutting-edge digital solutions for diverse industries. Partner with us
            and experience unparalleled development expertise in website and
            mobile development services.
          </p>
          <div className="custom-banner-buttons">
            <button className="custom-banner-btn-yellow">OUR WORK</button>
            <button className="custom-banner-btn-outline">BOOK MEETING</button>
          </div>
          <div className="custom-banner-clutch">
            {/* <span>REVIEWED ON</span> */}
            <Image src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1749621361/clutch_hmcjmf.webp" alt="Clutch" width={250} height={50} />
            {/* <span className="custom-banner-rating">4.9 out of 5</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBanner;
