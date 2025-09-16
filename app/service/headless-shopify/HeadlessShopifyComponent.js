"use client"
import React, { useEffect } from 'react'
import Navbar from '../../COMMON/Navbar'
import Troff from './Troff/page'
import Ssss from './Ssss/page'
import Some from './Some/page'
import Servicess from './Servicess/page'
import Porfolio from './Porfolio/page'
import Call from './Call/page'
import Left from './Left/page'
import Perfect from './Perfect/page'
import ShopifyHfaq from './ShopifyHfaq/page'
import Shopify from './Shopify/page'
import HomeForm from '../../components/Home/HomeForm'
import Footer from '../../COMMON/Footer'
import BigBanner6 from "../bigcommerce-development/BigBanner6/page";
import { whyHeadlessShopifyByKDS, whyHeadlessShopifyByKDSHeading } from '../../data/data'

const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}


function HeadlessShopifyComponent() {


    return (
        <div>
            <Navbar />
            <Troff />
            <Ssss />
            <Some />
            <Servicess />
            {/* <Porfolio/> */}
            <Call />
            <Left />
            <Perfect />

            <Shopify />
            <BigBanner6 services={whyHeadlessShopifyByKDS} contents={whyHeadlessShopifyByKDSHeading} />
            <ShopifyHfaq />

            <HomeForm />
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

export default HeadlessShopifyComponent;
