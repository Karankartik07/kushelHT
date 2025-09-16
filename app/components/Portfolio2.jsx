"use client"
import ContactForm1 from "../COMMON/ContactForm1";

import Head from 'next/head';
import { useEffect, useState } from "react";


import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

import '../globals.css'

const caseStudies = [
  // one
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/q_auto:best/v1724927291/Group_1000010192_izwiae.png",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477030/abImg1_vyhxn6.png',
    btnText: "VIEW CASE STUDY",
    link: "/kick-eez",
    alt: "kusheldigi case study-KICK-EEZ",
    width: 500,
    height: 200,
    quality: 100,
    priority: true,
    unoptimized: true,
    category: ["ecommerce"],
    height1: 48,
    width1: 129
  },
  // two
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/q_auto:best/v1724927287/Group_1000010193_geczey.png",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477086/abimg2_vksyx7.png',
    btnText: "VIEW CASE STUDY",
    link: "/protrucksandcars",
    alt: "kusheldigi Our Portfolio-PRO",
    width: 500,
    height: 200,
    quality: 100,
    priority: true,
    unoptimized: true,
    category: ["ecommerce"],
    height1: 69,
    width1: 69
  },
  // three
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724927284/Group_1000010194_a1kfrj.png",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477117/abimg3_tsrgwp.png',
    btnText: "VIEW CASE STUDY",
    link: "/relysafety",
    width: 500,
    height: 200,
    alt: "case study-rely",
    category: ["ecommerce"],
    height1: 69,
    width1: 69
  },
  // four
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880369/image_2_jkmhgr.png",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477144/abimg5_wfhlp8.png',
    btnText: "VIEW CASE STUDY",
    link: "/solenoid-ninja",
    width: 500,
    height: 200,
    alt: "case study-Solenoid Ninja",
    category: ["ecommerce"],
    height1: 29,
    width1: 129

  },
  // five

  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/Group_1171275953_ylodxi.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952762/image_75_ywf6np.svg",
    btnText: "VIEW CASE STUDY",
    link: "/ballisticdummylab",
    alt: "case study-Speck",
    width: 500,
    height: 200,
    category: ["ecommerce"],
    height1: 39,
    width1: 129

  },
  // six
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/image_5_ds431l.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725953651/image_18_1_j5e3am.svg",
    btnText: "VIEW CASE STUDY",
    link: "/sitesandscopes",
    // target: "_blank",
    width: 500,
    height: 200,
    alt: "case study-Karol Bagh",
    category: ["ecommerce"],
    height1: 50,
    width1: 119

  },
  // seven
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886338/image_6_s5p9p0.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725953729/logo-white_1_1689966883__67774_1_yqlhdf.svg",
    btnText: "VIEW CASE STUDY",
    link: "/topbrasstactical",
    width: 500,
    height: 200,
    alt: "case study-Slides365",
    category: ["ecommerce"],
    height1: 32,
    width1: 129

  },
  // eight

  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/Group_1000010185_1_h1dk25.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725953057/slide_1_gelwuz.svg",
    btnText: "VIEW CASE STUDY",
    link: "/slides365",
    width: 500,
    height: 200,
    // target: "_blank",
    alt: "case study-Chingsingh",
    category: ["ecommerce"],
    height1: 101,
    width1: 69


  },
  // nine
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730459192/image_pknari.png",
    img2: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730459236/Group_1171275966_xq0qb4.png",
    btnText: "VIEW CASE STUDY",
    link: "/2ndamendmentguns",
    width: 500,
    height: 200,
    alt: "case study-2ndamendment",
    category: ["ecommerce"],
    height1: 74,
    width1: 74

  },
  // ten
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730447686/home-slider-1_ujqnho.png",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477264/gthj_dwz6nv.png',
    btnText: "VIEW CASE STUDY",
    link: "/Ai",
    width: 500,
    height: 200,
    alt: "case study-Hazoorilal",
    category: ["ecommerce"],
    height1: 129,
    width1: 76


  },
  // eleven
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1732807218/image_ak8xup.png",
    img2: "https://res.cloudinary.com/dgif730br/image/upload/v1732807319/logo_1_1688114115__84399_2_iaqhon.png",
    btnText: "VIEW CASE STUDY",
    width: 500,
    height: 200,
    link: "/rideready",
    alt: "case study-Hazoorilal",
    category: ["ecommerce"],
    height1: 49,
    width1: 50


  },
  // twelve
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/Group_1171275991_nrwbso.png",
    btnText: "VIEW CASE STUDY",
    link: "/mycrazysimplecms",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477196/mycms_dc994l.png',
    width: 500,
    height: 200,
    alt: "case study-CEO Wheels",
    category: ["website"],
    height1: 69,
    width1: 69


  },
  // thirty
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/Group_1171275950_eddxtx.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952623/Layer_1_15_ilqoor.svg",
    btnText: "VIEW CASE STUDY",
    alt: "case study-Granny's finest",
    category: ["website"],
    width: 500,
    height: 200,
    height1: 39,
    width1: 129
    // link: "/fairChildFun",

  },
  // forty
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/Group_1171275960_jrfrmk.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952841/image_76_tovttv.svg",
    btnText: "VIEW CASE STUDY",
    link: "/woodView",
    alt: "case study-Bulletproof",
    category: ["website"],
    width: 500,
    height: 200,
    height1: 61,
    width1: 129

  },
  // fifty

  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/Group_1171275992_lfqyjn.png",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477326/hrmsname_ljnty9.png',
    btnText: "VIEW CASE STUDY",
    // link:"https://skknbykim.com/",
    target: "_blank",
    alt:"case study-skkn",
    category: ["website"],
    width: 500,
    height: 200,
    height1: 16,
    width1: 69


  },
  // sixty
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/loginImage.bf19a61a3e8065a38934_kqnphz.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952993/SHUBHALLOYS_j2i6dz.svg",
    btnText: "VIEW CASE STUDY",
    link: "/subhAlloy",
    alt: "case study-Woolrich",
    category: ["website"],
    width: 500,
    height: 200,
    height1: 11,
    width1: 129

  },
  // seventy
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478552/jkki1_hzx3ni.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478580/custom11_kznig4.png',
    btnText: "VIEW LIVE SITE",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["website"],
    width: 500,
    height: 200,
    height1: 22,
    width1: 129
  },
  // eighty
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478887/weba1_iukjgl.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478756/webinstalogo_rutcoc.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 28,
    width1: 129
  },
  // ninty
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478926/weba2_keogkb.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478856/webobtech_km5zcs.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 72,
    width1: 88
  },
  // twenty
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478952/weba3_uwesfv.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477171/abimg11_aiqpei.png',
    btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 61,
    width1: 129
  },
  // twentyOne
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478983/weba4_cdbo0c.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478612/webauxlogo_sxf2ww.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 47,
    width1: 129
  },
  // twentytwo
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479013/weba5_bhswgw.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478786/webjuniorlogo_pvlv7i.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 43,
    width1: 129
  },
  // twentyThree
  {
    img:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479062/weba6_v2eo0r.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478645/websuvrinlogo_cdrlkl.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 38,
    width1: 129
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479095/weba7_vvtmlr.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478824/touffle_le6ygd.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 67,
    width1: 129
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479448/weba8_fbfhjw.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478721/webmajorlogo_ejcx63.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 37,
    width1: 129
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479486/weba9_f7dqri.png',

    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    // btnText: "VIEW CASE STUDY",
    link: "/digitalmna",
    alt: "case study-DigitalMnA Partners",
    category: ["software"],
    width: 500,
    height: 200,
    height1: 37,
    width1: 129
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477358/sainaimg_qz7gww.png',
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/slides365",
    alt: "case study-Slides365",
    category: ["appdevelop"],
    width: 500,
    height: 200,
    id: "st",
    id1: "st1"
  },

  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477414/SAKA_jedqtc.png',
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/slides365",
    alt: "case study-Slides365",
    width: 500,
    height: 200,
    category: ["appdevelop"],
    id: "st",
    id1: "st1"
  },

  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477440/tikus11_wi6idq.png',
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/slides365",
    alt: "case study-Slides365",
    category: ["appdevelop"],
    width: 500,
    height: 200,
    id: "st",
    id1: "st1"
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477470/tset111_h3nk87.png',
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/slides365",
    alt: "case study-Slides365",
    category: ["appdevelop"],
    width: 500,
    height: 200,
    id: "st",
    id1: "st1"
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478500/likk1_tjbxdr.png',
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/slides365",
    alt: "case study-Slides365",
    category: ["appdevelop"],
    width: 500,
    height: 200,
    id: "st",
    id1: "st1"
  },

  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477385/vrott_sqapt9.png',
    btnText: "VIEW LIVE SITE",
    // link: "/slides365",
    alt: "case study-Slides365",
    category: ["appdevelop"],
    width: 500,
    height: 200,
    id: "st",
    id1: "st1"
  },

  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479511/oddo1_elihiu.png',
    // btnText: "VIEW LIVE SITE",
    // link: "/slides365",
    img2: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479541/ushalogo_cxq0og.png',
    alt: "case study-Slides365",
    category: ["oddodevelop"],
    width: 500,
    height: 200,
    height1: 37,
    width1: 129
    // id:"st",
    // id1:"st1"
  },


];

