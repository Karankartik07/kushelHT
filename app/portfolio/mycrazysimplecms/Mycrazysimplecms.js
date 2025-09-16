"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Link from "next/link";
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

const CrazyCMS = () => {
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
      <Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta
          property="og:title"
          content="Kushel Digi | Expert eCommerce Development Services"
        />
        <meta
          property="og:description"
          content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
        />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kushel Digi | Expert eCommerce Development Services"
        />
        <meta
          name="twitter:description"
          content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
        />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />

        <link
          rel="canonical"
          href="https://www.kusheldigi.com/mycrazysimplecms"
        />
      </Head>

      <Navbar />

      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads incheingh">
              <div className="left-section-kids">
                <img
                  src={
                    "https://res.cloudinary.com/ecommerce-website/image/upload/v1725976849/favicon_1_1_iprzaf.svg"
                  }
                  alt="mycrazysimplecms logo"
                ></img>
                <p className="shoots_premium kooo">
                  My Crazy Simple CMS is an user-friendly content management
                  system which is designed to simplify website management for
                  businesses of all sizes. It emowers users to create, edit, and
                  manage content without any technical expertise.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164002/omis_n83hlt.svg"
                    id="sim"
                    alt="img"
                  ></img>
                  <img
                    className="pokli"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164078/omis1_bvorfv.svg"
                    id="rotat"
                    alt="img"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164141/omis2_la92fb.svg"
                    id="rotat"
                    alt="img"
                  ></img>
                </div>
                  <Link
                  className="btn-case-port"
                  href="https://mycrazysimplecms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </div>
              <div className="right-section-kids">
                <img
                  className="trimmer"
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739163389/trimer_apxb7o.svg"
                  id="total-group"
                  alt="img"
                ></img>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">
              <div className="MadFish-back crazy-back">
                <div className="MadFish-back1">
                  {/* <div className="MadFish_press_head">
                <img src={madlogooooo} alt="madlogooooo" />              
              </div> */}
                  <div className="MadFish_press_para crazy_cms">
                    {/* <p>
                  Elevate your shooting comfort with KICK-EEZ, offering premium
                  American-made recoil pads and accessories. <span>MadFish</span>  Solutions
                  played a key role in bringing KICK-EEZ to life. Together,
                  we’ve redefined shooting comfort and precision, setting new
                  industry standards.
                </p> */}
                    <h3>Manage Your Website</h3>
                    <h3>with Ease – No Tech</h3>
                    <h3>
                      <span>Skills Required!</span>
                    </h3>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164312/lies_knj48x.svg"
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
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739163443/Group_1000004718_z5qvvk.png"
                    id="ux-safari"
                    alt="img"
                  ></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739163601/Group_1000004715_a72pso.png"
                    id="web-safari"
                    alt="img"
                  ></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740476804/Group_1000004716_qbwjdi.png"
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
            <div className="vl-chic vl-chic33">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Inter</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Desporm</p>
                </div>
                {/* <div className="medium-aa">
                  <p className="medium">Aa</p>
                  <p className="node-tip">Roboto</p>
                </div> */}
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739163658/Group_1000006500_1_yywdth.png"
                  id="pals-circle"
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img
              src={
                "https://res.cloudinary.com/ecommerce-website/image/upload/v1725980437/Group_1000006505_nfqk7l.svg"
              }
              id="gang"
              alt="img"
            />
          </div>
        </div>{" "}
        {/* <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
           
            <div className="kickds">
              <img className="kick_mart" src={kick5} alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <div className="about165">
              <img
                className="absolute about161 animate__animated animate__pulse animate__infinite"
                src={angrag}
                alt="kushel"
              />
            </div>
            <img
              className=" relative z-10 about162 pick222"
              src={pick2}
              alt="aa"
            />
          </div>
        </div> */}
        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
                My Crazy Simple CMS was created for ease and smoothness in
                managing websites by non-technical users and small businesses.
                This is supposed to be a platform where one may empower users to
                manage their websites without requiring any sort of coding,
                which in most circumstances is absent in the complex options
                available in CMS. They have chosen Kushel Digi Solutions to
                design and develop a scalable, intuitive CMS that could appeal
                to both beginners and advanced users.
              </p>
            </div>
          </div>
          {/* <div className="step-images flex items-center justify-center mt-20">
            <img className="stepback" src={stepback1} alt="stepback" />
            <img className="stepback1" src={stepback} alt="stepback1" />
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
                    Designing an intuitive interface that would consider both
                    the needs of the beginners and advanced users, without
                    overwhelming either group.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Ensuring the platform was highly scalable for more users and
                    increased websites to be managed.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Combining the powers of Python that allow more flexibility
                    on the backend with the strong performance and functionality
                    of Laravel.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Creating a robust content editor that offers flexibility but
                    remains easy to use, even for users with no technical
                    background.
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
                    We developed a user-centric interface that focuses on
                    simplicity that can allow users to manage their websites
                    easily along with advanced features for power users
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    The CMS has been developed using Python and Laravel to
                    ensure scalability of architecture, complementing the growth
                    in the user base of the platform.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    We have included a drag-and-drop content editor where no
                    coding is needed. This gives a user total control over
                    design and content on their website.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Our UX/UI team worked in such a way that the platform's
                    dashboard should be intuitive, clean, and easy to navigate
                    that can ensure seamless user onboarding and management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="goals-statgy">
          <h2>Goals and Strategies</h2>
          <ul>
            <li>Make it easier for customers to reach our company.</li>
            <li>
            Minimize misunderstandings about returns, exchanges, especially when choosing replacement products.
            </li>
            <li>Enhance the efficiency and effectiveness of our client service.
</li>
          </ul>
        </div> */}
        <div className="bg_crazy">
          <div className="bg_cms">
            <div className="bg_left">
              <img
                className="kpiu"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164574/fs_f3frw2.svg"
                alt="lojj"
              />
            </div>
            <div className="bg_right">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164623/lojj_i355y6.svg"
                className="llgg"
                alt="lojj"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164664/ellipse44_noomie.png"
                className="ep44"
                alt="kushel"
              />
            </div>
          </div>
        </div>
        {/* <div className="bg-video-wrap">
          <video src="/static/images/rima.mp4" loop muted autoPlay></video>
          <div className="overlay"></div>
          <img className="kini" src={kick5} alt="aa" />
        </div> */}
        <div className="azib kickazib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  This led to the development of My Crazy Simple CMS: an
                  impressively user-friendly platform that saw user adoption
                  increase by 30% in just a few months since the launch date.The
                  combination of Python and Laravel ensured scalability,
                  allowing the platform to seamlessly handle a growing user base
                  Users have praised the intuitiveness in design and find it
                  easy to navigate and manage the websites very easily without
                  requiring technical expertise. The result of this project was
                  a successful simplification of yet a powerful CMS which made
                  the management of websites as easy as possible for the user.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <div className="fopping">
                    <div className="spoing">
                      <img
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164356/kping1_bopri1.svg"
                        alt="kushel"
                      />
                      <p>Python</p>
                    </div>
                    <div className="spoing kint">
                      <img
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164437/kping_c2vncx.svg"
                        alt="kushel"
                      />
                      <p>Laravel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img
                className="sohhh"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164493/crazy1_otsyod.svg"
                alt="azib"
              />
              <img
                className="sohhh"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164534/crazy2_pdnjyu.svg"
                alt="azib"
              />
              {/* <img src={azib4} alt="azib" /> */}
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739163172/rel1_nqyk1x.png' alt="rel1" />
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739163216/rel2_nrjco0.png' alt="rel1" />
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
                  <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739163252/rel3_taz3o0.png' alt="rel1" />
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
        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img
              className="what-image-universal"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png"
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
            />
          </button>
          <button onClick={callHandler}>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png"
              alt="call-icon"
              title="call-icon"
            />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CrazyCMS;
