'use client';

import React from 'react';
import "./UpgradeServices.css";

const UpgradeServices = () => {

    // const magentoContent = [
    //     {
    //         img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744110234/upgrade_1-D2TlQ-e2_kzmmna.svg',
    //         title: "Magento migration<br />(from version 1 to 2)",
    //         points: [
    //             "Significant speed and performance improvements",
    //             "More user-friendly checkout process to reduce cart abandonment and enhance customer satisfaction",
    //             "More intuitive and user-friendly admin panel",
    //             "Fully responsive and optimized for mobile devices to expand your market reach",
    //             "Stronger data protection to safeguard your online store against security threats"
    //         ]
    //     },
    //     {
    //         img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744110232/upgrade_2-tmyZRcn0_cwg5ko.svg',
    //         title: "Magento 2 upgrade",
    //         points: [
    //             "Access to the latest features and functionality",
    //             "Improved scalability for more products and more traffic",
    //             "Regular security updates to safeguard your store against the latest cyber threats",
    //             "Better SEO capabilities to attract more organic traffic",
    //             "Better and more efficient integration with third-party tools and services"
    //         ]
    //     }
    // ];

    const magentoContent = [
        {
          img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744724513/Group_5_2_tgbqrh.png',
          title: "Magento 1 to Magento 2 Upgrade",
          points: [
            "Improved Website Speed & Performance for smoother browsing and easy checkout.",
            "Stronger Security Features to keep your store safe.",
            "Better Mobile Experience to reach more customers on the go.",
            "Easy Checkout Process by reducing cart abandonments.",
            "Modern Admin Panel to manage your store."
          ]
        },
        {
          img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744724448/Group_6_rfdymj.png',
          title: "Magento 2 Upgrade",
          points: [
            "Bug Fixes & Security Patches to keep your store updated with latest Magento security updates.",
            "Performance Enhancements to ensure faster load times.",
            "New Features & Functionalities to provide seamless shopping experience and backend management.",
            "Improved Compatibility to keep your store running smoothly with the latest core updates.",
            "Reduced Downtime Risks to minimize disruptions to your live store."
          ]
        }
      ];
      


    return (
        <div className='magento-upgrade-services-container'>
            <div className="magento-upgrade-services-inner-container">
                <h3 className='magento-upgrade-services-heading primary-heading'>Upgrade Your Store with Our Platform Upgrade Services</h3>
                <p className='secondary-heading'>Is your Magento store running on an outdated version? It's time for an upgrade! We assist in migrating to the latest Magento version seamlessly, without affecting data, design or functionality. Experience improved speed, enhanced security, and additional features that boost the performance of your online store.</p>
                {/* <p className='secondary-heading'>As a Magento web development agency, we know how to transform your Magento store into a powerhouse of e-commerce success and prepare your business for tomorrow’s demands.</p> */}

                <div className="magento-upgrade-services-flex-box">
                    {
                        magentoContent.map((item, index) => {
                            return <div key={index} className="magento-upgrade-services-card">
                                <div className="magento-upgrade-services-card-left">
                                    <img src={item.img} alt="services-image" />
                                </div>
                                <div className="magento-upgrade-services-card-right">
                                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />

                                    <ul className='magento-upgrade-services-card-right-ul'>
                                        {
                                            item.points.map((point, i) => {
                                                return <li className='magento-upgrade-services-card-right-li' key={i}>{point}</li>;
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default UpgradeServices