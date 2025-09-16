"use client";
import React, { useState } from "react";
import "./belgiumindustry.css";

const industries = [
  {
    title: "Fashion",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png",
    description:
      "We create user-friendly, attractive, stylish,  user-centric, fast-loading, easy-to-navigate platforms for fashion brands. It allows visitors to stay longer and increases the chance of conversions.",
  },
  {
    title: "Automotive",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png",
    description:
      "As a leading e-commerce development company in Bulgaria, we streamline product catalogs, smart search options, and high-quality images. It helps car enthusiasts navigate easily and provides a good shopping experience. ",
  },
  {
    title: "Electronics",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "In Bulgaria’s growing tech market, we specialize in creating seamless ecommerce websites that contain product catalogs, smooth navigation, and faster transactions for businesses.",
  },
  {
    title: "Food and beverages",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png",
    description:
      "As an ecommerce development company in Bulgaria, we design food and beverage brands' online stores with functions such as delivery options, custom packaging, parcel options, smart search, and subscription models. ",
  },
  {
    title: "Luxury",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "We provide exquisite designs, unique features, high-end websites, and a flawless shopping experience for affluent customers for luxurious products.",
  },
  {
    title: "Manufacturing",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png",
    description:
      "For maximum efficiency, our top website development company streamlines supply chains, streamlines bulk orders, and enhances B2B and B2C interactions. ",
  },
  {
    title: "Furniture",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png",
    description:
      "We help furniture businesses to showcase high-quality pictures, 3D customization, and, appealing website design to convert visitors to customers. ",
  },
  {
    title: "B2B",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_xwu4js.png",
    description:
      "As a prominent e-commerce development company in Bulgaria, we offer B2B platforms that improve communication, simplify huge orders, and establish business relationships for long-term growth.",
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
