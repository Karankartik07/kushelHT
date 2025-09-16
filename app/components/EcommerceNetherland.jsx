"use client"
import React, { useEffect } from 'react'
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import NetherlandBanner from '../ecommerce-development-in-netherlands/NetherlandBanner/page';
import LogoSlider from '../ecommerce-development-in-netherlands/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-netherlands/StatsSection/page';
import Cutting1Section from '../ecommerce-development-in-netherlands/CuttingEdge/page';
import NetherlandEcomServ from '../ecommerce-development-in-netherlands/NetherlandEcomServ/page';
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page';
import CallToAction from '../ecommerce-development-in-netherlands/CtaBelgium/page';
import WhyChooseNetherland from '../ecommerce-development-in-netherlands/WhyChooseNetherland/page';
import DesignDevelopment from '../ecommerce-development-in-netherlands/DesignDev/page';
import NetherlandShop from '../ecommerce-development-in-netherlands/NetherlandShop/page';
import NetherlandMakeUs from '../ecommerce-development-in-netherlands/NetherlandMakeUs/page';
import IndustryTabs from '../ecommerce-development-in-netherlands/NetherlandIndustry/page';
import EcommerceFeatures from '../ecommerce-development-in-netherlands/Features/page';
import NetherlandCardSection from '../ecommerce-development-in-netherlands/NetherlandCardSection/page';
import NetherlandSec12 from '../ecommerce-development-in-netherlands/NetherlandSec12/page';
import NetherlandCustomBenefitsSection from '../ecommerce-development-in-netherlands/NetherlandCustomBenefitsSection/page';
import NetherlandBanner3 from '../ecommerce-development-in-netherlands/NetherlandBanner3/Page';
import BlogSection from '../ecommerce-development-in-netherlands/BlogSection/BlogSection';
import NetherlandFAQ from '../ecommerce-development-in-netherlands/NetherlandFAQ/page';
import Website from './Home/HomeForm';




const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}
function EcommerceNetherland() {

    const generateMetadata = ({ params }) => {
        return {
            title: 'eCommerce Website Development Company in Belgium',
            description: 'Get expert ecommerce website development in Belgium. Kushel Digi offers scalable, secure, and tailored ecommerce solutions for your business growth.',
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
            <NetherlandBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <NetherlandEcomServ />
            <LondonSecSlider />
            <CallToAction />
            <WhyChooseNetherland />
            <DesignDevelopment />
            <NetherlandShop />
            <NetherlandMakeUs />
            <IndustryTabs />
            <EcommerceFeatures />
            <NetherlandCardSection />
            <NetherlandSec12 />
            <NetherlandCustomBenefitsSection />
            <NetherlandBanner3 />
            <BlogSection />
            <NetherlandFAQ />
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

export default EcommerceNetherland;
