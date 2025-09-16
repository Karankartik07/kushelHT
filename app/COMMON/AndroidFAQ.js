

import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What are the Services provided by your Android app development agency?',
    answer: 'Our agency offers comprehensive Android app development services.',
  },
  {
    question: 'Do you develop apps for smartphones and tablets?',
    answer: 'Yes, we develop apps for both smartphones and tablets.',
  },
  {
    question: 'What is the timeline for Android app development?',
    answer: 'Development time varies based on project complexity.',
  },
  {
    question: 'What sets your agency apart?',
    answer: "Expertise, innovation, and post-launch support distinguish our agency.",
  },
  {
    question: 'Do you provide Testing and integration services?',
    answer: "Yes, we ensure app quality through testing and can integrate third-party APIs.",
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
