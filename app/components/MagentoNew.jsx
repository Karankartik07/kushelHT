"use client"

import Head from 'next/head';
import '../globals.css';
import "@splidejs/react-splide/css";

import BlogSection from "../COMMON/BlogSection/BlogSection";
import Footer from "../COMMON/Footer";
import MagentoFAQ from '../COMMON/MagentoFAQ';
import Navbar from "../COMMON/Navbar";
import HomeForm from "../components/Home/HomeForm";
import { MagentoFeatures, MagentoFeaturesContent, MagentoServicesHeading, MagentoServicesLeft, MagentoServicesRight, MagentoServicesSectionContent, weExpertInMagento } from "../data/data";
import BigBanner4 from "../service/bigcommerce-development/BigBanner4/page";
import BigBanner8 from "../service/bigcommerce-development/BigBanner8/page";
import FeatureSection from "../service/bigcommerce-development/FeaturesSection/FeatureSection";
import ServicesSection from "../service/bigcommerce-development/ServiceSection/ServiceSection";
import Banner8 from '../service/ecommerce-development/Banner8/page';
import ChooseMagento from "../service/magento-development/ChooseMagento/ChooseMagento";
import MagentoBanner from "../service/magento-development/MagentoBanner/MagentoBanner";
import MagentoPortfolio from "../service/magento-development/MagentoPortfolio/MagentoPortfolio";
import MagentoServices from "../service/magento-development/MagentoServices/MagentoServices";
import TechWeUse from "../service/magento-development/TechWeUse/TechWeUse";
import UpgradeServices from "../service/magento-development/UpgradeServices/UpgradeServices";
import WhyMagento from "../service/magento-development/WhyMagento/WhyMagento";
import ShopifyProcess from "../service/shopify-development/ShopifyProcess/ShopifyProcess";

