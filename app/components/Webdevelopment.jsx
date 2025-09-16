"use client"
import React, { useState, useEffect } from "react";

import Head from 'next/head';
import Link from "next/link";

import '../globals.css'
import WebdevelopmentFAQ from '../COMMON/WebdevelopmentFAQ'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

import ContactForm from "../COMMON/ContactForm";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Website from "./Home/HomeForm";
// import { Helmet } from "react-helmet";


const WebDevelopmentUSA = ({ notify }) => {
  const [perPage, setPerPage] = useState(6);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1350px)").matches) {
      setPerPage(4);
    }
    if (window.matchMedia("(max-width: 850px)").matches) {
      setPerPage(3);
    }
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
    }
  }, []);
  let heading = "www.2ndAmendment.com";
  let heading1 = "www.kickeez.com";
  let heading2 = "www.protrucks.com";
  let heading3 = "www.jonesbuilt.com";
  const [start, setStart] = useState(false);
  const handleChange = () => {
    setStart(!start);
  };


  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);

  const [tab, setTab] = useState(1);

  const ChangeImage1 = () => {
    setTab(1);
    document.getElementById("img1").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462641/thir2_c5altu.png`;
    document.getElementById("img3").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img4").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img5").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
  }
  const ChangeImage2 = () => {
    setTab(2);
    document.getElementById("img1").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img3").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img4").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img5").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
  }
  const ChangeImage3 = () => {
    setTab(3);
    document.getElementById("img1").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img3").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462641/thir2_c5altu.png`;
    document.getElementById("img4").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img5").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
  }

  const ChangeImage4 = () => {
    setTab(4);
    document.getElementById("img1").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img3").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img4").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462641/thir2_c5altu.png`;
    document.getElementById("img5").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
  }

  const ChangeImage5 = () => {
    setTab(5);
    document.getElementById("img1").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img3").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img4").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png`;
    document.getElementById("img5").src = `https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462641/thir2_c5altu.png`;
  }


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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
        <div className="ser1 serji serji1 ">
          <div className="ser11  flex items-center justify-between webDoveeee">
            <div className="ser111 webbb-paraag">

              <h1 className=" change_web" id="change_x">Web development services to lead the industry</h1>
              <p className="ac">
                Solution based Web development services to skyrocket the growth
              </p>
              <Link href="/contact-us" className="web-button">   <button>
                Lets get started
                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                </svg>
              </button></Link>
            </div>
            <div className="ser112">
              {/* <img src={website} alt="Web development services" title="Web development services" /> */}
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842613/website.4562111510d891ebc0d5_m2yqvx.png
" alt="Web development services" title="Web development services" />
            </div>
          </div>
        </div>

        <div className="ser2 ser-vertical">
          <div className="ser21 ser23">
            <div className="home412 flex justify-center items-center">
              <Splide
                className=" w-full"
                aria-label="Our Services"
                options={{
                  perPage,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                }}
              >
                <SplideSlide>
                  <Link href="/react-js">
                    <div className="home4121">
                      <img className=" block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842979/React_2_whb1bf.png
" alt="react" title="react" />
                      <p>REACT JS</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/html5">
                    <div className="home4121">
                      <img className=" block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842978/732212_1_httgut.png
" alt="html" title="html" />
                      <p>HTML 5</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/php">
                    <div className="w-full sis  home4121">
                      <img className="block m-auto phpos" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842977/png-clipart-php-php_1_1_htj0rh.png " alt="php" title="php" />
                      <p>PHP</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/node-js">
                    <div className="w-full sis1  home4121">
                      <img className="block m-auto"
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740728606/node_odqwlf.jpg"
                        alt="Node"
                        title="Node"
                      />
                      <p>Node</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/wordpress">
                    <div className="home4121">
                      <img className="block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842773/wordpress_1_2_h5o1qr.png
" alt="Wordpress" title="Wordpress" />
                      <p>Wordpress</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="">
                    <div className="home4121">
                      <img className="block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740728606/pyton_tpf5u2.jpg" alt=" PYTHON" title="PYTHON" />
                      <p>PYTHON</p>
                    </div>
                  </Link>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

        <div className="developments dine-1234">
          <marquee behavior="scroll" direction="right" scrollamount="5">
            <img className="dev1" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843340/download_1_gibf3h.png
