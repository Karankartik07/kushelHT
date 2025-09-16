"use client";

import React, { useState, useEffect } from "react";

// import { NavLink } from "react-router-dom";

import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import "../components/css/app2.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import "../../globals.css";

const projects = [
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217009/down3_ucxpri.png",
    title1: "Sites & Scopes",
    title2: "E-commerce, Bigcomerce ",
    link: "/sitesandscopes",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216979/down2_m0c8fa.png",
    title1: "Kickeez",
    title2: "E-commerce, Bigcomerce ",
    link: "/kick-eez",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746541118/image_3_dptpxb.png",
    title1: "A&I Parts Center",
    title2: "E-commerce, Bigcomerce ",
    link: "/aipartscenter",
  },
];

const TopBrassComponent = () => {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      setPerPage(2);
    }
    if (window.matchMedia("(max-width: 650px)").matches) {
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
  };

  return (
    <>
      <Navbar />

      <link
        rel="canonical"
        href="https://www.kusheldigi.com/topbrasstactical"
      />

      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458745/logoWh_gbgwzr.svg"
                  width="200"
                  alt="topbrasstactical logo"
                ></img>
                <p className="shoots_premium mt_top">
                  Top Brass sells everything from army clothes and footwear to
                  gun accessories, optics, tactical gear, and bags to make sure
                  the military personnel and outdoor enthusiasts have everything
                  they need.
                </p>
                <h3>Technologies Used</h3>

                <div className="main-box-logic flex">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458624/tim1_djoonz.svg"
                    id="sim"
                    alt="img"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458662/tim2_jcg2ku.svg"
                    id="rotat"
                    alt="img"
                  ></img>
                </div>
                <Link
                  className="btn-case-port"
                  href="https://topbrasstactical.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </div>
              <div className="right-section-kids">
                <img
                  className="ai_site"
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458701/topo_xp4gak.svg"
                  alt="img"
                ></img>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">
              <div className="MadFish-back">
                <div className="MadFish-back1">
                  {/* <div className="MadFish_press_head">
                                        <img src={madlogooooo} alt="madlogooooo" />
                                    </div> */}
                  <div className="MadFish_press_para">
                    <p>
                      Kushel Digi Solutions elated to taken up the work of Top
                      Brass to design and build a contemporary eCommerce
                      marketplace on the BigCommerce platform.to provide
                      optimized shopping experience for the military
                      professional and outdoor enthusiast.
                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458850/tele_h4aiiw.svg"
                    alt="MadFish"
                  />
                </div>
              </div>
            </div>
            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458311/Group_1000004718_daoc30.png"
                    id="ux-safari"
                    alt="img"
                  ></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458450/Group_1000004715_sjnwhb.png"
                    id="web-safari"
                    alt="img"
                  ></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458481/Group_1000004716_zvmrmj.png"
                    id="qa-safari"
                    alt="img"
                  ></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic vl_chic2">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">DM Sans</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">TT Mussels Trl</p>
                </div>
                {/* <div className="medium-aa">
                                    <p className="medium">Aa</p>
                                    <p className="node-tip">Roboto</p>
                                </div> */}
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458536/Group_1000006500_1_b5zq8p.png"
                  id="pals-circle"
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458914/zva_euor3u.svg"
              id="gang"
              alt="img"
            />
          </div>
        </div>{" "}
        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
                Top Brass was established with a vision of providing
                high-quality military and tactical gear not only to professional
                military but also to outdoor enthusiasts as well as other
                professionals who are tactical. Top Brass recognised the need to
                change and expand the reach of its business thus took the
                business online in an eCommerce manner to keep things seamless,
                friendly, and durable/accessible as synonymous with the
                products.
              </p>
            </div>
          </div>
          {/* <div className="step-images flex items-start salaruu  justify-center mt-20">
                        <img className="batleft heightcum" src={tii1} alt="stepback" />
                        <img className="batleft " src={tii2} alt="stepback1" />
                        <img className="batleft heightcum" src={tii3} alt="stepback1" />
                    </div> */}
        </div>
        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>Challenges & Solutions</h3>
          </div>
          <div className="challenge-story2 flex gap-4">
            <div className="challenge-box challenge-box2  ">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    To develop an organized, intuitive platform to showcase a
                    broad range of military products, from clothing to gun
                    accessories.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Ensure that customers can easily navigate through to find
                    certain products in a very vast catalog.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Incorporate real-time inventory updates within a dynamic
                    product line with frequent restocks.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    A secure and scalable platform able to accommodate sensitive
                    transactions and increased traffic during periods of high
                    demand.
                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box challenge-box2  ">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    BigCommerce was integrated to create a scalable and flexible
                    eCommerce platform for Top Brass with its unique product
                    offerings.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    A user-friendly interface was made by designing
                    categorization that is well-organized for army gear,
                    clothing, footwear, optics, and accessories.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Automation was put into place to live track inventory levels
                    in real time across all product lines.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Optimized Performance to ensure security and responsiveness
                    of the site on mobile devices, with seamless handling of
                    large volumes of traffic and transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
            <div className="kickds">
              <img
                className="kick_mart"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458745/logoWh_gbgwzr.svg"
                alt="kick5"
              />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <div className="about165">
              <img
                className="absolute about161 animate__animated animate__pulse animate__infinite"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458999/elle_s4hohz.svg"
                alt="kushel"
              />
            </div>
            <img
              className=" relative z-10 about162 pick222"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458960/seto_xpf6je.svg"
              alt="aa"
            />
          </div>
        </div>
        <div className="azib kickazib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  The new Top Brass eCommerce platform has given the
                  much-required extension to the reach of the company in making
                  its vast army and tactical products available to large numbers
                  of people. Ease of using the interface, including
                  categorization of the products, has simplified customers'
                  journeys for increased use and online sales. Real-time
                  inventory synchronization has minimized errors in stock, while
                  the process of order fulfillment has also been smoothened.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img
                    className="conjun"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458263/opqweeeeeee3_dpv1er.png"
                    alt="kushel"
                  />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740459049/skl1_aunlwp.svg"
                alt="azib"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740459091/skl2_qqr6nw.svg"
                alt="azib"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740459153/skl3_ja9vui.svg"
                alt="azib"
              />
            </div>
          </div>
        </div>
        {/* <div className="client-apperication">
                    <h2>Client Appreciation</h2>
                    <p>
                        “Thank you Affle team for all your hardwork, patience and continuous
                        support. The app is getting positive reviews and we hope to continue
                        to improve and evolve the app. Looking forward to our continued
                        growth.”
                    </p>
                    <h4>Matt Reeder</h4>
                </div> */}
        {/* <div className="other-project">
                    <h2 className="text-center ">OTHER PROJECTS</h2>
                    <Splide
                        aria-label="Our Services"
                        options={{
                            perPage: perPage,
                            perMove: 1,
                            autoplay: true,
                            pauseOnHover: true,
                            type: "loop",
                            interval: 2000,
                            drag: true,
                        }}
                    >
                        <SplideSlide>
                            <div className="other-card">
                                <div className="other-box">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458160/rel1_mhhgkk.png' alt="rel1" />
                                </div>
                                <div className="other-tox-para">
                                    <h3>RELY INNOVATION</h3>
                                    <p>
                                        Get peace of mind. install alarms that not only notify you
                                        of danger, but also clearly instructs you on what to do
                                        next.
                                    </p>
                                    <Link href="/relysafety">
                                        <button className="kick_eez-btn">View</button>
                                    </Link>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="other-card">
                                <div className="other-box other-box1">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458200/rel2_cihpad.png' alt="rel1" />
                                </div>
                                <div className="other-tox-para">
                                    <h3>PRO TRUCKS</h3>
                                    <p>
                                        Aftermarket suspension lift kits, leveling kits and
                                        accessories for 4X4 off-road truck and jeep enthusiasts
                                    </p>
                                    <Link href="/protrucksandcars">
                                        <button>View</button>
                                    </Link>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="other-card">
                                <div className="other-box other-box3">
                                    <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740458230/rel3_rmixzh.png' alt="rel1" />
                                </div>
                                <div className="other-tox-para">
                                    <h3>SOLENOID NINJA</h3>
                                    <p>
                                        Due to high volatility in the materials market we are
                                        currently experiencing longer than normal lead times.
                                    </p>
                                    <Link href="/solenoid-ninja">
                                        <button>View</button>
                                    </Link>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div> */}
        <section className="sc2sevensec">
          <div className="sc2sevnconta">
            <div className="sc2sev_head">
              <h2>Related Projects</h2>
              <p></p>
            </div>

            <div className="sc2_Sev_projects">
              {projects?.map((project, index) => (
                <div key={index} className="singlprojseve">
                  <img src={project?.img} alt="kushel" />

                  <div className="seven_titls">
                    <p className="sep1">{project?.title1}</p>
                    <p className="sep2">{project?.title2}</p>
                  </div>

                  <a href={project?.link}>
                    {" "}
                    <button>
                      <span>Case study</span>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="req">
          <div className="req-sect">
            <h3>
              Would You Like To Talk To <br /> About Your Project?
            </h3>
            <p>
              {" "}
              You can send us the details of your project, and a member of our
              team will contact you shortly.
            </p>

            <button className="req-button">
              <Link href="/contact-us">
                Start a conversation{" "}
                <img
                  // width={13}
                  className=" inline ml-2 arrow-icon"
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180293/arrow4_rxxlsw.png"
                  alt="alik"
                />
              </Link>
            </button>
          </div>
        </div>
        <Footer />
        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img
              className="what-image-universal"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401400/whatsapp_qknuap.png"
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
            />
          </button>
          <button onClick={callHandler}>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401442/telephone_rg2izx.png"
              alt="call-icon"
              title="call-icon"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBrassComponent;
