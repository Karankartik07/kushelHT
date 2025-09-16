'use client';
import React from 'react';
import './stats.css';

const stats = [
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281270_w0ruti.png",
    title: "Trusted E-commerce Experts",
    values: [
      { number: "150+", label: "Projects Delivered" },
      { number: "100+", label: "Brands Onboard" },
    ],
    className: "card-blue",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281271_y74agq.png",
    title: "Massive E-Commerce Impact",
    values: [
      { number: "1M+", label: "Seamless Order Processed" },
      { number: "1.4M+", label: "Revenue Generated" },
    ],
    className: "card-yellow",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281269_xafwik.png",
    title: "Thriving User Community",
    values: [
      {
        number: "1M+",
        label:
          "Engaged Shoppers | Driving Sales Growth & Strong Customer Loyalty",
      },
    ],
    className: "card-green",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card ${stat.className}`}>
          <div className="stat-icon">
            <img src={stat.icon} alt="icon" />
          </div>
          <h3>{stat.title}</h3>
          <div className="stat-values">
            {stat.values.map((item, idx) => (
              <React.Fragment key={idx}>
                <div>
                  <strong>{item.number}</strong>
                  <span>{item.label}</span>
                </div>
                {idx < stat.values.length - 1 && <div className="divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
