"use client"
import { useEffect, useState } from 'react';
// import { NavLink } from "react-router-dom";
import Link from 'next/link';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


import ContactForm3 from '../../COMMON/ContactForm3';
import ServiceCommon from '../../COMMON/ServiceCommon';
// import { Helmet } from 'react-helmet';
import Footer from '@/app/COMMON/Footer';
import Navbar from '@/app/COMMON/Navbar';
import '../../globals.css';

const ReactJsComponent = () => {
    const [perPage, setPerPage] = useState(3);
    useEffect(() => {
        if (window.matchMedia("(max-width: 1150px)").matches) {
            setPerPage(2);
        }
        if (window.matchMedia("(max-width: 850px)").matches) {
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
  
    return (
        <>
            <Navbar />

            <div className="ser-main">

                <div className="phppp-main">
                    <div className="php-back">
                        <div className="php-back1">
                            <h1>Hire ReactJS Developers</h1>
                            <p>
                                Looking to create a front-end application that not only sells but also compliments your modern idea? Hire ReactJS developers from DianApps to escalate your dream project.
                            </p>
                            <Link href="/contact-us">
                                <button>Hire Developer</button> </Link>
                        </div>
                        <div className="php-back2">
                            <ContactForm3 />
                        </div>
                    </div>
                </div>

                <div className="pgp_service dine-1234">
                    <div className="pgp_card">
                        <div className="pgp_box">
                            <h3>20+</h3>
                            <p>
                                Dedicated PHP Developers
                            </p>
                        </div>
                        <div className="pgp_box">
                            <h3>50+</h3>
                            <p>
                                PHP-based projects deployed
                            </p>
                        </div>
                        <div className="pgp_box">
                            <h3>1000+</h3>
                            <p>
                                Satisfied customer base
                            </p>
                        </div>
                    </div>
                </div>
                {/* ==============crausol============== */}
                <div className="hire_kui hire-kutta dine-1234">
                    <div className="hire_line">
                        <hr className="hg1 hg19" />
                        <h2>

                            <span>Hire</span>  Kushel Digi <span>ReactJS</span>  Developers to strategically Build Complex-Free Apps

                        </h2>
                        <hr className="hg2 hg20" />
                    </div>
                    <div className="hire_py">
                        <p>
                            Our PHP developers specialise in end-to-end development services
                            which includes consultancy, PHP web app development, continuous
                            maintenance, and the upgradation of software. We are skilled to
                            take your project to the next level with the right mix of
                            strategy, toolset, and development approach.Hire PHP developers
                            from DianApps to experience unmatched quality offering which is
                            built for success, with the future in mind.
                        </p>
                    </div>
                    {/* <div className="migartion_card">
                        <Splide
                            className="w-full"
                            aria-label="Our Services"
                            options={{
                                perPage: perPage,
                                perMove: 1,
                                autoplay: true,
                                pauseOnHover: true,
                                type: "loop",
                                interval: 1600,
                                drag: true,
                                breakpoints: {
                                    1024: { perPage: 3 },
                                    768: { perPage: 2 },
                                    480:{ perPage: 1}
                                  },
                            }}
                        >
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>1</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>React JS Consultancy</h3>
                                        <p>
                                            Looking for a front-end ReactJS solution? Our senior ReactJS executives may assist you to clarify all your concerns and queries while helping to create scalable solutions. We don’t just sketch your business workflows but also find various tactics & proposals to make sure the brand is ready to rank from day one of its releases.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>2</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Material Design Integrations</h3>
                                        <p>
                                            Your fantastic app concept merits a beautiful design solution. Our innovative UI/UX designers and ReactJS developers work together to create a feature-rich and aesthetically appealing front-end design that encourages customers to explore the platform and choose the customer journey.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>3</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Single Page Apps </h3>
                                        <p>
                                            We take all critical measures to improve your website visitors' experience by creating Single Page Apps with quicker response times, server-side rendering that benefits Google SERPs and dynamic content that adjusts to suit varied user preferences. DianApps never fails to deliver the ultimate results to its clients.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>4</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Custom & Real-time Apps</h3>
                                        <p>
                                            No matter what sector your company is in or how unique your ReactJS app development needs are. Our ReactJS developers are capable of delivering modern, real-time web app solutions adapted to your individual requirements, resulting in improved outcomes and great ROIs for the long run accomplishments.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>5</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Plugin Implementation</h3>
                                        <p>
                                            Our ReactJS engineers make full use of the ReactJS front-end JavaScript library's full power to construct reusable plugins and widgets, improving the usability of your business-critical solution, which ultimately helps you stand out from the competition and claim success.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>6</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>App Migration </h3>
                                        <p>
                                            We use the best practices of the ReactJS library to effortlessly transfer your conventional apps to ReactJS for greater performance and, as a result, more potential to gain users' interest, leading to a higher return on investment and sustainability.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box">
                                    <div className="mig1">
                                        <h4>7</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>App Support & Maintenance </h3>
                                        <p>
                                            Hire specialized ReactJS developers for app maintenance and support services as needed to ensure the top-notch performance of your ReactJS application at all times. They deliver app version upgrades with bug fixes and security patches on a regular and proactive basis to keep your app up to date in all technical aspects.


                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div> */}


                    <div className="migration_card">
                        <Splide
                            className="w-full z-50"
                            aria-label="React JS Services"
                            options={{
                                perPage: perPage,
                                perMove: 1,
                                autoplay: true,
                                pauseOnHover: true,
                                type: "loop",
                                interval: 2000,
                                drag: true,
                                gap: '1rem',
                                breakpoints: {
                                    1024: { perPage: 2 },
                                    768: { perPage: 1 },
                                    480: { perPage: 1 },
                                },
                            }}
                        >
                            {[
                                {
                                    title: "React JS Consultancy",
                                    desc: "Looking for a front-end ReactJS solution? Our senior ReactJS executives may assist you to clarify all your concerns and queries while helping to create scalable solutions. We don’t just sketch your business workflows but also find various tactics & proposals to make sure the brand is ready to rank from day one of its releases.",
                                },
                                {
                                    title: "Material Design Integrations",
                                    desc: "Your fantastic app concept merits a beautiful design solution. Our innovative UI/UX designers and ReactJS developers work together to create a feature-rich and aesthetically appealing front-end design that encourages customers to explore the platform and choose the customer journey.",
                                },
                                {
                                    title: "Single Page Apps",
                                    desc: "We take all critical measures to improve your website visitors' experience by creating Single Page Apps with quicker response times, server-side rendering that benefits Google SERPs and dynamic content that adjusts to suit varied user preferences. DianApps never fails to deliver the ultimate results to its clients.",
                                },
                                {
                                    title: "Custom & Real-time Apps",
                                    desc: "No matter what sector your company is in or how unique your ReactJS app development needs are. Our ReactJS developers are capable of delivering modern, real-time web app solutions adapted to your individual requirements, resulting in improved outcomes and great ROIs for the long run accomplishments.",
                                },
                                {
                                    title: "Plugin Implementation",
                                    desc: "Our ReactJS engineers make full use of the ReactJS front-end JavaScript library's full power to construct reusable plugins and widgets, improving the usability of your business-critical solution, which ultimately helps you stand out from the competition and claim success.",
                                },
                                {
                                    title: "App Migration",
                                    desc: "We use the best practices of the ReactJS library to effortlessly transfer your conventional apps to ReactJS for greater performance and, as a result, more potential to gain users' interest, leading to a higher return on investment and sustainability.",
                                },
                                {
                                    title: "App Support & Maintenance",
                                    desc: "Hire specialized ReactJS developers for app maintenance and support services as needed to ensure the top-notch performance of your ReactJS application at all times. They deliver app version upgrades with bug fixes and security patches on a regular and proactive basis to keep your app up to date in all technical aspects.",
                                },
                            ].map((item, i) => (
                                <SplideSlide key={i}>
                                    <div className="migration_box">
                                        <div className="mig1">
                                            <h4>{i + 1}</h4>
                                        </div>
                                        <div className="mig2">
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>


                </div>
                {/* =================crausol=============== */}

                <div className="get_in_php dine-1234">
                    <div className="get_mig">


                        <hr className="get_mig1" />

                        <Link href="/contact-us">

                            <button>Let's Connect</button> </Link>

                        <hr className="get_mig2" />
                    </div>
                    <div className="engag_mod">
                        <h3>Our Engagement Models</h3>
                        <div className="engag_php_card">
                            <div className="engag_php_box">
                                <h2>Fix cost and time</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/if3g6xyhany8hj0s3u7d.png" alt="ix cost and tim" title='ix cost and tim' />
                                <p>
                                    We estimate the scope of the after gathering a complete
                                    understanding of the clear requirements and the hours it would
                                    take for development and deployment. Once we have gathered the
                                    data, we share a fixed cost and time estimate with you of when
                                    we will deliver the project.
                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h2>On Site</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/ufkromulwmkqusren1um.png" alt="On Site" title='On Site' />
                                <p>
                                    We send our resources to your place of operation to work
                                    alongside your team on the project. This model suits
                                    businesses that have a skilled team but require an expert to
                                    take care of certain aspects of the project. It’s
                                    cost-effective, risk-free, fast, and 100% transparent.
                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h2>Time and Model</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/nwl4m1ljadoyvlximszq.png" alt="Time and Model" title='Time and Model' />
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

                <div className="why_pnt">
                    <div className="why_pnt1 dine-1234">
                        <div className="why_php_h">
                            <h2>
                                Why Hire React JS
                                Developers <br />
                                From  <span>Kushel Digi?</span>
                            </h2>
                        </div>
                        <p>
                            Hire professional React JS engineers from DianApps to transform your company ideas into dependable and lucrative software solutions.
                            Let's have a look at some of the reasons why you should engage our developers for your project:
                        </p>
                        <div className="pnt_card">
                            <div className="pnt_card1">
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="killed programmers" title='killed programmers' />
                                    <h4>Skilled programmers</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Cost-effective projec" title='Cost-effective projec' />
                                    <h4>Cost-effective project scope</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Protection of idea" title='Protection of idea' />
                                    <h4>Protection of idea and IP rights</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Zero contract lock-ins" title='Zero contract lock-ins' />
                                    <h4>Zero contract lock-ins</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="High scalability" title='High scalability' />
                                    <h4>High scalability</h4>
                                </div>
                            </div>
                            <div className="pnt_card2">
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Complete control" title='Complete control' />
                                    <h4>Complete control</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="time delivery" title='time delivery' />
                                    <h4>On time delivery</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="monthly updates" title='monthly updates' />
                                    <h4>Daily, weekly, and monthly updates</h4>
                                </div>
                                <div className="frenta" >
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Flexible engagement models" title='Flexible engagement models' />
                                    <h4>Flexible engagement models</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="why_pnt2 dine-1234">
                        <div className="hire_steps_php">
                            <h2>Hire React JS Developers From kushel Digi  In 4 Steps</h2>
                            <p>
                                Hiring a PHP developer from DianApps is simple. Follow 4 easy
                                steps to employ a team for your innovative web application.
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
                                    Take interview of the <br /> React Js team
                                </p>
                            </div>
                            <div className="hire_phpStep_box">
                                <h3>04</h3>
                                <p>Hire the React Js developers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <ContactForm1 /> */}

                <ServiceCommon />


                {/* <ReactHireFAQ/> */}

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

export default ReactJsComponent;