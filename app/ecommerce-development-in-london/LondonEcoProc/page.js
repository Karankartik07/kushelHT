"use client";

import React from "react";
import "./LondonSectionCss.css";
import { useRouter } from "next/navigation";

const steps = [
  {
    number: "01",
    title: "Understanding Business Objectives",
    desc: "We start our work by understanding your goals, target audience and business model. and lets us map out tactics that fit your day-to-day needs.",
    color: "green",
  },
  {
    number: "02",
    title: "Planning Strategically",
    desc: "Then we have a look at competitor sites, industry trends, and real user journeys. The insights let us craft a plan that's truly yours and keeps the path to great results clear.",
    color: "red",
  },
  {
    number: "03",
    title: "E-Commerce Website Design",
    desc: "Our designers build a clean, tempting layout that feels natural and nudges visitors toward the checkout button.",
    color: "orange",
  },
  {
    number: "04",
    title: "Robust Website Development",
    desc: "With code, we shape a speedy, responsive, and expandable shop that performs wherever and on whatever people browse.",
    color: "green",
  },
  {
    number: "05",
    title: "Platform-Specific Solutions",
    desc: "Whether you lean on WooCommerce, Shopify, or a custom setup, we choose the backbone that matches your vision and future growth.",
    color: "red",
  },
  {
    number: "06",
    title: "Integrations with E-Commerce",
    desc: "Your store will be linked to email marketing software, accounting software, ERPs, and shipping companies., because we plug in every tool that streamlines work and saves you clicks.",
    color: "green",
  },
  {
    number: "07",
    title: "Examining",
    desc: "Before the doors open, QA runs security checks, tests on every device, and hunts tiny bugs so that launch day feels smooth.",
    color: "green",
  },
  {
    number: "08",
    title: "Post-Launch Support",
    desc: "After release, we keep watching the numbers, offer quick fixes, and share ideas, so your ecommerce brand never stops climbing.",
    color: "red",
  },
];




export default function Londonecomproc1() {

const navigate = useRouter();

  return (
    <section className="londonecomproc1-section">
      <h2 className="londonecomproc1-heading">
        How Do We Build High-Performing E-Commerce Websites?
      </h2>
      <div className="londonecomproc1-grid">
        {steps.map((step, i) => (
          <div key={i} className={`londonecomproc1-card ${step.color}`}>
            <span className="londonecomproc1-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      {/* <button className="londonecomproc1-connect-btn">Start Your E-Commerce Journey</button> */}
      <button onClick={() => navigate.push('/contact-us')} className="londonecomproc1-connect-btn">
        Start Your E-Commerce Journey
      </button>
    </section>
  );
}
