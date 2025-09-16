"use client"
import { useEffect, useState } from 'react';
// import { NavLink } from "react-router-dom";
import Link from 'next/link';


import ContactForm3 from '../../COMMON/ContactForm3';
import Process from '../../COMMON/Process';
import ServiceCommon from '../../COMMON/ServiceCommon';

import Footer from '@/app/COMMON/Footer';
import Navbar from '@/app/COMMON/Navbar';
import ReactnativeHireFAQ from '@/app/COMMON/ReactnativeHireFAQ';
import '../../globals.css';
const ReactNativeComponent = () => {

    const [perPage, setPerPage] = useState(3);

    const [tab, setTab] = useState(1);

    useEffect(() => {
        if (window.matchMedia("(max-width: 1350px)").matches) {
            setPerPage(3);
        }
        if (window.matchMedia("(max-width: 750px)").matches) {
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



    const scrollToTop = () => {
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



    const tabAnother1 = () => {
        setTab(1);
        document.getElementById("pex1").style.color = "#0C61FF";
        document.getElementById("pex2").style.color = "#33475B";
        document.getElementById("pex3").style.color = "#33475B";
        document.getElementById("pex4").style.color = "#33475B";
    }
    const tabAnother2 = () => {
        setTab(2);
        document.getElementById("pex1").style.color = "#33475B";
        document.getElementById("pex2").style.color = "#0C61FF";
        document.getElementById("pex3").style.color = "#33475B";
        document.getElementById("pex4").style.color = "#33475B";
    }
    const tabAnother3 = () => {
        setTab(3);
        document.getElementById("pex1").style.color = "#33475B";
        document.getElementById("pex2").style.color = "#33475B";
        document.getElementById("pex3").style.color = "#0C61FF";
        document.getElementById("pex4").style.color = "#33475B";

    }
    const tabAnother4 = () => {
        setTab(4);
        document.getElementById("pex1").style.color = "#33475B";
        document.getElementById("pex2").style.color = "#33475B";
        document.getElementById("pex3").style.color = "#33475B";
        document.getElementById("pex4").style.color = "#0C61FF";
    }

    return (
        <>
            <Navbar />

            <div className="ser-main">

                <div className="phppp-main">
                    <div className="php-back ">
                        <div className="php-back1 native_back1 reactnativehireee">
                            <h1>Enhance Your Market Presence With React<br />
                                Native App Development Company</h1>
                            <p>
                                Boost your brand awareness by working with a React Native app development firm. Engage with our company to market your brand and attract more consumers.
                            </p>
                            <Link href="/contact-us">
                                <button>Hire Developer</button></Link>
                        </div>
                        <div className="php-back2">

                            <ContactForm3 />
                        </div>
                    </div>
                </div>
                <div className="key_features dine-1234">
                    <div className="key_features1">
                        <h2>KEY FEATURES</h2>
                        <div className="features_card">
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_10_q4cqac.png" alt="Cost Effective" title='Cost Effective' />
                                <p>Cost Effective</p>
                            </div>
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_11_ufy071.png" alt="High Performance" title='High Performance' />
                                <p>High Performance</p>
                            </div>
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_12_ajggna.png" alt="Web Support" title='Web Support' />
                                <p>Web Support </p>
                            </div>
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_13_ed1u8k.png" alt="Open Source" title='Open Source' />
                                <p>Open Source</p>
                            </div>
                        </div>
                    </div>
                    <div className="key_features2">
                        <div className='key_features_head'>
                            <h2>Leverage Our React Native App Development Services</h2>
                            <p>Use our React Native app development services to grow your company to new heights. Our talented team will use the most recent technological advancements and thorough research to create a high-performing and efficient app for your company. Reach out to us to expand your brand.
                            </p>
                        </div>
                        <div className='key_tanda'>
                            <div className="key_tanda1">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172278/sidhaTandi_nlsoam.png' alt="staright line design" title='staright line design' />
                                <div className='tandi_nav'>
                                    <p onClick={tabAnother1} id='pex1'>Guidance and Assistance for React Native Apps</p>
                                    <p onClick={tabAnother2} id='pex2'>Powering Android & iOS with React Native</p>
                                    <p onClick={tabAnother3} id='pex3'>Streamlined Cross-Platform Migration</p>
                                    <p onClick={tabAnother4} id='pex4'>Elevating UI/UX with React Native</p>
                                </div>
                            </div>
                            <div className="key_tanda2">
                                {
                                    tab === 1 && (
                                        <div className='key_imgTand'>
                                            <p>We offer guidance and support for React Native applications. Our capable staff will offer you the most up-to-date technological expertise together with the greatest guidance and assistance to ensure a seamless and optimised app development process. Our mission is to help you in developing an outstanding, functional app. Reach out to us now about your project.
                                            </p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724924922/Frame_kvctn6.png
" alt="bottom design" title='bottom design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 2 && (
                                        <div className='key_imgTand'>
                                            <p>Use React Native for supporting iOS and Android. It is an effective, quick, and responsive development platform. Our group of skilled developers is capable of producing excellent iOS and Android apps for your company. Come together with us to develop your brand and make your ideas a reality.
                                            </p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724924922/Frame_kvctn6.png
" alt="bottom design" title='bottom design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 3 && (
                                        <div className='key_imgTand'>
                                            <p>Our services offer a comprehensive multi-platform migration procedure that is easy to use and smooth. We are experts at converting your apps, data, and services between different platforms. Our Company employs cutting-edge, secure technology to ensure the boundless success of your concept. Speak with our staff and begin researching how to proceed.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724924922/Frame_kvctn6.png
" alt="bottom design" title='bottom design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 4 && (
                                        <div className='key_imgTand'>
                                            <p>Raise the standard for UI/UX with React Native. Your app will be created by our skilled developers with a beautiful interface and a top-notch user experience. We produce quick, easy-to-use, high-quality applications that will help you build your business. Connect to ask us to promote your company right now.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724924922/Frame_kvctn6.png
" alt="bottom design" title='bottom design' />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============third banega=============== */}
                <Process />
                {/* ================third end=============== */}
                <div className="why_kushel_native dine-1234">
                    <div className='native_think'>
                        <h2>Why Choose Kushel Digi for React Native App Development ?</h2>
                        <p>We have experienced developers, the latest technical knowledge, and sensitivity. Our experts are capable of developing high-performance and user friendly React Native applications for your business.</p>
                    </div>
                    <div className="native_card">
                        <div className="native_box">
                            <h3>Client Commitment
                            </h3>
                            <p>Customer commitment is  the main reason for our skilled kushal Digi React Native app developers. We are committed to excellence and meeting customer requirements on time. We bring with you confidence in high-tech capabilities and solutions.
                            </p>
                        </div>
                        <div className="native_box">
                            <h3>Ironclad Security
                            </h3>
                            <p>Selecting a knowledgeable  Kushal Digi React Native application developer makes sense for a variety of reasons. Their knowledge is combined with strong security dependability. Their super quick development speed and continuous support guarantee that your software will always have consistent security.</p>
                        </div>
                        <div className="native_box">
                            <h3>Punctual Delivery Assurance</h3>
                            <p>We assure consistent delivery. Our skilled team is committed to completing the project on time. We provide excellent and timely results for your business with high-tech knowledge and experience.
                            </p>
                        </div>
                        <div className="native_box">
                            <h3>Marketing Momentum
                            </h3>
                            <p>Selecting an experienced Kushal Digi React Native app developer makes appeal for lots of reasons. Our apps give your business the marketing momentum.  it needs to succeed and raise your brand to new heights. Our knowledgeable staff is dedicated to helping you succeed and increasing your passion for marketing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="boost">
                    <div className="boost_sect">
                        <span>We hold the key to making your app rule the digital space</span>
                        <p>Let’s build your React Native app together!</p>
                        <div className="boost_button boost_button1">
                            <Link href="/contact-us">
                                <button>Hire React Native App Developers</button></Link>
                        </div>
                    </div>
                </div>

                <div className="why_pnt">
                    <div className="why_pnt2 why_pnt22 dine-1234">
                        <div className="hire_steps_php">
                            <h2>Hire React Native Developers In 4 Steps</h2>
                            <p>
                                Hiring a React Native developer from Kushel Digi is simple. Follow 4 easy steps to employ a team for your innovative web application.
                            </p>
                        </div>
                        <div className="hire_phpStep_card">
                            <div className="hire_phpStep_box">
                                <h3>01</h3>
                                <p>Tell us your requirements</p>
                            </div>
                            <div className="hire_phpStep_box">
                                <h3>02</h3>
                                <p>
                                    We shortlist the best <br /> talents
                                </p>
                            </div>
                            <div className="hire_phpStep_box">
                                <h3>03</h3>
                                <p>
                                    Take interview of the <br /> React native team
                                </p>
                            </div>
                            <div className="hire_phpStep_box">
                                <h3>04</h3>
                                <p>Hire the React Native <br /> developers</p>
                            </div>
                        </div>
                    </div>
                </div>


                <ServiceCommon />

                {/* <div className="home9 mb-12 home278">
                    <div className="home91 flex px-24 dine-1234">
                        <div className="home911 text-center">
                            <h2 className="font-bold text-gray-700">Frequently Asked<br /> Questions</h2>
                        </div>
                        <div className="home912 FAQ-1">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>

                                            Can I hire developers of my choice?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Yes, hiring the right developers for your project is a key advantage.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Why is React Native the best?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            React Native offers cross-platform development, efficiency, and a native-like experience.                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Do you have experience in integrating native features into React Native apps?


                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Yes, our agency has expertise in seamlessly integrating native device features.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Why hire dedicated React Native developers?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Dedicated developers ensure focused attention on your project.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is the process for hiring a React Native developer?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Contact us, and we'll guide you through the hiring process.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>

                        </div>
                    </div>
                </div>

 */}

                <ReactnativeHireFAQ />
                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172941/whatsapp_cowbb8.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
                    </button>
                    <button onClick={callHandler}>
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172987/telephone_qjoh3j.png' alt="call-icon" title="call-icon" />
                    </button>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ReactNativeComponent;