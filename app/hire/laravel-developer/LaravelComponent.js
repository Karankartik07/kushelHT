"use client"
import { useEffect, useState } from 'react';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


import ContactForm3 from '../../COMMON/ContactForm3';
import ServiceCommon from '../../COMMON/ServiceCommon';

import Footer from '@/app/COMMON/Footer';
import { useRouter } from 'next/navigation';

import Navbar from '@/app/COMMON/Navbar';
import '../../globals.css';
const LaravelComponent = () => {


    const router = useRouter();

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
        {/* <Helmet> */}
        <link rel="canonical" href="https://www.kusheldigi.com/hire/laravel-developer"/>
        {/* </Helmet> */}
            <div className="ser-main">

            <div className="phppp-main">
                <div className="php-back">
                    <div className="php-back1">
                        <h1>Hire Laravel Developers</h1>
                        <p>
                        With our team's experience, you can be sure that your tasks will be completed properly.Call our top-notch Laravel developers a chance to speak based on your requirements.
                        </p>
                        <button onClick={()=>router.push("/contact-us")}>Hire Developer</button>
                    </div>
                    <div className="php-back2">
                       
                        <ContactForm3/>
                    </div>
                </div>
            </div>

                <div className="pgp_service">
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

                            <span>Hire</span>  Kushel Digi <span>Laravel</span>  Developers to strategically Build Complex-Free Apps

                        </h2>
                        <hr className="hg2 hg20" />
                    </div>
                    <div className="hire_py">
                        <p className='dine-1234'>
                        Hire Laravel developers from Kushel Digi to create complex-free, effective applications. Our team's outstanding developers are always using cutting edge technologies to create original and practical solutions. Our primary goal is to give people a beautiful and effortless experience where they are unable to distinguish between happiness and difficulty.
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
                                        <h3>Laravel Web Development</h3>
                                        <p>
                                        Laravel web development is a powerful and innovative technology that helps users to create web applications as per their requirements. It uses modern development practices with the latest security and accelerated performance and delivers high quality web products.
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
                                        <h3>Migration to Laravel</h3>
                                        <p>
                                        Now get the chance to move your web application in an unique and safe manner by switching to Laravel. This occurs slowly and with perfect instant reliability. This method produces a more accurate and comprehensive experience by correctly visualising the facts and structure.
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
                                        <h3>Laravel Support & Maintenance</h3>
                                        <p>
                                        Maintenance and support for Laravel is crucial for advanced trustworthy online projects. This guarantees the availability and security of your application or website. Your company may run more efficiently. With the help of Laravel's support and maintenance services, which give you skilled attention and help.
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
                                        <h3>Laravel</h3>
                                        <p>
                                        Laravel is a well-known and php web development framework, which comes with high quality and unique features. It is used to develop web apps quickly and effectively, providing an excellent experience to users. Even experienced developers get convenience in using this tool.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div> */}

                    <div className="migration_card">
                      <Splide
                        className="w-full z-50"
                        aria-label="PHP Migration Services"
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
                        {[1, 2, 3, 4].map((num, i) => (
                          <SplideSlide key={i}>
                            <div className="migration_box">
                              <div className="mig1">
                                <h4>{num}</h4>
                              </div>
                              <div className="mig2">
                                <h3>
                                  {[
                                    "Laravel Web Development",
                                    "Migration to Laravel",
                                    "Laravel Support & Maintenance",
                                    "Laravel",
                                   
                                  ][i]}
                                </h3>
                                <p>
                                  {[
                                    "Laravel web development is a powerful and innovative technology that helps users to create web applications as per their requirements. It uses modern development practices with the latest security and accelerated performance and delivers high quality web products.",
                                    "Now get the chance to move your web application in an unique and safe manner by switching to Laravel. This occurs slowly and with perfect instant reliability. This method produces a more accurate and comprehensive experience by correctly visualising the facts and structure.",
                                    "Maintenance and support for Laravel is crucial for advanced trustworthy online projects. This guarantees the availability and security of your application or website. Your company may run more efficiently. With the help of Laravel's support and maintenance services, which give you skilled attention and help.",
                                    "Laravel is a well-known and php web development framework, which comes with high quality and unique features. It is used to develop web apps quickly and effectively, providing an excellent experience to users. Even experienced developers get convenience in using this tool.",
                                    
                                  ][i]}
                                </p>
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
                        <button onClick={()=>router.push("/contact-us")}>Sehedule a call with our Laravel Developers</button>
                        <hr className="get_mig2" />
                    </div>
                    <div className="engag_mod">
                        <h3>Our Engagement Models</h3>
                        <div className="engag_php_card">
                            <div className="engag_php_box">
                                <h2>Fix cost and time</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/if3g6xyhany8hj0s3u7d.png" alt="Fix cost and time" title='Fix cost and time' />
                                <p>
                                After obtaining a thorough grasp of the specific demands and the number of hours needed for development and deployment, we estimate the size of the project. After gathering the necessary information, we provide you with an initial cost and timeline estimate for the project's completion.
                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h2>On Site</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/ufkromulwmkqusren1um.png" alt="On Site" title='On Site' />
                                <p>
                                We send our employees to your location of business to collaborate with your team on the project. This approach works for companies with a competent workforce that need a specialist to handle certain project tasks. It is 100% transparent, quick, risk-free, and affordable.
                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h2>Time and Model</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/nwl4m1ljadoyvlximszq.png" alt="Time and Model" title='Time and Model' />
                                <p>
                                When the software fits into the medium to high complexity range, we employ the Time & Material Model. Here, we bill you on an hourly basis based on the quantity and duration of resources. Our team used to create your software. Businesses that need frequent upgrades are best suited for this strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why_pnt">
                    <div className="why_pnt1 dine-1234">
                        <div className="why_php_h">
                            <h2>
                                Why Hire Laravel
                                Developers <br />
                                From  <span>Kushel Digi?</span>
                            </h2>
                        </div>
                        <p>
                            Hire professional Laravel Developers from Kushel Digi to transform your company ideas into dependable and lucrative software solutions.
                            Let's have a look at some of the reasons why you should engage our developers for your project:
                        </p>
                        <div className="pnt_card">
                            <div className="pnt_card1">
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="Skilled programmer" title='Skilled programmer' />
                                    <h4>Skilled programmers</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="Cost-effective project scope" title='Cost-effective project scope' />
                                    <h4>Cost-effective project scope</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="Protection of idea and IP rights" title='Protection of idea and IP rights' />
                                    <h4>Protection of idea and IP rights</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="Zero contract" title='Zero contract' />
                                    <h4>Zero contract lock-ins</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="High scalability" title='High scalability' />
                                    <h4>High scalability</h4>
                                </div>
                            </div>
                            <div className="pnt_card2">
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="Complete control" title='Complete control' />
                                    <h4>Complete control</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="time delivery" title='time delivery' />
                                    <h4>On time delivery</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="updates" title='updates' />
                                    <h4>Daily, weekly, and monthly updates</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172487/frema_utwyrm.png' alt="Flexible engagement model"  title='Flexible engagement model'/>
                                    <h4>Flexible engagement models</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="why_pnt2 dine-1234">
                        <div className="hire_steps_php">
                            <h2>Hire Laravel Developers From kushel Digi In 4 Steps</h2>
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
                                Take interview of the <br /> Laravel team
                                </p>
                            </div>
                            <div className="hire_phpStep_box">
                                <h3>04</h3>
                                <p>Hire the Laravel developers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <ContactForm1 /> */}

                 <ServiceCommon/>

                {/* <div className="home9 py-12 bigcom9">
                    <div className="home91 flex px-24 dine-1234">
                        <div className="home911 text-center">
                            <h2 className="font-bold text-gray-700">Frequently Asked<br/> Questions</h2>
                        </div>
                        <div className="home912 FAQ-1">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How do I hire ReactJS developers?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Are ReactJS Developers in demand?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            In ad velit in ex nostrud dolore cupidatat consectetur ea
                                            in ut nostrud velit in irure cillum tempor laboris sed
                                            adipisicing eu esse duis nulla non.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is the cost of hiring a ReactJS developer?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            In ad velit in ex nostrud dolore cupidatat consectetur ea
                                            in ut nostrud velit in irure cillum tempor laboris sed
                                            adipisicing eu esse duis nulla non.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Why should I hire a ReactJS developer from Kushel Digi?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            In ad velit in ex nostrud dolore cupidatat consectetur ea
                                            in ut nostrud velit in irure cillum tempor laboris sed
                                            adipisicing eu esse duis nulla non.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                        </div>
                    </div>
                </div> */}
                {/* <LaravelHireFAQ/> */}

                <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
            </div>
            <Footer/>
        </>
    )
}

export default LaravelComponent;