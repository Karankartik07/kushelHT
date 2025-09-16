
import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi Solutions for React Native app development?',
    answer: 'Kushel Digi Solutions combines expertise and innovation to deliver high-quality React Native apps, ensuring a seamless and efficient development process.',
  },
  {
    question: 'How does Kushel Digi Solutions ensure cross-platform compatibility in React Native app development?',
    answer: 'Our developers leverage the power of React Native to create apps that function seamlessly across both iOS and Android platforms, saving time and resources.',
  },
  {
    question: 'What advantages does React Native offer for mobile app development?',
    answer: 'React Native provides a cost-effective and time-efficient solution, allowing the development of cross-platform apps with a single codebase, ensuring consistency and faster time-to-market.',
  },
  {
    question: 'Are there specific industries that benefit most from React Native app development?',
    answer: "React Native is versatile and caters to various industries, including e-commerce, healthcare, and finance, offering a scalable solution for businesses seeking cross-platform mobile applications.",
  },
  {
    question: 'How can I ensure optimal performance for my React Native app?',
    answer: "Optimal performance in React Native apps is achieved through efficient coding practices, regular updates, and compatibility checks with the latest React Native versions",
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
             <div className="faq-question faq-react-native" onClick={() => toggle(i)}>
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











