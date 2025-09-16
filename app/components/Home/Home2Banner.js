"use client"; 

import { useEffect, useState } from "react";
import Link from "next/link"; 
import { MdArrowOutward } from "react-icons/md";
import  "./homeBan.css"; 
import Image from "next/image";


const NumberCounter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stepTime = 50;
    const steps = duration / stepTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval);
          return target;
        }
        return Math.min(prevCount + increment, target);
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <p>{Math.floor(count)}+</p>;
};

function Home2Banner() {
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["DESIGN", "DEVELOP", "DELIVER"];
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const wordDisplayInterval = 2000;
    const shakeDuration = 200;
    const hideDuration = 500;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, hideDuration + shakeDuration);
    }, wordDisplayInterval);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
   
      <div className="homeBanWrap">


        <div className="homebancon1">
          <div className="homeBanCont">
            <Image
              width={600}
              height={600}
              className="homeBan2"
              src="https://res.cloudinary.com/ecommerce-website/image/upload/v1724770641/homeban2.d86809d357a4778d611a_gr8wdz.webp"
              alt="Banner"
            />

            <div className="banheadings">
              <h1>Kushel Digi Solutions Helps You</h1>
              <div
                className={`desiright ${   isVisible ? "shake-animation" : "fade-out" }`}
              >
                <h2>{words[wordIndex]}</h2>
              </div>
            </div>

            <Image
              className="bgcircle"
              src="https://res.cloudinary.com/ecommerce-website/image/upload/v1724770752/bgcircle.98c8639fc2295a853e40_r0vgne.png"
              alt="Background Circle"
              width={600}
              height={600}
            />
          </div>

          <Link aria-label="contat-us" href="/contact-us">
            <div className="h2bantakCir">
              <MdArrowOutward className="mdarrwouward" />
              <p>Let’s Talk</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="hoebancon2">
        <Link aria-label="contact-us" href="/contact-us">
          <div className="h2bantakCir2">
            <MdArrowOutward className="mdarrwouward2" />
            <p>Let’s Talk</p>
          </div>
        </Link>

        <div className="hoebaninner">
          <label>
            <NumberCounter target={500} duration={2000} />
            <span>Apps & Websites</span>
          </label>

          <label>
            <NumberCounter target={300} duration={2000} />
            <span>Clients Served</span>
          </label>

          <label>
            <p>$5M</p>
            <span>Raised by Partners</span>
          </label>

          <label>
            <NumberCounter target={150} duration={2000} />
            <span>Client Partnerships</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default Home2Banner;
