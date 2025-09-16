"use client"
import '../../globals.css';

import Footer from '../../COMMON/Footer';
import Navbar from '../../COMMON/Navbar';
import DetailBigComChennai from './DetailBigComChennai/page';
import HeroBigComChennai from './HeroBigComChennai/page';


const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}
function BigcommerceChennaiComponent() {
    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />
            <HeroBigComChennai />
            <DetailBigComChennai />

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

export default BigcommerceChennaiComponent;
