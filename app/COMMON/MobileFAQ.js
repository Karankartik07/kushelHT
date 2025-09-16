import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi Solution for mobile app development?',
    answer: 'We bring expertise and affordability, crafting exceptional experiences to enhance your digital presence.',
  },
  {
    question: 'How does Kushel Digi Solution ensure affordable app development?',
    answer: 'We optimise processes, leverage cost-effective tech, and offer tailored solutions for top-notch yet budget-friendly apps.',
  },
  {
    question: 'Whats Kushel Digi Solution s focus on enhancing app user experiences?',
    answer: "We prioritise user-centric design, ensuring seamless and engaging experiences for iOS and Android apps.",
  },
  {
    question: 'Key considerations for successful mobile app development?',
    answer: "Understand your audience, and ensure robust functionality, intuitive design, and regular updates to meet evolving expectations.",
  },
  {
    question: 'Can you assist with ongoing support and maintenance?',
    answer: "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to operate smoothly and evolve with your business needs.",
  },
  {
    question: 'Why is cross-platform development like React Native important?',
    answer: "It's crucial for efficiency, allowing apps compatible with iOS and Android using a single codebase, and saving time and resources.",
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







