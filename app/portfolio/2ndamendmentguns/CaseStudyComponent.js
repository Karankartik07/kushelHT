"use client";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./amend.css";
import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
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

export default function CaseStudyComponent() {
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

        <link
          rel="canonical"
          href="https://www.kusheldigi.com/2ndamendmentguns"
        />
      </Head>

      <Navbar />
      {/* first sectino */}

      <section className="case1firsec">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746454210/2nd-home-banner_qpuz1w.jpg"
          alt="2nd Amendment  Logo image for ecommerce website development by Kushel Digi Solutions"
          className="case1fill"
        />
        {/* <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png" alt="kushel" className="case1fill" />
        <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216437/case1bg_j1tw2e.png" alt="kushel" className="case1bg" /> */}

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784821/Group_1171279311_lf5dmj.png"
                  alt="2ndamendmentguns logo"
                />
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  2nd Amendment Guns is a service-disabled veteran business
                  located in the prime location of Las Vegas, Nevada. Behind its
                  foundation, the company represents a commitment to the people
                  and the Constitution to serve.
                </p>
                <Link
                  className="btn-case-port"
                  href="https://2ndamendmentguns.com/"
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
            loading="lazy"
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746537844/madfish-logo1_ghjavp.png"
            alt="MadFish Solutions project logo by Kushel Digi Solutions"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>

            {/* <p>
            2nd Amendment Guns is a service-disabled veteran business located in the prime location of Las Vegas, Nevada. Behind its foundation, the company represents a commitment to the people and the Constitution to serve. 
            </p> */}
            <p>
              After serving 32 years in the military, the owner of 2nd Amendment
              Guns and Accessories is offering a wide range of firearms and
              ammunition. The brand empowers “The People” of the United States
              of America through education, arms, and training.
            </p>
            <p>
              At its Ecommerce platform, you can find ammunition equipment for
              Second Amendment enthusiasts, survival gear, optics, and a lot
              more. The brand is also providing a secure and legally compliant
              shopping experience for seasoned firearm owners.
            </p>
            <p>
              {" "}
              Since 2012, it has positioned itself as a reliable platform for
              the public service, and the community support has helped to step
              up in the Ecommerce world. However, Kushel Digi Solutions have
              played a crucial role in bringing it into the limelight with their
              expertise. <b>MadFish Solutions</b> has offered us this
              opportunity and our team has put their best efforts to make it a
              successful project.{" "}
            </p>
          </div>
        </div>

        <img
          loading="lazy"
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216538/c2el1_ljp05j.png"
          alt="circle icon"
          className="c2el1"
        />
      </section>
      <div className="PortfolioChallenges">
        <div className="PortfolioChallengeMain">
          <h4> Challenges</h4>
          <div>
            <h5>1. Regulatory Complexity</h5>
            <p>
              Selling firearms requires compliance with a Federal Firearms
              License. The business has to pass through age verification,
              location-based restrictions, and a lot of other things to be
              eligible to run an <b>E-commerce shopping</b>.{" "}
            </p>
            <h5>2. Outdated Platform</h5>
            <p>
              The previous website had many issues, such as UI and UX design,
              performance, and improper infrastructure. It was becoming a
              hindrance to traffic growth and scalability.
            </p>
            <h5>3. Limited Search Experience</h5>
            <p>
              As the inventory is large, finding the right product is pretty
              difficult. The users have to struggle because no advanced
              filtering and search refinements are there.{" "}
            </p>
            <h5>4. Mobile-Friendliness</h5>
            <p>
              Many of the potential customers exist on mobile, but the site
              wasn’t mobile-friendly.{" "}
            </p>
          </div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746785005/Group_1171279298_a4is5k.png"
            // src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746514576/2nd-A-challenges_hdngwv.png"
            alt="2nd Amendment  Logo image for ecommerce website development by Kushel Digi Solutions"
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
              Kushel Digi Solutions was ready for the challenges of transforming
              the site into a full-fledged <b>E-commerce solution</b>. We
              tailored our design strategy as per the requirements of the
              client.
            </p>

            <p className="s3theeparas">
              From building the storefront using high-quality images to helping
              customers make well-informed decisions, we have made all these
              possible.
            </p>
            <p className="s3theeparas">
              We also did a thorough research to identify the market gaps and
              analyze the best possible solution for the business.{" "}
            </p>
          </div>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746514576/2nd-A-solutions_s6apxz.png"
            alt="2nd Amendment  Logo image for ecommerce website development by Kushel Digi Solutions"
            className="c3antoimg"
          />

          {/* <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216571/case3ano_uv19e1.png" alt="kushel" className="c3antoimg" /> */}
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
              loading="lazy"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333030/abouthome_1_uy6fbd.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784460/Group_1171279313_zyrxoy.png" />
                {/* <img loading="lazy" src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746710597/Group_1171279306_o1qdhn.png" alt="kushel" className="ca2insideimg adjustheighimg" /> */}
                {/* <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217032/shadowbg1_eaz1s4.png" alt="kushel" className="shadowbg1" /> */}
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4>Design Phase (Figma) </h4>
                <p>
                  At first, we started with Figma to redesign the entire UI and
                  UX. Keeping in mind the brand’s image, the design part
                  featured clean and organized layouts. Our emphasis was on
                  streamlining navigation while building a responsive site
                  structure.{" "}
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour" id="case3secfour22">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333030/abouthome_1_uy6fbd.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784461/Group_1171279309_1_z8a9ol.png"
                />
                {/* <img loading="lazy" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746454204/e-commerce-development_wu34yd.png" alt="kushel" className="ca2insideimg adjustheighimg" />
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217032/shadowbg1_eaz1s4.png" alt="kushel" className="shadowbg1" /> */}
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4> E-Commerce Development</h4>
                <p>
                  Once done with the design, the development was completed using{" "}
                  <b>BigCommerce development</b>. It was the best choice because
                  the platform supports a robust storefront creation for product
                  feed management. We considered everything before finishing the
                  site’s design, like FFL selection, age verification,
                  state-based restrictions, etc.{" "}
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333030/abouthome_1_uy6fbd.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                {/* <img loading="lazy" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784464/Group_1171279316_nc1yiv.png" alt="kushel" className="ca2insideimg addheightimage" /> */}
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784464/Group_1171279316_nc1yiv.png"
                  alt="kushel"
                  className=""
                />
              </div>

              <div className="cas3circldata" id="cas3circldata1">
                <h4>App Integrations </h4>
                <p>
                  Now, the website is ready to launch. But before doing so, it
                  was important to integrate additional tools for operational
                  performance. The integration covered inventory management, SEO
                  marketing, payment smoothness, and so on.{" "}
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
              }}
            >
              {d2?.map((item, index) => (
                <SplideSlide key={index}>
                  <div className={`c2fibbotrigh`}>
                    <img
                      loading="lazy"
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
            The improvement in the website led to significant changes in order
            placement, more customer flow, and streamlined operation.
          </h6>
          <ul>
            <li>
              The intuitive UI kept the visitors hooked for longer durations,
              causing a noticeable drop in bounce rates.
            </li>
            <li>
              With faster site performance and simplified product discovery, the
              client experienced a boost in conversion rate.{" "}
            </li>
            <li>
              Back-end integrations enabled the team to manage inventory,
              orders, and customer interactions more efficiently.{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* six section  */}
      <section className="cs2sexiesec">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216672/similarl1_kq1btu.png"
          alt="kushel"
          className="similarl1"
        />
        <img
          loading="lazy"
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
