'use client';

import React from 'react'

const TalkToConsult = ({btn}) => {
    const scrollToForm = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
          const yOffset = -120; 
          const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };
  return (
    <button onClick={scrollToForm} className={btn}>Talk to a Consultant</button>
  )
}

export default TalkToConsult