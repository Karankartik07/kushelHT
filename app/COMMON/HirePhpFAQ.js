import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  { question: "Why hire from an agency, not freelancers?", answer: "Agencies offer a dedicated team, ensuring consistent quality and expertise." },
  { question: "What applications can be created with PHP?", answer: "PHP is versatile, supporting various software applications." },
  { question: "What's the future of PHP?", answer: "PHP continues to be relevant and evolves with updates and enhancements." },
  { question: "How secure is PHP?", answer: "PHP is secure if best practices are followed in development." },
  { question: "From a Security Perspective, How Good is PHP?", answer: "Newer versions, especially, have improved security for PHP. However, as with any programming language, the security of PHP applications depends largely on the skill and diligence of the developer." },
  { question: "On what basis can I hire PHP programmers?", answer: "Consider skills, experience, and portfolio when hiring PHP programmers." },
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
