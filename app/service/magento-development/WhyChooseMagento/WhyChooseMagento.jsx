'use client'

import React from 'react';
import "./WhyChooseMagento.css"

const WhyChooseMagento = () => {

    const whyChooseUsContent = [
        {
          heading: "Why choose us?",
          subheading: "On Tap - A Magento development agency you can fully trust",
          description:
            "At On Tap, we're not just building Magento stores; we're building lasting partnerships. With over 19 years of experience, we bring unparalleled expertise to every project, collaborating closely with clients to achieve both immediate and long-term eCommerce success.",
          additionalInfo:
            "Our commitment extends beyond launch, with a dedicated support framework that ensures your Magento store remains optimized, secure, and primed for future growth. Choose On Tap and experience the difference of working with a Magento agency that prioritizes your success every step of the way.",
          features: [
            {
              title: "19+ Years Experience",
              detail: "in Magento/Adobe Commerce development."
            },
            {
              title: "Partnered with Magento",
              detail: "to build Magento 1 and Magento 2."
            },
            {
              title: "Strong leadership",
              detail: "by pioneers working with Magento from its start."
            },
            {
              title: "400+ eCommerce experts",
              detail: "focused on delivering your successful project."
            }
          ]
        }
      ];
      
      

  return (
    <div className='why-choose-magento-outer-container'>
        <div className="why-choose-inner-container">
            <div className="why-choose-magento-left">
                {
                    whyChooseUsContent.map((item,index)=>{
                        return (
                            <div key={index} className='why-choose-magento-inner-left'>
                                    <h3 className='primary-heading'>{item.heading}</h3>
                                    <h4 className='why-choose-magento-left-subheading'>{item.subheading}</h4>
                                    <p>{item.description}</p>
                                    <p>{item.additionalInfo}</p>

                                    <div className='why-choose-magento-inner-left-card-container'>
                                        {
                                            item.features.map((feature, i) => {
                                                return (
                                                    <div key={i} className='why-choose-magento-inner-left-card'>
                                                            <h4>{feature.title}</h4>
                                                            <p>{feature.detail}</p>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="why-choose-magento-right">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744114653/about-us-ontap_nyhzaa.jpg" alt="image" />
            </div>
        </div>
    </div>
  )
}

export default WhyChooseMagento