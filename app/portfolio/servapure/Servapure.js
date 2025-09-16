"use client";
// import "./section7.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import Navbar from "../../COMMON/Navbar";
import "../../globals.css";

import Head from "next/head";
import Footer from "../../COMMON/Footer";
import Link from "next/link";

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

function Servapure() {
  const [selectS4, setSelectS4] = useState(0);
  const [selectdata, setSelectdata] = useState(d2[0].data);
  const [animationDirection, setAnimationDirection] =
    useState("slide-in-right");

  const handleSelectionChange = (index) => {
    // Set slide-out animation
    setAnimationDirection("slide-out-left");

    setTimeout(() => {
      // Update selected data and slide in from right
      setSelectS4(index);
      setSelectdata(d2[index].data);
      setAnimationDirection("slide-in-right");
    }, 300); // Time for the slide-out transition to complete
  }; /* Slide-out animation */

  return (
    <div className="case1wrap home-main">
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

        <link rel="canonical" href="https://www.kusheldigi.com/servapure" />
      </Head>

      <Navbar />
      {/* first sectino */}

      <section className="case1firsec">
        <img
          src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748206691/Group_1171279456_s3eflo.png"
          alt="kushel"
          className="case1fill"
        />
        {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png" alt="kushel" className="case1fill" />
        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216437/case1bg_j1tw2e.png" alt="kushel" className="case1bg" /> */}

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748206713/sp-logo_1718202719__08634_1_1_qov0dt.png"
                  alt="servapure logo"
                />
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Serv A Pure is a trusted leader of water purification and
                  filtration systems. It is providing a plethora of filtration
                  solutions through its broad range of products for residential,
                  commercial, and industrial needs.{" "}
                </p>
                <Link
                  className="btn-case-port"
                  href="https://www.servapure.com/"
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
      <section className="case2secsec">
        <div className="case2seccont">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746537844/madfish-logo1_ghjavp.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>

            {/* <p>
            2nd Amendment Guns is a service-disabled veteran business located in the prime location of Las Vegas, Nevada. Behind its foundation, the company represents a commitment to the people and the Constitution to serve. 
            </p> */}
            <p>
              The brand is putting full emphasis on creating top-notch water
              flow meters, Water purifier pumps, water softener resins,
              deionized water, etc.{" "}
            </p>
            <p>
              With more than 78 years of experience in water purification
              excellence, it has left a strong mark on the lives of people.{" "}
            </p>
            <p>
              {" "}
              As the demand for its product started growing and customers wanted
              more, Serve a Pure identified a strong need for creating a
              user-friendly platform.{" "}
            </p>
            <p>
              That’s when Kushel Digi Solutions arrived to reimagine the
              storefront and transform it into a scalable shopping store. So we
              ensured to cater to the needs of the client and optimize the
              shipping experience. Madfish offered the opportunity to us to work
              on this project.
            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216538/c2el1_ljp05j.png"
          alt="kushel"
          className="c2el1"
        />
      </section>
      <div className="PortfolioChallenges">
        <div className="PortfolioChallengeMain">
          <h4> Challenges</h4>
          <div>
            <h5>
              Though the Serve A Pure website was functional, it posed several
              barriers to customers in shopping. Many information was lacking on
              the site, so it was difficult to make an informed choice for
              anyone:-
            </h5>
            <h5>
              1. The site had an outdated design with no professional
              appearance.
            </h5>
            <h5>
              2. Product layout was cluttered, making it difficult for users to
              find specific filters.{" "}
            </h5>

            <h5>
              3.Mobile-friendliness wasn’t there, and this was affecting sales.{" "}
            </h5>
            <h5>
              4.Missing modern elements to track the sales rate or search for
              the products through filtered options.
            </h5>
            {/* <h5>The backend wasn’t ready to help with long-term growth and enable advanced features. </h5>  */}
          </div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748206866/Group_1171279453_mh2slx.png"
            // src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746514576/2nd-A-challenges_hdngwv.png"
            alt="kushel"
          />
        </div>
      </div>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              When the challenges were visible, our team collaborated to develop
              the entire project plan. From designing the roadmap to analyzing
              the competitors, we were fully committed to extending the legacy
              of Serve A Pure.
            </p>

            <p className="s3theeparas">
              At first, we explored what options we have for the site design.
              Depending on the existing design, our experts chose Figma to
              prepare a fresh layout including the product details and
              everything else.{" "}
            </p>

            <p className="s3theeparas">
              {" "}
              Once the ecommerce design was ready, the next thing to do was to
              migrate the site to a reliable ecommerce platform.
            </p>

            {/* <p className="s3theeparas">As it’s an e-commerce brand, our team formulated the entire roadmap to redesign the website and make it responsive to drive conversions and traffic. </p>
                        <p className="s3theeparas">The design part is carried out on Figma with the help of our experienced web designers. Thereafter, we crafted a visually appealing and intuitive web design to align it with the brand’s image. Matching the client’s expectations was another challenge that we accomplished.</p>
                        <p className="s3theeparas">After structuring the website using responsive design, the next part was to integrate BigCommerce and develop custom Ecommerce solutions.</p> */}
          </div>
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748269807/Group_1171279482_cgj84c.png"
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
          pauseOnFocus: false,
          pauseOnHover: true,
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: false,
        }}
      >
        <SplideSlide>
          <section className="case3secfour">
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748205988/image_198_ptlnj0.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748208378/Group_1171279460_ogyvub.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata11">
                <h4>UI/UX Redesign</h4>
                <p>
                  We started with a full redesign in Figma while putting focus
                  on clarity and ease of use. The new interface prioritized
                  intuitive navigation, simplified product pages, and a
                  responsive layout for mobile and desktop.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour" id="case3secfour22">
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748205988/image_198_ptlnj0.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748206811/Group_1171279463_rrt1ui.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata11">
                <h4>BigCommerce Migration</h4>
                <p>
                  We shifted the entire site to BigCommerce to build an
                  enterprise-grade eCommerce platform. This choice improved
                  loading time and saved resources for the company.{" "}
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour">
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748205988/image_198_ptlnj0.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748208152/Group_1171279466_3_bwzrv9.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata11">
                <h4>Smart Integrations</h4>
                <p>
                  For additional functions on the website, our team integrated
                  the platform with third-party plugins. It simplified CRM,
                  inventory management, SEO optimization, and many other things.
                </p>
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
              digital touchpoint through our structured process.{" "}
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
          <h6>After launch, Serve a Pure saw immediate benefits:-</h6>
          <ul>
            <li>Improved site speed and mobile performance</li>
            <li>
              Increased product discoverability via smart filters and search
              features
            </li>
            <li>Higher user engagement and longer session durations</li>
            <li>
              Streamlined operations that enabled the team to focus more on
              customer service and growth With the efforts of Kushel Digi
              Solutions, Serve a Pure is now equipped with a digital store as
              pure and efficient as the water it helps deliver.
            </li>
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
              with impactful results{" "}
            </p>
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

export default Servapure;
