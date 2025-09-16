"use client";
import React from "react";
import "./Homeslidernew.css";

export default function Homeslidernew() {
  const services = [
    {
      icon: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748282768/Mask_group_84_wktybx.png",
      title: "Ecommerce Development",
      desc: "End-to-end development for scalable, high-performing software products.",
      link: "Build Software →",
      spanTag: [
        "BigCommerce",
        "Shopify",
        "Headless",
        "WooCommerce",
        "Custom E-Commerce",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748282769/Mask_group_83_xjfebg.png",
      title: "Application Development",
      desc: "GenAI solutions, data engineering, MLOps, and predictive analytics.",
      link: "Leverage AI →",
      spanTag: [
        "Web development",
        "Mobile app development:",
        "Native",
        "PWA(Progressive Web App)",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748282763/Mask_group_85_bo8liz.png",
      title: "Strategy & Design",
      desc: "Cloud-native application development, migration, CI/CD automation, & secure scalability.",
      link: "Scale Faster →",
      spanTag: [
        "Product Strategy & Roadmap",
        "Product Design",
        "UI/UX Services",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748282762/Mask_group_86_bfmolw.png",
      title: "Managed support services",
      desc: "Tailored solutions & legacy upgrades for future-ready systems.",
      link: "Modernize Now →",
      spanTag: [
        "Application Managed Service",
        "Infrastructure Managed Service",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748282763/Mask_group_87_ya5zpl.png",
      title: "Custom Software Development",
      desc: "Secure SDLC, compliance, and threat prevention through integrated DevSecOps practices.",
      link: "Explore Security →",
      spanTag: [
        "Outsource Product development",
        "Enterprise Software Development",
        "Saas product Development",
        "CRM & ERP Solutions",
        "Integration & API",
        "Legacy Application Modernization",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748282762/Mask_group_88_bvmruv.png",
      title: "Performance Marketing",
      desc: "Rapid app delivery and workflow automation using leading low-code platforms.",
      link: "Build Faster →",
      spanTag: ["SEO", "Social Media Campaigns", "PPC Advertising"],
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p></p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-cardN" key={index}>
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
            {/* <p>{service.desc}</p> */}

            {service.spanTag && (
              <div className="span-tags">
                {service.spanTag.map((tag, i) => (
                  <span key={i} className="service-tag">
                   • {tag} <br></br>{" "}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
