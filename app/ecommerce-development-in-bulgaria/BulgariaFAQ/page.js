"use client"
import React, { useState } from "react";
const FaqData = [
  {
    question: 'Can you link my online store with a CRM or ERP?',
    answer: 'Definitely! Well, connect your site with the CRM, ERP, accounting, or stock apps you already use so that every order and customer flows to the right place.',
  },
  {
    question: ' Do you create marketplaces where multiple vendors sell?',
    answer: '  Sure thing. Our multi-vendor platforms include custom dashboards, commission rules, safe payments, ratings, and built-in support, giving you everything needed to run a thriving hub.',
  },
  {
    question: ' Will I be able to see what shoppers do and how sales move?',
    answer: " Absolutely; we set up Google Analytics, heat maps, and sales reports, letting you watch clicks, spot trends, and adjust quickly with real numbers behind every choice.",
  },
  {
    question: '  Is training part of the package when the site launches?',
    answer: " Definitely. You'll get friendly step-by-step videos and written guides so adding products, packing orders, or updating pages feels natural, not nerve-wracking.",
  },
  {
    question: 'Can you set up my shop to work in other countries?',
    answer: " For sure. Well, add multi-currency pricing, translated text, and tax rules by region so your store feels familiar to visitors no matter where they log in.",
  },
  {
    question: 'Can you add subscriptions or repeat billing for my products?',
    answer: " You bet. Whether it's a monthly box, software access, or ongoing service, we build secure auto-billing and renewal cycles that keep customers happy and revenue steady.",
  },
  {
    question: 'Can I offer discounts, coupons, and loyalty points in my store?',
    answer: " Absolutely! We can set up tailored promotions, coupon codes, automatic discounts, and a loyalty program to keep customers coming back and excited to buy.",
  },
  {
    question: ' Will my store be compliant with data protection laws like GDPR?',
    answer: "  Yes, it will. We follow industry best practices, including clear cookie banners and easy user controls, to keep your site in line with GDPR and other privacy rules.",
  },
 
];

const BulgariaFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <h2 className="primary-heading">Frequently Asked Questions ?</h2>
      <div className="faqr-container">
        {FaqData.map((item, index) => (
          <div className={`faqr-item ${activeIndex === index ? "expanded" : ""}`} key={index}>
            <div className="faqr-question">
              <h4 className="questionFAQR">{item.question}</h4>
              <button className="toggle-btn" onClick={() => toggleAnswer(index)}>
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            <p className="faqr-answer">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BulgariaFAQ;













