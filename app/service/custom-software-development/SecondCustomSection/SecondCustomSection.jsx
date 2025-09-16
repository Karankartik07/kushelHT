'use client'

import React from 'react';
import "./SecondCustomSection.css"

const SecondCustomSection = () => {
  return (
    <div className='second-custom-section-outer-container'>
        <div className="second-custom-section-inner-container">
          <div className="second-custom-section-left">
              <h3>Get an edge in the competitive digital market with perfectly crafted <strong>custom software development</strong></h3>
              <p>The technology experts at TechAhead use their industry-wide experience to understand the unique requirements and challenges of your business and develop custom software development solutions that make you the right fit for leading the current market trends.</p>
          </div>

          <div className="second-custom-section-right">
            <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746984178/Get-an-edge_o5atz0.png" alt="" />
            {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744626342/Illustration_2x-768x768_yosdzg.webp" alt="" /> */}
          </div>
        </div>
    </div>
  )
}

export default SecondCustomSection