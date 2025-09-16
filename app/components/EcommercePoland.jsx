"use client"
import React, { useEffect } from 'react'
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import PolandBanner from '../ecommerce-development-in-poland/PolandBanner/page';
import LogoSlider from '../ecommerce-development-in-poland/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-poland/StatsSection/page';
import Cutting1Section from '../ecommerce-development-in-poland/CuttingEdge/page';
import PolandEcomServ from '../ecommerce-development-in-poland/PolandEcomServ/page';
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page';
import CallToAction from '../ecommerce-development-in-poland/CtaBelgium/page';
import WhyChoosePoland from '../ecommerce-development-in-poland/WhyChoosePoland/page';
import DesignDevelopment from '../ecommerce-development-in-poland/DesignDev/page';
import PolandShop from '../ecommerce-development-in-poland/PolandShop/page';
import PolandMakeUs from '../ecommerce-development-in-poland/PolandMakeUs/page';
import IndustryTabs from '../ecommerce-development-in-poland/PolandIndustry/page';
import EcommerceFeatures from '../ecommerce-development-in-poland/Features/page';
import PolandCardSection from '../ecommerce-development-in-poland/PolandCardSection/page';
import PolandSec12 from '../ecommerce-development-in-poland/PolandSec12/page';
import PolandCustomBenefitsSection from '../ecommerce-development-in-poland/PolandCustomBenefitsSection/page';
import PolandBanner3 from '../ecommerce-development-in-poland/PolandBanner3/Page';
import BlogSection from '../ecommerce-development-in-poland/BlogSection/BlogSection';
import PolandFAQ from '../ecommerce-development-in-poland/PolandFAQ/page';
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
function EcommercePoland() {

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
            <PolandBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <PolandEcomServ />
            <LondonSecSlider />
            <CallToAction />
            <WhyChoosePoland />
            <DesignDevelopment />
            <PolandShop />
            <PolandMakeUs />
            <IndustryTabs />
            <EcommerceFeatures />
            <PolandCardSection />
            <PolandSec12 />
            <PolandCustomBenefitsSection />
            <PolandBanner3 />
             <BlogSection />
             <PolandFAQ/>
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

export default EcommercePoland;
