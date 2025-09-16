"use client"
import React, { useEffect } from "react";
import '../../globals.css'

import Head from 'next/head';
import Footer from "../../COMMON/Footer";
import Navbar from "../../COMMON/Navbar";

import Link from "next/link";

const projects = [
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216954/down1_kgzcrg.png",
    title1: "Topbrass tactical",
    title2: "E-commerce, Bigcomerce ",
    link: "/topbrasstactical"
  },
  {
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746541117/image_5_tw9wok.png",
    title1: "Graco Corporation",
    title2: "E-commerce, Bigcomerce ",
    link: "/graco-corp"
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217009/down3_ucxpri.png",
    title1: "Sites & Scopes",
    title2: "E-commerce, Bigcomerce ",
    link: "/sitesandscopes"
  },
];

const ProTrucks = () => {

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }

  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const generateMetadata = ({ params }) => ({
    title: 'Pro Trucks and Cars | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Pro Trucks and Cars boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
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
        <link rel="canonical" href="https://www.kusheldigi.com/protrucksandcars" />
      </Head>

      <Navbar />
      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads1">
              <div className="left-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472140/pru_yxgfwt.png' className="pru" alt="protrucksandcars logo"></img>
                <p className="shoots_premium">
                  <span className="heightlisght_premium"> Pro Trucks,</span> a
                  family-owned business, is here to turn your dream vehicle into
                  a reality. We specialize in crafting unique, functional, and
                  amazing rides. From mild to wild, we're here to bring your
                  vision to life!
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472204/opqweeeeeee_cu9os9.png' id="sim" alt="img"></img>
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472246/opqweeeeeee2_h8sne3.png' id="rotat" alt="img"></img>
                </div>
                 <Link
                  className="btn-case-port"
                  href="https://protrucksandcars.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </div>
              <div className="right-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471895/pro-trucks-s_lpnj4a.png' id="total-group" alt="ProTrucks bussiness"></img>
              </div>
            </div>
            {/* ........................................ */}
            <div className="MadFish_press">
              <div className="MadFish-back">
                <div className="MadFish-back1">
                  <div className="MadFish_press_head">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472327/madlogooooo_ujlity.png' alt="madlogooooo" />
                  </div>
                  <div className="MadFish_press_para">
                    <p>
                      Pro Trucks, a family-owned business, makes your dream
                      vehicle a reality, from mild to wild. The Pro Trucks
                      program, backed by <span>MadFish</span> Solutions, ensures
                      you experience excellence and innovation. Choose us for
                      your automotive dreams, and drive your dreams with Pro
                      Trucks and MadFish Solutions.
                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472364/mad2_yqpzdu.png' alt="MadFish" />
                </div>
              </div>
            </div>

            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471802/Group_1000004718_lmr8qb.png' id="ux-safari" alt="img"></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471834/Group_1000004715_scfvbs.png' id="web-safari" alt="img"></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471863/Group_1000004716_crcvh6.png' id="qa-safari" alt="img"></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *********************************************** */}
        <div className="third-wireframe-homie-PRO-TRUCKS">
          <div className="inner-third-local-PRO-TRUCKS">
            <p>Wireframes</p>
            <div className="three-section-lab-PRO-TRUCKS">
              <div className="single_big-PRO-TRUCKS">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471993/mnop1_weym0u.png' id="pads-cats" alt="img"></img>
              </div>
            </div>
          </div>
        </div>
        {/* ******************************************** */}
        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Gilroy</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Montserrat</p>
                </div>
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471932/Group_1000006500_1_iwrrru.png' id="pals-circle" alt="img"></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471960/hh5_dhnp6b.png' id="gang" alt="img" />
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
                Pro Trucks and Cars, a thriving family business, renowned for
                its aftermarket performance vehicle expertise, is now embracing
                the digital era under the leadership of Luke Kowalski. This
                project, initiated on December 5, 2022, with a target completion
                date of February 28, 2023, includes E-commerce site design,
                BigCommerce setup, data import, Zoho sales automation, and SEO
                services.
              </p>

            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img
              className="stepback solenoid-stepback1"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472046/hh6_n2xwok.png'
              alt="stepback"
            />
            <img
              className="stepback1 solenoid-stepback1"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472076/hh7_g47ct7.png'
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
                  <p>
                    Amidst remarkable success, the business aspires to leap into the digital realm. Luke's unwavering dedication to this transition is evident as he's enlisted a social media specialist to bolster his brand's online presence.

                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box challenge-box3 ml-3 challenge-box2">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <p>
                    We're embarking on creating a store with a distinctive design. The Data Here to There plugin will seamlessly import all essential data, covering categories, products, images, pricing, and specifications. In addition, we're integrating the innovative MadFish Launch Pack, which encompasses:

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Comprehensive BigCommerce training.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>In-depth competitive analysis.</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Precise SEO keyword analysis.</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>The development of 20 SEO-centric category descriptions.
                  </p>
                </div>
                <div className="challenge-list1">
                  <p>
                    -The next steps involve the installation of an email marketing program, the utilisation of Google Analytics and Google Search Console, and the creation of a keyword-rich email template for marketing. We’re developing an SEO project using our in-house tools customised for SE Ranking. To ensure effective marketplace management, we’re formulating a detailed plan along with regular reviews at 30, 60, and 90-day checkpoints. During the initial year, we'll conduct quarterly reviews for continuous refinement. In the realm of client engagement, we're also setting up Zoho CRM Plus, offering email marketing, marketing automation, chatbots, and customer support chat – a powerful tool with significant future revenue potential.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
            <div className="kickds">
              <img className="kick_mart" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471646/trackent_mkilsg.png' alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <img3
              className=" relative z-10 about162 pick222"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472105/hh8_g9ouy9.png'
              alt="hh8"
            />
          </div>
        </div> */}
        <div className="azib prozib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  The incorporation of Zoho CRM Plus and website optimization has significantly elevated customer-business interaction. The streamlined onboarding form adds substantial convenience for customers, resulting in a notable enhancement of the overall business experience.

                </p>
                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472284/opqweeeeeee3_kgmddp.png' alt="conjun" />
                </div>
              </div>
            </div>
            <div className="azib-images flex items-center justify-center">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471744/pt5_laoigm.jpg' alt="pt4" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471772/pt6_acyz4q.jpg' alt="pt5" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740471716/pt4_c1gon0.jpg' alt="pt6" />
            </div>
          </div>
        </div>
        <div className="client-apperication">
          <h2>Client Appreciation</h2>
          <p>
            “We would like to express our sincere appreciation to the diligent Affle team for your steadfast dedication, patience, and consistent assistance. The application has been well-received, with favourable feedback, and we are fully dedicated to its continual improvement and progression as we look forward to our sustained expansion in the future.
            ”
          </p>
          <h4>Matt Reeder</h4>
        </div>

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

                  <a href={project?.link}> <button>
                    <span>Case study</span>
                  </button></a>
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
                  src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180293/arrow4_rxxlsw.png'
                  alt="alik"
                />
              </Link>
            </button>

          </div>
        </div>
        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469695/whatsapp_ubh9of.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469745/telephone_twhjto.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProTrucks;
