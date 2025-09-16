import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'On what platforms do you excel in eCommerce development?',
    answer: '  We excel at Shopify, BigCommerce, WooCommerce, Magento, and custom development using frameworks like React.js, Next.js, and Node.js- giving you the ideal platform for your business.',
  },
  {
    question: 'Do you offer custom eCommerce website design?',
    answer: '  Yes, we design entirely custom, mobile-friendly eCommerce designs that suit your brand identity and ensure an uninterrupted user experience on any device.',
  },
  {
    question: ' Can you optimize an existing eCommerce store?',
    answer: " Yes! Whether speed optimization, design update, or feature enhancements, we can optimize your existing store to perform better and convert more visitors into customers.",
  },
  {
    question: ' Do your eCommerce websites have multiple payment gateways?',
    answer: " Yes, we support all leading payment gateways such as PayPal, Stripe, Square, Razorpay, and many more, depending on your regional and global business requirements.",
  },
  {
    question: 'Will my website be SEO-friendly?',
    answer: " All of our eCommerce sites are designed using SEO best practices, such as optimized URLs, meta tags, schema markup, and quick page loads to maximize your search engine visibility.",
  },
  {
    question: 'Do you offer mobile-first or responsive design?',
    answer: " Yes, we follow mobile-first design best practices to ensure your site performs and appears great on smartphones, tablets, and desktops.",
  },
  {
    question: 'Will I be able to look after my products and orders myself?',
    answer: " Absolutely. We create an easy-to-use admin panel, and we also include training so that you can simply add products, track inventory, and process orders yourself.",
  },
  {
    question: ' Do you offer post-launch support and maintenance?',
    answer: "  Yes, we provide regular maintenance, updates, bug fixes, and support plans to keep your store fast, secure, and current.",
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













