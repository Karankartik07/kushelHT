"use client";
import React from "react";
import "./ctabelgium.css";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const CallToAction = () => {
      const navigate = useRouter();
  
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <h2 className="cta-heading">
            We can do great things if we work together.
          </h2>
        </div>
        <div className="cta-right">
          <button onClick={() => navigate.push('/contact-us')} className="cta-button">
            Get Your Free Quote Today
            <span className="arrow">
              <HiArrowSmallRight />
            </span>
          </button>
        </div>
      </div>
      <hr className="cta-divider" />
      <p className="cta-subtitle">
        You will start your journey to success on the internet here. If you want
        an online storefront that stands out from the competition, contact us,
        and we can work with you to create it.{" "}
      </p>
    </section>
  );
};

export default CallToAction;
