"use client";
// import "./ride.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./graco-corp.css";

import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import Link from "next/link";
function Graco() {
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

      <link rel="canonical" href="https://www.kusheldigi.com/graco-corp" />

      {/* first sectino */}
      <section className="case1firsec" id="AiPortfolioImage">
        <img
          src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746454195/Garcoo-homebanner_odvhrn.jpg"
          alt="kushel"
          className="case1fill"
        />
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

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <div>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745914642/graco_corporation_logo_1705399297__51656_o9u82r.webp"
                    alt="graco-corporation logo"
                  />
                </div>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Graco Corporation is the global leader in manufacturing fluid
                  handling products.
                </p>
                <Link
                  className="btn-case-port"
                  href="https://graco-corp.com/"
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
              Adhering to the quality, the company is known for its cutting-edge
              innovation, hardware, and industrial equipment solutions. It has
              built a strong reputation based on customer satisfaction.{" "}
            </p>
            <p>
              The brand is catering to the needs of individual consumers as well
              as businesses. Its robust supply chain enables the sale of an
              extensive range of products. While it has already established its
              digital footprint and is constantly scaling,{" "}
              <b> Kushel Digi Solutions </b> stepped in to redesign the digital
              store. <b>MadFish Solutions </b>offered us this project which we
              successfully implemented with our efforts.
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
            Graco’s website featured an old-fashioned website layout. The
            products were placed in a cluttered position, and the response times
            were low, too.{" "}
          </p>
          <br />
          <p>
            Apart from them, the site was lacking some advanced features like
            product filtering, searchability, inventory tracking, and mobile
            optimization.{" "}
          </p>
          <br />
          <p>
            To tackle the above challenges, we required a strategic roadmap. Our
            team ensured the design of an effective roadmap to achieve the
            website improvement goals.{" "}
          </p>
          <div></div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746643908/Group_1171279265_1_wuvyh6.png"
            // src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746523269/garcoo-challenges_fd93as.png"
            alt="kushel"
          />
        </div>
      </div>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2" id="graco_solution">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Being aware of the challenges, we knew what solutions needed now
              to fix the websites. We had to work on the design,{" "}
              <b>ecommerce development</b>, and building a perfect{" "}
              <b>B2B commerce platform</b>.
            </p>

            <p className="s3theeparas">
              For this, designing a plan from beginning to the end of the
              project was the first approach of the team. We studied the website
              carefully and noted where the most improvement needed. Following
              the issues and building the roadmap, Kushel Digi Solutions team
              was ready to redesign the Graco Corporation’s website. We helped
              the brand with every possible thing like enhancing website product
              quality, optimizing images, fixing issues, and so on.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746643901/Group_1171279267_nuyi0r.png"
            // src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746523269/garcoo-solutions_b7vifc.png"
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
          <section className="case3secfour2" id="case3secfour22">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333850/gracoil_4_jvx6xg.png"
              alt="kushel"
            />
            <div className="cas3s4con" id="cas3s4conn">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746700604/Group_1171279280_svpfzr.png"
                  // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744632483/Group_1171281280_ukeiu6.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_graco">
                <h4>Custom Layout</h4>
                <p>
                  To design the custom layout of the Graco Corporation, we
                  created a clean and modern Figma design. Our primary focus was
                  on product clarity, quick navigation, enhancing usability, and
                  creating a full-fledged <b> Ecommerce system</b>.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333850/gracoil_4_jvx6xg.png"
              alt="kushel"
            />

            <div className="cas3s4con" id="cas3s4conn">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746700606/Group_1171279282_vohwhu.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_graco">
                <h4> BigCommerce Development Product Optimization</h4>
                <p>
                  After completing the design, we decided to migrate the entire
                  website to BigCommerce. Undoubtedly, there couldn’t have been
                  any other choice better than a{" "}
                  <b> headless ecommerce platform</b>. With full, scalable, and
                  enterprise-level features, it had all that Graco Corporation
                  required to grow.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333850/gracoil_4_jvx6xg.png"
              alt="kushel"
            />

            <div className="cas3s4con" id="imgPortfolio_Phone">
              <div className="cas3circldata2" id="case3Portfolio_graco">
                <h4>Smart Integrations</h4>
                <p>
                  Now, both the design and development of the Ecommerce shop are
                  ready. The next area to enhance was customer relationship
                  management and search engine optimization. For them, we used
                  smart integration options. BigCommerce provides integrations
                  to a plethora of third-party applications.
                </p>
              </div>
              <div className="bgshowdb2" id="imgPortfolio_Ai_Phone">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746700604/Group_1171279284_n4q7cv.png"
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
            When everything was ready, it was the wait for the results and
            impacts to witness. Within a few days of launching the upgraded
            website, the loading time increased significantly. The product
            interface was simplified, and navigating through it became easier
            than ever.
          </p>
          <p>
            {" "}
            The implementation of other features, like automated inventory
            management, improved productivity for the company. In fact, more
            users started using the website and engaged with pages for a long
            period.{" "}
          </p>
          <p>
            For more such ecommerce development solutions, you can reach out to
            us and let us showcase what we can do for your website.{" "}
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

export default Graco;
