"use client";
import React, { useState } from "react";
import "./belgiumindustry.css";

const industries = [
  {
    title: "Fashion",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png",
    description:
      "To enhance visibility and sales for fashion retailers, we create bespoke online stores tailored for mobile use. They can now compete in the digital marketplace with increased differentiation. As an ecommerce website development company in Noida, we utilize marketing technologies to elevate brand exposure.",
  },
  {
    title: "Automotive",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png",
    description:
      "Our scope of work includes the development of ecommerce stores for high-end automotive parts and accessories. Our Website development agency in Noida guarantees every client a refined customer experience with fully incorporated analytics-driven detail systems that enable seamless user interactions.",
  },
  {
    title: "Electronics",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "Are you selling electronics? Given that we are the best ecommerce development company, do you require cutting-edge tools like advanced filtering mechanisms, product comparison features, or real-time stock control systems? Our ecommerce development firm designs robust websites embedded with upper-tier cybersecurity protocols for transaction safety during purchases.",
  },
  {
    title: "Food and Beverages",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png",
    description:
      "As part of our web development services, we want to offer gourmet food brands an option to digitize their products with swift checkout features. We can also tackle snack brands that produce beverages. As an agency, we ensure that transaction interfaces as well as mobile-friendly designs operate seamlessly.",
  },
  {
    title: "Luxury",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "As a leading ecommerce development company, we digitally showcase luxury products, granting access to elite buyers globally for seamless purchase, enabling unmatched convenience and accessibility.",
  },
  {
    title: "Manufacturing",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png",
    description:
      "We assist sellers by breaking down complex product catalogs alongside B2B workflows. As an ecommerce website development agency in Noida, we build comprehensive systems tailored toward sophisticated automation of bulk ordering, quoting, CRM systems, and inter-app communications.",
  },
  {
    title: "Furniture",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png",
    description:
      "Through partnerships within the furniture sector, we are able to create elegantly sleek webpages alongside room visualizers with dimension filters, ensuring effortless browsing tailored to ergonomic standards and beauty. Collaborate with the best ecommerce website development company to showcase your collection with style and elegance.",
  },
];

const IndustryTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="industry-section">
      <h2 className="industry-heading">Over 18+ industries in our portfolio</h2>
      <div className="industry-tabs">
        {industries.map((item, index) => (
          <button
            key={index}
            className={`industry-tab ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="industry-content">
        <img
          src={industries[activeIndex].image}
          alt={industries[activeIndex].title}
          className="industry-image"
        />
        <div className="industry-info">
          <h3>{industries[activeIndex].title}</h3>
          <p>{industries[activeIndex].description}</p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;
