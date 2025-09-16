'use client'

import React from 'react';
import "./MagentoBanner.css";
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import TalkToConsult from '@/app/components/TalkToConsult';
// import { useRouter } from 'next/navigation';

const MagentoBanner = () => {
    // const navigate = useRouter();
    const scrollToFormMagento = () => {
      const formSection = document.getElementById('form-section');
      if (formSection) {
        const yOffset = -120; 
        const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
  return (
    <div className='magento-banner-outer-container'>
        <div className='magento-banner-inner-container'>
            <div className="magento-banner-left">
                <h1 className='magento-banner-heading'>Custom Magento Development Solutions</h1>
                <div className='magento-banner-para-cont'>
                <p>Harness our end-to-end Magento development services to build fast, secure, and highly feature-rich online stores. Either you're opening from scratch or upgrading, we assist you to develop your business with a powerful, user-driven Magento platform. </p>
                {/* <p>Your e-commerce site becomes more reliable, fully customizable, and ready for the future with our dedicated team on your side.</p> */}
                </div>

                <div className='flex-new-banner-btns'>
                  <TalkToConsult btn='new-banner-btn colored'/>
                        {/* <button onClick={scrollToFormMagento} className='new-banner-btn colored'>Talk to a Consultant</button> */}
                        <Link  href='/contact-us'  className='new-banner-btn transparent'>Book a Call  <FaArrowRightLong /></Link>
                </div>
            </div>
            <div className="magento-banner-right">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745056377/Group_52_wx76wd.png" alt="magnto-banner" />
            </div>
        </div>
    </div>
  )
}

export default MagentoBanner