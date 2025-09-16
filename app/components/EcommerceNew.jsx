"use client"
import BlogSection from '../COMMON/BlogSection/BlogSection'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import UseAccorrodian from '../COMMON/UseAccorrodian'
import HomeForm from '../components/Home/HomeForm'
import { whyEcommerceByKDSHeading, whyEcommerceCommereByKDS } from '../data/data'
import BigBanner6 from "../service/bigcommerce-development/BigBanner6/page"
import Process from "../service/bigcommerce-development/Process/page"
import Banner1 from '../service/ecommerce-development/Banner1/page'
import Banner10 from '../service/ecommerce-development/Banner10/page'
import Banner11 from '../service/ecommerce-development/Banner11/page'
import Banner2 from '../service/ecommerce-development/Banner2/Page'
import Banner3 from '../service/ecommerce-development/Banner3/Page'
import Banner4 from '../service/ecommerce-development/Banner4/page'
import Banner5 from '../service/ecommerce-development/Banner5/page'
import Banner6 from '../service/ecommerce-development/Banner6/page'
import Banner8 from '../service/ecommerce-development/Banner8/page'
import Banner9 from '../service/ecommerce-development/Banner9/page'
const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
}
const Page = () => {
  return (
    <div>
        <Navbar/>
        <title>
        Top eCommerce Development Company | Kushel Digi Solutions
        </title>
        <meta
          name="description"
          content="Elevate your online store with Kushel Digi expert eCommerce development. Custom, scalable solutions on Shopify, Magento, BigCommerce & more. Boost sales with seamless UX & secure payments."
        />
        <link rel="canonical" href="https://www.kusheldigi.com/ecommerce-development" />
        <Banner1/>
        <Banner2/>
        <Banner3/>
        <Banner4 />
        {/* <HomeFlax/> */}
        <Banner9 page='eCommerce'/>
        {/* <HomeCardSection/> */}
        <Banner11/>
       
        <Banner5/>
        <Banner8 page='Delivering powerful, high performance ecommerce solutions for our clients.'/>
        {/* <Banner7/>   */}
        <Process page='Ecommerce'/>
        <BigBanner6 services={whyEcommerceCommereByKDS} contents={whyEcommerceByKDSHeading}/>
        <Banner10/>
        <Banner6/>
       
  
      
       
      
    
      
        <BlogSection page="e-commerce"/> 
        <UseAccorrodian/>
        <HomeForm/>
        <Footer/>
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
    </div>
   
  )
}

export default Page