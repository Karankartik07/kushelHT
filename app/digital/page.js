"use client"
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import Head from 'next/head';
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import '../globals.css'
const ProTrucks = () => {
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
  }

  const generateMetadata = ({ params }) => ({
    title: "DigitalMNA | Ecommerce Growth with BigCommerce Website Development",
    description: 'See how DigitalMNA boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
  });

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription ? metaDescription.content = description :
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);
  return (
    <>

      <Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />

        <link rel="canonical" href="https://www.kusheldigi.com/digitalmna" />

      </Head>

      <Navbar />
      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167878/innermnalogoimgsmall_omnflp.png' className="pru12" alt="digitalmna logo"></img>
                <p className="shoots_premium">
                  <span className="heightlisght_premium">DigitalMnA</span>
                  is a full-service Merger and acquisition company helping
                  companies sell and buy assets by creating value
                </p>
                <h1>Technologies Used</h1>
                <div className="main-box-logic flex">

                  <img src="https://res.cloudinary.com/ecommerce-website/image/upload/v1725955530/Group_1171276002_fjj8zz.svg" alt="alt" />
                </div>
              </div>
              <div className="right-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167642/digitalmna1_iyvlij.png' id="total-group" alt="img"></img>
              </div>
            </div>

            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167535/Group_1000004718_zlrqda.png' id="ux-safari" alt="img"></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167567/Group_1000004715_gputt3.png' id="web-safari" alt="img"></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167604/Group_1000004716_qssz8d.png' id="qa-safari" alt="img"></img>
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
                  <p className="roboto-tip">Wix madefor Display</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Wix madefor Display</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Wix madefor Display</p>
                </div>
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167699/Group_1000006500_1_opb0um.png' id="pals-circle" alt="img"></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167732/mnncolurplates_dxjkbm.png' id="gang" alt="img" />
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
                {" "}
                Digital MNA approached Kushel Digi Solutions with the ambition of rebuilding their website in order to attain an enhanced online presence and user experience. Moving forward with progressive thinking toward the provision of digital solutions, they required a modern, scalable, and performance-oriented website that could reflect commitment to digital transformation. What they wanted was an intuitive and aesthetic user interface that echoed their diverse client base.


              </p>

            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img
              className="stepback solenoid-stepback1"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167767/mnadetail12_xmn3cd.png'
              alt="stepback"
            />
            <img
              className="stepback1 solenoid-stepback1"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167805/mnadetail13_ls0qdv.png'
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
                    Old design of the website did not represent the innovative brand identity of Digital MNA.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Poor navigation and lack of UI/UX strategy led to low engagement of users on the website.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Low performance of the website and lack of scalability impacted the user experience on all devices.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Need for a technology solution to meet the needs for future growth without losing any speed or functionality.

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
                    Implemented modern, responsive design with Next.js for best performance and scalability.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Designed a user-based UI/UX interface to enhance the level of navigation performance in increasing user experience.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Optimized the website for speed and better performance on different devices.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Worked closely with Digital MNA in service design to fit into their vision and business objectives.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">

            <div className="kickds">
              <img className="kick_mart" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167878/innermnalogoimgsmall_omnflp.png' alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <img
              className=" relative z-10 about162 pick222"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167842/mna123_drqwmx.png'
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
                  Digital MNA's newly designed website came out even better than expected. With Next.js, this website loads much faster and has become highly scalable to provide a proper user experience on any type of device. An intuitive UI/UX design turned out way more appealing compared to earlier experiences, increasing site traffic by 40% and conversion rates by 25% in the first quarter after launching. Digital MNA now positions itself as one of the top service providers for digital transformation services, while its online presence portrays this quite well to further cement their brand reputation.


                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun conki" src="https://res.cloudinary.com/ecommerce-website/image/upload/v1725955530/Group_1171276002_fjj8zz.svg" alt="conjun" />
                </div>
              </div>
            </div>
            <div className="azib-images flex items-center justify-center">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167245/mnaHome_Page_1_hov3cr.png' alt="pt4" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167486/mnaAbout_us_otr9d4.png' alt="pt5" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167179/mnaServices-3_1_amwov8.png' alt="pt6" />
            </div>
          </div>
        </div>
        <div className="other-project">
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167018/rel1_qlhqjj.png' alt="rel1" />
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167086/rel2_ki9opp.png' alt="rel1" />
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
                  <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739167143/rel3_gkls1l.png' alt="rel1" />
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
        </div>
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
                  src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180293/arrow4_rxxlsw.png'
                  alt="alik"
                />
              </Link>
            </button>

          </div>
        </div>


        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="call-icon" title="call-icon" />
          </button>

        </div>


      </div>
      <Footer />
    </>
  );
};

export default ProTrucks;
