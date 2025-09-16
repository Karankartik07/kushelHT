"use client";
import React from "react";
import "./denmarkserv.css";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_cexwc2.png",
    title: "E-Commerce Advice",
    description:
      "We help businesses in selecting the best platforms, designs, tools and software for their online stores. We help them in crafting their dream store into a live e-commerce store. ",
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_d9v6rx.png",
    title: "Personalised e-commerce sites",
    description: `We build personalised online stores for brands that fit their needs and ambitions. We are a well-known e-commerce development company in Denmark.   Before building an e-commerce site, our experienced team learns about the company and the consumers it wants to target`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_1_zcgiqe.png",
    title: "Mobile First Development",
    description: `
We know that most of our clients use mobile devices.  That's why we build ecommerce sites that work well on mobile devices.  We make sure that the sites load quickly, are easy to use, and give users a perfect experience.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_2_r8dqwc.png",
    title: "Scalable Platforms",
    description: `
We build unique e-commerce sites using well-known platforms like BigCommerce, Shopify, and Magento. We make sure that everything meets your brand's needs and wants.
.`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_3_otl835.png",
    title: "Ecommerce Integrations",
    description: `We employ high-quality third-party solutions including ERPs, CRMs, and many more.  This links all of your business operations together, making sure they all run smoothly.`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_4_tnqtnw.png",
    title: "E-Commerce Migration",
    description: `You may easily move between websites.   Our team of specialists knows how to move online stores without losing any data.   We assure that sales and traffic won't go down.`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_5_v6zapb.png",
    title: " E-Commerce Audit",
    description: `
Our expert team carefully monitors your website and finds out the errors and scope for improvements to improve the website’s speed, security, and user experience.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162956/Mask_group_6_ifgr88.png",
    title: "Speed and Performance Improvement",
    description: `
No one likes slow websites, and it impacts sales. So we ensure that your website is bug-free and loads faster by tweaking the code, reducing file size and speeding up servers.
`,
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Post Launch Support and Maintenance",
    description: `
Our work continue after launch also. We keep an eye on your e-commerce store, fix bugs, update plugins, and adding new features, so that your online store works smoothly.
`,
  },
];

const scrollToFormHome = () => {
  const formSection = document.getElementById("form-section");
  if (formSection) {
    const yOffset = -120;
    const y =
      formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const DenmarkEcomServ = () => {
  const navigate = useRouter();

  return (
    <section className="ecom-denmark-section">
      <h3 className="ecom-denmark-title">
        What E-commerce Website Development Services Do We Offer?
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
        <button
          onClick={() => navigate.push("/contact-us")}
          className="ecom-btn primary"
        >
          Book a Call
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

export default DenmarkEcomServ;
