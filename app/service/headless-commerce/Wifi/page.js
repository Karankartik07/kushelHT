'use client';

import React, { useEffect, useRef, useState } from 'react';
import './wifi.css';

const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ''), 10);
    if (start === end) return;

    const totalDuration = 2000;
    const incrementTime = 20;
    const increment = end / (totalDuration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {target.startsWith('+') ? '+' : ''}
      {count}
      {target.endsWith('%') ? '%' : ''}
    </span>
  );
};

const AgilitySection = () => {
  const [inView, setInView] = useState(false);
        const WifiRef = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.3,
                }
            );
    
            if (WifiRef.current) {
                observer.observe(WifiRef.current);
            }
    
            return () => {
                observer.disconnect();
            };
        }, []);
  return (
    <div className="wifi">
      <h2 className="wifi-title">
        The Smartest Way to Build Digital Retail
      </h2>

      <div className="wifi-stats" ref={WifiRef}>
        <div className="wifi-stat">
        {
                  inView && (
          <div className="wifi-number"><AnimatedNumber target="50%" /></div>
        )
      }
          <div className="wifi-label">FASTER TIME TO MARKET</div>
        </div>
        <div className="wifi-stat">
        {
                  inView && (
          <div className="wifi-number"><AnimatedNumber target="+83%" /></div>
                  ) }
          <div className="wifi-label">AVERAGE ONLINE REVENUE INCREASE</div>
        </div>
        <div className="wifi-stat">
        {
                  inView && (
          <div className="wifi-number"><AnimatedNumber target="+60%" /></div>
                  ) }
          <div className="wifi-label">SITE SPEED INCREASE</div>
        </div>
      </div>
    </div>
  );
};

export default AgilitySection;
