"use client";
import Navbar from "@/app/COMMON/Navbar";
import pageData from "../pageData";
import Footer from "@/app/COMMON/Footer";
import "./articledetail.css";
import Article from "../Article/Article";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdCelebration } from "react-icons/md";
import { notFound } from "next/navigation";

export default function ArticleDetail({ params }) {
useEffect(() => {
  const handleScroll = () => {
    const article = document.querySelector(".article-contt");
    const banner = document.querySelector(".cta-Banner");
    if (!article || !banner) return;

    const articleRect = article.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // scroll progress = how much of the article has been scrolled
    const progress = (windowHeight - articleRect.top) / article.offsetHeight;

    // hide banner after 95% of article is visible
    const hideBanner = progress >= 0.95;

    banner.classList.toggle("hidden", hideBanner);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { slug } = React.use(params);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [confetti, setConfetti] = useState(null);

  useEffect(() => {
    import("canvas-confetti").then((module) =>
      setConfetti(() => module.default)
    );
  }, []);

  const popAniRef = useRef(null);
  const [showThanks, setShowThanks] = useState(false);

  const handleClick1 = () => {
    setShowThanks(true);
    if (popAniRef.current) {
      popAniRef.current.style.width = "112px";
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setShowThanks(false);
      if (popAniRef.current) {
        popAniRef.current.style.width = "100px";
      }
    }, 2000);
  };
  // Find the article by slug
  const article = pageData.find(
    (item) =>
      item.head
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") === slug
  );

if (!article) {
  notFound(); // shows Next.js 404 page
}

  return (
    <>
      <Navbar />
      <section className="article-detail">
        <h1>{article.title}</h1>
        {/* <div className="article-date">{article.date}</div> */}
        <div className="MainBloggimg">
          <img src={article.image} alt={article.alt} width={600} height={350} />
        </div>
        <div className="article-content">
          <div className="article-contt">
            <div className="contt-sec">
              <div className="blog-by">
                <div className="profileDate">
                  <div className="pd-n">
                    <p>{article.author.name}</p>
                   
                    <p>{article.date}</p>

                    <p>{article.author.designation}</p>
                  </div>
                </div>
              </div>
              <div className="main-contt-sec">
                {/* Render paragraphs */}
                {article.content?.paragraphs &&
                  article.content.paragraphs.map((p, i) => (
                    <p
                      className="paratop1"
                      key={"p" + i}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                {/* Render subHeading */}
                {article.content?.subHeading && (
                  <h2
                    className="subhead1"
                    dangerouslySetInnerHTML={{
                      __html: article.content.subHeading,
                    }}
                  />
                )}

                {/* Render subParagraphs with dangerouslySetInnerHTML */}
                {article.content?.subParagraph?.[0] && (
                  <p
                    className="paratop1"
                    dangerouslySetInnerHTML={{
                      __html: article.content.subParagraph[0],
                    }}
                  />
                )}

                {article.content?.subParagraph?.[1] && (
                  <p
                    className="paratop1"
                    dangerouslySetInnerHTML={{
                      __html: article.content.subParagraph[1],
                    }}
                  />
                )}
                {article.content?.subParagraph?.[2] && (
                  <p
                    className="paratop1"
                    dangerouslySetInnerHTML={{
                      __html: article.content.subParagraph[2],
                    }}
                  />
                )}
                {article.content?.subParagraph?.[3] && (
                  <p
                    className="paratop1"
                    dangerouslySetInnerHTML={{
                      __html: article.content.subParagraph[3],
                    }}
                  />
                )}
                {article.content?.subParagraph?.[4] && (
                  <p
                    className="paratop1"
                    dangerouslySetInnerHTML={{
                      __html: article.content.subParagraph[4],
                    }}
                  />
                )}

                {/* Render smallHeading */}
                {article.content?.smallHeading && (
                  <h3 className="small-head1">
                    {article.content.smallHeading}
                  </h3>
                )}
                {/* Render bulletPoints */}
                {article.content?.bulletPoints && (
                  <ul className="ul-1">
                    {article.content.bulletPoints.map((bp, i) => (
                      <li
                        key={"bp-" + i}
                        dangerouslySetInnerHTML={{ __html: bp }}
                      />
                    ))}
                  </ul>
                )}

                {/* Render smallHeading1 and bulletPoints1 */}
                {article.content?.smallHeading1 && (
                  <h3
                    className="small-head2"
                    dangerouslySetInnerHTML={{
                      __html: article.content.smallHeading1,
                    }}
                  />
                )}

                {article.content?.bulletPoints1 && (
                  <ul className="ul-2">
                    {article.content.bulletPoints1.map((bp, i) => (
                      <li key={"bp1" + i}>{bp}</li>
                    ))}
                  </ul>
                )}
                {/* Render smallHeading2 and bulletPoints2 */}
                {article.content?.smallHeading2 && (
                  <h3 className="small-head2">
                    {article.content.smallHeading2}
                  </h3>
                )}
                {article.content?.bulletPoints2 && (
                  <ul className="ul-3">
                    {article.content.bulletPoints2.map((bp, i) => (
                      <li
                        key={"bp2-" + i}
                        dangerouslySetInnerHTML={{ __html: bp }}
                      />
                    ))}
                  </ul>
                )}

                {/* Render para0 */}
                {article.content?.para0 && (
                  <p
                    className="paratop1"
                    dangerouslySetInnerHTML={{ __html: article.content.para0 }}
                  />
                )}

                {/* Render paragraph1 */}
                {article.content?.paragraph1 && (
                  <p className="paratop1">{article.content.paragraph1}</p>
                )}

                {/* Render image1 if present */}
                <div className="more-img">
                  {article.content?.image1 && (
                    <img
                      src={article.content.image1[0]}
                      alt="article extra"
                      style={{ maxWidth: "100%", marginTop: 16 }}
                    />
                  )}
                </div>
                {article.content?.subHeading1 && (
                  <h4 className="small-head3">{article.content.subHeading1}</h4>
                )}
                {article.content?.subParagraph1?.map((para, index) => (
                  <p
                    key={index}
                    className="paratop1"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}

                {/* Render smallHeading3 and bulletPoints3 */}
                {article.content?.smallHeading3 && (
                  <h3 className="small-head2">
                    {article.content.smallHeading3}
                  </h3>
                )}
                {article.content?.bulletPoints3 && (
                  <ul className="ul-3">
                    {article.content.bulletPoints3.map((bp, i) => (
                      <li
                        key={"bp3-" + i}
                        dangerouslySetInnerHTML={{ __html: bp }}
                      />
                    ))}
                  </ul>
                )}

                {article.content?.paragraph1 && (
                  <p className="paratop1">{article.content.paragraph1}</p>
                )}
                {article.content?.subHeading11 && (
                  <h4 className="small-head3">
                    {article.content.subHeading11}
                  </h4>
                )}
                {article.content?.subParagraph11 && (
                  <p className="paratop1">{article.content.subParagraph11}</p>
                )}
                {article.content.table1 &&
                  article.content.table1.columns &&
                  article.content.table1.rows && (
                    <div className="table-container">
                      <table className="custom-table">
                        <thead>
                          <tr>
                            {article.content.table1.columns.map((col, i) => (
                              <th key={i}>{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {article.content.table1.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                <div className="more-img">
                  {article.content?.image1 && article.content.image1[1] && (
                    <img
                      src={article.content.image1[1]}
                      alt="article extra"
                      style={{ maxWidth: "100%", marginTop: 16 }}
                    />
                  )}

                  {article.content?.subHeading2 && (
                    <h4 className="small-head3">
                      {article.content.subHeading2}
                    </h4>
                  )}
                  {article.content?.subParagraph2 && (
                    <p className="paratop1">{article.content.subParagraph2}</p>
                  )}
                  {article.content?.image1 && article.content.image1[1] && (
                    <img
                      src={article.content.image1[1]}
                      alt="article extra"
                      style={{ maxWidth: "100%", marginTop: 16 }}
                    />
                  )}
                  {/* Render smallHeading4 and bulletPoints4 */}
                  {article.content?.smallHeading4 && (
                    <h3 className="small-head2">
                      {article.content.smallHeading4}
                    </h3>
                  )}
                  {article.content?.bulletPoints4 && (
                    <ul className="ul-4">
                      {article.content.bulletPoints4.map((bp, i) => (
                        <li
                          key={"bp4-" + i}
                          dangerouslySetInnerHTML={{ __html: bp }}
                        />
                      ))}
                    </ul>
                  )}

                  {article.content?.smallHeading5 && (
                    <h3
                      className="small-head2"
                      dangerouslySetInnerHTML={{
                        __html: article.content.smallHeading5,
                      }}
                    />
                  )}

                  {article.content?.bulletPoints5 && (
                    <ul className="ul-4">
                      {article.content.bulletPoints5.map((bp, i) => (
                        <li
                          key={"bp5-" + i}
                          dangerouslySetInnerHTML={{ __html: bp }}
                        />
                      ))}
                    </ul>
                  )}

                  {article.content?.smallHeading6 && (
                    <h3 className="small-head2">
                      {article.content.smallHeading6}
                    </h3>
                  )}
                  {article.content?.bulletPoints6 && (
                    <ul className="ul-4">
                      {article.content.bulletPoints6.map((bp, i) => (
                        <li
                          key={"bp6-" + i}
                          dangerouslySetInnerHTML={{ __html: bp }}
                        />
                      ))}
                    </ul>
                  )}

                  {article.content?.subHeadingid3 && (
                    <h4 className="small-head3">
                      {article.content.subHeadingid3}
                    </h4>
                  )}
                  {article.content?.subParagraphid3 && (
                    <>
                      <p className="paratop1">
                        {article.content.subParagraphid3?.[0]}
                      </p>
                      <p className="paratop1">
                        {article.content.subParagraphid3?.[1]}
                      </p>
                    </>
                  )}

                  {article.content?.smallHeading7 && (
                    <h3 className="small-head2">
                      {article.content.smallHeading7}
                    </h3>
                  )}
                  {article.content?.bulletPoints7 && (
                    <ul className="ul-4">
                      {article.content.bulletPoints7.map((bp, i) => (
                        <li key={"bp7-" + i}>
                          {article.content.strongbull7?.[i] && (
                            <strong
                              className="pr-1"
                              dangerouslySetInnerHTML={{
                                __html: article.content.strongbull7[i],
                              }}
                            />
                          )}
                          <span dangerouslySetInnerHTML={{ __html: bp }} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {article.content?.paragraph2 && (
                    <p className="paratop1">{article.content.paragraph2}</p>
                  )}

                  {article.content.table2 &&
                    article.content.table2.columns &&
                    article.content.table2.rows && (
                      <div className="table-container">
                        <table className="custom-table">
                          <thead>
                            <tr>
                              {article.content.table2.columns.map((col, i) => (
                                <th key={i}>{col}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {article.content.table2.rows.map((row, i) => (
                              <tr key={i}>
                                {row.map((cell, j) => (
                                  <td key={j}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                  {/* Render image1 if present */}
                  <div className="more-img">
                    {article.content?.image1 && article.content.image1[2] && (
                      <img
                        src={article.content.image1[2]}
                        alt="article extra"
                        style={{ maxWidth: "100%", marginTop: 16 }}
                      />
                    )}

                    {article.content?.subHeading3 && (
                      <h4 className="small-head3">
                        {article.content.subHeading3}
                      </h4>
                    )}
                    {article.content?.subParagraph3 && (
                      <>
                        {" "}
                        <p className="paratop1">
                          {article.content.subParagraph3[0]}
                        </p>
                        {/* <p className="paratop1">
                          {article.content.subParagraph3[1]}
                        </p>
                        <p className="paratop1">
                          {article.content.subParagraph3[2]}
                        </p> */}
                      </>
                    )}

                    {article.content?.smallHeading8 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading8}
                      </h3>
                    )}
                    {article.content?.bulletPoints8 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints8.map((bp, i) => (
                          <li key={"bp2" + i}>
                            <strong className="pr-1">
                              {article.content.strongbull8?.[i]}
                            </strong>
                            {bp}
                          </li>
                        ))}
                      </ul>
                    )}
                    {article.content?.subHeading4 && (
                      <h4 className="small-head3">
                        {article.content.subHeading4}
                      </h4>
                    )}
                    {article.content?.subParagraph4 && (
                      <>
                        <p className="paratop1">
                          {article.content.subParagraph4[0]}
                        </p>
                        <p className="paratop1">
                          {article.content.subParagraph4[1]}
                        </p>
                      </>
                    )}

                    {article.content?.smallHeading9 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading9}
                      </h3>
                    )}
                    {article.content?.bulletPoints9 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints9.map((bp, i) => (
                          <li key={"bp9-" + i}>
                            {article.content.strongbull9?.[i] && (
                              <strong
                                className="pr-1"
                                dangerouslySetInnerHTML={{
                                  __html: article.content.strongbull9[i],
                                }}
                              />
                            )}
                            <span dangerouslySetInnerHTML={{ __html: bp }} />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* for id 3 */}

                    {article.content?.smallHeadingid3_1 && (
                      <h3 className="small-head2">
                        {article.content.smallHeadingid3_1}
                      </h3>
                    )}
                    {article.content?.bulletPointsid3_1 && (
                      <ul className="ul-4">
                        {article.content.bulletPointsid3_1.map((bp, i) => (
                          <li key={"bp3_1-" + i}>
                            {article.content.strongbulld3_1?.[i] && (
                              <strong
                                className="pr-1"
                                dangerouslySetInnerHTML={{
                                  __html: article.content.strongbulld3_1[i],
                                }}
                              />
                            )}
                            <span dangerouslySetInnerHTML={{ __html: bp }} />
                          </li>
                        ))}
                      </ul>
                    )}

                    {article.content?.smallHeading9d3_2 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading9d3_2}
                      </h3>
                    )}
                    {article.content?.bulletPoints9d3_2 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints9d3_2.map((bp, i) => (
                          <li key={"bp2-" + i}>
                            <strong
                              className="pr-1"
                              dangerouslySetInnerHTML={{
                                __html: article.content.strongbulld3_2?.[i],
                              }}
                            />
                            <span dangerouslySetInnerHTML={{ __html: bp }} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading9d3_3 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading9d3_3}
                      </h3>
                    )}
                    {article.content?.bulletPoints9d3_3 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints9d3_3.map((bp, i) => (
                          <li key={"bp2" + i}>
                            {" "}
                            <strong className="pr-1">
                              {article.content.strongbulld3_3?.[i - 1]}
                            </strong>
                            {bp}
                          </li>
                        ))}
                      </ul>
                    )}

                    {article.content?.subHeading22 && (
                      <h4 className="small-head3">
                        {article.content.subHeading22}
                      </h4>
                    )}
                    {article.content?.subParagraph22 && (
                      <p className="paratop1">
                        {article.content.subParagraph22}
                      </p>
                    )}

                    {/* Render smallHeading4 and bulletPoints4 */}
                    {article.content?.smallHeading44 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading44}
                      </h3>
                    )}
                    {article.content?.bulletPoints44 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints44.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading55 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading55}
                      </h3>
                    )}
                    {article.content?.bulletPoints55 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints55.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading66 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading66}
                      </h3>
                    )}
                    {article.content?.bulletPoints66 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints66.map((bp, i) => (
                          <li
                            key={"bp66-" + i}
                            dangerouslySetInnerHTML={{ __html: bp }}
                          />
                        ))}
                      </ul>
                    )}

                    {article.content?.subHeading5 && (
                      <h4 className="small-head3">
                        {article.content.subHeading5}
                      </h4>
                    )}
                    {article.content?.subParagraph5 && (
                      <p
                        className="paratop1"
                        dangerouslySetInnerHTML={{
                          __html: article.content.subParagraph5,
                        }}
                      />
                    )}

                    {article.content?.smallHeading10 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading10}
                      </h3>
                    )}
                    {article.content?.bulletPoints10 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints10.map((bp, i) => (
                          <li
                            key={"bp10-" + i}
                            dangerouslySetInnerHTML={{ __html: bp }}
                          />
                        ))}
                      </ul>
                    )}

                    {article.content?.subHeading6 && (
                      <h4 className="small-head3">
                        {article.content.subHeading6}
                      </h4>
                    )}
                    {article.content?.subParagraph6 && (
                      <p
                        className="paratop1"
                        dangerouslySetInnerHTML={{
                          __html: article.content.subParagraph6,
                        }}
                      />
                    )}

                    {article.content?.smallHeading11 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading11}
                      </h3>
                    )}
                    {article.content?.bulletPoints11 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints11.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading12 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading12}
                      </h3>
                    )}
                    {article.content?.bulletPoints12 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints12.map((bp, i) => (
                          <li
                            key={"bp2" + i}
                            dangerouslySetInnerHTML={{ __html: bp }}
                          />
                        ))}
                      </ul>
                    )}

                    {article.content?.smallHeading13 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading13}
                      </h3>
                    )}
                    {article.content?.bulletPoints13 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints13.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading14 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading14}
                      </h3>
                    )}
                    {article.content?.bulletPoints14 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints14.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}

                    {article.content?.map && article.content.map && (
                      <img
                        src={article.content.map}
                        alt="article extra"
                        style={{ maxWidth: "100%", marginTop: 16 }}
                      />
                    )}
                    {article.content?.subHeading7 && (
                      <h4 className="small-head3">
                        {article.content.subHeading7}
                      </h4>
                    )}
                    {article.content?.subParagraph7 && (
                      <p
                        className="paratop1"
                        dangerouslySetInnerHTML={{
                          __html: article.content.subParagraph7,
                        }}
                      />
                    )}

                    {article.content?.smallHeading15 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading15}
                      </h3>
                    )}
                    {article.content?.bulletPoints15 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints15.map((bp, i) => (
                          <li
                            key={"bp15-" + i}
                            dangerouslySetInnerHTML={{ __html: bp }}
                          />
                        ))}
                      </ul>
                    )}

                    {article.content?.subHeading71 && (
                      <h4 className="small-head3">
                        {article.content.subHeading71}
                      </h4>
                    )}
                    {article.content?.subParagraph71 && (
                      <p
                        className="paratop1"
                        dangerouslySetInnerHTML={{
                          __html: article.content.subParagraph71,
                        }}
                      />
                    )}

                    {article.content?.smallHeading161 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading161}
                      </h3>
                    )}
                    {article.content?.bulletPoints161 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints161.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}

                    {article.content?.subHeading8 && (
                      <h4 className="small-head3">
                        {article.content.subHeading8}
                      </h4>
                    )}
                    {article.content?.subParagraph8?.map((para, index) => (
                      <p
                        key={index}
                        className="paratop1"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}

                    {article.content?.bulletPoints16 && (
                      <ul className="ul-4">
                        {article.content.bulletPoints16.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}

                    {article.content?.paragraph4 && (
                      <p className="paratop1">
                        {" "}
                        <strong>{article.content.paragraph4[0]}</strong>
                        {article.content.paragraph4[1]}
                      </p>
                    )}

                    {article.content?.subHeadingNew && (
                      <h4 className="small-head3">
                        {article.content.subHeadingNew}
                      </h4>
                    )}
                    {article.content?.subParagraphNew && (
                      <>
                        {article.content.subParagraphNew.map((para, i) => {
                          const strongPart =
                            article.content.strongbullnew?.[i] || "";
                          return (
                            <p className="paratop1" key={"spn-" + i}>
                              {strongPart && (
                                <strong
                                  className="pr-1"
                                  dangerouslySetInnerHTML={{
                                    __html: strongPart,
                                  }}
                                />
                              )}
                              <span
                                dangerouslySetInnerHTML={{ __html: para }}
                              />
                            </p>
                          );
                        })}
                      </>
                    )}

                    {article.content?.subHeadingNew1 && (
                      <h4 className="small-head3">
                        {article.content.subHeadingNew1}
                      </h4>
                    )}
                    {article.content?.subParagraphNew1 && (
                      <>
                        {article.content.subParagraphNew1.map((para, index) => (
                          <p
                            key={index}
                            className="paratop1"
                            dangerouslySetInnerHTML={{ __html: para }}
                          />
                        ))}
                      </>
                    )}

                    {article.content?.borderbottomline && (
                      <span
                        className="borderbottomline"
                        dangerouslySetInnerHTML={{
                          __html: article.content.borderbottomline,
                        }}
                      />
                    )}

                    {/* Conclusion */}

                    {article.content?.subHeading9 && (
                      <h4 className="small-head3">
                        {article.content.subHeading9}
                      </h4>
                    )}
                    {article.content?.subParagraph9 && (
                      <>
                        <p
                          className="paratop1"
                          dangerouslySetInnerHTML={{
                            __html: article.content.subParagraph9[0],
                          }}
                        />
                        <p
                          className="paratop1"
                          dangerouslySetInnerHTML={{
                            __html: article.content.subParagraph9[1],
                          }}
                        />
                        <p
                          className="paratop1"
                          dangerouslySetInnerHTML={{
                            __html: article.content.subParagraph9?.[2],
                          }}
                        />
                      </>
                    )}

                    {/* FAQ */}

                    {<h5 className="small-head3">{article.content.headFaq}</h5>}

                    <div className="faq-blogN">
                      {article.content.FaqData?.map((item, index) => (
                        <div
                          className={`faqr-item-new ${
                            activeIndex === index ? "expanded" : ""
                          }`}
                          key={index}
                        >
                          <div className="faq-new-question">
                            <h4 className="questionFaqNew">{item.question}</h4>
                            <button
                              className="toggle-btn"
                              onClick={() => toggleAnswer(index)}
                            >
                              {activeIndex === index ? "-" : "+"}
                            </button>
                          </div>
                          <p className="faqr-answer-new">{item.answer}</p>
                        </div>
                      ))}
                    </div>

                    {
                      <div className="bott-icon">
                        <h6>
                          {" "}
                          <strong>{article.author.name}</strong>{" "}
                        </h6>
                        <div className="iconBotCl">
                          <Link
                            className="icon-f"
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.kusheldigi.com%2Fblog%2Fcomprehensive-seo-techniques-to-boost-keyword-rankings"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF size={20} />
                          </Link>
                          <Link
                            className="icon-f"
                            href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fwww.kusheldigi.com%2Fblog%2Fcomprehensive-seo-techniques-to-boost-keyword-rankings"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedinIn size={20} />
                          </Link>
                          <Link
                            className="icon-f"
                            href="https://x.com/intent/post?url=https%3A%2F%2Fwww.kusheldigi.com%2Fblog%2Fcomprehensive-seo-techniques-to-boost-keyword-rankings&text=Check%20out%20this%20blog!"
                            rel="noopener noreferrer"
                          >
                            <FaTwitter size={20} />
                          </Link>
                          <div
                            onClick={handleClick1}
                            className={`icon-f ${showThanks ? "popped " : ""}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span
                              className={`thanksTxt ${
                                showThanks ? "displayBlock " : "displayNone"
                              }`}
                            >
                              Thanks
                            </span>
                            <MdCelebration size={20} />
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="cta-Banner">
                {article.banner ? (
                  <img src={article.banner} alt="" />
                ) : (
                  <div className="bott-icon">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        gap: "10px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        className="icon-f"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.kusheldigi.com%2Fblog%2Fcomprehensive-seo-techniques-to-boost-keyword-rankings"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF size={20} />
                      </Link>
                      <Link
                        className="icon-f"
                        href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fwww.kusheldigi.com%2Fblog%2Fcomprehensive-seo-techniques-to-boost-keyword-rankings"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                      <Link
                        className="icon-f"
                        href="https://x.com/intent/post?url=https%3A%2F%2Fwww.kusheldigi.com%2Fblog%2Fcomprehensive-seo-techniques-to-boost-keyword-rankings&text=Check%20out%20this%20blog!"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter size={20} />
                      </Link>
                      <div
                        onClick={handleClick1}
                        className={`icon-f ${showThanks ? "popped " : ""}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          className={`thanksTxt ${
                            showThanks ? "displayBlock " : "displayNone"
                          }`}
                        >
                          Thanks
                        </span>
                        <MdCelebration size={20} />
                      </div>
                    </div>
                  </div>
                )}
                {/* <img src={article.banner} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Article title={"More in Culture"} />
      <Footer />
    </>
  );
}
