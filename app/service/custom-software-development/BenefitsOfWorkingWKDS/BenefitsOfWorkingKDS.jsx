'use client'

import React, { useRef } from 'react';
import "./BenefitsOfWorkingKDS.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaChevronLeft } from 'react-icons/fa';

const BenefitsOfWorkingKDS = () => {

  const additionalServices = [
    {
      title: "Custom software for your evolving business needs",
      description:
        "Simform provides custom software development services for the unique needs and challenges of your business. We build intuitive, secure custom applications to enhance user experience.",
    },
    {
      title: "End-to-end custom software solutions for your business",
      description:
        "From an in-depth analysis of your business to developing custom software and from user training to maintaining applications, we advise on what technologies to invest in, what technical architecture to choose, as well as consult on how to achieve the required level of data protection.",
    },
    {
      title: "Understanding your business goals",
      description:
        "Let’s discuss your short and long-term vision in-depth. When we know your goals and understand existing software, we are able to ensure the success of the project.",
    },
    {
      title: "Well-architectured solution for scale",
      description:
        "We take a pragmatic approach to software architecture and design. Choosing important areas worth investing upfront, and prioritize others afterward. We also provide data protection consultation.",
    },
    {
      title: "Goal driven user experience (UX) design",
      description:
        "Good software design helps drive user satisfaction. We perform UX research to align overall experience with your goals and users’ needs and let you make well-informed decisions.",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className='benefits-of-working-outer-container'>
      <div className="benefits-of-working-inner-container">
        <h3 className='benefits-of-working-heading primary-heading'>Benefits of Working with <br /> Kushel Digi Solutions</h3>

        <div className="benefits-of-working-flex-container">
          <div className="benefits-of-working-left">
            <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746984236/with-us_quuvi0.png" alt="" />
            {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744696528/CSD-tech-img-01_gpbso7.png" alt="" /> */}
          </div>
          <div className="benefits-of-working-right">
            {
              additionalServices.map((item, index) => {
                return <div key={index} className='benefits-of-working-cards'>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              })
            }
          </div>
          <div className="benefits-of-working-right-responsive">

            <Slider ref={sliderRef} {...settings}>
              {
                additionalServices.map((item, index) => {
                  return (
                    <div key={index} className='benefits-of-working-cards benefits-of-working-cards-responsive'>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  )
                })
              }
            </Slider>
            <div className='benefits-of-working-slide-btn-cont'>
              <div className='custom-solutions-slider-bottom-btn-cont'>
                <span className='custom-solutions-slide-btn' onClick={() => sliderRef.current?.slickPrev()}>
                  <FaChevronLeft />
                </span>
                <span className='custom-solutions-slide-btn' onClick={() => sliderRef.current?.slickNext()}>
                  <FaChevronLeft className='rotatenextbtn' />
                </span>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsOfWorkingKDS