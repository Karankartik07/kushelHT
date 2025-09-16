"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./londonslider.css";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiArrowBendUpRight } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";

const caseStudies = [
  {
    title: "Top Brass Tactical",
    tags: ["B2B", "Military & tactical industry"],
    description:
      "QA & Testing, Custom Theme Development, Magento to BigCommerce Migration, UX/UI Design, and Complete Website Development",
    results: [
      { label: "INCREASED CONVERSIONS", value: "+80%" },
      { label: "INCREASED REVENUE", value: "+60%" },
      { label: "INCREASED AOV", value: "+8%" },
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750759295/Group_1171281277_dpmjye.png",
    bgClass: "bg-green",
    slug: "/topbrasstactical",
  },
  {
    title: "Black Rhino Concealment",
    tags: ["B2B", "Holsters and accessories"],
    description:
      "End-to-end QA testing, smart third-party integrations (CRM, inventory, and SEO tools), custom UI/UX design in Figma, and BigCommerce re-platforming and development.",
    results: [
      { label: "Increase in Conversions", value: "+80%" },
      { label: "Increased Revenue", value: "+50%" },
      { label: "Increased ROI", value: "+32%" },
    ],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753192097/Group_1171281753_nbxrg0.png",
    bgClass: "bg-maroon",
    slug: "/blackrhinoconcealment",
  },
  {
    title: "Sights And Scopes",
    tags: ["B2B", "Holsters and accessories"],
    description:
      "BigCommerce Migration, Data Migration, Magento Migration, SEO tools Integration, Theme Customization and Custom Store Design.",
    results: [
      { label: "Increased Conversions", value: "+90%" },
      { label: "Return Customer", value: "+60%" },
      { label: "Boosted ROI", value: "+48%" },
    ],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753192097/Group_1171281352_id8dlc.png",
    bgClass: "bg-navy",
    slug: "/sitesandscopes",
  },
];

function BulgariaSecSlider() {
  const settings = {

    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const navigate = useRouter();

  return (
    <section className="case-study-section">
      <div className="m-c-study">
        <div className="case-study-title">
          <div className="case-study-mtitle">
            <div className="case-studies-heading">Case studies</div>
            <p>Our Works Speaks for themselves</p>
          </div>
          <div className="case-s-i">
            <div className="icon-case" onClick={() => sliderRef.current?.slickPrev()}>
              <IoIosArrowRoundBack />
            </div>
            <div className="icon-case1" onClick={() => sliderRef.current?.slickNext()}>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="hrline"></p>
      </div>
      <Slider {...settings} ref={sliderRef} className="case-slides">
        {caseStudies.map((study) => (
          <div key={study.title}>
            <div className={`card-slide ${study.bgClass}`}>
              <div className="title-tag">
                <h2 className="case-study-title left-title">{study.title}</h2>
                <div className="case-study-tags">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className={`case-study-tag ${idx===1?"new-Width":""}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="case-study-card">
                <div className="case-study-left">
                  <div className="case-study-image-wrapper">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={400}
                      height={300}
                      className="case-study-image"
                    />
                    <button
                      onClick={() => navigate.push(study.slug)}
                      className="view-button"
                    >
                      View
                    </button>
                    <div className="view-button1">
                      <PiArrowBendUpRight />
                    </div>
                  </div>
                </div>
                <div className="case-study-right">
                  <p className="case-study-description">
                    <strong>What We Did:</strong> {study.description}
                  </p>
                  <ul className="case-study-results">
                    {study.results.map((res, idx) => (
                      <li key={idx}>
                        <span>{res.label}</span>
                        <strong>{res.value}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        ))}

      </Slider>
      <button onClick={() => navigate.push('/portfolio')} className="view-case-button">View All Case Studies <span><RxArrowTopRight /></span></button>
    </section>
  );
}

export default BulgariaSecSlider;
