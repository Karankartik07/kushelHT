'use client';
import React from 'react';
import './belgiumserv.css';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164905/Mask_group-2_ohpmkb.png",
    title: "Expert E-Commerce Advice",
    description:
      "As a leading ecommerce website development Company, we advise businesses to choose the right strategy and software selections. From start to end, our experts consult every bit to meet their ecommerce store requirements."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164912/Mask_group-7_b4dgnb.png",
    title: "E-Commerce Website Design",
    description:
      "We don't believe in creating websites through pre-made templates. We create custom websites tailored to your needs and wants. It ensures uniqueness, attractive and dedicated to your brand goals."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_1_zcgiqe.png",
    title: "Mobile-optimized Stores",
    description:
      "We understand that most of your visitors are mobile users, so we ensure the ecommerce store is mobile responsive and works well on all devices."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "Platform-Based E-Commerce Development",
    description:
      "Our expert team specializes in creating online stores using different platforms like WooCommerce, Shopify and Magento. As a trusted ecommerce development company in Bulgaria, we suggest the best platforms for your business."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164912/Mask_group-7_b4dgnb.png",
    title: "E-Commerce Website Design",
    description:
      "Our expert team creates mesmerizing website designs for the online store that catch users’ attention. We make sure that the ecommerce sites are easy for anyone to use and that they work well on all devices."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753188496/Mask_group_14_jqbcmw.png",
    title: "Adding Third-Party Features",
    description:
      "CRMs, payment systems, shipping tools, and marketing apps are some of the third-party platforms that we use. It makes sure that the business runs more smoothly and quickly."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164428/Mask_group_16_u7gqfj.png",
    title: "E-Commerce Migration",
    description:
      "Do you want to change your shop? This is where we come in to help you. We move your whole store, including your goods, brochures, sales, and other things. There will be no downtime, and your SEO results will not drop."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Ongoing Help",
    description:
      "As the best ecommerce development company in Bulgaria, we offer ongoing help and maintenance, such as fixing bugs, keeping plugins up to date, and adding new features to make sure everything runs smoothly."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753162957/Mask_group_5_v6zapb.png",
    title: "E-Commerce Performance Audit",
    description:
      "We look at the SEO, UX, speed, and layout of your shop. With our full ecommerce audit service, it will be easy to make your site healthier, get more visitors, and make more sales."
  }
];


const scrollToFormHome = () => {
  const formSection = document.getElementById('form-section');
  if (formSection) {
    const yOffset = -120;
    const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const BulgariaEcomServ = () => {
  const navigate = useRouter();
  
  return (
   <section className="ecom-belgium-section">
      <h3 className="ecom-belgium-title">What E-Commerce Website Development Services Do We Offer?
</h3> 
      
      <div className="ecom-belgium-grid-wrapper">
        <div className="ecom-belgium-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-belgium-card">
              <div className="ecom-belgium-icon">
                <img src={feature.icon} alt={feature.title} className="ecom-belgium-icon-img" />
                <h3 className="ecom-belgium-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-belgium-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-belgium-buttons">
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

export default BulgariaEcomServ;
