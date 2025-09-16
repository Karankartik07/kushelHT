"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./home2.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
const partners = [
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233923/WhatsApp_Image_2025-03-29_at_12.40.32_PM_apddld.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981544-1747981545_crwtsv.webp",
    alt: "BigCommerce certified partner icon Kushel Digi Solutions",
    link: "/bigcommerce-development",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233927/WhatsApp_Image_2025-03-29_at_12.40.30_PM_vhjqvg.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981534-1747981535_ecpeyu.webp",
    alt: "BigCommerce certified agency partner icon Kushel Digi Solutions",
    link: "/headless-bigcommerce",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233929/WhatsApp_Image_2025-03-29_at_12.40.30_PM_1_flmzht.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981552-1747981553_m0q5uq.webp",
    alt: "Magento ecommerce web design services icon Kushel Digi Solutions",
    link: "/magento-development",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233924/WhatsApp_Image_2025-03-29_at_12.40.31_PM_1_lgmnkv.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981617-1747981618_thowcm.webp",
    alt: "Woocommerce ecommerce web design services icon Kushel Digi Solutions",
    link: "/woocommerce-development",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233924/WhatsApp_Image_2025-03-29_at_12.40.31_PM_2_nenngq.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747981628-1747981654_u94rjy.webp",
    alt: "aws ecommerce web design services icon Kushel Digi Solutions",
    link: "#",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233924/WhatsApp_Image_2025-03-29_at_12.40.31_PM_ae7idi.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747982845-1747982846_amhpie.webp",
    alt: "Shopify ecommerce website development service icon Kushel Digi Solutions",
    link: "/shopify-development",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743234242/WhatsApp_Image_2025-03-29_at_12.40.32_PM_hfpuyo.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747978933/file_1747978763-1747978782_gy3ins.webp",
    alt: "Shopify plus ecommerce web development icon Kushel Digi Solutions",
    link: "/headless-shopify",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233923/WhatsApp_Image_2025-03-29_at_12.40.29_PM_q5esb4.jpg",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747983170/file_1747982834-1747982838_wjc8tf.webp",
    alt: "klaviyo ecommerce  website marketing platform icon Kushel Digi Solutions",
    link: "#",
  },
];

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

const Our = () => {

  const [showSlider, setShowSlider] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setShowSlider(false); 
      } else {
        setShowSlider(true); 
      }
    };

    // run once on mount
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
    <section className="tech-section">
      <div className="tech-heading">
        <h2 className="primary-heading">Our Technology Partnership</h2>
        <p className="secondary-heading">
          Kushel Digi leverages latest technology to deliver future ready stores
        </p>
      </div>
      {/* Desktop Grid */}
      {
        showSlider && <div className="containers" >
        {partners.map((partner, index) => (
          <div className="card-1" key={index}>
            <Image
              loading="lazy"
              width="329"
              height="192"
              src={partner.img}
              alt={partner.alt}
            />
            <span
              onClick={() => router.push(`${partner.link}`)}
              className="read-more-1"
            >
              Read more
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866486/circle-arrow-icon_dcxfmm.svg"
                alt="Arrow icon for website interaction Kushel Digi Solutions"
              />
            </span>
          </div>
        ))}
      </div>
      }
      {/* Swiper Slider (Only Mobile) */}
      {
        !showSlider && <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="swiper-container "
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="card-1" id="swiperIdTech">
              <Image
                width="329"
                height="192"
                loading="lazy"
                src={partner.img}
                alt={partner.alt}
              />
              <span
                onClick={() => router.push(`${partner.link}`)}
                className="read-more-1"
              >
                Read more
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866486/circle-arrow-icon_dcxfmm.svg"
                  alt="Arrow icon for website interaction Kushel Digi Solutions"
                />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      }
    </section>
  );
};

export default Our;