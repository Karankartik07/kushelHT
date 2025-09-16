"use client";
import React, { useState } from "react";
import "./belgiumindustry.css";

const industries = [
  {
    title: "Fashion",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png",
    description:
      "We create fashion websites with add-on features such as size charts, quick images, and lookbooks, delivering smooth, fast, and mobile-first websites that keep shoppers coming back.",
  },
  {
    title: "Automotive",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png",
    description:
      "We are Bulgaria's top ecommerce development business, and we make product catalogues, clever search options, and high-quality photos easier to use. It makes it easy for vehicle lovers to get around and have a wonderful time buying.",
  },
  {
    title: "Electronics",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "In Denmark’s developing tech sector, we make ecommerce websites that are easy to navigate, provide product catalogues, and speed up transactions for enterprises.",
  },
  {
    title: "Food and beverages",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png",
    description:
      "We are an ecommerce development business in Bulgaria that makes online stores for food and drink companies. These stores have features like delivery choices, bespoke packaging, parcel alternatives, smart search, and subscription models.",
  },
  {
    title: "Luxury",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "We provide rich clients who want luxury products, beautiful designs, one-of-a-kind features, high-end websites, and a perfect shopping experience.",
  },
  {
    title: "Manufacturing",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png",
    description:
      "Our best website development firm makes supply chains more efficient, makes it easier to place large orders, and improves connections between businesses and customers. ",
  },
  {
    title: "Furniture",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png",
    description:
      "We assist furniture stores in getting visitors to buy by showing off high-quality photos, letting buyers customise their furniture in 3D, and making their websites look nice.",
  },
  {
    title: "B2B",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_xwu4js.png",
    description:
      "As a leading ecommerce development firm in Bulgaria, we offer B2B platforms that make it easier to talk to each other, handle big orders, and build commercial partnerships that will last.",
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
          {/* <button className="explore-btn">Explore More</button> */}
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;
