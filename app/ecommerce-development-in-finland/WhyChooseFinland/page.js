'use client';
import React from 'react';
import './whyfinland.css';

const features = [
    {
        icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1753164905/Mask_group-2_ohpmkb.png',
        title: 'Tailored E-Commerce Store',
        desc: 'We build bespoke ecommerce sites that meet the demands of both the company and its target market.',
    },
    {
        icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1753165898/Mask_group_1_ljmxuo.png',
        title: 'Knowing about Expert Platforms',
        desc: 'We are one of the best ecommerce development firms in Finland, and we have worked with a lot of different platforms.  We utilise a lot of sophisticated platforms, such as WooCommerce, Magento, and Shopify.',
    },
    {
        icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1753161374/Mask_group_1_zcgiqe.png',
        title: 'Mobile Responsive Design',
        desc: 'Because the majority of our users are on mobile devices, we make sure our websites operate on all of them.',
    },
    {
        icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1753165894/Mask_group_2_movu3z.png',
        title: 'Transparent & Reliable Process',
        desc: 'We provide every bit of detail about your online store, ensuring clear communication and dependable project timelines.',
    },
    {
        icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1753165894/Mask_group_3_nsiccw.png',
        title: 'End-to-End Services',
        desc: 'From getting ready to after the launch. We design visually appealing, fast, responsive, mobile-friendly ecommerce stores that engage real audiences and gain more conversions.',
    },
    {
        icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1753165893/Mask_group_4_r87vhk.png',
        title: 'Proven Industry Experience',
        desc: 'We have decades of experience in designing ecommerce websites with 1000+ happy clients.',
    },
];

const WhyChooseFinland = () => {
    return (
        <section className="why-choose-section">
            <div className="why-choose-wrapper">
                <h2 className="why-choose-heading">Why Partner with Kushel Digi Solutions?</h2>
                <p className="why-choose-subtext">
We are a well-known ecommerce development company in Finland. We make ecommerce sites that look good, load quickly, work well on mobile devices, and persuade real consumers to spend more.                </p>
            </div>

            <div className="why-choose-container">
                <div className="why-choose-left">
                    <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750331416/Group_1171281538_c0mfbg.png" alt="why choose kushel digi solutions" />
                </div>

                <div className="why-choose-right">
                    <div className="why-choose-features">
                        {features.map((item, index) => (
                            <div className="feature-item" key={index}>
                                <div className="feature-icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className="feature-texts">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFinland;
