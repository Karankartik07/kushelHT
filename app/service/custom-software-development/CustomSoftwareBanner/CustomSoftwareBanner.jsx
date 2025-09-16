'use client'
import React from 'react';
import "./CustomSoftwareBanner.css";
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const CustomSoftwareBanner = () => {
      const navigate = useRouter();

      const scrollToFormCustom = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
          const yOffset = -120; 
          const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

  return (
    <div className='custom-software-dev-outer-container'>
        <div className='custom-software-dev-inner-container'>
            <div className='custom-software-dev-left'>
                <h1 className='custom-software-banner-sm-heading'>Top software development companies</h1>
                <h2 className='custom-software-banner-heading'>Empower And Elevate Your Business With Custom Software Development Services</h2>
                <p className='custom-software-banner-para'>Rise to new levels of growth by driving efficiency with
                software solutions that guarantee success</p>
                <div className='flex-new-banner-btns'>
                                        <button onClick={scrollToFormCustom} className='new-banner-btn colored'>Talk to a Consultant</button>
                                        <button onClick={() => navigate.push('/contact-us')} className='new-banner-btn transparent'>Book a Call  <FaArrowRightLong /></button>
                </div>
            </div>
            <div className='custom-software-dev-right'>
                {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744624721/Custom-Software-Development_2x-1_fzz4tm.webp" alt="" /> */}
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746984206/Empower-and-elevate_hzd8eq.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default CustomSoftwareBanner