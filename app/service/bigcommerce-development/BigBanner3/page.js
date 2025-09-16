'use client';
import React from 'react';
import './BigBanner3.css';
import Link from 'next/link';


const Page = () => {

  
  const leftContent = {
    heading: "Kushel Digi BigCommerce Development Services",
    subheading: "Kushel Digi is committed to deliver your dream ecommerce store with high powered Bigcommerce solutions.",
    buttonLabel: "Get a Free Consultation Today",
    buttonLink: "/contact-us"
  };
  
  
  const services = [
    {
      title: "BigCommerce Custom Store Development",
      description:
        "Let us turn your vision into a reality through our custom BigCommerce store development. Our eCommerce solutions are designed to meet the needs of your brand. Our platform ensures a seamless and engaging shopping experience for your customers.",
    },
    {
      title: "BigCommerce Theme Design",
      description:
        "Stand out in this saturated market with an attractive, custom-made BigCommerce theme. Our design team will create beautiful, responsive themes that reflect your branding. Give that store an extra edge that gets the customers interacting.",
    },
    {
      title: "BigCommerce App Integration",
      description:
        "Augment store functionality with BigCommerce app integrations that are seamlessly integrated. We will integrate vital tools and third-party apps to further up your store's capability. Whether it's a payment gateway or a marketing tool, we have got you covered.",
    },
    {
      title: "BigCommerce Migration Services",
      description:
        "Moving to BigCommerce? Our migration services make sure that your transition runs smoothly with the least amount of downtime. We take responsibility for everything, from data porting to design replicability, so that you do not lose your store functionality.",
    },
    {
      title: "BigCommerce Performance Optimization",
      description:
        "Ensure that your store is fast, responsive, and reliable with our performance optimization services. We will inspect and improve the load times, server performance, and user experience so that customers always remain satisfied and engaged.",
    },
    {
      title: "BigCommerce SEO & Marketing",
      description:
        "Expand your online presence and sales with our BigCommerce SEO and marketing services. We put into action tested strategies that will enhance your search ranking and drive targeted traffic. Let us help you reach your audience effectively.",
    },
  ];


  return (
    <section className="BcontainerEcomSEc">
      <div className="BcontainerEcom">
        <div className="Bleft-sectionEcom">
          <h3 className="primary-heading">{leftContent.heading}</h3>
          <p className="secondary-heading">{leftContent.subheading}</p>
          <Link href={leftContent.buttonLink}>
            <button>{leftContent.buttonLabel}</button>
          </Link>
        </div>

        <section className="Bright-sectionEcom">
          {services.map((service, index) => (
            <div className="Bicontent-blockEcom" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Page;
