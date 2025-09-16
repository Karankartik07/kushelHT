"use client"
import { useEffect, useState } from 'react';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


import ServiceCommon from '../../COMMON/ServiceCommon';

import ContactForm3 from '../../COMMON/ContactForm3';


import Footer from '@/app/COMMON/Footer';
import Navbar from '@/app/COMMON/Navbar';
import Link from 'next/link';
import '../../globals.css';
const NodeJsComponent = () => {
    const [perPage, setPerPage] = useState(3);
    useEffect(() => {
        if (window.matchMedia("(max-width: 1350px)").matches) {
            setPerPage(3);
        }
        if (window.matchMedia("(max-width: 800px)").matches) {
            setPerPage(2);
        }
        if (window.matchMedia("(max-width: 600px)").matches) {
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
        <Navbar/>
            
            <div className="ser-main">

                <div className="phppp-main" id='phpppp-main'>
                    <div className="php-back">
                        <div className="php-back1">
                            <h1>Hire Node.js Developers</h1>
                            <p>
                                Hire skilled Kushal Digi's Node.js developers and unlock the power of the latest technology with them. Our adept developers create unmatched and scalable applications as per your unique requirements. With expertise in Node.js, we ensure to provide robust and efficient solutions for your projects. Our skilled team will take your digital presentation to new heights and bring innovation to your business.
                            </p>
                            <Link href="/contact-us">
                                <button>Hire Developer</button> </Link>
                        </div>
                        <div className="php-back2">

                            <ContactForm3 />
                        </div>
                    </div>
                </div>

                <div className="key_features">
                    <div className="key_features1 dine-1234">
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

                </div>

                <div className="hire_kui dine-1234">
                    <div className="hire_line">
                        <hr className="hg1 hg11" />
                        <h2>
                            <span>Hire</span>  Kushel Digi <span>Node.js</span>  for End-to-end Services
                        </h2>
                        <hr className="hg2" />
                    </div>
                    <div className="hire_py">
                        <p>
                            Our skilled and competent group provides expertise for Node.js end to end services. Our team consists of Node.js developers who are professional in technical ability and timely completion. We are able to provide solutions for your projects and comprehend the different requirements, enabling you to run a successful and innovative organisation.
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
                                <div className="migration_box migration_box1">
                                    <div className="mig1">
                                        <h4>1</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Node.js consultation</h3>
                                        <p>
                                            By collaborating with a Node JS consultant you can get excellent advice to develop your web or application projects uniquely. This advice guides you towards best practices, technical knowledge and solutions to help you complete your projects successfully.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box migration_box1">
                                    <div className="mig1">
                                        <h4>2</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Custom Node.js development</h3>
                                        <p>
                                            One outstanding technology that is made to fit your business needs is custom Node JS development. It offers you fully featured, customised solutions that improve user experience for your users. Developing custom Node JS applications can help you grow your company to new heights.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box migration_box1">
                                    <div className="mig1">
                                        <h4>3</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Enterprise Node.js apps</h3>
                                        <p>
                                            Node.js applications are taking new turns in the industrial world. It assist in resolving particular issues and are growing in significance within the sector. These programmes' strength, security, and scalability enable businesses to have a consistent and long-lasting online presence.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box migration_box1">
                                    <div className="mig1">
                                        <h4>4</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Node.js migration</h3>
                                        <p>
                                            Within the Node.js expansion, migration is the process of moving from one old platform to another. It provides the business with scalability, security, and stability by ensuring that every one of their apps is updated and stays stable. It is essential that the technical and business aspects of this methodology be taken into account.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="migration_box migration_box1">
                                    <div className="mig1">
                                        <h4>5</h4>
                                    </div>
                                    <div className="mig2">
                                        <h3>Node.js maintenance</h3>
                                        <p>
                                            For the industry to remain stable and functional, Node.js maintenance is crucial. Node.js services stay stable and functional with regular upgrades, security patches, and bug fixes. via maintenance and assistance
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div> */}
                     
                     <div className="migration_card">
                       <Splide
                         className="w-full z-50"
                         aria-label="Our Services"
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
                         {[1, 2, 3, 4, 5].map((num, i) => (
                           <SplideSlide key={i}>
                             <div className="migration_box">
                               <div className="mig1">
                                 <h4>{num}</h4>
                               </div>
                               <div className="mig2">
                                 <h3>
                                   {[
                                     "Node.js consultation",
                                     "Custom Node.js development",
                                     "Enterprise Node.js apps",
                                     "Node.js migration",
                                     "Node.js maintenance",
                                   ][i]}
                                 </h3>
                                 <p>
                                   {[
                                     " By collaborating with a Node JS consultant you can get excellent advice to develop your web or application projects uniquely. This advice guides you towards best practices, technical knowledge and solutions to help you complete your projects successfully.",
                                     " One outstanding technology that is made to fit your business needs is custom Node JS development. It offers you fully featured, customised solutions that improve user experience for your users. Developing custom Node JS applications can help you grow your company to new heights.",
                                     " Node.js applications are taking new turns in the industrial world. It assist in resolving particular issues and are growing in significance within the sector. These programmes' strength, security, and scalability enable businesses to have a consistent and long-lasting online presence.",
                                     " Within the Node.js expansion, migration is the process of moving from one old platform to another. It provides the business with scalability, security, and stability by ensuring that every one of their apps is updated and stays stable. It is essential that the technical and business aspects of this methodology be taken into account.",
                                     "                                            For the industry to remain stable and functional, Node.js maintenance is crucial. Node.js services stay stable and functional with regular upgrades, security patches, and bug fixes. via maintenance and assistance."
                                   ][i]}
                                 </p>
                               </div>
                             </div>
                           </SplideSlide>
                         ))}
                       </Splide>
                     </div>


                </div>

                <div className="technicalll">
                    <div className="technical_sunt dine-1234">
                        <h2>Our <span>Node.js Developers’</span>  Technical Expertise</h2>
                        <div className="node-cards">
                            <div className="node-card">
                                <div className="node-box">
                                    <div className="node_img">
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916561/download_15_fjgck3.png" alt="Consulting and maintaince" title='Consulting and maintaince' />
                                    </div>
                                    <div className="nodung-head">
                                        <h3>Node.js Consulting and <br />
                                            Maintenance</h3>
                                        <p>Node.js provides maintenance and consulting services to assist users in building and executing Node.js applications. We provide a team of knowledgeable developers and technicians who can ensure optimal performance, scalability, and security. We regularly provide security patches, updates, and help with issues.</p>
                                    </div>
                                </div>
                                <div className="node-box">
                                    <div className="node_img">
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916561/download_16_zxxxm4.png" alt="Enterprise Node.js" title='Enterprise Node.js' />
                                    </div>
                                    <div className="nodung-head">
                                        <h3>Enterprise Node.js Web  <br /> Apps</h3>
                                        <p>Web-based applications developed with Node.js for enterprises are an effective way to promote innovation. Advanced technological quality, scalability, and security are offered by these apps. These enterprise-level apps handle massive amounts of data and satisfy business requirements. Due to their widespread usage across numerous industries and enterprises, these apps operate faster and better.</p>
                                    </div>
                                </div>
                                <div className="node-box">
                                    <div className="node_img">
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916560/download_17_xwqqmr.png" alt="Node.js Plugin" title='Node.js Plugin' />
                                    </div>
                                    <div className="nodung-head">
                                        <h3>Node.js Plugin <br />
                                            Development</h3>
                                        <p>Developing plugins for Node.js is an interesting field that allows developers to add powerful new functionality. Integration of node apps can be done with C++ or with other programming languages. Developing plugins increases the functionality and reach of Node apps, boosting both scalability and efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="node-card mt-20">
                                <div className="node-box">
                                    <div className="node_img">
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916565/download_14_pp5zsb.png" alt="Node.js Application" title='Node.js Application' />
                                    </div>
                                    <div className="nodung-head">
                                        <h3>Node.js Application <br /> Migration</h3>
                                        <p>Migrating Node.js applications to a new platform is a crucial procedure that moves linked technologies. Older versions are updated during this procedure to offer new and stronger technical benefits. Node.js's process migration capability maintains the associated technical benefits while maintaining the application.</p>
                                    </div>
                                </div>

                                <div className="node-box">
                                    <div className="node_img">
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916560/download_18_qc3blx.png" alt="API Integration and" title='API Integration and' />
                                    </div>
                                    <div className="nodung-head">
                                        <h3>API Integration and <br /> Development</h3>
                                        <p>The development and integration of APIs is an excellent technique to promote separation and connect services. This makes it possible for developers to interact with other platforms and services, including databases, web services, and other tools. Developers may maintain their public APIs and grow their applications with this assistance.</p>
                                    </div>
                                </div>

                                <div className="node-box">
                                    <div className="node_img">
                                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724916560/download_19_lqm7s7.png" alt="Custom Node.js" title='Custom Node.js' />
                                    </div>
                                    <div className="nodung-head">
                                        <h3>Custom Node.js <br /> Development</h3>
                                        <p>The idea of custom Node.js development is to satisfy the demands of consumers who wish to modify their apps. It offers developers solutions that fit their specific company requirements. Node.js custom development provides quality and security while delivering dependable, high-performing products to users.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="nodes_ben">
                    <h2>Benefits of Node JS Development Services</h2>
                    <div className='mt-4 dine-1234' >
                        <p className='strug'>Development services for Node.js have several benefits. It is utilised for unmatched productivity, high performance, sensitivity, dependability, and quick improvement. Furthermore, there is community support for open source software.</p>
                    </div>

                    <div className="node_bents">
                        <div className="node_bent">
                            <div className="node_benta">
                                <div className="head_brnta">
                                    <h3>Scalability</h3>
                                </div>
                                <p>Node JS development services have several benefits. It is employed for its lightning-fast development, excellent performance, sensitivity, dependability, and unmatched output. There's also community support for open source.</p>
                            </div>
                            <div className="node_benta">
                                <div className="head_brnta">
                                    <h3>Quick Caching</h3>
                                </div>
                                <p>Node JS applications use fast caching to efficiently cache data. This guarantees the use of recovered data.</p>
                            </div>
                            <div className="node_benta">
                                <div className="head_brnta">
                                    <h3>Single-threaded</h3>
                                </div>
                                <p>This works differently with Node JS's single-thread functionality as it executes operations in a single thread, which enhances performance compared to standard executions.</p>
                            </div>
                        </div>
                        <div className="node_bent">
                            <div className="node_benta">
                                <div className="head_brnta">
                                    <h3>Asynchronous & Event Driven I/O</h3>
                                </div>
                                <p>Applications can execute asynchronously with opposing instructions due to asynchronous and event-controlled I/O features. It offer remarkable stability and speed.</p>
                            </div>
                            <div className="node_benta">
                                <div className="head_brnta">
                                    <h3>Faster Time-To-Market</h3>
                                </div>
                                <p>Node JS offers exceptional quality and a speedy time-to-market. Its rapid development time and array of additional capabilities enable the quick introduction of products onto the market.</p>
                            </div>
                            <div className="node_benta">
                                <div className="head_brnta">
                                    <h3>Extensibility</h3>
                                </div>
                                <p>The ability to create complex and reliable applications is referred to as extensibility. It facilitates unique and flexible architectures, which makes development dependable and simple.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="kushel_cant">
                    <h2>Why Choose Kushel Digi Node.js Developers?</h2>
                    <p className="we_are mt-2">We are a reputed Node JS development company driven by the motivation to provide
                    </p>
                    <p className="we_are">breakthrough Node JS development services.</p>

                    <div className="dedicated_sings">
                        <div className="sing">
                            <div className="dedicated_singat">
                                <div className="singi_img">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172708/frena1_fbqxms.png' alt="Dedicated development teanm" title='Dedicated development teanm' />
                                    <h4>Dedicated <br /> development  team</h4>
                                </div>
                                <div className="singata-para">
                                    <p>According to our dedicated development team model, you can now have a team made up of the best abilities when you hire Node.js developers from us to meet all project development requirements at a beneficial engagement model.</p>
                                </div>
                            </div>
                            <div className="dedicated_singat">
                                <div className="singi_img">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172747/frena2_vc7due.png' alt="Timely Completion" title='Timely Completion' />
                                    <h4>Timely Completion <br /> Assurance</h4>
                                </div>
                                <div className="singata-para">
                                    <p>As our developers follow rigorous deadlines, the project is completed on time and without sacrificing quality at any stage of the development process.</p>
                                </div>
                            </div>
                            <div className="dedicated_singat">
                                <div className="singi_img">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172781/frena3_a9dszs.png' alt="Effortless Onboarding" title='Effortless Onboarding' />
                                    <h4>Effortless Onboarding <br /> Process</h4>
                                </div>
                                <div className="singata-para">
                                    <p>Our seamless onboarding method is an outcome of our time-bound software development, unique project management processes, smart implementation, and over thirty years of experience.</p>
                                </div>
                            </div>
                            <div className="dedicated_singat">
                                <div className="singi_img">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172821/frena4_pqxroh.png' alt="Engagement Modes" title='Engagement Modes' />
                                    <h4>Engagement Modes</h4>
                                </div>
                                <div className="singata-para">
                                    <p>Node.js developers engage in a variety of ways – communicating, coding, documentation, testing. A variety of methods are used for community activation, training, and productivity.</p>
                                </div>
                            </div>
                            <div className="dedicated_singat">
                                <div className="singi_img">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172853/frena5_mjqt2p.png' alt="No Hidden Costs" title='No Hidden Costs' />
                                    <h4>No Hidden Costs</h4>
                                </div>
                                <div className="singata-para">
                                    <p>Our Node.js developer  doesn't charge any hidden fees, even for developers. It is open source and designed for collaboration in a community, which provides a guarantee of success in development.</p>
                                </div>
                            </div>
                            <div className="dedicated_singat">
                                <div className="singi_img">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172899/frena6_ku4rwu.png' alt="Unhindered 24x7 " title='Unhindered 24x7 ' />
                                    <h4>Unhindered 24x7 <br /> Support</h4>
                                </div>
                                <div className="singata-para">
                                    <p>Node.js developer services offer unhindered 24x7 support. They are committed to resolving issues promptly and providing ongoing support to the project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why_pnt why_pnt1111">

                    <div className="why_pnt2 why_pnt23 dine-1234">
                        <div className="hire_steps_php">
                            <h2>Hire PHP Developers In 4 Steps</h2>
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
                                    Take interview of the <br /> PHP team
                                </p>
                            </div>
                            <div className="hire_phpStep_box">
                                <h3>04</h3>
                                <p>Hire the PHP developers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceCommon />

             {/* <NodeHireFAQ/> */}
                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469695/whatsapp_ubh9of.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
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

export default NodeJsComponent;