const Portfolio = () => {

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }

  const topData = [
    {
      num: "12+",
      title: "Years on the Market",
    },
    {
      num: "90+",
      title: "Experts on Board",
    },
    {
      num: "300+",
      title: "Complete Projects",
    },
  ];


  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredCaseStudies = filteredCategory === "All" ? caseStudies : filteredCategory === "ecommerce" ? caseStudies.filter((data) => data.category.includes(filteredCategory.toLowerCase())).reverse() : caseStudies.filter((data) => data.category.includes(filteredCategory.toLowerCase()));
  const generateMetadata = ({ params }) => ({
    title: 'Our eCommerce Projects | Kushel Digi Solutions Portfolio',
    description: 'Explore how Kushel Digi Solutions drives eCommerce success and projects of custom Shopify, BigCommerce stores. We help you to grow with innovative and specialized solutions. ',
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
      {/* <Helmet> */}
      <title>Case studies of KushelDigi Solutions</title>
      <meta
        name="description"
        content="Kushel digi has been serving its clients for over 6 years, earning the reputation of a trusted IT partner. Browse some of our success stories."
      />
      <link rel="canonical" href="https://www.kusheldigi.com/portfolio" />
      {/* </Helmet> */}

      <div className="ser-main">

        {/* second section  */}
        <div className="nwPortSec2">

          <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477224/leftmost_hzotm8.png' className="leftMost" alt="portfolio-design" title=" portfolio-design" />

          <div className="nwPortSec2Cont">
            {/* top  */}

            {/* bottom */}

            <div className="mwPS2_bttom">

              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477289/csRightMost_di9uzd.png' className="csRightMost" alt="portfolio-design" title=" portfolio-design" />

              <h2 className="nwPs2head">Our Work</h2>
              <div className="our_btnii">
                <button onClick={() => handleFilterChange("All")} className={`${filteredCategory === "All" && "addbgcclds"}`}>All</button>
                <button onClick={() => handleFilterChange("ecommerce")} className={`${filteredCategory === "ecommerce" && "addbgcclds"}`}>E-Commerce</button>
                <button onClick={() => handleFilterChange("website")} className={`${filteredCategory === "website" && "addbgcclds"}`}>Custom Software</button>
                <button onClick={() => handleFilterChange("software")} className={`${filteredCategory === "software" && "addbgcclds"}`}>Website</button>
                {/* <button onClick={() => handleFilterChange("appdevelop")} className={`${filteredCategory === "appdevelop" && "addbgcclds"}`}>UI/UX</button> */}
                <button onClick={() => handleFilterChange("appdevelop")} className={`${filteredCategory === "appdevelop" && "addbgcclds"}`}>Mobile Apps</button>
                <button onClick={() => handleFilterChange("oddodevelop")} className={`${filteredCategory === "oddodevelop" && "addbgcclds"}`}>ODDO</button>
              </div>
              <div className="mwPS2_boxes">

                {filteredCaseStudies.map((data, index) => (

                  <div id={data?.id1} className="sinCaseStudy" key={index}>
                    <img src={data.img} className="sinCaseStudyimg" alt={data.alt} title={data.alt} height={data.height} width={data.width}
                    />

                    <div className="csInsiImg">
                      {
                        data?.img2 ?
                          <img src={data?.img2} alt={data?.alt} title={data?.alt} height={data.height1} width={data.width1} />
                          :
                          <p></p>
                      }
                      <a target={data.target} href={data.link}>
                        {
                          data?.btnText &&

                          <button id={data?.id} className="viewCSbTN">
                            <span>{data?.btnText}</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#101010" />
                            </svg>
                          </button>
                        }
                      </a>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

        <ContactForm1 />

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469695/whatsapp_ubh9of.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469745/telephone_twhjto.png' alt="call-icon" title="call-icon" />
          </button>

        </div>


      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
