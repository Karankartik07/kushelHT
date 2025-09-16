"use client"
import { useEffect } from 'react';
import '../globals.css';

import Footer from '../COMMON/Footer';
import Navbar from '../COMMON/Navbar';
import UseAccorrodian from '../COMMON/UseAccorrodian';
import BelgiumBanner from '../ecommerce-development-in-belgium/BelgiumBanner/page';
import BelgiumCardSection from '../ecommerce-development-in-belgium/BelgiumCardSection/page';
import BelgiumCustomBenefitsSection from '../ecommerce-development-in-belgium/BelgiumCustomBenefitsSection/page';
import BelgiumEcomServ from '../ecommerce-development-in-belgium/BelgiumEcomServ/page';
import IndustryTabs from '../ecommerce-development-in-belgium/BelgiumIndustry/page';
import BelgiumMakeUs from '../ecommerce-development-in-belgium/BelgiumMakeUs/page';
import BelgiumSec12 from '../ecommerce-development-in-belgium/BelgiumSec12/page';
// import BelgiumSecSlider from '../ecommerce-development-in-belgium/BelgiumSecSlider/page';
import BelgiumShop from '../ecommerce-development-in-belgium/BelgiumShop/page';
import BlogSection from '../ecommerce-development-in-belgium/BlogSection/BlogSection';
import CallToAction from '../ecommerce-development-in-belgium/CtaBelgium/page';
import Cutting1Section from '../ecommerce-development-in-belgium/CuttingEdge/page';
import DesignDevelopment from '../ecommerce-development-in-belgium/DesignDev/page';
import Features from '../ecommerce-development-in-belgium/Features/page';
import LogoSlider from '../ecommerce-development-in-belgium/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-belgium/StatsSection/page';
import WhyChooseBelgium from '../ecommerce-development-in-belgium/WhyChooseBelgium/page';
import Website from './Home/HomeForm';
import BelgiumBanner3 from '../ecommerce-development-in-belgium/BelgiumBanner18/Page';
import BelgiumFAQ from '../ecommerce-development-in-belgium/BelgiumFAQ/page';
import BulgariaSecSlider from '../ecommerce-development-in-bulgaria/BulgariaSecSlider/page';

const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}
function EcommerceBelgium() {
    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />


            <BelgiumBanner/>
            <LogoSlider/>
            <StatsSection/>
            <Cutting1Section />
            <BelgiumEcomServ/>
            <BulgariaSecSlider/>
            {/* <BelgiumSecSlider/> */}
            <CallToAction/>
            <WhyChooseBelgium/>
            <DesignDevelopment/>
            <BelgiumShop/>
            <BelgiumMakeUs/>
            <IndustryTabs/>
            <Features/>
            <BelgiumCardSection/>
           <BelgiumSec12/>
           <BelgiumCustomBenefitsSection/>
           <BelgiumBanner3/>
            <BlogSection/>
           <BelgiumFAQ/>


            <Website/>
            <Footer />


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

export default EcommerceBelgium;
