"use client"
import React, { useEffect } from "react";

import Head from 'next/head';


import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import '../globals.css'

import ContactForm from "../COMMON/ContactForm";
import Link from "next/link";
import StaffFAQ from "../COMMON/StaffFAQ";
import Website from "../components/Home/HomeForm";

const StaffAugmentComponent = ({ notify }) => {


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
  const generateMetadata = ({ params }) => ({
    title: 'KushelDigi Solutions- Staf augmentation services',
    description: "Boost your team's capacity with KushelDigi's expert staff augmentation services. Streamline operations and scale efficiently. Contact us today!"
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

      <div className="home-main">
        <div className="starff-main">
          <div className="staff-back101">
            <div className="staff-sect">
              <h2>
                STAFF <br /> <span>AUGMENTATION</span>
              </h2>
              <p>
                Boost your team, and amplify your success. Our Staff Augmentation service provides the talent you need to excel.
              </p>
              <a href="/contact-us" className="rect-first-btn buttunn"><button className="lets_talking"><h5>Lets get started</h5>
                <svg className="ml-1" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                </svg>
              </button>
              </a>
            </div>
            <div className="staffimg1">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464709/stafaAudgeImg_ccbmlq.png' alt="staff augmentation" />
            </div>
          </div>
        </div>
        {/* <div className="staff-cap">
          <h3 className="cab">CAPABILITIES</h3>
          <div className="card">
            <div className=" box1212">
              <div className="sard">
                <div>
                  <h3>
                    Digital Product
                  </h3>
                  <h2>Engineering</h2>
                </div>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464322/digital_kyj2lk.png' alt="digital" />
              </div>
              <div className="staff-para">
                <p>UI/UX | Frontend | API | Web | Mobile | Dev</p>
              </div>
            </div>
            <div className=" box1212">
              <div className="sard">
                <div>
                  <h3>
                    Digital
                  </h3>
                  <h2>Transformation</h2>
                </div>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464364/digital2_hv4bgf.png' alt="digital2" />
              </div>
              <div className="staff-para">
                <p>
                  SEO | SEM | Creative & Design | Media | Email & Marketing
                  Automation
                </p>
              </div>
            </div>
            <div className=" box1212">
              <div className="sard">
                <div>
                  <h3>
                    Quality
                  </h3>
                  <h2>Engineering</h2>
                </div>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464397/quality_huvs2f.png' alt="quality" />
              </div>
              <div className="staff-para">
                <p>UI/UX | Frontend | API | Web | Mobile | Dev</p>
              </div>
            </div>
            <div className=" box1212">
              <div className="sard">
                <h3 className="e-com">E-Commerce</h3>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464438/cart_zxugxv.png' alt="cart" />
              </div>
              <div className="staff-para">
                <p>UI/UX | Frontend | API Web | Mobile | Dev</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="staff-cap">
          <h3 className="cab">CAPABILITIES</h3>
          <div className="card-grid">

            <div className="card-item">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464322/digital_kyj2lk.png' alt="digital" className="card-icon" />
              <h3>Digital Product Engineering</h3>
              <p className="staff-para">UI/UX | Frontend | API | Web | Mobile | Dev</p>
            </div>

            <div className="card-item">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464364/digital2_hv4bgf.png' alt="digital2" className="card-icon" />
              <h3>Digital Transformation</h3>
              <p className="staff-para">SEO | SEM | Creative & Design | Media | Email & Marketing Automation</p>
            </div>

            <div className="card-item">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464397/quality_huvs2f.png' alt="quality" className="card-icon" />
              <h3>Quality Engineering</h3>
              <p className="staff-para">UI/UX | Frontend | API | Web | Mobile | Dev</p>
            </div>

            <div className="card-item">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464438/cart_zxugxv.png' alt="cart" className="card-icon" />
              <h3>E-Commerce</h3>
              <p className="staff-para">UI/UX | Frontend | API Web | Mobile | Dev</p>
            </div>

          </div>
        </div>



        <div className="main-contanier">
          <div className="contanier">
            <div className="content content1122">
              <div className="content-1  content-112">
                <h1 className="hr111">What is staff augmentation?</h1>
                <p className="pr1">
                  Staff augmentation is the process of adding talent to your existing
                  team through a third party. This could be anything from 10 engineers
                  joining 10 different teams, to a single developer with niche
                  expertise.
                </p>
                <p className="pr2">
                  Staff augmentation removes the overhead associated with sourcing,
                  recruiting, training and retaining talent. It can help you meet short
                  and long term technology goals with added flexibility and instant
                  access to a high-quality talent pool.
                </p>
              </div>
              <div className="content-2">
                <div className="con">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464477/back-img_iswvtw.png' alt="back" className="img-2" />
                </div>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464518/side-img_fyvkfo.png' alt="staff augmentation" className="img" />
              </div>
            </div>
          </div>

          {/* <div className="contanier-1 containnn">
            <h2 className="hr3">Benefits of staff augmentation</h2>
            <div className="content1">
              <div className="content-1-1 content45">
                <div>
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464559/ik1_imevje.png' alt="ik1" className="icon1 " />
                </div>
                <div className="hee">
                  <h2 className="hr2">Streamline communications</h2>
                  <p className="pr3">
                    Our developers align with your work hours, provide and listen to
                    feedback, and have exceptional communication skills.
                  </p>
                </div>
              </div>
              <div className="content-1-2 content45">
                <div>
                  {" "}
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464597/ik2_lvse2p.png' alt="ik2" className="icon2 " />
                </div>
                <div className="hee">
                  <h2 className="hr2">Create healthy teams</h2>
                  <p className="pr3">
                    We grill developers on their soft and behavioral skills to ensure
                    seamless integration and positive culture-fit alignment.
                  </p>
                </div>
              </div>
            </div>
            <div className="content1">
              <div className="content-1-2 content-2-2442 content45">
                <div>
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464673/clockIn_r0chre.png' alt="clockin" className="icon1 " />
                </div>
                <div className="hee">
                  <h2 className="hr2">Skip recruitment delays</h2>
                  <p className="pr3">
                    Hiring the right talent is time-consuming. We assemble the right
                    team of experts and onboard them in record time.
                  </p>
                </div>
              </div>
              <div className="content-2-2 content45">
                <div>
                  {" "}
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464638/ik4_umjz4a.png' alt="ik4" className="icon2" />
                </div>
                <div className="hee">
                  <h2 className="hr2">Access high-quality, pre-vetted talent</h2>
                  <p className="pr3">
                    We’ve already done the rigorous testing for technical, logical, and
                    soft-skill abilities so you don’t have to.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="container-benefits">
            <h2 className="benefits-heading">Benefits of staff augmentation</h2>
            <div className="benefits-grid">

              <div className="benefit-card">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464559/ik1_imevje.png" alt="ik1" className="benefit-icon" />
                <h3 className="benefit-title">Streamline communications</h3>
                <p className="benefit-text">
                  Our developers align with your work hours, provide and listen to feedback, and have exceptional communication skills.
                </p>
              </div>

              <div className="benefit-card">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464597/ik2_lvse2p.png" alt="ik2" className="benefit-icon" />
                <h3 className="benefit-title">Create healthy teams</h3>
                <p className="benefit-text">
                  We grill developers on their soft and behavioral skills to ensure seamless integration and positive culture-fit alignment.
                </p>
              </div>

              <div className="benefit-card">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464673/clockIn_r0chre.png" alt="clockin" className="benefit-icon" />
                <h3 className="benefit-title">Skip recruitment delays</h3>
                <p className="benefit-text">
                  Hiring the right talent is time-consuming. We assemble the right team of experts and onboard them in record time.
                </p>
              </div>

              <div className="benefit-card">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464638/ik4_umjz4a.png" alt="ik4" className="benefit-icon" />
                <h3 className="benefit-title">Access high-quality, pre-vetted talent</h3>
                <p className="benefit-text">
                  We’ve already done the rigorous testing for technical, logical, and soft-skill abilities so you don’t have to.
                </p>
              </div>

            </div>
          </div>

        </div>

        <div>
          <div className="staff-paper">
            <div className="local-left">
              <p className="velly">
                Our experts have been working alongside in-house teams for over a
                decade.
              </p>
            </div>
            <div className="local-right">
              <div className="dove-bb">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464751/Layer_0_1_xm5shp.png' className="jorry" alt="logo"></img>
                <hr className="dark-line" />
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464795/Mask_group_1_swmsgb.png' className="kick" alt="logo"></img>
              </div>
              <div className="Dment">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464826/Layer_1_1_g3yxrv.png' className="guns" alt="guns"></img>
                <hr className="dark-line" />
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464858/Group_71929_1_mcjcjc.png' className="nijia" alt="niji"></img>
              </div>
              <div className="trunks">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464893/Layer_1_6_1_nwympm.png' className="rely" alt="rel"></img>
                <hr className="dark-line" />
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464931/protrucks_1_1_kihq2v.png' className="pro" alt="pro"></img>
              </div>
            </div>
          </div>

          <div className="group-main">
            <div className="looft">
              <div className="contact">
                <p className="in-house">
                  Want to boost your in-house development team? See how we can help.
                </p>
                <Link href="/contact-us" className="staff-schee"><button className="bord">Schedule a Call</button></Link>
              </div>
            </div>
          </div>

          <div className="teach-teams">
            <p className="glory">Why augment your tech teams with us?</p>
            <p className="strick">
              Using a staff augmentation approach is great when you need an extra
              boost to your development, either in a single team or across multiple
              teams. We integrate into existing rituals with ease.
            </p>
          </div>
          <div className="bbbc dine-1234">
            <div className="local-img">
              <div className="p-allo">
                <p className="allo">Staff Augmentation</p>
                <p className="allo">
                  Dedicated Software <br /> Development Teams
                </p>
                <p className="allo">
                  Dedicated Software <br /> Development Teams
                </p>
              </div>
              <img className="tik_untik" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465116/Group_1000007395_nic4ux.jpg' alt="img"></img>
              <p className="status">Let's discuss how your setup should look.</p>
              <Link href="/contact-us"><button className="apple">Schedule a Call</button></Link>
            </div>
          </div>


          <div className="our-hightlight">
            <div className="safolo-left">
              <p className="seamless">Our process. Simple, seamless, streamlined</p>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740464972/Rectangle_18298_b8xjtd.png' id="group-men" alt="Our Process"></img>
            </div>
            <div className="safolo-right">
              <div className="circle-part">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465006/Group_1000007475_qcq99c.png' className="phone-box" alt="logo"></img>
                <hr className="dotted" />
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465038/Group_1000007474_kymofy.png' className="phone-box" alt="logo"></img>
                <hr className="dotted" />
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740465072/Group_1000007473_h6incg.png' className="phone-box" alt="logo"></img>
                <hr className="dotted" />
                <hr id="horn" />
              </div>
              <div className="step-part">
                <div className="discover-main">
                  <p className="ylo">STEP 1</p>
                  <p className="tile">Complete a discovery call.</p>
                  <p className="toggle">
                    Tell us more about your business on a discovery call. We’ll
                    discuss your project requirements, success criteria, timescale,
                    budget and required skill sets to see if we can help.
                  </p>
                </div>
                <div className="doveloper-main">
                  <p className="ylo">STEP 2</p>
                  <p className="tile">Get the developers you need.</p>
                  <p className="toggle">
                    In just days, we’ll hand-select experts based on your needs and
                    required expertise.
                  </p>
                </div>
                <div className="onbord-main">
                  <p className="ylo">STEP 3</p>
                  <p className="tile">Onboard and scale as required.</p>
                  <p className="toggle">
                    Our team joins yours, and hits the ground running. Onboard your
                    new team members, manage performance, and scale your headcount
                    as needed.
                  </p>
                </div>
                <div className="line_btn">
                  <hr id="short" />
                  <Link href="/contact-us"><button className="scale">Schedule a Call</button></Link>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* <div className="home9 mb-12 home278 home480">
          <div className="home91 px-24 dine-1234">
            <div className="home911 text-center">
              <h2 className='font-bold text-gray-700'>Frequently Asked<br/> Questions</h2>
            </div>
            <div className="home912 FAQ-1">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Why choose Kushel Digi for staff augmentation?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Kushel Digi excels, offering a vast talent pool, flexible hiring, and a client-focused approach.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    How does Kushel Digi ensure staff quality in augmentations?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Kushel Digi maintains a rigorous selection process, ensuring high-quality, competent professionals for clients.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Benefits of Kushel Digi in staff augmentation, setting it apart?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Kushel Digi provides on-demand access to skilled workforce, scalability, and cost-effectiveness for quick project adaptation.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Key considerations for selecting a staff augmentation provider?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Consider talent pool, hiring flexibility, and a client-centric approach when choosing a provider.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    General best practices in staff augmentation, irrespective of companies?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Best practices include thorough candidate assessments, clear communication, defined project goals, and continuous evaluation for successful staff augmentation initiatives.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
             
            </div>
          </div>
        </div> */}
        <StaffFAQ />
        <Website/>


        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401400/whatsapp_qknuap.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401442/telephone_rg2izx.png' alt="call-icon" title="call-icon" />
          </button>

        </div>



      </div>
      <Footer />
    </>
  );
};

export default StaffAugmentComponent;
