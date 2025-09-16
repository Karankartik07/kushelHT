'use client';
import React from 'react';
import './stats.css';

const stats = [
  {
    icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281270_w0ruti.png',
    title: 'Proven E-Commerce Proficiency ',
    
    values: [
      { number: '110+', label: 'Custom Projects Started ' },
      { number: '130+', label: 'Contented Clients Globally' },
    ],
    className: 'card-blue',
  },
  {
    icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281271_y74agq.png',
    title: 'Powering Real E-Commerce Impact',
    values: [
      { number: '1.5M+', label: 'Orders Fulfilled Effortlessly' },
      { number: '2M+', label: 'in Sales Empowered' },
    ],
    className: 'card-yellow',
  },
  {
    icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281269_xafwik.png',
    title: 'Thriving Customer Communities',
    values: [
      {
        number: '1M+',
        label:
          'Active shoppers and growing | increasing recurring business, long-term revenue, and loyalty',
      },
    ],
    className: 'card-green',
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
