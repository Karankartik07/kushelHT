"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import Image from "next/image";

const partners = [
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981544-1747981545_crwtsv.webp",
    alt: "BigCommerce certified partner icon Kushel Digi Solutions",
    link: "/bigcommerce-development",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981534-1747981535_ecpeyu.webp",
    alt: "BigCommerce certified agency partner icon Kushel Digi Solutions",
    link: "/headless-bigcommerce",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981552-1747981553_m0q5uq.webp",
    alt: "Magento ecommerce web design services icon Kushel Digi Solutions",
    link: "/magento-development",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981617-1747981618_thowcm.webp",
    alt: "Woocommerce ecommerce web design services icon Kushel Digi Solutions",
    link: "/woocommerce-development",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981628-1747981654_u94rjy.webp",
    alt: "aws ecommerce web design services icon Kushel Digi Solutions",
    link: "#",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747982845-1747982846_amhpie.webp",
    alt: "Shopify ecommerce website development service icon Kushel Digi Solutions",
    link: "/shopify-development",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747978933/file_1747978763-1747978782_gy3ins.webp",
    alt: "Shopify plus ecommerce web development icon Kushel Digi Solutions",
    link: "/headless-shopify",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747982834-1747982838_wjc8tf.webp",
    alt: "klaviyo ecommerce website marketing platform icon Kushel Digi Solutions",
    link: "#",
  },
];

const OurTechno = () => {
  const [showSlider, setShowSlider] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth > 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const section = document.getElementById("form-section");
      if (section) {
        setTimeout(() => {
          const offset = 150;
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }, 0);
      }
    };

    window.addEventListener("hashchange", handleHashChange, false);
    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  const router = useRouter();

  return (
    <section
      className="w-full max-w-[1720px] mx-auto bg-gradient-to-tr from-[#89c7fb] via-[#c8d5f9] to-[#f9f9f4] px-6 sm:px-10 lg:px-12 py-12 sm:py-16"
    >
      {/* Heading */}
      <div className="max-w-[1400px] mx-auto text-center px-4 sm:px-[5vw]">
        <h2 className="text-center font-semibold leading-tight text-[clamp(24px,3vw,40px)]">
          Our Technology Partnership
        </h2>
        <p className="text-center font-semibold text-[clamp(14px,1.2vw,18px)] leading-relaxed text-[#333333d9] mt-3 mb-6">
          Kushel Digi leverages latest technology to deliver future ready stores
        </p>
      </div>

      {/* Desktop Grid */}
      {showSlider && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mt-5"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/90 p-5 rounded-xl shadow-md text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                loading="lazy"
                width="329"
                height="192"
                src={partner.img}
                alt={partner.alt}
                className="rounded-xl max-w-full h-auto px-2"
              />
              <span
                onClick={() => router.push(`${partner.link}`)}
                className="mt-5 flex items-center justify-center gap-2 font-bold text-[clamp(14px,1.2vw,16px)] text-[#333] cursor-pointer transition-colors duration-300 hover:text-blue-600"
              >
                Read more
                <Image
                width={20}
                height={20}
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866486/circle-arrow-icon_dcxfmm.svg"
                  alt="Arrow icon for website interaction Kushel Digi Solutions"
                  className="transition duration-300 group-hover:filter group-hover:invert"
                />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Swiper Slider (Mobile Only) */}
      {!showSlider && (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
       
          modules={[Pagination, Autoplay]}
          className="w-full max-w-md mx-auto px-2 overflow-hidden rounded-xl"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/90 p-5 rounded-xl shadow-md text-center transition-transform duration-300 hover:-translate-y-1">
                <Image
                  width="329"
                  height="192"
                  loading="lazy"
                  src={partner.img}
                  alt={partner.alt}
                  className="rounded-lg mx-auto"
                />
                <span
                  onClick={() => router.push(`${partner.link}`)}
                  className="mt-5 flex items-center justify-center gap-2 font-bold text-[15px] text-[#333] cursor-pointer transition-colors duration-300 hover:text-blue-600"
                >
                  Read more
                  <Image
                  width={20}
                  height={20}
                    loading="lazy"
                    src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866486/circle-arrow-icon_dcxfmm.svg"
                    alt="Arrow icon for website interaction Kushel Digi Solutions"
                  />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default OurTechno;
