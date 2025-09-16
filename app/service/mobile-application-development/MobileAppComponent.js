"use client"
import { useEffect, useState } from "react";

import Head from 'next/head';

import Link from "next/link";


import Footer from "../../COMMON/Footer";
import Navbar from "../../COMMON/Navbar";
import '../../globals.css';


import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import MobileFAQ from "../../COMMON/MobileFAQ";
import Website from "../../components/Home/HomeForm";
const MobileAppComponent = ({ notify }) => {
  const [perPage, setPerPage] = useState(6);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1300px)").matches) {
      setPerPage(4);
    }
    if (window.matchMedia("(max-width: 850px)").matches) {
      setPerPage(3);
    }
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
    }
  }, []);


  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
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
    title: 'Unlock the Power of Mobile App Development',
    description: 'the best mobile app development company, expert in Android, iOS, and more. Our company not only enhances online presence but also redefines digital experiences.',
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
        <div className="serjii1">
          <div className="ser11 px-24 flex items-center justify-between">
            <div className="ser111 btn-all">
              <h1 className="change_web" id="change_x">Affordable IOS and Android Mobile Application Development  </h1>
              <p className="ac" id="change_y">
                Crafting Mobile Experiences Beyond Boundaries {" "}
                <br />
              </p>
              <a href="/contact-us" className="rect-first-btn"><button className="lets_talking"><h5>Lets get started</h5>
                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                </svg>
              </button>
              </a>
            </div>
            <div className="ser112 fitor fitor1 fitoor">
              {/* <img src={MobileImage} alt="IOS and Android Mobile Application Development"  title="IOS and Android Mobile Application Development"/> */}
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724760679/MobileImage.e05a320923e0ab7957a2_om33pq.png
" alt="IOS and Android Mobile Application Development" title="IOS and Android Mobile Application Development" />

            </div>
          </div>
        </div>
        <div className="ser2 ser-vertical ">
          <div className="ser21 ser23 ">

            <div className="home412 flex justify-center items-center">
              <Splide
                className=" w-full"
                aria-label="Our Services"
                options={{
                  perPage: 5,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                  breakpoints: {
                    1200: {
                      perPage: 4,
                    },
                    992: {
                      perPage: 4,
                    },
                    768: {
                      perPage: 3,
                    },
                    576: {
                      perPage: 3,
                    },
                  }

                }}
              >
                <SplideSlide>
                  <Link href="/react-native"><div className="home4121">
                    <img className=" block m-auto" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339163/reactjs_fia8qf.png' alt="react native" title="react native" />
                    <p>REACT NATIVE</p>
                  </div></Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/flutter"><div className="home4121">
                    <img className=" block m-auto" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339202/fluterjs_optiue.png' alt="flutter" title="flutter" />
                    <p>flutter</p>
                  </div></Link>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img className=" block m-auto" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423598/swiftjs_twq2kv.png' alt="SWIFT" title="SWIFT" />
                    <p>SWIFT</p>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/kotlin"><div className="home4121">
                    <img className=" block m-auto" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423646/kotlinjs_odlnty.png' alt="KOTLIN" title="KOTLIN" />
                    <p>KOTLIN</p>
                  </div></Link>
                </SplideSlide>
                <SplideSlide>
                  <div className="home4121">
                    <img className="block m-auto" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423694/java_s4myhl.png' alt="JAVA" title="JAVA" />
                    <p>JAVA</p>
                  </div>
                </SplideSlide>
              </Splide>
            </div>



          </div>
        </div>

        <div className="mobile-app dine-1234">
          <div class="scroll-container">
            <img class="app image-text-dark" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339829/mobileapi_z44pnl.png" alt="Custom App Development & Design Company" />
          </div>

          <div className="deliver">
            <div className="first-delivery">
              <h3>
                Top Custom App Development And <br /> Design Company
              </h3>
              <div className="deivery-date">
                <p className="ensure ensure1">
                  Our mobile developers possess agile thinking and coding skills. They excel in creating mobile apps in any language, whether it's native or cross-platform, and can tailor them to your specific customizations and requirements.
                </p>
              </div>
              <Link href="/contact-us">
                <button className="com">
                  Contact Us
                  <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="second-delivery">
              <div className="delivery-img about166">
                {/* <img src={doubleMob} alt="Custom App Development Design Company" title="Custom App Development Design Company" /> */}
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724760883/doubleMob.452fb298f59678ce0abd_jsge6t.png
" alt="Custom App Development Design Company" title="Custom App Development Design Company" />
              </div>
            </div>
          </div>
        </div>

        <div className="experience-user">
          <div className="experience-user-sect dine-1234">
            {/* <img src={usto} alt="Custom App Development Services" title="Custom App Development Services" /> */}

            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724760037/group_image_fe2vwi.png
