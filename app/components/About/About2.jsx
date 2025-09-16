"use client"
import React, { useState, useEffect } from "react";

import ContactForm1 from "../../COMMON/ContactForm1";
import SmallApproach from "../../COMMON/SmallApproach";

import Link from "next/link";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import '../../globals.css'
import Head from "next/head";


const About2 = ({ notify }) => {
  const [tab, setTab] = useState(1);

  const tabAnother = (e) => {
    document.getElementById("aa").style.visibility = "visible";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(1);
  };

  const tabAnother1 = (e) => {
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "visible";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(2);
  };

  const tabAnother2 = (e) => {
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "visible";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(3);
  };
  const tabAnother3 = (e) => {
    e.preventDefault();
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "visible";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(4);
  };
  const tabAnother4 = (e) => {
    e.preventDefault();
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "visible";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "hidden";
    setTab(5);
  };

  const tabAnother5 = (e) => {
    e.preventDefault();
    setTab(6);
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "visible";
    document.getElementById("gg").style.visibility = "hidden";
  };
  const tabAnother6 = (e) => {
    e.preventDefault();
    setTab(7);
    document.getElementById("aa").style.visibility = "hidden";
    document.getElementById("bb").style.visibility = "hidden";
    document.getElementById("cc").style.visibility = "hidden";
    document.getElementById("dd").style.visibility = "hidden";
    document.getElementById("ee").style.visibility = "hidden";
    document.getElementById("ff").style.visibility = "hidden";
    document.getElementById("gg").style.visibility = "visible";
  };


  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }

  const generateMetadata = ({ params }) => ({
    title: 'About Kushel Digi Solutions | eCommerce Development Experts',
    description: 'Kushel Digi Solutions empower businesses by delivering seamless, scalable as well as revenue-driven online stores to maximize growth in the eCommerce digital marketplace',
    
  });

  useEffect(() => {
    const { title, description  ,} = generateMetadata({ params: {} });
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


      <div className="about-main">
        <div className="about-main1 relative ">
          <div className="about-main11 flex justify-start items-center dine-123">
            <div className="about-main111">
              <h1 className="mb-3">YOUR GO-TO PARTNER FOR DIGITAL SOLUTIONS
              </h1>
              <p>With over 8 years of experience, Kushel Digi is committed to empower your business for digital success.</p>
            </div>
            <img className="absolute" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738934853/e6_jka61a.png' alt="kusheldigi About Us" title="kusheldigi About Us" />

          </div>
        </div>


        <div className="newAbout about-page ">

          <div className="newAboutContain">



            {/* left side */}
            <div className="newAboutLeft">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990421/newAbout_caylko.png' alt="Experienced Professionals" title="Experienced Professionals" />
            </div>

            {/* roight side */}
            <div className="newAboutRight">

              <div className="newAbIner">

                <p className="newAbtText">ABOUT US <span className="nwAbtline"></span></p>

                <div className="newAbIner2">


                  <p className="ATeamPara">Delivering Success with a <span className="ATeamParaBold">Proven Track Record </span></p>

                  <p className="abtPa2">Kushel Digi Solutions is a one-stop solution for innovative and customized solutions that best suit your business needs. With past successes as proof of mettle, we proudly render excellence in e-commerce development, white-label services, and UI/UX designs. Our empowered team transforms your vision into reality with cutting-edge technology and unmatched expertise.</p>

                </div>
                <a href="/contact-us"><button className="nwABTknwMr"><span>Know  More </span> <span><svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                </svg></span></button></a>
              </div>

            </div>

          </div>


        </div>




        <div className="about-main3">
          <div className="about-main31 flex items-center justify-between dine-123">
            <div className="about31">
              <h6>About Kushel Digi</h6>
              <h3>Get To Know Us Better</h3>
              <p>
                Kushel Digi Solutions has over 8 years of industry experience under the leadership of our esteemed CEO Shubham Gupta. We have specialized experience  in the development of e-commerce websites and mobile applications. Further we have expertise in leading technologies like BigCommerce and Shopify that help us produce robust, scalable, and innovative solutions digitally. We have successfully completed a number of projects over all these years, empowering businesses to thrive in the competitive digital landscape.
              </p>
              <Link href="/contact-us" className="aboutbtn">
                <button className="about-btn">
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>{" "}
              </Link>
            </div>
            <div className="about32">
              {/* <img src="/static/images/e7.png" alt="kushel" /> */}
              <div className="about_vector">
                <img
                  className="aboutVector animate__animated animate__pulse animate__infinite"
                  src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990483/aboutVector_jn6suw.png'
                  alt="aboutVector1-kusheldigi"
                  title="aboutVector1-kusheldigi"
                />
              </div>
              <img className="aboutVector1" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738264730/aboutVector1.550bdad8378b6a45402f_agmbwx.png" alt="Get To Know Us Better" title="Get To Know Us Better" />
            </div>
          </div>
        </div>
        <div className="about-main-3">
          <div className="about-main-31 flex justify-between dine-123">
            <h3>What We Do?</h3>
            <p>
              As a leading ecommerce web development agency, we remain committed to help our clients to establish their online presence and increase visibility through SEO, content marketing, social media management and paid advertising.
            </p>
          </div>
        </div>
        <div className="about-main4">
          <div className="about-main41 dine-1234">
            <h3 className="text-white text-center">
              Be Fair With Today to build
           desired tomorrow</h3>
            <div className="about4 flex justify-center">
              <div className="about41 text-center mr-1">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738935049/e9_oiwp7p.png' alt="kusheldigi Vision" title="kusheldigi Vision" />
                <h5>Vision</h5>
                <p>
                  Kushel Digi Solutions innovates to bring about a new world of better digital solutions to fuel business growth. The company is yet to be recognized as the prime mover for e-commerce and mobile app development services with BigCommerce and Shopify. Kushel Digi founded on a sole principle to empower businesses to realize their digital potential by delivering seamless, scalable, and user-centered solutions.
                </p>
              </div>
              <div className="about41 text-center ml-1">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738935123/e10_fmgyec.png' alt="Our Mission-kusheldigi" title="Our Mission" />
                <h5>Mission</h5>
                <p>
                  At Kushel Digi Solutions, our mission is to become an innovative and dependable web development service that empowers businesses to grow in a changing digital environment. We aim at creating flawless and engaging digital experience with the help of cutting-edge technology, beautiful design, and excellent customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main5">
          <div className="about-main51 dine-1234">
            <h3 className="text-center">Our Values</h3>
            <p className="over">
              Over the past 10 Years our values have been the driving force that{" "}
              <br /> keeps us on right path
            </p>
            <div className="about5">


              <div className="about51 flex justify-between">
                <div className="about5-card text-center mr-4 animate__animated animate__pulse">
                  <h4></h4>
                  <p>Innovation</p>
                </div>
                <div className="about5-card text-center ml-4 animate__animated animate__pulse">
                  <h4></h4>
                  <p>Excellence</p>
                </div>
              </div>


              <div className="about52 justify-around">
                <div className="about5-card text-center mr-4 animate__animated animate__pulse">
                  <h4></h4>
                  <p>Integrity</p>
                </div>
                <div className="about5-card text-center ml-4 animate__animated animate__pulse">
                  <h4></h4>
                  <p>Customer-Centric</p>
                </div>
              </div>


              <div className="about53 justify-evenly">
                <div className="about5-card text-center mr-4 animate__animated animate__pulse">
                  <h4></h4>
                  <p>Collaboration</p>
                </div>
                <div className="about5-card text-center ml-4 animate__animated animate__pulse">
                  <h4></h4>
                  <p>Continuous Improvement</p>
                </div>
              </div>



            </div>
          </div>
        </div>
        <div className="about-main6 dine-1234">
          <div className="about-main61">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990253/e12_pklnpa.png' alt="Our Core Values" title="Our Core Values" />
          </div>
        </div>

        <div className="office-about">
          <div className="process-flex">
            <div className="process-flex1">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738935189/e14_yju55b.png' alt="Our Process" title="Our Process" />
            </div>
            <div className="process-flex2">
              <h2>Our process</h2>
              <p>
                Our entire process is structured to ensure the smooth running of any project from its concept down to its launching. Strategic planning, advanced technology, and iterative feedback are combined to come up with exceptional digital solutions customized to suit your unique needs.
              </p>
              <Link href="/contact-us" className="approach-hover aboutbtn1">
                <button>
                  See Our Approach More{" "}
                  <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="office-flex mt-5">
            <div className="office-flex1">
              <h3>Our Office</h3>
              <p>
                Our office is fully equipped with the latest technology and system which enables our expert professionals to deliver your project efficiently.

              </p>
           
                <button>
                <Link href="/contact-us" className="aboutbtn1">
                  See Our Approach More{" "}
                  <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                  </svg>
                  {" "}
                  </Link>
                </button>
             
            </div>
            <div className="office-flex2">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989766/e15_mt2uzq.png' alt="Our Office" title="Our Office" />
            </div>
          </div>
        </div>
        <div className="about-main8">
          <div className="about-main81 dine-1234">
            <h2 className="history"> HISTORY</h2>
            {tab === 1 && (
              <div className="about80 flex items-center justify-between transition-all">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2017</b>
                  <p className="mb-2 mt-2 founded">Kushel digi is founded</p>
                  <p className="started">
                    Kushel Digi was founded in September 2017 under the leadership of our esteemed founder Mr. Shubham Gupta along with two other colleagues. Our founder was very clear about his vision to deliver exceptional services in web development and e-commerce development without compromising the quality and cost. Within a month, we had successfully completed our first project.
                  </p>
                </div>
                <div className="about81">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990052/e18_eaybpg.png' alt="Our history" title="Our history" />
                </div>
              </div>
            )}
            {tab === 2 && (
              <div className="about80 flex items-center justify-between transition-all">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2018</b>
                  {/* <p  className="mb-2 mt-2 founded founded1">Kushel digi is founded</p> */}
                  <p className="started mt-4">
                    After completion of our first project, people started knowing about our services and then we never look back. We had started hiring motivated and skilled members. We set up our office in New Delhi.

                  </p>
                </div>
                <div className="about81">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990052/e18_eaybpg.png' alt="our history" title="our history" />
                </div>
              </div>
            )}

            {tab === 3 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2019</b>
                  {/* <p className="mb-2 mt-2 founded">Kushel digi is founded</p> */}
                  <p className="started mt-4">
                    In order to meet the expectations of customers and increasing demand of other services, we had expanded our services. We were elated to deliver more than 50 projects successfully.

                  </p>
                </div>
                <div className="about81">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990052/e18_eaybpg.png' alt="our history" title="our history" />
                </div>
              </div>
            )}

            {tab === 4 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2020</b>
                  {/* <p className="mb-2 mt-2 founded">Kushel digi is founded</p> */}
                  <p className="started mt-4">
                    The COVID 19 pandemic hit the world and in India affected our services and projects delivery timeline. It was the most challenging time for our company and we lost nearly 80 percent of our business. We had to terminate our services on 30th March 2020 in the best interest of our staffs.
                  </p>
                </div>
                <div className="about81">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990052/e18_eaybpg.png' alt="our history" title="our history" />
                </div>
              </div>
            )}

            {tab === 5 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2021</b>
                  {/* <p className="mb-2 mt-2 founded">Kushel digi is founded</p> */}
                  <p className="started mt-4">
                    Nearly a year into the pandemic, every month seemed to drag
                    on forever. There was uncertainty about when we could resume
                    office as the company was entirely shut down.
                  </p>
                </div>
                <div className="about81">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990052/e18_eaybpg.png' alt="our history" title="our history" />
                </div>
              </div>
            )}

            {tab === 6 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2022</b>
                  {/* <p className="mb-2 mt-2 founded">Kushel digi is founded</p> */}
                  <p className="started mt-4">
                    Kushel Digi underwent a complete transition when the
                    pandemic subsided. We began to offer online services and
                    introduced contactless payments with the establishment of
                    our virtual office. Sector 63 of Noida is where our new
                    office is located.
                  </p>
                </div>
                <div className="about81">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990052/e18_eaybpg.png' alt="our history" title="our history" />
                </div>
              </div>
            )}

            {tab === 7 && (
              <div className="about80 flex items-center justify-between">
                <div className="about8">
                  <h3 className="mb-1">Our History</h3>
                  <b className="font-bold mb-2">2023</b>
                  {/* <p className="mb-2 mt-2 founded">Kushel digi is founded</p> */}
                  <p className="started mt-4">
                    We are refocusing on our offerings and have also started
                    business with international clients to achieve global
                    success. We currently operate as a full-service e-commerce
                    and marketing agency.
                  </p>
                </div>
                <div className="about81">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990052/e18_eaybpg.png' alt="our history" title="our history" />
                </div>
              </div>
            )}
            <div className="about800 mt-8 px-12 relative">
              <div className="about802"></div>
              <div className="flex ininy justify-between">
                <div className="about801">
                  <img id="aa" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png' alt="kds logo btn" title="kds logo btn" />
                  <b className=" cursor-pointer" onClick={tabAnother}>
                    2017
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="bb"
                    className="invisible"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png'
                    alt="kds logo btn" title="kds logo btn"
                  />
                  <b className=" cursor-pointer" onClick={tabAnother1}>
                    2018
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="cc"
                    className="invisible"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png'
                    alt="kds logo btn" title="kds logo btn"
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother2}
                    id="2019"
                  >
                    2019
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="dd"
                    className="invisible"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png'
                    alt="kds logo btn" title="kds logo btn"
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother3}
                    id="2020"
                  >
                    2020
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="ee"
                    className="invisible"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png'
                    alt="kds logo btn" title="kds logo btn"
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother4}
                    id="2021"
                  >
                    2021
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="ff"
                    className="invisible"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png'
                    alt="kds logo btn" title="kds logo btn"
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother5}
                    id="2022"
                  >
                    2022
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="gg"
                    className="invisible"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png'
                    alt="kds logo btn" title="kds logo btn"
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother6}
                    id="2023"
                  >
                    2023
                  </b>
                </div>
                <div className="about801">
                  <img
                    id="gg"
                    className="invisible"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738989860/e20_f1jkri.png'
                    alt="kds logo btn" title="kds logo btn"
                  />
                  <b
                    className=" cursor-pointer"
                    onClick={tabAnother6}
                    id="2023"
                  >
                    2024
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-main-12">
          <div className="about-main-120 flex items-center justify-center">
            <div className="about-11">
              <h3>Join the Kushel digi team!</h3>
              <p>
                Innovate with the latest technologies & get to work on some of
                the coolest projects you can imagine.
              </p>
              <Link href="/contact-us" className="buttann">
                <button>Apply Now</button>
              </Link>
            </div>
            <div className="about-10">
              <img className="sersa" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990178/e17_bwwmj0.png' alt="Join Kushel digi team" title="Join Kushel digi team" />
            </div>
          </div>
        </div>
        <SmallApproach />
        <ContactForm1 notify={notify} />

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About2;

