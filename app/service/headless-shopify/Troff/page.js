
"use client"
import React from 'react';
import './troff.css'; 
import Link from "next/link";
import { FaArrowRightLong } from 'react-icons/fa6';




const ShopifyServices = () => {
    const scrollToForm = () => {
        const formSection = document.getElementById('contacthtmlForm');
        if (formSection) {
          const yOffset = -210; 
          const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };
  return (
    <section className="troffi">
        <div className='trofff'>
      <div className="troffi-content">
        {/* <p className="troffi-breadcrumb">
          Home / Services / <span>Shopify Development</span>
        </p> */}
        <h3 className="troffi-heading">Shopify Headless Commerce Development Services</h3>
        <p className="troffi-description">
        Our Shopify headless development services provide the expertise needed to decouple your frontend and backend, enabling full customization and flexibility to your online store.
        </p>
        <div  className='sunroof'>
        <button onClick={scrollToForm} className="troffi-buttonn">
        Talk to a Consultant <span className="arrow"></span>
        </button>

        <Link href="/contact-us"> 
        <button className="troffi-button">
          BOOK A CALL <FaArrowRightLong/>
        </button>
        </Link>
       
        </div>
      </div>

      <div className="troffi-image">
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744962178/Group_8_oxzshu.png" alt="Shopify Services" />
      </div>
      </div>
    </section>
  );
};

export default ShopifyServices;
