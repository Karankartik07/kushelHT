"use client"
import { useEffect, useState } from 'react';


import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { useRouter } from 'next/navigation';
import ContactForm3 from '../../COMMON/ContactForm3';
import ServiceCommon from '../../COMMON/ServiceCommon';

import Footer from '@/app/COMMON/Footer';
import Navbar from '@/app/COMMON/Navbar';
import '../../globals.css';

const WordpressComponent = () => {
    const [perPage, setPerPage] = useState(3);

    const router = useRouter();

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
        
            <div className="ser-main">

            <div className="phppp-main">
                <div className="php-back ">
                    <div className="php-back1">
                        <h1>Hire Wordpress Developers</h1>
                        <p>Seeking to build a front-end application that not only promotes but also enhances your cutting-edge concept? Choose Dian's ReactJS developers.

                        </p>
                        <button onClick={()=>router.push("/contact-us")}>Hire Developer</button>
                    </div>
                    <div className="php-back2">
                      
                        <ContactForm3/>
                    </div>
                </div>
                </div>

                <div className="pgp_service pgpppp-serv">
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
                        <hr className="hg1" />
                        <h2>

                            Hire <span>WordPress Programmers</span>  to Develop Flexible Websites

                        </h2>
                        <hr className="hg2" />
                    </div>
                    <div className="hire_py">
                        <p>
                        Partnered with our team of seasoned WordPress developers well-versed in industry-leading best practices and cutting-edge technologies, we provide comprehensive WordPress development services. Our adept developers can serve the needs of both startups and enterprise-level businesses.

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
                                        <h3>Tailored WordPress Solutions
</h3>
                                        <p> We have expertise in creating tailor-made WordPress solutions that perfectly match your distinct needs and goals. Your website or web application will stand out with a personalised touch.

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
                                        <h3>WordPress Plugin Development
</h3>
                                        <p>Our expertise extends to WordPress plugin development. We create custom plugins that enhance the functionality of your WordPress site, providing solutions tailored to your requirements.
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
                                        <h3>WordPress Speed Enhancement
</h3>
                                        <p>We optimize the speed and performance of your WordPress website. With our expertise, your site will load faster, offering a better user experience and improved search engine rankings.
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
                                        <h3>Seamless Migration and Upgrades
</h3>
                                        <p> We offer hassle-free migration and upgrade services for your WordPress site. Whether you're moving to a new host, updating to the latest version, or enhancing your website's capabilities, we ensure a smooth transition.

                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div> */}

<div className="migration_card">
  <Splide
    className="w-full z-50"
    aria-label="WordPress Services"
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
        title: "Tailored WordPress Solutions",
        desc: "We have expertise in creating tailor-made WordPress solutions that perfectly match your distinct needs and goals. Your website or web application will stand out with a personalised touch.",
      },
      {
        title: "WordPress Plugin Development",
        desc: "Our expertise extends to WordPress plugin development. We create custom plugins that enhance the functionality of your WordPress site, providing solutions tailored to your requirements.",
      },
      {
        title: "WordPress Speed Enhancement",
        desc: "We optimize the speed and performance of your WordPress website. With our expertise, your site will load faster, offering a better user experience and improved search engine rankings.",
      },
      {
        title: "Seamless Migration and Upgrades",
        desc: "We offer hassle-free migration and upgrade services for your WordPress site. Whether you're moving to a new host, updating to the latest version, or enhancing your website's capabilities, we ensure a smooth transition.",
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
                        <button onClick={()=>router.push("/contact-us")}>Let's Connect</button>
                        <hr className="get_mig2" />
                    </div>
                    <div className="engag_mod">
                        <h3>Our Engagement Models</h3>
                        <div className="engag_php_card">
                            <div className="engag_php_box trans-laravell">
                                <h2>Transparent Cost and Timeline Estimation
</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/if3g6xyhany8hj0s3u7d.png" alt="ransparent Cost and Timeline Estimation" title="ransparent Cost and Timeline Estimation" />
                                <p>
                                We conduct a thorough assessment of the project scope, gathering clear requirements and estimating development and deployment hours. Once data is gathered, we provide a fixed cost and timeline estimate for project completion.
                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h2>On-Site Collaboration</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/ufkromulwmkqusren1um.png" alt="On-Site Collaboration" title="On-Site Collaboration" />
                                <p>
                                Our experts join your team at your location to collaborate on specific project aspects. This model is ideal for businesses with a skilled team seeking expert assistance. It's cost-efficient, low-risk, rapid, and fully transparent.

                                </p>
                            </div>
                            <div className="engag_php_box">
                                <h2>Time & Resource Flexibility
</h2>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724913904/nwl4m1ljadoyvlximszq.png" alt="time & Resource Flexibility" title="time & Resource Flexibility" />
                                <p>
                                We implement the Time and material Model for medium to high-complexity software. You're billed based on resource numbers and hours invested in software development at an hourly rate. This model suits businesses in need of continuous updates.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why_pnt ">
                    <div className="why_pnt1  why_pnt11 dine-1234">
                        <div className="why_php_h">
                            <h2>
                                Why Hire Wordpress
                                Developers 
                                From  <span>Kushel Digi?</span>
                            </h2>
                        </div>
                        <p>
                        Hire ReactJS Experts from DianApps to turn your business ideas into dependable and highly profitable software solutions. Explore the following key reasons to engage our developers for your project:
                          <br /> Certainly, here's the revised paragraph with the headings and points: <br /> "Hire ReactJS Experts from DianApps to bring your business ideas to life with reliable and highly profitable software solutions. Explore the following compelling reasons to engage our developers:

                        </p>
                      


                        <div className="pnt_card">
                            <div className="pnt_card1">
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Skilled programmer" title='Skilled programmer' />
                                    <h4>Skilled programmers</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Cost-Effective" title='Cost-Effective' />
                                    <h4>Cost-Effective Solutions </h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Intellectual Property " title='Intellectual Property ' />
                                    <h4>Intellectual Property Protectio</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Contract Lock-In" title='Contract Lock-In' />
                                    <h4>No Contract Lock-Ins 
</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Scalability" title='Scalability' />
                                    <h4> Scalability
</h4>
                                </div>
                            </div>
                            <div className="pnt_card2">
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Complete Project Control" title='Complete Project Control' />
                                    <h4>Complete Project Control
</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Timely Deliveries"  title='Timely Deliveries'/>
                                    <h4> Timely Deliveries
</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Regular Updates" title='Regular Updates' />
                                    <h4>Regular Updates
</h4>
                                </div>
                                <div className="frenta">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002499/frema_nyozfz.png' alt="Flexible Engagement Models" title='Flexible Engagement Models' />
                                    <h4>
Flexible Engagement Models
</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="why_pnt2 dine-1234">
                        <div className="hire_steps_php">
                            <h2>Hire WordPress Developers From kushel Digi In 4 Steps</h2>
                            <p>
                                Hiring a WordPress  developer from DianApps is a breeze. Just follow these four simple steps to assemble a team for your innovative web application.
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
              

                 <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002631/whatsapp_qq9ps8.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741002636/telephone_u04gjn.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
            </div>
            <Footer/>
        </>
    )
}

export default WordpressComponent