" alt="Custom App Development Services" title="Custom App Development Services" />

          </div>
        </div>
        <div className="help-business help-business2 ">
          <h3 className="text-center">Our Custom App Development Services</h3>

          <div className="business-card flex-wrap">
            <div className="business-box relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339608/c5_yz8nsm.png' alt="Native App Development" title="Native App Development" />
              </div>
              <h5>Native App Development</h5>
              <p>
                We design and develop iOS, Android, and wearable apps for optimal performance.

              </p>
            </div>
            <div className="business-box relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339608/c5_yz8nsm.png' alt="Web Application Development" title="Web Application Development" />
              </div>
              <h5>Web Application Development</h5>
              <p>
                Crafting web apps for enhanced user engagement and seamless experiences
              </p>
            </div>
            <div className="business-box relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339722/c6_fhju9u.png' alt="Blockchain App Development" title="Blockchain App Development" />
              </div>
              <h5>Blockchain App Development</h5>
              <p>
                Building secure, decentralised apps with blockchain technology.
              </p>
            </div>
            <div className="business-box relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339608/c5_yz8nsm.png' alt="Progressive Web App Development" title="Progressive Web App Development" />
              </div>
              <h5>Progressive Web App Development</h5>
              <p>
                Future-ready web apps for speed, engagement, and responsiveness.
              </p>
            </div>
            <div className="business-box relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339757/c7_o5y9to.png' alt="Hybrid & Cross-Platform App Development" title="Hybrid & Cross-Platform App Development" />
              </div>
              <h5>Hybrid & Cross-Platform App Development</h5>
              <p>
                Efficient apps for multiple platforms, maintaining a consistent look.
              </p>
            </div>
            <div className="business-box relative text-center cursor-pointer">
              <div className="business-card-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339798/c8_ibnuqe.png' alt="flutter App Development" title="flutter App Development" />
              </div>
              <h5>Flutter App Development</h5>
              <p>
                Creating visually appealing flutter apps for iOS, Android, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="unlock">
          <h2>How Mobile Apps Unlock
         your Business Potential</h2>
          <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423735/process_ucdmth.jpg' alt="process"  />
        </div>

        <div className="custom-s">
          <h3>
            Why choose our custom application <br /> development service?
          </h3>
          <p>
            A quality website provides numerous opportunities to showcase your authenticity. Choose us for  <Link href="/web-development"> <span className="raja_hoverrrr"> web development company, </span>  </Link> and <Link href="/seo"> <span className="raja_hoverrrr"> Seo agency </span>  </Link> to boost your website's ranking.
          </p>
          <div className="colbo">
            {/* <img src={col1} alt="our strong talent" title="our strong talent" />
            <img src={col2} alt="collabrotive approch" title="collabrotive approch" />
            <img src={col3} alt="Roboust architecture" title="Roboust architecture" />
            <img src={col4} alt="project analysis" title="project analysis" /> */}
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724761148/col1.2fd1dd1309f7c3244cc6_skbgif.png
" alt="our strong talent" title="our strong talent" />
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724761148/col2.a09ae78873598e763157_ntsiec.png
" alt="collabrotive approch" title="collabrotive approch" />
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724761149/col3.d58265cd79574df44674_gz2mk0.png
" alt="Roboust architecture" title="Roboust architecture" />
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724761149/col4.ef14f8ee7e9ca08b41b4_fdvxqu.png
" alt="project analysis" title="project analysis" />
          </div>
        </div>

        <MobileFAQ />

        {/* <ContactForm notify={notify} /> */}
        <Website />


        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423798/whatsapp_yiaqit.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423855/telephone_bcbfsw.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default MobileAppComponent;
