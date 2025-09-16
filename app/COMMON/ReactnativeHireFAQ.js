import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  
  {
    question: 'Can I hire developers of my choice?',
    answer: 'Yes, hiring the right developers for your project is a key advantage.',
  },
  {
    question: 'Why is React Native the best?',
    answer: 'React Native offers cross-platform development, efficiency, and a native-like experience.',
  },
  {
    question: "Do you have experience in integrating native features into React Native apps?",
    answer: 'Yes, our agency has expertise in seamlessly integrating native device features.',
  },
  {
    question: 'Why hire dedicated React Native developers?',
    answer: "Dedicated developers ensure focused attention on your project.",
  },
  {
    question: 'What is the process for hiring a React Native developer?',
    answer: "Contact us, and we'll guide you through the hiring process.",
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












