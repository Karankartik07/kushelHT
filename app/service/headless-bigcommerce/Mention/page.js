"use client"
import React from 'react';
import './mention.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'A to Z Stores: Multi-Store Platform for Wholesale Stores',
    description1: 'A to Z stores offer products like markerboards, projection screens & extinguishers.',
    description2: 'Find out how TBI’s expertise in Migration to Magento & custom PDP designing enhanced customer footprint and online sales.',
    img: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744145937/a-to-z-new_cfxrxm.webp',
    reverse: false
  },
  {
    id: 2,
    title: 'Xtreme 4×4 Sales Soar with Magento 2 Migration',
    description1: 'Xtreme 4×4 is a wholesale platform offering various vehicle recovery products.',
    description2: 'Learn how TBI’s curated custom store sections & product comparison filters improved user engagement. Our custom search functionality improves user interaction and converts it into store sales.',
    img: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744145937/xtreme-4x4-new_zobf3w.webp',
    reverse: true
  },
  {
    id: 3,
    title: 'Custom Multi-store Plugin Driving Cosmetic B2B Sales',
    description1: 'Custom multi-store plugin for a cosmetic website streamlining their business operations.',
    description2: 'Learn how TBI helped the client manage multiple vendors & monitor B2B sale operations with a centralized admin dashboard. Our multiple subscription plans for vendors fostered engagement and increased sales.',
    img: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744145938/multi-store-new_eorhy9.webp',
    reverse: false
  },
  {
    id: 4,
    title: 'Ecommerce Solution for Store Display Equipment Platform',
    description1: 'Substral Inc. deals with store units like jewellery displays, Mannequins & display cases.',
    description2: 'Find out how TBI helped improve website sales with Magento 2 migration, custom cart & shipping class designs.',
    img: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744145937/substral-new_hhxcks.webp',
    reverse: true
  },
  {
    id: 5,
    title: 'A Robsust B2B ecommerce Store Like Alibaba',
    description1: 'Built a Magento 2 wholesale store specializing in custom merchandise from the ground up.',
    description2: 'Learn how TBI’s dedicated team helped streamline store operations & improved user interaction with custom shipping extension. Our UI enhancements improved customer footprint by 30%.',
    img: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744145937/wholesale-store-new_zkwpky.webp',
    reverse: false
  }
];

const CaseStudies = () => {
  return (
    <div className="case-studies-wrapper">
      {caseStudies.map(({ id, title, description1, description2, img, reverse }) => (
        <motion.div
          key={id}
          className={`case-study ${reverse ? 'reverse' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="case-image"
            whileInView={{ scale: 1 }}
            initial={{ scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            <img src={img} alt={title} />
          </motion.div>
          <div className="case-content">
            <h2>{title}</h2>
            <p>{description1}</p>
            <p>{description2}</p>
            <button className="view-project-btn">
              View Project <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CaseStudies;
