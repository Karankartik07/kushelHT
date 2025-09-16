"use client"
import { useEffect, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Navbar from "@/app/COMMON/Navbar";
import '../../globals.css';

import Footer from "@/app/COMMON/Footer";
import Link from "next/link";
import ContactForm3 from "../../COMMON/ContactForm3";
import ServiceCommon from "../../COMMON/ServiceCommon";


import HireFAQ from "@/app/COMMON/HirePhpFAQ";
// import { Helmet } from "react-helmet";
const PhpComponent = () => {

  const [perPage, setPerPage] = useState(3);
  const [perPage1, setPerPage1] = useState(3);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1350px)").matches) {
      setPerPage(3);
    }
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1150px)").matches) {
      setPerPage1(2);
    }
    if (window.matchMedia("(max-width: 850px)").matches) {
      setPerPage1(1);
    }
  }, [])



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
  const generateMetadata = ({ params }) => ({
    title: 'KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified',
    description:"web agency, web design agency , best web design agency in the world, web design agency, web design services, web design and development agency"
  });
  
useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription ? metaDescription.content = description : 
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);
  return (
    <>
    <Navbar/>
    
      <div className="ser-main">
        <div className="phppp-main">
          <div className="php-back">
            <div className="php-back1">
              <h1>Hire PHP Developers</h1>
              <p>
                Planning to build a dynamic website for your brand? Our PHP
                developers can help. DianApps has a team of 20+ dedicated PHP
                developers with the skillsets to make innovative digital
                platforms.
              </p>
              <Link href="/contact-us">
                <button>Hire Developer</button>
              </Link>
            </div>
            <div className="php-back2">
              
              <ContactForm3 />
            </div>
          </div>
        </div>

        <div className="pgppp-ser">
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
        </div>
        {/* ==============crausol============== */}


        <div className="hireee-kui">
          <div className="hire_kui dine-1234">
            <div className="hire_line">
              <hr className="hg1" />
              <h2>
                {" "}
                <span>Hire</span> Kushel Digi <span>PHP Developers</span> for
                Elevated Experience
              </h2>
              <hr className="hg2" />
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
                className="w-full z-50"
                aria-label="Our Services"
                options={{
                  perPage: perPage1,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                  breakpoints: {
                   
                    1024: { perPage: 2,},
                    768: { perPage: 1 },
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
                      <h3>Full stack PHP development</h3>
                      <p>
                        We help you migrate your software to PHP, ensuring that it
                        gets the benefits that the language offers. We also hold
                        an experience in upgrading your current software into PHP.
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
                      <h3>Custom PHP app development</h3>
                      <p>
                        We hold the specialisation in building custom PHP app
                        development. We ensure that your software looks and works
                        different from the plethora of platforms operating online.
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
                      <h3>PHP migration and upgradations</h3>
                      <p>
                        we help you transmigrate your software to PHP, and ascertain that it gets the benefits that the language offers. We also hold an undergrad in upgrading your current software into PHP.
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
                      <h3>Software maintenance</h3>
                      <p>
                        We have fitted and redacted a software system after it has been delivered to the customer. It is necessary to ensure that the software continues to meet the needs of the users over time.
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
                      <h3>PHP CMS development</h3>
                      <p>
                        By using PHP CMS platforms, developers can rock bottom of their traditional workload .It makes it easy to develop dynamic web apps, and this smartly streamlines the development process.
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>  */}

<div className="migration_card">
  <Splide
    className="w-full z-50"
    aria-label="PHP Migration Services"
    options={{
      perPage: perPage1,
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
                "Full stack PHP development",
                "Custom PHP app development",
                "PHP migration and upgradations",
                "Software maintenance",
                "PHP CMS development",
              ][i]}
            </h3>
            <p>
              {[
                "We help you migrate your software to PHP, ensuring it benefits from the language's full potential. We also upgrade your existing software into PHP.",
                "We specialize in building custom PHP apps that stand out in look and performance.",
                "We help you transmigrate your software to PHP and upgrade your current stack for maximum performance.",
                "We have fitted and redacted a software system after it has been delivered to the customer. It is necessary to ensure that the software continues to meet the needs of the users over time.",
                "By using PHP CMS platforms, developers can rock bottom of their traditional workload .It makes it easy to develop dynamic web apps, and this smartly streamlines the development process."
              ][i]}
            </p>
          </div>
        </div>
      </SplideSlide>
    ))}
  </Splide>
