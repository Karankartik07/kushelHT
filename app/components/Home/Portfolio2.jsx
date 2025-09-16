"use client";
import React from "react";
import Image from "next/image";
import Portfolio from "./Portfolio";

function Portfolio2() {
  const leftCards = [
    {
      logo: {
        src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1757143550/handshaken_vhregs.jpg",
        alt: "B2B ecommerce website development for fashion industry ",
      },
      title: "B2B",
      desc: "Our experts at Kushel Digi have long years of experience in designing ecommerce solutions suited for wholesale, bulk ordering, and corporate transactions. We optimize B2B sales channels for higher efficiency.",
    },
    {
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
    <section className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-16 py-12 text-center">
      {/* Heading */}
      <h3 className="text-[25px] leading-[35px] lg:text-[35px]  md:text-[42px] sm:text-[36px] xs:text-[27px] font-medium lg:leading-[50px] mb-5 mx-auto max-w-[900px]">
        Expert Ecommerce Solutions for Modern Businesses
      </h3>

      <p className="text-gray-700 leading-[23px] text-[16px] lg:text-[20px] sm:text-[15px] xs:text-[14px] font-medium  lg:leading-[36px] max-w-[1142px] mx-auto mb-5">
        Doesn’t matter whether you're a small business or a large enterprise,
        our custom ecommerce solutions are designed to grow with you. We believe
        in delivering seamless, high-performing online stores that drive
        results.
      </p>

      <h3 className="text-[20px] lg:text-[30px] md:text-[26px] sm:text-[24px] xs:text-[20px] font-medium mb-10">
        Business Models We Deliver For
      </h3>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {leftCards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-300/30 rounded-lg overflow-hidden shadow transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-lg">
                <Image
                  loading="lazy"
                  fill
                  src={card.logo.src}
                  alt={card.logo.alt}
                  className="object-cover transition-transform duration-400 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl lg:text-3xl font-semibold">
                  {card.title}
                </h3>
                <p className="text-gray-700 mt-3 text-[16px] lg:text-[18px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:gap-8 mt-10 lg:mt-10">
          {rightCards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-300/30 rounded-lg overflow-hidden shadow transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-lg">
                <Image
                  loading="lazy"
                  fill
                  src={card.logo.src}
                  alt={card.logo.alt}
                  className="object-cover transition-transform duration-400 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl lg:text-3xl font-semibold">
                  {card.title}
                </h3>
                <p className="text-gray-700 mt-3 text-[16px] lg:text-[18px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio2;
