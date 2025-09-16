"use client";

import React, { useEffect, useRef, useState } from "react";
import "./delhiprocess.css";

const steps = [
  {
    title: "Discovery & Planning",
    points: ["Understand goals & audience", "Finalize scope & timeline"],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862333/Rectangle_3464060_e8l41a.png",
    step: "01",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753861621/Mask_group_3_alhxo4.png"
  },
  {
    title: "UI/UX Design",
    points: ["Mobile-first layout", "Delhi-focused visuals"],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862306/Rectangle_3464061_oazlq3.png",
    step: "02",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164912/Mask_group-7_b4dgnb.png"
  },
  {
    title: "Development",
    points: ["Build a responsive store", "Add core features"],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862306/Rectangle_3464062_mm9okx.png",
    step: "03",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png"
  },
  {
    title: "Integration",
    points: ["Connect tools & APIs", "Smooth backend sync"],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862310/Rectangle_3464063_bvpvym.png",
    step: "04",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_3_otl835.png"
  },
  {
    title: "Testing & Launch",
    points: ["Speed & device tests", "Final launch prep"],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862305/Rectangle_3464064_oaxyfs.png",
    step: "05",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_5_v6zapb.png"
  },
  {
    title: "Support & Growth",
    points: ["Ongoing maintenance", "SEO & performance boost"],
    image:
      "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753862306/Rectangle_3464065_xgjaui.png",
    step: "06",
    icon:"https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png"
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
            <h2 className="our-process-heading">
              Our Website Development Process
            </h2>
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
