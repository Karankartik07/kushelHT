'use client';

import React from 'react';
import ContactUs from './ContactUs/page';
import ContactSec from './ContactSec/page';
import ContactMap from './ContactMap/page';
// import Home2Testimonial from '../components/Home/Home2Testimonial';
import Footer from '../COMMON/Footer';
import Navbar from '../COMMON/Navbar';
import ContactFooter from './ContactFooter/page';
import Testimonials from '../components/Home/Testimonials';

const ContactComponent = () => {
  return (
    <>
      <main>
        <Navbar />
        <ContactUs />
        <ContactMap />
        <ContactSec />
        <Testimonials />
        <ContactFooter />
        <Footer />
      </main>
    </>
  );
};

export default ContactComponent;