'use client';

import React from 'react';
import "./FeatureSection.css";

const FeatureSection = ({services,contents}) => {

    const features = [
        {
            icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092987/Scalable-Architecture_fmw5y8.png',
            title: 'Scalable Architecture',
            desc: `BigCommerce is known for offering flexible customization options that allows businesses to design unique storefronts to handle growing customer demands.`
        },
        {
            icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/Omnichannel-Selling_uljoeu.png',
            title: 'Omnichannel Selling',
            desc: `BigCommerce will help you to expand your reach by selling across multiple channels, including social media and marketplace from centralized BigCommerce dashboard.
`
        },
        {
            icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/Advanced-Marketing-Tools_oyncng.png',
            title: 'Advanced Marketing Tools',
            desc: `Most important features of Bigcommerce is that it boost your store’s visibility with in-built SEO features, customizable URLs and marketing tools that drive traffic along with high conversions.`
        },
        {
            icon:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/Secure-Infrastructure_dxdrcn.png',
            title: 'Secure Infrastructure',
            desc: `It ensure a secure shopping experience by integrating features like enterprise-level security, PCI compliance,fast-loading pages and optimal performance for your customers.
`
        }
    ];

    return (
        <div className='big-feature-outer-container'>
            <div className="big-feature-inner-container">
                <div className="left-big-feature-container">
                <h4 className="bigcommerce-feature-heading primary-heading">{contents?.title}</h4>
                    <p className='big-feature-para secondary-heading'>{contents?.desc}
                    </p>

                    <div className="left-big-feature-grid">

                        {services?.map((feature, index) => (
                            <div key={index} className="left-big-feature-grid-item">
                                <img loading="lazy" src={feature.icon} alt="feature-icon" className='feature-section-left-icon'/>
                                <h3 className='big-feature-card-title'>{feature.title}</h3>
                                <p className='big-feature-card-desc'>{feature.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="right-big-feature-container">
                    <img loading="lazy" src={contents?.img} alt="feature-image" />
                </div>
            </div>
        </div>
    )
}

export default FeatureSection