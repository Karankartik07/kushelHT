"use client";
import React, { useState } from "react";
const FaqData = [
  {
    question:
      "Why should I choose a custom ecommerce development company in Ireland?",
    answer:
      "You should always choose custom ecommerce development because it offers flexibility, fast, responsive, secure and mobile friendliness, ensuring higher conversion rates.",
  },
  {
    question: "Can you build ecommerce websites that are mobile-friendly?",
    answer:
      "Yes, we build fully mobile-responsive websites because we understand that most of the visitors are mobile users.",
  },
  {
    question:
      "Do you support integration with third-party tools like CRM, ERP, and payment gateways?",
    answer:
      "Yes absolutely! We integrate all the essential third-party tools like CRM, ERP and payment gateways for the smooth functioning of your website.",
  },
  {
    question: "Which platforms do you use to build ecommerce websites?",
    answer:
      "We use popular website building platforms like Shopify, BigCommerce and Magento according to your business needs and wants.",
  },
  {
    question: "How long does it usually take to launch an online store?",
    answer:
      "The timeline completely depends on the type of website and its complexity, and features. Basic Online Store- 3-4 weeks Customized Online Store- 4-8 weeks",
  },
  {
    question: "What is the cost of creating an online store?",
    answer:
      "The cost depends on various points like the platform you choose, the type of website you want, and additional add-on features, so the price is completely customizable according to the brand's needs.",
  },
  {
    question: "Can you design custom ecommerce websites to match my brand?",
    answer:
      "As a leading ecommerce website development company in Ireland, we design custom websites that are fast, responsive, secure and mobile-friendly to match your brand.",
  },
  {
    question:
      "Do you provide ongoing support and maintenance after the website goes live?",
    answer:
      "Yes, we provide post-launch support like quickly fixing errors, updating software and plugins and adding additional features. So that you can focus on your business goals.",
  },
];

const IrelandFAQ = () => {
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

export default IrelandFAQ;
