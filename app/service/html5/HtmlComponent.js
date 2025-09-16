"use client"
import React, { useEffect } from 'react'
import '@splidejs/react-splide/css'; // Or use '@splidejs/react-splide/css/core' for basic styles
import { Splide, SplideSlide } from '@splidejs/react-splide';


import Link from 'next/link';

import '../../globals.css'
import HtmlFAQ from '../../COMMON/HtmlFAQ';

import Navbar from '../../COMMON/Navbar';
import Footer from '../../COMMON/Footer';
const HtmlComponent = () => {


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
    // const generateMetadata = ({ params }) => ({
    //     title: 'top-notch affordable HTML development services',
    //     description: 'KushelDigi Solutions, recognized as a premier Website Development Company, specializes in HTML web development services aimed at elevating your brand value',
    // });

    // useEffect(() => {
    //     const { title, description } = generateMetadata({ params: {} });
    //     document.title = title;
    //     let metaDescription = document.querySelector('meta[name="description"]');
    //     metaDescription ? metaDescription.content = description :
    //         document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
    // }, []);
    return (
        <>
            <Navbar />

            <div className="ser-main">
                <div className='html_5 htmllll'>
                    <div className="html_back">
                        <div className="html_back1">
                            <div className="html_head">
                                <h1>Affordable HTML5 development <br /> services  in India</h1>
                            </div>
                            <div className="html_head_para">
                                <p>HTML5 is the latest version of Hypertext Markup Language consisting of HTML, CSS, and JavaScript. HTML5 development enables developers to develop value-added apps and websites.</p>
                            </div>

                            <Link href="/contact-us"><button>LET’S TALK</button></Link>

                        </div>
                        <div className="html_back2">
                            {/* <img src={sur} alt="HTML development services" title='HTML development services' /> */}
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848574/sur_html.d47a185e85741380e5b5_gnxjuw.png" alt="HTML development services" title='HTML development services' />
                        </div>
                    </div>
                </div>

                <div className="html_about">
                    <div className="html_about_left">
                        <h2>HTML5 Development Services</h2>
                        <div className="html-paras">
                            <p>HTML5 is the foundation of the digital world, supporting everything from the building of straightforward websites to complex interactive online applications.The variety of advancements covered by HTML5 development services are reduced to meet the expectations of modern web development.
                            </p>
                            <p> Creating complex web apps with tools like HTML5, CSS3, and JavaScript is a significant component of this type of service. Smooth operation across a wide range of devices and browsers is the aim. In addition to HTML5's flexibility, developers can use this class's multimedia features to easily combine animations, video, and audio into a single piece of web content. Designing user-friendly and fast-loading websites is the aim of website development because accessibility and performance optimisation are so important. Businesses who provide HTML5 development services have a great chance of reaching their target customers and building a consistent online presence and wonderful online experience.</p>
                        </div>

                    </div>
                    <div className="html_about_right">
                        {/* <img src={script_s} alt="HTML development services-kusheldigi" title="HTML development services-kusheldigi" /> */}
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848572/script.96287636d0470ae25369_a1ioaf.png" alt="HTML development services-kusheldigi" title="HTML development services-kusheldigi" />
                    </div>
                </div>

                <div className="html_serv dine-1234">
                    <h3><span>HTML5</span>: A Tool For Build the Future </h3>
                    <div className="html_parat">
                        <p>The design reveals the transforming power of this multifunctional method. HTML5 takes use of the chances that developers take to push the envelope and use their imagination to create cutting-edge websites and applications that offer a change from the traditional online experience. The multifunctional features it offers, such cross-platform compatibility and multimedia integration, will help to shape the online world of the future.</p>
                    </div>
                    <div className="html_cards">
                        <div className="html_card">
                            <div className="html_box">

                                <h3>HTML5 Website Development</h3>
                                <p>Based on HTML5 completely adapts all today's online trends. Digital developers produce beautiful websites that captivate audiences of all sizes, regardless of the devices they use.</p>
                            </div>
                            <div className="html_box">

                                <h3>HTML5 site Development</h3>
                                <p>HTML5 is a technology for designing websites that combines functionality and enterprise. With the flexibility designers are expertly creating visually engaging and simple websites that boost companies and enhance user experience.</p>
                            </div>
                            <div className="html_box">

                                <h3>Design that Responds</h3>
                                <p>Maximum speed and visual rendering on every type of device are made possible by the usage of HTML5 and responsive design.This makes things easier to access and raises user happiness.</p>
                            </div>
                            <div className="html_box">


                                <h3>Mobile Web Development</h3>
                                <p>Developing optimised websites for smartphones and tablets developing web applications for mobile platforms. For fast loading times, straightforward navigation, and user-friendly interfaces developers use HTML5, CSS3, and JS.</p>
                            </div>
                            <div className="html_box">

                                <h3>Cross-Platform Development</h3>
                                <p>Among the methods for developing online apps that work easily across different operating systems and devices is HTML5, which makes use of multi-platform development.  </p>

                            </div>
                            <div className="html_box">


                                <h3>Web Tool Integration</h3>
                                <p>With seamless web tool integration, HTML5 development allows professionals to integrate modern
                                    software frameworks, multimedia elements, and APIs. It offers end-to-end support for different features,
                                    like geolocation, audio and video content, and offline storage. Hence, the dependency on third-party
                                    plugins can be eliminate completely.</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='html_dev'>

                    <h3> Why you should Go for <span > HTML5</span> Development </h3>
                    <div className='html_dev_pra'>
                        <p>Selecting HTML5-based development gives us all the tools we need to create new web pages. With HTML5's</p>
                        <p>abundance of features, cross-platform compatibility engaging websites and</p>
                        <p>applications that drive traffic and enhance their business.</p>
                    </div>
                    <div className="html_dev_cards">
                        <div className="html_dev_card">
                            <div className="html_dev_box">
                                {/* <img src={zz1} alt="zz" /> */}
                                <svg width="79" height="80" viewBox="0 0 79 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.0197 6.40234C17.9643 6.40234 5.75781 18.6079 5.75781 33.6632C5.75781 48.7195 17.9643 60.9241 33.0197 60.9241C48.075 60.9241 60.2815 48.7186 60.2815 33.6632C60.264 18.6137 48.0682 6.41794 33.0197 6.40234ZM33.0197 8.99769C41.0377 9.00451 48.5527 12.9112 53.1614 19.4746L49.9167 22.7203C49.126 22.2425 48.2232 21.9861 47.2989 21.9803C44.4316 21.9803 42.1063 24.3046 42.1063 27.1739C42.1112 28.0981 42.3656 29.0019 42.8424 29.7946L34.3417 38.2943C32.733 37.3135 30.709 37.3135 29.1003 38.2943L23.196 32.3909C23.6727 31.5992 23.9272 30.6945 23.9321 29.7692C23.936 26.9077 21.6185 24.5844 18.756 24.5805C16.3888 24.5776 14.3209 26.1794 13.731 28.4715H8.91473C11.3736 17.1191 21.4069 9.01426 33.0197 8.99769ZM49.8953 27.1729C49.8953 28.6061 48.7331 29.7682 47.2989 29.7682C45.8648 29.7682 44.7026 28.6061 44.7026 27.1729C44.7026 25.7387 45.8648 24.5756 47.2989 24.5756C48.7331 24.5756 49.8953 25.7387 49.8953 27.1729ZM34.3183 42.7498C34.3183 44.184 33.1562 45.3462 31.722 45.3462C30.2868 45.3462 29.1257 44.184 29.1257 42.7498C29.1257 41.3157 30.2868 40.1535 31.722 40.1535C33.1562 40.1545 34.3183 41.3157 34.3183 42.7498ZM21.3357 29.7682C21.3357 31.2024 20.1736 32.3646 18.7394 32.3646C17.3052 32.3646 16.1431 31.2024 16.1431 29.7682C16.1431 28.3351 17.3052 27.1729 18.7394 27.1729C20.1736 27.1729 21.3357 28.3351 21.3357 29.7682ZM45.0039 55.2293C41.338 57.2651 37.2139 58.3307 33.0197 58.3278C19.4073 58.3365 8.36388 47.3097 8.35413 33.6973C8.35413 32.8179 8.40093 31.9395 8.49355 31.0669H13.732C14.3219 33.3522 16.38 34.9511 18.7404 34.9619C19.6647 34.957 20.5704 34.7025 21.3611 34.2258L27.2654 40.1301C26.7887 40.9208 26.5342 41.8266 26.5293 42.7508C26.5293 45.6182 28.8546 47.9435 31.722 47.9435C34.5893 47.9435 36.9137 45.6182 36.9137 42.7508C36.9098 41.8266 36.6553 40.9208 36.1776 40.1301L44.6782 31.6294C45.4699 32.1062 46.3747 32.3607 47.2989 32.3655C50.1663 32.3655 52.4916 30.0403 52.4916 27.1719C52.4867 26.2486 52.2322 25.3429 51.7555 24.5512L54.5848 21.7219C61.1921 33.6213 56.9023 48.622 45.0039 55.2293Z" fill="#0E52FC" stroke="white" strokeWidth="0.48748" strokeMiterlimit="10" />
                                    <path d="M65.4762 14.1907C67.8375 14.182 69.8947 12.582 70.4855 10.2958H78.4587V7.70042H70.4855C69.8957 5.41511 67.8375 3.8152 65.4762 3.80643C62.6088 3.80643 60.2845 6.13073 60.2845 8.99907C60.2884 9.92333 60.5438 10.8281 61.0206 11.6198L58.7392 13.9002C47.8255 -0.318632 27.4527 -2.99685 13.2339 7.91588C-0.983968 18.8306 -3.66316 39.2033 7.24958 53.4222C17.551 66.8425 36.436 70.0979 50.6353 60.9011L54.5537 64.8195L56.3895 66.6553L66.8401 77.1059C69.4979 79.7637 73.8072 79.7637 76.465 77.1059C79.1227 74.4472 79.1227 70.1388 76.465 67.4811L66.0143 57.0295L64.1785 55.1946L60.2601 51.2773C67.2155 40.5644 67.2155 26.7628 60.2601 16.05L62.8564 13.4546C63.6481 13.9304 64.5529 14.1859 65.4762 14.1907ZM65.4762 6.40275C66.9113 6.40275 68.0725 7.5649 68.0725 8.99907C68.0725 10.4332 66.9113 11.5954 65.4762 11.5954C64.042 11.5954 62.8799 10.4332 62.8799 8.99907C62.8799 7.56392 64.043 6.40275 65.4762 6.40275ZM74.6291 69.316C76.2914 70.9412 76.3216 73.6058 74.6964 75.2691C73.0711 76.9314 70.4056 76.9626 68.7433 75.3364C68.7208 75.3149 68.6974 75.2915 68.676 75.2691L58.2244 64.8195L64.1775 58.8663L74.6291 69.316ZM62.3426 57.0295L56.3895 62.9826L52.7958 59.3889C52.9791 59.2485 53.1507 59.0945 53.3311 58.9502C53.5115 58.8059 53.7201 58.6333 53.9141 58.4705C54.1988 58.2326 54.4786 57.9908 54.7545 57.7422C54.8959 57.6135 55.0304 57.4839 55.1699 57.3532C55.7022 56.855 56.217 56.3393 56.7161 55.8079C56.8458 55.6685 56.9755 55.5339 57.1042 55.3926C57.3528 55.1176 57.5936 54.8359 57.8325 54.5512C57.9953 54.3601 58.1552 54.1651 58.3112 53.9691C58.4545 53.7907 58.6095 53.6181 58.7489 53.4348L62.3426 57.0295ZM57.308 50.9994C56.8994 51.5707 56.4773 52.1313 56.0317 52.6695C55.9021 52.8265 55.7636 52.9786 55.63 53.1326C55.2323 53.5947 54.8228 54.0432 54.3987 54.4771C54.2154 54.6672 54.0272 54.8544 53.8371 55.0396C53.4042 55.4628 52.9557 55.8722 52.4916 56.27C52.3376 56.3997 52.1855 56.5411 52.0285 56.6737C51.4894 57.1192 50.9298 57.5394 50.3584 57.9489C36.9205 67.5493 18.2432 64.4392 8.64182 50.9994C-0.957643 37.5625 2.15443 18.8852 15.5923 9.28473C29.0302 -0.315708 47.7075 2.79442 57.308 16.2333C64.7372 26.6312 64.7372 40.6014 57.308 50.9994Z" fill="#0E52FC" stroke="white" strokeWidth="0.48748" strokeMiterlimit="10" />
                                </svg>
                                <h3>SEO-friendly</h3>
                                <p>Online sites are made to be natively SEO-friendly by their clear code structure and semantic markups that helps in attaining high class position in searches.</p>
                            </div>
                            <div className="html_dev_box">
                                {/* <img src={zz2} alt="zz" /> */}
                                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M73.5251 15.7306H66.9605V9.16613C66.9605 4.8568 63.4543 1.35156 59.146 1.35156H9.13488C4.82555 1.35156 1.32031 4.85778 1.32031 9.16613V59.1782C1.32031 63.4866 4.82555 66.9918 9.13488 66.9918H15.6994V73.5563C15.6994 77.8647 19.2046 81.3699 23.514 81.3699H73.526C77.8354 81.3699 81.3406 77.8647 81.3406 73.5563V23.5442C81.3396 19.2369 77.8344 15.7306 73.5251 15.7306ZM9.13488 63.8671C6.54987 63.8671 4.44595 61.7642 4.44595 59.1782V9.16613C4.44595 6.58112 6.54889 4.47817 9.13488 4.47817H59.147C61.732 4.47817 63.8359 6.58112 63.8359 9.16613V59.1782C63.8359 61.7632 61.7329 63.8671 59.147 63.8671H9.13488ZM78.214 73.5573C78.214 76.1423 76.111 78.2452 73.5251 78.2452H23.513C20.928 78.2452 18.8241 76.1423 18.8241 73.5573V66.9928H59.146C63.4543 66.9928 66.9605 63.4875 66.9605 59.1792V18.8563H73.5251C76.1101 18.8563 78.214 20.9602 78.214 23.5462V73.5573Z" fill="#0E52FC" stroke="white" strokeWidth="0.780676" strokeMiterlimit="10" />
                                    <path d="M23.5506 72.7754H23.5086C22.646 72.7754 21.9453 73.4751 21.9453 74.3377C21.9453 75.2023 22.646 75.902 23.5086 75.902H23.5506C24.4142 75.902 25.1139 75.2023 25.1139 74.3377C25.1139 73.4751 24.4152 72.7754 23.5506 72.7754Z" fill="#0E52FC" stroke="white" strokeWidth="0.780676" strokeMiterlimit="10" />
                                    <path d="M18.5203 6.82227H18.4774C17.6147 6.82227 16.9141 7.52195 16.9141 8.38557C16.9141 9.24919 17.6147 9.94887 18.4774 9.94887H18.5203C19.383 9.94887 20.0836 9.24919 20.0836 8.38557C20.0836 7.52195 19.383 6.82227 18.5203 6.82227Z" fill="#0E52FC" stroke="white" strokeWidth="0.780676" strokeMiterlimit="10" />
                                    <path d="M13.9836 6.82227H9.13362C8.26999 6.82227 7.57031 7.52195 7.57031 8.38557C7.57031 9.24919 8.26999 9.94887 9.13362 9.94887H13.9845C14.8472 9.94887 15.5478 9.24919 15.5478 8.38557C15.5469 7.52195 14.8462 6.82227 13.9836 6.82227Z" fill="#0E52FC" stroke="white" strokeWidth="0.780676" strokeMiterlimit="10" />
                                    <path d="M47.1858 32.7853C46.814 31.4103 45.9299 30.2618 44.6974 29.5533L37.0516 25.1396C36.9755 25.0898 36.8984 25.042 36.8203 24.9971L29.1951 20.5941C28.3217 20.0183 27.3058 19.7148 26.2549 19.7148C23.3059 19.7148 20.9062 22.1135 20.9062 25.0625V43.2874C20.9062 43.3508 20.9102 43.4132 20.918 43.4747C20.9482 44.3471 21.1951 45.2029 21.6342 45.9631C22.5857 47.6065 24.3578 48.6272 26.2578 48.6272C27.1936 48.6272 28.1177 48.3793 28.9297 47.908L36.8203 43.3537C36.8652 43.3274 36.9082 43.3 36.9501 43.2708L44.6417 38.8297C45.481 38.3613 46.1797 37.6704 46.6608 36.8331C47.3702 35.5987 47.5566 34.1603 47.1858 32.7853ZM43.9508 35.2757C43.7508 35.6241 43.46 35.9109 43.1116 36.1051C43.1048 36.109 43.096 36.1139 43.0892 36.1188L35.2551 40.6418C35.2102 40.6672 35.1663 40.6945 35.1253 40.7238L27.3644 45.2049C27.0277 45.4001 26.6452 45.5035 26.2578 45.5035C25.4683 45.5035 24.7335 45.08 24.3383 44.3989C24.1431 44.0612 24.0387 43.6777 24.0397 43.2903C24.0397 43.2376 24.0368 43.1839 24.0309 43.1312V25.0635C24.0309 23.8378 25.0282 22.8405 26.2539 22.8405C26.6998 22.8405 27.1282 22.9722 27.4942 23.2191C27.5235 23.2396 27.5557 23.2591 27.5879 23.2767L35.26 27.707C35.298 27.7285 35.3341 27.7519 35.3712 27.7763C35.3966 27.7939 35.4239 27.8095 35.4502 27.8251L43.136 32.2623C43.6473 32.556 44.0123 33.0303 44.1675 33.6001C44.3217 34.17 44.2446 34.7653 43.9508 35.2757Z" fill="#0E52FC" stroke="white" strokeWidth="0.780676" strokeMiterlimit="10" />
                                </svg>
                                <h3>Audio/Video Support</h3>
                                <p>It offers native functions for audio or video playback which in turn does not add process load. A web-programmer does not have to constantly redirect users to other sites to give an immersive digital experience.</p>
                            </div>
                            <div className="html_dev_box">
                                {/* <img src={zz3} alt="zz" /> */}
                                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.151 24.8937C45.4606 24.8937 48.966 21.3883 48.966 17.0797C48.966 12.7701 45.4606 9.26367 41.151 9.26367C36.8414 9.26367 33.3359 12.7701 33.3359 17.0787C33.3359 21.3883 36.8414 24.8937 41.151 24.8937ZM41.151 12.3905C43.7361 12.3905 45.8402 14.4935 45.8402 17.0797C45.8402 19.6649 43.7371 21.7689 41.151 21.7689C38.5668 21.7689 36.4618 19.6658 36.4618 17.0797C36.4618 14.4935 38.5668 12.3905 41.151 12.3905Z" fill="#6893FD" stroke="white" strokeWidth="0.975904" strokeMiterlimit="10" />
                                    <path d="M81.1569 52.7173C81.1189 52.3621 80.9608 52.0215 80.707 51.7668L76.7995 47.8603C76.1886 47.2503 75.1981 47.2503 74.5891 47.8603C73.9782 48.4712 73.9782 49.4598 74.5891 50.0717L75.8285 51.3101H56.5729C55.8615 48.6605 53.3612 46.4179 49.8119 45.0233C50.4657 44.1704 51.1313 43.2843 51.7939 42.3718C58.2144 33.5467 61.471 26.6949 61.471 22.0076C61.471 10.6715 52.3551 1.44922 41.1527 1.44922C29.9493 1.44922 20.8344 10.6715 20.8344 22.0066C20.8344 26.6939 24.09 33.5457 30.5105 42.3708C31.1751 43.2833 31.8387 44.1684 32.4915 45.0214C28.9432 46.4159 26.4448 48.6595 25.7324 51.3091H6.47688L7.71726 50.0707C8.3272 49.4607 8.3272 48.4712 7.71726 47.8593C7.10634 47.2493 6.1158 47.2493 5.50488 47.8593C5.37216 47.992 1.74765 51.6107 1.60029 51.7639C1.31728 52.0586 1.14259 52.4509 1.14064 52.8637C1.13869 53.2756 1.30655 53.6864 1.59736 53.9772L5.50488 57.8847C6.10018 58.4791 7.11903 58.48 7.7153 57.8847C8.3272 57.2748 8.3272 56.2843 7.7153 55.6733L6.47688 54.434H25.7305C26.8557 58.6225 32.4496 61.7981 39.5893 62.2051V76.138L38.3499 74.8987C37.739 74.2887 36.7484 74.2887 36.1385 74.8987C35.5286 75.5096 35.5286 76.4991 36.1385 77.1091L40.046 81.0156C40.0519 81.0215 40.0577 81.0254 40.0616 81.0303C40.3544 81.3133 40.7575 81.4753 41.1634 81.4723C41.5684 81.4694 41.9695 81.3016 42.2574 81.0156L46.1649 77.1091C46.7749 76.4991 46.7749 75.5096 46.1649 74.8987C45.554 74.2887 44.5635 74.2887 43.9535 74.8987L42.7141 76.138V62.2051C49.8529 61.7981 55.4477 58.6235 56.572 54.4349H75.8265L74.5862 55.6753C73.9762 56.2852 73.9762 57.2758 74.5862 57.8857C75.1805 58.48 76.1984 58.484 76.7976 57.8857L80.7051 53.9782C80.7119 53.9723 80.7178 53.9636 80.7246 53.9567C80.9461 53.7294 81.1023 53.4093 81.1462 53.0911C81.1491 53.0696 81.153 53.0491 81.156 53.0287C81.1677 52.9242 81.1667 52.8208 81.1569 52.7173ZM23.9602 22.0066C23.9602 12.395 31.6728 4.57601 41.1527 4.57601C50.6326 4.57601 58.3452 12.395 58.3452 22.0066C58.3452 29.5552 46.85 44.1987 41.1527 50.6845C35.4544 44.2016 23.9602 29.5601 23.9602 22.0066ZM50.3399 57.0328C47.9118 58.3805 44.6494 59.1251 41.1527 59.1251C37.656 59.1251 34.3936 58.3805 31.9655 57.0318C29.8576 55.8617 28.6494 54.3451 28.6494 52.8725C28.6494 51.3999 29.8576 49.8833 31.9655 48.7132C32.7384 48.2828 33.6002 47.9159 34.5234 47.6143C37.577 51.4233 39.965 54.0465 39.9982 54.0836C40.2949 54.4076 40.7135 54.592 41.1527 54.592C41.5919 54.592 42.0105 54.4076 42.3072 54.0836C42.3413 54.0465 44.7294 51.4233 47.782 47.6134C48.7062 47.9159 49.566 48.2828 50.3399 48.7142C52.4478 49.8833 53.656 51.4008 53.656 52.8735C53.6569 54.3451 52.4478 55.8607 50.3399 57.0328Z" fill="#6893FD" stroke="white" strokeWidth="0.975904" strokeMiterlimit="10" />
                                </svg>
                                <h3>Geolocation Support</h3>
                                <p>This way, it allows the provision of location services that let sites take advantage of the user’s location information. Through such a feature, location aware applications and context specific promotions become possible.</p>
                            </div>

                            <div className="html_dev_box">
                                {/* <img src={zz4} alt="zz" /> */}
                                <svg width="85" height="86" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M82.6441 62.2886L80.0037 60.9962C82.6275 55.4693 84.0087 49.3445 84.0087 43.1885C84.0078 20.2435 65.442 1.67578 42.4961 1.67578C19.5521 1.67578 0.984375 20.2425 0.984375 43.1885C0.984375 54.2775 5.302 64.7014 13.1431 72.5424C25.9846 85.3849 44.8727 87.9188 60.1075 80.7879L60.172 81.0468C60.6164 82.7777 62.7205 83.4557 64.091 82.3069L67.552 79.4076L71.2376 83.8259C72.1021 84.8623 73.6416 84.9942 74.6702 84.1316L83.0573 77.0945C84.084 76.2319 84.2207 74.7022 83.3631 73.6726L79.6696 69.2446L83.1384 66.3385C84.4864 65.2093 84.2256 63.0622 82.6441 62.2886ZM63.7784 53.0614C64.0842 50.6271 64.2727 48.1371 64.347 45.6208H79.063C78.7651 50.2432 77.6153 54.681 75.6324 58.8589L63.7784 53.0614ZM5.93108 45.6208H20.6413C20.7917 50.8205 21.4276 55.7359 22.4611 60.2138H10.0504C7.72651 55.8014 6.27688 50.8605 5.93108 45.6208ZM10.0504 26.1612H22.4611C21.4267 30.64 20.7937 35.5554 20.6413 40.7552H5.93108C6.27688 35.5164 7.72651 30.5746 10.0504 26.1612ZM79.0611 40.7552H64.3509C64.2004 35.5554 63.5665 30.64 62.531 26.1612H74.9398C77.2656 30.5746 78.7153 35.5164 79.0611 40.7552ZM56.1796 49.3435C54.3178 48.4351 52.24 50.1269 52.7529 52.1334L54.8286 60.2138H44.9284V45.6208H59.4813C59.4256 47.3635 59.3114 49.0905 59.1375 50.7922L56.1796 49.3435ZM59.4843 40.7552H44.9294V26.1612H57.5198C58.652 30.6556 59.3221 35.6004 59.4843 40.7552ZM44.9284 21.2965V6.95461C48.2672 8.08091 51.5045 11.4715 54.0765 16.639C54.8033 18.0945 55.4597 19.6535 56.0477 21.2965H44.9284ZM40.0637 6.95461V21.2965H28.9464C29.5325 19.6535 30.1899 18.0945 30.9137 16.639C33.4867 11.4705 36.7249 8.08091 40.0637 6.95461ZM40.0637 26.1612V40.7552H25.5089C25.671 35.6004 26.3431 30.6556 27.4743 26.1612H40.0637ZM25.5079 45.6208H40.0628V60.2138H27.4733C26.3421 55.7203 25.67 50.7756 25.5079 45.6208ZM40.0637 65.0794V79.4223C36.7249 78.296 33.4877 74.9054 30.9137 69.737C30.1908 68.2815 29.5325 66.7224 28.9464 65.0784L40.0637 65.0794ZM44.9284 79.435V65.0794H56.0419C54.4047 69.6705 52.2703 73.4597 49.8507 76.0464C48.2594 77.747 46.6115 78.8802 44.9284 79.435ZM71.8696 21.2965H61.1927C59.5712 16.2561 57.3977 11.9521 54.8189 8.67385C61.6704 11.1277 67.5891 15.5674 71.8696 21.2965ZM30.1733 8.67385C27.5934 11.9521 25.4209 16.2561 23.8014 21.2965H13.1226C17.406 15.5674 23.3198 11.1277 30.1733 8.67385ZM13.1226 65.0794H23.8014C25.4209 70.1218 27.5944 74.4238 30.1733 77.7021C23.3198 75.2473 17.406 70.8095 13.1226 65.0794ZM54.8189 77.706C55.9696 76.2378 57.0451 74.5528 58.0278 72.6851L58.8728 75.9819C57.5589 76.6383 56.204 77.2147 54.8189 77.706ZM73.412 78.8372L69.7264 74.4199C68.8658 73.3854 67.3283 73.2497 66.2977 74.1132L63.9259 76.0991L58.777 56.0319L77.1445 65.0149L74.6848 67.0751C73.6582 67.9366 73.5195 69.4664 74.3791 70.4979L78.0725 74.9269L73.412 78.8372Z" fill="#0E52FC" stroke="white" strokeWidth="0.95368" strokeMiterlimit="10" />
                                </svg>
                                <h3>Offline Browsing</h3>
                                <p>HTML5 provides access to offline browsing through the local storage functionality, which performs a storing of already visited web pages while no internet connection is presented.</p>
                            </div>
                            <div className="html_dev_box">
                                {/* <img src={zz5} alt="zz" className='zz' /> */}
                                <svg width="106" height="71" viewBox="0 0 106 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M103.392 48.1171C103.138 42.26 102.119 35.7653 100.591 29.6532C99.0627 23.7952 97.1525 18.3198 94.8607 14.1179C85.9467 -1.54504 76.2693 0.87528 64.6808 3.93035C60.9881 4.82215 57.0412 5.84051 52.9668 6.22215H51.6933C47.6179 5.84051 43.6701 4.82117 39.9783 3.93035C28.3898 1.00282 18.7115 -1.54504 9.79743 14.2464C7.50563 18.4483 5.46892 23.9237 4.06696 29.7817C2.53844 35.8938 1.52008 42.3876 1.26598 48.2456C1.0109 54.7403 1.6486 59.4505 3.0486 62.7606C4.44958 65.8177 6.48728 67.7278 9.16071 68.4921C11.58 69.1288 14.381 68.8747 17.3105 67.6003C22.2767 65.5626 28.0062 61.2341 33.6091 56.0118C37.556 52.1925 44.9435 50.2813 52.3281 50.2813C59.7136 50.2813 67.1002 52.1925 71.047 56.0118C76.6509 61.2331 82.3804 65.5616 87.3466 67.6003C90.2742 68.7462 93.0761 69.1288 95.4965 68.4921C98.0433 67.7288 100.209 65.9452 101.608 62.6341C103.011 59.4505 103.647 54.7393 103.392 48.1171ZM97.2801 60.8515C96.5158 62.6341 95.4974 63.6534 94.224 64.035C92.823 64.4167 91.0404 64.1626 89.0027 63.3983C84.5457 61.6157 79.3254 57.6688 74.2316 52.8302C69.392 47.9915 60.8615 45.5712 52.3291 45.5712C43.7986 45.5712 35.2652 47.9915 30.3 52.5751C25.0787 57.4138 19.8574 61.4892 15.5289 63.1442C13.4902 63.9065 11.7076 64.2901 10.3076 63.78C9.03415 63.3973 8.01579 62.38 7.25153 60.5964C6.23318 58.178 5.72204 54.2302 5.9781 48.3722C6.23318 42.8968 7.12399 36.6571 8.65251 30.7991C10.0535 25.3227 11.8361 20.23 14.0013 16.4097C21.0043 3.80281 29.1541 5.84051 38.8324 8.38739C42.7793 9.40574 46.8556 10.4251 51.3117 10.8057C51.4392 10.8057 51.4392 10.8057 51.5668 10.8057H52.9678C53.0953 10.8057 53.0953 10.8057 53.2219 10.8057C57.8074 10.4251 61.8808 9.40574 65.8287 8.38739C75.507 5.96707 83.6568 3.80379 90.6607 16.4097C92.826 20.23 94.6076 25.1962 96.0086 30.7991C97.4105 36.6571 98.4289 42.7692 98.683 48.3722C98.9361 54.2302 98.4259 58.178 97.2801 60.8515Z" fill="#0E52FC" stroke="white" strokeWidth="1.96215" strokeMiterlimit="10" />
                                    <path d="M40.6148 23.2871C39.3414 22.1412 37.8139 21.2494 36.0303 21.1219C35.9018 19.4668 35.1385 17.8107 33.9916 16.6658L33.865 16.5383C32.4641 15.1373 30.6814 14.373 28.6457 14.373C26.608 14.373 24.6979 15.2648 23.4244 16.5383C22.2775 17.6842 21.3867 19.3393 21.2592 21.1219C19.4766 21.2494 17.948 22.0137 16.6746 23.1596L16.548 23.2871C15.1461 24.6881 14.3828 26.4707 14.3828 28.5064C14.3828 30.5441 15.2736 32.4553 16.548 33.7287C17.8215 35.0022 19.348 35.7664 21.2592 35.894C21.3867 37.6766 22.151 39.3316 23.4244 40.4785C24.8254 41.8785 26.608 42.6428 28.6457 42.6428C30.6814 42.6428 32.5916 41.751 33.865 40.4785C35.0119 39.2051 35.9018 37.6766 36.0303 35.894C37.8129 35.7664 39.468 35.0022 40.6148 33.7287C42.0148 32.3277 42.7791 30.5441 42.7791 28.5064C42.7791 26.4707 41.8873 24.5596 40.6148 23.2871ZM37.4303 30.4176C36.9201 30.9277 36.2844 31.1818 35.5201 31.1818H33.7385C32.4641 31.1818 31.3182 32.2012 31.3182 33.6012V35.2572C31.3182 36.0205 31.0631 36.6582 30.5539 37.1674C30.0447 37.6766 29.408 37.9297 28.6457 37.9297C27.8805 37.9297 27.2437 37.6756 26.7356 37.1674C26.2254 36.6572 25.9713 36.0205 25.9713 35.2572V33.4746C25.9713 32.2012 24.952 31.0553 23.551 31.0553H21.7693C21.0051 31.0553 20.3674 30.8002 19.8592 30.292C19.4766 29.9094 19.0959 29.2727 19.0959 28.5074C19.0959 27.7441 19.35 27.1074 19.8592 26.5982C19.8592 26.5982 19.8592 26.5982 19.9867 26.4707C20.4959 26.0881 21.1336 25.834 21.7693 25.834H23.551C24.8254 25.834 25.9713 24.8156 25.9713 23.4147V21.632C25.9713 20.8678 26.2264 20.232 26.7356 19.7219C27.2447 19.2127 27.8805 18.9576 28.6457 18.9576C29.408 18.9576 30.0457 19.2127 30.5539 19.7219C30.5539 19.7219 30.5539 19.7219 30.6814 19.8494C31.0641 20.3586 31.3182 20.9953 31.3182 21.6311V23.4137C31.3182 24.6871 32.3365 25.833 33.7385 25.833H35.5201C36.2844 25.833 36.9211 26.0871 37.4303 26.5973C37.9395 27.1064 38.1936 27.7422 38.1936 28.5064C38.1945 29.2717 37.9395 29.9084 37.4303 30.4176Z" fill="#0E52FC" stroke="white" strokeWidth="1.96215" strokeMiterlimit="10" />
                                    <path d="M74.4883 23.9238C76.9498 23.9238 78.9453 21.9283 78.9453 19.4668C78.9453 17.0052 76.9498 15.0098 74.4883 15.0098C72.0267 15.0098 70.0312 17.0052 70.0312 19.4668C70.0312 21.9283 72.0267 23.9238 74.4883 23.9238Z" fill="#0E52FC" stroke="white" strokeWidth="0.96215" strokeMiterlimit="10" />
                                    <path d="M74.4883 42.0059C76.9498 42.0059 78.9453 40.0104 78.9453 37.5488C78.9453 35.0873 76.9498 33.0918 74.4883 33.0918C72.0267 33.0918 70.0312 35.0873 70.0312 37.5488C70.0312 40.0104 72.0267 42.0059 74.4883 42.0059Z" fill="#0E52FC" stroke="white" strokeWidth="0.96215" strokeMiterlimit="10" />
                                    <path d="M65.4414 32.9648C67.903 32.9648 69.8984 30.9694 69.8984 28.5078C69.8984 26.0463 67.903 24.0508 65.4414 24.0508C62.9799 24.0508 60.9844 26.0463 60.9844 28.5078C60.9844 30.9694 62.9799 32.9648 65.4414 32.9648Z" fill="#0E52FC" stroke="white" strokeWidth="0.96215" strokeMiterlimit="10" />
                                    <path d="M83.5273 32.9648C85.9889 32.9648 87.9844 30.9694 87.9844 28.5078C87.9844 26.0463 85.9889 24.0508 83.5273 24.0508C81.0658 24.0508 79.0703 26.0463 79.0703 28.5078C79.0703 30.9694 81.0658 32.9648 83.5273 32.9648Z" fill="#0E52FC" stroke="white" strokeWidth="0.96215" strokeMiterlimit="10" />
                                </svg>
                                <h3>Non-disclosure Agreement</h3>
                                <p>The NDA is an agreement which safeguards the secrets from disclosure unofficially. The proprietary code and content cannot be shared and utilised by anyone unauthorised.</p>
                            </div>
                            <div className="html_dev_box">
                                {/* <img src={zz6} alt="zz" /> */}
                                <svg width="97" height="87" viewBox="0 0 97 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.61719 2.16797V84.8193H95.0134V2.16797H1.61719ZM63.529 7.63985L53.2318 20.0637H7.08907V7.63985H63.529ZM89.5395 79.3484H7.08907V25.5366H55.8031L70.6368 7.63985H89.5395V79.3484Z" fill="#0E52FC" stroke="white" strokeWidth="0.93871" strokeMiterlimit="10" />
                                    <path d="M38.9399 56.1725C38.9399 58.736 36.8524 60.8235 34.2889 60.8235C31.7234 60.8235 29.6379 58.736 29.6379 56.1725V39.1172H24.1641V56.1725C24.1641 61.7541 28.7063 66.2954 34.2889 66.2954C39.8715 66.2954 44.4118 61.7531 44.4118 56.1725V39.1172H38.9399V56.1725Z" fill="#0E52FC" stroke="white" strokeWidth="0.93871" strokeMiterlimit="10" />
                                    <path d="M65.0769 39.0254L60.6091 47.0696L56.1413 39.0254H49.8828L57.4784 52.7061L49.8828 66.3858H56.1413L60.6091 58.3415L65.0769 66.3858H71.3354L63.7398 52.7061L71.3354 39.0254H65.0769Z" fill="#0E52FC" stroke="white" strokeWidth="0.93871" strokeMiterlimit="10" />
                                </svg>
                                <h3>Enhanced user experience</h3>
                                <p>HTML5 websites offer a stellar user experience through faster loading times and a seamless navigation
                                    system. This further increases the time spent on each page and amplify the interaction with the users.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="php_portfolio">
                    <div className="php_port">
                        <h2 className="our_php">Our <span>Shopify</span>  Web Development <span>Portfolio</span> </h2>
                    </div>
                </div>
                <div className="gting">
                    <Splide
                        className="w-full"
                        aria-label="Our Services"
                        options={{
                            type: 'loop',
                            perPage: 1,
                            autoplay: true,
                            interval: 3000,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            resetProgress: false,
                        }}
                    >

                        <SplideSlide>
                            <div className="kickta_big kickta_html">
                                <div className="kickta_big1 kickta_html1">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175612/auxit_x3w8fs.png' alt="Your Trusted Partner for Audio" title="Your Trusted Partner for Audio" />
                                    <div className="headst_big">
                                        <h3>Your Trusted Partner for
                                            <br />Audio Visual Solutions</h3>
                                        <div className='mt-4'>
                                            <p >Enhance communication and engagement with</p>
                                            <p>Auxible India's cutting-edge Audio Visual</p>
                                            <p>Solutions.</p>
                                        </div>

                                    </div>
                                    <div className="kickma-arrow view-web">
                                        <a href="https://auxibleindia.com/" target="_blank">
                                            <p>View Website</p></a>
                                        <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="kickta_big kickta_htmls">
                                <div className="kickta_big1 kickta_htmls1">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175643/doliwala1_fqfi0c.png' alt="DOLIWALA Events" title="DOLIWALA Events" />
                                    <div className="headst_big">
                                        <h3>DOLIWALA Events
                                            <br />& Wedding</h3>
                                        <div className='mt-4'>
                                            <p className="">Solution for all weddings and</p>
                                            <p>corporate events management</p>
                                            <p>and entertainment.</p>
                                        </div>

                                    </div>
                                    <div className="kickma-arrow view-web">
                                        <a href="https://www.doliwala.com/" target="_blank">
                                            <p>View Website</p></a>
                                        <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="kickta_big kickta_htmlsl">
                                <div className="kickta_big1 kickta_htmlsl1">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175678/mpma1_lqhadw.png' alt="create the remarkable dimension" title='create the remarkable dimension' />
                                    <div className="headst_big">
                                        <h3>create the remarkable
                                            < br />dimension with MPM</h3>
                                        <div className='mt-4'>
                                            <p className="">Connecting People across the globe</p>
                                        </div>

                                    </div>
                                    <div className="kickma-arrow view-web">
                                        <a href="https://mpmoverseas.com/" target="_blank">
                                            <p>View Website</p></a>
                                        <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                <div className="benifits_html5">
                    <h3><span>HTML5</span> Development Benefits</h3>
                    <div className="benifit_html_para">
                        <p> With the help of better features for images and video, the user experience is enhanced. They can view images and videos in a much better way. - The rich content can also be added in the development.HTML5 development on choosing helps you to enjoy some attractive features. Media Queries gives a platform for multi-browser compatibility, blends media features and responsive design that header all the way users indeed. Besides that, HTML5 is a great deal easier to use and catalyses the general progress of Internet technologies.</p>
                    </div>
                    <div className="htyi_img">
                        {/* <img src={htyi} alt="Benefits HTML development" title='Benefits HTML development' /> */}
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848573/htyi.cbc905e9e7e3f536cf76_wskdlm.png" alt="Benefits HTML development" title='Benefits HTML development' />
                    </div>
                </div>
                <div className="processt_html dine-1234">
                    <h3>Our <span>Process</span> </h3>
                    <p className='htls'>First of all, let me mention that our website design process includes a detailed planning and layout phase. We use the technology that was found to be successful to create templates, include multimedia elements, and increase performance to create a better user experience.</p>

                    <div className="processt_html_card">
                        <div className="processt_html_box processs1-box1">
                            <div className="headof_tax">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175713/erty_eisfdw.png" alt="Requirement Specification" title='Requirement Specification' />
                                <h4>Requirement Specification</h4>
                            </div>
                            <p>
                                The first phase of HTML5 website development is requirement specification, where criteria and user needs help developers to determine required components for a new website to serve a specific purpose.
                            </p>
                        </div>
                        <div className="processt_html_box processs1-box2">
                            <div className="headof_tax">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175713/erty_eisfdw.png' alt="Bespoke Development" title='' />
                                <h4>Bespoke Development</h4>
                            </div>
                            <p>
                                HTML5-specific development, that can deliberately meet specific requirements of every business, allows to make customised solutions that fully realise the goals and objectives of businesses.
                            </p>
                        </div>
                        <div className="processt_html_box processs1-box3">
                            <div className="headof_tax">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175713/erty_eisfdw.png' alt="Requirement Analysis" title='Requirement Analysis' />
                                <h4>Requirement Analysis</h4>
                            </div>
                            <p>
                                It includes knowing what your customers want, who the target users are, what features you need, and specific requirements to ensure their success in the end.
                            </p>
                        </div>
                        <div className="processt_html_box processs1-box4">
                            <div className="headof_tax">
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175713/erty_eisfdw.png' alt="QA and Delivery" title='QA and Delivery' />
                                <h4>QA and Delivery</h4>
                            </div>
                            <p>
                                QA is responsible for both visual and the functional appearance or efficiency. The use of high precision, careful attention to detail developers create high quality websites, meeting and even surpassing the desired expectations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="why_hire_html">
                    <h3>
                        What Kinds of Digital Services Are Included in the <span>HTML5</span> Development Offering by Kushel Digi?
                    </h3>
                    <div className="why_hire_htmlCard mt-6">
                        <div className="why_hireHtml_left">
                            {/* <img src={blackkart} alt="HTML development offering by kushel digi" title='HTML development offering by kushel digi' /> */}
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724848559/blackKart.1533ef1e8f78f5d8e7f9_sftp4a.png" alt="HTML development offering by kushel digi" title='HTML development offering by kushel digi' />
                        </div>
                        <div className="why_hireHtml_right">
                            <h4>HTML5 Development  Expertise</h4>
                            <p>
                                HTML5 development skills including imaging and formatting, positioning, using the latest HTML features, CSS3 styling, and JavaScript functionality in modern web, is the by-product of HTML5 training. Experts manage to bring this thorough knowledge into practice by developing fast and responsive sites, exchanging information through installed applications and creating multimedia content. They have a thorough knowledge of cross-browser compatibility and  standards and they’re making sure that the user gets good web experiences even while using different devices. Through an experienced eye for optimization, innovation, together with the use of HTML5 development, digital transformation is the key to an exciting future. HTML5 development experts attract the audience, enriching them with solutions that are continuously evolving the digital scene.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="kay_btn">
                        <Link href="/contact-us">
                            <button>
                                Let's Discuss
                            </button> </Link>
                    </div>
                </div>

                <HtmlFAQ />

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

export default HtmlComponent;