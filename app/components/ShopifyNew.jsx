"use client"
// import "./header.css"



import Footer from '../COMMON/Footer';
import Navbar from '../COMMON/Navbar';
import '../globals.css';
import BigAskQuestion from '../service/shopify-development/BigAskQuestion/page';
// import { Helmet } from 'react-helmet';
import BlogSection from '../COMMON/BlogSection/BlogSection';
import HomeForm from "../components/Home/HomeForm";
import BigBanner4 from "../service/bigcommerce-development/BigBanner4/page";
import BigBanner6 from "../service/bigcommerce-development/BigBanner6/page";
import FeatureSection from '../service/bigcommerce-development/FeaturesSection/FeatureSection';
import ServiceSection from '../service/bigcommerce-development/ServiceSection/ServiceSection';
import ShopifyProcess from "../service/shopify-development/ShopifyProcess/ShopifyProcess";

import { ShopifyFeatures, ShopifyFeaturesContent, ShopifyServicesContent, ShopifyServicesHeading, weExpertInShopify, whyShopifyByKDS, whyShopifyByKDSHeading } from '../data/data';
import Banner8 from '../service/ecommerce-development/Banner8/page';
import ShopifyBanner from '../service/shopify-development/ShopifyBanner/ShopifyBanner';
import ShopifyPortfolio from "../service/shopify-development/ShopifyPortfolio/page";
import ShopifySecond from "../service/shopify-development/ShopifySecond/ShopifySecond";
import ShopifyServices from "../service/shopify-development/ShopifyServices/ShopifyServices";

function Shopify3({ notify }) {

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }

  return (
    <>
      <Navbar />




      <div className="home-main">

        {/* <BigHeader /> */}

        {/* <BigSection2 /> */}

        {/* <p className="linesbig"></p> */}

        {/* <BigSection3 /> */}

        {/* <Home2BrandSwiper title={"Featured Technology Partners"} /> */}

        {/* <BigSection5/> */}

        {/* <Bigsection6 /> */}

        {/* <BigSection7 /> */}

        {/* <BigSection8/> */}

        {/* <Home2Section10  heading={"EMPOWERING INDUSTRIES WITH OUR EXPERT SOLUTIONS"} 
 para={"We have expertise in multiple industries, providing custom digital solutions for growth and success. Be it in transforming customer experience or operational excellence, we engineer technology that caters specifically to your business needs."}/> */}

        {/* <Home2Testimonial  /> */}
        {/* <YourProject /> */}
        <ShopifyBanner />
        {/* <BigBanner3 /> */}
        <ShopifySecond weExpert={weExpertInShopify} />
        {/* <BigBanner8 weExpert={weExpertInShopify}/> */}
        <ShopifyServices />
        <ShopifyPortfolio page='Shopify' />
        <ShopifyProcess page='Shopify' />
        <Banner8 page='Building high performance custom Shopify stores in accordance with your business needs.' />
        <BigBanner6 services={whyShopifyByKDS} contents={whyShopifyByKDSHeading} />
        <BigBanner4 img='https://res.cloudinary.com/dd9tagtiw/image/upload/v1744609043/images_21_e6hnmi.png' page='Our Shopify Experts are Ready to Launch your Dream Store today!' />
        <ServiceSection services={ShopifyServicesContent} contents={ShopifyServicesHeading} />
        <FeatureSection services={ShopifyFeatures} contents={ShopifyFeaturesContent} />

        <BlogSection page="shopify" />
        <BigAskQuestion />
        <HomeForm />
        {/* <ContactForm1 notify={notify} /> */}



      </div>
      <Footer />
      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
        </button>
        <button onClick={callHandler}>
          <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png' alt="call-icon" title="call-icon" />
        </button>

      </div>
    </>


  )
}

export default Shopify3;