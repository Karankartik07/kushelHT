'use client';
import React, { useState, useEffect } from 'react';
import './BannerMain.css';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import TalkToConsult from '@/app/components/TalkToConsult';

const CaseStudy = () => {
  const caseStudies = [
    {
      img: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593401/laf_ubjua9.webp',
      className: 'bigBannerFirst',
      smHeading: 'Certified BigCommerce Agency',
      smallBtnText: 'View Case Study',
      smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744175094/circle_vvibyg.png',
      heading: 'Expert BigCommerce Development Solutions for Scalable Growth',
      link: '/lafayetteshooters',
      bigCommerce: [
        {
          bigImg1: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816937/lovely_icon-01_u037ec.png',
          bigImg2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
          bigImg3: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816927/lovely_icon_2-01_kk0qrf.png',
        },
      ],
    },
    {
      img: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593400/typhoon_nznsvh.webp',
      className: 'bigBannerSecond',
      smHeading: 'Certified BigCommerce Agency',
      smallBtnText: 'View Case Study',
      smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829269/lovely-1-2_by2dtq.jpg',
      heading: 'Expert BigCommerce Development Solutions for Scalable Growth',
      link: '/typhoondefense',
      bigCommerce: [
        {
          bigImg1: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816937/lovely_icon-01_u037ec.png',
          bigImg2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
          bigImg3: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816927/lovely_icon_2-01_kk0qrf.png',
        },
      ],
    },
    {
      img: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593400/grac_iqippr.webp',
      className: 'bigBannerThird',
      smHeading: 'Certified BigCommerce Agency',
      smallBtnText: 'View Case Study',
      smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829268/lovely-3-4_mi9o33.jpg',
      heading: 'Expert BigCommerce Development Solutions for Scalable Growth',
      link: '/graco-corp',
      bigCommerce: [
        {
          bigImg1: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816937/lovely_icon-01_u037ec.png',
          bigImg2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
          bigImg3: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816927/lovely_icon_2-01_kk0qrf.png',
        },
      ],
    },
    {
      img: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593400/four_oaks_aa0b2d.webp',
      className: 'bigBannerFourth',
      smHeading: 'Certified BigCommerce Agency',
      smallBtnText: 'View Case Study',
      smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744291960/four-oaks-farm-circle_umugkf.png',
      heading: 'Expert BigCommerce Development Solutions for Scalable Growth',
      link: '/fouroaksfarm',
      bigCommerce: [
        {
          bigImg1: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816937/lovely_icon-01_u037ec.png',
          bigImg2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
          bigImg3: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816927/lovely_icon_2-01_kk0qrf.png',
        },
      ],
    },
    {
      img: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593403/krap_strap_tzsk4q.webp',
      className: 'bigBannerFifth',
      smHeading: 'Certified BigCommerce Agency',
      smallBtnText: 'View Case Study',
      smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829268/lovely-5-3_tykoz4.jpg',
      heading: 'Expert BigCommerce Development Solutions for Scalable Growth',
      link: '/krappstrapp',
      bigCommerce: [
        {
          bigImg1: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816937/lovely_icon-01_u037ec.png',
          bigImg2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
          bigImg3: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745816927/lovely_icon_2-01_kk0qrf.png',
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

  return (
    <div className='case-study-container'>
      <div className='case-wrapper'>
        <h1 className='big-card-heading primary-heading'>
          {caseStudies[currentIndex].heading}
        </h1>
        <div className='case-card'>
          <img
            loading='lazy'
            className={`case-img ${caseStudies[currentIndex].className}`}
            src={caseStudies[currentIndex].img}
            alt='case'
          />
          <div className='card-info'>
            <p>{caseStudies[currentIndex].smHeading}</p>
            <h3>{caseStudies[currentIndex].heading}</h3>

            {caseStudies[currentIndex].bigCommerce.map((item, index) => (
              <div key={index} className='bigcommerceImg-card'>
                <img loading='lazy' src={item.bigImg1} alt='bigImg1' />
                <img loading='lazy' src={item.bigImg3} alt='BigCommerce certified partner icon Kushel Digi Solutions' />
              </div>
            ))}

            <div className='flex-bigcommerce-banner-btns'>
              <TalkToConsult btn='bigcommerce-banner-btn' />
              <Link href='/contact-us'>
                <button className='bigcommerce-banner-btn big-transparent-btn'>
                  Book a Call <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>

          <div className='small-icons-div'>
            {caseStudies.map((item, index) => (
              <div
                onClick={() => setCurrentIndex(index)}
                className='small-icons'
                key={index}
              >
                {index === currentIndex && (
                  <Link href={item.link}>
                    <span className='case-btnText'>{item.smallBtnText}</span>
                  </Link>
                )}
                <img
                  className={`bigcommercesmall-icon ${
                    index === currentIndex ? 'active' : ''
                  }`}
                  src={item.smallImg}
                  alt='small case'
                />
              </div>
            ))}
          </div>
        </div>

        {caseStudies[currentIndex].bigCommerce.map((item, index) => (
          <div key={index} className='bigcommerceImg-card bigcommerce-down-images'>
            <img loading='lazy' src={item.bigImg1} alt='bigImg1' />
            <img loading='lazy' src={item.bigImg3} alt='bigImg3' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
