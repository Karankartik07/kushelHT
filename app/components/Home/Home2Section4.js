import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";  
import { MdArrowOutward } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import "./home2.css";

const data = [
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767142/Group_1000011234_uq6juq.png",
    title: "UI/UX",
    para: "We believe in creating user centric design that can give excellent user experiences to drive customer satisfaction. ",
    showImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739013448/showimg1_ortnuz.webp',
    link: "/ui-ux-design",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767147/Group_1171275910_oqqzrk.png",
    title: "E-commerce Development",
    para: "Kushel Digi builds robust, scalable e-commerce platforms according to your business needs.",
    showImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739013536/ecodev_wssta3.webp',
    link: "/ecommerce-development",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767148/Group_1171275912_la8mm4.png",
    title: "Website Design & Development",
    para: "Kushel Digi known for designing highly functional websites that will increase your online presence.",
    showImg:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739013618/webdesignand_aywfy3.webp',
    link: "/web-development",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767148/Group_1171275911_fpvash.png",
    title: "Mobile App Development",
    para: "Our expert professionals develop android and IOS app to bridge your business with customers on the move.",
    showImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739013577/mobileapp_amzpmb.webp',
    link: "/mobile-application-development",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724769011/Group_1171275915_ltnvhu.png",
    title: "Creative and Design",
    para: "We are committed to grow your brand's visibility and engagement with focused digital marketing strategies.",
    showImg:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739013649/createdesign_yha69i.webp',
    link: "/graphic-design",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767149/Group_1171275917_jmaua6.png",
    title: "Software Development",
    para: "We believe in Developing exceptional software solutions to maximize efficiency and smoothen operations.",
    showImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739013694/softwaraedesign_pmej5l.webp',
    link: "/custom-software-development",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724769077/Group_1171275919_rsgqwh.png",
    title: "Staff Augmentation",
    para: "Kushel Digi helps to provide skilled professionals who will provide additional strength to your team for faster project execution.",
    showImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739013751/staffaug_li0ezu.webp',
    link: "/staff-augmentation",
  },
];

function Home2Section4() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cuopen, setcuopen] = useState(false);

  return (
    <>
      <div className="h2s4wrap">
        <div className="h2s4cont">
          <div className="dashspandiv">
            <span></span>
            <h2>What We Do</h2>
          </div>

          <div className="wedoitems">
            {data?.map((d, i) => (
              <Link key={i} href={d.link}>
                <div
                  className="singleWeitem"
                  onMouseEnter={() => setHoveredItem(d)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="weitemleft">
                    <Image width={44} height={44} src={d.img} alt="kushel" />
                    <div className="itemconte">
                      <p className="ictitle">{d.title}</p>
                      {/* Show para only on hover with animation */}
                      {hoveredItem === d && <p className="ipara">{d.para}</p>}
                    </div>
                  </div>
                  <div className="weiteemright">
                    <span>Read More</span>
                    <MdArrowOutward className="arrowlefts4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* For the new div */}
          <div className="wedoitems2">
            {data?.map((d, index) => (
              <div key={index} className="somesings">
                <div className="sindardiv">
                  {/* left side */}
                  <div className="sdivleft">
                    <Image width={23} height={23} src={d.img} alt="kushel" />
                    <span>{d.title}</span>
                  </div>

                  {/* right */}
                  {!(cuopen === index) && (
                    <FaArrowDown onClick={() => setcuopen(index)} />
                  )}
                </div>

                {cuopen === index && (
                  <div className="sidivcontent">
                    <p>{d.para}</p>
                    <Link href={d.link}>
                      <div className="flxindiv">
                        <span>Read More</span>
                        <MdArrowOutward className="arrowlefts43" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {hoveredItem && (
          <div className="hoverImageContainer addMediaquery">
            <Image
              src={hoveredItem.showImg}
              alt="Hover Display"
              className="hoverImage"
              width={475}
              height={475}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Home2Section4;
