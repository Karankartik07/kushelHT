"use client"
import { useEffect, useState } from 'react';

import Link from 'next/link';

import "@splidejs/react-splide/css";


import Footer from '@/app/COMMON/Footer';
import Navbar from '@/app/COMMON/Navbar';
import ContactForm3 from '../../COMMON/ContactForm3';
import Process from '../../COMMON/Process';
import ServiceCommon from '../../COMMON/ServiceCommon';

import '../../globals.css';
// import { Helmet } from 'react-helmet';
const FlutterDevComponent = () => {
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Navbar />

            <div className="ser-main">
                <div className="phppp-main">
                    <div className="php-back">
                        <div className="php-back1 native_back1 reactnativehireee">
                            <h1>Enhance brand awareness by working with flutter
                                App Development Company</h1>
                            <p>Collaborate with a Flutter app development business to increase brand recognition. We have technological expertise and understanding are outstanding.
                            </p>
                            <Link href="/contact-us">
                                <button>Hire Developer</button> </Link>
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
                            <h2>Boost your business with our flutter App Development solutions</h2>
                            <p>Use our Flutter app development services to grow your company. Our high-quality products, distinctive designs, and modern technical expertise will support your market expansion. We're prepared to help your company succeed to new heights in the world of technology.</p>
                        </div>
                        <div className='key_tanda'>
                            <div className="key_tanda1">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172278/sidhaTandi_nlsoam.png' alt="staright line design" title='staright line design' />
                                <div className='tandi_nav'>
                                    <p onClick={tabAnother1} id='pex1'>Tailored flutter App Development Consultation
                                    </p>
                                    <p onClick={tabAnother2} id='pex2'>Innovative flutter App Interface Design
                                    </p>
                                    <p onClick={tabAnother3} id='pex3'>Bespoke flutter App Development
                                    </p>
                                    <p onClick={tabAnother4} id='pex4'>Rigorous flutter App Testing
                                    </p>
                                </div>
                            </div>
                            <div className="key_tanda2">
                                {
                                    tab === 1 && (
                                        <div className='key_imgTand'>
                                            <p>With customised advice for Flutter app development consulting built by experts, you will get proper guidance. The experienced developers on our team will understand your requirements. We provide appropriate advice to create an exclusive and innovative experience. Our support is vital in achieving your objectives. </p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921721/download_42_nnet6g.png" alt="staright line design" title='staright line design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 2 && (
                                        <div className='key_imgTand'>
                                            <p>A unique pathway has been established by the creative Flutter app interface design. It offers consumers a straightforward, lovely, and comprehensive experience. Its creative design makes it easy for users to explore and enjoy the app.</p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921721/download_42_nnet6g.png
" alt="staright line design" title='staright line design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 3 && (
                                        <div className='key_imgTand'>
                                            <p> It recognises the demands of the user and strives for excellence. Our Company specialises in making exceptional, unique programmes that give users a great experience. The design offers individualised and regionalized solutions by utilising modern technology.
                                            </p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921721/download_42_nnet6g.png
" alt="staright line design" title='staright line design' />
                                        </div>
                                    )
                                }

                                {
                                    tab === 4 && (
                                        <div className='key_imgTand'>
                                            <p>Continuous and rigorous testing is essential to achieve maximum performance and security of a Flutter app.The software undergoes testing across several devices and user scenarios in order to identify any potential issues and guarantee its high quality.
                                            </p>
                                            <img className='float-right' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921721/download_42_nnet6g.png
" alt="staright line design" title='staright line design' />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Process />

                {/* ==============yaha par our process lagega========== */}

                <div className="android_teck">
                    <h5>T E C H N O L O G I E S</h5>
                    <div className='ttr'></div>
                    <div className="android_tect_card">

                        <div className='ty_py ty_py11'>
                            <div className="ty_py1">
                                <div className="koiy_img">
                                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724920970/download_36_dgqg6q.png" alt="Swift" title='Swift' />
                                </div>
                                <p>Mongo Db</p>
                            </div>
                            <div className="ty_py1">
                                <div className="koiy_img">
                                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724920970/download_37_pcnibb.png" alt="objective-C" title='objective-C' />
                                </div>
                                <p>.Net</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Whyy-chosee">
                    <div className="why_chose_ios dine-1234">
                        <h2 >Why Choose Kushel Digi for flutter App Development?</h2>
                        <p className='why_chst'>Selecting Kushal Digi is a smart choice due to our experience, top-notch designs, superior quality, and prompt delivery. We offer our clients independent, unique app development services.</p>

                        <div className="apli-card">
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921246/download_38_gb9cgd.png" alt="Client Satisfaction Guarantee" title='Client Satisfaction Guarantee' />
                                <div className="gt_head">
                                    <h2>Client Satisfaction Guarantee
                                    </h2>
                                    <p>We have a special commitment to our customers that we will meet their needs and provide them an excellent app. We are committed to providing timely delivery, and high quality in communication.
                                    </p>                                </div>
                            </div>
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921242/download_39_nu6xac.png" alt="ecurity at the Core" title='' />
                                <div className="gt_head">
                                    <h2> Security at the Core</h2>
                                    <p>Security is a priority for us when developing Flutter applications. In order to protect user data, security is an essential idea that developers take into consideration while designing and creating applications. We utilise the newest security technologies and a team of experts.
                                    </p>
                                </div>
                            </div>
                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921242/download_40_l9ltkt.png
" alt="Punctual Delivery Assurance" title='Punctual Delivery Assurance' />
                                <div className="gt_head">
                                    <h2> Punctual Delivery Assurance</h2>
                                    <p> We prioritise our consumers and promise on-time delivery. Our ability to maintain orderly procedures and deliver work on schedule builds long-lasting partnerships with our clients.
                                    </p>
                                </div>
                            </div>

                            <div className="apli-box">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724921242/download_41_ujirqu.png" alt="Committed Marketing Support" title='Committed Marketing Support' />
                                <div className="gt_head">
                                    <h2>Committed Marketing Support
                                    </h2>
                                    <p>Apart from offering outstanding Flutter app development, we also offer assistance to help your app succeed. By integrating your app with appropriate marketing, publicity, and promotion, we raise its level of awareness.
                                    </p>
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
                                <button>HIRE NOW</button> </Link>
                        </div>
                    </div>
                </div>

                <ServiceCommon />

                {/* <FlutterHireFAQ /> */}

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
    )
}

export default FlutterDevComponent;