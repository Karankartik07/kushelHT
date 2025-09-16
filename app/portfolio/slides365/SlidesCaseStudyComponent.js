"use client";
import "@splidejs/react-splide/css";
import Head from "next/head";
import { useEffect, useState } from "react";

import Link from "next/link";

import Footer from "../../COMMON/Footer";
import Navbar from "../../COMMON/Navbar";
import "../../globals.css";

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

const SlidesCaseStudyComponent = () => {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      setPerPage(2);
    }
    if (window.matchMedia("(max-width: 650px)").matches) {
      setPerPage(1);
    }
  }, []);

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
        <link rel="canonical" href="https://www.kusheldigi.com/slides365" />

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

      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469466/shshhshshshsshshshshsh_jvhisw.png"
                  className="pru188888888"
                  alt="slides365 logo"
                ></img>
                <p className="shoots_premium">1000+ Innovative Slides Design</p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469533/opqweeeeeee2_esl0em.png"
                    id="rotat"
                    alt="img"
                  ></img>
                </div>
                 <Link
                  className="btn-case-port"
                  href="https://slides365.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </div>
              <div className="right-section-kids">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469177/Slidesrightimg_rvsjsn.png"
                  id="total-group"
                  alt="img"
                ></img>
              </div>
            </div>

            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469062/Group_1000004718_dxn05g.png"
                    id="ux-safari"
                    alt="img"
                  ></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469103/Group_1000004715_baclcb.png"
                    id="web-safari"
                    alt="img"
                  ></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469138/Group_1000004716_l61etj.png"
                    id="qa-safari"
                    alt="img"
                  ></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************************************** */}

        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic">
              <p className="fila">Font</p>
              <div className="ywo-stem so_change">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Poppins</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Poppins</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Poppins</p>
                </div>
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469226/Group_1000006500_1_ytxicy.png"
                  id="pals-circle"
                  alt="img"
                ></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469273/slidescolorplat_kbdmt2.png"
              id="gang"
              alt="img"
            />
          </div>
        </div>

        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
                {" "}
                Slides365 aimed to serve various needs of professionals by
                offering subscription-based templates, presentations, design
                slides, and industry-specific slides. In short, the company
                aimed to make the chore of creating effective presentations a
                little easier by providing readymade templates in several
                sectors. Slides365 wanted to make its services and customer
                experience even better by searching for a digital partner that
                could uplift their online platform and make the browsing,
                subscription, and downloading of presentations easier for users.
              </p>
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img
              className="stepback solenoid-stepback1"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469326/slidesfirst1_kpz7xt.png"
              alt="stepback"
            />
            <img
              className="stepback1 solenoid-stepback1"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469365/slidesfirst2_wufisz.png"
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
            <div className="challenge-box challenge-box2">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Their old website was making difficult for users to navigate
                    through the vast library of templates.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    The platform lacked a good design that can allow easy access
                    to templates, leading to a high bounce rate.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Handling different subscription plans was complex which
                    requires a solution to automate and simplify the process.
                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box challenge-box2">
              <h4>Solution</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    We designed a fully scalable website that can efficiently
                    facilitate Slides365 in managing and organizing its huge
                    template library.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Our team conducted extensive user research to redesign the
                    interface that focus on ease in navigation and improved
                    search functionality.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    We introduced sophisticated automation in subscription
                    handling, thereby allowing users to subscribe and renew
                    plans.
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
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469466/shshhshshshsshshshshsh_jvhisw.png"
                alt="kick5"
              />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <img
              className=" relative z-10 about162 pick222"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469407/slidesfirst3_dkkobs.png"
              alt="hh8"
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
                  With an optimized user experience and automation of processes,
                  subscription sign-ups increased 30% within the first month.
                  This redesign brought a decrease in bounce rates and an
                  increase in surfing user engagement. The BigCommerce-based
                  platform has now become scalable, future-ready, and able to
                  bear more load. Performance improvement and load time enabled
                  Slides365 to hold its position in the competitive market,
                  while this intuitive interface became vital for increasing
                  customer satisfaction.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img
                    className="conjun"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469571/opqweeeeeee3_ufykxc.png"
                    alt="conjun"
                  />
                </div>
              </div>
            </div>
            <div className="azib-images flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468972/slidesHome_page_design_vkr6ta.png"
                alt="pt4"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469018/slidesaboutPLP_Page_z_hj8qry.png"
                alt="pt5"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468888/rel3_ipsytb.png"
                alt="pt6"
              />
            </div>
          </div>
        </div>

        {/* <div className="other-project">
          <h2 className="text-center ">OTHER PROJECTS</h2>
          <Splide
            aria-label="Our Services"
            options={{
              perPage: perPage,
              perMove: 1,
              autoplay: true,
              pauseOnHover: true,
              type: "loop",
              interval: 2000,
              drag: true,
            }}
          >
            <SplideSlide>
              <div className="other-card">
                <div className="other-box">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468813/rel1_fbna1l.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>RELY INNOVATION</h3>
                  <p>
                    Get peace of mind. install alarms that not only notify you
                    of danger, but also clearly instructs you on what to do
                    next.
                  </p>
                  <Link href="/relysafety">
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="other-card">
                <div className="other-box other-box1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468851/rel2_nsgmh5.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>PRO TRUCKS</h3>
                  <p>
                    Aftermarket suspension lift kits, leveling kits and
                    accessories for 4X4 off-road truck and jeep enthusiasts
                  </p>
                  <Link href="/protrucksandcars">
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="other-card">
                <div className="other-box other-box3">
                  <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468888/rel3_ipsytb.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>SOLENOID NINJA</h3>
                  <p>
                    Due to high volatility in the materials market we are
                    currently experiencing longer than normal lead times.
                  </p>
                  <Link href="/solenoid-ninja">
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div> */}

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

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img
              className="what-image-universal"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469695/whatsapp_ubh9of.png"
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
            />
          </button>
          <button onClick={callHandler}>
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469745/telephone_twhjto.png"
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

export default SlidesCaseStudyComponent;
