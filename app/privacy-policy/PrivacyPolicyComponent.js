"use client"
import React, { useEffect } from 'react'
import ContactForm1 from '../COMMON/ContactForm1'

import '../globals.css'
import Navbar from '../COMMON/Navbar';


import Footer from '../COMMON/Footer';
import Website from '../components/Home/HomeForm';

const PrivacyPolicyComponent = () => {

  
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler=()=>{
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }



  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const generateMetadata = ({ params }) => ({
      title: "Case Studies of kushelDigi Solution",
      description:"Web Development Company | Kushel Digi Solutions"
    });
    
  useEffect(() => {
      const { title, description } = generateMetadata({ params: {} });
      document.title = title;
      let metaDescription = document.querySelector('meta[name="description"]');
      metaDescription ? metaDescription.content = description : 
        document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
    }, []);

  return (
    <>


      
    <Navbar/>
   
     <div className="ser-main">
      <div className="privacy-back">
        <div className="privacy-sect">
          <h1>privacy policy</h1>
        </div>
      </div>
      <div className="privacy-section">
        <div className="privacy-heading">
          <h2>Privacy Policy</h2>
          <p className='mt-2'>
            At Kushel Digi, our core value is securing and protecting the privacy of our visitors. This privacy policy intends to explain what happens to the personal data that you provide us and the one that we collect from you when you visit our website. We periodically keep updating our privacy policy, so we recommend reviewing it from time to time. The primary purpose of the Information we collect is to run and maintain our website, The following
            <span>data is collected</span> and processed about you:
          </p>
          <ul className='ul-sect'>
            <li>Information regarding details of your visits to the pages you have viewed and resources accessed on our website is collected. This information also includes location data, traffic data, and other communication data.
            </li>
            <li>
              Information is willingly shared by you, such as when you register to access details or purchase one of our services.
            </li>
            <li>
              Information that you give whenever you communicate with us in any way.                    </li>
            <li>
              Information that you give whenever you communicate with us in any way.
            </li>
          </ul>
        </div>
        
        <div className="propose-head">
          <h3>The main purpose of collecting your information is to provide our services to </h3>
          <h3> you. Moreover, we may use this information for a few of all of these following</h3>
          <h3>purposes:</h3>
          <h3 className='phone-header'>The main purpose of collecting of your information to provide our services to you. Moreover, we may use this information for a few of all of these following purposes:</h3>
          <ul className='ul-sect'>
            <li>
              Our aim is to furnish you with information regarding the services you have requested from us.
            </li>
            <li>
              To provide you with information regarding recommended or related other services that might be beneficial and of interest of you. This information will only be provided on consented basis.
            </li>
            <li>
              To provide you with information regarding the changes done to our website and services.
            </li>
            <li>
              For the improvement of our website and customer service, aiming to ensure a personalized experience for our visitors.                    </li>
            <li>
              This is clear but consider specifying what kind of transactions, e.g., "For processing financial transactions.

            </li>
            <li>
              If you have a history of purchasing our services, we may recommend similar services that could be beneficial to you.
            </li>
            <li>
              For administering contests, promotions, surveys, and other website features.
            </li>
          </ul>
          <p>

            We ensure that your information whether public or private is not sold, exchanged, or transferred to any other individual or company. to any other person or company for any reason whatsoever, without your permission or consent, Except to deliver the purchased service(s). Storing your data Unfortunately, Transmitting information over the internet. is not safe and secure as it has chances of occasional interception. The Data you send us electronically. is at your own risk and we cannot guarantee its safety and security. Rest assured that we implement appropriate safeguards to securely store your data once we receive it.. Cookies are used to provide information regarding the PC the visitor is using. We gather information about the generic interests you have on the internet and the computer you are using through the cookies, wherever appropriate, to Help us improve the website. These cookies are stored on the computer's hardware and downloaded to your computer where used. This information is purely statistical and cannot personally identify you.. The aforementioned statistical data does not identify any personal details and you have the authority to Adjust your computer settings to decline cookies as desired. To implement this you can simply activate the reject cookies settings. Advertisers on our site also use cookies, over which we have no control. The cookies of the previous type (if used) would be downloaded if you click on the advertisements on the website. Disclosing your Information We do not disclose your personal information to third parties, other than those mentioned and per this privacy policy and circumstances detailed below:

          </p>
          <ul className='ul-sect'>
            <li>If we sell part or all of our business to a buyer.</li>
            <li>In situations where we are legally required to disclose your personal information.</li>
            <li> This appears to be incomplete or unclear. Consider revising it for clarity.</li>
          </ul>
          <p>
            This sentence is quite complex and could benefit from a clearer structure. Consider rephrasing it for better readability.
            The visitor should review their privacy policy before sending the third-party website their personal information. This online privacy policy applies solely to information collected through our website and not to information collected offline. Your Consent by using this website, you consent to our website’s privacy policy. This sentence appears to be incomplete or unclear. Consider revising it for clarity.
          </p>
        </div>
      </div>
      {/* <ContactForm1 /> */}

      <Website/>
 
    {/*  buttons  */}
    <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469695/whatsapp_ubh9of.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469745/telephone_twhjto.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PrivacyPolicyComponent;