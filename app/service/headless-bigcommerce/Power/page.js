"use client"
import React from "react";
import './power.css';

const industries = [
  {
    title: 'Total Design Freedom.',
    description:
      'Tired of choosing rigid templates? Headless commerce gives your design and development teams full control over the user experience on every device and platform.',
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841742/freedom-2_pf3zjv.png',
  },
  {
    title: 'Seamless Omnichannel Delivery',
    description:
      'Reach customers on their channel of choice web, mobile, kiosks, voice assistants, and more from a single backend system to provide unified messaging and experience.',
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841733/delivery-truck-2_ryxpqc.png',
  },
  {
    title: 'Lightning-Fast Performance',
    description:
      'By leveraging optimized frontend frameworks and decoupled architecture, headless commerce provides accelerated page loads and seamless shopping experiences.',
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841759/fast-2_latjby.png',
  },
  {
    title: 'Scalable & Flexible Architecture',
    description:
      `Scale effortlessly as your business grows. With Headless platforms, you don't need to fully rebuild the platform as these are built to adapt by letting you add new channels, features, or integrations.`,
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841787/database_v88pfh.png',
  },
  {
    title: 'Faster Innovation & Launches',
    description:
      `Launch new storefronts, updates, or campaigns quickly. With separate frontend/backend workflows, your team can move faster and innovate continuously.`,
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841771/innovation-2_xhlv2g.png',
  },
  {
    title: 'Future-Ready Commerce Solution',
    description:
      `Be ahead of the curve with a system built for change. It supports the latest technologies to ensure you're ready for whatever comes next in eCommerce.`,
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841778/solution-2_rcr14p.png',
  },
  {
    title: 'Fast Load Times',
    description:
      `The decouplement of front end and back end in Headless BigCommerce enables faster loading of websites by serving only the necessary content.`,
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841794/fast-website_m6a8br.png',
  },
  {
    title: 'Excellent User Experience:',
    description:
      `Headless BigCommerce ensures a smooth, responsive, and personalized shopping experience by offering complete flexibility in frontend design. `,
    icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745841752/best-customer_zpdhme.png',
  },
];

export default function Industries() {
  return (
    <section className="industries-section">
      <h2 className="industries-heading">
      Advantages of Headless BigCommerce Development
        {/* <span className="black-text">Meet </span>
        <span className="green-text">Our Industries</span> */}
      </h2>
      <div className="black-text">
        <p>Headless BigCommerce Development is known for its unmatched flexibility, speed and scalability. It has been greatly helping modern businesses to create seamless, omnichannel experiences and adapt quickly to changing market demands.</p>
      </div>
      <div className="industries-grid">
        {industries.map((industry, idx) => (
          <div key={idx} className="industry-card">
            <div className="industry-content">
              <img src={industry.icon} alt="" className="industry-icon" />
              <div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
              </div>
            </div>
            <div className="industry-arrow">
              {/* <button className="arrow-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
