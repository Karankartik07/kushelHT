
"use client"
import React from 'react'
import './servicesss.css'
import Link from 'next/link';
const Page = () => {
  return (
    <>
    <div className="shopy-containerEcom">
  <section className="shopy-left-sectionEcom">
    {/* <h6>Ecommerce Development Agency</h6> */}
    <h3>
    Design. Develop. Grow with Kushel Digi Solutions
    </h3>
    <p>
    Since 2017, Kushel Digi has been delivering Custom Ecommerce Solutions for more than 1000+ clients across globe. We are committed to help your business grow faster. 
    </p>
    <Link href="/contact-us">
    <button>Get a Free Consultation Today</button>
          </Link>
  
  </section>
  <section className="shopy-right-sectionEcom">
    <div className="shopy-content-blockEcom">
      <h3>Custom Headless Commerce Development

      </h3>
      <p>
      We give solutions for custom Headless Commerce Development which are specifically designed to match your particular requirements and goals of business. We ensure every step from the planning to smooth implementation.
      </p>
    </div>
    <div className="shopy-content-blockEcom">
      <h3>API Integration & Management.
      </h3>
      <p>
      API management are the real important aspect of headless commerce. We connect your backend effortlessly and seamlessly with frontends, CRMs, payment gateways, shipping providers and also marketing tools.
      </p>
    </div>
    <div className="shopy-content-blockEcom">
      <h3>Custom Frontend Development       </h3>
      <p>
      We use and inculcate modern frontend technologies like React.js, Vue.js, and Next.js. It provides more responsive, engaging user interfaces which are also of high in performance. These frameworks ensure fast load times and optimized user journeys on every possible device.


</p>
    </div>
    <div className="shopy-content-blockEcom">
      <h3>Omnichannel Experience 

      </h3>
      <p>
      Looking from websites and mobile apps to kiosks and smart devices, we create consistent, on-brand experiences across every customer touchpoint. It particularly ensures users get a unified journey no matter where they shop.


</p>
    </div> 
     <div className="shopy-content-blockEcom">
      <h3>Migration to Headless 
      </h3>
      <p>
      Transform and Elevate your existing monolithic platform (like Magento, WooCommerce or Shopify) to a headless BigCommerce setup immediately and smoothly. Our team of experts always ensures secure data transfer, minimal downtime, and enhanced flexibility after the migration. 

      </p>
    </div> 
    {/* <div className="shopy-content-blockEcom">
      <h3>BigCommerce SEO & Marketing
      </h3>
      <p>
      Expand your online presence and sales with our BigCommerce SEO and marketing services. We put into action tested strategies that will enhance your search ranking and drive targeted traffic. Let us help you reach your audience effectively.

</p>
    </div> */}


    {/* <div className="shopy-content-blockEcom">
      <h3>Convert more, sell more
      </h3>
      <p>
      Your site achieves better conversions through our data-based design approach, which
      incorporates UX enhancements together with optimized messaging systems.
</p>
    </div> */}


    {/* <div className="shopy-content-blockEcom">
      <h3>8. BigCommerce Performance Optimization
      </h3>
      <p>
      Ensure that your store is fast, responsive, and reliable with our performance optimization services. We will inspect and improve the load times, server performance, and user experience so that customers always remain satisfied and engaged. 

</p>
    </div> */}


    {/* <div className="shopy-content-blockEcom">
      <h3>9. BigCommerce API Development

      </h3>
      <p>
      Extend the capabilities of your store with custom BigCommerce API development. We build custom integrations that connect your store with other systems, ensuring seamless data flow and increased functionality. 
</p>
    </div> */}
  </section>
</div>

    </>
  )
}

export default Page
