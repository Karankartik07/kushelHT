import React from "react";
import "./section3.css";
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767163/Rectangle_30182_1_ynn34p.png",
    title: "Kickeez",
    para: "KICK-EEZ® sells a wide selection of rifle recoil pads and shooting supplies made of Sorbothane®, which provides shock absorption and reduces recoil effectively and quickly.",
    type: "Firearms ",
    type2: "B2B",
    link: "/kick-eez", 
    alt: "kick eez"
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767163/Rectangle_30182_2_smwxoz.png",
    title: "Slides 365",
    alt: "slides 361",
    para: "At Slides365, we strive to help people tell their story effectively. Your invisible friend inside the PowerPoint helps you create the Professional Presentations.",
    type: "D2C",
    type2: "E-commerce",
    link: "/slides365",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767164/Rectangle_30182_3_fkohiq.png",
    title: "DigitalMnA",
    para: "DigitalMnA is a full-service Merger and Acquisition company helping companies Sell and Buy assets by creating value.",
    type: "Real Estate",
    type2: "",
    link: "/digitalmna",
    alt: "digital mna"
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880370/image_cyhgfn.png",
    title: "Pro Truck",
    para: "Aftermarket suspension lift kits, leveling kits and accessories for 4X4 off-road truck and jeep enthusiasts",
    type: "B2B",
    type2: "Military & Tactical Industry",
    link: "/protrucksandcars",
    alt: "Pro Truck"
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880369/image_1_mxn7ml.png",
    title: "Rely Innovation",
    para: "Rely products give you clarity and peace of mind. More than just beeps - Rely helps you understand what’s occurring in your home and what to do next.",
    type: "B2B",
    type2: "Gunshop",
    link: "/relysafety",
    alt: "Rely Innovation"
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880369/image_2_jkmhgr.png",
    title: "Solenoid Ninja",
    para: "The idea of our webstore started small, but quickly gathered speed after we encountered frequent requests from individuals and companies looking for small quantity, high-quality electromagnetic components.",
    type: "B2B",
    type2: "E-commerce",
    link: "/solenoid-ninja",
    alt: "Solenoid Ninja"
  },
];

function Home2Section6() {
  return (
    <div className="h2sec6wrap">
      <div className="h2sec6cont">
        <h3>OUR WORK</h3>
        <p className="s6para">See what makes Kushel Digi a top e-commerce development company</p>

        <div className="allSec6data">
          {data.map((d, index) => (
            <Link key={index} href={d.link}>
              <div className="singeldata">
                <img width="450" height="400" src={d.img} alt="kushel" title={d.alt} />
                <div className="sdmid">
                  <span>{d.title}</span>
                  <div className="MdArrowOutwardbox">
                    <MdArrowOutward className="MdArrowOutward" />
                  </div>
                </div>
                <p className="dpara">{d.para}</p>
                <div className="dttpes">
                  <span className="spandt1">{d.type}</span>
                  <span className={`${d.type2 !== "" && "spandt1"}`}>{d.type2}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            focus: 'center',
            gap: '20px',
            start: 0,
            interval: 3000,
            autoplay: true,
            arrows: false,
            pagination: false,
          }}
          className='ho2s6slider'
        >
          {data.map((d, index) => (
            <SplideSlide key={index}>
              <Link href={d.link}>
                <div className="singeldata addmarginauto">
                  <img  width="450" height="400" src={d.img} alt="kushel" title={d.alt} />
                  <div className="sdmid">
                    <span>{d.title}</span>
                    <div className="MdArrowOutwardbox">
                      <MdArrowOutward className="MdArrowOutward" />
                    </div>
                  </div>
                  <p className="dpara">{d.para}</p>
                  <div className="dttpes">
                    <span className="spandt1">{d.type}</span>
                    <span className={`${d.type2 !== "" && "spandt1"}`}>{d.type2}</span>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>

        {/* Fixing this part */}
        <Link href="/portfolio">
          <button name="work" className="s6viallwork">
            <span>VIEW ALL WORK</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home2Section6;
