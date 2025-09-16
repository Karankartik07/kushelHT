"use client";
import React, { useEffect, useState } from "react";
import "../../../COMMON/FAQ.css";
const FaqData = [
  {
    question: "Why should I choose Shopify for my eCommerce business?",
    answer:
      " Shopify is definitely very easy to use, quick and even includes all you need to start selling online, including hosting, payment processing, and marketing features.",
  },
  {
    question: "Can I sell on social media sites by using Shopify?",
    answer:
      " Yes. Shopify integrates with Facebook, Instagram, TikTok, and more to help you sell across multiple channels.",
  },
  {
    question: "Does Shopify support dropshipping?",
    answer:
      " Absolutely. You can easily Shopify automate drop shipping using apps like Oberlo or Spocket. ",
  },
  {
    question: "How customizable is a Shopify theme?",
    answer:
      "Shopify offers many free and paid themes, which can be customized using the drag-and-drop editor or Liquid (its template language).",
  },
  {
    question: "What type of support does Shopify provide?",
    answer:
      " Shopify provides your business 24/7 customer support through live chat, phone, and email as well as a massive community.",
  },
  {
    question: "Can I migrate my store to Shopify from another platform?",
    answer:
      " Yes, Shopify provides various tools to migrate and third-party services to assist you in transferring products, content, and customer data seamlessly.",
  },
  {
    question: "How secure is a Shopify store?",
    answer:
      " Shopify is Level 1 PCI compliant, uses SSL encryption, and has automatic updates to keep your store secure.",
  },
  {
    question: "Is Shopify good for international selling?",
    answer:
      "  Yes, Shopify supports multiple currencies, languages, and international shipping features for global reach.",
  },
  {
    question: "Can I use my own domain with Shopify?",
    answer:
      " Yes. You can either map your own existing domain or buy a new one directly via Shopify.",
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
};

export default FAQ;
