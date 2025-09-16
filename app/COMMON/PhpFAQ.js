
import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi for PHP development?',
    answer: "Kushel Digi Solutions excels in PHP web development, offering a blend of innovation, client-centric focus, and a highly skilled team to deliver tailored solutions aligning with your business goals.",
  },
  {
    question: 'How does Kushel Digi use React in PHP projects?',
    answer: 'In PHP web development, Kushel Digi harnesses React to enhance user interfaces, ensuring high performance and seamless user experiences across diverse platforms.',
  },
  {
    question: 'Advantages of Native PHP and how does Kushel Digi use it?',
    answer: 'Native PHP development provides optimal performance and seamless integration. Kushel Digi leverages this to create robust, scalable, and efficient web solutions tailored to client needs.',
  },
  {
    question: 'Key factors in choosing a PHP service provider?',
    answer: "When choosing a PHP web development provider, consider factors such as expertise, proven track record, and alignment with your business objectives for a successful partnership.",
  },
  {
    question: "Insights into PHP's compatibility with web technologies?",
    answer: "PHP is compatible with diverse web technologies, ensuring flexibility and seamless integration.",
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









