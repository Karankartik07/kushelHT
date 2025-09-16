"use client";
// import "./ride.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import Footer from "../../COMMON/Footer";
import Navbar from "../../COMMON/Navbar";
import "../../globals.css";
import "../../Ai/Ai.css";
import "./aI.CSS";
import Link from "next/link";
function AiPartComponent() {
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

      <link rel="canonical" href="https://www.kusheldigi.com/aipartscenter" />

      {/* first sectino */}
      <section className="case1firsec" id="AiPortfolioImage">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png"
          alt="kushel"
          className="case1fill"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622906/Group_1171279216_j6teud.png"
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
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622906/Group_1171279213_ahxsmd.png"
                    alt="ai&partscenter logo"
                  />
                </div>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  A&I Parts Center is a well-known name in the automotive
                  industry. Being in this business for over more than 40 years,
                  it provides a broad range of auto parts and accessories.
                </p>
                <Link
                  className="btn-case-port"
                  href="https://aipartscenter.com/"
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
              The company is empowering multiple vehicle models with physical
              stores located in Texline, Dalhart, Guymon, Stratford, and
              Amarillo areas. It has earned a strong brand reputation by
              focusing on community-focused approach and exceptional customer
              service. No wonder why it is a go-to destination for DIYers and
              professionals.{" "}
            </p>
            <p>
              As the brand is expanding their footprint in the digital space,{" "}
              <b>Kushel Digi Solutions</b> provided a great support in taking
              their business further via digital presence.{" "}
              <b>Madfish Solutions</b> has offered us this opportunity to work
              on a reputed brand projects like AI Parts Center, which we are
              grateful for.
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
            Behind the development of the digital storefront, there were plenty
            of challenges. One of them was to maintain the essence (brand
            personality) of its established brand. Other than them, we tackled
            the following hurdles:{" "}
          </p>
          <div>
            <ul>
              <li>
                The previous design was outdated, and it required a creative
                revamp.
              </li>
              <li>
                Ecommerce features were limited, and only basic functionalities
                were there.
              </li>
              <li>
                There was a strong need to improve design and include modern
                elements.{" "}
              </li>
              <li>
                Poor mobile user experience was leading to reduced sales due to
                clunky navigation and slow load times.
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744631255/Group_1171281276_psr4aw.png"
            alt="kushel"
          />
        </div>
      </div>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2" id="AiUnique_solution">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Considering the challenges, our{" "}
              <b>professional web design company</b> formulated an entire
              approach from scratch to achieve the desired outcome. From
              designing to deployment, we ensured to build a scalable and
              user-friendly e-commerce solution.{" "}
            </p>

            <p className="s3theeparas">
              Our expert team members carefully analyzed the situation of the
              website before drafting the solution. We accessed the backend and
              front-end features, noted down the loopholes and shared them with
              the client.
            </p>

            <p className="s3theeparas">
              For redesigning the site, our web designers prepared a fresh
              layout on Figma. Working closely with the client, visuals were
              created in a way that they resonate with the brand’s legacy.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746715049/Group_1171279258_s2smnp.png"
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
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png"
              alt="kushel"
            />
            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744632483/Group_1171281280_ukeiu6.png"
                  alt="kushel"
                  className="shadowbg2"
                  id="shadodo"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_Aii">
                <h4>E-commerce Development in BigCommerce</h4>
                <p>
                  After finishing the redesign part, we created the site using{" "}
                  <b>headless BigCommerce development</b>. This is a long-term
                  and scalable choice to manage inventory, secure checkout, and
                  customize product listings. In fact, building a customized
                  digital storefront is fun with <b>BigCommerce </b>
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png"
              alt="kushel"
            />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744632482/Group_1171281283_kpau8o.png"
                  alt="kushel"
                  className="shadowbg2"
                  id="shadodo"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_Aii">
                <h4>Ecommerce Development. </h4>
                <p>
                  We started with storefront creation, improving search
                  functionality, and integrated payment gateways while building
                  backend infrastructure.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              loading="lazy"
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png"
              alt="kushel"
            />

            <div className="cas3s4con">
              <div className="cas3circldata2" id="case3Portfolio_Aii">
                <h4>App Integrations</h4>
                <p>
                  BigCommerce supports third-party applications so we integrated
                  the useful ones to the website. The integrated apps will turn
                  AI Parts Center into a full-fledged Ecommerce platform.
                </p>
              </div>
              <div className="bgshowdb2" id="imgPortfolio_Ai_Phone">
                <img
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746778355/rajat_mockup_odyonm.png"
                  alt="kushel"
                  className="shadowbg2"
                  id="shadodo"
                />
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              loading="lazy"
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png"
              alt="kushel"
            />

            <div className="cas3s4con" id="imgPortfolio_Phone">
              <div className="cas3circldata2" id="case3Portfolio_Aii">
                <h4>Storefront Simplification</h4>
                <p>
                  We also created the storefront to simplify the access to
                  product details to help your customers in making the informed
                  decision. It was important to include aesthetic images to
                  bring clarity for the audience too. Working with our expert
                  designers, the product detail section was well-taken care of.
                </p>
              </div>
              <div className="bgshowdb2" id="imgPortfolio_Ai_Phone">
                <img
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746778355/rajat_mockup_odyonm.png"
                  alt="kushel"
                  className="shadowbg2"
                  id="shadodo"
                />
              </div>
            </div>
          </section>

          {/* <section className="case3secfour2">
          <img loading="lazy" className="case4bggirl" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png" alt="kushel" />

            <div className="cas3s4con" id="imgPortfolio_Phone">
             

              <div className="cas3circldata2" id="case3Portfolio_riffle">
                <h4>
                App Integrations
                </h4>
                <p>
                One of the advantages of choosing BigCommerce is that plenty of app integrations are available to download. We integrated third-party tools for real-time inventory sync, SEO marketing tools, and advanced filtering to meet customers’ demands easily. Apart from that, we also simplified marketing for RifleSupply. 
                </p>
              </div>
              <div className="bgshowdb2" id="imgPortfolio_Ai_Phone">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746707940/Group_1171279297_m7cscj.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>
            </div>
          </section> */}
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
          <h6>
            We successfully created a solution that reflected their brand values
            and met modern digital standards. Following were additional impacts
            noticed by the client:
          </h6>
          <ul>
            <li>More customer engagement</li>
            <li>Higher conversion rates </li>
            <li>Modern layout and intuitive design</li>
            <li> Advanced Customer Support features </li>
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
            <h4>Have a similar project in mind? </h4>
            <p>Discover how our expertise can benefit your project</p>
          </div>

          <div className="csizbot">
            <a href="/contact-us">
              <button>
                <span>Or Start a conversation</span>
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

export default AiPartComponent;
