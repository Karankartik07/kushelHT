"use client";
import { useEffect } from 'react';
import Footer from '../COMMON/Footer';
import Navbar from '../COMMON/Navbar';
import HomeForm from '../components/Home/HomeForm';
import PortfolioCard from './PortfolioCard/paje';

const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};

const callHandler = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const PortfolioComponent = () => {
 

  return (
    <div>
      <Navbar />
      {/* <PortfolioBanner /> */}
      <PortfolioCard />
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
  );
};

export default PortfolioComponent;
