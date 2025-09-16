"use client";
import React from "react";
import "./denmarkserv.css";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164905/Mask_group-2_ohpmkb.png",
    title: "Ecommerce Consulting",
    description:
      "Are you considering starting an ecommerce website but are unsure where to start? Allow our experts to meticulously develop a strategy for you that will provide results.",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164912/Mask_group-7_b4dgnb.png",
    title: "E-Commerce Design (UI/UX)",
    description: `
With eye-catching designs and graphics, our UI/UX team produces engaging user experiences that urge users to click. Giving your users an unforgettable experience is the goal of our design services, which will help you stay conversion-focused at all times.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "E-Commerce Development",
    description: `
As a leading ecommerce development company in Ireland, we provide highly customized ecommerce software that enables you to put sales first and let the others worry about automated ecommerce software solutions.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "After-Launch Support",
    description: `
We provide post-launch support and services that handle migration, updates, blog resolution, and other problems, ensuring that your ecommerce apps are always up to date.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164910/Mask_group-6_kvrolq.png",
    title: "E-Commerce Migration",
    description: `
Want to relocate your online store? Let us do this for you. Our knowledgeable staff moves your current business to a new online store without erasing any data or daily traffic.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_cexwc2.png",
    title: "Platform-Based E-Commerce Solution",
    description: `
Our ecommerce expertise allows us to develop across platforms on Magento, WooCommerce and Shopify. Its flexibility will enable us to recommend the best platform for your web requirements and your budget.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164431/Mask_group_13_pgy2ad.png",
    title: "E-Commerce Integration",
    description: `
We use cutting-edge third-party tools and technology to create a complete, data-driven ecommerce experience that meets your specific requirements.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "E-Commerce Support",
    description: ` 
We ensure your website works well on all devices. We provide end-to-end support to ensure your website works smoothly with no errors and bugs.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164904/Mask_group-1_cwxyam.png",
    title: "E-Commerce Audit",
    description: `
An ecommerce audit carefully checks your online store's performance, such as its website speed, SEO, user experience, mobile friendliness, and checkout process, to find ways to make it better that will bring in more visitors, convert them into customers, and boost overall sales.
`,
  },
];

const scrollToFormHome = () => {
  const formSection = document.getElementById('form-section');
  if (formSection) {
    const yOffset = -120;
    const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const IrelandEcomServ = () => {
    const navigate = useRouter();
  
  return (
    <section className="ecom-denmark-section">
      <h3 className="ecom-denmark-title">
  What E-Commerce Website Development Services Do We Offer?
      </h3>

      <div className="ecom-denmark-grid-wrapper">
        <div className="ecom-denmark-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-denmark-card">
              <div className="ecom-denmark-icon">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="ecom-denmark-icon-img"
                />
                <h3 className="ecom-denmark-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-denmark-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

       <div className="ecom-denmark-buttons">
        <button onClick={() => navigate.push('/contact-us')} className="ecom-btn primary">Book a Call
          {/* Book a Call <HiArrowSmallRight /> */}
        </button>
        {/* <button className="ecom-btn secondary">Request an Audit</button> */}
        <button onClick={scrollToFormHome} className="ecom-btn secondary">
          Request an Audit
        </button>

      </div>
    </section>
  );
};

export default IrelandEcomServ;
