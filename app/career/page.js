"use client"
import React,{useEffect, useState} from "react";
import Head from 'next/head';
import ContactForm1 from "../COMMON/ContactForm1";
import SmallApproach from "../COMMON/SmallApproach";
import '../globals.css'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

const Career = ({notify}) => {
  const [dev,setDev] = useState(1);
  const menuTab = () =>{
    console.log("menu");
    setDev(1);
    document.getElementById("kk").style.color = "#085881";
    document.getElementById("kk").style.borderBottom = "2px solid #085881";

    document.getElementById("kk1").style.color = "#202020";
    document.getElementById("kk1").style.borderBottom = "none";

    document.getElementById("kk2").style.color = "#202020";
    document.getElementById("kk2").style.borderBottom = "none";
  }
  const menuTab1 = () =>{
    console.log("menu");
    setDev(2);
    document.getElementById("kk").style.color = "#202020";
    document.getElementById("kk").style.borderBottom = "none";

    document.getElementById("kk1").style.color = "#085881";
    document.getElementById("kk1").style.borderBottom = "2px solid #085881";

    document.getElementById("kk2").style.color = "#202020";
    document.getElementById("kk2").style.borderBottom = "none";
  }
  const menuTab2 = () =>{
    console.log("menu");
    setDev(3);

    document.getElementById("kk").style.color = "#202020";
    document.getElementById("kk").style.borderBottom = "none";

    document.getElementById("kk1").style.color = "#202020";
    document.getElementById("kk1").style.borderBottom = "none";

    document.getElementById("kk2").style.color = "#085881";
    document.getElementById("kk2").style.borderBottom = "2px solid #085881";
  }

 
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
    title: 'Explore Exciting Career Opportunities at Kushel Digi Solutions - Careers',
    description: 'Kushel Digi Solutions offers job opportunity in India. You can check our current opening by visiting carrier section at our website.',
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
      
    <Navbar/>
   
  
      <div className="ser-main">
        <div className="caring-back">
          <div className="caring-sect dine-1234">
            <h1>Be a Member of Kushel Digi Family</h1>
            <p>
              If you are looking for an OPPORTUNITY that gives your career a new
              definition, join Kushel digi. We heartily welcome talented and
              enthusiasts in our team.
            </p>
          </div>
        </div>
         
        <div className="about-workinggg">
        <div className="about-working-here dine-123">
          <div className="working1">
            <h2>About Working Here</h2>
            <p>
              At Kushel digi Solution, we are a family. We work together, we
              celebrate together and we enjoy what we do. So if you are the
              out-of-the-box thinker who ‘work hard and party harder’, the doors
              of Xtreem Solution are always open for you. However, being a
              tech-geek is a must, because we live and breathe technology.If you
              have the right attitude and skills to nurture, we offer you the
              perfect infrastructure to grow – both professionally and
              financially.
            </p>
            
          </div>
          <div className="working2">
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724934421/lonia.a67b16370e7ad650f87f_1_iyrdmw.png" alt="about working here" title="about working here" />
          </div>
        </div>
        </div>

        <div className="conducting-enviro">
          <div className="conducting-card">
            <div className="conducting-box">
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724934420/download_55_mizsas.png" alt="Conducive  Environment" title="Conducive  Environment" />
              <p>
                Conducive <br />
                Environment
              </p>
            </div>
            <div className="conducting-box">
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724934420/download_56_sstwz3.png" alt="Shared Success" title="Shared Success" />
              <p>
                Shared <br /> Success
              </p>
            </div>
            <div className="conducting-box">
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724934419/download_57_lxcdfe.png" alt="Healthy Meal" title="Healthy Meal" />
              <p>
                Healthy <br /> Meal
              </p>
            </div>
            <div className="conducting-box">
              <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724934419/download_58_waxsci.png" alt="Medical Insurance"  title="Medical Insurance"/>
              <p>
                Medical <br /> Insurance
              </p>
            </div>
          </div>
        </div>

        {/* <div className="open-position dine-1234">
          <h3>Open Positions</h3>
          <div className="position-nav">
            <p id="kk" onClick={menuTab} className="pos-menu pos-menu1">Developer</p>
            <p id="kk1" onClick={menuTab1} className="pos-menu">Designer</p>
            <p id="kk2" onClick={menuTab2} className="pos-menu">Marketing</p>
          </div>
          <div className="position-sys">
          {
            dev === 1 && (
              <div className="pstif pstif1">
            <div className="posify">
              <div className="posify1">
                <h4>PHP Developer</h4>
                <p>
                  Bachelors/Master’s degree in Computer Science, Engineering <br /> or
                  a related subject. <a href="/hire/php-developer" rel="noopener noreferrer"> <span> Read More</span> </a>
                </p>
              </div>
              <div className="posify2">
              <NavLink to="/contact-us">
                 <button>Apply Now</button>
                 </NavLink>
              </div>
            </div>
            <hr className="hr-t" />
            </div>
            )
          }
          {
            dev === 2 && (
              <div className="pstif">
            <div className="posify">
              <div className="posify1">
                <h4>UI/UX Designer</h4>
                <p>
                  Bachelors/Master’s degree in Computer Science, Engineering <br /> or
                  a related subject.<a href="/ui-ux-design" rel="noopener noreferrer"> <span>Read More</span></a>
                </p>
              </div>
              <div className="posify2">
              <NavLink to="/contact-us">
                 <button>Apply Now</button>
                 </NavLink>
              </div>
            </div>
            <hr className="hr-t" />
            </div>
            )
          }
           {
            dev === 3 && (
              <div className="pstif">
            <div className="posify">
              <div className="posify1">
                <h4>Digital Marketing</h4>
                <p>
                  Bachelors/Master’s degree in Computer Science, Engineering <br /> or
                  a related subject.<a href="/digital-marketing-agency" rel="noopener noreferrer"> <span>Read More</span> </a>
                </p>
              </div>
              <div className="posify2">
              <NavLink to="/contact-us">
                 <button>Apply Now</button>
                 </NavLink>
              </div>
            </div>
            <hr className="hr-t" />
            </div>
            )
           } 
           
          </div>
        </div> */}
        
         <SmallApproach/>
         <ContactForm1 notify={notify}/>


         <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img loading="lazy" className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img loading="lazy" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="call-icon" title="call-icon" />
          </button>

        </div>

      </div>
      <Footer/>
    </>
  );
};

export default Career;
