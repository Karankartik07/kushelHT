"use client";
import Image from "next/image";
import React from "react";

export default function RealSuccess() {
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
    <section className="text-center px-6 sm:px-[60px] py-16 max-w-[1720px] mx-auto">
      <h2 className="text-[28px] font-bold mb-2 text-[#111] text-left sm:text-center sm:text-[24px]">
        Real Success, Real Impact
      </h2>
      <p className="text-[#555] text-[16px] max-w-[750px] mx-auto text-left sm:text-center leading-relaxed mb-10">
        Have a look on our stories of success
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-left hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Image
            width={50}
            height={50}
              
              src={service.icon}
              alt={service.title}
              className="w-[50px] h-[50px] mb-5"
            />
            <h3 className="text-[18px] font-semibold text-[#111] mb-3">
              {service.title}
            </h3>

            {service.spanTag && (
              <div className="mt-3 space-y-2 text-sm text-gray-700">
                {service.spanTag.map((tag, i) => (
                  <span
                    key={i}
                    className="block text-[15px] leading-relaxed"
                  >
                    • {tag}
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