" alt=" Web Design animation" title=" Web Design animation" />
          </marquee>

          <div className="development">
            <div className="development1">
              <h3>
                Web Development Solutions To Grow The Business
              </h3>
              <p className="knowrs">
                Do you want your business to flourish in today's digital era? Then you'll require a website which is a key to establish your online presence and identity. Your website acts as an effective tool to highlight your strength by showcasing your products and services which will definitely excel your online presence. But to attract new customers and traffic to your site is also essential and for this Kushel Digi Solutions is here for you with extensive experience in delivering fast, innovative and user-friendly sites in few weeks
              </p>
              <p className="knowrs">
                While its roots in India, Kushel Digi Solutions
                also emerged as a leading  web development company in USA  by extending its premier web development services to clients in the USA. Our global approach ensures global service standards to deliver outstanding results. Let us help you succeed online.
              </p>

            </div>
            <div className="development2">
              {/* <img src={mobileJi} alt="Web development solutions" title=" Web Development Solutions" /> */}
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843511/mobilieji.777f4a1da1940ac55315_qfiv4l.png
" alt="Web development solutions" title=" Web Development Solutions" />
            </div>
          </div>
        </div>

        <div className="why_website">
          <h2>Why choose website designing services?</h2>
          <div className="thir_button_flex">
            <div onClick={ChangeImage1} className="thir_img">
              <p>Customized UI design</p>
              <img id="img1" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png' alt="Customized design" title="Customized design" />
            </div>
            <div onClick={ChangeImage2} className="thir_img">
            </div>
            <div onClick={ChangeImage3} className="thir_img">
              <p>User-centric graphics and content</p>
              <img id="img3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png' alt="Contact & Graphics" title="Contact & Graphics" />
            </div>
            <div onClick={ChangeImage4} className="thir_img">
              <p>Optimized for SEO</p>
              <img id="img4" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png' alt="SEO Service" title="SEO Service" />
            </div>
            <div onClick={ChangeImage5} className="thir_img" >
              <p>Continuous website maintenance</p>
              <img id="img5" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462387/thir1_z1wk7c.png' alt="Website Maintenance" title="Website Maintenance" />
            </div>
          </div>

          <div className="body_website">
            {
              tab === 1 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Experience the power of tailor-made designs that uniquely reflect your brand and vision.

                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Explore here the benefits of customized website design:</span>
                      <span>● Tailored web design will help reflect your online brand’s unique identity.</span>
                      <span>● A custom website will be optimized for higher SEO rankings.</span>
                      <span>● Streamlined navigation and intuitive interface will improve the end-user experience.</span>
                      <span>● Stand out in the competitive market with a custom website design.</span>
                      <span>● Scale the website’s custom design template as your business grows with time.</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843937/CustemslImg.17b28f45c8901fb394ee_o8haez.png
" alt="Customized design" title="Customized design" />
                  </div>
                </>
              )
            }


            {
              tab === 3 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Elevate your online presence with captivating visuals and engaging graphics.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>● It supports and establishes your brand</span>
                      <span>● It optimized the customer experience</span>
                      <span>● It helps increase SEO optimization</span>
                      <span>● It gives better control over website hosting</span>
                      <span>● It gives better control over website hosting</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462523/webMinar_syav7o.png' alt="contact and graphics" title="contact and graphics" />
                  </div>
                </>
              )
            }

            {
              tab === 4 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>

                        Drive visibility and reach your target audience with our expert SEO solutions.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>● It supports and establishes your brand</span>
                      <span>● It optimized the customer experience</span>
                      <span>● It helps increase SEO optimization</span>
                      <span>● It gives better control over website hosting</span>
                      <span>● It gives better control over website hosting</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462559/conGraphic_v7v8rv.png' alt="SEO services" title="SEO services" />
                  </div>
                </>
              )
            }
            {
              tab === 5 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        We provide seamless ongoing maintenance to keep your site running smoothly.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>● It supports and establishes your brand</span>
                      <span>● It optimized the customer experience</span>
                      <span>● It helps increase SEO optimization</span>
                      <span>● It gives better control over website hosting</span>
                      <span>● It gives better control over website hosting</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462598/secService_dqv6gv.png' alt="Website maintenance" title="Website maintenance" />
                  </div>
                </>
              )
            }

          </div>

        </div>

        <div className="experience-user">
          <div className="experience-user-sect experience-user-sect1">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724844146/punto.e9c4e937f8bb841bdfd2_1_v4qamu.png
