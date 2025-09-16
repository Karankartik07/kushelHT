"use client";

import React, { useEffect, useRef, useState } from "react";
import "./delhiprocess.css";

const steps = [
  {
    title: "Understanding Requisite",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866643/Mask_group_15_kcls2v.png",
    points: [
      "Know what you want to achieve with your company",
      "Figure out what your target audience requires",
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665229/teacher-smart_chwcbk.png",
    step: "01",
  },
  {
    title: "Planning and Strategy",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866642/Mask_group_16_bfaksv.png",
    points: [
      "Set a timetable and tech stack",
      "A personalized plan designed by ecommerce experts",
    ],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866236/Rectangle_3464068_vluknu.png",
    step: "02",
  },
  {
    title: "Design and Wireframing",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866642/Mask_group_17_apn6i9.png",
    points: [
      "Mockups of UI/UX that are focused on the user",
      "Design that works on mobile first and is responsive",
    ],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862306/Rectangle_3464061_oazlq3.png",
    step: "03",
  },
  {
    title: " Growth",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866642/Mask_group_18_peevfl.png",
    points: ["Clean, scalable code", "Built on top of ecommerce platforms"],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866177/Rectangle_3464070_sa6kjl.png",
    step: "04",
  },
  {
    title: " Testing and Launch",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866642/Mask_group_19_cqao30.png",
    points: [
      "Testing for bugs and speed",
      "Our web development team made sure the launch went smoothly",
    ],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862305/Rectangle_3464064_oaxyfs.png",
    step: "05",
  },
  {
    title: "Support & Optimization",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753866642/Mask_group_20_xg5o6j.png",
    points: [
      "Regular updates and corrections","The finest ecommerce website creation firm does SEO and performance optimization.",
    ],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862306/Rectangle_3464065_xgjaui.png",
    step: "06",
  },
];

const OurProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const stepRefs = useRef([]);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleScroll = () => {
        const centerY = window.innerHeight / 6;
        let closestIndex = 0;
        let closestDistance = Infinity;

        stepRefs.current.forEach((el, i) => {
          if (el) {
            const box = el.getBoundingClientRect();
            const distance = Math.abs(box.top - centerY);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = i;
            }
          }
        });

        setActiveIndex(closestIndex);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="our-process-section">
      <div className="our-process-wrapper">
        {/* LEFT SIDE */}
        <div className="our-process-left">
          <div className="our-process-heading-sticky">
            <h2 className="our-process-heading">Our Process</h2>
          </div>

          <div
            className={`process-content ${
              isMobile ? "scroll-snap-container" : ""
            }`}
          >
            {steps.map((step, index) => (
              <div
                className={`timeline-wrapper ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
              >
                <div className="timeline-left">
                  <span className="step-count">
                    {step.step}/{steps.length.toString().padStart(2, "0")}
                  </span>
                  <div className="timeline-line" />
                </div>

                <div className="timeline-content">
                  <div className="step-icon">
                    <img
                      src={step.icon}
                      alt="Step Icon"
                    />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <ul className="step-points">
                    {step.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: STICKY IMAGE */}
        <div className="our-process-right">
          <div className="sticky-image-wrapper">
            <img
              src={steps[activeIndex].image}
              alt="Process Step"
              className="step-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
