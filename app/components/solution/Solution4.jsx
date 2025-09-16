"use client"
import React from "react";

import ContactForm1 from '../../COMMON/ContactForm1';
import Link from "next/link";
import Head from 'next/head';


import { Splide, SplideSlide } from "@splidejs/react-splide";


import "@splidejs/react-splide/css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import { useEffect } from "react";
import Website from "../Home/HomeForm";
const Solution = () => {



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
    title: 'Top eCommerce Solutions Company  for B2B/B2C | Kushel Digi',
    description: 'Kushel Digi Solutions delivers advanced eCommerce app and web development, AI, AR/VR, IoT integration, and secure payment solutions for scalable B2B & B2C businesses. ',
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
      {/* <Helmet> */}
      <title>Case studies of KushelDigi Solutions</title>
      <meta
        name="description"
        content="Unlock growth with custom E-commerce solutions by KushelDigi Solutions. Elevate your online presence today!"
      />
      <link rel="canonical" href="https://www.kusheldigi.com/solutions" />
      {/* </Helmet> */}
      {" "}
      <div className="ser-main">

        <div className="soluttion-mainn">
          <div className="solution_back">
            <div className="solution_back1">
              <h1>
                E-commerce <br /> Development Solutions
              </h1>
              <p>
                Entice buyers and generate more leads through our top-notch
                interactive eCommerce business development solutions.
              </p>
              <button>    <Link href="/contact-us"> REQUEST DEMO </Link></button>
            </div>
            <div className="solution_back2">
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930471/timery.27da1d0b3f753b1420e9_auwua2.png" alt="E-commerce Development Solutions" title="E-commerce Development Solutions" />
            </div>
          </div>
        </div>

        <div className="influenceee">
          <div className="influence_some">
            <div className="influence_left ">
              <div className="indo">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930470/influ.cdd5308f93f6cbfb71a2_sllptl.png" alt="Customers With E-commerce Development Solutions" title="Customers With E-commerce Development Solutions" />
              </div>
            </div>
            <div className="influence_right">
              <h2>Influence Customers With E-commerce Development Solutions</h2>
              <p>
                The online market of eCommerce platforms is vast. Shoppers are no
                longer limited to geographies or languages. They influence and
                promote platforms that offer accessibility, excellent deals, and
                steller shopping experience. From crafting innovative, simplistic
                solutions to complex market analysis and assessment, our team of
                agile developers works exclusively in the eCommerce domain with
                tech wizardry digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="ourrr-ecommm">
          <div className="our_ecommerce dine-1234">
            <div className="our_commerce1">
              <h6>Our E-commerce Software Development Solutions</h6>
              <p>
                Developing an eCommerce application gives access and power to
                operate from anywhere at any time, which acts as an asset
                necessary for the effective performance of any organisation today.
                We stand out among eCommerce software companies as we allow you to
                leverage cutting-edge technology to drive unmatched shopping
                experiences that highlights your business efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-11 py-8">
              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="E-commerce Consulting" title="E-commerce Consulting" />
                </div>
                <h5>E-commerce Consulting</h5>
                <p>
                  Our brilliant eCommerce team aid in providing professional
                  consultation & technical support for robust business analysis &
                  roadmap designs.
                </p>
              </div>
              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="Custom E-commerce Apps" title="Custom E-commerce Apps" />
                </div>
                <h5>Custom E-commerce Apps</h5>
                <p>
                  At Kushel Digi, we offer custom eCommerce solutions development
                  to help you effectively reach your audience with immersive
                  digital store experiences.
                </p>
              </div>
              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="Retail Software" title="Retail Software" />
                </div>
                <h5>Retail Software</h5>
                <p>
                  With our retail software functionality, give your users what
                  they want by enabling your team with the right set of
                  information.
                </p>
              </div>
              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="Digital Transformation" title="Digital Transformation" />
                </div>
                <h5>Digital Transformation</h5>
                <p>
                  Our solutions include high-tech functionalities based on AR/VR,
                  AI, IoT, and mechanical understanding.
                </p>
              </div>
              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="Mobility Solutions" title="Mobility Solutions" />
                </div>
                <h5>Mobility Solutions</h5>
                <p>
                  Our eCommerce app development revolves around giving your users
                  a secure interface mobile commerce experience supported by
                  secure getaway and cloud computing.
                </p>
              </div>
              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="Custom AppIntegration" title="Custom AppIntegration" />
                </div>
                <h5>Custom AppIntegration</h5>
                <p>
                  Scale up your eCommerce business by utilizing all the inputs
                  from the shop to better segment your prospects, recover stranded
                  cart, etc.
                </p>
              </div>
              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="Platform Migration" title="Platform Migration" />
                </div>
                <h5>Platform Migration</h5>
                <p>
                  We help you transfer data and replatform your online store to
                  the most suitable and efficient platform via our eCommerce
                  platform migration functionality.
                </p>
              </div>

              <div className="business-box busi-box relative text-center cursor-pointer">
                <div className="business-card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481029/penda_b2myld.png' alt="E-commerce App Design" title="E-commerce App Design" />
                </div>
                <h5>E-commerce App Design</h5>
                <p>
                  We design appealing applications that are the exact replica of
                  your brand allowing you to generate more sales exponentially.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="skyRoket">
          <div className="skyRoket_sect">
            <h4>
              Want To Skyrocket Your <span>eCommerce</span> Business?
            </h4>
            <h3>Let’s Connect & Act Together!</h3>
            <Link href="/contact-us"><button>REQUEST DEMO</button></Link>
          </div>
        </div>

        <div className="bff bff1">
          <h2>Why Choose Kushel Digi for E-commerce Services?</h2>
          <div className="faltus-card mt-4">
            <div className="faltu-card">
              <div className="faltu-box relative">
                <div className="faltu-box0 absolute">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930907/d7_mxutdt.png" alt="Enhanced Customer" title="Enhanced Customer" />
                </div>
                <div className="faltu-sard faltu-sard1">
                  <div className="faltu-head">
                    <h4>Enhanced Customer</h4>
                    <h4>Experience</h4>
                    <p>
                      With the power of technologies like AI, AR/VR, IoT, you
                      can optimize your mobile CX (customer experience) to many
                      folds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faltu-box relative">
                <div className="faltu-box0 absolute">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930907/d8_udopet.png" alt="Increased Conversion" title="Increased Conversion" />
                </div>
                <div className="faltu-sard faltu-sard1">
                  <div className="faltu-head">
                    <h4>Increased Conversion</h4>
                    <h4>Rates</h4>
                    <p>
                      Improved CX will lead to more conversions, which in turn
                      will increase your sales and revenues..
                    </p>
                  </div>
                </div>
              </div>
              <div className="faltu-box relative">
                <div className="faltu-box0 absolute">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930906/d9_pqilry.png" alt="Brand Recognition" title="Brand Recognition" />
                </div>
                <div className="faltu-sard faltu-sard1">
                  <div className="faltu-head">
                    <h4>Brand Recognition</h4>
                    <p>
                      E-Commerce apps leads to enhanced brand awareness &
                      marketing while also empowering relationships with your
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faltu-card">
              <div className="faltu-box">
                <div className="faltu-box0 absolute">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930898/d10_esoahb.png" alt="Data Collection" title="Data Collection" />
                </div>
                <div className="faltu-sard faltu-sard1">
                  <div className="faltu-head">
                    <h4>Data Collection</h4>
                    <h4>and Analysis</h4>
                    <p>
                      Mobile eCommerce applications can help in collecting
                      insightful data about your customers like their persona,
                      nature, and much more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faltu-box">
                <div className="faltu-box0 absolute">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930898/d10_esoahb.png" alt="Highly Secure" title="Highly Secure" />
                </div>
                <div className="faltu-sard faltu-sard1">
                  <div className="faltu-head">
                    <h4>Highly Secure</h4>
                    <h4>Payment methods</h4>
                    <p>
                      With eCommerce app development you don’t have to worry
                      about frauders as the app integrates highly secure payment
                      methods.
                    </p>
                  </div>
                </div>
              </div>

              <div className="faltu-box">
                <div className="faltu-box0 absolute">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930898/d10_esoahb.png" alt="Round the Clock" title="Round the Clock" />
                </div>
                <div className="faltu-sard faltu-sard1">
                  <div className="faltu-head">
                    <h4>Round the Clock</h4>
                    <h4>User Support</h4>
                    <p>
                      Having an eCommerce app for your business that gives 24*7
                      user support can be convenient for your customers and will
                      hold them longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="solution_expertise">
          <div className="solution_expertise1">
            <h5>Our Expertise</h5>
            <p>
              The team at Kushel Digi develops scalable, next-gen, feature-rich
              eCommerce solutions to skyrocket your B2B & B2C businesses for
              better user- engagement.
            </p>
          </div>
          <div className="solution_expertise2">
            <div className="compliance_fact">
              <div className="compliance_fact_box compliance_fact_box1">
                <h3>Compliance Fit</h3>
                <p>
                  For scalable-driven architecture design, our eCommerce
                  application development teams create and deploy
                  HIPAA-compliant storage devices
                </p>
              </div>
              <div className="compliance_fact_box">
                <h3>AI-Powered Capabilities</h3>
                <p>
                  We redefine the eCommerce software solution space with
                  AI-powered chatbots and smart virtual assistants that give
                  tailored customer support on-demand.
                </p>
              </div>
            </div>
            <div className="compliance_fact">
              <div className="compliance_fact_box compliance_fact_box3">
                <h3>AR/VR Solutions</h3>
                <p>
                  Leverage our augmented and virtual reality development
                  solutions that have a stellar 360-degree virtual outlet tour
                  via a devoted AR application.
                </p>
              </div>
              <div className="compliance_fact_box compliance_fact_box4">
                <h3>Blockchain Enabled E-commerce</h3>
                <p>
                  We integrate Blockchain technology in the eCommerce app development software for decentralised marketplaces, transactions, and supply chain management.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ecomeee-solll">
          <div className="ecoome_sol_port pt-10">
            <img className="ecommi" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481132/ecoomi_ip4moz.png' alt="BigCommerce Portfolio" title="BigCommerce Portfolio" />

            <div className="big_pint dine-1234">
              <p>We create success stories.</p>
              <h3>BigCommerce Portfolio</h3>
            </div>
            <div className="mt-5">
              <div className="gting">
                <Splide
                  className="w-full"
                  aria-label="Our Services"
                  options={{
                    perPage: 1,
                    perMove: 1,
                    autoplay: true,
                    pauseOnHover: true,
                    type: "loop",
                    interval: 2200,
                    drag: true,
                  }}
                >
                  <SplideSlide>
                    <div className="kickta_big">
                      <div className="kickta_big1">
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480864/kikma_dyc44r.png' alt="the most compfortable recoil" title="the most compfortable recoil" />
                        <div className="headst_big">
                          <h3>the most <br />
                            compfortable<br />
                            recoil pads</h3>
                        </div>
                        <div className="kickma-arrow">
                          <a href="https://kickeezproducts.com/" target="_blank" rel="noopener noreferrer">
                            <button>
                              <span>View Website</span>
                              <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>

                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="kickta_big kickta_big11">
                      <div className="kickta_big1 kickta_big22">
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480926/worlich22_vkemor.png' alt="Fall/winter" title="Fall/winter" />
                        <div className="headst_big">
                          <h3>Fall/winter<br />
                            2023</h3>
                        </div>
                        <div className="kickma-arrow">

                          <a href="https://www.woolrich.com/us/en/" target="_blank" rel="noopener noreferrer">
                            <button>
                              <span>View Website</span>
                              <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                              </svg>
                            </button>
                          </a>
                        </div>


                      </div>

                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="kickta_big kickta_big111">
                      <div className="kickta_big1 kickta_big222">
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480961/spiti_ovw7h0.png' alt="Mix it up" title="Mix it up" />
                        <div className="headst_big">
                          <h3>Mix it up</h3>
                          <p>Find your look for your iPhone 14</p>
                        </div>
                        <div className="kickma-arrow">
                          <a href="https://speckproducts.com/" target="_blank" rel="noopener noreferrer">
                            <button>
                              <span>View Website</span>
                              <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>

                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="kickta_big kickta_big1111">
                      <div className="kickta_big1 kickta_big2222">
                        <img className="travisi" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480992/travisi_meoxum.png' alt="SHORT RESPONSE" title="SHORT RESPONSE" />
                        <div className="headst_big">
                          <h3>SHORT RESPONSE</h3>
                          <p>New colors have arrived in your</p>
                          <p>favorite short styles of the season.</p>
                        </div>
                        <div className="kickma-arrow">
                          <a href="https://www.travismathew.com/" target="_blank" rel="noopener noreferrer">
                            <button>
                              <span>View Website</span>
                              <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>

                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div>

        <div className="boost">
          <div className="boost_sect">
            <h3>Boost Your E-commerce Business Experience With Kushel Digi</h3>
            <p>Build power-packed eCommerce apps & connect with global customers.</p>
            <div className="boost_button">
              <button>  <Link href="/contact-us">Get in Touch </Link></button>
            </div>
          </div>
        </div>

        {/* <ContactForm1 /> */}
        <Website />

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480684/whatsapp_fuwawo.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
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

export default Solution;
