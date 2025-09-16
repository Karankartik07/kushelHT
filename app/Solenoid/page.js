
"use client"
import React, { useEffect } from 'react'
import Head from 'next/head';

import Link from "next/link";




import '../globals.css'

import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";


const Solenoid = () => {


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
    title: 'Kushel Digi Solutions Case Study- solenoid-ninja',
    description: 'Explore the Kushel Digi Solutions case study on Solenoid Ninja: Discover how expert UX/UI design and website development enhanced their digital presence.',
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
      </Head>

      <Navbar />

      <div className="ser-main">

        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467194/pru3_lqssc9.png' className='pru3' alt="img"></img>
                <p className="shoots_premium">
                  <span className="heightlisght_premium"> Given that </span>{ }
                  the materials market is highly volatile, we are currently facing extended lead times beyond the usual duration.
                </p>
                <h1>Technologies Used</h1>
               
                <div className="main-box-logic flex">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467231/opqweeeeeee_m0ewu5.png' id="sim" alt="img"></img>
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467275/opqweeeeeee2_yddjwy.png' id="rotat" alt="img"></img>
                </div>
                
              </div>
              <div className="right-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466663/solenoidfff_igxb2s.png' id="total-group" alt="img"></img>
              </div>
            </div>
            {/* ........................................ */}
            <div className="MadFish_press">
              <div className="MadFish-back">
                <div className="MadFish-back1">
                  <div className="MadFish_press_head">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467343/madlogooooo_d6sgdv.png' alt="madlogooooo" />
                  </div>
                  <div className="MadFish_press_para">
                    <p>
                      Materials market volatility has led to extended lead times. Solenoid Ninja, in collaboration withc <span>MadFish </span>  Solutions, enhances your access to expertise and innovation. Elevate your procurement experience with us. Experience innovation like never before, backed by our partnership with MadFish Solutions.

                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467384/mad5_cvhsqg.png' alt="MadFish" />
                </div>
              </div>
            </div>
            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466840/Group_1000004718_adofnc.png' id="ux-safari" alt="img"></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466879/Group_1000004715_rqmy9m.png' id="web-safari" alt="img"></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466910/Group_1000004716_xpauup.png' id="qa-safari" alt="img"></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *********************************************** */}
        <div className="third-wireframe-homie-solenoid-s">
          <div className="inner-third-local-solenoid-s">
            <p>Wireframes</p>
            <div className="three-section-lab-solenoid-s">

              <div className="single_big-solenoid-s">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467161/hh9_dwo6xd.png' id="pads-cats" alt="img"></img>
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
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466943/Group_1000006500_1_veock3.png' id="pals-circle" alt="img"></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466976/hh10_nghgi6.png' id="gang" alt="img" />
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
                Solenoid Ninja was born out of a passionate engineer's desire to simplify and enhance the world of solenoid valves. Fueled by a deep understanding of industrial automation and a commitment to innovation, Solenoid Ninja set out to provide a comprehensive online platform that offers not only a wide range of high-quality solenoid valves but also valuable expertise and guidance. With a dedication to serving diverse industries and solving intricate fluid control challenges, Solenoid Ninja quickly established itself as a trusted source of solenoid solutions.

              </p>

            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img className="stepback solenoid-stepback" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467052/hh13_ylx9ud.png' alt="stepback" />
            <img className="stepback1 solenoid-stepback1" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467011/hh12_u5zwtj.png' alt="stepback1" />
          </div>
        </div>




        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>
              Challenges  & Solutions
            </h3>
          </div>
          <div className="challenge-story2 flex gap-3">
            <div className="challenge-box">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Solenoid Ninja encountered various challenges on its path to becoming a prominent solenoid valve provider. They encompassed navigating the complexities of the constantly evolving industrial automation landscape, managing supply chain disruptions, and maintaining consistent product quality. Moreover, establishing a robust online presence and fostering trust within a diverse customer base were critical challenges in an intensely competitive market. However, Solenoid Ninja's unwavering commitment to innovation and customer satisfaction empowered the company to overcome these obstacles and prosper.
                  </p>
                </div>

              </div>
            </div>
            <div className="challenge-box ml-3">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    In response to the challenges at hand, Solenoid Ninja adopted a multifaceted approach. First, they diversified their product range, expanding to encompass a wide variety of solenoid valves tailored to meet the needs of diverse industries. Additionally, they streamlined their supply chain management, implementing strategies to mitigate disruptions and ensure on-time deliveries.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Diversified product range

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Streamlined supply chain

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Quality assurance


                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Online expertise

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">

            <div className="kickds">
              <img className="kick_mart" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466609/trackent1_cfvgh2.png' alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">

            <img className=" relative z-10 about162 pick222" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467128/hh14_totyhs.png' alt="pick" />
          </div>
        </div>

        <div className="azib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">04</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  Solenoid Ninja's dedication to diversifying its product range, streamlining its supply chain, and maintaining product quality has led to increased customer satisfaction, reduced lead times, and a stronger position as a trusted solenoid valve provider in the competitive industrial automation market.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467308/opqweeeeeee3_tlqjyn.png' alt="conjun" />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img className='soling1' src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466707/soling1_jcruoa.jpg' alt="soli" />
              <img className='soling1' src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466756/soling2_ue4vfp.jpg' alt="soli" />
              <img className='soling1' src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466800/soling3_fuxoay.jpg' alt="soli" />
            </div>
          </div>
        </div>

        <div className="client-apperication">
          <h2>Client Appreciation</h2>
          <p>
            “Thank you Affle team for all your hardwork, patience and continuous
            support. The app is getting positive reviews and we hope to continue
            to improve and evolve the app. Looking forward to our continued
            growth.”
          </p>
          <h4>Sandeep Sharma</h4>
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

        <Footer />
        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466393/whatsapp_onug09.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466433/telephone_g3zvoj.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
    </>
  )
}

export default Solenoid