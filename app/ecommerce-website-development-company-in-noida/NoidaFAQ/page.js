"use client";
import { useState } from "react";

const FaqData = [
  {
    question: "How long does it take to build a custom ecommerce website?",
    answer:
      "It typically takes 3 to 6 weeks, as per your requirements. With us, you’ll always get both quality work and on-time delivery.",
  },
  {
    question: "Will I be able to change the products and content after launch?",
    answer:
      "Yes! Our ecommerce development company in Noida provides easy dashboards so you can manage your store without tech skills.",
  },
  {
    question:
      "Do you provide support and maintenance after the site goes live?",
    answer:
      "Yes! We provide ongoing support and maintenance, along with routine updates and performance evaluations tailored to your site’s needs.",
  },
  {
    question:
      "Will my website be mobile-optimized by your ecommerce development company in Noida?",
    answer:
      "All our ecommerce websites are mobile-friendly, responsive, and optimized for viewing on smartphones, tablets, and even desktops.",
  },
  {
    question: "Can you assist with SEO and digital marketing?",
    answer:
      "Traffic boosting services such as digital marketing are at hand alongside the basic SEO configuration we provide, which ensures you have optimized visibility online.",
  },
  {
    question: "Is the integration of payment gateways possible on my store?",
    answer:
      "Definitely! All major payment gateways like Razorpay, Stripe, and PayPal can be securely integrated into your store.",
  },
  {
    question: "Will my store be fast and responsive under traffic loads?",
    answer:
      "Every website is optimized for speed and performance, so a seamless shopping experience is sustained even during heavy traffic periods.",
  },
  {
    question: "Do you collaborate with startups and smaller businesses?",
    answer:
      "Definitely! Our ecommerce website development company in Noida offers solutions for startups, SMEs, and large brands alike.",
  },
];

export default function DelhiFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
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
  );
}
