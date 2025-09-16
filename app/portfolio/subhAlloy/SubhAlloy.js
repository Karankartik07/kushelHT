"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";

import Head from "next/head";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";

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
const SubhAlloys = () => {
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
      </Head>

      <Navbar />
      {/* <helmet> */}
      <link rel="canonical" href="https://www.kusheldigi.com/kick-eez" />
      {/* </helmet> */}
      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads last-kick-pad incheingh1">
              <div className="left-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460708/subh_tobjrf.svg"
                  alt="img"
                ></img>
                <p className="shoots_premium kooo">
                  Shubhalloys buys and sells iron cuttings as per the demand
                  requirement of their clients. Traditionally, the company was
                  operating with manual processes for ordering and transactions,
                  which was very time-consuming and tended to show several
                  inefficiencies.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460629/omis_vemej2.svg"
                    id="sim"
                    alt="img"
                  ></img>
                  <img
                    className="pokli"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461094/priyajan1_x4oaox.svg"
                    id="rotat"
                    alt="img"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461134/priyajan2_xz7lcm.svg"
                    id="rotat"
                    alt="img"
                  ></img>
                </div>
                {/* <Link
                  className="btn-case-port"
                  href="/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link> */}
              </div>
              <div className="right-section-kids ramit">
                <img
                  className="sotal-group fotal-group"
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460669/fast_br7yb2.svg"
                  id="total-group"
                  alt="img"
                ></img>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">
              <div className="MadFish-back crazy-back">
                <div className="MadFish-back1">
                  <div className="MadFish_press_para crazy_cms">
                    <p>
                      Kushel Digi Solutions is excited to taken up the project
                      of Shubhalloys to develop a custom software platform that
                      automates and streamlines their buying and selling
                      operations.
                    </p>
                    {/* <h3>Empower Yourself to</h3>
                    <h3>Easily <span>Modify Your</span> </h3>
                    <h3><span>Website</span></h3> */}
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img
                    className="subh_img"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460775/testjpg_olkdwb.svg"
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
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460334/Group_1000004718_sj24jc.png"
                    id="ux-safari"
                    alt="img"
                  ></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460375/Group_1000004715_ggew67.png"
                    id="web-safari"
                    alt="img"
                  ></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460409/Group_1000004716_qd1fj4.png"
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
            <div className="vl-chic">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Gilroy</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Gilroy</p>
                </div>
                {/* <div className="medium-aa">
                  <p className="medium">Aa</p>
                  <p className="node-tip">Roboto</p>
                </div> */}
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460442/Group_1000006500_1_rhvxs0.png"
                  id="pals-circle"
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460815/mr_ve3pgb.svg"
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
                Shubhalloys approached Kushel Digi Solutions with the need to
                find a solution to automate their iron-cutting selling process.
                Conventionally, they were into tons of manual work, right from
                taking orders to filling the requirements of the clients. They
                wanted a system where their clients can log in, place orders,
                and track their request status directly via some digital
                platform. This shall reduce the need for manual tasks, increase
                efficiency, and make the interaction experience more seamless
                for their clients.
              </p>
            </div>
          </div>
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
                    Shubhalloys relied on the outdated ways of order management
                    and fulfilling customer requirements, which were inefficient
                    to scale.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Create an easy-to-use interface that will ensure seamless
                    adaption of the software by both Shubhalloys staff and
                    clients.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Integration of software seamlessly with their existing
                    operations while enabling customers to log on and interact
                    with the system in real time.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    The system had to be scalable to grow with an
                    ever-increasing client base for Shubhalloys and handle
                    increased volumes of transactions.
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
                    We developed a software platform using React.js in the front
                    and Node.js at the back, automating the buying and selling
                    of iron cuttings.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    The software makes it easy for Shubhalloys' clients to
                    browse, place orders, and track their purchases.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    The software lets clients interact in real time with the
                    inventory of Shubhalloys.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    We used Node.js to create the back-end for a system that
                    would be able to handle Shubhalloys' operations as they were
                    but also support future needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_crazy11">
          <div className="bg_cms">
            <div className="bg_left">
              <img
                className="kpiu11"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460848/prek1_jjt5jh.svg"
                alt="lojj"
              />
            </div>
            <div className="bg_right">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460891/prek2_nk7mb9.svg"
                className="llgg"
                alt="lojj"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460923/prek3_x7v8r4.svg"
                className="ep44 ep455"
                alt="kushel"
              />
            </div>
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
                  Automation significantly raised the efficiency of Shubhalloys'
                  operations by removing manual handling and thus reducing
                  errors in order management. The client experience has also
                  become seamless, with clients logging in themselves and
                  placing direct orders through the system. Greater satisfaction
                  among customers translates into repeat business. This scalable
                  platform ensures Shubhalloys will be able to meet the demands
                  for growth from their clients without a degrade in
                  performance.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <div className="fopping">
                    <div className="spoing">
                      <img
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460954/nodes11_enp8zn.svg"
                        alt="kushel"
                      />
                      <p>Node Js</p>
                    </div>
                    <div className="spoing kint">
                      <img
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460988/reacts11_nymoom.svg"
                        alt="kushel"
                      />
                      <p>React</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img
                className="sohhh"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461028/srikant_euqrgi.svg"
                alt="azib"
              />
              <img
                className="sohhh"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740461063/srikant1_e0evmu.svg"
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460223/rel1_j208ol.png' alt="rel1" />
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460263/rel2_i8y9cn.png' alt="rel1" />
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
                  <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460298/rel3_f3zql8.png' alt="rel1" />
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
      <Footer />
    </>
  );
};

export default SubhAlloys;
