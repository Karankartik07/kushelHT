"use client"
import Head from 'next/head';
import Link from "next/link";
import { useState } from "react";
import '../../globals.css';

import Footer from "../../COMMON/Footer";
import Navbar from "../../COMMON/Navbar";
import NodejsFAQ from "../../COMMON/NodejsFAQ";
const NodeJsComponent = () => {
    const [tab, setTab] = useState(1);

    const tabAnother1 = () => {
        setTab(1);
        document.getElementById("node1").style.backgroundColor = "rgb(233 235 240)";
        document.getElementById("node2").style.backgroundColor = "transparent";
        document.getElementById("node3").style.backgroundColor = "transparent";
        document.getElementById("node4").style.backgroundColor = "transparent";
        document.getElementById("node5").style.backgroundColor = "transparent";
        document.getElementById("node6").style.backgroundColor = "transparent";
    }

    const tabAnother2 = () => {
        setTab(2);
        document.getElementById("node1").style.backgroundColor = "transparent";
        document.getElementById("node2").style.backgroundColor = "rgb(233 235 240)";
        document.getElementById("node3").style.backgroundColor = "transparent";
        document.getElementById("node4").style.backgroundColor = "transparent";
        document.getElementById("node5").style.backgroundColor = "transparent";
        document.getElementById("node6").style.backgroundColor = "transparent";
    }

    const tabAnother3 = () => {
        setTab(3);
        console.log(tab)
        document.getElementById("node1").style.backgroundColor = "transparent";
        document.getElementById("node2").style.backgroundColor = "transparent";
        document.getElementById("node3").style.backgroundColor = "rgb(233 235 240)";
        document.getElementById("node4").style.backgroundColor = "transparent";
        document.getElementById("node5").style.backgroundColor = "transparent";
        document.getElementById("node6").style.backgroundColor = "transparent";
    }

    const tabAnother4 = () => {
        setTab(4);
        document.getElementById("node1").style.backgroundColor = "transparent";
        document.getElementById("node2").style.backgroundColor = "transparent";
        document.getElementById("node3").style.backgroundColor = "transparent";
        document.getElementById("node4").style.backgroundColor = "rgb(233 235 240)";
        document.getElementById("node5").style.backgroundColor = "transparent";
        document.getElementById("node6").style.backgroundColor = "transparent";
    }

    const tabAnother5 = () => {
        setTab(5);
        document.getElementById("node1").style.backgroundColor = "transparent";
        document.getElementById("node2").style.backgroundColor = "transparent";
        document.getElementById("node3").style.backgroundColor = "transparent";
        document.getElementById("node4").style.backgroundColor = "transparent";
        document.getElementById("node5").style.backgroundColor = "rgb(233 235 240)";
        document.getElementById("node6").style.backgroundColor = "transparent";
    }

    const tabAnother6 = () => {
        setTab(6);
        document.getElementById("node1").style.backgroundColor = "transparent";
        document.getElementById("node2").style.backgroundColor = "transparent";
        document.getElementById("node3").style.backgroundColor = "transparent";
        document.getElementById("node4").style.backgroundColor = "transparent";
        document.getElementById("node5").style.backgroundColor = "transparent";
        document.getElementById("node6").style.backgroundColor = "rgb(233 235 240)";
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
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

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
                <div className="node_dev_ss node-bg">
                    <div className="node_dev_ss-back01">
                        <div className="node_dev_ss-back1">
                            <div className="node_dev_ss_head">
                                <h1>Affordable node js development <br /> services in india</h1>
                            </div>
                            <div className="node_dev_ss_para node-para1">
                                <p>
                                    As part of the Node.js community since the start, we have the
                                    right expertise to make your app development dreams come true.
                                </p>
                            </div>
                            <Link href="/contact-us" className="buttunn buttunn1"><button>Lets get started
                                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                                </svg></button></Link>
                        </div>
                        <div className="node_dev_ss-back2 node_dev_ss-back02">
                            {/* <img src={nodejsImage} alt="Node js development services" title="Node js development services" /> */}
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848873/nodejsImage.b757391be1baccef8ec5_rgnia1.png" alt="Node js development services" title="Node js development services" />
                        </div>
                    </div>
                </div>

                <div className="node_dev_ss_about">
                    <div className="node_dev_ss_about1">
                        <h3> Node js Development Services</h3>
                        <p>
                            We consider Node.js as a unique service capable of providing top performance, big scalability, and much more for our customers when building web applications. Our engineering team will provide you with the custom-tailored solution, ensure a smooth integration, process data in real-time, and do a comprehensive performance optimization.
                        </p>
                    </div>
                    <div className="node_dev_ss_about2">
                        {/* <img className="nodejsleftss" src={nodejsleftss} alt="Node js development services-kusheldigi" title="Node js development services-kusheldigi" /> */}
                        <img className="nodejsleftss" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848870/nodejsleftss.115ff3f55b8ec24fd0b4_jubefh.png" alt="Node js development services-kusheldigi" title="Node js development services-kusheldigi" />
                    </div>
                </div>

                <div className="node_dev_ss_serv dine-1234">
                    <h2>
                        {" "}
                        Our <span>NodeJS </span>service attributes
                    </h2>
                    <p>From custom applications to API designing and integration, our NodeJS development services will cover
                        everything you need. Our experts will craft tailored solutions aligned perfectly with your business
                        requirements and future goals. That’s how we ensure you can stay ahead in the curve with a responsive
                        and high-performing website developed using NodeJS.</p>
                    <div className="node_dev_ss_cards">
                        <div className="node_dev_ss_card">
                            <div className="node_dev_ss_box">
                                <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.4063 49.9688H39.0255L37.9317 46.6875H18.0683L16.9745 49.9688H11.5937C10.6871 49.9688 9.95312 50.7028 9.95312 51.6094C9.95312 52.516 10.6871 53.25 11.5937 53.25H44.4063C45.3129 53.25 46.0469 52.516 46.0469 51.6094C46.0469 50.7028 45.3129 49.9688 44.4063 49.9688Z" fill="#1265FF" />
                                    <path d="M44.4063 10.5938C43.501 10.5938 42.7656 11.3291 42.7656 12.2344C42.7656 13.1398 43.501 13.875 44.4063 13.875C45.3116 13.875 46.0469 13.1398 46.0469 12.2344C46.0469 11.3291 45.3116 10.5938 44.4063 10.5938Z" fill="#1265FF" />
                                    <path d="M50.9687 0.75H4.92187C2.20801 0.75 0 2.958 0 5.67187V33.5625H9.95313V28.6406C9.95313 27.734 10.6871 27 11.5937 27H14.1286C14.2982 26.5227 14.4922 26.0545 14.7118 25.5948L12.9187 23.8003C12.2778 23.1595 12.2778 22.1213 12.9187 21.4804L17.5585 16.8405C18.1994 16.1997 19.2376 16.1997 19.8785 16.8405L21.6729 18.6349C22.1326 18.4153 22.6005 18.2201 23.0781 18.0501V15.5156C23.0781 14.609 23.8121 13.875 24.7187 13.875H31.2813C32.1879 13.875 32.9219 14.609 32.9219 15.5156V18.0505C33.3991 18.2201 33.8674 18.4158 34.3271 18.6349L36.1215 16.8405C36.7624 16.2001 37.8006 16.2001 38.4415 16.8405L43.0813 21.4804C43.7222 22.1213 43.7222 23.1599 43.0813 23.8003L41.2882 25.5948C41.5078 26.0549 41.7018 26.5227 41.8714 27H44.4063C45.3129 27 46.0469 27.734 46.0469 28.6406V33.5625H56V5.67187C56 2.958 53.6826 0.75 50.9687 0.75ZM44.4063 17.1563C41.6924 17.1563 39.4844 14.9483 39.4844 12.2344C39.4844 9.52053 41.6924 7.31253 44.4063 7.31253C47.1201 7.31253 49.3281 9.52053 49.3281 12.2344C49.3281 14.9483 47.1201 17.1563 44.4063 17.1563Z" fill="#1265FF" />
                                    <path d="M23.0781 31.9219C23.0781 32.4888 23.2089 33.0357 23.3964 33.5625H32.6036C32.7911 33.0357 32.9219 32.4888 32.9219 31.9219C32.9219 29.208 30.7139 27 28 27C25.2857 27 23.0781 29.208 23.0781 31.9219Z" fill="#1265FF" />
                                    <path d="M16.9288 29.0508C16.7416 29.7749 16.0879 30.2812 15.3394 30.2812H13.2344V33.5625H20.0126C19.9024 33.022 19.7968 32.479 19.7968 31.9219C19.7968 27.399 23.4772 23.7187 28 23.7187C32.5228 23.7187 36.2031 27.399 36.2031 31.9219C36.2031 32.479 36.0976 33.022 35.9873 33.5625H42.7656V30.2812H40.6606C39.912 30.2812 39.2583 29.7749 39.0712 29.0508C38.8097 28.0335 38.4013 27.0495 37.8566 26.1267C37.4767 25.4829 37.581 24.6625 38.1094 24.1336L39.6014 22.6404L37.2814 20.3204L35.7882 21.8136C35.2593 22.3442 34.4373 22.4498 33.7934 22.0653C32.8723 21.5222 31.89 21.1121 30.871 20.8506C30.1469 20.6635 29.6406 20.0098 29.6406 19.2612V17.1562H26.3594V19.2612C26.3594 20.0098 25.853 20.6635 25.1289 20.8506C24.1099 21.1121 23.1276 21.5222 22.2065 22.0653C21.5656 22.4498 20.7419 22.3442 20.2117 21.8136L18.7185 20.3204L16.3985 22.6404L17.8905 24.1336C18.419 24.6625 18.5232 25.4829 18.1434 26.1267C17.5986 27.0495 17.1902 28.0335 16.9288 29.0508Z" fill="#1265FF" />
                                    <path d="M0 38.4844C0 41.1983 2.20801 43.4063 4.92187 43.4063H50.9687C53.6826 43.4063 56 41.1983 56 38.4844V36.8438H0V38.4844Z" fill="#1265FF" />
                                </svg>
                                <h3>Custom Node.js Development</h3>
                                <p>
                                    When you have unique business requirements, we will help you
                                    make a custom, lightweight, cost-efficient web application
                                    with our skilled Node.js developers, tailored to your
                                    timeline, budget, and needs.
                                </p>
                            </div>
                            <div className="node_dev_ss_box Node-box-dublicate-class">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.6484 6H47.176V9.057H37.6484V6Z" fill="#1265FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M54.0646 6H50.2225V9.4704C50.2225 10.9227 49.0423 12.1039 47.5921 12.1039H37.2306C35.7803 12.1039 34.6012 10.9227 34.6012 9.4704V6H30.7479C28.4963 6 26.6641 7.8322 26.6641 10.0838V12.5473C35.4588 14.6495 41.9974 22.5611 41.9974 32C41.9974 41.4389 35.4588 49.3505 26.6641 51.4527V53.9162C26.6641 56.1678 28.4963 58 30.7479 58H54.0646C56.3173 58 58.1485 56.1678 58.1485 53.9162V10.0838C58.1485 7.8322 56.3173 6 54.0646 6Z" fill="#1265FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M38 32C38 40.8365 30.8365 48 22 48C13.1635 48 6 40.8365 6 32C6 23.1635 13.1635 16 22 16C30.8365 16 38 23.1635 38 32ZM22.2439 23.3333C17.2923 23.3333 13.3333 27.2437 13.3333 32C13.3333 36.7563 17.2923 40.6667 22.2439 40.6667C24.9166 40.6667 27.3068 39.5243 28.9378 37.7203C29.4317 37.1741 30.2748 37.1317 30.8211 37.6255C31.3673 38.1194 31.4097 38.9625 30.9159 39.5088C28.7927 41.8569 25.6903 43.3333 22.2439 43.3333C15.8805 43.3333 10.6667 38.2893 10.6667 32C10.6667 25.7107 15.8805 20.6667 22.2439 20.6667C28.0377 20.6667 32.8784 24.848 33.6987 30.3435L34.4019 29.657C34.9289 29.1426 35.7731 29.1528 36.2874 29.6797C36.8018 30.2067 36.7917 31.0508 36.2647 31.5652L33.6521 34.1157C33.0045 34.7477 31.9711 34.7477 31.3236 34.1157L28.7109 31.5652C28.1839 31.0508 28.1738 30.2067 28.6882 29.6797C29.2025 29.1528 30.0467 29.1426 30.5737 29.657L30.9123 29.9876C29.9818 26.1888 26.4753 23.3333 22.2439 23.3333ZM17.8395 28.2241C18.3811 27.8359 19.1318 27.9654 19.5156 28.5099L21.8121 31.7699C22.2356 31.8252 22.611 32.0265 22.8869 32.3281H25.4646C26.1286 32.3281 26.6667 32.8711 26.6667 33.5404C26.6667 34.2097 26.1287 34.7527 25.4646 34.7527H22.8873C22.5625 35.1076 22.1011 35.3333 21.5842 35.3333C20.6024 35.3333 19.8071 34.5305 19.8071 33.5399C19.8071 33.4121 19.8214 33.2873 19.8465 33.1674L17.5555 29.9147C17.171 29.3685 17.2982 28.6114 17.8395 28.2241Z" fill="#1265FF" />
                                </svg>
                                <h3>Real-time Application</h3>
                                <p>
                                    Whether you want a live streaming app or an online game, our NodeJS developers will help transform
                                    your vision into reality. This JavaScript technology is based on an event-driven, non-blocking architecture
                                    that reduces latency and delivers seamless user experience in real time.
                                </p>
                            </div>
                            <div className="node_dev_ss_box">
                                <svg width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.289062 47.1091V45.4854H19.7736V47.1091C19.7736 49.795 17.5883 51.9802 14.9024 51.9802H5.16019C2.47431 51.9802 0.289062 49.795 0.289062 47.1091Z" fill="#1265FF" />
                                    <path d="M19.7736 29.248H0.289062V42.2377H19.7736V29.248Z" fill="#1265FF" />
                                    <path d="M0.289062 24.3771C0.289062 21.6912 2.47431 19.5059 5.16019 19.5059H14.9024C17.5883 19.5059 19.7736 21.6912 19.7736 24.3771V26.0007H0.289062V24.3771Z" fill="#1265FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.9024 16.2586C19.3787 16.2586 23.021 19.9009 23.021 24.3772V32.4957H55.7117V4.89261C55.7117 2.20672 53.5265 0.0214844 50.8406 0.0214844H5.16019C2.47431 0.0214844 0.289062 2.20672 0.289062 4.89261V17.9237C1.65019 16.8933 3.3255 16.2586 5.16019 16.2586H14.9024ZM28.6602 15.9745C28.6602 10.5892 33.0353 6.20705 38.4131 6.20705C43.7906 6.20705 48.1657 10.5892 48.1657 15.9745C48.1657 21.3595 43.7906 25.7416 38.4131 25.7416C33.0353 25.7416 28.6602 21.3595 28.6602 15.9745ZM37.6901 20.0558L44.0067 13.7334C44.6292 13.11 44.6288 12.0998 44.0054 11.4768C43.382 10.8539 42.3718 10.8543 41.7489 11.4777L35.8104 17.4211L34.1266 15.7376C33.5036 15.1143 32.4929 15.1143 31.87 15.7376C31.2467 16.3606 31.2467 17.3712 31.87 17.9942L33.9321 20.0567C34.4337 20.5582 35.101 20.8346 35.8104 20.8346H35.8112C36.521 20.8346 37.188 20.5578 37.6901 20.0558Z" fill="#1265FF" />
                                    <path d="M50.8431 42.238H23.0234V35.7432H55.7142V37.3669C55.7142 40.0528 53.5289 42.238 50.8431 42.238Z" fill="#1265FF" />
                                    <path d="M23.0245 47.1091V45.4854H37.8332L38.9158 48.7328H44.241C45.1383 48.7328 45.8647 49.4592 45.8647 50.3565C45.8647 51.2538 45.1383 51.9802 44.241 51.9802H21.3594C22.3898 50.6191 23.0245 48.9438 23.0245 47.1091Z" fill="#1265FF" />
                                </svg>
                                <h3>Enterprise Application Development</h3>
                                <p>
                                    Our team always stands with you when such an issue is about building powerful enterprise applications using node.js. We stand step by step with the big industries and provide a chain of efficient procedures with a deeper body of knowledge to help create quality products perfect for business operations.
                                </p>
                            </div>

                            <div className="node_dev_ss_box">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.1633 57.333H2.66406V59.1521C2.66406 60.3541 3.72457 61.333 5.02678 61.333H24.6641C24.3425 60.6658 24.1633 59.9281 24.1633 59.1521V57.333Z" fill="#1265FF" />
                                    <path d="M39.8367 57.333V59.1521C39.8367 59.9281 39.6575 60.6658 39.3359 61.333H58.9732C60.2754 61.333 61.3359 60.3541 61.3359 59.1521V57.333H39.8367Z" fill="#1265FF" />
                                    <path d="M27.3359 59.1521C27.3359 60.3541 28.4031 61.333 29.7135 61.333H34.2917C35.6021 61.333 36.6693 60.3541 36.6693 59.1521V57.333H27.3359V59.1521Z" fill="#1265FF" />
                                    <path d="M18 40.0003H22L19.9779 34.667L18 40.0003Z" fill="#1265FF" />
                                    <path d="M37.6309 32.7758C37.2033 32.6179 36.388 32.6821 35.9338 32.6702H34.6641V37.3337H36.8813C39.6595 37.1965 40.2974 33.6688 37.6309 32.7758Z" fill="#1265FF" />
                                    <path d="M9.9972 20.667C8.15626 20.667 6.66406 22.1594 6.66406 24.0003V53.3337H57.3307V24.0003C57.3307 22.1594 55.8385 20.667 53.9976 20.667C39.4832 20.667 24.5114 20.667 9.9972 20.667ZM18.2782 28.8968C19.1288 28.8959 20.4846 28.8955 21.3327 28.8945L21.7727 30.0483L27.8334 45.9561H24.1751C23.7893 44.9435 23.2993 43.6572 23.2167 43.4403H16.507C16.4068 43.7092 15.9641 44.8971 15.5697 45.9561H11.9217L18.0525 29.5021L18.2782 28.8968ZM37.132 40.498H34.8605V45.9561H31.4412C31.4412 41.5919 31.4412 33.1537 31.4412 28.8957C32.8837 28.9011 35.7299 28.8917 37.14 28.8957C38.6801 28.8953 40.1861 29.5221 41.2807 30.6047C44.9689 34.2293 42.2747 40.4393 37.132 40.498ZM50.6244 45.9561H47.2051V28.6841H50.6244V45.9561Z" fill="#1265FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M46 15.0708V16.0003C46 16.2432 45.9351 16.4709 45.8216 16.667H18.1784C18.0649 16.4709 18 16.2432 18 16.0003V15.0707C18 14.3528 18.582 13.7708 19.2999 13.7708C19.8977 13.7708 20.4114 13.3604 20.6036 12.7943C20.7726 12.2967 20.9732 11.8137 21.2031 11.3477C21.4677 10.8114 21.3947 10.1577 20.9719 9.73486C20.4641 9.22713 20.4641 8.40393 20.9719 7.89619L23.2291 5.63893C23.7369 5.13119 24.5601 5.13119 25.0678 5.63893C25.4907 6.06179 26.1443 6.13473 26.6806 5.87013C27.1465 5.64024 27.6296 5.43966 28.1272 5.27069C28.6933 5.07849 29.1038 4.56482 29.1038 3.96699C29.1038 3.24902 29.6858 2.66699 30.4037 2.66699H33.5962C34.3142 2.66699 34.8962 3.24903 34.8962 3.967C34.8962 4.56483 35.3067 5.0785 35.8728 5.27071C36.3704 5.43969 36.8534 5.64028 37.3194 5.87019C37.8557 6.13477 38.5093 6.06181 38.9322 5.63897C39.4399 5.13121 40.2631 5.13122 40.7709 5.63898L43.0281 7.89619C43.5358 8.40393 43.5358 9.22713 43.0281 9.73486C42.6052 10.1577 42.5322 10.8114 42.7969 11.3477C43.0267 11.8136 43.2273 12.2966 43.3963 12.7942C43.5885 13.3603 44.1021 13.7708 44.7 13.7708C45.4179 13.7708 46 14.3528 46 15.0708ZM40.6667 16.667H23.3333C23.3333 11.8805 27.2135 8.00033 32 8.00033C36.7865 8.00033 40.6667 11.8805 40.6667 16.667Z" fill="#1265FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28 16.667H36C36 14.4579 34.2091 12.667 32 12.667C29.7909 12.667 28 14.4579 28 16.667Z" fill="#1265FF" />
                                </svg>
                                <h3>API Development and Improvement</h3>
                                <p>
                                    API development and improvement are our strongest suit, designed with highly customised and improved Node.js platform. One of the merits of being our customers is the unparalleled competence of our team in creating reliable and effective APIs in addition to which they improve the overall process of the app and, hence, correspondence between different platforms is avoided.
                                </p>
                            </div>
                            <div className="node_dev_ss_box">
                                <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.4063 49.9688H39.0255L37.9317 46.6875H18.0683L16.9745 49.9688H11.5937C10.6871 49.9688 9.95312 50.7028 9.95312 51.6094C9.95312 52.516 10.6871 53.25 11.5937 53.25H44.4063C45.3129 53.25 46.0469 52.516 46.0469 51.6094C46.0469 50.7028 45.3129 49.9688 44.4063 49.9688Z" fill="#1265FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50.9687 0.75H4.92187C2.20801 0.75 0 2.958 0 5.67187V33.5625H9.95313H46.0469H56V5.67187C56 2.958 53.6826 0.75 50.9687 0.75ZM30.0807 3.60627C30.2983 3.09867 30.8861 2.8636 31.3937 3.08107C31.9013 3.2986 32.1365 3.88647 31.9189 4.39413L25.9193 18.3937C25.7018 18.9011 25.1141 19.1365 24.6063 18.9189C24.0987 18.7013 23.8635 18.1135 24.0811 17.6059L30.0807 3.60627ZM22.9758 13.4565L19.1435 10.6666L22.9758 7.87673C23.3866 7.57773 23.4532 7.03233 23.1246 6.6586C22.7959 6.28487 22.1965 6.22427 21.7859 6.52327L17.0239 9.98993C16.5477 10.3364 16.5474 10.9966 17.0239 11.3434L21.7859 14.8101C22.1967 15.1091 22.7961 15.0484 23.1246 14.6747C23.4532 14.3009 23.3866 13.7555 22.9758 13.4565ZM34.2141 6.52333L38.9761 9.98993C39.4526 10.3367 39.4523 10.9969 38.9761 11.3434L34.2141 14.8101C33.8039 15.1087 33.2045 15.0489 32.8754 14.6747C32.5468 14.3009 32.6134 13.7556 33.0242 13.4566L36.8565 10.6667L33.0242 7.87673C32.6134 7.5778 32.5468 7.0324 32.8754 6.6586C33.2039 6.28487 33.8033 6.22427 34.2141 6.52333Z" fill="#1265FF" />
                                    <path d="M0 38.4844C0 41.1983 2.20801 43.4063 4.92187 43.4063H50.9687C53.6826 43.4063 56 41.1983 56 38.4844V36.8438H0V38.4844Z" fill="#1265FF" />
                                    <path className="mvp" d="M22.4197 21.667L19.753 26.0803L17.073 21.667H15.1797V31.0003H17.0197V24.9603L19.6464 29.2803H19.8597L22.4864 24.947V31.0003H24.313V21.667H22.4197ZM30.6388 31.0003L33.7854 21.667H31.7721L29.5054 28.8403L27.2254 21.667H25.2254L28.3588 31.0003H30.6388ZM34.6849 21.667V31.0003H36.5249V27.9337H38.1649C39.0582 27.9337 39.8182 27.627 40.4316 27.027C41.0449 26.427 41.3516 25.6803 41.3516 24.8003C41.3516 23.9203 41.0449 23.1737 40.4316 22.5737C39.8182 21.9737 39.0582 21.667 38.1649 21.667H34.6849ZM36.5249 26.2137V23.387H38.1649C38.9516 23.387 39.5249 23.987 39.5249 24.8003C39.5249 25.6003 38.9516 26.2137 38.1649 26.2137H36.5249Z" fill="white" />
                                </svg>
                                <h3>MVP development</h3>
                                <p>
                                    Make assured that through the application of Javascript Node.js Framework Visually. The cooperation aspect is relevant as it starts along the process, which will finish with the highly working prototype embodying its main features and also the basis for the future development.
                                </p>
                            </div>
                            <div className="node_dev_ss_box">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66406 13.9997H61.3307V8.66634C61.3307 5.72082 58.9429 3.33301 55.9974 3.33301H7.9974C5.05188 3.33301 2.66406 5.72082 2.66406 8.66634V13.9997Z" fill="#1265FF" />
                                    <path d="M19.9974 9.99967C20.7338 9.99967 21.3307 9.40274 21.3307 8.66634C21.3307 7.92994 20.7338 7.33301 19.9974 7.33301C19.261 7.33301 18.6641 7.92994 18.6641 8.66634C18.6641 9.40274 19.261 9.99967 19.9974 9.99967Z" fill="white" />
                                    <path d="M14.6693 9.99967C15.4057 9.99967 16.0026 9.40274 16.0026 8.66634C16.0026 7.92994 15.4057 7.33301 14.6693 7.33301C13.9329 7.33301 13.3359 7.92994 13.3359 8.66634C13.3359 9.40274 13.9329 9.99967 14.6693 9.99967Z" fill="white" />
                                    <path d="M9.33333 9.99967C10.0697 9.99967 10.6667 9.40274 10.6667 8.66634C10.6667 7.92994 10.0697 7.33301 9.33333 7.33301C8.59693 7.33301 8 7.92994 8 8.66634C8 9.40274 8.59693 9.99967 9.33333 9.99967Z" fill="white" />
                                    <path d="M38.4232 41.3333L42.352 37.4054C44.3772 37.9399 46.9127 37.3649 48.6787 35.5994C50.3393 33.9472 50.9631 31.6391 50.5419 29.501C50.4365 28.9827 49.7723 28.8045 49.3997 29.177L45.7867 32.7891C45.5194 33.0564 45.0982 33.0564 44.8308 32.7891L41.8903 29.8411C41.623 29.5739 41.623 29.1527 41.8903 28.8855L45.5113 25.2653C45.8839 24.8927 45.7057 24.2287 45.1873 24.1233C43.0406 23.7103 40.74 24.3339 39.0713 26.0023C37.2243 27.8489 36.7383 30.5215 37.2648 32.3193L33.3359 36.2473L38.4232 41.3333Z" fill="#1265FF" />
                                    <path d="M30.6693 49.0873L25.5825 44L21.6541 47.9289C19.6129 47.4024 17.0857 47.9856 15.328 49.7435C12.4282 52.6437 12.6955 57.5042 16.1218 60.0317C18.2035 61.5709 21.0627 61.7571 23.3388 60.5259C26.3844 58.8813 27.3807 55.5114 26.7408 53.0163L30.6693 49.0873ZM22.4802 56.8966L19.2645 57.7553L16.9075 55.4061L17.7741 52.19L20.9899 51.3232L23.3388 53.6806L22.4802 56.8966Z" fill="#1265FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66406 16.667H61.3307V48.0003C61.3307 50.9459 58.9429 53.3337 55.9974 53.3337H50.5663C50.5015 53.2614 50.4345 53.1904 50.3653 53.1208L39.9119 42.6681L43.0259 39.5549C45.4582 39.8046 48.1382 38.9619 50.0858 37.0159C52.2384 34.8731 53.0439 31.8807 52.4989 29.1147L52.4978 29.1089L52.4966 29.1031C52.0499 26.9045 49.3947 26.3491 47.9804 27.7629L45.3049 30.4379L44.2346 29.3649L46.9201 26.68C48.3356 25.2649 47.7779 22.61 45.5801 22.1637L45.57 22.1617L45.5599 22.1597C42.7875 21.6263 39.8081 22.4327 37.6519 24.5883C35.6565 26.5833 34.862 29.3371 35.1015 31.6492L31.9967 34.7533L29.5419 32.2986C29.7843 29.8623 28.944 27.1837 27.0055 25.2453C24.6803 22.9203 21.3797 22.1633 18.4229 22.9931C16.5132 23.5291 16.2188 25.8149 17.3939 26.9899L20.4247 30.0205L19.3563 31.091L16.3202 28.0551C15.1455 26.8805 12.8595 27.174 12.3234 29.0843C11.4933 32.0421 12.2515 35.3408 14.5729 37.6717L14.5762 37.6751L14.5796 37.6785C16.5379 39.6259 19.2081 40.4521 21.6295 40.2109L24.1699 42.7511L20.8765 46.0444C20.5875 46.0153 20.2941 46.0003 19.9974 46.0003C15.6643 46.0003 12.074 49.1802 11.4327 53.3337H7.9974C5.05188 53.3337 2.66406 50.9459 2.66406 48.0003V16.667ZM32.0625 50.6433L29.3721 53.3337H34.7531L32.0625 50.6433Z" fill="#1265FF" />
                                    <path d="M27.3993 32.9817C27.924 30.9419 27.344 28.4095 25.5939 26.6595C23.7965 24.8623 21.2497 24.2777 18.966 24.9186C18.682 24.9983 18.6021 25.367 18.8107 25.5755L22.7158 29.4805C23.0133 29.7779 23.0135 30.2603 22.7163 30.558L19.8995 33.3806C19.6018 33.6788 19.1187 33.6791 18.8207 33.3811L14.9087 29.4693C14.7001 29.2607 14.3313 29.3406 14.2516 29.6246C13.6107 31.9082 14.1952 34.4556 15.9926 36.2603C17.7669 38.0249 20.2899 38.5861 22.3152 38.0655L43.8656 59.6147C44.5699 60.3189 45.4847 60.667 46.4076 60.667C47.3224 60.667 48.2453 60.3189 48.9496 59.6147C50.3501 58.2141 50.3501 55.9395 48.9496 54.5309L27.3993 32.9817Z" fill="#1265FF" />
                                </svg>
                                <h3>Maintenance and Support</h3>
                                <p>
                                    At Kushel Digi Solutions, we extend our ongoing support after deploying the NodeJS application to the
                                    live server. From applying data patches to deploying security upgrades, we ensure timely performance
                                    optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="node_dev_ss_serv2">
                    <h3>
                        {" "}
                        Why <span>Clients Hire</span> us as a Node js Development Company
                    </h3>
                    <div className="node_dev_ss_serv_parat">
                        <p>
                            Built on top of JavaScript, Node.js is a back-end runtime
                            environment used to run web apps outside the client’s{" "}
                        </p>
                        <p>
                            browser. It is open-source, cross-platform, and used for
                            server-side programming. It runs on the
                        </p>
                        <p>
                            {" "}
                            Chrome V8 JavaScript engine, and was created by Ryan Dahl in 2009.
                        </p>
                    </div>
                    <div className="node_dev_ss_cards2">
                        <div className="node_dev_ss_card2">
                            <div className="node_dev_ss_box2 node-dev-sss-boxe1">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741000409/nodejsicon5_ddi93n.png' alt="Qualified IT Specialists" title="Qualified IT Specialists" />

                                <h3>Qualified IT Specialists</h3>
                                <p>
                                    Today there are 250+ qualified, talented, data-driven software
                                    engineers working for SCAND. We offer Node.JS development
                                    services and create efficient software solutions tailored to
                                    our clients' business goals.
                                </p>
                            </div>
                            <div className="node_dev_ss_box2 node-dev-sss-boxe2">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741000409/nodejsicon5_ddi93n.png' alt="Cost Savings" title="Cost Savings" />

                                <h3>Cost Savings</h3>
                                <p>
                                    Our hourly rates are much lower than they are in Western
                                    Europe and the US. Also, outsourcing software development
                                    services offered by SCAND eliminate extra expenses on
                                    infrastructure, office, salary, and training.
                                </p>
                            </div>
                            <div className="node_dev_ss_box2 node-dev-sss-boxe3">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741000409/nodejsicon5_ddi93n.png' alt="Good Command of English" title="Good Command of English" />
                                <h3>Good Command of English</h3>
                                <p>
                                    SCAND Node.JS developers are fluent in English. Although we
                                    don't claim to sound like native speakers, our accent is clear
                                    and easily understandable.
                                </p>
                            </div>
                            <div className="node_dev_ss_box2 node-dev-sss-boxe4">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741000409/nodejsicon5_ddi93n.png' alt="Zero Billing Guarantee" title="Zero Billing Guarantee" />
                                <h3>1 Month Zero Billing Guarantee</h3>
                                <p>
                                    If you are not satisfied with our work after the first month
                                    of partnership, you do not have to pay for it.
                                </p>
                            </div>
                        </div>

                        <div className="node_dev_ss_ser_btn">
                            <Link href="/contact-us"><button>DISCUSS YOUR CUSTOM REQUIREMENTS</button></Link>
                        </div>
                    </div>
                </div>

                <div className="node_dev_ss_serv4">
                    <h3>
                        What can you build with <span>Node js?</span>
                    </h3>
                    <div className="node_dev_ss_cards4">
                        <div className="node_dev_ss_card4">
                            <div className="node_dev_ss_box5">
                                <div id="node1" onClick={tabAnother1} className="node_dev_ss_box5_22"><p>Real-time dashboard
                                    <svg width="36" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="black" />
                                    </svg></p></div>
                                <div id="node2" onClick={tabAnother2} className="node_dev_ss_box5_22"><p>Chats</p></div>
                                <div id="node3" onClick={tabAnother3} className="node_dev_ss_box5_22"><p>Streaming services</p></div>
                                <div id="node4" onClick={tabAnother4} className="node_dev_ss_box5_22"><p>Serverless</p></div>
                                <div id="node5" onClick={tabAnother5} className="node_dev_ss_box5_22"><p>Microservices</p></div>
                                <div id="node6" onClick={tabAnother6} className="node_dev_ss_box5_22"><p>Interactive applications</p></div>

                            </div>
                            <div className="node_dev_ss_box6">
                                {
                                    tab === 1 && (
                                        <>
                                            <div>
                                                <h3>Real-time dashboard</h3>
                                                <p>
                                                    Our expert team of developers at Kushel Digi Solutions will integrate powerful libraries for frontend, like
                                                    React with the NodeJS backend to create dynamic and responsive dashboards. We leverage the event-
                                                    driven, non-blocking architecture of NodeJS to amplify the app’s performance and eliminate the need of
                                                    page reloads. Our team also ensures that the WebSockets used can streamline the communication between
                                                    the client and server. It will further help in displaying real-time metrics with faster data updates on the
                                                    dashboard.
                                                    Whether you want a monitoring dashboard for tracking sales or a real-time social media dashboard, we
                                                    have got your back. What’s more, we will also integrate advanced features, like role-based access, push
                                                    notifications, and data filtering for a stellar user experience.
                                                </p>
                                            </div>
                                        </>
                                    )
                                }

                                {
                                    tab === 2 && (
                                        <>
                                            <div>
                                                <h3>Chats</h3>
                                                <p>
                                                    Node.js’s event-driven nature means that the charts and graphs respond to the user’s input instantly and there’s no need to reload the page. Node js development services are the right choice when your project idea and web application relies heavily on user input and output of various data types. Leading providers of such solutions often turn to a Node js development company that can produce efficient API development in Node for web and mobile. Both web applications and mobile applications developed this way prove highly efficient. And there are even more Node js features for backend development with every version.
                                                </p>
                                            </div>
                                        </>
                                    )
                                }

                                {
                                    tab === 3 && (
                                        <>
                                            <div>
                                                <h3>Streaming services</h3>
                                                <p>
                                                    Node.js’s event-driven nature means that the charts and graphs respond to the user’s input instantly and there’s no need to reload the page. Node js development services are the right choice when your project idea and web application relies heavily on user input and output of various data types. Leading providers of such solutions often turn to a Node js development company that can produce efficient API development in Node for web and mobile. Both web applications and mobile applications developed this way prove highly efficient. And there are even more Node js features for backend development with every version.
                                                </p>
                                            </div>
                                        </>
                                    )
                                }

                                {
                                    tab === 4 && (
                                        <>
                                            <div>
                                                <h3>Serverless</h3>
                                                <p>
                                                    Node js event–driven means that charts and graphs react to the user’s input instantly and there’s no need to recharge the page. Node JS development services are the right alternative when your project idea and web application rely intemperately on user input and output of various data types. Leading providers of such solutions often turn to a node js development company that can acquire efficient API development in Noida for web and mobile. Both web and mobile applications perfected this way prove highly efficient. And there are even more Node js features for backed development with every version.
                                                </p>
                                            </div>
                                        </>
                                    )
                                }

                                {
                                    tab === 5 && (
                                        <>
                                            <div>
                                                <h3>Microservices</h3>
                                                <p>
                                                    Node.js’s event-driven nature means that the charts and graphs respond to the user’s input instantly and there’s no need to reload the page. Node js development services are the right choice when your project idea and web application relies heavily on user input and output of various data types. Leading providers of such solutions often turn to a Node js development company that can produce efficient API development in Node for web and mobile. Both web applications and mobile applications developed this way prove highly efficient. And there are even more Node js features for backend development with every version.
                                                </p>
                                            </div>
                                        </>
                                    )
                                }

                                {
                                    tab === 6 && (
                                        <>
                                            <div>
                                                <h3>Interactive applications</h3>
                                                <p>
                                                    Node.js’s event-driven nature means that the charts and graphs respond to the user’s input instantly and there’s no need to reload the page. Node js development services are the right choice when your project idea and web application relies heavily on user input and output of various data types. Leading providers of such solutions often turn to a Node js development company that can produce efficient API development in Node for web and mobile. Both web applications and mobile applications developed this way prove highly efficient. And there are even more Node js features for backend development with every version.
                                                </p>
                                            </div>
                                        </>
                                    )
                                }

                            </div>

                        </div>
                    </div>
                </div>


                <div className="node_dev_ss1">
                    <div className="node_dev_ss1-back">
                        <div className="node_dev_ss1-back1">
                            <div className="node_dev_ss1_head">
                                <h3>Not sure where to start?</h3>
                            </div>
                            <div className="node_dev_ss1_para">
                                <p>
                                    Make your next online project go smoothly with our
                                    battle-tested eCommerce development services.
                                </p>
                            </div>
                            <Link href="/contact-us">
                                <button>LET’S TALK</button> </Link>
                        </div>
                        <div className="node_dev_ss1-back2">
                            {/* <img src={callimageleft} alt="tested ecommerce development" title="tested ecommerce development" /> */}
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848870/callimageleft.eb2f3b3490152a08a73c_suz2xa.avif" alt="tested ecommerce development" title="tested ecommerce development" />
                        </div>
                    </div>
                </div>

                <div className="node_dev_ss_serv3 dine-1234">
                    <h2>
                        {" "}
                        Why are <span>Kushel Digi</span> the best Node.js development services for your business?
                        development services? </h2>
                    <div className="node_dev_ss_cards3">
                        <div className="node_dev_ss_card3">
                            <div className="node_dev_ss_box3">
                                <div className="node_dev_ss_box3_flex">
                                    <hr className="node_dev_ss_box3_hr" />
                                    <p>01</p>
                                </div>

                                <h3>Business-Oriented Development</h3>
                                <p>
                                    We should therefore build around business goals and objectives of Kushel Digi. Our development teams may organise the Node.js development service into a special one which exactly tackles your enterprise’s business land with a special focus. This simply implies that from our purpose-built solutions that will reach you remotely to the products we will only be able to execute when you ask them to do so.
                                </p>
                            </div>
                            <div className="node_dev_ss_box3">
                                <div className="node_dev_ss_box3_flex">
                                    <hr className="node_dev_ss_box3_hr" />
                                    <p>02</p>
                                </div>

                                <h3>Dedicated Project Manager</h3>
                                <p>
                                    The purpose of having a project manager will be monitoring the project to ensure that the project completion falls accordingly. They will be the end point of any information communication and coordination of any of the activities in the development process. Firstly, they will become your company’s impression and the interlink with major players in the business market.
                                </p>
                            </div>
                            <div className="node_dev_ss_box3">
                                <div className="node_dev_ss_box3_flex">
                                    <hr className="node_dev_ss_box3_hr" />
                                    <p>03</p>
                                </div>

                                <h3>Seamless Communication</h3>
                                <p>
                                    Discussing sets us open to understanding and comprehending the other's life and our own stories. Our team, whose effectiveness is measurable by the fact that they are always ready to give you a reply or status report, will be here for you. We are always here for you and ready to consult you with any of your concerns no matter what time it is. Days after days, you will be there reporting independently to the process. The whole course of development will continue to be in your hand.
                                </p>
                            </div>
                        </div>
                        <div className="node_dev_ss_card3">
                            <div className="node_dev_ss_box3">
                                <div className="node_dev_ss_box3_flex">
                                    <hr className="node_dev_ss_box3_hr" />
                                    <p>04</p>
                                </div>

                                <h3>Competitive Pricing</h3>
                                <p>
                                    Solutions provided by us compliant with all allocated means for getting this achieved and being in front of others is our competitive advantage. We will match you not only with the price, but also with the value service we are committed to. This is why our teams are always working on Node.js scalable and creative principles.
                                </p>
                            </div>
                            <div className="node_dev_ss_box3">
                                <div className="node_dev_ss_box3_flex">
                                    <hr className="node_dev_ss_box3_hr" />
                                    <p>05</p>
                                </div>

                                <h3>Data Security and Confidentiality</h3>
                                <p>
                                    As we prioritize confidentiality when handling our clients'
                                    projects, we sign a Non-Disclosure Agreement (NDA) to
                                    safeguard your ideas and information. Our team is committed to
                                    building a strong collaborative relationship with you, acting
                                    as a trustworthy partner throughout development.
                                </p>
                            </div>
                            <div className="node_dev_ss_box3">
                                <div className="node_dev_ss_box3_flex">
                                    <hr className="node_dev_ss_box3_hr" />
                                    <p>06</p>
                                </div>

                                <h3>Proactive Risk Assessment & Rigorous Testing</h3>
                                <p>
                                    We utilize various communication tools and channels to
                                    maintain transparency and foster a strong collaborative
                                    environment, making it easy for you to track progress and
                                    share feedback in real-time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="manbi">
                    <div className="manbi_card">
                        <div className="manbi_img">
                            {/* <img src={img10} alt="Lets talk kusheldigi" title="Lets talk kusheldigi" /> */}
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848869/dark-img.459eeb5fcd3172712298_pfavni.png" alt="Lets talk kusheldigi" title="Lets talk kusheldigi" />
                        </div>
                        <div className="card-textj">
                            <h3>Got a preferred workflow? We’ll <br /> adapt to your needs.</h3>
                            <p>We’re always flexible to fit your style of working.</p>
                        </div>
                        <div className="manbi-btn">
                            <Link href="/contact-us"><button>LET’S TALK</button></Link>
                        </div>
                    </div>
                </div>

                <NodejsFAQ />

                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <img className="what-image-universal" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999651/whatsapp_gqgicq.png" alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
                    </button>
                    <button onClick={callHandler}>
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999664/telephone_fxcxxc.png' alt="call-icon" title="call-icon" />
                    </button>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default NodeJsComponent;
