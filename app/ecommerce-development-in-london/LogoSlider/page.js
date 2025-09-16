'use client';
import React from 'react';
import './logoslider.css';

const logos = [
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058141/Slide365_Logo_1_dl6uhl.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058141/KICK-EEZ_LOGO_1_kyii70.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058140/lafa_1_zsxud4.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058143/d85082eed801202e5dcf027b90963fd5e1980c8a_jnzx0s.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058140/38df8579fe08dc78b682b730315080dd8ea4dab2_q8vloz.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058140/6d9da17006b6043f33f1fcd495b4fccd7e6b0f1c_v7lntv.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058264/Group_1171281499_gcmejx.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058141/c7627b2becfd44555f43f3287e7c9d095e23c6b9_k3msb7.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058141/f1a9dd646ceaff3b18926facced948f7d29e556e_pi0y2l.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058139/Group_1171281500_kye3hk.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058139/8c911b87ac670e26e84afb4268d485b8170c4715_rueqby.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058140/c1ec7efd2209aa0988eb526657236374fd1ae402_bgeqfh.png',
  'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058139/471e7d7f34b22321062235925e64fe72fdfba1e7_yc4w6r.png',
];

const LogoSlider = () => {
  return (
    <div className="logo-slider-wrapper">
  <div className="logo-slider-inner">
    <div className="logo-slider-track">
      {logos.concat(logos).map((logo, index) => (
        <div className="logo-slide" key={index}>
          <img src={logo} alt={`logo-${index}`} />
        </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default LogoSlider;
