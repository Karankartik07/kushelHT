"use client"
import Navbar from '../COMMON/Navbar'
import Action1 from '../service/headless-commerce/Action1/page'
import Cycle from '../service/headless-commerce/Cycle/page'
import Devlopment from '../service/headless-commerce/Devlopment/page'
import Last from '../service/headless-commerce/Last/page'
import Menu from '../service/headless-commerce/Menu/page'
import More from '../service/headless-commerce/More/page'
import Omi from '../service/headless-commerce/Omi/page'
import Online from '../service/headless-commerce/Online/page'
import Process from '../service/headless-commerce/Process/page'
import Pwa from '../service/headless-commerce/Pwa/page'
import Upgrade from '../service/headless-commerce/Upgrade/page'
import Wifi from '../service/headless-commerce/Wifi/page'
import Wining from '../service/headless-commerce/Wining/page'

import BigBanner6 from "../service/bigcommerce-development/BigBanner6/page"
import Footer from '../COMMON/Footer'
import HomeForm from '../components/Home/HomeForm'
import { whyHeadlessByKDS, whyHeadlessByKDSHeading } from '../data/data'
import Action2 from '../service/headless-commerce/Action2/page'
import Diff from '../service/headless-commerce/Diff/page'
import HeadlessFaq from '../service/headless-commerce/HeadlessFaq/page'
const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
}
function page() {

  return (
    <div>
      <Navbar/>
      <Menu/>
      <Upgrade/>
      <More/>
      <Last/>
      {/* <Banner9/> */}
      <Action1/>
      <Cycle/>
      <Process/>
      <Omi/>
      <Online/>
      <Devlopment/>
      <Pwa/>
      <Wining/>
      <Diff/>
      <Wifi/>
      <BigBanner6 services={whyHeadlessByKDS} contents={whyHeadlessByKDSHeading}/>
      <Action2/>
  
      <HeadlessFaq/>
      {/* <Sec14/> */}
     
      <HomeForm/>
      <Footer/>
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

export default page
