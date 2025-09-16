"use client"
import React, { useEffect } from 'react'
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import IrelandBanner from '../ecommerce-development-in-ireland/IrelandBanner/page';
import LogoSlider from '../ecommerce-development-in-ireland/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-ireland/StatsSection/page';
import Cutting1Section from '../ecommerce-development-in-ireland/CuttingEdge/page';

import IrelandEcomServ from '../ecommerce-development-in-ireland/IrelandEcomServ/page';
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page';
import CallToAction from '../ecommerce-development-in-ireland/CtaBelgium/page';
import WhyChooseIreland from '../ecommerce-development-in-ireland/WhyChooseIreland/page';
import DesignDevelopment from '../ecommerce-development-in-ireland/DesignDev/page';
import IrelandShop from '../ecommerce-development-in-ireland/IrelandShop/page';
import IrelandMakeUs from '../ecommerce-development-in-ireland/IrelandMakeUs/page';
import IndustryTabs from '../ecommerce-development-in-ireland/IrelandIndustry/page';
import EcommerceFeatures from '../ecommerce-development-in-ireland/Features/page';
import IrelandCardSection from '../ecommerce-development-in-ireland/IrelandCardSection/page';
import IrelandSec12 from '../ecommerce-development-in-ireland/IrelandSec12/page';
import IrelandCustomBenefitsSection from '../ecommerce-development-in-ireland/IrelandCustomBenefitsSection/page';
import IrelandBanner3 from '../ecommerce-development-in-ireland/IrelandBanner3/Page';
import BlogSection from '../ecommerce-development-in-ireland/BlogSection/BlogSection';
import IrelandFAQ from '../ecommerce-development-in-ireland/IrelandFAQ/page';
import Website from './Home/HomeForm';
// import IrelandSecSlider from '../ecommerce-development-in-ireland/IrelandSecSlider/page';
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
function EcommerceIreland() {

    const generateMetadata = ({ params }) => {
        return {
            title: 'eCommerce Website Development Company in Ireland',
            description: 'Get expert ecommerce website development in Ireland. Kushel Digi offers scalable, secure, and tailored ecommerce solutions for your business growth.',
            metadataBase: new URL(`https://www.kusheldigi.com/`),
        }
    };

    useEffect(() => {
        const { title, description } = generateMetadata({ params: {} });
        document.title = title;
        let metaDescription = document.querySelector('meta[name="description"]');

        metaDescription ? metaDescription.content = description :
            document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
    }, []);

    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />
            <IrelandBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <IrelandEcomServ/>
           {/* <IrelandSecSlider/> */}
           <BulgariaSecSlider/>
              <CallToAction />
              <WhyChooseIreland/>
               <DesignDevelopment />
               <IrelandShop/>
               <IrelandMakeUs/>
               <IndustryTabs/>
                <EcommerceFeatures />
                <IrelandCardSection/>
                <IrelandSec12/>
                <IrelandCustomBenefitsSection/>
                <IrelandBanner3/>
                <BlogSection />
                <IrelandFAQ/>
                 <Website />
                 

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

export default EcommerceIreland;
