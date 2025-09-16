"use client"
import React, { useEffect } from 'react'
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import NorwayBanner from '../ecommerce-development-in-norway/NorwayBanner/page';
import LogoSlider from '../ecommerce-development-in-norway/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-norway/StatsSection/page';
import Cutting1Section from '../ecommerce-development-in-norway/CuttingEdge/page';
import NorwayEcomServ from '../ecommerce-development-in-norway/NorwayEcomServ/page';
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page';
import CallToAction from '../ecommerce-development-in-norway/CtaBelgium/page';
import WhyChooseNorway from '../ecommerce-development-in-norway/WhyChooseNorway/page';
import DesignDevelopment from '../ecommerce-development-in-norway/DesignDev/page';
import NorwayShop from '../ecommerce-development-in-norway/NorwayShop/page';
import NorwayMakeUs from '../ecommerce-development-in-norway/NorwayMakeUs/page';
import IndustryTabs from '../ecommerce-development-in-norway/NorwayIndustry/page';
import EcommerceFeatures from '../ecommerce-development-in-norway/Features/page';
import NorwayCardSection from '../ecommerce-development-in-norway/NorwayCardSection/page';
import NorwaySec12 from '../ecommerce-development-in-norway/NorwaySec12/page';
import NorwayCustomBenefitsSection from '../ecommerce-development-in-norway/NorwayCustomBenefitsSection/page';
import NorwayBanner3 from '../ecommerce-development-in-norway/NorwayBanner3/Page';
import BlogSection from '../ecommerce-development-in-norway/BlogSection/BlogSection';
import NorwayFAQ from '../ecommerce-development-in-norway/NorwayFAQ/page';
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
function EcommerceNorway() {

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
            <NorwayBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <NorwayEcomServ />
            <LondonSecSlider />
            <CallToAction />
            <WhyChooseNorway />
            <DesignDevelopment />
            <NorwayShop />
            <NorwayMakeUs />
            <IndustryTabs />
             <EcommerceFeatures />
             <NorwayCardSection/>
             <NorwaySec12/>
             <NorwayCustomBenefitsSection/>
             <NorwayBanner3/>
              <BlogSection />
              <NorwayFAQ/>
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

export default EcommerceNorway;