const Magento = () => {
  // const [front, setFront] = useState(1);

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }


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
        <MagentoBanner />
        <BigBanner8 weExpert={weExpertInMagento} />
        <WhyMagento />
        <MagentoServices leftContent={MagentoServicesLeft} services={MagentoServicesRight} />
        <MagentoPortfolio page='Magento' />
        <ChooseMagento />

        <BigBanner4 img='https://res.cloudinary.com/dd9tagtiw/image/upload/v1744608968/5bb631c4aa74a3ebe4df40ac8c33ef75_qfp4u1.jpg' page='Our Magento Experts are Ready to Launch your Dream Store today!' />
        <UpgradeServices />
        <ShopifyProcess page='Magento' />
        <TechWeUse />
        <Banner8 />
        {/* <BigBanner6 services={whyBigCommereByKDS} contents={whyBigCommereByKDSHeading}/> */}
        <ServicesSection services={MagentoServicesSectionContent} contents={MagentoServicesHeading} />
        <FeatureSection services={MagentoFeatures} contents={MagentoFeaturesContent} />
        <BlogSection page="Magento Development" />

        {/* <div className="magentooo1">
          <div className="magento-back dine-123">
            <div className="magento_back1 magento-texted">
              <h1>
                Get your e-Commerce business <br /> on Magento
              </h1>
              <p>
                If you want to develop your website with the help of field experts, just tell us.
              </p>
              <Link href="/contact-us" className="buttunn buttunn11"><button className="lets_talking">Lets get started
                <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                </svg></button></Link>

            </div>

            <div className="magentos">
    
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724838006/MagentoImg.f80b261e43190e2cad0e_m4xaag.png" alt="magento ecommerce business" title="magento ecommerce business" />
            </div>

          </div>
        </div>

        <div className="magento_service dine-123">
          <div className="magento_service1">
            <h2>
              <span>Magento</span> Development
            </h2>
            <p>
              An aspect of the digital growth environment that enables companies to benefit from online trends is Magento development. With a wealth of strong capabilities and endless customisation options. We create e-commerce systems that not only fulfil but also exceed our clients' expectations. From easy integration to customisation, Magento represents a platform of broad innovation. We design beautiful websites and refine the user experience to fulfil our clients' every wish.
            </p>
            <a href="contact-us"><button className="newbtn">Let’s Get Started</button></a>
          </div>
          <div className="magento_service2">
          
            <img className="admis" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724838206/sa4.6d83a0b214d92052eecf_e8upaw.png" alt="Magento development" title="Magento development" />
          </div>
        </div>

        <div className="megento_new">
          <div className="megento_new1 magento-ourrr">
            <h2>Our Magento Solutions</h2>
          </div>
          <div className="news_cards">
            <div className="megento_new2">
              <div className="megento_new3">
                <img className="g1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254369/g1_zigloc.png' alt="Magento Enterprise Edition" title="Magento Enterprise Edition" />
                <h3>Magento Enterprise Edition</h3>
                <p>
                  Magento Enterprise Edition offers advanced functionalities and scalability, designed for medium to large enterprises in need of utmost effective ecommerce solutions.
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254399/g2_zshlfm.png' alt=" Magento Community Edition" title=" Magento Community Edition" />
                <h3> Magento Community Edition</h3>
                <p>
                  This is a free version offered by Magento but is filled with a
                  lot of features that one can make use of to build an online
                  store
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254429/g3_xfgiof.png' alt="Magento Extension Development" title="Magento Extension Development" />
                <h3> Magento Extension Development</h3>
                <p>
                  The development of Magento Extension allows creating custom functionalities. As well as integrations specifically for any business requirements  based web-stores more robust.
                </p>
              </div>
            </div>
            <div className="megento_new4">
              <div className="megento_new3">
                <img className="g1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254458/g4_edhftj.png' alt="Magento Theme Developmen" title="Magento Theme Developmen" />
                <h3>Magento Theme Development</h3>
                <p>
                  Magento theme Development gives businesses the ability to build visually attractive and user-friendly store fronts that represent the company brands and appeal to their target consumer group.
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254487/g5_k7wauq.png' alt="Magento Customization" title="Magento Customization" />
                <h3> Magento Customization</h3>
                <p>
                  Magento customisation enables businesses to personalise their e-commerce stores so that customers can receive a distinctive and customised online shopping.
                </p>
              </div>
              <div className="megento_new3">
                <img className="g1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254523/g6_vrvjxv.png' alt="Magento Commerce" title="Magento Commerce" />
                <h3>Magento Commerce</h3>
                <p>
                  Magento Commerce offers the enterprise-level features, scalability and support for businesses to maximise their online ventures and gain edge in the digital global market.
                </p>
              </div>
            </div>
            <br/>
            <div className="megento_new_ptn">
              <a href="contact-us"><button>Let’s Get Started</button></a>

            </div>
          </div>
        </div> 

      
        <div className="magento_services dine-123">
          <div className="magento_services1">

            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724838301/misad.3aa7b4591532192d6ecb_kazph7.png" alt="Magento ecommerce solutions" title="Magento ecommerce solutions" />
          </div>
          <div className="magento_services2">
            <h3>
              {" "}
              Why<span> Magento E-commerce</span> Solution  is better to choose?
            </h3>
            <p>
              Pick Magento as your ecommerce solution and you have got many benefits to enjoy. To begin with, it offers a highly customizable platform which lets businesses develop their online shops according to their special needs and brand identities. Magento provides a powerful set of capabilities, such as best catalogue management, flexible product options, and strong marketing tools which enable businesses to develop truly immersive stores. Furthermore, it is scalable and can therefore flexibly meet your growing needs, allowing it to accommodate higher traffic and transactions without burdening the performance.

            </p>
          </div>
        </div> 
       


         <div className="server_megy">
          <h3>Magento Development Services</h3>
          <div className="server_merging">
            <div className="server_mergs">
              <div className="server_meg">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254591/poli1_vgujs3.png' alt="Consulting" title="Consulting" className="p22" />
                <h3>Consulting</h3>
                <p>Magento consulting services provide businesses with strategic know-how and professional guidance to fully achieve the potential of this e-commerce platform. Our expeerts offer customised options that address specific business objectives </p>
              </div>
              <div className="server_meg_2">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254636/poli2_o6urxj.png' alt="Customization" title="Customization" className="p22" />
                <h3>Customization</h3>
                <p>With Magento customisation solutions, companies can have their e-commerce platforms customised to their exact specifications and corporate identity. Businesses may streamline and customise their consumers' online purchasing experience</p>
              </div>
              <div className="server_meg_3">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739338958/poli3_mubzdu.png' alt="UX And UI Design" title="UX And UI Design" className="p22" />
                <h3>UX And UI Design</h3>
                <p>The main objective of the Magento UX and UI design services is to improve the user experience on e-Commerce sites by designing interfaces that are both pleasing to the eye . </p>
              </div>
            </div>
            <div className="server_mergs">
              <div className="server_meg_4">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339032/poli4_rzx68m.png' alt="PWA Development" title="PWA Development" className="p22" />
                <h3>PWA Development</h3>
                <p>We create superior PWA solutions for
                  the Magento websites of our clients.
                  PWAs are more profitable for your
                  businesses. You can reach out with a
                  superior eCommerce website and
                  these opportunities are opened up by
                  Magento PWA.</p>
              </div>
              <div className="server_meg_5">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339095/poli5_naqsfq.png' alt="Migration" title="Migration" className="p22" />
                <h3>Migration</h3>
                <p>By easily integrating Magento with a range of external systems and services, including payment gateways, ERP, CRM, and shipping companies, Magento Integration simplifies corporate operations. Businesses can  increase productivity, and improve the customer experience.</p>
              </div>
              <div className="server_meg_6">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739339122/poli6_ays3je.png' alt="Integration" title="Integration" className="p22" />
                <h3>Integration</h3>
                <p>By simply connecting Magento with a range of other systems and services, including payment gateways. Businesses can automate procedures, increase productivity, and improve the customer experience overall through combining these systems. </p>
              </div>
            </div>
          </div>
        </div> 

        <div className="php_portfolio">
          <div className="php_port php_oty">
            <h3 className="our_php">Why Choose <span>Kushel Digi Magento </span>Development Services?  </h3>
          </div>
        </div> 

         <div className="megento_old"> 

          <div className="old_cards">
            <div className="megento_old2">
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254074/n1_fqgi2b.png' alt="Expertise and experience" title="Expertise and experience" />
                <h3>Expertise and experience</h3>
                <p>
                  A team of enthusiastic developers in our company has been working on Magento modifications and extensions for at least ten years.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254126/n2_nzrpqy.png' alt="Customized solutions" title="Customized solutions" />
                <h3>Customized solutions</h3>
                <p>
                  The personalised e-commerce solutions help online stores to dance to their own tunes for improving both the scalability and the overall functionality by specifying the features that fully suit their business objectives.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254157/n3_u9wjzn.png' alt="Comprehensive services" title="Comprehensive services" />
                <h3> Comprehensive services</h3>
                <p>
                  We offer Magento development services that cover a broad spectrum. It comprises UK and US Magento website development and customisation.
                </p>
              </div>
            </div>
            <div className="megento_old4">
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254190/n4_u7nco3.png' alt="Quality and reliability" title="Quality and reliability" />
                <h3>Quality and reliability</h3>
                <p>
                  We’re committed to delivering high-
                  quality, reliable solutions to clients. Our
                  team follows Magento coding standards
                  to ensure all solutions are robust,
                  scalable, and secure.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254224/n5_eub3n2.png' alt="Transparency and communication" title="Transparency and communication" />
                <h3> Transparency and communication</h3>
                <p>
                  We offer regular updates and progress
                  reports to ensure you’re informed and
                  involved throughout the Magento
                  development process.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254295/n6_zzafi6.png' alt="Security" title="Security" />
                <h3>Security</h3>
                <p>
                  Your website security is well protected by
                  us - a professional Magento development
                  agency. No data loss or hacker attacks to
                  worry about.
                </p>
              </div>
            </div>
            <div className="megento_old5">

              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254224/n5_eub3n2.png' alt="nnQuality assurance" title="Quality assurance" />
                <h3>Quality assurance</h3>
                <p>
                  Quality is above everything else that we value, as we are putting every project through such stringent stages of inspection and control that every project conforms to the best standards.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254295/n6_zzafi6.png' alt="Flexible pricing" title="Flexible pricing" />
                <h3> Flexible pricing</h3>
                <p>
                  You will not have to worry about money since the conversion of our module is available in different packages and you can pick the suitable one for your needs.
                </p>
              </div>
              <div className="megento_old3">
                <img className="n1-img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254340/n7_rlwohd.png' alt="Dedicated support" title="Dedicated support" />
                <h3>Dedicated support</h3>
                <p>
                  The service offers to every customer personalised assistance helps the issues to be resolved timely thus ensuring trust, reliability and customer satisfaction for all.
                </p>
              </div>
            </div>
          </div>
        </div> 

  <div className="php_portfolio">
          <div className="php_port">
            <h3 className="our_php">Our <span>Megento</span>  Web Development <span>Portfolio</span> </h3>
          </div>
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
              <div className="kickta_big kickta_mag">
                <div className="kickta_big1 kickta_magst">
               
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724838765/Group_1000007518_1_ui4ia1.png" alt="Semi-annual" title="Semi-annual" />
                  <div className="headst_big">
                    <h3>Semi-annual<br />sale</h3>
                
                  </div>
                  <div className="kickma-arrow view-web">
              
                    <a href="https://www.sigma-global.com/en/" target="_blank">
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

            <SplideSlide>
              <div className="kickta_big kickta_mag1">
                <div className="kickta_big1 kickta_magst1">
           
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724838765/Group_1000007822_pq8vgm.png" alt="Try on 5 frames without" title="Try on 5 frames without" />
                  <div className="headst_big">
                    <h3>Try on 5 frames without<br />leaving home</h3>
                  </div>
                  <div className="kickma-arrow view-web">
                    <a href="https://www.warbyparker.com/" target="_blank">
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

            <SplideSlide>
              <div className="kickta_big kickta_mag2">
                <div className="kickta_big1 kickta_magst2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739254553/ghiradel_oct0yq.png' alt="ghirardelli" title="ghirardelli" />
                  <div className="headst_big">
                    <h3>Customize your‘S<br />mores with<br />ghirardelli</h3>
                  </div>
                  <div className="kickma-arrow view-web">
                    <a href="https://www.ghirardelli.com/" target="_blank">
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

         <div className="dedicated_dreams">
          <h3>Dedicated Dreams.</h3>
          <div className="dedicated_dreams1">
            <div className="dedicated1">
              <p>4 to 6 Year of Exp. Magento Developer</p>
            </div>
            <div className="dedicated_content">
              <div className="dedicated_content1">
               
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724838776/magh.d2acf7d5d5886491c232_tubcvq.png
" alt="Dedicated Dreams." title="Dedicated Dreams." />
              </div>
              <div className="dedicated_content2">
                <p>
                  You will get an experienced Magento professional with 6 to 8
                  years of real-time live project experience. He will work on
                  your project dedicatedly and deliver the best outcomes as per
                  your custom business requirements.
                </p>
              </div>
            </div>
            <div className="dedicated2">
              <p>SCHEDULE A DEVELOPER INTERVIEW</p>
            </div>
          </div>
        </div> */}






        {/* <ContactForm1 /> */}


        <MagentoFAQ />
        <HomeForm />

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999651/whatsapp_gqgicq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999664/telephone_fxcxxc.png' alt="call-icon" title="call-icon" />
          </button>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Magento;
