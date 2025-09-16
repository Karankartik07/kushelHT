"use client"
import './Section5.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const awards = [
  { src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993106/ecommerce-developers-india_zfydfo.png", alt: "ISO 27001:2013" },
  { src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148178/Certified-Bigcommerce-Partner__of0fqt.png", alt: "Microsoft Partner" },
  { src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1742994278/web-developers-india_uovesz.png", alt: "ISO 9001:2015" },
  { src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993119/ecommerce-development-companies_glc1ea.png", alt: "CMMI Level 3" },
  { src: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993092/b2b-companies-canada_tdaega.png", alt: "Clutch Global 2022" },
];

const Section5 = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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
    <>
      <section className="awdardsCom">
        <div className="awards-sectionCom">
          <div className="awards-headerCom">
            <span className="lineSlash"></span>

            <h3>AWARDS AND RECOGNITION</h3>
            <span className="lineSlash"></span>
          </div>

          <div id='SliderSetting'>
            <Slider {...settings}>
              {awards.map((award, index) => (
                <div className="award-itemCom" key={index}>
                  <img loading='lazy' src={award.src} alt={award.alt} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
