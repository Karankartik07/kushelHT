"use client";
// import "./ride.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./riffle.css";

import "../../globals.css";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import Link from "next/link";
function Riffle() {
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
        para: "Realizing the importance of a firm workflow foundation firsthand, we dedicate a separate chunk of work to researching, studying, and understanding your business's core needs and vision for a desired product or service.",
        points: [
          "Analyzing niches, competitors, & requirements",
          "Strategizing time and cost-efficient workflows",
          "Aiming for individually optimized results",
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
      title1: "Sites & Scopes",
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

  const generateMetadata = ({ params }) => ({
    title:
      "Rifle Supply | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how Rifle Supply boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  });

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription
      ? (metaDescription.content = description)
      : document.head.insertAdjacentHTML(
          "beforeend",
          `<meta name="description" content="${description}">`
        );
  }, []);

  return (
    <div className="case1wrap home-main">
      <Navbar />

      <link rel="canonical" href="https://www.kusheldigi.com/riflesupply" />

      {/* first sectino */}
      <section className="case1firsec" id="AiPortfolioImage">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png"
          alt="kushel"
          className="case1fill"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622906/Group_1171279216_j6teud.png"
          alt="kushel"
          className="case1bg"
        />

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <div>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745921174/standardlogo_400px_nobackground_1678492593__36894_kmlufu.webp"
                    alt="rifle supply logo"
                  />
                </div>
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Rifle Supply is an exclusive shop for firearms, parts, and
                  accessories. The brand deals in a wide range of products
                  related to rifles, guns, Glock shops, AR parts, and much more.
                  It is well-known for its expansive inventory with more than
                  4800 products available on its website.
                </p>
                <Link
                  className="btn-case-port"
                  href="https://riflesupply.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
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
      <section className="case2secsec2" id="case2_Background_Port">
        <div className="case2seccont">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746537844/madfish-logo1_ghjavp.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>
            <p>
              At present, the company is serving gun enthusiasts, professional
              shooters, and enforcement agencies. It’s a trusted name for the
              firearms dealership. If you are planning to upgrade your handgun
              or any other firearm-related equipment, then RifleSupply is worth
              checking out.{" "}
            </p>
            <p>
              However, what you are seeing on the website today has been
              transformed by Kushel Digi Solutions with their expert team
              efforts. <b>MadFish Solutions </b> has offered us this
              opportunity, which we successfully worked on to our best.
            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744626323/Ellipse_2616_b05zg1.png"
          alt="kushel"
          className="c2el1"
        />
      </section>

      <div className="PortfolioChallenges">
        <div className="PortfolioChallengeMain">
          <h4> Challenges</h4>
          <p> RifleSupply was facing several obstacles to its growth:</p>
          <div>
            <ul>
              <li>
                The older website lacked mobile efficiency. No mobile-friendly
                interface was affecting the sales.
              </li>
              <li>
                Most of the website elements were outdated, and an entire revamp
                was the only way to fix them.{" "}
              </li>
              <li>
                The website was complex to use, as many of the product details
                were missing.{" "}
              </li>
              <li>
                Compliance complexity was another factor that we had to work on
                to make the site’s design align with it.{" "}
              </li>
              <li>
                Real-time product availability was missing, so prospects used to
                step away from the website.{" "}
              </li>
              <li>
                The absence of search filters was creating difficulty in
                scrolling through the broad range of products.{" "}
              </li>
              <li>
                Marketing efforts were clearly invisible. Poor On-page SEO and
                inadequate customer engagement were a big challenge to cover up.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746643901/Group_1171279276_eyfkn6.png"
            // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744631255/Group_1171281276_psr4aw.png"
            alt="kushel"
          />
        </div>
      </div>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2" id="riffle_solution">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Though many challenges were there, our expert teammates found the
              appropriate solutions to create what customers will love to go
              through. The main parts that required attention were website
              layout and storefront development. For both, choosing the right
              tool is going to make all the difference.{" "}
            </p>

            <p className="s3theeparas">
              Throughout the development stage, Kushel Digi Solutions took the
              responsibility of changing digital transformation from scratch. We
              formulated the roadmap from start to end for making this
              redesigning project successful and then executed the plans with a
              collaborative approach.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746643899/Group_1171279278_n6mfn8.png"
            // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744631255/Group_1171281276_psr4aw.png"
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
          interval: 6000,
          pagination: true,
          arrows: false,
          pauseOnHover: true,
        }}
      >
        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333600/Group_1171279293_xbmklo.png"
              alt="kushel"
            />
            <div className="cas3s4con" id="cas3s4conn">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746707943/Group_1171279287_1_fo74cr.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_riffle">
                <h4>Custom Layout Design</h4>
                <p>
                  With the help of Figma, our expert designers crafted a fresh
                  UI that included modern web layout elements. This was done in
                  alignment with RifleSupply’s brand image.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333600/Group_1171279293_xbmklo.png"
              alt="kushel"
            />

            <div className="cas3s4con" id="cas3s4conn">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746707940/Group_1171279292_vbrwty.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_riffle">
                <h4>Headless BigCommerce Development </h4>
                <p>
                  We created a high-performing wholesale Ecommerce platform
                  using BigCommerce. It has everything to fit the needs of
                  Riflesupply and engage customers in the long run. From
                  featuring countless products to making it scalable.
                  BigCommerce turned out to be a limitless choice.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1747333600/Group_1171279293_xbmklo.png"
              alt="kushel"
            />

            <div className="cas3s4con" id="imgPortfolio_Phone">
              <div className="cas3circldata2" id="case3Portfolio_riffle">
                <h4>App Integrations</h4>
                <p>
                  One of the advantages of choosing BigCommerce is that plenty
                  of app integrations are available to download. We integrated
                  third-party tools for real-time inventory sync, SEO marketing
                  tools, and advanced filtering to meet customers’ demands
                  easily. Apart from that, we also simplified marketing for
                  RifleSupply.
                </p>
              </div>
              <div className="bgshowdb2" id="imgPortfolio_Ai_Phone">
                <img
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746707940/Group_1171279297_m7cscj.png"
                  alt="kushel"
                  className="shadowbg3"
                />
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
              We’ll turn your custom tech solutions into powerful brands by
              crafting unique customer experiences at every digital touchpoint
              with:
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

      <div className="Mainresult_Portfolio">
        <div className="result_Portfolio">
          <h5>Result & Impact</h5>
          <h6>
            Our <b>BigCommerce website development </b> process and efforts paid
            off when the results started showing up. We witnessed these changes
            after updating the website:
          </h6>
          <ul>
            <li>
              Better conversions were happening due to responsive design.{" "}
            </li>
            <li>
              Improved compliance automation reduced the burden on the website
              handler.{" "}
            </li>
            <li>
              Order accuracy and real-time data became easily accessible.{" "}
            </li>
            <li>
              {" "}
              Web pages started loading faster, which improved customer
              satisfaction.{" "}
            </li>
            <li>
              Robust On-Page SEO empowers a website with an edge in Google
              Search Ranking.{" "}
            </li>
          </ul>
          <p>
            Overall, working with RifleSupply was a great experience, and we are
            open to collaborating further.{" "}
          </p>
        </div>
      </div>
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
            <h4>Have a similar project in mind? </h4>
            <p>Discover how our expertise can benefit your project</p>
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

export default Riffle;
