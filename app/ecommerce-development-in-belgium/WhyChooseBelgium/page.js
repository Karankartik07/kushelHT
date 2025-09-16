"use client";
import React from "react";
import "./whybelgium.css";

const features = [
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073420/Group_1171281413_b7dwf6.png",
    title: "Focused on Results",
    desc: "We don’t talk fluff, provides one real results and value your demands.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073419/Group_1171281412_m4wjmx.png",
    title: "Strategic Technical Expertise",
    desc: "Our expert team creates ecommerce websites that are goal-oriented.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073409/Group_1171281523_k2vfml.png",
    title: "Delivery on Time",
    desc: "We are focused on deadlines. We promise timely delivery no matter what the size and complexity are. ",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281524_ksva3g.png",
    title: "End-to-End Maintenance & Support  ",
    desc: "Your online store will always be backed up, whether it’s bug repairs or feature extensions.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281525_qnpwgi.png",
    title: "Highly Scalable  ",
    desc: "Our ecommerce solutions are agnostic to traffic surges as well as future business expansion plans.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281414_nyzkrn.png",
    title: "Fully Confidential And Secure  ",
    desc: "With strong NDAs and enterprise-grade security in place, business data stays protected.",
  },
];

const WhyChooseBelgium = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-wrapper">
        <h2 className="why-choose-heading">
          Why Choose Kushel Digi Solutions?
        </h2>
        <p className="why-choose-subtext">
          We design and build ecommerce systems that grow with your business and
          give you the best results in the industry at every stage. Everything
          is taken care of, from planning to help.
        </p>
      </div>

      <div className="why-choose-container">
        <div className="why-choose-left">
          <img
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750331416/Group_1171281538_c0mfbg.png"
            alt="why choose kushel digi solutions"
          />
        </div>

        <div className="why-choose-right">
          <div className="why-choose-features">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="feature-texts">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBelgium;
