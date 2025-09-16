"use client";
// import "./ride.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import Link from "next/link";
function Rideready() {
  const d1 = [
    {
      title1: "Industries",
      title2: "E-commerce",
    },
    {
      title1: "Client Location",
      title2: "United States",
    },
    {
      title1: "Key Technologies",
      title2: "BigCommerce",
    },
  ];

  const d2 = [
    {
      title: "Discovery Phase",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216631/c2d1_j5clbp.png",
        title: "Discovery Phase",
        para: "This phase is the foundation of a successful project. We focus on having a deep understanding about your business, target audience and goals to ensure that our solutions align with your business goal.",
        points: [
          "In-depth Market Research",
          "Requirement Analysis",
          "Strategic Planning for effective execution ",
        ],
      },
    },
    {
      title: "UX/UI Design",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216874/c1bg5_wnepdj.png",
        title: "UX/UI Design",
        para: "We believe in user-centric design principles and to achieve this we design engaging and user friendly interfaces that align with your brand's identity. ",
        points: [
          "User Journey Mapping",
          "Brand Identity Integration",
          "Responsive Design",
        ],
      },
    },
    {
      title: "Web Development",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216850/c1bg4_wxl6sh.png",
        title: "Web development",
        para: "Our development team is always committed to bringing your vision to life by integrating the latest technologies and best practices to build a scalable eCommerce platform.",
        points: ["Customized Solutions", "Optimized Code", "Agile Approach"],
      },
    },
    {
      title: "Testing Automation",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216817/c1bg3_zabfta.png",
        title: "Testing Automation",
        para: "We thoroughly test every feature on the platform, using automation to deliver reliability, security, and an error-free experience before the user's eyes in front of its launch.",
        points: [
          "Comprehensive Testing",
          "Automated Quality Assurance",
          "User Acceptance Testing",
        ],
      },
    },
    {
      title: "Product-to-market launch",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216787/c1bg2_eog7dh.png",
        title: "Product-to-market launch",
        para: "In this final phase of development, we introduce your platform to the market and ensure a smooth and impactful launch that maximizes visibility and customer engagement.",
        points: [
          "Go-to-Market Strategy",
          "Performance Monitoring",
          "Ongoing Support",
        ],
      },
    },
  ];

  const projects = [
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216954/down1_kgzcrg.png",
      title1: "Topbrass tactical",
      title2: "E-commerce, Bigcomerce ",
      link: "/topbrasstactical",
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216979/down2_m0c8fa.png",
      title1: "Kickeez",
      title2: "E-commerce, Bigcomerce ",
      link: "/kick-eez",
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217009/down3_ucxpri.png",
      title1: "Sites And Scopes",
      title2: "E-commerce, Bigcomerce ",
      link: "/sitesandscopes",
    },
  ];

  const [selectS4, setSelectS4] = useState(0);
  const [selectdata, setSelectdata] = useState(d2[0].data);
  const [animationDirection, setAnimationDirection] =
    useState("slide-in-right");

  const handleSelectionChange = (index) => {
    setAnimationDirection("slide-out-left");

    setTimeout(() => {
      setSelectS4(index);
      setSelectdata(d2[index].data);
      setAnimationDirection("slide-in-right");
    }, 300);
  };

  return (
    <div className="case1wrap home-main">
      <Navbar />
      <link rel="canonical" href="https://www.kusheldigi.com/rideready" />

      {/* first sectino */}
      <section className="case1firsec">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png"
          alt="kushel"
          className="case1fill"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732622058/flat-off-back_1_lbcald.png"
          alt="kushel"
          className="case1bg"
        />

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <div className="catficircle">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732622216/logo_1_1688114115__84399_2_x00biw.png"
                    alt="rideready logo"
                  />
                </div>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Ride ready is a well known name for the services of
                  maintenance and repair works of Arctic Cat, Kawasaki, Stihl,
                  Echo, Shindaiwa, Kioti, and N & N.
                </p>
                {/* <Link
                  className="btn-case-port"
                  href="/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link> */}
              </div>
            </div>

            {/* secont */}
            <div className="case1secbot">
              {d1?.map((d, index) => (
                <div key={index} className="singleca1bt">
                  {/* left */}
                  <div className="sli1left">
                    <p>{d?.title1}</p>
                    <h3>{d?.title2}</h3>
                  </div>

                  {index != 2 && <p className="horizline"> </p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* secon section  */}
      <section className="case2secsec2">
        <div className="case2seccont">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216503/case2imgs1_xngbpg.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>

            <p>
              Ride Ready is one of the few trustworthy names in chainsaws and
              auto repair. The company provides excellent customer service and a
              wide range of quality products. Their product line is among the
              most in-demand brands in the industry, including Arctic Cat,
              Kawasaki, Stihl, Echo, Shindaiwa, Kioti, and N & N. Besides sales,
              Ride Ready also take care of maintaining and repairing work ATVs
              and UTVs so their customers' vehicles run smoothly for years. The
              parts department is the largest in the area, offering a good
              inventory of new accessories and components.
            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732622392/Ellipse_2616_doidsv.png"
          alt="kushel"
          className="c2el1"
        />
      </section>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Creating an excellent online shopping experience has always been
              at the top of the list for companies like Ride Ready as it is
              known for its outstanding customer service and vast selection of
              high-quality products. Despite their success, Ride Ready faced a
              challenge common among traditional businesses transitioning online
              by creating an intuitive e-commerce application that can reflect
              their stellar in-store experience. Customers wanted to have a
              digital space where they could easily navigate the company's large
              catalog and search for specific brands according to their needs.
            </p>

            <p className="s3theeparas">
              {" "}
              Kushel Digi Solutions initiated engagement with Ride Ready through
              intense consultation to gain in-depth insights into their goals,
              customers, and what they actually wanted to do. Equipped with such
              insight, we came up with a strategy to integrate Bigcommerce into
              their ecommerce platform to make it the most high performance and
              user friendly platform.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732631635/Group_1171279291_x7f8rs.png"
            alt="kushel"
            className="c3antoimg"
          />
        </div>
      </section>

      {/* fourth  section  */}

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: false,
          pauseOnHover: true,
        }}
      >
        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732632243/eeeeeeeeeee_1_cxsdo7.png"
              alt="kushel"
            />
            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732631716/Group_1171279294_s4iyxb.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2">
                <h4>Effective Brand-Based Search Feature</h4>
                <p>
                  Ride Ready has a number of great selling points due to
                  associations with top brands such as Arctic Cat and Stihl. To
                  best utilize this, we have a powerful search-by-brands feature
                  in place. This allows customers to select products for the
                  manufacturer and immediately show them what they are looking
                  for without their having browsed through useless items.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732632243/eeeeeeeeeee_1_cxsdo7.png"
              alt="kushel"
            />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732631787/Group_1171279295_takm9k.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2">
                <h4>Advanced product detail pages </h4>
                <p>
                  It is a widely known fact that online shoppers always seek
                  in-depth information related to the product. We have included
                  sophisticated product detail pages that contain high-quality
                  image, specifications, compatibility data, and usage
                  instructions. The biggest benefit of this feature is that it
                  allows customers to make well-informed buying decisions
                  ultimately reducing returns and unhappiness.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732632243/eeeeeeeeeee_1_cxsdo7.png"
              alt="kushel"
            />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1732631831/Group_1171279292_nljl1r.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2">
                <h4>Easy Navigation for Intuitive Browsing </h4>
                <p>
                  Simple navigation menu lies at the heart of our approach: With
                  Ride ready coming to the users through all levels of
                  wide-ranging products, we have designed a streamlined menu to
                  place the products into clearly meaningful and accessible
                  categories. Now, customers can find their specific items or
                  services in just a few clicks if they're looking for ATV parts
                  or perhaps booking a repair appointment.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>
      </Splide>

      {/* fivth  section  */}
      <section className="case2fivsec">
        <div className="c2fivsecont">
          {/* top  */}
          <div className="c2fivtopsec">
            <h4>How we build the E-Commerce development Process</h4>
            <p>
              Kushel Digi committed to transform your tech solutions into
              impactful brands by ensuring unique customer experiences at every
              digital touchpoint through our structured process.
            </p>
          </div>

          {/* bbottm  */}
          <div className="c22fivbotsec">
            {/* Left Section */}
            <div className="c3fivbtoleft">
              {d2?.map((d2Item, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectionChange(index)}
                  className={`${
                    selectS4 === index && "addthsomfbg"
                  } cursor-pointer`}
                >
                  {d2Item?.title}
                </p>
              ))}
            </div>

            {/* Right Section with Animation */}
            <div className={`c2fibbotrigh ${animationDirection} `}>
              <img
                src={selectdata?.img}
                className="selectdataimg"
                alt="kushel"
              />
              <div className="serigh_macont">
                <h4>
                  <span>0{selectS4 + 1}/</span> {selectdata?.title}
                </h4>
                <p className="sledatapar">{selectdata?.para}</p>
                <ul>
                  {selectdata?.points?.map((point, index) => (
                    <li key={index}>
                      <span>
                        <TiTick className="TiTickfds" />
                      </span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sliderbotse">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                autoplay: true,
                interval: 3000,
                pagination: true,
                arrows: false,
                pauseOnHover: false,
              }}
            >
              {d2?.map((item, index) => (
                <SplideSlide key={index}>
                  <div className={`c2fibbotrigh`}>
                    <img
                      src={item?.data?.img}
                      className="selectdataimg"
                      alt="kushel"
                    />

                    <div className="serigh_macont">
                      <h4>
                        <span>0{index + 1}/</span> {item?.data?.title}
                      </h4>

                      <p className="sledatapar">{item?.data?.para}</p>

                      <ul>
                        {item?.data?.points?.map((point, index) => (
                          <li key={index}>
                            <span>
                              <TiTick className="TiTickfds" />
                            </span>{" "}
                            {point}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>

      {/* six section  */}
      <section className="cs2sexiesec">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216672/similarl1_kq1btu.png"
          alt="kushel"
          className="similarl1"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216703/similarl2_yt5kqi.png"
          alt="kushel"
          className="similarl2"
        />

        <div className="c2sixconta">
          <div className="cssixtop">
            <h4>Got a new project idea? Let’s make it happen! </h4>
            <p>
              See how our specialized approach can drive your project forward
              with impactful results
            </p>
          </div>

          <div className="csizbot">
            <a href="/contact-us">
              <button>
                <span>Start a conversation</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* seven section  */}
      <section className="sc2sevensec">
        <div className="sc2sevnconta">
          <div className="sc2sev_head">
            <h2>Related Projects</h2>
            <p></p>
          </div>

          <div className="sc2_Sev_projects">
            {projects?.map((project, index) => (
              <div key={index} className="singlprojseve">
                <img src={project?.img} alt="kushel" />

                <div className="seven_titls">
                  <p className="sep1">{project?.title1}</p>
                  <p className="sep2">{project?.title2}</p>
                </div>

                <a href={project?.link}>
                  {" "}
                  <button>
                    <span>Case study</span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Rideready;
