'use client';

import dynamic from "next/dynamic";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
    <section
      className="w-full pt-[160px] bg-cover bg-center bg-no-repeat py-16 px-[60px] max-md:px-2"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dqjbzgksw/image/upload/f_auto,q_auto,w_1600/v1748345231/new-banner-bg_dxpmfr.webp')",
      }}
    >
      <div className="max-w-[1720px] w-full flex items-center justify-between gap-4 mx-auto flex-col md:flex-row md:gap-[50px]">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <span className="flex items-center gap-2 mb-4 text-[#0c61ff] font-semibold uppercase tracking-[0.32px] text-[0.9rem] justify-center md:justify-start">
            <HiOutlineShoppingCart className="text-2xl" />
            Custom Ecommerce Solutions
          </span>

          <h1 className="text-[#0e0d59] text-[31px] md:text-[3rem] font-bold leading-[1.08] tracking-[-1.08px] capitalize mb-2 text-center md:text-left md:w-[540px]">
            Expert E-Commerce Solutions Powered by BigCommerce
          </h1>

          <p className="text-[#3b3a76] text-[1rem] md:text-[1.05rem] font-normal mt-5 mb-8 text-center md:text-left">
            As a BigCommerce Certified Partner, Kushel Digi designs, develops,
            and optimizes eCommerce stores that deliver results and help brands
            to succeed in the ecommerce world.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <button
              onClick={scrollToFormHome}
              className="px-6 py-3 text-sm font-semibold uppercase rounded-full bg-[#0c61ff] text-white border border-[#0c61ff] hover:bg-transparent hover:text-[#0c61ff] transition"
            >
              Talk to a Consultant
            </button>
            <button
              onClick={() => navigate.push("/contact-us")}
              className="px-6 py-3 text-sm font-semibold uppercase rounded-full border border-[#0c61ff] text-[#0c61ff] flex items-center gap-2 hover:bg-[#0c61ff] hover:text-white transition"
            >
              Book a Call <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2 relative flex justify-center"
          role="region"
          aria-label="Banner Image Slider"
        >
          <div className="relative w-[80%] md:ml-12">
            {/* Static image before slider */}
            {!sliderVisible && (
              <Image
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/1_c2jrzl_b4th0l.webp"
                alt="BigCommerce eCommerce store example"
                width={1080}
                height={671}
                className="w-full h-auto"
                loading="lazy"
              />
            )}

            {/* Slider */}
            <Slider
              {...settings}
              className={`${sliderVisible ? "block" : "hidden"}`}
            >
              <Image
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/1_c2jrzl_b4th0l.webp"
                alt="BigCommerce eCommerce store example"
                width={1080}
                height={671}
                className="w-full h-auto"
                loading="lazy"
                onLoad={() => setSliderVisible(true)} // Make slider visible once the first image is loaded
              />
              <Image
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/2_vkvjrc_vl1qc7.png"
                alt="Shopify development example"
                width={1080}
                height={671}
                className="w-full h-auto"
                loading="lazy"
              />
              <Image
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579061/3_mzubda_wjrpy6.webp"
                alt="Magento platform project example"
                width={1080}
                height={671}
                className="w-full h-auto"
                loading="lazy"
              />
            </Slider>

            {/* Floating icons */}
            {sliderVisible && (
              <>
                <Image
                  loading="lazy"
                  className="absolute top-2 left-2 w-[110px] md:top-0 md:left-[-65px] md:w-[140px] animate-[float2_4s_ease-in-out_infinite_alternate]"
                  src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579060/Bigcommerce2_z9tsl7_zfmnzs.png"
                  width={110}
                  height={110}
                  alt="BigCommerce website development service icon"
                />

                <Image
                  loading="lazy"
                  className="absolute bottom-4 left-4 w-[110px] md:top-[142px] md:left-[-52px] md:w-[140px] animate-[float1_4s_ease-in-out_infinite_alternate]"
                  src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757579060/shopify1_qfeocx_je6sz2.png"
                  width={110}
                  height={110}
                  alt="Shopify website design icon"
                />

                <Image
                  loading="lazy"
                  className="absolute top-6 right-5 w-[110px] md:top-[46px] md:right-[-30px] md:w-[140px] animate-[float3_4s_ease-in-out_infinite_alternate]"
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

      {/* Hidden SEO content */}
      <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden invisible">
        Hidden SEO Content
      </div>
    </section>
  );
};

export default NewBanner;