</div>

             

{/* <div className="migartion_card mx-auto max-w-7xl px-4">
  <Splide
    id="php-migration-slider"
    className="w-full z-50"
    aria-label="Our Services"
    options={{
      perPage: 4,
      perMove: 1,
      focus: 'center',
      autoplay: true,
      pauseOnHover: true,
      type: "loop",
      interval: 1800,
      drag: true,
      gap: '1rem',
      breakpoints: {
        1280: { perPage: 3, focus: 'center' },
        1024: { perPage: 2, focus: 'center' },
        768: { perPage: 1, focus: 'center' },
      },
    }}
  >
    <SplideSlide id="slide-1">
      <div className="migration_box">
        <div className="mig1">
          <h4>1</h4>
        </div>
        <div className="mig2">
          <h3>Full stack PHP development</h3>
          <p>
            We help you migrate your software to PHP, ensuring it gets all the benefits
            the language offers. We also upgrade your current software into PHP.
          </p>
        </div>
      </div>
    </SplideSlide>

    <SplideSlide id="slide-2">
      <div className="migration_box">
        <div className="mig1">
          <h4>2</h4>
        </div>
        <div className="mig2">
          <h3>Custom PHP app development</h3>
          <p>
            We specialise in building custom PHP apps that make your software unique,
            both in design and performance.
          </p>
        </div>
      </div>
    </SplideSlide>

    <SplideSlide id="slide-3">
      <div className="migration_box">
        <div className="mig1">
          <h4>3</h4>
        </div>
        <div className="mig2">
          <h3>PHP migration and upgradations</h3>
          <p>
            We transmigrate your software to PHP and ensure a smooth upgrade for long-term benefits.
          </p>
        </div>
      </div>
    </SplideSlide>

    <SplideSlide id="slide-4">
      <div className="migration_box">
        <div className="mig1">
          <h4>4</h4>
        </div>
        <div className="mig2">
          <h3>Software maintenance</h3>
          <p>
            We provide long-term maintenance to ensure your software always performs efficiently and meets user expectations.
          </p>
        </div>
      </div>
    </SplideSlide>

    <SplideSlide id="slide-5">
      <div className="migration_box">
        <div className="mig1">
          <h4>5</h4>
        </div>
        <div className="mig2">
          <h3>PHP CMS development</h3>
          <p>
            Our PHP CMS services reduce development time and simplify dynamic web app building.
          </p>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</div> */}



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
            <h3>Our Engagement  Models</h3>
            <div className="engag_php_card">
              
              <div className="engag_php_box">
                <h3>Fix cost and time</h3>
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/if3g6xyhany8hj0s3u7d.png" alt="Fix cost and time" title="Fix cost and time" />
                <p>
                  We estimate the scope of the after gathering a complete
                  understanding of the clear requirements and the hours it would
                  take for development and deployment. Once we have gathered the
                  data, we share a fixed cost and time estimate with you of when
                  we will deliver the project.
                </p>
              </div>

              <div className="engag_php_box">
                <h3>On Site</h3>
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/ufkromulwmkqusren1um.png" alt="On Site" title="On Site" />
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
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/nwl4m1ljadoyvlximszq.png" alt="Time and Model" title="Time and Model" />
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
                Why Hire PHP Developers <br /> From <span>Kushel Digi?</span>{" "}
              </h2>
            </div>
            <p>
              The validation of our service excellence lies in the ability of
              our PHP developers’ skills in developing a range of different web
              applications designed to meet different business objectives.
            </p>
            <div className="pnt_card">
              <div className="pnt_card1">
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="Skilled programmers" />
                  <h4>Skilled programmers</h4>
                </div>
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="Cost-effective" title="Cost-effective" />
                  <h4>Cost-effective project scope</h4>
                </div>
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="Protection" title="Protection" />
                  <h4>Protection of idea and IP rights</h4>
                </div>
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="Zero contract" title="Zero contract" />
                  <h4>Zero contract lock-ins</h4>
                </div>
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="High scalability" title="High scalability" />
                  <h4>High scalability</h4>
                </div>
              </div>
              <div className="pnt_card2">
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="Complete control" title="Complete control" />
                  <h4>Complete control</h4>
                </div>
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="On time delivery" title="On time delivery" />
                  <h4>On time delivery</h4>
                </div>
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="Daily, weekly, and monthly updates" title="Daily, weekly, and monthly updates" />
                  <h4>Daily, weekly, and monthly updates</h4>
                </div>
                <div className="frenta">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002383/frema_pvc0zz.png' alt="Flexible engagement" title="Flexible engagement" />
                  <h4>Flexible engagement models</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="why_pnt2 dine-1234">
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
        
        <div className="confused dine-1234">
          <h2>Confused If PHP Is Right For You?</h2>
          <p>PHP is one of the most popular web development languages. Right from a simple script to complex web apps, the language has a variety of use cases across the software spectrum.</p>
          <div className="confused_card">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724914089/golita.4827ef0e6b90e4550ebd_arlpfd.png" alt="PHP Web Development Chart" title="PHP Web Development Chart" />
          </div>
        </div>

     

        <div className="php_portfolio " id="php_btn_change">
          <div className="php_port">
            <h2 className="our_php">Our PHP Web Development Portfolio</h2>
          </div>
          <div className="gting ">
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
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724847559/Group_1000007513_hpxyoy.png" alt="laravel-based cms" title="laravel-based cms" />
                    <div className="headst_big">
                      <h3>The laravel-based cms <br/>
                      engineered for simplicity</h3>
                      {/* <h2>recoil pads</h2> */}
                    </div>
                    <div className="kickma-arrow">
                      <a href="https://octobercms.com/" target="_blank" rel="noopener noreferrer">
                        <button>
                          <span>View Website</span>
                          <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
             
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="kickta_big kickta_php1">
                  <div className="kickta_big1 kickta_phpt1">
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724847561/Group_1000007106_f6rma8.png" alt="Deliver awesome" title="Deliver awesome" />
                    <div className="headst_big headst_bigttt">
                      <h3>Deliver awesome,<br/>
                      robust, reliable websites<br/>
                      with Sulu CMS</h3>
                    </div>
                    <div className="kickma-arrow">
                      <a href="https://sulu.io/" target="_blank" rel="noopener noreferrer">
                        <button>
                          <span>View Website</span>
                          <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
               
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="kickta_big kickta_php2">
                  <div className="kickta_big1 kickta_phpt2">
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724847565/Group_1000007452_g9f1hc.png" alt="experience management platform" title="experience management platform" />
                    <div className="headst_big headst_bigttt">
                      <h3>data and experience<br/>
                      management platform <br/>
                       for industry leaders</h3>
                    </div>
                    <div className="kickma-arrow">
                      <a href="https://pimcore.com/en" target="_blank" rel="noopener noreferrer">
                        <button>
                          <span>View Website</span>
                          <svg className="ml-2" width="19" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </SplideSlide>

            </Splide>
          </div>
        </div>



      


        <ServiceCommon />

        {/* <div className="home9 py-12 bigcom9">
          <div className="home91 flex px-24 dine-1234">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">Frequently Asked<br /> Questions</h2>
            </div>
            <div className="home912 FAQ-1">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why hire from an agency, not freelancers?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Agencies offer a dedicated team, ensuring consistent quality and expertise.


                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What applications can be created with PHP?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      PHP is versatile, supporting various software applications.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What's the future of PHP?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      PHP continues to be relevant and evolves with updates and enhancements.                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How secure is PHP?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      PHP is secure if best practices are followed in development.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      From a Security Perspective, How Good is PHP?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Newer versions, especially, have improved security for PHP. However, as with any programming language, the security of PHP applications depends largely on the skill and diligence of the developer. Regular updates, secure coding techniques, and the use of security tools can minimise risks.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      On what basis can I hire PHP programmers?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Consider skills, experience, and portfolio when hiring PHP programmers.                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div> */}
        <HireFAQ/>

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img
             className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172941/whatsapp_cowbb8.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172987/telephone_qjoh3j.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PhpComponent;
