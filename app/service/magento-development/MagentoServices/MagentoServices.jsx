'use client';
import React from 'react';
import './MagentoServices.css';
import Link from 'next/link';

const Page = ({leftContent,services}) => {


  // const leftContent = {
  //             heading: "Kushel Digi Magento Development Services",
  //             subheading: "Kushel Digi is committed to deliver your dream ecommerce store with high powered Shopify",
  //             buttonLabel: "Get a Free Consultation Today",
  //             buttonLink: "contact-us"
  //           };
            
            
  //           const services = [
  //             {
  //               title: "Magento Custom Store Development",
  //               description:
  //                 "Let us turn your vision into a reality through our custom Magento store development. Our eCommerce solutions are designed to meet the needs of your brand. Our platform ensures a seamless and engaging shopping experience for your customers.",
  //             },
  //             {
  //               title: "Magento Theme Design",
  //               description:
  //                 "Stand out in this saturated market with an attractive, custom-made Magento theme. Our design team will create beautiful, responsive themes that reflect your branding. Give that store an extra edge that gets the customers interacting.",
  //             },
  //             {
  //               title: "Magento App Integration",
  //               description:
  //                 "Augment store functionality with Magento app integrations that are seamlessly integrated. We will integrate vital tools and third-party apps to further up your store's capability. Whether it's a payment gateway or a marketing tool, we have got you covered.",
  //             },
  //             {
  //               title: "Magento Migration Services",
  //               description:
  //                 "Moving to Shopify? Our migration services make sure that your transition runs smoothly with the least amount of downtime. We take responsibility for everything, from data porting to design replicability, so that you do not lose your store functionality.",
  //             },
  //             {
  //               title: "Magento Performance Optimization",
  //               description:
  //                 "Ensure that your store is fast, responsive, and reliable with our performance optimization services. We will inspect and improve the load times, server performance, and user experience so that customers always remain satisfied and engaged.",
  //             },
  //             {
  //               title: "Magento SEO & Marketing",
  //               description:
  //                 "Expand your online presence and sales with our Magento SEO and marketing services. We put into action tested strategies that will enhance your search ranking and drive targeted traffic. Let us help you reach your audience effectively.",
  //             },
  //           ];

  return (
    <section className="ShopifyServices__section">
      <div className="ShopifyServices__container">
        <div className="ShopifyServices__left">
          <h3 className="ShopifyServices__heading primary-heading">{leftContent.heading}</h3>
          <p className="ShopifyServices__subheading">{leftContent?.subheading}</p>
          <Link href={leftContent.buttonLink}>
            <button>{leftContent.buttonLabel}</button>
          </Link>
        </div>

        <div className="ShopifyServices__right">
          {services.map((service, index) => (
            <div className="ShopifyServices__card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
