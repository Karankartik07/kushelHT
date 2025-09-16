"use client";
import React, { useState } from "react";
const FaqData = [
  {
    question: "How long does it take to build a custom eCommerce website?",
    answer:
      "This depends on site structure and complexity. We design simple ecommerce websites in 4 to 6 weeks.",
  },
  {
    question:
      "Is it possible to expand my ecommerce website as my company expands?",
    answer:
      "Of course, we understand that expanding a website is very important in this growing world. So, we design expandable ecommerce websites.",
  },
  {
    question: "Do you help with product uploads and catalog setup?",
    answer:
      "In regard to the training session provided for the two-day workshop, we assist in the upload of product category filters, etc., relevant to the training session provided.",
  },
  {
    question: "Will my ecommerce website be secure for online transactions?",
    answer:
      "Of course! You are fully secured along with customers as payment gateways featuring anti-fraud measures, together with SSL, ensure comprehensive protection on your site.",
  },
  {
    question: "Can you integrate shipping and logistics providers?",
    answer:
      "Your order fulfillment system would be automated through our seamless integration with shipping giants FedEx, Delhivery, and even Shiprocket, among many others.",
  },
  {
    question: "What CMS or ecommerce platforms do you recommend?",
    answer:
      "Our team works with Shopify, WooCommerce, Magento, and BigCommerce. We can provide customized solutions based on your technology requirements and ecommerce company.",
  },
  {
    question: "Will my ecommerce website be conversion-optimized?",
    answer:
      "Indeed, we create conversion-optimized websites by applying SEO best practices, ensuring higher conversion rates. ",
  },
  {
    question: "Do you offer ecommerce SEO and other digital marketing support?",
    answer:
      "Yes. Supporting ecommerce optimization, we deploy SEO-ready code, perform designated on-page optimization, as well as implement various digital marketing packages aimed at boosting post-launch traffic and sales during the maintenance phase of the website.",
  },
];

const BelgiumFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <h2 className="primary-heading">Frequently Asked Questions ?</h2>
      <div className="faq-columns">
        {FaqData.map((item, i) => (
          <div className={`faq-item ${openIndex === i ? "open" : ""}`} key={i}>
            <div className="faq-question" onClick={() => toggle(i)}>
              <span>{item.question}</span>
              <button className="toggle-btn">
                {openIndex === i ? "−" : "+"}
              </button>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BelgiumFAQ;
