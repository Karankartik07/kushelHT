"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import  "./styles.css"; 
import Link from "next/link";

function Home2Swiper() {
  const splideRef = useRef(null);
  

  const goPrev = () => {
    splideRef.current.splide.go("-1");
  };

  const goNext = () => {
    splideRef.current.splide.go("+1");
  };

  return (
    <div className="h2swiperwrap">
      <div className="h2swipcont">
        <Splide
        aria-label='image-slider'
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 4,
            start: 0,
            speed: 2000,
            gap: "0px",
            autoplay: true,
            pagination: false,
            arrows: false,
            accessibility: false,
            breakpoints: {
              550: {
                perPage: 7,
                gap: "10px",
              },
              750: {
                perPage: 5,
                gap: "10px",
              },
              1400: {
                perPage: 4,
                gap: "0px",
              },
            },
          }}
          className="mySwiper32"
        >
          {/* Slides */}
          {[
            {
              src: "https://res.cloudinary.com/ecommerce-website/image/upload/v1724771692/r3_jrfuwm.webp",
              title: "Slides 365",
              buttons: ["D2C", "E-commerce"],
              link:"Slidesdesign"
            },
            {
              src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743074113/page-4_wlgfqf.jpg",
              title: "Sites and Scopes",
              buttons: ["B2B", "Drop Shipping"],
              link:"sites"
            },
            {
              src: "https://res.cloudinary.com/ecommerce-website/image/upload/v1724771731/r5_ncdkkn.webp",
              title: "Servapure",
              buttons: ["E-commerce", "D2C"],
              link:"#"
            },
            {
              src: "https://res.cloudinary.com/ecommerce-website/image/upload/v1724771748/r6_seznmz.webp",
              title: "2nd Amendment Armory",
              buttons: ["Ecommerce", "Firearms"],
              link:"2ndamendment"
            },
            {
              src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743074113/page-1_ssh3ru.jpg",
              title: "Top Brass Tactical",
              buttons: ["Ecommerce", "Tactical Gear"],
              link:"topbrass"
            },
            {
              src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743074113/page-3_z0uhrk.jpg",
              title: "2nd Amendment Guns",
              buttons: ["Ecommerce", "Firearms"],
              link:"#"
            },
          ].map((slide, index) => (
            <SplideSlide aria-hidden="false" key={index}>
              <div className="singswiperdiv">
               <a href={slide.link}>
               <Image
                  src={slide.src}
                  alt={slide.title}
                  title={slide.title}
                  width={300}
                  height={200}
                  className="swiperImage"
                />
               </a>
                <div className="swiplidebtn">
                  <div className="insidebtns">
                    {slide.buttons.map((btn, i) => (
                      <span key={i}>{btn}</span>
                    ))}
                  </div>
                  <p>{slide.title}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="swipebtns32">
        <button
          name="prev"
          className={`rounded leftArrow`}
          onClick={goPrev}
        >
          <svg
            className="home2rightarrow"
            width="12"
            height="12"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1661 9.1131L1.1131 8.83393"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 17L1.1131 8.83393L9.27917 0.947037"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}

        {/* <button
          name="next"
          className={`rounded rightArrow`}
          onClick={goNext}
        >
          <svg
            className="home2rightarrow"
            width="12"
            height="12"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1661 9.1131L1.1131 8.83393"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 17L1.1131 8.83393L9.27917 0.947037"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}
       
      {/* </div> */}
      
    </div>
  );
}

export default Home2Swiper;
