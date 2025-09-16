'use client'

import React, { useEffect, useRef, useState } from 'react';
import "./ProcessCustom.css";

const Shopify = () => {

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
                    <h2 className='shopify-banner-heading primary-heading'>OUR CUSTOM SOFTWARE DEVELOPMENT PROCESS</h2>
                    <p className='shopify-banner-para secondary-heading'>We Handle the Tech, You Focus on Sales</p>
                    <div className="shopify-banner-flex-container">
                        <div className="shopify-banner-left">
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744002481/shopify-image_k0dzzt.svg" alt="" />
                        </div>
                        <div ref={shopifyPhasesRef} className="shopify-banner-right">
                            {
                                inView && (
                                    <div className="shopify-banner-right-content">
                                        <div id='shopify-1st-service' className="shopify-banner-services ext-class-h3-s">
                                            <h3 className='shopify-banner-1st-service-heading'>Sprint planning</h3>
                                            <p className='shopify-banner-1st-service-para'>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
                                        </div>
                                        <div id='shopify-2nd-service' className="shopify-banner-services ext-class-h3-s">
                                            <h3 className='shopify-banner-2nd-service-heading'>Tech architecture</h3>
                                            <p className='shopify-banner-2nd-service-para'>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.
                                            </p>
                                        </div>
                                        <div id='shopify-3rd-service' className="shopify-banner-services ext-class-h3-s">
                                            <h3 className='shopify-banner-3rd-service-heading'>Stand ups & weekly demos
                                            </h3>
                                            <p className='shopify-banner-3rd-service-para'>Stand ups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
                                        </div>
                                        <div id='shopify-4th-service' className="shopify-banner-services ext-class-h3-s">
                                            <h3 className='shopify-banner-4th-service-heading'>Code reviews</h3>
                                            <p className='shopify-banner-4th-service-para'>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
                                        </div>
                                        {/* <div id='shopify-5th-service' className="shopify-banner-services ext-class-h3-s">
                                            <h3 className='shopify-banner-5th-service-heading'>Launch & Support</h3>
                                            <p className='shopify-banner-5th-service-para'>After launch, we provide training, maintenance, and continuous support. 
                                            </p>
                                        </div> */}
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