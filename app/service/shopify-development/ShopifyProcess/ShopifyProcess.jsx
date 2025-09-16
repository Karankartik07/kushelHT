'use client'

import React, { useEffect, useRef, useState } from 'react';
import "./ShopifyProcess.css";

const Shopify = ({page}) => {

    const [inView, setInView] = useState(false);
    const shopifyPhasesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (shopifyPhasesRef.current) {
            observer.observe(shopifyPhasesRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <div className="shopify-banner-outer-container">
            <div className='shopify-outer-container'>
                <div className="shopify-inner-container">
                    <h4 className='shopify-banner-heading '>Our {page} Development Process</h4>
                    <p className='shopify-banner-para secondary-heading'>We Handle the Tech, You Focus on Sales</p>
                    <div className="shopify-banner-flex-container">
                        <div className="shopify-banner-left">
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744002481/shopify-image_k0dzzt.svg" alt="" />
                        </div>
                        <div ref={shopifyPhasesRef} className="shopify-banner-right">
                            {
                                inView && (
                                    <div className="shopify-banner-right-content">
                                        <div id='shopify-1st-service' className="shopify-banner-services">
                                            <h3 className='shopify-banner-1st-service-heading'>Discovery & Planning</h3>
                                            <p className='shopify-banner-1st-service-para'>Understanding your business goals, audience, and technical needs to create a development roadmap.</p>
                                        </div>
                                        <div id='shopify-2nd-service' className="shopify-banner-services">
                                            <h3 className='shopify-banner-2nd-service-heading'> Design & User Experience</h3>
                                            <p className='shopify-banner-2nd-service-para'>Visually appealing, user-friendly designs according to your brand identity.
                                            </p>
                                        </div>
                                        <div id='shopify-3rd-service' className="shopify-banner-services">
                                            <h3 className='shopify-banner-3rd-service-heading'>Custom Development
                                            </h3>
                                            <p className='shopify-banner-3rd-service-para'>Build and customize your Shopify store by integrating features, third-party apps as needed.</p>
                                        </div>
                                        <div id='shopify-4th-service' className="shopify-banner-services">
                                            <h3 className='shopify-banner-4th-service-heading'>Rigorous Testing</h3>
                                            <p className='shopify-banner-4th-service-para'>Rigorous testing for performance, speed, mobile responsiveness, and bug-free functionality.</p>
                                        </div>
                                        <div id='shopify-5th-service' className="shopify-banner-services">
                                            <h3 className='shopify-banner-5th-service-heading'>Launch & Support</h3>
                                            <p className='shopify-banner-5th-service-para'>After launch, we provide training, maintenance, and continuous support. 
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopify