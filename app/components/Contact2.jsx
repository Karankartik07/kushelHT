"use client";
import React, { useEffect } from "react";
import ContactForm1 from "../COMMON/ContactForm1";
import '../globals.css';
import Navbar from "../COMMON/Navbar";
import Head from 'next/head';

import Footer from "../COMMON/Footer";
const Contact = () => {
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };
 const generateMetadata = ({ params }) => ({
    title: 'KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified',
    description: 'Discover your dream tech job effortlessly with KushelDigi! Our job search marketplace streamlines the process, connecting talented professionals with top tech companies. Simplify your job hunt today..',
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
        <div className="contact-back">
          <div className="contact-sect">
            <h1>Let's Connect</h1>
            <p>We're here to assist you and answer your questions.</p>
            <p>Feel free to get in touch with us anytime.</p>

           

           

          </div>
        </div>
         {/* Contact Form Section (Ensuring it is BELOW the text & buttons) */}
         <div className="contact-form-wrapper">
              <ContactForm1 />
            </div>

             {/* Buttons for WhatsApp and Call */}
             <div className="whtsApBtns">
              <button onClick={whatAppHandler}>
                <img loading="lazy" className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="WhatsApp" title="Chat on WhatsApp" />
              </button>
              <button onClick={callHandler}>
                <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="Call Us" title="Call Us" />
              </button>
            </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
