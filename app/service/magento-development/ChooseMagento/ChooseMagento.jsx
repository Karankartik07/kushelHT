'use client'

import React from 'react';
import "./ChooseMagento.css"

const ChooseMagento = () => {

    // const magentoFeatures = [
    //     {
    //       title: "API (Rest/GraphQL)",
    //       description: "Magento offers strong API support with REST and GraphQL, making headless eCommerce development possible."
    //     },
    //     {
    //       title: "Highly Customisable",
    //       description: "Magento can be tailored to meet specific business needs by customizing or extending its core features."
    //     },
    //     {
    //       title: "Third-Party Integration",
    //       description: "Supports ERP, payment gateways, and CRMs like Salesforce, Quickbook, and SAP via third-party integrations."
    //     },
    //     {
    //       title: "Powerful Search Engine Optimisation",
    //       description: "Magento provides built-in SEO tools like URL rewrites and metadata customization for CMS pages and products."
    //     },
    //     {
    //       title: "Easy Inventory and Product Management",
    //       description: "Handle various product types and manage stock across multiple warehouses with Magento's flexible inventory tools."
    //     },
    //     {
    //       title: "Prodigious Community",
    //       description: "Backed by a large community offering plugins, themes, and fast solutions for technical issues."
    //     },
    //     {
    //       title: "Full Control to Analytics and Reports",
    //       description: "Built-in reports and Adobe Sensei integration enable deep business analysis and Google Analytics connectivity."
    //     },
    //     {
    //       title: "Responsive & Mobile Friendly",
    //       description: "Magento emphasizes responsive design, ensuring mobile-friendly storefronts for a seamless user experience."
    //     },
    //     {
    //       title: "Many More Countless Features",
    //       description: "Supports features like PWA, tax, multi-language, multi-store, currency management, and easy configuration."
    //     }
    //   ];


    const magentoFeatures = [
      {
        title: "Custom Store Development",
        description: "Let us turn your vision into a reality through our custom Magento store development. Our eCommerce solutions are designed to meet the needs of your brand to ensure a seamless shopping experience."
      },
      {
        title: "Custom Theme Design",
        description: "Stand out in this saturated market with an attractive, custom-made Magento theme. Our design team will create beautiful, responsive themes that reflect your branding and gets the customers interacting."
      },
      {
        title: "Third-Party App Integration",
        description: "Augment store functionality with Magento app integrations that are seamlessly integrated. We will integrate vital tools and third-party apps to further up your store's capability. We will get you covered with everything."
      },
      {
        title: "Expert Migration Services",
        description: "Moving to Magento? Our migration services make sure that your transition runs smoothly with the least amount of downtime. We take responsibility for everything, from data porting to design replicability."
      },
      {
        title: "Performance Optimization",
        description: "Ensure that your store is fast, responsive, and reliable with our performance optimization services. We will inspect and improve the load times, server performance, and user experience for customer satisfaction."
      },
      {
        title: "SEO & Marketing",
        description: "Expand your online presence and sales with our Magento SEO and marketing services. We put into action tested strategies that will enhance your search ranking and drive targeted traffic."
      },
      {
        title: "Analytics to Improve ROI",
        description: "Make informed decisions based on data with robust analytics tools built into your Magento store. Monitor performance, know how customers behave, and get actionable insights to improve ROI."
      },
      {
        title: "Easy Inventory Management",
        description: "Optimize stock levels, suppliers, and multi-location warehouses using intelligent Magento inventory solutions. Minimize stockouts and overselling using real-time inventory monitoring and automation."
      },
      {
        title: "Maintenance & Support",
        description: "Maintain your store secure, up-to-date, and bug-free with our regular Magento maintenance services. We provide proactive monitoring, trouble resolution, and performance optimization. We are here to help you out."
      }
    ];
    
      

  return (
    <div className='choose-magento-outer-container'>
        {/* <span className='choose-magneto-span'>A Leading Platform</span> */}
        <h3 className='choose-magento-heading primary-heading'>Why to Choose Magento Development Services by Kushel Digi Solutions</h3>

        <div className="choose-magento-grid-container">
            {
                magentoFeatures.map((item,index)=>{
                    return  <div key={index} className="choose-magento-grid-item">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                    </div>
                })
            }
           
        </div>
    </div>
  )
}

export default ChooseMagento