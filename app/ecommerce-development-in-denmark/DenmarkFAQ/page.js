"use client"
import React, { useState } from "react";
const FaqData = [
  {
    question: 'Which is the leading ecommerce development company in Denmark?',
    answer: 'Kushel Digi Solutions is the leading ecommerce company in Denmark.',
  },
  {
    question: 'Can you audit and SEO optimise the existing ecommerce store?',
    answer: 'Yes, definitely! We can audit and SEO optimise your existing ecommerce store, and it will start ranking in Google SERP.',
  },
  {
    question: 'Do you offer mobile-optimised website designs?',
    answer: 'Yes, we understand most of the visitors are mobile users, so we mobile-optimize ecommerce stores.',
  },
  {
    question: 'Will my ecommerce website be SEO optimised?',
    answer: 'Yes, we implement SEO best practices in creating ecommerce websites.',
  },
  {
    question: 'Do you provide post-launch website support?',
    answer: 'Yes, we are here for you to provide regular maintenance, updates, bug fixes, and support plans so that you can focus on your business.',
  },
  {
    question: 'Do you create custom ecommerce website designs?',
    answer: 'Yes, we believe that no website is the same. So we craft entirely custom, mobile-friendly ecommerce designs that suit your business needs and target audiences.',
  },
  {
    question: 'Will my website expand as my business grows?',
    answer: 'Yes, we create scalable websites that grow along with your brand.',
  },
  {
    question: 'Which platforms do you work with - Shopify, WooCommerce, or Magento?',
    answer: 'We prefer all three platforms. Whether you prefer Shopify, WooCommerce or Magento, we can create a seamless website, choosing any platform that works for your brand.',
  },
];

const DenmarkFAQ = () => {
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

export default DenmarkFAQ;













