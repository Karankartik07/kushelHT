'use client';

import React from 'react';
import ContactUs from './ContactUs/page';
import ContactSec from './ContactSec/page';
import ContactMap from './ContactMap/page';
import Home2Testimonial from '../components/Home/Home2Testimonial';
import Footer from '../COMMON/Footer';
import Navbar from '../COMMON/Navbar';
import ContactFooter from './ContactFooter/page';

const ContactComponent = () => {
  return (
    <>
      <main>
        <Navbar />
        <ContactUs />
        <ContactMap />
        <ContactSec />
        <Home2Testimonial />
        <ContactFooter />
        <Footer />
      </main>
    </>
  );
};

export default ContactComponent;