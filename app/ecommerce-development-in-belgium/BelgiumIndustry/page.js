"use client";
import React, { useState } from "react";
import "./belgiumindustry.css";

const industries = [
  {
    title: "Fashion",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png",
    description:
      "For fashion brands, we make ecommerce websites that look great, work well on mobile devices, load quickly, and have easy-to-use shopping features. This helps clothing and accessory stores improve collection display and engagement while turning casual visitors into loyal customers.",
  },
  {
    title: "Automotive",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png",
    description:
      "For the automobile industry, we offer catalogs of parts, booking systems, and comparison tools as additional aftermarket services- designed for automotive dealers, auto parts stores, and service providers to streamline complex product information in a friendly way, to improve UX.",
  },
  {
    title: "Electronics",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "For electronic brands that need ecommerce websites, we create multi-purpose platforms that can showcase technical specifications, enable the purchasing of related goods or services on mobile devices, and during checkout, provide dynamic updates while on desktop, providing a lag-free experience.",
  },
  {
    title: "Food & Beverages",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png",
    description:
      "With functions such as dynamic menus, real-time delivery tracking, subscription models, and custom packaging for orders of F&B brands, we design enjoyable ecommerce websites enabling a fresh digital shopping experience.",
  },
  {
    title: "Luxury",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png",
    description:
      "For premium luxury niche brands, our ecommerce platforms provide multi-tier branded operation systems to run elegant, precise, tailored, exclusive interfaces, making it easier for their customers through high-end security payment gateways combined with client loyalty. Make features with controlled access, and upgrade a digital storefront.",
  },
  {
    title: "Manufacturing",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png",
    description:
      "We get rid of problems in B2B buying systems by making custom ecommerce sites just for makers. Custom platforms make operations better by letting you configure products, get bulk discounts, and see real-time inventory. They also make distributors and suppliers happier.",
  },
  {
    title: "Furniture",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png",
    description:
      "With room previews and advanced filtering, we help furniture brands sell their products with augmented reality (AR) so customers can visualize items in real space before confidently purchasing online.",
  },
  {
    title: "B2B",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_xwu4js.png",
    description:
      "Our focus for B2B ecommerce is personalized pricing as well as tiered access, repeat orders, and integration with CRM ERPs that enable smarter selling, empowering wholesalers, distributors, and large-scale suppliers to sell smarter and scale faster.",
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
