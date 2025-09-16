import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './styles.css';
import Image from 'next/image';

function Home2Testimonial() {
  const splideRef = useRef(null);

  const goPrev = () => {
    splideRef.current.splide?.go('-1');
  };

  const goNext = () => {
    splideRef.current.splide.go('+1');
  };

  useEffect(() => {
    const slides = document.querySelectorAll('.splide__slide');
    slides.forEach(slide => {
      if (slide.getAttribute('role') === 'group') {
        slide.removeAttribute('role');
      }
    });
  }, []);

  return (
    <section className='h2testimonialwrap'>
      <div className='testiTopDetails'>
        <div className='tettopleft'>
          <p>TESTIMONIALS</p>
          <p className="primary-heading">What our Clients are saying</p>
        </div>
        <div className='testright'>
          <button onClick={goPrev} className='roudned' aria-label="Previous testimonial">
            <svg className='home2rightarrow' width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1661 9.1131L1.1131 8.83393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 17L1.1131 8.83393L9.27917 0.947037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={goNext} className='roudned rotatesvg' aria-label="Next testimonial">
            <svg className='home2rightarrow' width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1661 9.1131L1.1131 8.83393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 17L1.1131 8.83393L9.27917 0.947037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className='splide2'>
        <Splide
          className='branchswipe'
          ref={splideRef}
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            rewind: true,
            autoplay: true,
            start: 0,
            speed: 1000,
            gap: '20px',
            pagination: false,
            arrows: false,
            drag: 'free',
            interval: 2000,
            autoScroll: { speed: 1 },
            breakpoints: {
              1450: { perPage: 3, gap: '20px' },
              1200: { perPage: 2, gap: '10px', width: "74%" },
              1020: { perPage: 2, gap: '10px', width: "67%" },
              800: { perPage: 2, gap: '10px', width: "55.3%" },
              600: { speed: 800, perPage: 1, gap: "20px" },
            },
          }}
        >
          {/* Testimonial slides - merged nested divs for images */}
          <SplideSlide>
            <div className='testswipsingle'>
              <div className='testImageCloud'>
                <Image loading="lazy" width={120} height={18} src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='icon for ecommerce website development ' />
                <Image loading="lazy" width={70} height={70} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745842698/rajat-mithal-logo_ig2ccd.png" alt="Mithal Industries logo for ecommerce website development by Kushel Digi Solutions" />
              </div>
              <p className='reviewsss'>Kushel Digi Solutions delivered exceptional ecommerce development services and helped us built a highly functional online platform. The team's technical skills and experience is really commendable which provided a seamless digital upgrade.</p>
              <div className='home-testi-name'>
                <p className='reviewname'>Shikhar Mithal</p>
                <p className='projectre'>Mithal Industries</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='testswipsingle'>
              <div className='testImageCloud'>
                <Image loading="lazy" width={120} height={18} src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='icon for ecommerce website development ' />
                <Image loading="lazy" width={70} height={70} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745842494/manish-bhai-1_hmba1g.png" alt="Slide365 project logo by Kushel Digi Solutions" />
              </div>
              <p className='reviewsss'>From designing to execution, Kushel Digi Solutions was the best choice for the innovative development of our project. Their expertise as well as attention to detail in website development & BigCommerce solutions ensured to enhance our digital strategy and user's online experience.</p>
              <div className='home-testi-name'>
                <p className='reviewname'> Annu Koteshwara</p>
                <p className='projectre'>Slides365</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='testswipsingle'>
              <div className='testImageCloud'>
                <Image loading="lazy" width={120} height={18} src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='icon for ecommerce website development ' />
                <Image loading="lazy" width={70} height={70} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745842480/manish-bhai-3_uz3ee0.png" alt="Project logo for ecommerce website development by Kushel Digi Solutions" />
              </div>
              <p className='reviewsss'>Kushel Digi Solutions understands the core of eCommerce development and gives BigCommerce solutions which turned out as a massive game changer for our online business storefront. Their team of professionals helped gaining us scalability and improved customer service experience.</p>
              <div className='home-testi-name'>
                <p className='reviewname'>Aron Kiefer</p>
                <p className='projectre'>MyCrazySimpleCMS</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='testswipsingle'>
              <div className='testImageCloud'>
                <Image loading="lazy" width={120} height={18} src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='icon for ecommerce website development ' />
                <Image loading="lazy" width={70} height={70} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745842486/manish-bhai-2_strlgl.png" alt="Nirviex project logo for ecommerce website development by Kushel Digi Solutions" />
              </div>
              <p className='reviewsss'>Working with Kushel Digi Solutions was a fantastic experience. Their strategic approach to eCommerce development and website development exceeded our expectations, therefore made the entire process reliable and hassle free. The team was highly responsive and offered customised solutions for every problem.</p>
              <div className='home-testi-name'>
                <p className='reviewname'>Rupam Ray </p>
                <p className='projectre'>Nirviex.in</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Home2Testimonial;
