import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'WHY KUSHEL DIGI FOR WORDPRESS DEVELOPMENT?',
    answer: 'Kushel Digi excels in WordPress, offering innovation, client focus, and a skilled team for tailored solutions.',
  },
  {
    question: 'HOW LONG DOES IT TAKE TO BUILD A WORDPRESS WEBSITE?',
    answer: 'The time it takes to build a wordpress website depends on various factors such as the complexity of design,the number of features and functionality required ,and the availability of content.',
  },
  {
    question: 'DO I NEED TECHNICAL KNOWLEDGE TO USE WORDPRESS?',
    answer: 'No, you do not need advance technical Knowledge to use wordpress. Its user-friendly interface and intuitive tools Make it accessible to beginners and non-technical users. However, basic familiarity with web concepts such as domains, hosting and content management is helpful.',
  },
  {
    question: 'CAN I CUSTOMISE THE DESIGN OF MY WORDPRESS WEBSITE?',
    answer: "Yes,WordPress allows for extensive Customization of website design. Users can choose from thousands of free and Premium themes to give website a unique Look and feel. Additionally, themes can be customised using built-in customization options or by editing the underlying code.",
  },
  {
    question: 'WHAT ARE WORDPRESS PLUGINS?',
    answer: "WordPress plugins are software add-ons that extend the functionality of a WordPress website. There are thousands of plugins available for various purposes such as SEO optimization,contact forms,e-commerce Social media integration and more.",
  },

];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
     <section className="faqr-section">
        <h2 className="primary-heading ">Frequently Asked Questions ?</h2>
        <div className="faq-columns">
          {FaqData.map((item, i) => (
            <div
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              key={i}
            >
              <div className="faq-question freq-ask-q" onClick={() => toggle(i)}>
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














