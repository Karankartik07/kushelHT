"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";

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

const Relysafe = () => {
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };

  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const generateMetadata = ({ params }) => ({
    title:
      "Rely Innovation | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how Rely Innovation boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  });

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription
      ? (metaDescription.content = description)
      : document.head.insertAdjacentHTML(
          "beforeend",
          `<meta name="description" content="${description}">`
        );
  }, []);
  return (
    <>
      <Navbar />

      <link rel="canonical" href="https://www.kusheldigi.com/relysafety" />

      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427666/pouo_qmi6uz.png"
                  className="pru1"
                  alt="relyinnovation logo"
                ></img>
                <p className="shoots_premium">
                  <span className="heightlisght_premium">Rely Innovation </span>
                  delivers cutting-edge and user-friendly safety technology
                  solutions, empowering both organisations and individuals to
                  safeguard their most vital assets.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427697/opqweeeeeee_kmcs1y.png"
                    id="sim"
                    alt="img"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427745/opqweeeeeee2_zftyak.png"
                    id="rotat"
                    alt="img"
                  ></img>
                </div>
                 <Link
                  className="btn-case-port"
                  href="https://relysafety.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </div>
              <div className="right-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427272/hh15_hfjbpz.png"
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
                      src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427822/madlogooooo_uho1ek.png"
                      alt="madlogooooo"
                    />
                  </div>
                  <div className="MadFish_press_para">
                    <p>
                      Find peace of mind with smart alarms powered by Rely
                      Innovation, seamlessly integrated by <span>MadFish</span>{" "}
                      Solutions. Elevate your security to a whole new level with
                      our expertise. Choose the future of safety today and trust
                      in Rely Innovation, partnered with MadFish Solutions
                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427862/mad3_tcpqk2.png"
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
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427108/Group_1000004718_wjsndr.png"
                    id="ux-safari"
                    alt="img"
                  ></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427203/Group_1000004715_xv2748.png"
                    id="web-safari"
                    alt="img"
                  ></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427236/Group_1000004716_ohijch.png"
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
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427633/hh16_ilemyj.png"
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
                  <p className="roboto-tip">Acumin Pro</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Lato</p>
                </div>
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427595/Group_1000006500_1_opopl8.png"
                  id="pals-circle"
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427307/hh17_csfvgj.png"
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
                Rely Innovations, the safety solutions division of National
                Presto Industries, Inc., has a rich history encompassing three
                distinct product categories. Rusoh, with its groundbreaking
                Rusoh® Eliminator® fire extinguisher, revolutionised fire safety
                as the first self-maintained extinguisher. OneEvent Technologies
                provides early warning systems for potential disasters, while
                Rely Innovations offers unique bilingual voice and digital
                display carbon monoxide alarms.Rely Innovations continually
                innovates to empower organisations and individuals to protect
                what matters most through intuitive safety technology solutions.
              </p>
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img
              className="stepback solenoid-stepback1"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427340/hh18_pptaew.png"
              alt="stepback"
            />
            <img
              className="stepback1 solenoid-stepback1"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427396/hh19_qsapjv.png"
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
                    Rely Innovation has faced several challenges while striving
                    to offer cutting-edge safety technology solutions. These
                    challenges encompass staying at the forefront of rapidly
                    evolving safety technology, ensuring compliance with
                    ever-changing industry regulations, and effectively
                    communicating the value of its innovative products to a
                    diverse market. Striking the right balance of innovation
                    with market demands while maintaining a competitive edge in
                    the safety technology sector is an ongoing challenge.{" "}
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
                    Their approach involves leveraging artificial intelligence
                    and machine learning to optimize processes, create
                    predictive analytics, and enhance decision-making. This
                    ultimately empowers businesses to maintain competitiveness
                    and agility in today’s fast-paced world. With a dedicated
                    focus on user-centric design, Rely Innovation ensures that
                    its solutions are effective and user-friendly, making
                    technology accessible to a broader audience. <br />
                    Highlighted Products:
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    OneEvent® System: Cellular refrigeration monitoring with
                    Thermo Heartbeat™{" "}
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Rusoh® Eliminator®: Owner-maintained fire extinguisher and
                    specialized solutions.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Carbon Monoxide Alarms: Bilingual voice alerts and digital
                    display.
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
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427149/trackent2_jmpfea.png"
                alt="kick5"
              />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <img
              className=" relative z-10 about162 pick222"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427439/hh20_y3fb7s.png"
              alt="kick"
            />
          </div>
        </div>
        <div className="azib azibbb">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  Rely Innovations has achieved remarkable results through its
                  innovative solutions, encompassing cellular refrigeration
                  monitoring with early alerts to prevent breakdowns,
                  groundbreaking owner-maintained fire extinguishers for
                  specialized fire protection, and enhanced home safety with
                  bilingual voice alerts and digital displays in their Carbon
                  Monoxide Alarms. These solutions collectively reflect their
                  commitment to safeguarding businesses and homes while
                  leveraging cutting-edge technology for optimal efficiency and
                  security.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img
                    className="conjun"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427783/opqweeeeeee3_uomaqp.png"
                    alt="conjun"
                  />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img
                className="soling1"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427489/hh21_zjzif2.png"
                alt="soling"
              />
              <img
                className="soling1"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427529/hh22_z1qni4.png"
                alt="soling"
              />
              <img
                className="soling1"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739427563/hh23_abucdf.png"
                alt="soling"
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
          <h4>Matt Reeder</h4>
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
        <Footer />
        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img
              className="what-image-universal"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423798/whatsapp_yiaqit.png"
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
            />
          </button>
          <button onClick={callHandler}>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423855/telephone_bcbfsw.png"
              alt="call-icon"
              title="call-icon"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Relysafe;
