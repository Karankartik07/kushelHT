'use client';

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./HomeNewBanner.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NewBanner = () => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const navigate = useRouter();

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
    pauseOnHover: false,
  };

  const scrollToFormHome = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      const yOffset = -120;
      const y =
        formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="new-banner-container">
      <div className="inner-new-banner-container">
        <div className="new-banner-left">
          <span className="sm-banner-heading">
            <HiShoppingCart className="hishpoo" />
            Custom Ecommerce Solutions
          </span>

          <h1 className="new-banner-heading">
            Expert E-Commerce Solutions Powered by BigCommerce
          </h1>

          <p className="new-banner-para">
            As a BigCommerce Certified Partner, Kushel Digi designs, develops,
            and optimizes eCommerce stores that deliver results and help brands
            to succeed in the ecommerce world.
          </p>

          <div className="flex-new-banner-btns">
            <button
              onClick={scrollToFormHome}
              className="new-banner-btn colored"
            >
              Talk to a Consultant
            </button>
            <button
              onClick={() => navigate.push("/contact-us")}
              className="new-banner-btn transparent"
            >
              Book a Call <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div
          className="new-banner-right"
          role="region"
          aria-label="Banner Image Slider"
        >
          <div className="new-banner-right-slider">
            {/* Static image shown until first slider image loads */}
            {!sliderVisible && (
              <Image
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/1_c2jrzl_b4th0l.webp"
                alt="BigCommerce eCommerce store example"
                width={1080}
                height={671}
                layout="responsive"
                loading="lazy"
              />
            )}

            {/* Slider always mounts */}
            <Slider {...settings} style={{ display: sliderVisible ? "block" : "none" }}>
              <Image
                className="new-banner-scroll-img"
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/1_c2jrzl_b4th0l.webp"
                alt="BigCommerce eCommerce store example"
                width={1080}
                height={671}
                layout="responsive"
                loading="lazy"
                onLoad={() => setSliderVisible(true)} // ✅ Show slider after first image loads
              />
              <Image
                className="new-banner-scroll-img"
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/2_vkvjrc_vl1qc7.png"
                alt="Shopify development example"
                width={1080}
                height={671}
                layout="responsive"
                loading="lazy"
              />
              <Image
                className="new-banner-scroll-img"
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/3_mzubda_wjrpy6.webp"
                alt="Magento platform project example"
                width={1080}
                height={671}
                layout="responsive"
                loading="lazy"
              />
            </Slider>

            {/* Floating icons */}
            {sliderVisible && (
              <>
                <Image
                  loading="lazy"
                  className="floatingIcon2"
                  src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579060/Bigcommerce2_z9tsl7_zfmnzs.png"
                  width={110}
                  height={110}
                  alt="BigCommerce website development service icon"
                />
                <Image
                  loading="lazy"
                  className="floatingIcon1"
                  src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579060/shopify1_qfeocx_je6sz2.png"
                  width={110}
                  height={110}
                  alt="Shopify website design icon"
                />
                <Image
                  loading="lazy"
                  className="floatingIcon3"
                  src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579060/Magento_zxs0hr_z9xyo9.png"
                  width={110}
                  height={110}
                  alt="Magento service icon"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBanner;
