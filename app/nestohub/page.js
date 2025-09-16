"use client";
// import "./section7.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../globals.css";
import "./nestohub.css";
import Navbar from "../COMMON/Navbar";

import Footer from "../COMMON/Footer";
import Head from "next/head";
import Link from "next/link";

const d1 = [
  {
    title1: "Industries",
    title2: "Real Estate",
  },
  {
    title1: "Client Location",
    title2: "India",
  },
  {
    title1: "Key Technologies",
    title2: "React js",
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

function Page() {
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

  const generateMetadata = ({ params }) => ({
    title: "NESTOHUB | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how NESTOHUB boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
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

        <link rel="canonical" href="https://www.kusheldigi.com/nestohub" />
      </Head>

      <Navbar />
      {/* first sectino */}

      <section className="case1firsec">
        <img
          src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275039/Group_1171279486_vowu2j.png"
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
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275036/Group_1171279500_ugv0xr.png"
                  alt="nestohub logo"
                />
                <p>Nestohub</p>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Nestohub serves as a connecting medium between brokers and
                  builders, simplifying property searches.In the real estate
                  world, it is bringing a significant digital transformation to
                  bridge the gap between buyers, sellers, and real estate
                  professionals.
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
      <section className="case2secsec">
        <div className="case2seccont">
          {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746537844/madfish-logo1_ghjavp.png" alt="kushel" className="cs2i1" /> */}
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275036/Group_1171279500_ugv0xr.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>
            <p>
              Moreover, the platform is also working as a digital customer
              management tool to help brokers manage their clients.
            </p>
            <p>
              When the brand approached Kushel Digi Solutions, they wanted a
              modern, fast, and interactive platform to deliver real-time
              experiences. To meet this requirement, our team analyzed the
              business and recreated the website with modern elements. We wanted
              to deliver what the client was expecting from us.
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
          <h4>Challenges</h4>
          <div>
            <p>
              The primary challenge we were facing was a single-page application
              development to handle complex data interactions, dynamic search
              filters, and more. The client also wanted a modular codebase for
              scalability. We had to look at many other aspects, such as a fresh
              design, mobile- responsiveness, map integration, API integration,
              etc.
            </p>
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
              Considering all the challenges, we knew that this project would be
              an interesting choice to work on. From creating the frontend and
              backend to simplifying payment, our creative team did it all. For
              Nestohub, our developers used a ReactJS-powered front end that
              provides a seamless and interactive property browsing
              experience..Here are some key components of the solution.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275038/Group_1171279485_ih2wii.png"
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
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275326/Rectangle_3463646_idqaae.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748208378/Group_1171279460_ogyvub.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata14">
                <h4>Planning and Execution</h4>
                <p>
                  The development process was divided into strategic phases:
                </p>
                <h5>
                  1. Discussion with the client to understand end-user needs and
                  future vision.
                </h5>
                <h5>2. Wireframe creation and interactive mockup</h5>

                <h5>
                  3. Responsive SPA development using modern React JS patterns.
                </h5>
                <h5>
                  4. API integration and testing to ensure the website works in
                  optimal condition.
                </h5>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour" id="case3secfour22">
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275326/Rectangle_3463646_idqaae.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275039/Group_1171279495_grhb9j.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata14">
                <h4>Front-End Development</h4>
                <p>
                  When we created the roadmap of the project, the first thing we
                  were looking to build was the front-end of the website. It was
                  pretty messed up, so we created a rough{" "}
                  <strong>ecommerce framework</strong>
                  on Figma and then started building the front-end with ReactJS.
                  This helped us to add some animation effects on the website to
                  make it attractive.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour">
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275326/Rectangle_3463646_idqaae.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748275038/Group_1171279499_csqiat.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata14">
                <h4>Content Creation</h4>
                <p>
                  The older content on the website lacked an SEO-friendly part,
                  so we researched trendy keywords to improve website ranking.
                  All the contents were created in a way that the visitors can
                  take the desired action.
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
          <ul>
            <li>
              3x increase in average session duration, representing higher
              engagement
            </li>
            <li>
              Reduction in bounce rate because of faster navigation and better
              UI
            </li>
            <li>
              Streamlined listing updates that enable realtors to quickly modify
              properties
            </li>
            <li>
              Scalable frontend foundation ready for future features like
              predictive AI search
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
            <h4>Got a new project idea? Let’s make it happen!</h4>
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

export default Page;
