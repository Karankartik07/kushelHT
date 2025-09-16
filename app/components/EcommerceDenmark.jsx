"use client"
import { useEffect } from 'react';
import Footer from '../COMMON/Footer';
import Navbar from '../COMMON/Navbar';
import BlogSection from '../ecommerce-development-in-denmark/BlogSection/BlogSection';
import CallToAction from '../ecommerce-development-in-denmark/CtaBelgium/page';
import Cutting1Section from '../ecommerce-development-in-denmark/CuttingEdge/page';
import DenmarkBanner from '../ecommerce-development-in-denmark/DenmarkBanner/page';
import DenmarkBanner3 from '../ecommerce-development-in-denmark/DenmarkBanner18/Page';
import DenmarkCardSection from '../ecommerce-development-in-denmark/DenmarkCardSection/page';
import DenmarkCustomBenefitsSection from '../ecommerce-development-in-denmark/DenmarkCustomBenefitsSection/page';
import DenmarkEcomServ from '../ecommerce-development-in-denmark/DenmarkEcomServ/page';
import DenmarkFAQ from '../ecommerce-development-in-denmark/DenmarkFAQ/page';
import IndustryTabs from '../ecommerce-development-in-denmark/DenmarkIndustry/page';
import DenmarkMakeUs from '../ecommerce-development-in-denmark/DenmarkMakeUs/page';
import DenmarkSec12 from '../ecommerce-development-in-denmark/DenmarkSec12/page';
import DenmarkShop from '../ecommerce-development-in-denmark/DenmarkShop/page';
import DesignDevelopment from '../ecommerce-development-in-denmark/DesignDev/page';
import Features from '../ecommerce-development-in-denmark/Features/page';
import LogoSlider from '../ecommerce-development-in-denmark/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-denmark/StatsSection/page';
import WhyChooseDenmark from '../ecommerce-development-in-denmark/WhyChooseDenmark/page';
import '../globals.css';
import Website from './Home/HomeForm';
// import DenmarkSecSlider from '../ecommerce-development-in-denmark/DenmarkSecSlider/page';
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
function EcommerceDenmark() {
    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />

            <DenmarkBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <DenmarkEcomServ />
            <BulgariaSecSlider/>
            {/* <DenmarkSecSlider /> */}
            <CallToAction />
            <WhyChooseDenmark />
            <DesignDevelopment />
            <DenmarkShop />
            <DenmarkMakeUs />
            <IndustryTabs />
            <Features />
            <DenmarkCardSection />
            <DenmarkSec12 />
            <DenmarkCustomBenefitsSection />
            <DenmarkBanner3 />
            <BlogSection />
            <DenmarkFAQ />
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

export default EcommerceDenmark;
