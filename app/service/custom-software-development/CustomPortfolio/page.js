"use client"
import React from 'react';
import './pernoun.css'

const caseStudies = [
  {
    title: 'BigCommerce + Makeswift Development Services',
    description1: 'Create Powerful No-Code Experiences with Design Flexibility',
    description2: 'Kushel Digi Solutions believes in building seamless and high-converting eCommerce experiences using the powerful integration of BigCommerce with Makeswift.',
    description3: 'Why Choose Our BigCommerce + Makeswift Services?',
    // listItems: [
    //   'Visual Editing Freedom',
    //   'Component-Based Design',
    //   'Lightning-Fast Deployment'
    // ],
    img: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1746094757/M-1_umzimi.png',
    reverse: false
  },
  {
    title: 'BigCommerce + Catalyst Development Services',
    description1: 'Custom Headless Commerce Powered by Performance',
    description2: 'Catalyst by BigCommerce is an open-source headless storefront starter kit which is built on Next.js. Kushel Digi uses Catalyst to deliver fast & API-first storefronts that are optimized for performance & SEO.',
    description3: 'Why Choose Our BigCommerce + Catalyst Services?',
    // listItems: [
    //   'Modern Headless Architecture',
    //   'API-Driven Flexibility',
    //   'Scalable & SEO-Ready'
    // ],
    img: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1746094756/M-2_hwf8ej.png',
    reverse: true
  },
];

const CustomPortfolio = () => {
  return (
    <div className="case-studies-wrapper" id="caseStudiesContainer">
      <h2 className="case-head">
        {/* Build Your Way with */}
        <br /> Custom BigCommerce Portfolio
      </h2>

      {caseStudies.map(
        (
          {
            title,
            description1,
            description2,
            description3,
            listItems,
            img,
            reverse
          },
          index
        ) => (
          <div
            key={index}
            className={`case-study ${reverse ? 'reverse' : ''}`}
          >
            <div className="case-image">
              <img loading="lazy" src={img} alt={title} />
            </div>
            <div className="case-content">
              <h2>{title}</h2>
              <p>{description1}</p>
              <p>{description2}</p>
              {/* <h3 className="cas3-head">{description3}</h3> */}
              {/* <ul className="case-list">
                {listItems.map((item, idx) => (
                  <li className="case-listss" key={idx}>
                    {item}
                  </li>
                ))}
              </ul> */}
              <a href="#form-section" id="btn-white">
                <button className="view-project-btn">
                  Talk to free Consultant →
                </button>
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CustomPortfolio;
