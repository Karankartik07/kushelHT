'use client';
import React from 'react';
import './cardstats.css'

const stats = [
  {
    icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1756454126/Group_1171281737_q5zet9.png',
    title: 'Beautiful Online Store ',
    
 
    className: 'card-blue',
  },
  {
    icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1756454127/Group_1171281271_mfvmek.png',
    title: 'Multiple Payment Gateways',
  
    className: 'card-yellow',
  },
  {
    icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1756454126/Group_1171281740_nhituw.png',
    title: 'Shipping Integration',
  
    className: 'card-greenN',
  },
  {
    icon: 'https://res.cloudinary.com/dxlykgx6w/image/upload/v1756454126/Group_1171281742_kvmlvn.png',
    title: 'Mobile Optimized',
   
    className: 'card-greenN',
  },
];

const CardStats = () => {
  return (
    <section className="stats-section-new">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card ${stat.className}`}>
          <div className="stat-icon">
            <img src={stat.icon} alt="icon" />
          </div>
          <h3>{stat.title}</h3>
          <div className="stat-values">
            {stat.values?.map((item, idx) => (
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

export default CardStats;
