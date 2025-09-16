"use client"
import { useEffect, useState } from "react";

import Head from 'next/head';



import Link from "next/link";

import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import '../globals.css';
// import { Helmet } from "react-helmet";


import WooCommereceFAQ from "../COMMON/WooCommereceFAQ";
import Website from "./Home/HomeForm";
const WooCommerce = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const generateMetadata = ({ params }) => ({
    title: 'Professional WooCommerce Development Company | Kushel Digi',
    description: 'Transform your online business with Kushel Digi’s WooCommerce development, custom plugins, mobile app integration, and secure migration for scalable growth.',
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
        <div className="wooCommmm">
          <div className="magento-back-newest woocommmm">
            <div className="magento_back1 Woocomerce_b">
              <h1>
                Build Your WooCommerce<br /> Store Today
              </h1>
              <p>Are You Planning To Build Or Start An Online Store For Your ECommerce Business To Compete With A Cutting-Edge Competitor? WooCommerce Is A Well-Known Platform For Running An Online Store.</p>
              <div className="wooooo">
                <Link href="/contact-us" className="woo-btnn"> <button>
                  Lets get started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 24L9.8625 21.9L18.2625 13.5H0V10.5H18.2625L9.8625 2.1L12 0L24 12L12 24Z" fill="white" /> </svg>
                </button></Link>

              </div>
            </div>
            <div className="magento_back2 relative woo_com">

              {/* <img loading="lazy" src={migi} alt="WooCommerce development services" title="WooCommerce development services" /> */}
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724839796/migi.5cf780ca3b346bee5fe8_wgiaae.png" alt="WooCommerce development services" title="WooCommerce development services" />
            </div>
          </div>
        </div>

        <div className="magento_service">
          <div className="magento_service1">
            <h2>
              Our <span>WooCommerce</span> <br /> development services
            </h2>
            <p>Our company provides WooCommerce development services with the goal of helping businesses build productivity and profitability in their online stores. We can optimise and adapt your e-commerce site to meet your unique business needs by utilising our expertise with WooCommerce. Our skilled development team will work with you to create hassle-free shopping for your clients after we have a clear understanding of your business goals. Our abilities and knowledge span the entire range from designing and developing responsive themes to integrating payment methods and plugins, enabling us to increase the requirements for your online store.</p>
          </div>
          <div className="magento_service2">
            <div className="greenish greenishyu">
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724839951/greenish.3d367cb81154565e3e3b_1_fexrzg.png
" alt="greenish-design" title="greenish-design" />
            </div>
            {/* <img loading="lazy" className="admis" src={admis1} alt="Woocommerce development company" title="Woocommerce development company" /> */}
            <img loading="lazy" className="admis" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724839950/admis1.6a556efc6ffa65d231c9_mklcaj.png
" alt="Woocommerce development company" title="Woocommerce development company" />
          </div>
        </div>

        <div className="magento_services">
          <div className="magento_services1">
            {/* <img loading="lazy" src={magic} alt="WooCommerce Solution" title="WooCommerce Solution" /> */}
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724840019/magic.954837d30c2ccd79ecd6_u6wstp.png
" alt="WooCommerce Solution" title="WooCommerce Solution" />
          </div>
          <div className="magento_services2">
            <div>
              <h3>
                Why Choose <span>WooCommerce</span>  Solution?
              </h3>
              <p>
                There are numerous benefits to using WooCommerce for organisations wishing to enter the e-commerce space. First and foremost, WooCommerce is an incredibly adaptable and customisable platform that allows companies to build online stores with the functionality they require. Additionally, it has a strong integration with WordPress, a popular content management system (CMS) that provides a user-friendly interface for managing orders, goods, and content. Moreover, companies can utilise the extensive plugin ecosystem that comes with it to expand the functionality of their store while it continues to grow. Furthermore, WooCommerce is affordable since there are no setup costs and reasonably priced extensions available, making it a viable choice for even small businesses. Lastly, WooCommerce offers frequent upgrades and quite robust security features.
              </p>
            </div>

          </div>
        </div>

        <div className="woo-comercc">
          <div className="woo_comerce_dev dine-1234">
            <h2>Woo Commerce Development Services We Offer</h2>
            <div className="mt-2">
              <p className="at_kushel">Kushel Digi offer a wide selection of WooCommerce development services to meet your particular requirements. Among our specialties are:</p>
            </div>
            <div className="woo_com_cards">
              <div className="who_com_card">
                <div className="who_com_box">
                  <div className="who_left">
                    <h4>1</h4>
                  </div>
                  <h3>Crafting WooCommerce apps and tailoring them to perfection</h3>
                  <p>
                    Amplify your brand's outreach through the creation of compelling mobile applications for your e-commerce platform. Our team specializes in crafting personalized WooCommerce apps that ensure flawless user interactions and boost conversion rates.
                  </p>
                </div>
                <div className="who_com_box">
                  <div className="who_left">
                    <h4>2</h4>
                  </div>
                  <h3>PSD to WooCommerce:
                  </h3>
                  <h3>Design to Website</h3>
                  <p>
                    Turn your PSD designs into fully operational WooCommerce websites. Our specialists meticulously convert your design files into flawlessly responsive WooCommerce themes, guaranteeing a smooth and user-friendly experience.

                  </p>
                </div>
                <div className="who_com_box">
                  <div className="who_left">
                    <h4>3</h4>
                  </div>
                  <h3>Tailored WooCommerce
                  </h3>
                  <h3>themes for you</h3>
                  <p>
                    Leave a memorable mark with stunning designs. Our skilled designers will craft visually captivating themes and templates aligned with your brand's vision, enhancing the user experience.

                  </p>
                </div>
                <div className="who_com_box">
                  <div className="who_left">
                    <h4>4</h4>
                  </div>
                  <h3>WooCommerce Tailoring:</h3>
                  <h3> Your Style, Perfected</h3>
                  <p>
                    Tailor your e-commerce website to reflect your brand identity. Our experts will work closely with you to create a visually appealing and user-friendly online store that sets you apart from the competition.                </p>
                </div>

                <div className="who_com_box">
                  <div className="who_left">
                    <h4>5</h4>
                  </div>
                  <h3>Crafting WooCommerce
                  </h3>
                  <h3>Extensions</h3>
                  <p>
                    Improve your online store’s functionality by integrating custom WooCommerce plugins. Our experienced developers are experts in creating tailored solutions to fulfil your specific requirements and enhance your e-commerce platform.
                  </p>
                </div>
                <div className="who_com_box">
                  <div className="who_left">
                    <h4>6</h4>
                  </div>
                  <h3>Streamlined WooCommerce </h3>
                  <h3>Integration</h3>
                  <p>
                    Effortlessly connect WooCommerce with various tools and systems to optimize your business processes. Whether you require integration for payment gateways, inventory control, or CRM systems, we guarantee a smooth and effective integration experience.                </p>
                </div>
                <div className="who_com_box">
                  <div className="who_left">
                    <h4>7</h4>
                  </div>
                  <h3>WooCommerce Conversion</h3>
                  <h3>and Transition Services
                  </h3>
                  <p>
                    Seamlessly migrate your current online store to the robust WooCommerce platform. Our experts guarantee a seamless transition, safeguarding your data while enhancing your website's performance to its fullest potential.
                  </p>
                </div>
                <div className="who_com_box">
                  <div className="who_left">
                    <h4>8</h4>
                  </div>
                  <h3>WooCommerce Care
                  </h3>
                  <h3>and Assistance</h3>
                  <p>
                    Safeguard the uninterrupted operation of your e-commerce platform through our all-encompassing maintenance and support solutions. Our dedicated team is committed to delivering continual aid, resolving concerns, and maintaining the latest security and updates for your online store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="woo-section">
          <div className="woo-left">
            <h3>Why WooCommerce Development From A Kushel Digi?</h3>
            <p>
              Our Kushel Digi team of expert programmers has extensive experience utilising WooCommerce to create unique, high-performing web stores. Our first goal is client pleasure. In order to meet each client's specific demands, we obtain their explicit specifications.
              <br /><br />
              Our proficiency with WooCommerce enables us to provide efficient and enjoyable e-commerce solutions that generate revenue and create strong client engagement. For taking your company to new heights, choose Kushel Digi's WooCommerce development services. This offers a reliable and effective option.
            </p>
            <Link href="/contact-us">
              <button className="woo-btn">START PROJECT</button>
            </Link>
          </div>
          <div className="woo-right">
            <img
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724840162/uist.9dd8c573f269fd48858b_zstij9.png"
              alt="WooCommerce Development"
              title="WooCommerce Development"
            />
          </div>
        </div>

        <div className="processs-bg">
          <div className="process_bigt dine-1234">
            <h3>Process We Follow</h3>
            <div className="paperbox">
              <div
                className="first1 first11"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img
                  src={hovered ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463448/uin_phxkpv.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463417/framingts_k5ourq.png'}
                  className="startup"
                  alt="Gathering Project Specifications"
                  title="Gathering Project Specifications"
                />
                <h3>Gathering Project Specifications
                </h3>
                <h5>
                  It entails the review of business goals, product specifications, design choices and requested functionality for ease of development.
                </h5>
              </div>
              <div
                className="first1 first11"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
              >
                <img loading="lazy" src={hovered2 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463494/uin1_fwvcqo.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463158/gatr_a6jgon.png'} className="startup" alt="UI/UX Design" title="UI/UX Design" />
                <h3>UI/UX Design </h3>
                <h5>
                  Our UI/UX designs aim at developing user interfaces which is simple to use and provide for an unique experience .
                </h5>
              </div>
              <div
                className="first1 first11"
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
              >
                <img loading="lazy"
                  src={hovered3 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463524/uin2_osw7rr.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463197/gatr1_rd9nvc.png'}
                  className="startup"
                  alt="Prototype" title="Prototype"
                />
                <h3>Prototype</h3>
                <h5>
                  WooCommerce’s prototype mimics the design, functionality, and user’s flow, allowing for a sneak preview of the online store before it is actualized.
                </h5>
              </div>
              <div
                className="first1 first11"
                onMouseEnter={() => setHovered4(true)}
                onMouseLeave={() => setHovered4(false)}
              >
                <img loading="lazy"
                  src={hovered4 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463549/uin3_rvvjm9.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463237/gatr2_h2fho5.png'}
                  className="startup"
                  alt="Progress" title="Progress"
                />
                <h3>Progress</h3>
                <h5>
                  Our well versed staff use the modern technology to create your e-commerce site given the customers interests at heart and complete transparency.
                </h5>
              </div>
              <div
                className="first1 first11"
                onMouseEnter={() => setHovered5(true)}
                onMouseLeave={() => setHovered5(false)}
              >
                <img loading="lazy"
                  src={hovered5 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463573/uin4_l2hqvx.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463292/gatr3_gtfi0x.png'}
                  className="startup"
                  alt="Quality Control" title="Quality Control"
                />
                <h3>Quality Control</h3>
                <h5>
                  WooCommerce quality control includes rigorous testing to validate functionality, performance, and integration thereby providing an easy and dependable e-commerce user interface.</h5>
              </div>
              <div
                className="first1 first11"
                onMouseEnter={() => setHovered6(true)}
                onMouseLeave={() => setHovered6(false)}
              >
                <img loading="lazy"
                  src={hovered6 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463599/uin5_xepwt2.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463348/gatr4_alq55r.png'}
                  className="startup"
                  alt="Implementation" title="Implementation"
                />
                <h3>Implementation</h3>
                <h5>
                  Developing WooCommerce requires setting up settings, installing plugins, adding products, and customising design to get a functional and visually attractive online store.
                </h5>
              </div>
              <div
                className="first1 first11"
                onMouseEnter={() => setHovered7(true)}
                onMouseLeave={() => setHovered7(false)}
              >
                <img loading="lazy"
                  src={hovered7 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463631/uin6_a7hkvt.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740463379/gatr5_no9bqh.png'}
                  className="startup"
                  alt="Ongoing Assistance & Upkeep" title="Ongoing Assistance & Upkeep"
                />
                <h3>Ongoing Assistance & Upkeep</h3>
                <h5>
                  Maintaining WooCommerce includes the continual updates, troubleshooting, and optimization for proper operation of the platform.
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <CaseStudy /> */}

        <div className="solution_test">
          <div className="solution_test_card">
            <div className="solution_test_box">
              <h5>Solution for</h5>
              <h3>Enterprise</h3>
              <div>
                <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724840423/enterprise.1d1658deae918eb02c43_nhq7at.png
" alt="enterprise" title="Enterprise" />
              </div>
              <div>
                <hr className="mt-5" />
                <ul>
                  <li>Immediate issue resolution and support from top-tier technical experts.</li>
                </ul>
                <hr />
                <ul>
                  <li>Timely progress updates and project consultations.</li>
                </ul>
                <hr />
                <ul>
                  <li>We accommodate all unique business needs of our clients.</li>
                </ul>
              </div>
            </div>
            <div className="solution_test_box soution_test_box1">
              <h5>Solution for</h5>
              <h3>Startup</h3>
              <div>
                <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724840422/download_kuzsbz.png" alt="kusheldigi startups" title="Startup" />
              </div>
              <div>
                <hr className="mt-5" />
                <ul>
                  <li>Competitive pricing structures tailored for startups.</li>
                </ul>
                <hr />
                <ul>
                  <li>Comprehensive business advisory services from seasoned professionals.
                  </li>
                </ul>
                <hr />
                <ul>
                  <li> Adaptable maintenance and support packages delivered punctually.
                  </li>
                </ul>
                <hr />
                <ul>
                  <li>Committed expertise to achieve optimal results at the most competitive rates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <WooCommereceFAQ />
        <Website />


        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img loading="lazy" className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401400/whatsapp_qknuap.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401442/telephone_rg2izx.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default WooCommerce;
