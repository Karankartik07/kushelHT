"use client";
import React, { useEffect } from "react";

import Link from "next/link";

import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";

import "../../globals.css";
import Head from "next/head";

const projects = [
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216954/down1_kgzcrg.png",
    title1: "Topbrass tactical",
    title2: "E-commerce, Bigcomerce ",
    link: "/topbrasstactical",
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746541117/image_5_tw9wok.png",
    title1: "Graco Corporation",
    title2: "E-commerce, Bigcomerce ",
    link: "/graco-corp",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217009/down3_ucxpri.png",
    title1: "Sites & Scopes",
    title2: "E-commerce, Bigcomerce ",
    link: "/sitesandscopes",
  },
];

const Solenoid = () => {
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
          href="https://www.kusheldigi.com/solenoid-ninja"
        />
      </Head>

      <Navbar />

      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466127/pru3_g5s5nh.png"
                  className="pru3"
                  alt="solenoid-ninja logo"
                ></img>
                <p className="shoots_premium">
                  <span className="heightlisght_premium"> Given that </span> the
                  materials market is highly volatile, we are currently facing
                  extended lead times beyond the usual duration.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466166/opqweeeeeee_sk342j.png"
                    id="sim"
                    alt="img"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466215/opqweeeeeee2_ifxf28.png"
                    id="rotat"
                    alt="img"
                  ></img>
                </div>
                <Link
                  className="btn-case-port"
                  href="https://solenoid-ninja.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </div>
              <div className="right-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465585/solenoidfff_kuelry.png"
                  id="total-group"
                  alt="img"
                ></img>
              </div>
            </div>
            {/* ........................................ */}
            <div className="MadFish_press">
              <div className="MadFish-back">
                <div className="MadFish-back1">
                  <div className="MadFish_press_head">
                    <img
                      src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466295/madlogooooo_qfa43j.png"
                      alt="madlogooooo"
                    />
                  </div>
                  <div className="MadFish_press_para">
                    <p>
                      Materials market volatility has led to extended lead
                      times. Solenoid Ninja, in collaboration withc{" "}
                      <span>MadFish </span> Solutions, enhances your access to
                      expertise and innovation. Elevate your procurement
                      experience with us. Experience innovation like never
                      before, backed by our partnership with MadFish Solutions.
                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466353/mad5_zfip4i.png"
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
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465812/Group_1000004718_i84dou.png"
                    id="ux-safari"
                    alt="img"
                  ></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465850/Group_1000004715_tpdkn9.png"
                    id="web-safari"
                    alt="img"
                  ></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465883/Group_1000004716_kcepfr.png"
                    id="qa-safari"
                    alt="img"
                  ></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *********************************************** */}
        <div className="third-wireframe-homie-solenoid-s">
          <div className="inner-third-local-solenoid-s">
            <p>Wireframes</p>
            <div className="three-section-lab-solenoid-s">
              <div className="single_big-solenoid-s">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466082/hh9_kord2h.png"
                  id="pads-cats"
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
        </div>
        {/* ******************************************** */}
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
                  <p className="prompt-tip">Montserrat</p>
                </div>
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465913/Group_1000006500_1_ugrnng.png"
                  id="pals-circle"
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465943/hh10_hqhqt1.png"
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
                Solenoid Ninja was born out of a passionate engineer's desire to
                simplify and enhance the world of solenoid valves. Fueled by a
                deep understanding of industrial automation and a commitment to
                innovation, Solenoid Ninja set out to provide a comprehensive
                online platform that offers not only a wide range of
                high-quality solenoid valves but also valuable expertise and
                guidance. With a dedication to serving diverse industries and
                solving intricate fluid control challenges, Solenoid Ninja
                quickly established itself as a trusted source of solenoid
                solutions.
              </p>
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img
              className="stepback solenoid-stepback"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466009/hh13_huc3c1.png"
              alt="stepback"
            />
            <img
              className="stepback1 solenoid-stepback1"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465975/hh12_ij0naa.png"
              alt="stepback1"
            />
          </div>
        </div>
        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>Challenges & Solutions</h3>
          </div>
          <div className="challenge-story2 flex gap-3">
            <div className="challenge-box">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Solenoid Ninja encountered various challenges on its path to
                    becoming a prominent solenoid valve provider. They
                    encompassed navigating the complexities of the constantly
                    evolving industrial automation landscape, managing supply
                    chain disruptions, and maintaining consistent product
                    quality. Moreover, establishing a robust online presence and
                    fostering trust within a diverse customer base were critical
                    challenges in an intensely competitive market. However,
                    Solenoid Ninja's unwavering commitment to innovation and
                    customer satisfaction empowered the company to overcome
                    these obstacles and prosper.
                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box ml-3">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    In response to the challenges at hand, Solenoid Ninja
                    adopted a multifaceted approach. First, they diversified
                    their product range, expanding to encompass a wide variety
                    of solenoid valves tailored to meet the needs of diverse
                    industries. Additionally, they streamlined their supply
                    chain management, implementing strategies to mitigate
                    disruptions and ensure on-time deliveries.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Diversified product range</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Streamlined supply chain</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Quality assurance</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Online expertise</p>
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
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465534/trackent1_go22cp.png"
                alt="kick5"
              />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <img
              className=" relative z-10 about162 pick222"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466045/hh14_pshfou.png"
              alt="pick"
            />
          </div>
        </div>
        <div className="azib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  Solenoid Ninja's dedication to diversifying its product range,
                  streamlining its supply chain, and maintaining product quality
                  has led to increased customer satisfaction, reduced lead
                  times, and a stronger position as a trusted solenoid valve
                  provider in the competitive industrial automation market.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img
                    className="conjun"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466249/opqweeeeeee3_i2cpk8.png"
                    alt="conjun"
                  />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img
                className="soling1"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465629/soling1_ebqfkl.jpg"
                alt="soli"
              />
              <img
                className="soling1"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465671/soling2_zdmrks.jpg"
                alt="soli"
              />
              <img
                className="soling1"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465743/soling3_wzj01p.jpg"
                alt="soli"
              />
            </div>
          </div>
        </div>
        <div className="client-apperication">
          <h2>Client Appreciation</h2>
          <p>
            “Thank you Affle team for all your hardwork, patience and continuous
            support. The app is getting positive reviews and we hope to continue
            to improve and evolve the app. Looking forward to our continued
            growth.”
          </p>
          <h4>Sandeep Sharma</h4>
        </div>
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
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466393/whatsapp_onug09.png"
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
            />
          </button>
          <button onClick={callHandler}>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466433/telephone_g3zvoj.png"
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

export default Solenoid;
