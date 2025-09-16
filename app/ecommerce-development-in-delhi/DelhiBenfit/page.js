'use client';
import React from 'react';
import './delhibenfit.css'; // Assuming you have a CSS file for styles

const benefits = [
  {
    title: 'Startups and New Businesses',
    description: 'Start your online shop with custom ecommerce design and grow quickly with a mobile-friendly, cost-effective solution.'
  },
  {
    title: 'Small and Medium Enterprises (SMEs)',
    description: 'Enhance sales, improve customer experience, and automate operations with efficient integrations powered by ecommerce automation tools.'
  },
  {
    title: 'Large Enterprises & Brands',
    description: 'Get advanced features of ecommerce for multi-channel selling and enterprise-level security for online business transactions of greatly expanding volumes.'
  }
];

const DelhiBenfit = () => {
  return (
    <section className="ecommerce-benefits">
      <h2 className="benefits-heading">
        Who can get benefits from eCommerce Development Services?
      </h2>
      <div className="benefits-cardss">
        {benefits.map((item, index) => (
          <div className="benefit-cardd" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DelhiBenfit;
