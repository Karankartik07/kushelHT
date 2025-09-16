"use client"
import React, { useEffect } from "react";

import '../globals.css'
import Head from 'next/head';
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import ContactForm1 from "../COMMON/ContactForm1";
import Link from "next/link";

import AndroidFAQ from "../COMMON/AndroidFAQ";
const Android = ({ notify }) => {


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
    title: 'Best android app development services',
    description: 'the best location to create cutting-edge Android apps here at Kushel Digi! We provide best android app development services',
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

      <div className="ser-main">
        <div className="android_next_class">
          <div className="android-back  android-back-flex1 flutter-back-flex1 dine-123 andoidd-pad">
            <div className="android-back1 android_back_text_section">
              {/* <h2>
              Android App <br />
              Development Company
            </h2> */}
              <h1>Custom Android App <br /> Development Company</h1>
              <p className="android-son">
                We pride ourselves on being a top Android app development agency.  Our company provide high quality deliverables and premier functionality. We complete and deliver your project on exact time.
              </p>
              <Link href="/contact-us"> <button>
                Lets get started{" "}
                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                </svg>
              </button></Link>
            </div>
            <div className="android-back2 androids-img-st">
              {/* <img loading="lazy" src={androids} alt="Custom android app development company" title="Custom android app development company" /> */}
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724831488/androids.a9c21f0c111772a8cc17_na3ivu.png" alt="Custom android app development company" title="Custom android app development company" />
            </div>
          </div>
        </div>
        <div className="android2-app dine-1234">
          <div className="android-fun">
            <div className="android-fun1">
              <h2 className="hideafter450">Our Android App</h2>
              <h2 className="hideafter450">Development</h2>
              <h2 className="hideafter450">Solution</h2>
              <h2 className="hidetill450">Our Android App Development Solution</h2>
              <img loading="lazy" className="ftp" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994284/android-sis_gj4ulj.png' alt="under line" title="under line" />
              <Link className="letsy  letsay" href="/contact-us">
                <h5>
                  Discuss your goals with us{" "}
                  <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#21698E" />
                  </svg>
                </h5></Link>
            </div>
            <div className="android-fun2">
              <p>
                Kushel Digi solutions is a top Android app development company it is also known as a reliable Android app development agency for working on the cell phone market. We highlight the great variety of services that we offer you.
              </p>
            </div>
          </div>
          <div className="android-cards">
            <div className="android-card">
              <div className="android-box android-box1 android-card11">
                <div className="android0-img flex ">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994369/bulb1_a25rdq.png' alt="Custom App Development Consultation" title="Custom App Development Consultation" />
                  <h4 className="ml-3">Custom App Development Consultation</h4>
                </div>
                <p>
                  When you search for a company for an Android app. Kushel Digi Android app development company is the best choice for you. A fully functioning business developing your digital accountabilityWe are an Android App Development Company that gives attention to successful projects.</p>
              </div>
              <div className="android-box android-box2 android-card11">
                <div className="android0-img flex ">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994430/bulb2_ktrp2s.png' alt=" Android UI/UX Design" title=" Android UI/UX Design" />
                  <h4 className="ml-3">
                    Android UI/UX Design
                  </h4>
                </div>
                <p>
                  We always create a memorable user interface and user experience (UI/UX) for your mobile app. It will encourage consumers to interact with it and improve their overall experience. Our UI/UX design service is efficient in producing Android interfaces.</p>
              </div>
            </div>
            <div className="android-card">
              <div className="android-box android-box3 android-card11">
                <div className="android0-img flex ">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994483/bulb3_gyehda.png' alt=" Custom Android Development" title=" Custom Android Development" />
                  <h4 className="ml-3"> Custom Android Development </h4>
                </div>
                <p>
                  Being a leading android app development company, we deliver Custom Android Application Development. Our professional team in the Android app development agency designs unique solutions.  It addresses your needs and satisfies you.</p>
              </div>
              <div className="android-box android-box4 android-card11">
                <div className="android0-img flex ">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994524/bulb4_v2u35h.png' alt="Android Software Testing" title="Android Software Testing" />
                  <h4 className="ml-3">Android Software Testing</h4>
                </div>
                <p>
                  Our company involved in Android app development realises the centrality of testing. It provides a smooth user experience. Our agencies see to it that the final product has attained high quality and reliability.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="android-offer dine-123">
          <div className="android-offer1 ">
            <h3>
              Custom Android App <br /> Development across all
              platforms
            </h3>
            <p>
              As the best android app development company we offer high quality custom Android Apps. As A team of developers with profound knowledge on Android’s application development. We work towards offering the best. We apply an individual approach. our solutions. We are able or any other device that is compatible with android we have got it all covered.
              <br />
              We offer end-to-end Android app development ranging from ideation and conceptualization. With the help of our skilled professionals,  It is easy on the eye with intuitive navigation. We really pay attention to every detail. From seamless functionality and the efficiency of its work down.
            </p>
          </div>
          <div className="android-offer2">
            {/* <img loading="lazy" src={ecosys} alt="custom android app development" title="custom android app developmen" /> */}

            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724831489/ecosys.e4d1f87f39de37f9408f_rcwddi.png
" alt="custom android app development" title="custom android app development" />
          </div>
        </div>

        <div className="android-usa ">
          <div className="android-usa1">
            <h3>
              Use Cases That Make
            </h3>
            <h3>Android Development The First Choice</h3>
            <h3>of SMEs and
              Enterprises</h3>
            <p>
              Our custom Android app development delivers numerous Android advantages.
            </p>
            <Link className="trassion letsay" href="/contact-us">
              <h5>
                Explore Problem Solving with Android
                <svg className="inline ml-[10px]" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#21698E" />
                </svg>
              </h5></Link>
          </div>
          <div className="android-usa2"></div>
          <div className="android-usa3">
            <div className="android-usas">
              <div className="android-usas1">
                <div className="android-usast1">
                  <h3>1</h3>
                  <p>Multi-platform exposure</p>
                </div>

                <div className="android-usast1 android-usast2">
                  <h3>2</h3>
                  <p>Greater sources of revenue</p>
                </div>
              </div>
              <div className="android-usas1">
                <div className="android-usast1">
                  <h3>3</h3>
                  <p>Multi-platform exposure</p>
                </div>

                <div className="android-usast1 android-usast2">
                  <h3>4</h3>
                  <p>Greater sources of revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="android-pro">
          <div className="android-process dine-123">
            <div className="android-process1">
              <h2>Our Android App Development Process</h2>
              <p>We are working  as an  established Android App Development company with our own defined process for delivering quality apps well in time.   From requirement gathering and planning all the way through design, development testing. With the help of our team that has years worth of experience.  You can Collaborate with our Android app development company for a successful mobile application project. </p>
            </div>
            <div className="android-process2 ml-52">
              <div className="prot-process mt-3">
                <div className="prot-img">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994572/prot1_l0pqsp.png' alt="Multi-platform Development" title="Multi-platform Development" />
                </div>
                <div className="prot">

                  <p>Multi-platform Development</p>
                </div>
                <div className="prot-img">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994616/prot2_vx9mvp.png' alt="Quality Assurance" title="Quality Assurance" />
                </div>
                <div className="prot">

                  <p>Quality Assurance</p>
                </div>
                <div className="prot-img">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994668/prot3_nvuhxx.png' alt="App Store Submission" title="App Store Submission" />
                </div>
                <div className="prot">

                  <p>App Store Submission</p>
                </div>
                <div className="prot-img">
                  <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994717/prot4_m1rqsv.png' alt="Post-launch Maintenance" title="Post-launch Maintenance" />
                </div>
                <div className="prot">

                  <p>Post-launch Maintenance</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="kushel_android">
          <div className="android-perform add_78541254789856">
            <div className="andoid-perform-flex">
              <div className="android-pflex">
                <h2>250+</h2>
                <p>Android developers <br /> in-house</p>
              </div>
              <div className="android-pflex">
                <h2>500+</h2>
                <p>Android projects <br /> in-house</p>
              </div>
              <div className="android-pflex">
                <h2>30+</h2>
                <p>industries brought <br /> on Android</p>
              </div>
            </div>
            <Link className="letsy letsay letsit" href="/contact-us">
              <h5 className="text-center">
                Lets Work Together
                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#21698E" />
                </svg>
              </h5></Link>
          </div>
        </div>
        <ContactForm1 notify={notify} />
        <AndroidFAQ />
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img loading="lazy" className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480684/whatsapp_fuwawo.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Android;