" alt="Web development" title="Web development" />
          </div>
        </div>

        <div className="how-we">
          <h3>How We Works</h3>
          <h2>3 Easy Steps</h2>
          <div className="step-card">
            <div className="step-box">
              <div className="step-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461436/setting_ijlq27.png' alt="Choose the Services" title="Choose the Services" />
              </div>
              <div className="step-head">
                <h4>Choose the Services</h4>
                <p>
                  Reaserch, Decide which services to <br /> purchase based on
                  your needs.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461388/docu_oiaxep.png' alt="Give us your Requirement" title="Give us your Requirement" />
              </div>
              <div className="step-head">
                <h4>Give us your Requirement</h4>
                <p>
                  Give us requirement during our <br /> strategic kickoff
                  meeting.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461473/sign_ny3aps.png' alt="Relax and Rest" title="Relax and Rest" />
              </div>
              <div className="step-head">
                <h4>Relax and Rest</h4>
                <p>
                  Do what you love, and we’ll obtain <br /> the best result for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="top-chose">
          <h3>


            Services provided by Kushel Digi Solution <br /> during  Web Development


          </h3>
          <p className="reason">

            The same fundamental phases are often followed in the entire flow of the website design process. The most typical services that Kushel Digi Solution offers are listed below.

          </p>
          <div className="card-son">
            <div className="business-card" id="business-card">
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461630/track_hacdsj.png' alt="Make a decision about your website" title="Make a decision about your website" />
                </div>

                <h5>Make a decision about your website's architecture, framework, and navigation:</h5>
                <p>

                  This entails determining the general structure and navigation of your website. Generally, Kushel Digi Solution approaches this procedure with consideration for the needs of your end user, be it external clients or staff members.


                </p>
              </div>
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461520/admi_bavkwt.png' alt="Choose your website" title="Choose your website" />
                </div>

                <h5>Choose your website's optimal code language: </h5>
                <p>

                  JavaScript, PHP, and HTML are a few of the more popular coding languages. Multiple languages can be utilized to create efficient websites, thus often the choice of coding language is more based on the process that your website developer wants to use.

                </p>
              </div>
            </div>
            <div className="business-card" id="business-card">
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461559/admi1_wxxwd8.png' alt="Write code for your website" title="Write code for your website" />
                </div>

                <h5>Write code for your website's backend</h5>
                <p>

                  Because it offers functions that are critical to the user experience, the website's backend acts as its cornerstone. For instance, databases, application programming interfaces (APIs), and other components could make up the website's back end.

                </p>
              </div>
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461593/admi2_hpdrgb.png' alt="Create the user interface and user experience for the front end:" title="Create the user interface and user experience for the front end:" />
                </div>

                <h5>Create the user interface and user experience for the front end:</h5>
                <p>

                  Your website's front end is powered by the user interface and user experience, but its back end is crucial to its fundamental operation. Facilitating visitor interaction should be simple, convenient, and enjoyable.

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ben-da">
          <h3>
            Benefits Of Working With Us
            To Build Your Website
          </h3>
          <p>
            A quality website offers several chances to demonstrate your
            authenticity. When you choose us, you can relax knowing that we'll
            take care of your website's design and development needs as well as
            SEO services to improve website ranking.
          </p>

          <img className="ben-img" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724844335/vertical.036b19ce6d8d5d31e526_1_tihxl4.png" alt="Benefits Of Working With Us" title="Benefits Of Working With Us" />

          <button>
            <Link href="/contact-us">
              Request A Call{" "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 24L9.8625 21.9L18.2625 13.5H0V10.5H18.2625L9.8625 2.1L12 0L24 12L12 24Z" fill="white" /> </svg>
            </Link>
          </button>

        </div>

        <div className="development-process dine-1234">
          <h3>Our development process</h3>
          <p>
            Our process ensures that an interface is seamless for the end-user
            to become familiar with and competent in using during the first
            contact they make. The agile approach makes it intuitive for users
            to achieve their objectives and easy to recall on subsequent visits.
            Our designers work with developers to make the attributes stand out
            by turning the usability to the max.
          </p>

          <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461928/process2_cxoycz.png' alt="our development process" title="our development process" />

          {/* mobile view image */}
          <div className="mobileview-imgg">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461965/ProcessMobView1_ukordf.png' alt="our development process" title="our development process" />
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462029/ProcessMobView2_l7yciz.png' alt="our development process" title="our development process" />
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462061/ProcessMobView3_zf9pi6.png' alt="our development process" title="our development process" />
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462090/ProcessMobView4_yffpxr.png' alt="our development process" title="our development process" />
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462116/ProcessMobView5_ftxbfk.png' alt="our development process" title="our development process" />
          </div>

        </div>

        <div className="home5     poty poty1">
          <div className="home51 px-24 dine-1234">
            <div className="home511 text-center ">
              <h3 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h3>
            </div>


            <div className="homeswar mt-14">
              <h4>We create success stories.</h4>
              <h3>Website Development Portfolio</h3>
              <div className="homeswar-side mt-5">
                <div className="homeswar-flex">
                  <div className="homeswar-card homeswar-card9 ">
                    <div className="homeswar-sect">
                      <h5>SUMMER-READY SKIN</h5>
                      <p>
                        Hydrate and plumb with the <br />
                        super serum duo
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      {/* <button>Details</button> */}


                      <a target="_blank" href="https://skknbykim.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card10">
                    <div className="homeswar-sect">
                      <h5>
                        CREATE THE REMARKABLE <br /> DIMENSIONS WITH MPM
                      </h5>
                      <p>
                        Connecting people across the globe.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      {/* <button>Details</button> */}

                      <a target="_blank" href="https://mpmoverseas.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card11">
                    <div className="homeswar-sect">
                      <h5>DOLIWALA EVENTS & WEDDING</h5>
                      <p>
                        Solution for all weddings and corporate events management and entertainment.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      {/* <button>Details</button> */}

                      <a target="_blank" href="https://www.doliwala.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="homeswar-flex">
                  <div className="homeswar-card homeswar-card12 ">
                    <div className="homeswar-sect">
                      <h5>SPINNING</h5>
                      <p>
                        Bring the studioexperience homewith <br /> the original indoor cycling brand.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      {/* <button>Details</button> */}


                      <a target="_blank" href="https://spinning.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card13">
                    <div className="homeswar-sect">
                      <h5>MIX IT UP</h5>
                      <p>
                        Find your look for your iphone 14
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      {/* <button>Details</button> */}

                      <a target="_blank" href="https://speckproducts.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card14">
                    <div className="homeswar-sect">
                      <h5>DISCOVER YOUR BETTER</h5>
                      <p>
                        With a daily routine customized to your <br /> wellness goals.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      {/* <button>Details</button> */}

                      <a target="_blank" href="https://www.bulletproof.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home52 w-full text-center"></div>
        </div>

        <div className="indu-s dine-1234">
          <h3>INDUSTRIES WE SERVE</h3>
          <p>
            We have the expertise and skills to serve a wide range of industries
            and meet their requirements of web & mobile development on any
            scale. Our team has years of experience in delivering projects for
            clients/businesses across industry verticals.
          </p>
          <div className="indu-fard mt-8">
            <div className="indu-card">
              <div
                className="indu-box"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img src={hovered ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462353/posis10_yfdb3x.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461895/dilkush_usgpzb.png'} alt="Healthcare & Wellness" title="Healthcare & Wellness" />
                <p>Healthcare & Wellness</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
              >
                <img src={hovered2 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462143/posis2_wsomhp.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461663/dec1_gboppw.png'} alt="Real Estate" title="Real Estate" />
                <p>Real Estate</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
              >
                <img src={hovered3 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462176/posis3_oygvtx.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461703/dec2_hht65c.png'} alt="Software & Internet Marketing" title="Software & Internet Marketing" />
                <p>IT, Software & Internet Marketing</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered4(true)}
                onMouseLeave={() => setHovered4(false)}
              >
                <img src={hovered4 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462208/posis4_l3zo4i.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461736/dec3_mzm2pd.png'} alt="Finance & Banking" title="Finance & Banking" />
                <p>Finance & Banking</p>
              </div>
            </div>
            <div className="indu-card">
              <div
                className="indu-box"
                onMouseEnter={() => setHovered5(true)}
                onMouseLeave={() => setHovered5(false)}
              >
                <img src={hovered5 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462235/posis5_qt6fyh.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461767/dec4_ao6cna.png'} alt="Government & Public" title="Government & Public" />
                <p>
                  Government & Public <br /> Sector Enterprises
                </p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered6(true)}
                onMouseLeave={() => setHovered6(false)}
              >
                <img src={hovered6 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462262/posis6_jhegba.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461799/dec5_fajt86.png'} alt="Travel & Tour" title="Travel & Tour" />
                <p>Travel & Tour</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered7(true)}
                onMouseLeave={() => setHovered7(false)}
              >
                <img src={hovered7 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462292/posis7_h1ckuz.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461833/dec6_x71dob.png'} alt="Retail" title="Retail" />
                <p>Retail</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered8(true)}
                onMouseLeave={() => setHovered8(false)}
              >
                <img src={hovered8 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740462317/posis8_bmwskf.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461862/dec7_xhtkrl.png'} alt="SPORTS" title="SPORTS" />
                <p>Sports ( outdoor & indoor )</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Certified /> */}

        <WebdevelopmentFAQ />

        <Website />


        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401400/whatsapp_qknuap.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401442/telephone_rg2izx.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopmentUSA;
