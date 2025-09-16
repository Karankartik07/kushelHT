"use client";
import React, { useState } from "react";
import "../../../COMMON/FAQ.css";
import Head from "next/head";

const FaqData = [
  {
    question:
      "What is BigCommerce and how is it different from other platforms?",
    answer:
      " BigCommerce is a cloud-based eCommerce platform that allows businesses to build, run, and grow online stores.",
  },
  {
    question:
      "Is BigCommerce suitable for small businesses or only enterprises?",
    answer:
      "We start with an in depth understanding of your brand's vision and values and then create designs that reflect your unique identity. We also take your feedback at each stage to ensure alignment.",
  },
  {
    question: "How customizable is a BigCommerce store?",
    answer:
      "BigCommerce provides  full customization by using HTML, CSS, and its Stencil theme framework.",
  },
  {
    question: "Can BigCommerce integrate with third-party apps and tools?",
    answer:
      "Yes, BigCommerce supports integration with popular CRMs, ERPs, payment gateways, and marketing tools by  its API.",
  },
  {
    question: "Is BigCommerce SEO-friendly?",
    answer:
      "Absolutely. BigCommerce has built-in SEO features like customizable URLs, metadata, automatic sitemaps and fast loading speeds.",
  },
  {
    question: "Can I migrate my existing website to BigCommerce?",
    answer:
      "Yes, it  supports migration from platforms like Shopify, Magento, and WooCommerce.",
  },
  {
    question: "Does BigCommerce support multi-channel selling?",
    answer:
      "Yes. You can sell on Amazon, eBay, Facebook, Instagram, and Google Shopping directly from your BigCommerce dashboard.",
  },
  {
    question: "Is it easy to manage inventory on BigCommerce?",
    answer:
      "Its very easy to manage inventory on BigCommerce as it provides real-time inventory management, bulk editing tools and alerts for low stock.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta
          property="og:title"
          content="Kushel Digi | Expert eCommerce Development Services"
        />
        <meta
          property="og:description"
          content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
        />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kushel Digi | Expert eCommerce Development Services"
        />
        <meta
          name="twitter:description"
          content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
        />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>
      <h2 className="primary-heading">Frequently Asked Questions ?</h2>
      <div className="faq-columns">
        {FaqData.map((item, i) => (
          <div className={`faq-item ${openIndex === i ? "open" : ""}`} key={i}>
            <div className="faq-question" onClick={() => toggle(i)}>
              <span>{item.question}</span>
              <button className="toggle-btn">
                {openIndex === i ? "−" : "+"}
              </button>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
    // <section className="faqr-section">
    //   <Head>
    //     {/* Open Graph (OG) Meta Tags */}
    //     <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
    //     <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
    //     <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
    //     <meta property="og:url" content="https://www.kusheldigi.com/" />
    //     <meta property="og:type" content="website" />

    //     {/* Twitter Card Meta Tags */}
    //     <meta name="twitter:card" content="summary_large_image" />
    //     <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
    //     <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
    //     <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
    //     <meta name="twitter:url" content="https://www.kusheldigi.com/" />
    //   </Head>
    //   <h2>Frequently Asked Questions ?</h2>
    //   <div className="faqr-container">
    //     {FaqData.map((item, index) => (
    //       <div className={`faqr-item ${activeIndex === index ? "expanded" : ""}`} key={index}>
    //         <div className="faqr-question">
    //           <h4 className="questionFAQR">{item.question}</h4>
    //           <button className="toggle-btn" onClick={() => toggleAnswer(index)}>
    //             {activeIndex === index ? "-" : "+"}
    //           </button>
    //         </div>
    //         <p className="faqr-answer">
    //           {item.answer}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
};

export default FAQ;
