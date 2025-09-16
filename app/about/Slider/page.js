
"use client";
import React, { useState, useEffect } from "react";
import "./Slider.css";
import { FaArrowLeft, FaArrowRight, FaRegUser } from "react-icons/fa";
import { FaHouseChimneyUser, FaRegFaceGrinWide } from "react-icons/fa6";
import { PiTarget } from "react-icons/pi";
import { MdOutlineSwitchAccount } from "react-icons/md";

const valuesData = [
  {
    title: "1. Client-Centric",
    description:
      "We value our client’s satisfaction and needs over everything else as our solutions fully aligned with your goals.",
    icon: <FaRegFaceGrinWide />,
  },
  {
    title: "2. Transparency",
    description:
      "We believe in open and transparent communication at every step of the project, keeping the clients well-informed and engaged with the process.",
    icon: <FaRegUser />,
  },
  {
    title: "3. Quality Assurance",
    description:
      "We ensure high-quality results through rigorous testing, reviews, and ongoing improvements.",
    icon: <PiTarget />,
  },
  {
    title: "4. Team Work",
    description:
      "We have faith in teamwork and togetherness, putting individual strengths together to bring collective success and effective project delivery.",
    icon: <MdOutlineSwitchAccount />,
  },
  {
    title: "5. Innovation",
    description:
      "We incorporate innovative ideas and technologies to create progressive solutions that lead to growth and set our clients apart from competition.",
    icon: <FaHouseChimneyUser />,
  },
];

const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update number of cards per screen size
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width <= 500) setCardsPerPage(1);
      else if (width <= 800) setCardsPerPage(2);
      else if (width <= 1024) setCardsPerPage(3);
      else if (width <= 1500) setCardsPerPage(3);
      
      else setCardsPerPage(4);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + cardsPerPage < valuesData.length;

  const handleNext = () => {
    if (canGoNext) {
      const newIndex = startIndex + 1;
      setStartIndex(newIndex);
      setActiveIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      const newIndex = startIndex - 1;
      setStartIndex(newIndex);
      setActiveIndex(newIndex);
    }
  };

  const visibleCards = valuesData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="ourValues_k82s">
      <div className="ourValuesHeader_k82s">
        <h3>
          Our <span>Values</span>
        </h3>
        <div className="navButtons_k82s">
          <button
            className={`navBtn_k82s ${canGoPrev ? "active" : ""}`}
            onClick={handlePrev}
            disabled={!canGoPrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className={`navBtn_k82s ${canGoNext ? "active" : ""}`}
            onClick={handleNext}
            disabled={!canGoNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="sliderWrapper_k82s">
        <div className="valuesGrid_k82s">
          {visibleCards.map((item, index) => {
            const actualIndex = startIndex + index;
            return (
              <div
                key={actualIndex}
                className={`valueCard_k82s ${
                  actualIndex === activeIndex ? "active_k82s" : ""
                }`}
                onClick={() => setActiveIndex(actualIndex)}
              >
                <div className="iconWrapper_k82s">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
