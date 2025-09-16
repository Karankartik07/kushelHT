"use client";
// import "./section7.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../globals.css";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Head from "next/head";
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

function Page() {
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
      </Head>

      <Navbar />
      {/* first sectino */}

      <section className="case1firsec">
        <img
          src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747322288/Group_1171279379_-_Copy_r6tcr6.png"
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
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747323201/logo-white-new_1687810777__26159.original_tyhlxx.png"
                  alt="hitbazzar logo"
                />
                <p> Hit Bazar </p>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Hit Bazar is a well-known wholesale grocery business that
                  offers quality food essentials at very reasonable prices.
                </p>
                <Link
                  className="btn-case-port"
                  href="https://hitbazzar.com/"
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

            <p>
              Hit Bazar has emerged as a well-respected name within the
              wholesale grocery business mostly to bulk consumers, restaurants,
              and retailers.{" "}
            </p>

            <p>
              {" "}
              While more customers want to place online orders, the company
              realized they needed an online digital storefront that is scalable
              as well as convenient to maintain.
            </p>
            <p>
              {" "}
              Their desire was to upgrade processes while preserving ease of use
              as well as confidence that they have established offline.{" "}
            </p>

            <p>
              Madfish Solutions has given us the opportunity to implement our
              expertise in this project.{" "}
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
            {/* <h5>Before we started working on the project, there were the following challenges to tackle:-</h5> */}
            <h5>1. No prior online existence or digital cataloging system.</h5>
            {/* <p>Selling firearms requires compliance with a Federal Firearms License. The business has to pass through age verification, location-based restrictions, and a lot of other things to be eligible to run an <b>E-commerce shopping</b>. </p> */}
            <h5>
              2. Manual order placement through phone and WhatsApp, causing
              inefficiencies.{" "}
            </h5>
            {/* <p>The previous website had many issues, such as UI and UX design, performance, and improper infrastructure. It was becoming a hindrance to traffic growth and scalability.</p> */}
            <h5>
              3.Bulk product listings and price fluctuations becoming difficult
              to manage .
            </h5>
            {/* <p>As the inventory is large, finding the right product is pretty difficult. The users have to struggle because no advanced filtering and search refinements are there. </p> */}
            <h5>
              4.Requirement for multi-user access and role-based management for
              employees.
            </h5>
            {/* <p>Many of the potential customers exist on mobile, but the site wasn’t mobile-friendly. </p> */}
            <h5>
              5.Poor visibility and restricted reach beyond the local market.
            </h5>
          </div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747322289/Group_1171279376_-_Copy_ldbeat.png"
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
              Kushel Digi Solutions designed a custom eCommerce website in
              BigCommerce according to the specific requirements of a wholesale
              grocery model.
            </p>
            <p className="s3theeparas">
              Our team decided to go with Figma. Once the design was ready, the
              next choice we made was BigCommerce architecture for scalable
              development.{" "}
            </p>
            {/* <p>We also did a thorough research to identify the market gaps and analyze the best possible solution for the business. </p> */}
            <p className="s3theeparas">
              We made the website mobile-responsive, enabling shop owners and
              retailers to order easily anytime from anywhere on any device.
            </p>
            <p className="s3theeparas">
              Our team has also integrated secure payment gateways, real-time
              inventory management, and a checkout experience which is easy for
              customers.
            </p>
            <p className="s3theeparas">
              {" "}
              Roles of staff were set up so that different access levels are
              permitted for admins, warehouse personnel, and order processors.
              Kushel Digi never compromised on making a robust SEO friendly{" "}
            </p>
            <p className="s3theeparas">
              architecture and an easy-to-use interface. As a result the site
              enabled Hit Bazar to transition effortlessly from offline selling
              to online commerce.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747322288/Group_1171279378_-_Copy_un4a6y.png"
            alt="kushel"
            className="c3antoimg"
          />

          {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216571/case3ano_uv19e1.png" alt="kushel" className="c3antoimg" /> */}
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
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747327973/sm-hero_2_wzq5us.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747322289/Group_1171279386_zuyozu.png" />
                {/* <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746710597/Group_1171279306_o1qdhn.png" alt="kushel" className="ca2insideimg adjustheighimg" /> */}
                {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217032/shadowbg1_eaz1s4.png" alt="kushel" className="shadowbg1" /> */}
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4>Wholesale-Ready Capability</h4>
                <p>
                  We launched bulk order capabilities, price-tiering, and
                  personalized product filters enabling businesses to purchase
                  in bulk and maintain their budgets easily. This enabled Hit
                  Bazar to support an array of wholesale customers with
                  different order requirements and price expectations. .
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour" id="case3secfour22">
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747327973/sm-hero_2_wzq5us.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747322290/Group_1171279382_-_Copy_lua8c3.png" />
                {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746454204/e-commerce-development_wu34yd.png" alt="kushel" className="ca2insideimg adjustheighimg" />
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217032/shadowbg1_eaz1s4.png" alt="kushel" className="shadowbg1" /> */}
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4>Simple Inventory Management</h4>
                <p>
                  Our team has designed the back-end in a way to support large
                  product lists with distinct stock and price changes. It
                  enables the Hit Bazar team to easily update without technical
                  assistance. It has drastically minimized turnaround time for
                  manual stock updates .
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour">
            {/* <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746523673/design-phase2_ztjdex.jpg" alt="kushel" className="c1btimage" /> */}
            <img
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747327973/sm-hero_2_wzq5us.png"
              alt="kushel"
              className="c1btimage"
            />
            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784464/Group_1171279316_nc1yiv.png" alt="kushel" className="ca2insideimg addheightimage" /> */}
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747322287/Group_1171279385_hzudvi.png"
                  alt="kushel"
                  className=""
                />
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4>Mobile Responsive Ordering Experience</h4>
                <p>
                  Our experts team focused on mobile-first approach that can
                  facilitate retailers and restaurant entrepreneurs to place
                  fast orders on the move. It ultimately minimized turnaround
                  time and also enhances convenience for repeat customers. .
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
          {/* <h6>
                        Users can now find certifications faster and understand what they’re signing up for:-
                    </h6> */}
          <ul>
            <li>
              Since we launched Hit Bazar's BigCommerce-powered store, the
              company was able to grow beyond the physical boundaries, and new
              customers flocked to it from surrounding areas.{" "}
            </li>
            <li>
              {" "}
              Online orders picked up gradually, and the simplified backend
              reduced errors made manually along with the speed of order
              processing.{" "}
            </li>
            <li>
              {" "}
              The platform allowed Hit Bazar to work more effectively, fulfill
              growing customer expectations, and establish itself as a
              technologically advanced wholesale brand.{" "}
            </li>
            {/* <li>Automating some functionalities freed up resources for fulfilling customer expectations and delivering better service.</li> */}
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

export default Page;
