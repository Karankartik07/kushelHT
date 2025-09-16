'use client'

import React from 'react';
import "./WhyMagento.css";

const WhyMagento = () => {

    // const features = [
    //     {
    //       img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204732/67c8025a4ea909ca0949e339_Type_Powerful_leb6md.svg",
    //       title: "Powerful",
    //       description: "With the most developers and open-source solutions, Magento’s the most powerful e-commerce platform. We’ve been a Magento development company for 15+ years. It hasn’t let us down yet."
    //     },
    //     {
    //         img:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025918bca5d2cf61d8f0_Type_Intelligent_v618xs.svg',
    //       title: "Intelligent",
    //       description: "AI tools of Adobe Sensei integrate directly with Magento stores, for a personalized experience and that increases total spending. It’s just one of the reasons 85% of our customers come back."
    //     },
    //     {
    //        img:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025a1d6bab08bfa238df_Type_Reliable_t7pgxm.svg',
    //       title: "Reliable",
    //       description: "Magento e-commerce sites run on Amazon Web Service. 99.99% uptime is why Land Rover, Nestle, Manolo Blahnik, and Calvin Klein choose Magento."
    //     },
    //     {
    //         img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025804dd60c5c0083b37_Type_Fully_Customizable_pzzwmd.svg",
    //       title: "Fully Customizable",
    //       description: "Custom Magento Development is all we do, and it’s exactly what the platform was designed for. Coupled with our expertise, there are no limits on features or functionality we can achieve."
    //     },
    //     {
    //         img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025862e534c5daf51547_Type_Future_Proof_r3hb1k.svg",
    //       title: "Future Proof",
    //       description: "Unlike platforms controlled by a single owner, more than 260k Magento developers are creating thousands of third-party tools on the largest, fully open-source e-commerce platform."
    //     },
    //     {
    //         img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025a38d37c39d172a2aa_Type_Industry_and_Global_Relevance_xcjufp.svg",
    //       title: "Industry and Global Relevance",
    //       description: "Magento powers 315,000 sites across the globe. We’ve developed sites for customers all over the world, in every industry, and integrated every major payment processor and shipping provider."
    //     }
    //   ];
      
    const features = [
      {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723722/Mask_group_36_ytmszs.png",
        title: "Scalability",
        description: "Magento is known for its scalability as it is designed to support fast growth and increasing traffic. Whether you're selling 100 products or 100,000, the platform grows with your business without compromising on performance."
      },
      {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_25_t1aoy7.png",
        title: "Flexibility",
        description: "Magento’s open-source architecture allows you to have the freedom to build a fully customized store according to your brand’s identity and customer journey. You’re not at all stuck to templates- if you can imagine it, you can create it."
      },
      {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_26_g150hw.png",
        title: "Security",
        description: "Magento places security in priority with regular updates, patches, and strong data encryption. It covers everything from secure payment integrations to protection against threats and enables your store and customer data stay safe."
      },
      {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_27_yp0mvw.png",
        title: "Performance",
        description: "In eCommerce speed is the most important element and Magento delivers. It’s optimized for high performance to ensure fast page loads, quick checkout and smooth navigation even with heavy traffic and large product catalogs."
      },
      {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_28_e3bzrb.png",
        title: "Integration",
        description: "Magento comes with seamless integration with third-party services such as CRMs, ERPs, accounting software, shipping solutions, and more. It makes your operations smoother and your backend more efficient. "
      },
      {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_29_zsva2h.png",
        title: "Analytics",
        description: "Magento’s built-in analytics and reporting tools enable you to make data-driven decisions. It allows you to monitor sales, customer behavior, product performance, and more to constantly refine your strategy."
      },
      // {
      //   img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723618/Mask_group_32_cfrod2.png",
      //   title: "Magento Store Development",
      //   description: "We build scalable, customized Magento stores with product catalogs, search filters, navigation, multi-currency support, and easy checkout for a complete eCommerce solution."
      // },
      // {
      //   img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_31_kwr0nc.png",
      //   title: "Theme Design & Customization",
      //   description: "We design responsive Magento themes that align with your brand identity, covering everything from UI/UX to layout changes for a seamless shopping experience."
      // },
      // {
      //   img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723618/Mask_group_32_cfrod2.png",
      //   title: "Magento Extension Development",
      //   description: "We develop custom extensions to expand your Magento store's functionality—be it a unique payment option, product filter, or loyalty program."
      // },
      // {
      //   img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_33_kwpuni.png",
      //   title: "Migration to Magento",
      //   description: "We offer smooth, secure migration from Shopify, WooCommerce, OpenCart, or older Magento versions—preserving your product and customer data."
      // },
      // {
      //   img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723619/Mask_group_34_xxdvxi.png",
      //   title: "Performance Optimization",
      //   description: "Our performance optimization ensures your Magento store runs fast, with improved server response, load times, and user satisfaction."
      // },
      // {
      //   img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744723618/Mask_group_35_jvcoiw.png",
      //   title:'Support & Maintenance',
      //   description: "We provide reliable maintenance to keep your store secure, updated, and operating at its best—so you can focus on growth while we handle the tech."
      // }
    ];
    
  return (
    <div className='why-magento-container'>
        <div className="why-magento-inner-container">
            <h3 className='why-magento-heading primary-heading'>Why Magento</h3>

            <div className="why-magento-grid-container">
                {
                    features.map((item,index)=>{
                        return (
                            <div key={index} className="why-magento-grid-item">
                                <img src={item.img} alt="card-image" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default WhyMagento