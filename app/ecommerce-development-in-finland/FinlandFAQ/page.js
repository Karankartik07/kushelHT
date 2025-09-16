"use client"
import React, { useState } from "react";
const FaqData = [
  {
    question: 'How long does it take to build an ecommerce site?',
    answer: 'The timeline relies on how complicated and big the ecommerce shop is. It takes us 3–4 weeks to make a simple website, and 6–8 weeks to make a unique, complicated website.',
  },
  {
    question: 'Is my online store going to work on phones?',
    answer: 'Without a doubt, our online shops are mobile-friendly and work well on all kinds of devices.',
  },
  {
    question: 'What kind of support do you offer after the launch?',
    answer: 'We offer help and upkeep after the sale, such as solving bugs, changing plugins, and adding new features to make sure the website works well.',
  },
  {
    question: 'Will I be able to keep track of sales and products?',
    answer: "Yes, of course, you will be able to keep track of sales and products. Through our custom-made control tools, you don't even need to know anything about computers to do it.",
  },
  {
    question: 'Can I move my store to a different platform?',
    answer: 'Yes! We make sure that your style, data, and SEO results stay the same during the change with our safe and easy transfer methods.',
  },
  {
    question: 'Are payment channels built in?',
    answer: 'Yes. Security platforms like Stripe, PayPal, Klarna, and Razorpay are built in. These make it possible for safe and easy payment choices during checkout.',
  },
  {
    question: 'Will you be able to change how the software works to fit the way your business works?',
    answer: 'Without a doubt, we create unique, custom, and flexible choices for all types of businesses, whether they are B2B, B2C, D2C, or multi-vendor. Everything is made just for you.',
  },
  {
    question: 'How much does an ecommerce site cost?',
    answer: 'Large businesses, new businesses, and companies that are growing are all provided for. Different factors, like the first choice of style and platform, affect the price of each deal.',
  },
];


const FinlandFAQ = () => {
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

export default FinlandFAQ;













