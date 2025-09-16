
"use client"
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner7.css";
import { MdArrowForwardIos } from "react-icons/md";

const steps = [
  {
    number: 1,
    title: " Discovery Phase ",
    description:
      "Kushel Digi always prioritizes understanding your business model, target audience, and growth objectives. It helps us to create a personalized eCommerce strategy best suited for your vision and market demands.",
      heading:"This stage includes:",
    includes: ["In-depth business analysis", "Identifying target audience & goals", "Personalized eCommerce strategy"],
    image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/discovery-phase_a2muy9.png",
  },
  {
    number: 2,
    title: " Strategy Phase",
    description:
      "After understanding your requirements, our team designs a development plan that includes  platform selection, feature integration, and user experience design. It ensures a solid foundation for an excellent online store.",
      heading:"This stage includes:",
    includes: ["Platform selection & tech stack", "Feature planning & UX optimization", "Roadmap for scalable growth"],
    image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015612/strategy-phase_t9oush.png",
  },
  {
    number: 3,
    title: " Design & Prototyping",
    description: "We have a team of dedicated UI/UX designers who designs and interactive prototypes to visualize your store's layout and functionality. Kushel Digi committed to a seamless and user-friendly shopping experience.",
    heading:"This stage includes:",
    includes: ["Wireframes & interactive prototypes", "User-centric design approach", "Focus on seamless navigation"],
    image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/design-_-prototyping_ssn1c8.png",
  },
  {
    number: 4,
    title: "Development Phase",
    description: "We have a team of the country's best developers who have wide range of experience in  building scalable eCommerce platforms with advanced features and third-party integrations.",
    heading:"This stage includes:",
    includes: ["Scalable & high-performance solutions", "Custom features", "Third-party integrations"],
    image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/development-phase_fbl6fy.png",
  },
  {
    number: 5,
    title: "Testing Phase",
    description: "We perform rigorous testing to identify and resolve bugs. It also helps us to optimize performance and ensure your website is responsive and secure.  We are committed to a better  user experience without error.",
    heading:"This stage includes:",
    includes: ["Multi-device & browser compatibility", "Performance & security checks", "Bug fixing & optimization"],
    image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015611/testing-phase_jygidt.png",
  },
  {
    number: 6,
    title: "Launch & Ongoing Support",
    description: "After a successful launch, we provide continuous monitoring, updates, and technical support. Our team is always there with you to keep your site optimized according to market trends.",
    heading:"This stage includes:",
    includes: ["Smooth deployment & go-live support", "Continuous monitoring & updates", "24/7 technical assistance"],
    image: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/launch_rx3ijg.png",
  },
  
];

export default function Steps() {
  const [activeStep, setActiveStep] = useState(1);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 3000,     
    
    beforeChange: (_, next) => setActiveStep(next + 1),
  };

  const goToStep = (stepNumber) => {
    setActiveStep(stepNumber);
    sliderRef.current.slickGoTo(stepNumber - 1);
  };

  return (
    <div className="steps-containercom-wrapper">
      <div className="steps-containercom">
      <h2 className="steps-titlecom primary-heading">Expert Ecommerce Development Process </h2>
      <div className="steps-nav">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`step ${step.number === activeStep ? "active" : ""}`}
            onClick={() => goToStep(step.number)}
          >
            {step.number}
          </div>
        ))}
      </div>
  <div id="slickSlider">
  <Slider ref={sliderRef} {...settings}>
        {steps.map((step) => (
          <div key={step.number} className="steps-contentcom">
            <div className="steps-textcom">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <p className="stepPragCom">{step.heading}</p>
              <ul className="ulBanner7">
                {step.includes.map((item, index) => (
                  <li key={index}> <MdArrowForwardIos  className="iconColorBlue"/>{item}</li>
                ))}
              </ul>
            </div>
            <img src={step?.image} alt={step.title} className="steps-image" />
          </div>
        ))}
      </Slider>
  </div>
    </div>
    </div>
  );
}
