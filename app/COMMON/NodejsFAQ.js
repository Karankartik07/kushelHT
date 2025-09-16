import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why Kushel Digi for Node.js development?',
    answer: 'Kushel Digi excels in Node.js, offering innovation, client focus, and a skilled team for tailored solutions.',
  },
  {
    question: 'How does Kushel Digi use Node.js for web projects?',
    answer: 'Node.js empowers Kushel Digi to build scalable, high-performance web applications through its non-blocking, event-driven architecture.',
  },
  {
    question: 'What sets Kushel Digi apart in Node.js development?',
    answer: "Kushel Digi's commitment to innovation, client-centric practices, and a skilled team ensures customised, high-quality Node.js solutions.",
  },
  {
    question: 'Key considerations for selecting a Node.js service provider?',
    answer: "Consider expertise, a proven track record, and alignment with business goals when choosing a Node.js service provider.",
  },
  {
    question: 'Insights into Node.js trends and best practices?',
    answer: "Stay informed about the dynamic Node.js landscape by exploring industry trends, adhering to best practices, and actively engaging with online communities.",
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








