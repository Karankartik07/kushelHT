"use client"
import React, { useEffect } from "react";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import dynamic from "next/dynamic";
import TalkToConsult from "@/app/components/TalkToConsult";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Banner = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: false
  };



  const scrollToFormEcom = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      const yOffset = -120; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  

  return (
    <>
      <section className="Mainhero-sectionss">
        <div className="hero-containerMa">
          <div className="hero-containerMaSub">
            <div className="hero-contentBi">
              <p className="hero-tagCo">Top Ecommerce Development Agency</p>
              <h1 className="headssCom primary-heading">
                Looking for a High-Conversion Ecommerce Solution?
              </h1>
              <p className="hero-descriptionCom secondary-heading">
                Your search for the perfect eCommerce solution ends here! Kushel
                Digi has emerged as a top ecommerce development agency as our
                experts build powerful, scalable eCommerce solutions according
                to your business needs.
              </p>
              <div className="buttonsBi">
                {/* <button onClick={scrollToFormEcom} className="secondary-btn">
                  Talk To a Consultant
                 </button> */}
                 <TalkToConsult btn='secondary-btn'/>
                {/* <a href="#form-section" className="secondary-btn">
                  Talk To a Consultant
                </a> */}
                <Link href="/contact-us" className="primary-btn">
                  Book A Call<FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="img-containerCo">
            <Slider {...settings}>
              <img className='new-banner-scroll-img'
                width="486"
                height="463"
                loading='lazy'
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                // src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1744458202/mockup-2_wpwbsq.png'
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748346222/file_1748079903-1748079905_nnuvh8.webp"
                alt="bigcommerce"
              />
              <img
                width="486"
                height="463"
                loading='lazy'
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742641401/immmmm-removebg-preview_yhm4on.png"
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744458202/mockup-3_jqdrh1.png"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748346222/file_1748079919-1748079921_mg014r.webp"
                alt="shopify"
              />
              <img className='new-banner-scroll-img'
                width="486"
                height="463"
                loading='lazy'
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741089462/Group_1171281256_1_znsijn.png"
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744458202/mockup-1_lz5bgz.png"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748346222/file_1748079885-1748079886_lzmpvo.webp"
                alt="magento"
              />
            </Slider>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner
