"use client"
import Footer from '../../COMMON/Footer'
import Navbar from '../../COMMON/Navbar'
import BigBanner6 from '../bigcommerce-development/BigBanner6/page'
import HomeForm from '../../components/Home/HomeForm'
import { whyHeadlessBigcommerceByKDS, whyHeadlessBigcommerceByKDSHeading } from '../../data/data'
import Actionnn from './Actionnn/page'
import Luna from './Luna/page'
import Partner from './Partner/page'
import Pernoun from './Pernoun/page'
import Power from './Power/page'
import Salot from './Salot/page'
import Serviicess from './Serviicess/page'
import Splet from './Splet/page'
import Sumo from './Sumo/page'
import Sync1 from './Sync1/page'
import Telephonic from './Telephonic/page'
import Track from './Track/page'
const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
}
function HeadlessComponent() {

  return (
    <div>
    
      <Navbar/>
      <Sync1/>
      <Luna/>
      <Sumo/>
      <Serviicess/>
      <Pernoun/>
      <Actionnn/>
      <Telephonic/>
      <Track/>
      <Splet/>
      {/* <Discover/> */}
      {/* <Mention/> */}
      <Power/>
      <Partner/>
     
      <Salot/>
      {/* <Mouse/> */}
      <BigBanner6 services={whyHeadlessBigcommerceByKDS} contents={whyHeadlessBigcommerceByKDSHeading}/>
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

export default HeadlessComponent;
