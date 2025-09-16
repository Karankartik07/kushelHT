
import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What is headless commerce?',
    answer: 'Headless E-commerce is an E-commerce architecture where the front-end is decoupled from the back-end.',
  },
  {
    question: 'What are the benefits of using a headless commerce solution?',
    answer: 'Benefits of using headless commerce are greater flexibility in design and user experience, improved performance, easier integration with other systems.',
  },
  {
    question: 'How does headless commerce differ from traditional E-commerce platforms?',
    answer: 'Traditional E-commerce platforms are monolithic, with the front-end and back-end tightly coupled whereas headless commerce separates these layers.',
  },
  {
    question: 'Can headless commerce solutions integrate with existing systems and services?',
    answer: "Yes, headless commerce solutions are designed to integrate easily with various third-party systems and services such as payment gateways, shipping providers and other existing systems.",
  },
  {
    question: 'What kind of businesses can benefit from headless commerce?',
    answer: "Headless commerce may be advantageous for businesses of all sizes, especially those seeking more performance and customisation.",
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




