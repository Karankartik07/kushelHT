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

      <Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>

      <Navbar />
      <div className="ser-main">
        <div className="contact-back">
          <div className="contact-sect">
            <h2>Let's Connect</h2>
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
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="WhatsApp" title="Chat on WhatsApp" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="Call Us" title="Call Us" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
