import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What are the Services offered for flutter app development?',
    answer: 'Comprehensive services including design, development, testing, deployment, and support.',
  },
  {
    question: 'Give some Examples of flutter apps developed by you.',
    answer: 'Yes, we can showcase our portfolio of past flutter projects.',
  },
  {
    question: 'What are the Benefits of using flutter?',
    answer: 'Code reusability, single codebase for Android and iOS, customizable widgets, hot reload, and high performance.',
  },
  {
    question: 'Do you provide Experience with native device features in flutter?',
    answer: "Yes, our developers integrate native features seamlessly.",
  },
  {
    question: 'Do you provide Post-launch support for flutter apps?',
    answer: "Yes, we provide ongoing support to ensure app functionality and security.",
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
  }

export default FAQ;

