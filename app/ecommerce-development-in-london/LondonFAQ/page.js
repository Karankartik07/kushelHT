"use client"
import React, { useState } from "react";
const FaqData = [
  {
    question: 'Can you connect my online store with CRM or ERP systems?',
    answer: 'Yes, we will connect your site with the CRM, ERP, accounting, or stock apps.',
  },
  {
    question: 'Do you build marketplaces with multiple vendors?',
    answer: 'Sure thing. Our multi-vendor platforms include custom dashboards, commission rules, safe payments, ratings, and built-in support, giving you everything needed to run a thriving hub.',
  },
  {
    question: 'Can I track user activity and sales performance on my store?',
    answer: 'Absolutely, we set up Google Analytics, heat maps, and sales reports, letting you watch clicks, spot trends, and adjust quickly with real numbers behind every choice.',
  },
  {
    question: 'Will I receive training when the site goes live?',
    answer: "Definitely, you'll get friendly step-by-step videos and written guides so adding products, packing orders, or updating pages feels natural, not nerve-wracking.",
  },
  {
    question: 'Can you make my store work internationally?',
    answer: 'For sure. We’ll add multi-currency pricing, translated text, and tax rules by region so your store feels familiar to visitors no matter where they log in.',
  },
  {
    question: 'Is it possible to add subscriptions or recurring billing?',
    answer: "You bet. Whether it's a monthly box, software access, or ongoing service, we build secure auto-billing and renewal cycles that keep customers happy and revenue steady.",
  },
  {
    question: 'Can I run promotions like discounts, coupons, and loyalty rewards?',
    answer: 'Absolutely! We can set up tailored promotions, coupon codes, automatic discounts, and a loyalty program to keep customers coming back and excited to buy.',
  },
  {
    question: 'Will my store comply with data privacy laws like GDPR?',
    answer: 'Yes, it will. We follow industry best practices, including clear cookie banners and easy user controls, to keep your site in line with GDPR and other privacy rules.',
  },
];


const LondonFAQ = () => {
   const [openIndex, setOpenIndex] = useState(null);
  
    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
     <section className="faqr-section">
        <h2 className="primary-heading">Frequently Asked Questions ?</h2>
        <div className="faq-columns">
          {FaqData.map((item, i) => (
            <div
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              key={i}
            >
              <div className="faq-question" onClick={() => toggle(i)}>
                <span>{item.question}</span>
                <button className="toggle-btn">{openIndex === i ? "−" : "+"}</button>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

export default LondonFAQ;













