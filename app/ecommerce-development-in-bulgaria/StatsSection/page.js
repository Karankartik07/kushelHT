'use client';
import React from 'react';
import './stats.css';

const stats = [
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281270_w0ruti.png",
    title: "Success Stories in E-Commerce",
    values: [
      { number: "120+", label: "Successful Projects Delivered" },
      { number: "100+", label: "Reliable Brands & Customers" },
    ],
    className: "card-blue",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281271_y74agq.png",
    title: "Driving Actual Results",
    values: [
      { number: "1M+", label: "Processed orders without a hitch" },
      { number: "£2M+", label: "RevRevenue Generated" },
    ],
    className: "card-yellow",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281269_xafwik.png",
    title: "Expanding Community",
    values: [
      {
        number: "1.2M+",
        label:
          "Active & Engaged Customers | increasing long-term revenue growth, client loyalty, and repeat business.",
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
