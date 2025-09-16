"use client"
import { useEffect } from 'react'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import BulgariaSecSlider from '../ecommerce-development-in-bulgaria/BulgariaSecSlider/page'
import BlogSection from '../ecommerce-website-development-company-in-noida/BlogSection/BlogSection'
import CustomBenefitsSection from '../ecommerce-website-development-company-in-noida/CustomBenefitsSection/page'
import DelhiFAQ from '../ecommerce-website-development-company-in-noida/NoidaFAQ/page'
import EcomServiceNoida from '../ecommerce-website-development-company-in-noida/EcomServiceNoida/page'
import LogoSlider from '../ecommerce-website-development-company-in-noida/LogoSlider/page'
import OurProcessSection from '../ecommerce-website-development-company-in-noida/NoidaaProcessSec/page'
import NoidaBanner from '../ecommerce-website-development-company-in-noida/NoidaBanner/page'
import NoidaBanner3 from '../ecommerce-website-development-company-in-noida/NoidaBanner3/page'
import NoidaCardSection from '../ecommerce-website-development-company-in-noida/NoidaCardSection/page'
import NoidaExpertiseSec from '../ecommerce-website-development-company-in-noida/NoidaExpertiseSec/page'
import NoidaFeatures from '../ecommerce-website-development-company-in-noida/NoidaFeatures/page'
import IndustryTabs from '../ecommerce-website-development-company-in-noida/NoidaIndustry/page'
import NoidaKeyFeatures from '../ecommerce-website-development-company-in-noida/NoidaKeyFeatures/page'
import NoidaMakes from '../ecommerce-website-development-company-in-noida/NoidaMakeUs/page'
import NoidaSec12 from '../ecommerce-website-development-company-in-noida/NoidaSec12/page'
import NoidaShop from '../ecommerce-website-development-company-in-noida/NoidaShop/page'
import NoidaSolution from '../ecommerce-website-development-company-in-noida/NoidaSolution/Page'
import NoidaStats from '../ecommerce-website-development-company-in-noida/NoidaStats/page'
import "../globals.css"
import Website from './Home/HomeForm'

const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}

const page = () => {

    return (
        <div>
            <div className='ser-main'></div>
            <Navbar />
           <NoidaBanner />
            <LogoSlider />
            <NoidaStats />
            <NoidaBanner3 />
            <EcomServiceNoida />
            <BulgariaSecSlider />
            <NoidaKeyFeatures />
            <NoidaExpertiseSec />
            <OurProcessSection />
            <NoidaShop />
            <NoidaMakes />
            <IndustryTabs />
            <NoidaFeatures />
            <NoidaCardSection />
            <NoidaSec12 />
            <CustomBenefitsSection />
            <NoidaSolution />
            <BlogSection />
            <DelhiFAQ/>
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

export default page;