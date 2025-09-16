import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  
  {
    question: 'Why choose Kushel Digi Solutions for UI/UX design?',
    answer: 'Kushel Digi Solutions excels in UI/UX design, offering a perfect blend of creativity, user-centricity, and a skilled team for crafting engaging and intuitive user experiences.',
  },
  {
    question: 'How does Kushel Digi Solutions approach UI/UX to enhance digital products?',
    answer: 'Kushel Digi prioritises a user-centric approach, combining research, creativity, and a deep understanding of user behaviours to design interfaces that captivate and delight users.',
  },
  {
    question: 'What sets Kushel Digi apart in UI/UX design, and how does it benefit clients?',
    answer: "Kushel Digi distinguishes itself through a commitment to innovative design thinking, client-centric practices, and a proficient team dedicated to delivering aesthetically pleasing and functional user experiences.",
  },
  {
    question: 'Key considerations when selecting a UI/UX design service provider?',
    answer: "When choosing a UI/UX design provider, consider factors such as creativity, user research capabilities, and alignment with your brand values for a successful collaboration.",
  },
  {
    question: 'Insights into the latest UI/UX trends and practices?',
    answer: "Stay updated on UI/UX trends by exploring industry insights, and best practices, and engaging with online communities for valuable design perspectives.",
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
             <div className="faq-question faq-ui-ux" onClick={() => toggle(i)}>
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












