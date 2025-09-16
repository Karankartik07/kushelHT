"use client"
import React from "react";
import "./track.css";

const features = [
  {
    title: " Proven BigCommerce Expertise",
    desc: "Our Headless BigCommerce Development solutions are customer-oriented, result-driven, and geared to help increase your online visibility. Kushel Digi Solutions has over 8 years of experience in delivering BigCommerce solutions for various modern businesses.",
  },
  {
    title: "Customized Solutions ",
    desc: "We offer Headless services tailored for the specific needs of your business. Our solution is carefully designed to optimize your store performance and scalability. Our team meticulously work on the requirements of clients to ensure the project with in align with your business goal.",
  },
  {
    title: "Dedicated Support and Maintenance",
    desc: "Get reliable and continued support from our committed maintenance services. We are always here to ensure the store is secure, updated, and working at maximum capacity. Our team is always there to help you out in any issues you face.",
  },
  {
    title: "Excellent User Experience",
    desc: "Showcase your shop with truly unique innovative design and user experience. We design engaging, responsive designs that impress your audience and increase conversions. Kushel Digi’s main focus is customer satisfaction to attract more traffic to your site.",
  },
  {
    title: " SEO and Marketing Strategy",
    desc: "Boost the visibility of your store with our professional SEO and marketing strategies. We implement tactics that will help drive traffic and maximize your search rankings. Kushel Digi Solutions has a dedicated team for SEO that continuously work to rank your site.",
  },
  {
    title: "Seamless Integration",
    desc: "Get a smooth transition into Headless BigCommerce with our integration and migration services. We ensure zero hassle for a seamless process. Our team will easily connect your store with with CMS platforms, CRMs, ERPs and marketing tools.",
  },
];

const Track = () => {
  return (
    <section className="spiderbloom">
      <div className="spiderbloom-container">
        <h2 className="spiderbloom-heading">
        Why Go Headless BigCommerce with Kushel Digi Solutions?

        </h2>
        <div className="spiderbloom-grid">
          {features.map((item, idx) => (
            <div className="spiderbloom-card" key={idx}>
              <h3 className="spiderbloom-title">
                {item.title}
                <div className="spiderbloom-underline" />
              </h3>
              <p className="spiderbloom-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Track;
