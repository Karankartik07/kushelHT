"use client";
import React, { useState } from "react";
import "./belgiumindustry.css";

const industries = [
  {
    title: "Fashion",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png",
    description:
      "Being among the best ecommerce development companies in Ireland, we create captivating websites that are visually appealing and attractive to visitors, hence promoting more conversions. ",
  },
  {
    title: "Automotive",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png",
    description:
      "To improve user experience, our custom ecommerce websites enable features such as spare part listings, service booking, and product compatibility checks, which lead to greater conversion rates. ",
  },
  {
    title: "Electronics",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "As one of the leading ecommerce development companies in Ireland, we integrate stock updates, detailed product specifications, warranty tracking, and comparison tools into ecommerce websites, increasing user engagement. ",
  },
  {
    title: "Food and beverages",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png",
    description:
      "For restaurants and cloud kitchens, we design visually appealing F&B websites that offer easy menu browsing, order customization, real-time order tracking, advanced delivery monitoring, and secure payments. ",
  },
  {
    title: "Luxury",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "As the top ecommerce development agency in Ireland, we focus on your products’ and services’ elite-level integration by crafting visually rich websites that are appealing to the eye. ",
  },
  {
    title: "Manufacturing",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png",
    description:
      "We streamline bulk and B2B orders for manufacturers by offering custom quote submissions with tiered pricing as well as tailored options that integrate flawlessly with the order-to-delivery process workflow. ",
  },
  {
    title: "Furniture",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png",
    description:
      "Using our augmented reality websites, clients can sample and view furniture in pre-furnished rooms. These custom filters have greatly broadened client interaction with products through the use of augmented reality-powered interfaces.",
  },
  {
    title: "B2B",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_xwu4js.png",
    description:
      "As part of our ecommerce offerings, our B2B solutions grant buyers advanced functionalities like tailored user accounts, bespoke pricing, as well as comprehensive order and invoice history. These automation solutions also help streamline due process workflows while scaling the business, thus enhancing operational efficiency.",
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
