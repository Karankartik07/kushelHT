"use client"; 
import React from "react";
import Image from "next/image";
import "./delhiengage.css";

function DelhiEngage() {
  const items = [
    {
      id: "1",
      img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665227/Group1171281669_gbfzak.png",
      text: "Assigned E-Commerce Team",
      pra: "From the initial concept to ongoing support, our dedicated teams help ecommerce businesses at each step.",
      buttonText: "Contact For Further Information",
    },
    {
      id: "2",
      img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665227/how-we-help-you-icon1_tddd2p.png",
      text: "Joined Team Business Model",
      pra: "Do you need extra design and development professionals? Our ecommerce specialists seamlessly join your in-house team whenever required.",
      buttonText: "Hire Specialists Today ",
    },
    {
      id: "3",
      img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665227/how-we-help-you-icon_yrjxo3.png",
      text: "Fixed Cost Model Offer",
      pra: "Recommended to clients with a clear scope of work: transparent pricing, fixed timelines, and guaranteed delivery—no hidden fees or unexpected costs.",
      buttonText: "Request a Free Quote",
    },
  ];

  return (
    <div className="engagement-container">
      <div className="engagement-title">
        <h2>Flexible Engagement Models to Suit Your Business Needs</h2>
      </div>

      <div className="engagement-cards">
        {items.map((item) => (
          <div
            key={item.id}
            className={`engagement-card engagement-card-${item.id}`}
          >
            <div className="engagement-card-set">
              <Image
                src={item.img}
                alt={item.text}
                width={55}
                height={55}
              />
              <h5>{item.text}</h5>
              <p>{item.pra}</p>
            </div>
            <button className="engagement-button">{item.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DelhiEngage;
