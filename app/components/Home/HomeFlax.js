"use client";
import React from "react";
import "./homeBan.css";
import Image from "next/image";

const flagshipData = [
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1743511655/m1_a4lm2y_av5bgd.jpg",
    alt: "Product image example for ecommerce website development ",
    title: "Ecommerce development",
    points: [
      "Expertise in ecommerce",
      "Certified developers",
      "Transparent development process",
      "Product-centric approach",
      "Technology integration",
      "Secure payment gateway integration",
    ],
  },
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1743512070/m2_gfvosm_ozm8ho.jpg",
    alt: "Category thumbnail for ecommerce website development ",
    title: "Ecommerce consulting",
    points: [
      "Comprehensive website audit",
      "In-depth code review",
      "UX audit",
      "UX/UI analysis",
      "Custom ecommerce redesign",
      "Conversion rate optimisation",
      "Data-driven recommendations",
    ],
  },
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1743512200/m3_iuyndc_dx2bfo.jpg",
    alt: "Featured product thumbnail for online store",
    title: "Replatforming",
    points: [
      "Seamless migration",
      "Customized migration roadmap",
      "Risk assessment",
      "Backup and recovery planning",
      "Database migration",
      "Product list transfer",
    ],
  },
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1743512303/m4_miupd6_luofo2.jpg",
    alt: "Product image example for ecommerce website development project",
    title: "Mobile development",
    points: [
      "Mobile commerce Optimization",
      "Excellent shopping experience.",
      "Custom mobile app integration",
      "Easy checkout",
      "Cross-platform compatibility",
      "Payment gateway",
    ],
  },
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1743512907/m6_klddr8_msygqp.jpg",
    alt: "Team collaboration image icon for ecommerce website development",
    title: "Ecommerce design",
    points: [
      "User-centric designs",
      "Customized UI/UX",
      "Modern aesthetics",
      "Optimized load times",
      "Mobile-friendly design",
    ],
  },
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1743512716/m5_nuxmzb_rauksj.jpg",
    alt: "Creative design concept icon for BigCommerce website development",
    title: "Technical support",
    points: [
      "24/7 expert assistance",
      "Proactive monitoring",
      "Quick response",
      "Secure data backup",
      "Performance optimization",
      "Scalability support",
    ],
  },
];

function Flagship() {
  return (
    <section className="flagship-section">
      <h3 className="flagship-head primary-heading">
        Building the Future of Ecommerce
      </h3>
      <div className="flagship-cards">
        {flagshipData.map((item, index) => (
          <div key={index} className="flagship-card">
            <div className="flagship-logo">
              <Image
                width={26}
                height={22}
                loading="lazy"
                src={item.img}
                alt={item.alt}
              />
            </div>
            <h3>{item.title}</h3>
            <ul className="flagship-ul">
              {item.points.map((point, i) => (
                <li key={i} className="flagship-li">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flagship;
