'use client';
import React from 'react';
import './whylondon.css';

const steps = [
  {
    title: "Tailored E-Commerce Website Solutions",
    desc: "We don't follow one-size-fits-all rules in website design. We value your suggestions and needs and create according to them.",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_d9v6rx.png",
  },
  {
    title: "On-Time Project Delivery",
    desc: "We value your due dates. Our skilled team completes the work within the due date without sacrificing quality.",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_jlet4b.png",
  },
  {
    title: "A Mobile-Friendly and Responsive Design",
    desc: "Most of the time, when people shop, they utilize their phones. Therefore, we design a responsive interface that works well on every device.",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_1_zcgiqe.png",
  },
  {
    title: "Integrating Secure Payment Methods",
    desc: "By incorporating trustworthy payment options, we ensure that your consumers can shop with peace of mind, which in turn boosts your sales and earns their confidence.",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161373/Mask_group_2_gnsaxz.png",
  },
  {
    title: "SEO Optimized E-Commerce Platforms",
    desc: "Through the use of SEO best practices, we can increase the visibility of your online business in Google's search results. It attracts Google users who are looking to make a purchase.",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_4_ow3m5y.png",
  },
  {
    title: "Ongoing Maintenance and Technical Support",
    desc: "We still have a ways to go. Our support staff will ensure that your ecommerce firm remains fast, safe, and successful by correcting issues and adding enhancements.",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
  },
];


const scrollToFormHome = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            const yOffset = -120;
            const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

const WhyChooseLondon = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left side */}
        <div className="why-choose-left">
          <h2>Why Choose Kushel Digi for <br/> E-Commerce Development?</h2>
          <p>We at KushalDigi create websites that make sales from day one. We help companies succeed in a competitive market by focusing on performance, design, and user experience.
</p>
          <button onClick={scrollToFormHome} className="talk-btn">Talk to Our Experts Today</button>
        </div>

        {/* Right side */}
        <div className="why-choose-right">
          <div className="vertical-line" />
          {steps.map((step, index) => (
            <div className="why-step" key={index}>
              <div className="step-icon">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLondon;
