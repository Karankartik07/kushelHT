"use client"
import React from "react";
import "./wining.css";
import Link from "next/link";
export default function StepSection() {
  return (
    <section className="step-section">
    <div className="tayp">
  <h3 className="step-title">
  Start Smart. Go Headless 
  <br />
  with Kushel Digi Solutions.
  </h3>
  <p className="step-subtitle">
  Follow these 4 simple steps to choose the best approach for headless commerce solutions
  </p>

  <div className="step-cards">
    <div className="step-card">
      <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Group_1171279665_at9s8v.png" alt="Submit a form" />
      <span className="stepp-number">1</span>
      <p className="step-text"> Share Your Goals</p>
    </div>

    <div className="step-card">
      <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Phone-Guide-Icon_1_yisahz.png" alt="Jump on a call" />
      <span className="stepp-number">2</span>
      <p className="step-text">Get on a Strategy Call</p>
    </div>

    <div className="step-card">
      <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Group_1171279668_m7aelj.png" alt="Free consultation" />
      <span className="stepp-number">3</span>
      <p className="step-text">Receive a Proposal</p>
    </div>

    <div className="step-card">
      <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Group_1171279672_qanrno.png" alt="Project estimate" />
      <span className="stepp-number">4</span>
      <p className="step-text">Start Development
      </p>
    </div>
  </div>
  <div className="con-but">
    <Link href="/contact-us">
  <button className="connect-button">LET’S CONNECT →</button> </Link>
  </div>
  </div>
</section>
  );
}