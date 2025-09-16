"use client"
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Head from 'next/head';
import Link from 'next/link';


import Footer from '../../COMMON/Footer';
import Navbar from '../../COMMON/Navbar';

import PhpFAQ from '../../COMMON/PhpFAQ';
import Website from '../../components/Home/HomeForm';
import '../../globals.css';
const PhpComponent = () => {

    const [tab8, setTab8] = useState(1);



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

    const openSource = (e) => {
        e.preventDefault();
        setTab8(1);
        document.getElementById("open").style.borderBottom = "2px solid #1B6BFF";
        document.getElementById("platform").style.borderBottom = "none";
        document.getElementById("extension").style.borderBottom = "none";
        document.getElementById("developer").style.borderBottom = "none";

        document.getElementById("open").style.color = "#1B6BFF";
        document.getElementById("platform").style.color = "#33475B";
        document.getElementById("extension").style.color = "#33475B";
        document.getElementById("developer").style.color = "#33475B";
    };
    const openSource1 = (e) => {
        e.preventDefault();
        setTab8(2);
        document.getElementById("open").style.borderBottom = "none";
        document.getElementById("platform").style.borderBottom = "2px solid #1B6BFF";
        document.getElementById("extension").style.borderBottom = "none";
        document.getElementById("developer").style.borderBottom = "none";

        document.getElementById("open").style.color = "#33475B";
        document.getElementById("platform").style.color = "#1B6BFF";
        document.getElementById("extension").style.color = "#33475B";
        document.getElementById("developer").style.color = "#33475B";
    };
    const openSource2 = (e) => {
        e.preventDefault();
        setTab8(3);
        document.getElementById("open").style.borderBottom = "none";
        document.getElementById("platform").style.borderBottom = "none";
        document.getElementById("extension").style.borderBottom = "2px solid #1B6BFF";
        document.getElementById("developer").style.borderBottom = "none";

        document.getElementById("open").style.color = "#33475B";
        document.getElementById("platform").style.color = "#33475B";
        document.getElementById("extension").style.color = "#1B6BFF";
        document.getElementById("developer").style.color = "#33475B";
    };
    const openSource3 = (e) => {
        e.preventDefault();
        setTab8(4);
        document.getElementById("open").style.borderBottom = "none";
        document.getElementById("platform").style.borderBottom = "none";
        document.getElementById("extension").style.borderBottom = "none";
        document.getElementById("developer").style.borderBottom = "2px solid #1B6BFF";

        document.getElementById("open").style.color = "#33475B";
        document.getElementById("platform").style.color = "#33475B";
        document.getElementById("extension").style.color = "#33475B";
        document.getElementById("developer").style.color = "#1B6BFF";
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
                <div className="php-mainback">
                    <div className="PHP-back phpbackk">
                        <div className="magento_back1 php_backs1">
                            <h1>Affordable php development services</h1>
                            <p>
                                We provide excellent and professional solutions to users at affordable rates. These services are efficient and time-fair.
                            </p>
                            <Link href="/contact-us" className="php-banner-btn buttunn buttunn1"> <button className='lets_talking'>
                                Lets get started
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
                                </svg>
                            </button>

                            </Link>


                        </div>
                        <div className="relative php_backs2">
                            {/* <img className="phpya" src={PHpBannerImg} alt="PHP development services" title="PHP development services" /> */}
                            <img className="phpya" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845406/PHpBannerImg.ae3c07aef3431848ccfa_dgnk7n.png
" alt="PHP development services" title="PHP development services" />
                        </div>
                    </div>
                </div>
                <div className="magento_service php_service">
                    <div className="magento_service1  php_service1">
                        <h2>
                            Why Should You Choose <span>PHP</span> <br /> Development?
                        </h2>
                        <p>
                            Our staff is knowledgeable and competent in this field. We work tirelessly to finish the task in an excellent manner. Here experts can meet customer expectations by using the newest technology. Our goal is to finish projects within budget and on schedule. In terms of client service, we prioritise and guarantee perfection. If you decide to develop with us, you'll have a special and productive partner.
                            Benefits Of PHP Development.

                        </p>
                    </div>
                    <div className="magento_service2  php_service2">
                        <div className="greenish">
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845404/greenish.3d367cb81154565e3e3b_2_xr0p0x.png
" alt="greenish-design" title="greenish-design" />
                        </div>
                        <img className="admis" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845404/teaser.9ab2dce7ae2a07a1c79c_nxdnbk.png" alt="why choose php development" title="why choose php development" />
                    </div>
                </div>

                <div className="benifits_php">

                    <div className="php_benifits_flex">
                        <div className="php_ben1">
                            <h3>
                                Benefits Of <span>PHP</span> Development
                            </h3>
                            <div className="php_navbar">
                                <p onClick={openSource} id="open">
                                    Open - Source
                                </p>
                                <p onClick={openSource1} id="platform">
                                    Platform Diversity
                                </p>
                                <p onClick={openSource2} id="extension">
                                    Extensions and add - ons
                                </p>
                                <p onClick={openSource3} id="developer">
                                    Developer community
                                </p>
                            </div>
                            {
                                tab8 === 1 && (
                                    <>
                                        <div className="main_php_para">
                                            <p>
                                                Considering that PHP programming is open source and free to use is one of its key benefits. Millions of developers make up the PHP community. It is also very large and actively involved in problem solving. An atmosphere of freedom and cooperation fostered by open source increases production quality and reduces costs.
                                            </p>
                                        </div>
                                    </>
                                )
                            }

                            {
                                tab8 === 2 && (
                                    <>
                                        <div className="main_php_para">
                                            <p>
                                                Our diversity of PHP development platforms is suitable to meet different user needs. It provides developers the freedom to choose different options, making their projects feature rich and secure. Additionally, the platform supports various tools and mechanisms to ensure maximum usability and performance.
                                            </p>
                                        </div>
                                    </>
                                )
                            }

                            {
                                tab8 === 3 && (
                                    <>
                                        <div className="main_php_para">
                                            <p>
                                                PHP development allows developers to extend the software’s functionality without building from scratch,
                                                thanks for its support for innumerable add-ons and extensions. It comes with a vast library of different
                                                pre-built modules. These can be leveraged to integrate CMS, payment gateways, analytical tools, and
                                                other features with the software seamlessly. As a result, the overall development cost and efforts can be
                                                reduced significantly. On top of everything, the extensions allow easy scalability of both SME and
                                                enterprise-level applications.
                                            </p>
                                        </div>
                                    </>
                                )
                            }

                            {
                                tab8 === 4 && (
                                    <>
                                        <div className="main_php_para">
                                            <p>
                                                The benefit of the PHP developer community is that it is an active and collaborative community that shares the latest technologies and trends. Here developers gain experience and knowledge from others, find solutions to problems, and provide support for projects. Opportunity to learn and grow in a collaborative and unique environment within the PHP community.
                                            </p>
                                        </div>

                                    </>
                                )
                            }


                            <Link href="/contact-us"><button>START PROJECT</button></Link>


                        </div>
                        <div className="php_ben2">
                            {/* <img src={benift} alt="Benefits of php development" title="Benefits of php development" /> */}
                            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845403/benift.1e77e0038fa630c73672_fprjzm.png" alt="Benefits of php development" title="Benefits of php development" />
                        </div>
                    </div>

                </div>




                <div className="why_phpDevr dine-1234 ">
                    <h3 className="php-h22">Why Choose <span>Kushel Digi</span>  for <span>PHP</span>  Development?</h3>
                    <p className='kt_rd'>We provide affordable and high quality services with excellence and dedication. Our team continuously utilizes the latest technology and best development practices. We complete projects on time at competitive prices. Our aim is to provide users with customized solutions as per the requirements. It helps in the growth of their business. We are completely dedicated to providing unique and professional web solutions to our clients.</p>
                    <div className="php_stakflow">
                        <div className="php_stackflow_card">
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>1</h3>
                                    <h4>Partner-Driven Developers</h4>
                                    <hr />
                                    <p>It provides excellent resources for developers to support and operate. Our main purpose is to encourage successful completion of PHP projects and prosperity in partnership.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>2</h3>
                                    <h4>Enterprise-grade Features</h4>
                                    <hr />
                                    <p>Business-grade features provide enterprises with security, scalability, and management convenience. These include setup, user management, data monitoring, and advanced network security. These traits lead to improved business functioning, which promotes productivity and sustainability.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>3</h3>
                                    <h4>PHP Support & Maintenance</h4>
                                    <hr />
                                    <p>PHP support and maintenance is important for web development. This ensures that the website or application remains stable and smooth. Support for the latest versions of PHP development and security updates is required continuously.</p>
                                </div>
                            </div>
                        </div>
                        <div className="php_stackflow_card">
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>4</h3>
                                    <h4>PHP-friendly Expertise</h4>
                                    <hr />
                                    <p>Kushel Digi Solutions has formed a team of PHP experts who come with decades of industry-level
                                        experience. They leverage their deep domain knowledge and technical prowess to deliver custom and
                                        competitive solutions. Whether you want a responsive PHP website or a personalized interface, we have
                                        got your back.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>5</h3>
                                    <h4>Full Cycle Product Development</h4>
                                    <hr />
                                    <p>This process adds richness to the overall experience of the product. It covers product development, testing, deployment, and maintenance. This ensures that the entire cycle of the product remains stable and up to date.</p>
                                </div>
                            </div>
                            <div className="php_stackflow_box">
                                <div className="stackflows">
                                    <h3>6</h3>
                                    <h4>Competitive Pricing</h4>
                                    <hr />
                                    <p>PHP development services available with high quality and timeliness. Decentralised and good rates with expert support. Planning and optimising based on project requirements. Dedicated and professional team to meet customer requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="php_portfolio">
                    <div className="php_port">
                        <h2 className="our_php">Our <span>PHP</span>  Web Development <span>Portfolio</span> </h2>
                    </div>
                    <div className="gting">
                        <Splide
                            className="w-full"
                            aria-label="Our Services"
                            options={{
                                perPage: 1,
                                perMove: 1,
                                autoplay: true,
                                pauseOnHover: true,
                                type: "loop",
                                interval: 2200,
                                drag: true,
                            }}
                        >
                            <SplideSlide>
                                <div className="kickta_big kickta_php">
                                    <div className="kickta_big1 kickta_phpt">
                                        {/* <img src={ziddi} alt="The laravel-based cms" title="The laravel-based cms" /> */}
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724847561/Group_1000007106_f6rma8.png" alt="The laravel-based cms" title="The laravel-based cms" />
                                        <div className="headst_big">
                                            <h3>The laravel-based cms
                                                <br />engineered for simplicity</h3>
                                        </div>
                                        <div className="kickma-arrow view-web">
                                            <a href="https://octobercms.com/" target="_blank" rel="noopener noreferrer"> <p>View Website</p></a>
                                            <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="kickta_big kickta_php1">
                                    <div className="kickta_big1 kickta_phpt1">
                                        {/* <img src={sulua} alt="Deliver awesome obust, reliable websites" title='Deliver awesome obust, reliable websites' /> */}
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724847559/Group_1000007513_hpxyoy.png" alt="Deliver awesome obust, reliable websites" title='Deliver awesome obust, reliable websites' />
                                        <div className="headst_big headst_bigttt">
                                            <h3>Deliver awesome,
                                                <br />robust, reliable websites
                                                <br />with Sulu CMS</h3>
                                        </div>
                                        <div className="kickma-arrow view-web">
                                            <a href="https://sulu.io/" target="_blank" rel="noopener noreferrer"> <p>View Website</p> </a>
                                            <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="kickta_big kickta_php2">
                                    <div className="kickta_big1 kickta_phpt2">
                                        {/* <img src={catt} alt="data and experience" title='data and experience' /> */}
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724847565/Group_1000007452_g9f1hc.png
" alt="data and experience" title='data and experience' />
                                        <div className="headst_big headst_bigttt">
                                            <h3>data and experience
                                                <br />management platform
                                                <br /> for industry leaders</h3>
                                        </div>
                                        <div className="kickma-arrow view-web">
                                            <a href="https://pimcore.com/en" target="_blank" rel="noopener noreferrer"><p>View Website</p> </a>
                                            <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#ffffff" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>


                <div>
                    <div id="hello">
                        <div className="content_sssnnnppp">
                            <div className="content1">
                                <h3 className="heading">
                                    Our PHP Development Services
                                </h3>
                                <hr className="ha" />
                                <p className="pra">
                                    Our development services fill your web applications with uniqueness and energy. We provide a team of expert developers with advanced technical knowledge who are committed to bringing your project to the highest standards. We provide unique and innovative solutions.
                                </p>
                            </div>
                            <div className="content2">
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> PHP Enterprise Solutions</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">PHP for eCommerce </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> PHP for CMS Development</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">PHP-based APIs </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> Legacy Application Rescue</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">Code &amp; UX/UI Audits </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> Mobile App Backend Development</p>
                                    </div>
                                    <div className="second">
                                        <p className="pre2">PHP Migrations &amp; Updates </p>
                                    </div>
                                </div>
                                <div className="content-2-1">
                                    <div className="first">
                                        <p className="pre1"> PHP Support &amp; Maintenance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="add" className="dine-1234">
                        <div className="content-2">
                            <h3 className="heading-3">
                                Why Should You Go for <span> PHP </span> Web Development?
                            </h3>
                            <p className="pra3">
                                PHP is a popular programming language widely used for developing web
                                applications. There are many reasons why businesses should opt for PHP
                                web development, including :
                            </p>
                        </div>
                        <div className="content-3">
                            <div className="dic1">
                                {/* <img src={onring} alt="why should go php development" title='why should go php development' className="one" /> */}
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845407/onring.a9d7c428054eabbb8433_gfknm5.png" alt="why should go php development" title='why should go php development' className="one" />
                            </div>
                            <div className="dic2">
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740473141/onring1_grimwo.png' alt="Scalability" title='Scalability' className="icon" />
                                    </div>
                                    <div>
                                        <h3 className="heading-2">Scalability</h3>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP web development is highly scalable, making it easy to add new
                                        features and functionalities to your website as your business grows.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740473141/onring1_grimwo.png' alt="Open-source" title="Open-source" className="icon" />
                                    </div>
                                    <div>
                                        <h3 className="heading-2">Open-source &amp; Free</h3>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP is an open-source language, which means it is free and can be
                                        easily downloaded and installed on various platforms.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740473141/onring1_grimwo.png' alt="Accessibility" title="Accessibility" className="icon" />
                                    </div>
                                    <div>
                                        <h3 className="heading-2">Accessibility</h3>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP is highly versatile, allowing its applications to be used across
                                        Windows, Linux, and Mac OS, providing excellent accessibility.
                                        PHP-based web apps can be effortlessly released across all major
                                        platforms.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740473141/onring1_grimwo.png' alt="Security" title="Security" className="icon" />
                                    </div>
                                    <div>
                                        <h3 className="heading-2">Security</h3>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        PHP is pre-equipped with protective measures to secure your website
                                        from potential malicious attacks but can be bolstered further
                                        through third-party security plugins and tools.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740473141/onring1_grimwo.png' alt="Fast Development" title="Fast Development" className="icon" />
                                    </div>
                                    <div>
                                        <h3 className="heading-2">Fast Development</h3>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        Due to its user-friendly design and thorough instructions, PHP web
                                        development projects can be accomplished quickly, allowing
                                        businesses to start profiting rapidly upon website launch.
                                    </p>
                                </div>
                                <div className="inr-div">
                                    <div>
                                        {" "}
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740473141/onring1_grimwo.png' alt="Large Development Community" title="Large Development Community" className="icon" />
                                    </div>
                                    <div>
                                        <h3 className="heading-2">Large Development Community</h3>
                                    </div>
                                </div>
                                <hr className="ha2" />
                                <div>
                                    <p className="pra2">
                                        Developers remain passionate about PHP, and their support has
                                        allowed for the continual development of libraries and tools that
                                        have kept the language reliable and updated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="get_in_php get_in_php1 dine-1234">
                    <div className="engag_mod engag_mod11">
                        <h3>Our Engagment Models</h3>
                        <div className="engag_php_card">
                            <div className="engag_php_box">
                                <h3>Estimating timeline and cost</h3>
                                {/* <img src={engag1} alt="Fix cost and time" title="Fix cost and time" /> */}
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845398/download_5_jyiqem.png" alt="Fix cost and time" title="Fix cost and time" />
                                <p>
                                    Once we gather the exact business requirements, our experts will design a proper estimate of the
                                    development time and the costs involved. This will help you have a clear idea about the overall timeline,
                                    from designing to deployment. Scoping will be made easier for enhanced collaboration and streamlined
                                    workflows.
                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h3>On Site</h3>
                                {/* <img src={engag2} alt="On Site" title="On Site" /> */}
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845398/download_4_azbfms.png" alt="On Site" title="On Site" />
                                <p>
                                    We send our resources to your place of operation to work
                                    alongside your team on the project. This model suits
                                    businesses that have a skilled team but require an expert to
                                    take care of certain aspects of the project. It’s
                                    cost-effective, risk-free, fast, and 100% transparent.
                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h3>Time and Model</h3>
                                {/* <img src={engag3} alt="Time and Model" title='Time and Model' /> */}
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724845398/download_6_jptubk.png
" alt="Time and Model" title='Time and Model' />
                                <p>
                                    We use the Time & Material Model when the software is in the
                                    range of medium to high complexity. Here, we charge you for
                                    the number and time of resources that we have employed to
                                    develop your software, on an hourly level. This model best
                                    suits businesses that require constant updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <PhpFAQ />
                <Website />


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
    )
}

export default PhpComponent