"use client"
import React, { useState, useEffect } from 'react'

import "@splidejs/react-splide/css";


import ServiceCommon from '../../COMMON/ServiceCommon';
import Process from '../../COMMON/Process';
import ContactForm3 from '../../COMMON/ContactForm3';
import Link from 'next/link';
import Footer from '@/app/COMMON/Footer';
import Navbar from '@/app/COMMON/Navbar';

import '../../globals.css'
import IosHireFAQ from '@/app/COMMON/IosHireFAQ';
// import { Helmet } from 'react-helmet';
const IosComponent = () => {

    const [tab, setTab] = useState(1);
    const [perPage, setPerPage] = useState(3);
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
        <Navbar/>
        {/* <Helmet> */}
        <link rel="canonical" href="https://www.kusheldigi.com/hire/ios-developer"/>
        {/* </Helmet> */}
            <div className="ser-main">
            <div className="phppp-main">
                <div className="php-back">
                    <div className="php-back1 native_back1 reactnativehireee">
                        <h1>iOS App Development Company</h1>
                        <p>
                        We create mobile apps with the latest technological plans and excellent products.
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
                    <div className="key_features1">
                        <h2>KEY FEATURES</h2>
                        <div className="features_card">
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_10_q4cqac.png
" alt="Cost Effective" title='Cost Effective' />
                                <p>Cost Effective</p>
                            </div>
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_11_ufy071.png
" alt="High Performance" title='High Performance' />
                                <p>High Performance</p>
                            </div>
                            <div className="features_box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916098/download_12_ajggna.png
" alt="Web Support" title='Web Support' />
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
                            <h2>iOS App Development Services</h2>
                            <p>Our experts who develop excellent apps for Apple devices offer services for developing iOS applications. You may get outstanding efficiency, security, and quality along with an unmatched customer experience from these services. iOS app developers use a combination of technical expertise, real-world experience, and amazing visual abilities to produce apps that are both user-friendly and visually appealing.</p>
                        </div>
                        <div className='key_tanda'>
                            <div className="key_tanda1">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172278/sidhaTandi_nlsoam.png' alt="straight line design" title='straight line design' />
                                <div className='tandi_nav'>
                                    <p onClick={tabAnother1} id='pex1'>iOS App Development Insights
</p>
                                    <p onClick={tabAnother2} id='pex2'>iOS app UI/UX
</p>
                                    <p onClick={tabAnother3} id='pex3'>Tailored iOS App Development Solutions
</p>
                                    <p onClick={tabAnother4} id='pex4'>Rigorous iOS Software Testing
</p>
                                </div>
                            </div>
                            <div className="key_tanda2">
                                {
                                    tab === 1 && (
                                        <div className='key_imgTand'>
                                            <p>Deepness of return to investors, importance of UI/UX design, keeping track of the latest technological trends, and supporting users' preferences are some of the important requirements in iOS app development.
</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="bottom design" />
                                        </div>
                                    )
                                }

                                {
                                    tab === 2 && (
                                        <div className='key_imgTand'>
                                            <p>The UI/UX of iOS applications is crucial to their development. An application's success is likely to be related to its attractive user interface (UI) and user experience (UX).
</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="bottom design" title='bottom design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 3 && (
                                        <div className='key_imgTand'>
                                            <p>custom iOS app development solutions depend on user requirements and corporate goals. These tools can be used to create individualised, safe, and effective apps.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="bottom design" title='bottom design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 4 && (
                                        <div className='key_imgTand'>
                                            <p>One of the most important steps in ensuring the stability, security, and quality of apps is the thorough testing procedure for iOS software. That may reduce production errors and give users the greatest possible experience.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724918174/download_20_d2lurc.png" alt="bottom design" title='bottom design' />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <Process/>
                {/* =================process ayega============ */}

                <div className="android_teck">
                    <h5>T E C H N O L O G I E S</h5>
                    <div className='ttr'></div>
                    <div className="android_tect_card">

                        <div className='ty_py ty_py11'>
                            <div className="ty_py1">
                                <div className="koiy_img">
                                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724920970/download_36_dgqg6q.png" alt="Swift" title='Swift' />
                                </div>
                                <p>Swift</p>
                            </div>
                            <div className="ty_py1">
                                <div className="koiy_img">
                                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724920970/download_37_pcnibb.png" alt="objective-C" title='objective-C' />
                                </div>
                                <p>objective-C</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Whyy-chosee">
                <div className="why_chose_ios dine-1234">
                    <h2 >Why Choose Kushel Digi for ios App Development?</h2>
                    <p className='why_chst'>Selecting Kushel Digi for iOS app development makes appeal as it employs a group of knowledgeable and skilled developers who ensure timely delivery and high-quality work.</p>

                    <div className="apli-cards">
                        <div className="apli-card">
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921246/download_38_gb9cgd.png" alt="Client-Centric Excellence" />
                                <div className="gt_head">
                                    <h2>Client-Centric Excellence
</h2>
                                    <p>Excellence focused on the needs of the customer is the reason for selecting Kushel Digi for iOS app development. Our staff has a great deal of knowledge and competence. They know how to satisfy clients' needs. We use the newest technology, prompt delivery, and high quality to guarantee client happiness.</p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921242/download_39_nu6xac.png" alt="Continuous Security" title='Continuous Security' />
                                <div className="gt_head">
                                    <h2>Continuous Security</h2>
                                    <p>Security without sacrificing any standards. We should choose Kushel Digi developers due to its constant security. Their knowledgeable staff uses creativity and technological know-how to ensure the security of your software."</p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921242/download_40_l9ltkt.png" alt="Punctuality Assured" title='Punctuality Assured' />
                                <div className="gt_head">
                                    <h2>Punctuality Assured</h2>
                                    <p>The confidence of continuity is the reason behind selecting Kushel Digi for iOS app development. Our goal is to finish projects on schedule without hurting your company's bottom line. Our staff maintains the level of the output while working quick and accurately.</p>
                                </div>
                            </div>

                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921242/download_41_ujirqu.png" alt="Robust Marketing Partnership"  title='Robust Marketing Partnership'/>
                                <div className="gt_head">
                                    <h2> Robust Marketing Partnership
</h2>
                                    <p>Here are some solid reasons for choosing Kushel Digi as your iOS app development partner for an effective marketing cooperation: Their highly skilled development team, superior quality, distinctive designs, and timely printing. They are ready and willing to advertise your app on the market.
</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

                <div className="boost boost1">
                    <div className="boost_sect boost_sect1 boost_sect2">
                        <h3>We hold the key to making your app rule the digital space</h3>
                        <p>Let's work together</p>
                        <div className="boost_button boost_button1">
                        <Link href="/contact-us">
                            <button>HIRE NOW</button></Link>
                        </div>
                    </div>
                </div>

                <ServiceCommon/>

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
                                        Why should I hire an iOS app development agency for my project?                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Hiring an iOS app development agency ensures increased project reliability through structured methodology and quality assurance, leveraging specialised teams with expertise in iOS standards.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        What kinds of iOS applications can an agency develop?                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        iOS app development agencies can create various applications, including consumer, business, gaming, e-commerce, healthcare, education, and more.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        How do I know iOS is right for my app?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        If your target audience comprises Apple device users, especially a high-paying segment, and if you plan to sell your app on the App Store, then iOS is the best strategy for you.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Do iOS app development agencies develop apps for both iPhones and iPads?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Yes, most agencies design apps that seamlessly work on both iPhones and iPads, accommodating different screen sizes and functionalities.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                 <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        How can an iOS app development agency help with updating and maintaining the program? 
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Agencies assist with regular updates, bug fixes, feature additions, and maintaining compatibility with the latest iOS versions, ensuring sustained functionality and security.                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                         
                        </div>
                    </div>
                </div> */}
<IosHireFAQ/>
                
                <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469745/telephone_twhjto.png' alt="call-icon" title="call-icon" />
          </button>

        </div>

            </div>
            <Footer/>
        </>
    )
}

export default IosComponent;