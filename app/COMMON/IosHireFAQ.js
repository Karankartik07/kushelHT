import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why should I hire an iOS app development agency for my project?',
    answer: 'Hiring an iOS app development agency ensures increased project reliability through structured methodology and quality assurance, leveraging specialised teams with expertise in iOS standards.',
  },
  {
    question: 'What kinds of iOS applications can an agency develop?',
    answer: 'iOS app development agencies can create various applications, including consumer, business, gaming, e-commerce, healthcare, education, and more.',
  },
  {
    question: 'How do I know iOS is right for my app?',
    answer: 'If your target audience comprises Apple device users, especially a high-paying segment, and if you plan to sell your app on the App Store, then iOS is the best strategy for you.',
  },
  {
    question: 'Do iOS app development agencies develop apps for both iPhones and iPads?',
    answer: "Yes, most agencies design apps that seamlessly work on both iPhones and iPads, accommodating different screen sizes and functionalities.",
  },
  {
    question: 'How can an iOS app development agency help with updating and maintaining the program?',
    answer: "Agencies assist with regular updates, bug fixes, feature additions, and maintaining compatibility with the latest iOS versions, ensuring sustained functionality and security.",
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






