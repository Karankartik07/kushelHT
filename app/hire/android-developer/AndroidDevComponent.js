"use client"
import { useEffect, useState } from 'react';

import "@splidejs/react-splide/css";
// import { NavLink } from "react-router-dom";
import Footer from '@/app/COMMON/Footer';
import Navbar from '@/app/COMMON/Navbar';

import Link from 'next/link';
import '../../globals.css';


import AndroidHireFAQ from '@/app/COMMON/AndroidHireFAQ';
import ContactForm3 from '../../COMMON/ContactForm3';
import Process from '../../COMMON/Process';
import ServiceCommon from '../../COMMON/ServiceCommon';

const AndroidDevComponent = () => {
    const [tab, setTab] = useState(1);
    const [fat, setFat] = useState(1);
    const [perPage, setPerPage] = useState(3);
    useEffect(() => {
        if (window.matchMedia("(max-width: 1350px)").matches) {
            setPerPage(3);
        }
        if (window.matchMedia("(max-width: 750px)").matches) {
            setPerPage(1);
        }
    }, []);
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

    const techno1 = () => {
        setFat(1);
        document.getElementById("first").style.borderBottom = "3px solid #0142E1";
        document.getElementById("second").style.borderBottom = "none";
        document.getElementById("third").style.borderBottom = "none";
    }

    const techno2 = () => {
        setFat(2);
        document.getElementById("first").style.borderBottom = "none";
        document.getElementById("second").style.borderBottom = "3px solid #0142E1";
        document.getElementById("third").style.borderBottom = "none";
    }

    const techno3 = () => {
        setFat(3);
        document.getElementById("first").style.borderBottom = "none";
        document.getElementById("second").style.borderBottom = "none";
        document.getElementById("third").style.borderBottom = "3px solid #0142E1";
    }

    

    const phoneNumber = "9045301702";

    const whatAppHandler = () => {
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, "_blank");
    };
    const callHandler=()=>{
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

    return (
        <>
        <Navbar/>
       
            <div className="ser-main">
              <div className="phppp-main">
                <div className="php-back">
                    <div className="php-back1 native_back1 reactnativehireee">
                        <h1>Hire Android Developers</h1>
                        {/* <h2>Native App Development Company</h2> */}
                        <p>
                        We recruit Android developers who help bring your projects in to reality with excellent app development, friendly user experience, and latest technical proficiency.
                        </p>
                        <Link href="/contact-us">
                        <button>Hire Developer</button></Link>
                    </div>
                    <div className="php-back2">
                   
                       <ContactForm3/>
                    </div>
                </div>
                </div>

                <div className="key_features dine-1234">
                    <div className="key_features1 ">
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
                                <p>Web Support</p>
                            </div>
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_13_ed1u8k.png" alt="Open Source" title='Open Source' />
                                <p>Open Source</p>
                            </div>
                        </div>
                    </div>
                    <div className="key_features2">
                        <div className='key_features_head'>
                            <h2>Full-Fledged Android App Development Services</h2>
                            <p>We offer complete services for developing Android apps. For our clients, our  team develop advanced, user-friendly, and secure applications. We work hard to use the newest technology to satisfy their needs.</p>
                        </div>
                        <div className='key_tanda'>
                            <div className="key_tanda1">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172278/sidhaTandi_nlsoam.png' alt="line-design" title='line-design' />
                                <div className='tandi_nav'>
                                    <p onClick={tabAnother1} id='pex1'>Android App development consultation 
</p>
                                    <p onClick={tabAnother2} id='pex2'>Android app UI/UX</p>
                                    <p onClick={tabAnother3} id='pex3'>Custom android app development</p>
                                    <p onClick={tabAnother4} id='pex4'>Android software testing</p>
                                </div>
                            </div>
                            <div className="key_tanda2">
                                {
                                    tab === 1 && (
                                        <div className='key_imgTand'>
                                        <p>We provide Android app development consulting. With our advice and technical knowledge and understand the requirements of the users. Our experts develop their applications for them keeping their ideas in mind.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="design bottom" title='design bottom' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 2 && (
                                        <div className='key_imgTand'>
                                            <p> Our Android app has an easy, organised, and user-friendly UI/UX. It facilitates consumers' easy navigation, viewing, and utilisation of content. It has a stylish and practical design.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="design bottom" title='design bottom' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 3 && (
                                        <div className='key_imgTand'>
                                        <p> Our custom Android app development services uniquely incorporate your ideas. We transform your ideas into reality and deliver them as an excellent user experience.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="design bottom" title='design bottom' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 4 && (
                                        <div className='key_imgTand'>
                                        <p>Our Android software testing team tests the software in a professional and business manner. We have used various qualifications to ensure that our Android software is of high quality and functions smoothly.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="design bottom" title='design bottom' />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
              
                <Process/>
                <div className="hire_apps">
                    <h2>Hire Android App Developers and Experience Hyper-Growth</h2>
                    <p className='actsy'>Our skilled developers use innovative technologies to take your business to new heights. We ensure that your app provides users with a reliable experience with compatibility and sensitivity.</p>
                    <div className="nty-cards">
                        <div className="nty-card">
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Tailored Native Apps</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Explore the world of intuitive, interactive, and secure Android applications, fully harnessing the potential of Android Studio, HTML, C, C++, Java, and more.</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Blockchain Advancements
</h3>

                                </div>
                                <div className="parst-ty">
                                <p>Partner with Android developers with a proven track record in Blockchain technology. They’re ready to create applications that align seamlessly with your enterprise requirements.</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Next-Gen AR/VR Apps
</h3>

                                </div>
                                <div className="parst-ty">
                                  <p>Collaborate with seasoned Android experts who have a knack for developing cutting-edge applications using the latest AR/VR technologies. Elevate your digital business above the competition.</p>
                                </div>
                            </div>
                        </div>
                        <div className="nty-card">
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Bespoke Android Solutions
</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Whatever your app customizations demand, our skilled Android artisans are here to craft and execute exceptional solutions, ensuring the success of your app.</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Immersive Android Games
</h3>

                                </div>
                                <div className="parst-ty">
                                    <p>Our Android game developers are dedicated to delivering seamless, immersive, and entertaining gaming experiences. Let your game become a trendsetter in its own right.
</p>
                                </div>
                            </div>
                            <div className="nty-box">
                                <div className="nty_head">
                                    <svg width="27" height="24" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4975_1702)">
                                            <path d="M20.3238 1.82648C19.8248 2.66993 19.3354 3.48528 18.8459 4.32873C15.3912 2.6137 11.9271 2.46375 8.51013 4.2725C5.79912 5.71575 4.0765 7.98371 3.32344 10.9546C1.80791 16.9431 5.73323 22.8754 11.8895 23.8594C18.1399 24.8529 23.9855 20.2888 24.1173 13.5318C25.0963 13.5318 26.0752 13.5318 27.1107 13.5318C27.1201 15.7529 26.6024 17.8428 25.5669 19.8015C24.0702 22.6224 21.8393 24.6748 18.8835 25.9212C12.8308 28.461 5.81795 26.3617 2.25974 20.9917C-1.33612 15.5561 -0.56423 8.31172 4.05767 3.82266C8.73605 -0.703895 15.6924 -1.00379 20.3238 1.82648Z" fill="#00C301" />
                                            <path d="M15.0426 18.4703C12.5952 16.0336 10.1101 13.5595 7.625 11.0853C8.27451 10.4387 8.97109 9.76393 9.6865 9.05167C11.4374 10.8136 13.2165 12.6036 15.005 14.4029C19.3633 10.0545 23.6557 5.77156 27.9482 1.49805C28.673 2.23841 29.3508 2.92255 30.0003 3.57857C25.0301 8.52686 20.0222 13.5033 15.0426 18.4703Z" fill="#00C301" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4975_1702">
                                                <rect width="30" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h3>Seamless App Migration
</h3>

                                </div>
                                <div className="parst-ty">
                                <p>Make the transition of your legacy applications to the Android operating system a breeze. Our offshore Android app programmers are well-versed in handling complex Android migrations to the latest technologies.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="android_teck">
                    <h5>T E C H N O L O G I E S</h5>
                    <div className='ttr'></div>
                    <div className="android_tect_card">
                        <div className="tects-nav">
                            <div className="tect_nav">
                                <p id='first' onClick={techno1}>Mobile Frontend</p>
                                <p id='second' onClick={techno2}>Framework</p>
                                <p id='third' onClick={techno3}>Platform</p>
                            </div>
                            <hr className='hr_ty' />
                        </div>
                        {
                            fat === 1 && (
                                <div className='ty_py'>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918164/download_26_gspvz0.png" alt="Native" title='Native' />
                                        </div>
                                        <p>Native (Java/kotlin)</p>
                                    </div>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918039/download_27_jrjyyi.png" alt="React Nativ" title='React Nativ' />
                                        </div>
                                        <p>React Native</p>
                                    </div>
                                </div>
                            )
                        }

                        {
                            fat === 2 && (
                                <div className='ty_py'>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918000/download_28_elpnzg.png" alt="Android Studio" title='Android Studio' />
                                        </div>
                                        <p>Android Studio</p>
                                    </div>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724917998/download_29_bgksab.png
" alt="Google Assistant SDK" title='Google Assistant SDK' />
                                        </div>
                                        <p>Google Assistant SDK</p>
                                    </div>
                                </div>
                            )
                        }

                        {
                            fat === 3 && (
                                <div className='ty_py'>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724917997/download_30_rz2xl3.png" alt="Google Cloud Platform" title='Google Cloud Platform' />
                                        </div>
                                        <p>Google Cloud Platform</p>
                                    </div>
                                    <div className="ty_py1">
                                        <div className="koiy_img">
                                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918925/download_31_zius61.png" alt="AWS" title='AWS' />
                                        </div>
                                        <p>AWS</p>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>

                <div className="android_appli">
                    <h2>Why Choose Android Application Developers from Kushel Digi?</h2>
                    <div className="apli-cards">
                        <div className="apli-card">
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724917992/download_32_aovmoc.png" alt="Diverse Expertise Network" title='Diverse Expertise Network' />
                                <div className="gt_head">
                                    <h2>Diverse Expertise Network
</h2>
                                    <p> Our developers' varied backgrounds throughout the network guarantee that your needs are satisfied. Your projects reach new heights.</p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724917992/download_33_vyjl7q.png
" alt="Cutting-Edge Development" title='Cutting-Edge Development'/>
                                <div className="gt_head">
                                    <h2>Cutting-Edge Development
</h2>
                                    <p> We develop unique and high quality Android applications using the latest technology.Our developers excel at innovative development.</p></div>
                            </div>
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724917992/download_34_y2bgsw.png" alt="Comprehensive Assistance" title='Comprehensive Assistance' />
                                <div className="gt_head">
                                    <h2>Comprehensive Assistance
</h2>
                                    <p>Our entire assistance is the reason to choose Kushel Digi's talented Android app developers. Our team consists of professionals who deliver prompt, high-quality application development services.</p>
                                </div>
                            </div>

                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724917992/download_35_pbguom.png" alt="Agility at Its Core" title='Agility at Its Core' />
                                <div className="gt_head">
                                    <h2>Agility at Its Core
</h2>
                                    <p>Agility is one of our developers' top priorities. Their expertise and abilities only guarantee that your application operates at its best in terms of speed and performance.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <ServiceCommon />
                {/* <div className="home9 mb-12 home278">
                    <div className="home91 flex px-24 dine-1234">
                        <div className="home911 text-center">
                            <h2 className="font-bold text-gray-700">Frequently Asked<br/> Questions</h2>
                        </div>
                        <div className="home912 FAQ-1">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        What does your Android development agency have to offer?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Comprehensive Solutions are the key. We are an Android development agency providing full service, from concept to conclusion. Your mobile applications will pass seamlessly through the thick and thin of a complex process, smoothly transformed at every level.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Have you ever developed applications for both smartphones and tablets?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Yes, Versatility is our priority. As experts in creating applications for both smartphones and tablets, we offer a unified user experience on all Android-compatible devices.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        From idea to launch, how long does it take for an app to start up?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Timely Delivery is crucial. From idea conception to app launch, the period depends on complexity. Efficient development is our focus, working closely with clients to ensure the product is delivered on time without compromising quality.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        What are the unique selling points or advantages of your Android app development agency?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Tailored Solutions! Our agency provides customer-oriented services, tailor-made to meet your exact requirements. We strive to be flexible in our techniques, prioritizing application development over industry processes.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem> 
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Is post-launch support and maintenance offered for developed apps?                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Yes, Continuous Assistance is provided. Post-release support and maintenance services ensure your app remains up-to-date, running optimally in the ever-changing Android ecosystem.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                            
                        </div>
                    </div>
                </div> */}
                <AndroidHireFAQ/>

                <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423855/telephone_bcbfsw.png' alt="call-icon" title="call-icon" />
          </button>

        </div>

            </div>
            <Footer/>
        </>
    )
}

export default AndroidDevComponent;