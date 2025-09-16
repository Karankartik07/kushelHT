"use client";
import React from "react";
import Image from "next/image";
// import Link from 'next/link'

function Advance() {
  const leftCards = [
    {
      className: "left-b2b-card",
      logo: {
        src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1757143550/handshaken_vhregs.jpg",
        alt: "B2B ecommerce website development for fashion industry ",
      },
      title: "B2B",
      desc: "Our experts at Kushel Digi have long years of experience in designing ecommerce solutions suited for wholesale, bulk ordering, and corporate transactions. We optimize B2B sales channels for higher efficiency.",
    },
    {
      className: "left-b2b-card-2",
      id: "leftb2ca",
      logo: {
        src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1757143306/full-shot-people-with-food-donations_ugoqcj.jpg",
        alt: "Multi Vendor ecommerce website development for healthcare industry",
      },
      title: "Multi-vendor",
      desc: "We have delivered various marketplace solutions that allow multiple sellers to showcase and sell their products on a single platform. We ensure smooth vendor management, secure transactions, and excellent shopping experience for customers.",
    },
  ];
  const rightCards = [
    {
      logo: {
        src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747982612/file_1747977182-1747977184_mi8acb.webp",
        alt: "B2C ecommerce website development for travel industry",
      },
      title: "B2C",
      desc: "Kushel Digi has expertise to deliver engaging, scalable, and user-friendly ecommerce solutions that connect businesses with end customers. Our team is committed to help brands grow their online presence and boost sales.",
    },
    {
      logo: {
        src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1747982612/file_1747977159-1747977160_bx4i0a.webp",
        alt: "D2C ecommerce website development for financial industry",
      },
      title: "D2C",
      desc: "We have been helping brands to establish a direct connection with consumers by removing intermediaries. We create personalized ecommerce experiences to enhance brand loyalty and maximum profit.",
    },
  ];
  return (
    <section className="b2b-section">
      <h3 className="b2b-head primary-heading">
        Expert Ecommerce Solutions for Modern Businesses
      </h3>
      <p className="b2b-paraa secondary-heading">
        Doesn’t matter whether you're a small business or a large enterprise,
        our custom ecommerce solutions are designed to grow with you. We believe
        in delivering seamless, high-performing online stores that drive
        results.
      </p>
      <h3 className="b2b-headss">Business models we deliver for</h3>
      <div className="b2b-content">
        <div className="left-b2b-cards">
          {leftCards.map((card, idx) => (
            <div className={card.className} id={card.id} key={idx}>
              <div className="b2b-logo">
                <Image
                  loading="lazy"
                  width="599"
                  height="299"
                  src={card.logo.src}
                  alt={card.logo.alt}
                />
              </div>
              <div className="b2b-contain">
                <h3 className="b2b-headsss">{card.title}</h3>
                <p className="b2b-para">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-b2b-cards">
          {rightCards.map((card, idx) => (
            <div className="right-b2b-card" key={idx}>
              <div className="b2b-logo">
                <Image
                  loading="lazy"
                  width="599"
                  height="299"
                  src={card.logo.src}
                  alt={card.logo.alt}
                />
              </div>
              <div className="b2b-contain">
                <h3 className="b2b-headsss">{card.title}</h3>
                <p className="b2b-para">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advance;
