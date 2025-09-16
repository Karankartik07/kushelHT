"use client";
import { useState } from "react";


const FaqData = [
   {
    question: 'Would it be possible for you to integrate my online shop with  ERP and CRM platforms?',
    answer: 'Our ecommerce development services provide full automation by facilitating connections to all the main enterprise resource planning (ERP) and customer relationship management (CRM) systems.',
  },
  {
    question: 'Do you build multi-vendor ecommerce marketplaces?',
    answer: 'Of course! With years of expertise in the field, our ecommerce development team creates robust systems that can accommodate many vendors, complete with commission settings, vendor panels, and more.',
  },
  {
    question: 'Can I get real-time data on sales and customer behavior?',
    answer: "Yes, we can link your store to robust analytics tools that provide real-time insights into user behavior, sales, and product performance.",
  },
  {
    question: 'Is training offered after the launch of the ecommerce site?',
    answer: "Yes, we provide comprehensive training and documentation to ensure that you and your team can effortlessly manage the online store once it launches.",
  },
  {
    question: 'Can you devise a global ecommerce system that supports several languages and currencies?',
    answer: "You may sell anywhere in the globe with our ecommerce development solutions. Things like shipping to different nations, translating languages, and currency conversion are all part of them.",
  },
  {
    question: 'Can you assist me with creating a subscription-based online store?',
    answer: "I would guarantee it. Your online shop may have features like auto-renewal, subscription plans, and recurring payments added to it according to your company's needs.",
  },
  {
    question: 'Is it okay to provide rewards, discounts, and flash sales to loyal customers?',
    answer: "Our one-of-a-kind promotional tools include loyalty point systems, referral rewards, bulk discounts, and coupon codes.",
  },
  {
    question: 'Is my online store going to adhere to the regulations of data protection and GDPR?',
    answer: "To guarantee the safety of our customers, we check that every one of our ecommerce sites adheres to GDPR and other international data protection regulations.",
  },
];

export default function DelhiFAQ () {
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




















