"use client"
import React, { useEffect } from "react";
import "./BigBanner6.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// const services = [
//   {
//     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743422485/svg1_nfbwio.svg",
//     alt: "Implementation Icon",
//     title: " Proven BigCommerce Expertise",
//     description:
//       "Our extensive experience in the development and optimization of BigCommerce stores means our solutions are customer-oriented, result-driven, and geared to help increase your online visibility.",
//     className: "blue",
//   },
//   {
//     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743422485/svg2_v9hk1a.svg",
//     alt: "Customization Icon",
//     title: "Customized Solutions",
//     description:
//       "We offer BigCommerce services tailored for the specific needs of your business. Our solution is carefully designed to optimize your store performance and scalability.",
//     className: "gray",
//   },
//   {
//     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743422485/svg4_epnmxh.svg",
//     alt: "OmniChannel Icon",
//     title: "Dedicated Support and Maintenance",
//     description:
//       "Get reliable and continued support from our committed maintenance services. Rest assured that with us, your BigCommerce store will be secure, updated, and working at maximum capacity.",
//     className: "blue",
//   },
//   {
//     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743422485/svg3_cus0vm.svg",
//     alt: "Customization Icon",
//     title: "Excellent User Experience",
//     description:
//       "Provide your shop with truly unique innovative design and user experience. We design engaging, responsive designs that impress your audience and increase conversions.",
//     className: "gray",
//   },
//   {
//     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743422485/svg2_v9hk1a.svg",
//     alt: "OmniChannel Icon",
//     title: " SEO and Marketing Strategy",
//     description:
//       "Boost the visibility of your store with our professional SEO and marketing strategies. We implement tactics that will help drive traffic and maximize your search rankings.",
//     className: "blue",
//   },
//   {
//     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743422485/svg3_cus0vm.svg",
//     alt: "Customization Icon",
//     title: " Seamless Integration",
//     description:
//       "Get a smooth transition into BigCommerce with our integration and migration services. We ensure zero hassle for a seamless process.",
//     className: "gray",
//   },
// ];
const Cards = ({ services,contents }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <section className="Range">
      <div className="biggsec">
        <div className="itemss">
          <h2 className="primary-heading">
           {contents?.title}

          </h2>
        </div>
        <div className="itemsss">
          <p className="secondary-heading">
           {
            contents?.description
           }
          </p>
        </div>

        <div className="imple">
          <Slider {...settings}>
            {services?.map((item, index) => {
              return (
                <div key={index} className={`${item.className} choose-us-slider-div`}>
                  <img loading="lazy" src={item.img} alt="Implementation Icon" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </Slider>
        </div>


      </div>

      {/* </div> */}
    </section>
  );
};

export default Cards;
