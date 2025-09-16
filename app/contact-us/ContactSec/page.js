"use client"
import React, { useEffect, useRef, useState } from 'react';
import './ContactSec.css';


const ContactSec = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePopup = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const leftItems = [
    {

      title: (

        <>

          Free Discovery Call
        </>
      ),
      popup: "We begin the process by getting your business objectives, project needs and vision. Our team listens attentively, asks good questions, and assists you in crafting your idea into a well-defined concept with promise.",
    },
    {
      title: (
        <>
          Custom Project Plan
        </>
      ),
      popup: "Based on our discovery call, we understand the vision and thereby create a customized proposal and roadmap including timelines, technologies, budget, and strategic direction, so you'll know precisely what to anticipate.",
    },
    {
      title: (
        <>
          Design & Strategy Mockups
        </>
      ),
      popup: "Your visionary ideas are brought to life by our designers in the form of visual layouts and wireframes. We give you a vision of your future website or product so that you can provide feedback prior to development. ",
    },
    {
      title: (
        <>
          Go-to-Market Roadmap
        </>
      ),
      popup: "We create an overall strategy for your launch. From beta testing to user onboarding and full-scale rollout, we ensure each stage is synchronized with your target audience and business objectives.",
    },
    {
      title: <> Final Sync </>,
      popup: "Before development begins, we get everything in sync - the scope, team, deliverables, and timelines. Once locked in, our expert team get  into action to deliver your vision with precision and passion.",
    },
  ];

  const [inView, setInView] = useState(false);
      const animateRef = useRef(null);
  
      useEffect(() => {
          const observer = new IntersectionObserver(
              ([entry]) => {
                  if (entry.isIntersecting) {
                      setInView(true);
                      observer.disconnect();
                  }
              },
              {
                  threshold: 0.3,
              }
          );
  
          if (animateRef.current) {
              observer.observe(animateRef.current);
          }
  
          return () => {
              observer.disconnect();
          };
      }, []);

  return (
    <section className='mainDsContain'>
      <div className='mainDsDiv'>
        <p className='mainDsDivtitle'>Let’s Build Something Great</p>
        <div className='mainDsDivNum'>
          <p>Idea to Execution</p>
          <svg
            className="from0to1-underline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 20"
            preserveAspectRatio="none"
          >
            <path
              d="M5 15 Q 100 0 195 15"
              stroke="black"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>

      </div>
      <div className="ds25-container">

        <div className="ds25-left">
          <div className="ds25-arrow-wrapper">
            <svg
              className="ds25-arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M90,10 C50,10 10,50 50,90"
                stroke="#0c61ff"
                strokeWidth="6"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="0"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#0c61ff" />
                </marker>
              </defs>
            </svg>

          </div>
          {leftItems.map((item, index) => (
            <div className="ds25-left-item" key={index} ref={animateRef}>

              <p className='ds25Content'>{item.title}</p>

              {
                  inView && (
                    <span
                    className="ds25-plus"
                    onClick={() => togglePopup(index)}
                  >
                    {activeIndex === index ? '×' : '+'}
                  </span>
                  )
                 }
            

              {activeIndex === index && (
                <div className="ds25-popup" >
                   <span
                    className="ds25-popupclose"
                    onClick={() => togglePopup(index)}
                  >
                    {activeIndex === index ? '×' : '+'}
                    </span>
                  <h4 className="ds25-step-title">Step {index + 1}</h4>
                  <p>{item.popup}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ds25-right">

          {[
            "In this phase, we will understand your project goals, requirements and vision. ",
            "In this phase you will receive a clear roadmap and proposal according to your business needs.",
            "We’ll create the designs and layouts according to your idea before development begins.",
            "We will guide every phase of your product journey from beta testing to launching.",
            "We finalize everything and assign our expert team to deliver your project with right strategy. ",
          ].map((text, index, arr) => (
            <div className="ds25-step-wrapper" key={index}>
              <div className="ds25-step">
                <div className="ds25-step-num">{index + 1}</div>
                <div className="ds25-step-text">{text}</div>
              </div>
              {index === arr.length - 1 && (
                <svg
                  className="ds25-bottom-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 30 60"
                  fill="none"
                >
                  <path
                    d="M15 0 V50"
                    stroke="#0c61ff"
                    strokeWidth="4"
                  />
                  <path
                    d="M5 45 L15 55 L25 45"
                    stroke="#0c61ff"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactSec;
