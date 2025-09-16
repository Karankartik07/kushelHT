"use client"
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Head from 'next/head';
import Link from "next/link";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import '../globals.css'

const Ai2 = () => {
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
        title: 'Kusheldigi.com/Ai',
        description: "web agency, web design agency , best web design agency in the world, web design agency, web design services, web design and development agency"
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
            {/* <helmet> */}
            <link rel="canonical" href="https://www.kusheldigi.com/kick-eez" />
            {/* </helmet> */}
            <div className="ser-main">
                <div>
                    <div className="side-bg-trio">
                        <div className="first-kick-pads incheingh11">
                            <div className="left-section-kids">
                                <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993896/hghh_r30or2.png' width="170" alt="img"></img>
                                <p className="shoots_premium mt_top">
                                    A & I Parts Center was founded over 40 years ago by Bill Blain. From a local parts supplier, the firm has evolved into being a household name in the market. Today, A & I Parts Center is spread across several other towns in Texas, namely Texline, Dalhart, Guymon, Stratford, Amarillo, and Dumas. The firm sells top-grade parts and value for money to different communities with great care and professional skills.

                                </p>
                                <h1 >Technologies Used</h1>
                                <div className="main-box-logic flex">
                                    <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992050/tim1_fqlls7.svg' id="sim" alt="img"></img>
                                    <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992101/tim2_mg6etc.svg' id="rotat" alt="img"></img>
                                </div>
                            </div>
                            <div className="right-section-kids">
                                <img loading="lazy" className="ai_site fi_site111" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991975/ai_k36pnr.svg' alt="img"></img>
                            </div>
                        </div>
                        {/* *********************************************** */}
                        <div className="MadFish_press">
                            <div className="MadFish-back crazy-back">
                                <div className="MadFish-back1">
                                    {/* <div className="MadFish_press_head">
                <img loading="lazy" src={madlogooooo} alt="madlogooooo" />              
              </div> */}
                                    <div className="MadFish_press_para crazy_cms">
                                        <p>
                                            Kushel Digi Solutions is proud to undertake the project of A & I Parts Center to develop an eCommerce platform using BigCommerce's technology. Our team has built an excellent user-friendly  online store that would improve customer experience and streamline inventory management.

                                        </p>
                                        {/* <h3>Empower Yourself to</h3>
                    <h3>Easily <span>Modify Your</span> </h3>
                    <h3><span>Website</span></h3> */}
                                    </div>
                                </div>
                                <div className="MadFish-back2">
                                    <img loading="lazy" className="subh_img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992205/markanda_p1f0xj.svg' alt="MadFish" />
                                </div>
                            </div>
                        </div>
                        {/* ************************************************** */}
                        <div className="second-service-conte">
                            <p className="service-hinking">Services Provided</p>
                            <div className="main-img-mighty">
                                <div className="bepolo">
                                    <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991375/Group_1000004718_s2l8wf.png' id="ux-safari" alt="img"></img>
                                    <p>UX/UI Website Design</p>
                                </div>
                                <div className="bepolo">
                                    <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991440/Group_1000004715_ap2ujz.png' id="web-safari" alt="img"></img>
                                    <p>Website Development</p>
                                </div>
                                <div className="bepolo">
                                    <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991619/Group_1000004716_ungahx.png' id="qa-safari" alt="img"></img>
                                    <p>QA & Website Testing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *********************************************** */}
                <div className="third-wireframe-homie">
                    <div className="inner-third-local yomni">
                        <p>Wireframes</p>
                        <div className="three-section-lab tree_sery">
                            <img loading="lazy" className="yosuf" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992273/yosuf_zhetss.svg' alt="kushel" />
                            <img loading="lazy" className="yosuf1" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992370/yosuf1_vhw2ik.svg' alt="kushel" />
                        </div>
                    </div>
                </div>
                {/* ******************************************** */}
                <div className="fourth-plate-juuls">
                    <div className="left-card-hub">
                        <div className="vl-chic vl_chic1">
                            <p className="fila">Font</p>
                            <div className="ywo-stem">
                                <div className="light-aa">
                                    <p className="hoo">Aa</p>
                                    <p className="roboto-tip">Montserrat</p>
                                </div>
                                <div className="dark-aa">
                                    <p className="dark-canny">Aa</p>
                                    <p className="prompt-tip">Montserrat</p>
                                </div>
                                {/* <div className="medium-aa">
                                    <p className="medium">Aa</p>
                                    <p className="node-tip">Roboto</p>
                                </div> */}
                            </div>
                            <div className="sub-worm">
                                <p className="tool">Tools Use</p>
                                <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991672/Group_1000006500_1_ooftdq.png' id="pals-circle" alt="img"></img>
                            </div>
                        </div>
                    </div>
                    <div className="right-card-omega">
                        <p>Color Plate</p>
                        <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992454/platai_qvrycg.svg' id="gang" alt="img" />
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
                                A & I Parts Center, being a trusted supplier of quality parts for more than 40 years, started small like a local retail store founded by Bill Blain; however, the demand became greater and their company grew to multiple locations across the state of Texas ultimately A & I Parts realized the opportunity to reach a greater niche through an online platform. They knew that they needed to refresh their approach in order to serve customers better and, so, they set a goal to establish a robust eCommerce platform which could scale up along with the increasing stock and customer base.

                            </p>

                        </div>
                    </div>
                    <div className="step-images  flex items-start salaruu  justify-center mt-20">
                        <img loading="lazy" className="batleft heightcum addmarginautoples" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992536/tii1_x5yfau.svg' alt="stepback" />
                        <img loading="lazy" className="batleft addmarginautoples" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992643/tii2_uwbzqp.svg' alt="stepback1" />
                        <img loading="lazy" className="batleft addmarginautoples heightcum" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992734/tii3_lezawg.svg' alt="stepback1" />
                    </div>
                </div>
                <div className="challenge-story">
                    <div className="challenge-story1">
                        <h3 className="nila">02</h3>
                        <h3>Challenges & Solutions</h3>
                    </div>
                    <div className="challenge-story2 flex gap-4">
                        <div className="challenge-box challenge-box2  ">
                            <h4>Challenges</h4>
                            <div className="chal"></div>
                            <div className="challenge-list mt-8">
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        To design a system that can ensure personal touch of A & I Parts stay intact in transition towards the ecommerce market.

                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        To Provide real-time synchronization of inventory across all stores and the online store

                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Design with a focus on both technologically advanced and regular customers and, most importantly, user-friendly interface
                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Creating a platform that would support growth and easily handle increased traffic and transactions.

                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="challenge-box challenge-box2  ">
                            <h4>Solutions</h4>
                            <div className="chal"></div>
                            <div className="challenge-list mt-8">

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Implemented BigCommerce to create a scalable, customizable platform for A & I Parts’ online presence.Inventory synchronization.

                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Real-time management tools were integrated to synchronize stock across physical stores and the online platform.
                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Easy interface to browse and pick desired products with an easy checkout process.
                                    </p>

                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Optimized Performance to ensure the website is optimized for speed and scalability.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="kick-start kick-start22 picko_start">
                    <div className="kick-first kick-first222">

                        <div className="kickds">
                            <img loading="lazy" className="kick_mart alisaaa" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993836/gthj_au8qgi.png' alt="kick5" />
                        </div>
                    </div>
                    <div className="kick-second kick-second222 relative">
                        <div className="about165">
                            <img
                                className="absolute about161 animate__animated animate__pulse animate__infinite"
                                src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990949/angrag_uutvur.png'
                                alt="kushel"
                            />
                        </div>
                        <img
                            className=" relative z-10 about162 pick222"
                            src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992836/chanderi_k0sabx.svg'
                            alt="aa"
                        />
                    </div>
                </div>

                <div className="azib kickazib">
                    <div className="azib1">
                        <div className="azib1-sect">
                            <div className="azib1-first">
                                <h3 className="azib-pa">03</h3>
                                <h3>RESULT</h3>
                            </div>
                            <div className="azib1-second">
                                <p>
                                    The new A & I Parts Center eCommerce platform gives the company access to multiple locations other than the firm's actual locations and it is convenient for several customers to access the wide parts catalog. Operations have become streamlined where there is a reduction in manual errors, and more accurate stock management has been introduced. Additionally, the easy use of the platform makes the overall experience better, hence increasing online sales and keeping customers
                                </p>

                                <div className="azib-tech">
                                    <h3>Technologies Used</h3>
                                    <img loading="lazy" className="conjun" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991255/opqweeeeeee3_eg5uxy.png' alt="kushel" />
                                </div>
                            </div>
                        </div>

                        <div className="azib-images flex items-center justify-center">
                            <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993134/inki1_brw3dr.svg' alt="azib" />
                            <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993201/inki2_cnzhrn.svg' alt="azib" />
                            <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993540/inki3_np8d8k.svg' alt="azib" />
                        </div>
                    </div>
                </div>

                <div className="client-apperication">

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
                                    <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991093/rel1_ovaydf.png' alt="rel1" />
                                </div>
                                <div className="other-tox-para">
                                    <h3>RELY INNOVATION</h3>
                                    <p>
                                        Get peace of mind. install alarms that not only notify you
                                        of danger, but also clearly instructs you on what to do
                                        next.
                                    </p>
                                    <Link href="/relysafety">
                                        <button className="kick_eez-btn">View</button>
                                    </Link>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="other-card">
                                <div className="other-box other-box1">
                                    <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991160/rel2_oi6z9l.png' alt="rel1" />
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
                                    <img loading="lazy" className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991207/rel3_kus4kk.png' alt="rel1" />
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

                {/*  buttons  */}
                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <img loading="lazy" className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
                    </button>
                    <button onClick={callHandler}>
                        <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="call-icon" title="call-icon" />
                    </button>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Ai2;



