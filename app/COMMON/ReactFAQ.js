
import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi for React.js development?',
    answer: 'Kushel Digi Solutions stands out in React.js development, offering a unique blend of innovation, client-centricity, and a skilled team for tailored solutions aligned with your business needs.',
  },
  {
    question: 'How does Kushel Digi use React.js to enhance web development projects?',
    answer: 'React.js is harnessed by Kushel Digi to elevate web development, providing dynamic and responsive user interfaces that enhance overall user experiences.',
  },
  {
    question: 'What sets Kushel Digi apart in React.js development, and how does it benefit clients?',
    answer: "Kushel Digi distinguishes itself through a dedication to innovation, client-centric practices, and a proficient team committed to delivering customised, high-quality React.js solutions that meet and exceed client expectations.",
  },
  {
    question: 'Key factors in choosing a React.js service provider?',
    answer: "Consider expertise, a proven track record, and alignment with business objectives when selecting a React.js service provider for successful and efficient collaboration.",
  },
  {
    question: 'Insights into the latest trends and best practices in React.js development?',
    answer: "Stay informed about the dynamic landscape of React.js development by exploring industry trends, adhering to best practices, and actively engaging with online communities for valuable insights.",
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
             <div className="faq-question " onClick={() => toggle(i)}>
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









