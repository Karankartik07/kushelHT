import React from "react";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./section7.css"
import '@splidejs/react-splide/css';

const data = [
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481478/s8img_a9lwzk.webp',
    heading: "8+ Year of Proven Track Record",
    para: "With over 8 years of experience, we have successfully delivered various projects and established a strong reputation in the industry. Our expertise ensures reliable and high-quality results every time.",
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481555/bluecir_febcrg.webp',
    heading: "Cost Effective Solutions",
    para: "We believe in delivering solutions that offer maximum value without compromising on quality. We have always been delivering affordable services according to your specific needs and budget.",
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481591/graycirl_adkdl0.webp',
    heading: "Expertise you can Trust",
    para: "Our team consists of highly experienced professionals who bring life into every project. We are committed to delivering solutions that you can rely on with confidence.",
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481478/s8img_a9lwzk.webp',
    heading: "Customized Solutions",
    para: "We understand that each business is unique that's why we design solutions to meet your specific requirements. Our customized approach ensures your digital success",
  },
  {
    img:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481555/bluecir_febcrg.webp',
    heading: "Client Centric Approach",
    para: "Your success is our priority. We listen to your needs, work closely with you throughout the project to ensure that our solutions align perfectly with your business goals.",
  },
  {
    img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481591/graycirl_adkdl0.webp',
    heading: "Dedicated Support and maintenance",
    para: "Our commitment to your success extends beyond project delivery. We offer ongoing support and maintenance to ensure your systems run smoothly and efficiently.",
  },
];

function Home2Section7() {
  return (
    <div className="h2sec7wrap">
      <div className="s7cont">
        <h3>
          {" "}
          Delivering <span> results</span> that matter{" "}
        </h3>

        <img className="s8doots" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481513/dotslines_q2ib5g.webp' alt="Dots" />

        <div className="s8boxes">
          {data?.map((d, i) => (
            <div key={i} className="s8singbox">
              <img src={d.img} alt={d.heading} />
              <div className="s8headpara">
                <p className="s8heading">{d.heading}</p>
                <p className="s8apra">{d.para}</p>
              </div>
            </div>
          ))}
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            focus: "center",
            gap: "20px",
            start: 0,
            interval: 3000,
            autoplay: true,
            arrows: false,
            pagination: false,
          }}
          className="ho2s6slider2"
        >
          {data?.map((d, i) => (
            <SplideSlide key={i}>
              <div className="s8singbox addmarginauto">
                <img src={d.img} alt={d.heading} />
                <div className="s8headpara">
                  <p className="s8heading">{d.heading}</p>
                  <p className="s8apra">{d.para}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Home2Section7;
