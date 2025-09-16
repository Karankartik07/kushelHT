"use client";

import React, { useState } from "react";

const FaqData = [
  {
    question: "What services does Kushel Digi Solutions offer?",
    answer:
      "We provide a range of services including eCommerce development, UI/UX design, mobile app development, website design and development, and digital marketing.",
  },
  {
    question: "How can Kushel Digi Solutions help my business grow?",
    answer:
      "Our excellent digital solutions are designed to enhance your online presence, drive sales, and improve user engagement, helping your business achieve its growth objectives.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your needs and provide a customized plan.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on the scope and complexity of the work. We'll provide a detailed timeline and keep you informed throughout the development process.",
  },
  {
    question: "Can you assist with ongoing support and maintenance?",
    answer:
      "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to operate smoothly and evolve with your business needs.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Absolutely. We specialize in creating bespoke solutions tailored to your specific business requirements and goals.",
  },
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1720px] mx-auto sm:px-12 py-12 px-6">
      <h2 className="text-[20px] md:text-[2.2rem] font-semibold mb-5 border-b-[3px] border-gray-400 pb-2 sm:text-2xl text-left ">
        Frequently Asked Questions ?
      </h2>

      <div className="mt-5 bg-gray-100 rounded-xl p-3 columns-[500px] gap-4 sm:p-4">
        {FaqData.map((item, i) => (
          <div
            key={i}
            className={`inline-block w-full bg-white mb-4 rounded-xl shadow-md transition-all duration-300`}
          >
            <div
              className="flex justify-between items-center px-5 py-5 cursor-pointer gap-4  sm:!h-[98px] sm:py-4 font-semibold text-lg sm:text-base"
              onClick={() => toggle(i)}
            >
              <span className="text-black text-[14px] md:text-[20px]">{item.question}</span>
              <button
                className={`w-8 h-8 flex justify-center items-center text-gray-600 rounded-md bg-blue-100 transition-colors duration-300 ${
                  openIndex === i ? "bg-blue-200" : ""
                }`}
              >
                {openIndex === i ? "−" : "+"}
              </button>
            </div>
            <div
              className={`overflow-hidden text-gray-700 transition-all duration-300 px-5 ${
                openIndex === i ? "max-h-[200px] py-5" : "max-h-0 py-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFAQ;
