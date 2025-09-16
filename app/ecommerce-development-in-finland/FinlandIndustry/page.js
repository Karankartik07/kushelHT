"use client";
import React, { useState } from "react";
import "./belgiumindustry.css";

const industries = [
  {
    title: "Fashion",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png",
    description:
      "Our fashion websites are visually stunning, use industry design standards, and have a good aesthetic and seamless buying experience, which includes browsing, lookbook purchasing, size filters, and fast checkout options. ",
  },
  {
    title: "Automotive",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png",
    description:
      "We design ecommerce solutions for automotive dealers containing multiple catalogs of parts and accessories for B2B and B2C customers. Customers have access to sophisticated item/item class search functionalities, component filtering, and compatibility searching to fulfil their needs. ",
  },
  {
    title: "Electronics",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "We design ecommerce shops for electronics that offer fast and safe purchasing, streamlined transaction processing, instant delivery satisfaction, advanced comparison shopping features, warranty information, smart filtering, and many more advanced features.",
  },
  {
    title: "Food and beverages",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png",
    description:
      "We design ecommerce systems for selling food items like gourmet snacks, complete meal kits, and subscription services with easy reorder functions, auto delivery tracking, and self-managed recurring shipments. ",
  },
  {
    title: "Luxury",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "We craft premium ecommerce sites for luxury brands that highlight elegance and exclusivity through clean design, storytelling, and high-end customer experience features.",
  },
  {
    title: "Manufacturing",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png",
    description:
      "With simple quotation requests, tiered pricing, and customized configurations, we streamline business-to-business and bulk ordering for manufacturers, guaranteeing seamless transactions from order to delivery.  ",
  },
  {
    title: "Furniture",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png",
    description:
      "We construct augmented reality websites, enabling buyers to visualize and preview rooms with filters for enhanced product view, which promotes ease in purchasing and transacting. ",
  },
  {
    title: "B2B",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_xwu4js.png",
    description:
      "Our advanced features of B2B ecommerce provide buyers with accounts, specific pricing options, as well as detailed invoicing and order history, automating and scaling the business, which improves operational efficiency.",
  },
];

const IndustryTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="industry-section">
      <h2 className="industry-heading">
        Serving 18+ Industries with Tailored E-Commerce Solutions
      </h2>
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
          {/* <button className="explore-btn">Explore More</button> */}
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;
