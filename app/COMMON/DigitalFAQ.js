import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi for digital marketing?',
    answer: 'One of the greatest digital marketing Agency in the USA, Kushel Digi Solutions, has been offering its clients the best services for website design, custom web development, mobile app development, SEO, SMO, PPC, SEM, and ORM.',
  },
  {
    question: 'How does Kushel Digi customise digital marketing strategies?',
    answer: 'Kushel Digi tailors strategies by analysing data, identifying target audiences, and implementing campaigns for maximum ROI and brand visibility.',
  },
  {
    question: 'What sets Kushel Digi apart in digital marketing?',
    answer: "Kushel Digi commitment to innovation, client-centric practices, and a proficient team ensures effective and measurable digital marketing solutions.",
  },
  {
    question: 'What sets your agency apart?',
    answer: "Expertise, innovation, and post-launch support distinguish our agency.",
  },
  {
    question: 'Key considerations for choosing a digital marketing provider?',
    answer: "Consider expertise, proven results, and alignment with business objectives when selecting a digital marketing provider.",
  },
  {
    question: 'Insights into the latest digital marketing trends and practices?',
    answer: "Stay informed about digital marketing trends by exploring industry insights, embracing best practices, and engaging with online communities for valuable perspectives.",
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
};

export default FAQ;













