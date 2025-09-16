"use client";
// import "./ride.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./BlackRhino.css";

import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import Link from "next/link";
function Blackrhinoconcealment() {
  const d1 = [
    {
      title1: "Industries",
      title2: "E-commerce",
    },
    {
      title1: "Client Location",
      title2: "United States",
    },
    {
      title1: "Key Technologies",
      title2: "BigCommerce",
    },
  ];

  const d2 = [
    {
      title: "Discovery Phase",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216631/c2d1_j5clbp.png",
        title: "Discovery Phase",
        para: "This phase is the foundation of a successful project. We focus on having a deep understanding about your business, target audience and goals to ensure that our solutions align with your business goal.",
        points: [
          "In-depth Market Research",
          "Requirement Analysis",
          "Strategic Planning for effective execution ",
        ],
      },
    },
    {
      title: "UX/UI Design",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216874/c1bg5_wnepdj.png",
        title: "UX/UI Design",
        para: "We believe in user-centric design principles and to achieve this we design engaging and user friendly interfaces that align with your brand's identity. ",
        points: [
          "User Journey Mapping",
          "Brand Identity Integration",
          "Responsive Design",
        ],
      },
    },
    {
      title: "Web Development",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216850/c1bg4_wxl6sh.png",
        title: "Web development",
        para: "Our development team is always committed to bringing your vision to life by integrating the latest technologies and best practices to build a scalable eCommerce platform.",
        points: ["Customized Solutions", "Optimized Code", "Agile Approach"],
      },
    },
    {
      title: "Testing Automation",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216817/c1bg3_zabfta.png",
        title: "Testing Automation",
        para: "We thoroughly test every feature on the platform, using automation to deliver reliability, security, and an error-free experience before the user's eyes in front of its launch.",
        points: [
          "Comprehensive Testing",
          "Automated Quality Assurance",
          "User Acceptance Testing",
        ],
      },
    },
    {
      title: "Product-to-market launch",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216787/c1bg2_eog7dh.png",
        title: "Product-to-market launch",
        para: "In this final phase of development, we introduce your platform to the market and ensure a smooth and impactful launch that maximizes visibility and customer engagement.",
        points: [
          "Go-to-Market Strategy",
          "Performance Monitoring",
          "Ongoing Support",
        ],
      },
    },
  ];

  const projects = [
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216954/down1_kgzcrg.png",
      title1: "Topbrass tactical",
      title2: "E-commerce, Bigcomerce ",
      link: "/topbrasstactical",
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216979/down2_m0c8fa.png",
      title1: "Kickeez",
      title2: "E-commerce, Bigcomerce ",
      link: "/kick-eez",
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217009/down3_ucxpri.png",
      title1: "Sites And Scopes",
      title2: "E-commerce, Bigcomerce ",
      link: "/sitesandscopes",
    },
  ];

  const [selectS4, setSelectS4] = useState(0);
  const [selectdata, setSelectdata] = useState(d2[0].data);
  const [animationDirection, setAnimationDirection] =
    useState("slide-in-right");

  const handleSelectionChange = (index) => {
    setAnimationDirection("slide-out-left");

    setTimeout(() => {
      setSelectS4(index);
      setSelectdata(d2[index].data);
      setAnimationDirection("slide-in-right");
    }, 300);
  };

  return (
    <div className="case1wrap home-main">
      <Navbar />

      <link
        rel="canonical"
        href="https://www.kusheldigi.com/blackrhinoconcealment"
      />

      {/* first sectino */}
      <section className="case1firsec">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png"
          alt="kushel"
          className="case1fill"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744634660/Rectangle_367_1_lyr9tk.png"
          alt="kushel"
          className="case1bg"
        />

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <div>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744634586/Group_1171279232_zsu9e3.png"
                    alt="Black Rhino Concealment logo"
                  />
                </div>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Black Rhino Concealment is an esteemed brand of firearms
                  holsters and tactical gear. Since 2014, it has been a
                  trailblazer for offering custom Kydex holsters and
                  accessories.
                </p>
                {/* <Link
                  className="btn-case-port"
                  href="/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link> */}
              </div>
            </div>

            {/* secont */}
            <div className="case1secbot">
              {d1?.map((d, index) => (
                <div key={index} className="singleca1bt">
                  {/* left */}
                  <div className="sli1left">
                    <p>{d?.title1}</p>
                    <h3>{d?.title2}</h3>
                  </div>

                  {index != 2 && <p className="horizline"> </p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* secon section  */}
      <section className="case2secsec2" id="case2BlackRhino">
        <div className="case2seccont">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746537844/madfish-logo1_ghjavp.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>

            <p>
              With the years of reputation it has built on craftsmanship and
              customized solutions, the brand is producing concealed carry
              equipment. It is blending innovation and precision perfectly to
              deliver a seamless experience to buyers. The brand is giving a 10%
              discount too for all the military, police, and first responders.
              <p>
                Being on the path of growth, its product demand is soaring,
                Black Rhino has consistently proved to be at the digital
                forefront in the Kydex holster provider. However, it was looking
                to improve the digital shopping experience, and this is when
                Kushel Digi Solutions stepped in to help them. We revamped the
                ecommerce presence and gave it a fresh look. Our expert team
                prepared a robust plan of action to envision a custom ecommerce
                solution for the client.<b>Madfish</b> offered us this
                opportunity which we are grateful for.
              </p>
            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744634586/Ellipse_2616_1_c7fcgl.png"
          alt="kushel"
          className="c2el1"
        />
      </section>

      {/* ======================== */}

      <div className="PortfolioChallenges">
        <div className="PortfolioChallengeMain">
          <h4> Challenges</h4>
          <div>
            <h5>1.A dated user interface lacking visual clarity.</h5>
            <h5>
              2.Poor product categorization and lack of filtering options.
            </h5>
            <h5>3.Slow loading times and poor mobile experience.</h5>
            <h5>
              4.Absence of modern key elements and third-party integrations.{" "}
            </h5>
            <h5>Unsatisfactory user-interface.</h5>

            <h5>
              5.Addressing these challenges required a thoughtful approach that
              our team implemented to align it with the modern ecommerce needs.{" "}
            </h5>
          </div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            // src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746785005/Group_1171279298_a4is5k.png"
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746514576/2nd-A-challenges_hdngwv.png"
            alt="kushel"
          />
        </div>
      </div>
      {/* =========================== */}

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2" id="c3_BlackRhino_port">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Once all challenges were on the plate, wes started designing the
              full-fledged mobile eCommerce website. From designing the UI/UX to
              Figma and store on BigCommerce, everything was done with utmost
              perfection.
            </p>

            {/* <p className="s3theeparas">
              {" "}
              The new BigCommerce website for Gordy & Sons needed to successfully integrate their graphical point-of-sale environment and inventory management system, CounterPoint. It was critical that the two systems communicated seamlessly to ensure accurate, real-time data for product inventory, orders, and customer detail.

            </p> */}
          </div>

          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744635666/Group_1171281285_1_klawsb.png"
            alt="kushel"
            className="c3antoimg"
          />
        </div>
      </section>

      {/* fourth  section  */}

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: false,
          pauseOnHover: false,
        }}
      >
        {/* <SplideSlide>
          <section className="case3secfour">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744634602/Rectangle_367_h4dnp4.png"
              alt="kushel"
            />
            <div className="cas3s4con" id="case3_Black_PortCircle">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744636080/Group_1171281286_1_b2cgzf.png"
                  alt="kushel"
                  className="shadowbg2" id="caBlack_PortCircle"
                />
              </div>

              <div className="cas3circldata2" id="black_port_circle">
                <h4>Custom UI/UX Design</h4>
                <p>
                  We crafted a modern and responsive design on Figma while keeping a clean layout to reflect Black Rhino’s brand identity. Our primary focus was on intuitive product navigation and mobile responsiveness. The design was structured to ease navigation for the users. One of the most important goal we tried to cover is simplifying the buying journey.


                </p>
              </div>
            </div>
          </section>
        </SplideSlide> */}

        {/* <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744634602/Rectangle_367_h4dnp4.png"
              alt="kushel"
            />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744635444/Group_1171281288_s4e31o.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="black_port_circle">
                <h4> BigCommerce Migration & Optimization</h4>
                <p>
                  Our team moved the site to BigCommerce for better performance. This platform supports headless ecommerce development that can contribute to the growth of the brand at a significant level. The new setup led to many improvements like lightning-fast performance and scalable architecture. We also made the shopping experience seamless for all the device users.

                </p>
              </div>
            </div>
          </section>
        </SplideSlide> */}
        {/* 
        <SplideSlide>
          <section className="case3secfour2">
            <img loading="lazy" className="case4bggirl" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744634602/Rectangle_367_h4dnp4.png" alt="kushel" />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744635444/Group_1171281290_o1epgp.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="black_port_circle">
                <h4>Smart Integrations  </h4>
                <p>
                  We also implemented smart integrations via BigCommerce robust app ecosystem. Our experts integrated CRM tools, inventory management, SEO enhancements, and search filters for an unparalleled performance.

                </p>
              </div>
            </div>
          </section>
        </SplideSlide> */}

        <SplideSlide>
          <section className="case3secfour">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746523673/design-phase2_ztjdex.jpg"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="">
                <img
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747158480/Group_1171281286_1_b2cgzf_we0mgd.png"
                  id="bgshowdb12"
                />
                {/* <img loading="lazy" src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746710597/Group_1171279306_o1qdhn.png" alt="kushel" className="ca2insideimg adjustheighimg" /> */}
                {/* <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217032/shadowbg1_eaz1s4.png" alt="kushel" className="shadowbg1" /> */}
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4>Custom UI/UX Design</h4>
                <p>
                  We crafted a modern and responsive design on Figma while
                  keeping a clean layout to reflect Black Rhino’s brand
                  identity. Our primary focus was on intuitive product
                  navigation and mobile responsiveness. The design was
                  structured to ease navigation for the users. One of the most
                  important goal we tried to cover is simplifying the buying
                  journey.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour" id="case3secfour22">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746523673/design-phase2_ztjdex.jpg"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747158005/human_q4erqd.png"
                  id="bgshowdb12"
                />
                {/* <img loading="lazy" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746454204/e-commerce-development_wu34yd.png" alt="kushel" className="ca2insideimg adjustheighimg" />
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217032/shadowbg1_eaz1s4.png" alt="kushel" className="shadowbg1" /> */}
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4> BigCommerce Migration & Optimization</h4>
                <p>
                  Our team moved the site to BigCommerce for better performance.
                  This platform supports headless ecommerce development that can
                  contribute to the growth of the brand at a significant level.
                  The new setup led to many improvements like lightning-fast
                  performance and scalable architecture. We also made the
                  shopping experience seamless for all the device users.
                </p>{" "}
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746523673/design-phase2_ztjdex.jpg"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="">
                {/* <img loading="lazy" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784464/Group_1171279316_nc1yiv.png" alt="kushel" className="ca2insideimg addheightimage" /> */}
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747158480/Group_1171281286_1_b2cgzf_we0mgd.png"
                  alt="kushel"
                  id="bgshowdb12"
                />
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4>Smart Integrations </h4>
                <p>
                  We also implemented smart integrations via BigCommerce robust
                  app ecosystem. Our experts integrated CRM tools, inventory
                  management, SEO enhancements, and search filters for an
                  unparalleled performance.
                </p>{" "}
              </div>
            </div>
          </section>
        </SplideSlide>
      </Splide>

      {/* fivth  section  */}
      <section className="case2fivsec">
        <div className="c2fivsecont">
          {/* top  */}
          <div className="c2fivtopsec">
            <h4>How we build the E-Commerce development Process</h4>
            <p>
              Kushel Digi committed to transform your tech solutions into
              impactful brands by ensuring unique customer experiences at every
              digital touchpoint through our structured process.
            </p>
          </div>

          {/* bbottm  */}
          <div className="c22fivbotsec">
            {/* Left Section */}
            <div className="c3fivbtoleft">
              {d2?.map((d2Item, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectionChange(index)}
                  className={`${
                    selectS4 === index && "addthsomfbg"
                  } cursor-pointer`}
                >
                  {d2Item?.title}
                </p>
              ))}
            </div>

            {/* Right Section with Animation */}
            <div className={`c2fibbotrigh ${animationDirection} `}>
              <img
                loading="lazy"
                src={selectdata?.img}
                className="selectdataimg"
                alt="kushel"
              />
              <div className="serigh_macont">
                <h4>
                  <span>0{selectS4 + 1}/</span> {selectdata?.title}
                </h4>
                <p className="sledatapar">{selectdata?.para}</p>
                <ul>
                  {selectdata?.points?.map((point, index) => (
                    <li key={index}>
                      <span>
                        <TiTick className="TiTickfds" />
                      </span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sliderbotse">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                autoplay: true,
                interval: 3000,
                pagination: true,
                arrows: false,
                pauseOnHover: false,
              }}
            >
              {d2?.map((item, index) => (
                <SplideSlide key={index}>
                  <div className={`c2fibbotrigh`}>
                    <img
                      src={item?.data?.img}
                      className="selectdataimg"
                      alt="kushel"
                    />

                    <div className="serigh_macont">
                      <h4>
                        <span>0{index + 1}/</span> {item?.data?.title}
                      </h4>

                      <p className="sledatapar">{item?.data?.para}</p>

                      <ul>
                        {item?.data?.points?.map((point, index) => (
                          <li key={index}>
                            <span>
                              <TiTick className="TiTickfds" />
                            </span>{" "}
                            {point}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>

      <div className="Mainresult_Portfolio">
        <div className="result_Portfolio">
          <h5>Result & Impact</h5>
          {/* <h6>
  The improvement in the website led to significant changes in order placement, more customer flow, and streamlined operation. 
  </h6> */}
          <ul>
            <li>
              TBounce ratings started falling and conversion rate increased.
            </li>
            <li>
              User experience turned better and this was visible with more
              traffic coming on the site.{" "}
            </li>
            <li>
              Retention rate got better as automated inventory changed the way
              users were interaction with the product catalog.{" "}
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      {/* six section  */}
      <section className="cs2sexiesec">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216672/similarl1_kq1btu.png"
          alt="kushel"
          className="similarl1"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216703/similarl2_yt5kqi.png"
          alt="kushel"
          className="similarl2"
        />

        <div className="c2sixconta">
          <div className="cssixtop">
            <h4>Got a new project idea? Let’s make it happen! </h4>
            <p>
              See how our specialized approach can drive your project forward
              with impactful results
            </p>
          </div>

          <div className="csizbot">
            <a href="/contact-us">
              <button>
                <span>Start a conversation</span>
              </button>
            </a>
            {/* <p>Or Start a conversation</p> */}
          </div>
        </div>
      </section>

      {/* seven section  */}
      <section className="sc2sevensec">
        <div className="sc2sevnconta">
          <div className="sc2sev_head">
            <h2>Related Projects</h2>
            <p></p>
          </div>

          <div className="sc2_Sev_projects">
            {projects?.map((project, index) => (
              <div key={index} className="singlprojseve">
                <img loading="lazy" src={project?.img} alt="kushel" />

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
      <Footer />
    </div>
  );
}

export default Blackrhinoconcealment;
