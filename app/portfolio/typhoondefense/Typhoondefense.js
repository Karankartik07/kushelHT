"use client";
// import "./ride.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./typhoon.css";

import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import Link from "next/link";
function Typhoon() {
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
        para: "Realizing the importance of a firm workflow foundation firsthand, we dedicate a separate chunk of work to researching, studying, and understanding your business's core needs and vision for a desired product or service.",
        points: [
          "Analyzing niches, competitors, & requirements",
          "Strategizing time and cost-efficient workflows",
          "Aiming for individually optimized results",
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
      title1: "Sites & Scopes",
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

      <link rel="canonical" href="https://www.kusheldigi.com/typhoondefense" />

      {/* first sectino */}
      <section className="case1firsec" id="AiPortfolioImage">
        {/* <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png"
          alt="kushel"
          className="case1fill"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622906/Group_1171279216_j6teud.png"
          alt="kushel"
          className="case1bg"
        /> */}
        <img
          src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746454198/home-banner-typhoon_ivzg2y.jpg"
          alt="kushel"
          className="case1fill"
        />

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <div>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745911384/typhoondefense_achn4u.webp"
                    alt="typhoon defense logo"
                  />
                </div>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Typhoon Defense is an ultimate firearm manufacturer that
                  blends the magic of innovation, creativity, and superior
                  craftsmanship. It is leading the Bigcommerce landscape by
                  designing unparalleled firearms.
                </p>
                <Link
                  className="btn-case-port"
                  href="https://typhoondefense.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
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
      <section className="case2secsec2" id="case2_Background_Port">
        <div className="case2seccont">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746537844/madfish-logo1_ghjavp.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>
            <p>
              Typhoon Defense implements exceptional expertise, innovative
              design, and supreme quality to build customer-centric products.
              This is a name to trust for precision engineering, reliability,
              and durability. The brand also delivers impressive customer
              service beyond your expectations so you can get the best for your
              shooting needs.
            </p>
            <p>
              Kushel Digi Solutions helps them achieve better results by
              developing their website and optimizing it for search engines to
              produce effective results. We get this project opportunity from{" "}
              <strong>MadFish Solutions.</strong>
            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744626323/Ellipse_2616_b05zg1.png"
          alt="kushel"
          className="c2el1"
        />
      </section>

      <div className="PortfolioChallenges">
        <div className="PortfolioChallengeMain">
          <h4> Challenges</h4>
          <p>
            {" "}
            Behind the completion of this project, there were multiple
            challenges. One of them was minimal online exposure. Other than
            that, the client's digital infrastructure lacked flexibility and a
            modern layout. These two factors were reducing competitiveness. Even
            the product listings weren’t up to the mark and this was an
            important factor to enhance the security.{" "}
          </p>
          <div></div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746514576/typhoon-solutions5_c5pvse.png"
            alt="kushel"
          />
        </div>
      </div>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2" id="typhoon_solution">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Kushel Digi Solutions is driving digital transformation for
              Typhoon Defense by utilizing innovative digital tools and{" "}
              <b>bigcommerce theme development</b> strategies. After analyzing
              the nature of their business, Our expert team creates a roadmap of
              how to build a strong online presence for them utilizing{" "}
              <b>bigcommerce website development</b> service. Along with that,
              we plan strategies to effectively optimize their site performance.
              Kushel Digi Solutions ensures that Typhoon Defense reaches its
              prospective audience effectively.{" "}
            </p>

            <p className="s3theeparas">
              It is following a strategic digital marketing approach to build
              brand visibility making Typhoon Defense more recognizable and
              accessible. This transformation is a game changer, helping the
              brand to engage with potential customers easily.
            </p>

            <p className="s3theeparas">
              Kushel Digi Solutions is not just promoting Typhoon Defense but
              also enhancing its positioning and credibility by implementing
              strategic <b>bigcommerce app development</b> solutions.
            </p>
          </div>

          <img
            // src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746516784/typhoon-solutions3_g3i3xm.png"
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746643324/Group_1171279260_1_lufqvo.png"
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
          pauseOnHover: true,
        }}
      >
        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746519647/design-phase-background-typhoon_odls52.jpg"
              alt="kushel"
            />
            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746519358/coduction-typhoon_aiy7af.png"
                  alt="kushel"
                  className="shadowbg2"
                  id="shonowfall"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_typhoon">
                <h4>Conducting Competitor Research and Analysis</h4>
                <p>
                  Competitor research and analysis build the foundation to
                  figure out the gaps in the current market and utilize the
                  right ideas to market the firearms. Kusheldigi figures out the
                  areas that need improvement and then formulates strategies to
                  stand out in the competition.
                  {/* Thus, Kusheldigi keeps Typhoon Defense ahead in the ever-evolving digital landscape using a data-driven approach and effectively executing <b>bigcommerce custom development</b> services */}
                  {/* It uses the end data from research to modify the website’s design, functionality, and content in one go. */}
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          {/* <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746519647/design-phase-background-typhoon_odls52.jpg"
              alt="kushel"
            />

            <div className="cas3s4con" id="cas3s4conn">
              <div className="bgshowdb2">
                
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746519358/secure-typroon_dybmuk.png"
                  alt="kushel"
                  className="shadowbg2"
                   id="shonowfalll"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_typhoon">
                <h4>Secure and Reliable Ecommerce Platform</h4>
                <p>
                Kusheldigi ensured that Typhoon Defense stays competitive and secure with a reliable ecommerce platform. It created a full-fledged ecommerce site based on <b>bigcommerce local theme development</b> to boost their sales and revenue. The website features SSL encryption, a secured payment process, responsive design, software updates, and much more. As the business keeps flourishing, the website will work adaptably according to the evolving market needs to bring long-term success. It will meet evolving customer expectations by keeping the website performance optimal. 

                </p>
              </div>
            </div>
          </section> */}

          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746519647/design-phase-background-typhoon_odls52.jpg"
              alt="kushel"
            />
            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746519358/secure-typroon_dybmuk.png"
                  alt="kushel"
                  className="shadowbg2"
                  id="shonowfall"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_typhoon">
                <h4>Secure and Reliable Ecommerce Platform</h4>
                <p>
                  Kusheldigi ensured that Typhoon Defense stays competitive and
                  secure with a reliable ecommerce platform. It created a
                  full-fledged ecommerce site based on{" "}
                  <b>bigcommerce local theme development</b> to boost their
                  sales and revenue. The website features SSL encryption, a
                  secured payment process, responsive design, software updates,
                  and much more. As the business keeps flourishing, the website
                  will work adaptably according to the evolving market needs to
                  bring long-term success.
                  {/* It will meet evolving customer expectations by keeping the website performance optimal. */}
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746519647/design-phase-background-typhoon_odls52.jpg"
              alt="kushel"
            />

            <div className="cas3s4con" id="imgPortfolio_Phone">
              <div className="cas3circldata2" id="case3Portfolio_typhoon">
                <h4>Maintenance and Support</h4>
                <p>
                  Post-website development stage, Kusheldigi takes care of the
                  maintenance and support part to optimize the website
                  performance. It works on resolving errors quickly so that
                  Typhoon Defense never has to worry about it. This eliminates
                  the error within seconds to run your business smoothly. With
                  24/7 technical support and a proactive approach, it maintains
                  stability and enhances long-term success.
                  {/* The Kushaldigi team continuously monitors website traffic and boosts loading speeds to enhance the user experience. */}
                </p>
              </div>
              <div className="bgshowdb2" id="imgPortfolio_Ai_Phone">
                <img
                  // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744632484/Group_1171281284_dpqrse.png"
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746803424/Group_1171279310_dkjyfg.png"
                  alt="kushel"
                  className="shadowbg2"
                />
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
              We’ll turn your custom tech solutions into powerful brands by
              crafting unique customer experiences at every digital touchpoint
              with:
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
          <p>
            Within the first few months of launch, Typhoon Defense noticed a
            significant increase in website traffic. The sales were rising,
            conversions turned double, and the platform became more scalable.
            This evolved digital presence positioned Typhoon Defense as a
            modern, reliable, and innovative firearm manufacturer.{" "}
          </p>
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
            <h4>Have a similar project in mind? </h4>
            <p>Discover how our expertise can benefit your project</p>
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
      <Footer />
    </div>
  );
}

export default Typhoon;
