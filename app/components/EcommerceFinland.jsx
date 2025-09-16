"use client"
import { useEffect } from 'react';
import Navbar from '../COMMON/Navbar';
import CallToAction from '../ecommerce-development-in-finland/CtaBelgium/page';
import Cutting1Section from '../ecommerce-development-in-finland/CuttingEdge/page';
import FinlandBanner from '../ecommerce-development-in-finland/FinlandBanner/page';
import FinlandEcomServ from '../ecommerce-development-in-finland/FinlandEcomServ/page';
import LogoSlider from '../ecommerce-development-in-finland/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-finland/StatsSection/page';
import '../globals.css';

import Footer from '../COMMON/Footer';
import BlogSection from '../ecommerce-development-in-finland/BlogSection/BlogSection';
import DesignDevelopment from '../ecommerce-development-in-finland/DesignDev/page';
import EcommerceFeatures from '../ecommerce-development-in-finland/Features/page';
import FinlandBanner3 from '../ecommerce-development-in-finland/FinlandBanner3/Page';
import FinlandCardSection from '../ecommerce-development-in-finland/FinlandCardSection/page';
import FinlandCustomBenefitsSection from '../ecommerce-development-in-finland/FinlandCustomBenefitsSection/page';
import FinlandFAQ from '../ecommerce-development-in-finland/FinlandFAQ/page';
import IndustryTabs from '../ecommerce-development-in-finland/FinlandIndustry/page';
import FinlandMakeUs from '../ecommerce-development-in-finland/FinlandMakeUs/page';
import FinlandSec12 from '../ecommerce-development-in-finland/FinlandSec12/page';
// import FinlandSecSlider from '../ecommerce-development-in-finland/FinlandSecSlider/page';
import FinlandShop from '../ecommerce-development-in-finland/FinlandShop/page';
import WhyChooseFinland from '../ecommerce-development-in-finland/WhyChooseFinland/page';
import Website from './Home/HomeForm';
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
function EcommerceFinland() {
    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />
            <FinlandBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <FinlandEcomServ />
            {/* <FinlandSecSlider/> */}
            <BulgariaSecSlider/>
            <CallToAction />
            <WhyChooseFinland />
            <DesignDevelopment />
            <FinlandShop />
            <FinlandMakeUs />
            <IndustryTabs />
            <EcommerceFeatures />
            <FinlandCardSection />
            <FinlandSec12 />
            <FinlandCustomBenefitsSection />
            <FinlandBanner3 />
            <BlogSection />
            <FinlandFAQ />
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

export default EcommerceFinland;
