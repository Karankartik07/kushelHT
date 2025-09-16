"use client";
import React from "react";
import "./ctalondon.css";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const navigate = useRouter();

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <h2 className="cta-heading">
            Together, We Can Create Something Extraordinary
          </h2>
        </div>
        <div className="cta-right">
          <button
            onClick={() => navigate.push("/contact-us")}
            className="cta-button"
          >
            Call Now for a No-Hassle Quotation!
            <span className="arrow">
              <HiArrowSmallRight />
            </span>
          </button>
        </div>
      </div>
      <hr className="cta-divider" />
      <p className="cta-subtitle">
        Embarking on your journey to internet success begins right here. Please
        get in touch so that we can work together to develop an online
        storefront for your company that stands out.{" "}
      </p>
    </section>
  );
};

export default CallToAction;
