"use client";

import React, { useState } from "react";
import "../../COMMON/FAQ.css";
const FaqData = [
  {
    question: "What services does Kushel Digi Solutions offer?",
    answer:
      "We provide a range of services including eCommerce development, UI/UX design, mobile app development, website design and development, and digital marketing.",
  },
  {
    question: "How can Kushel Digi Solutions help my business grow?",
    answer:
      "Our excellent digital solutions are designed to enhance your online presence, drive sales, and improve user engagement, helping your business achieve its growth objectives.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your needs and provide a customized plan.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on the scope and complexity of the work. We'll provide a detailed timeline and keep you informed throughout the development process.",
  },
  {
    question: "Can you assist with ongoing support and maintenance?",
    answer:
      "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to operate smoothly and evolve with your business needs.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Absolutely. We specialize in creating bespoke solutions tailored to your specific business requirements and goals.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <h2 className="primary-heading">Frequently Asked Questions ?</h2>
      <div className="faq-columns">
        {FaqData.map((item, i) => (
          <div className={`faq-item${openIndex === i ? " open" : ""}`} key={i}>
            <div className="faq-question" onClick={() => toggle(i)}>
              <span>{item.question}</span>
              <button className="toggle-btn" tabIndex={-1} aria-hidden="true">
                {openIndex === i ? "−" : "+"}
              </button>
            </div>
            <div
              className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                maxHeight: openIndex === i ? "500px" : "0px",
                opacity: openIndex === i ? 1 : 0,
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
