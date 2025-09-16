"use client"
import React from "react";
import './porfolio.css'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
const projects = [
  {
    name: "Koolfly",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Koolfly",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "Kick-eez ",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
];

export default function Porfolioo({page}) {
  return (
    <section className="Shopify-projectsSectionKcom">
      <div className="Shopify-projectsHeaderKcom">
        <div className="Shopify-textKcom">
          <h2 className="Shopify-primary-heading">Our Success Stories</h2>
          <p className="secondary-heading">
          Explore how our custom solutions have helped businesses to shine in this competitive world.
          </p>
        </div>
          <Link href="/portfolio">
        <button className="Shopify-viewAllBtnKcom">
          View All Work 
          </button>
          </Link>

      </div>

<div className="Shopify-b2b-sectionKcom">
  
    <div className="Shopify-b2b-contentKcom">

        {/* ============================ */}
      <div className="Shopify-left-b2b-cardsKcom">
        <div className="Shopify-left-b2b-cardKcom">
          <div className="Shopify-b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-2_atom41.jpg" alt="Shopify Plus" />
            <Link href="/2ndamendmentguns" id="Shopify-human" className="hover-linkCom"> View Case Study <MdArrowOutward /></Link>
          </div>
          
          <a href="/2ndamendmentguns" className="Shopify-b2b-btnKcom">
          2ndamendment
            <p>{page}</p>
          </a>  
          <hr className="hrKcomKu"/>
        </div>
        <div className="Shopify-left-b2b-cardKcom-2">
          <div className="Shopify-b2b-logoKcom">
           
           <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-6_wfoqas.jpg" alt="Shopify Plus" />
           <Link href="/sitesandscopes" id="Shopify-human" className="hover-linkCom"> View Case Study<MdArrowOutward /></Link>
          </div>
         
          <a href="/sitesandscopes" className="Shopify-b2b-btnKcom">
          Sites And Scopes 
            <p>{page}</p>
          </a>  
          <hr />
        </div>
        
        <div className="Shopify-left-b2b-cardKcom-3">
          <div className="Shopify-b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-1_lbb6yj.jpg" alt="Shopify Plus" />
            <Link href="/topbrasstactical" id="Shopify-human" className="hover-linkCom"> View Case Study <MdArrowOutward/></Link>
          </div>
         
          <a href="/topbrasstactical" className="Shopify-b2b-btnKcom">
          Top Brass Tactical
            <p>{page}</p>
          </a>
          <hr/>
        </div>
      </div>
      <div className="Shopify-right-b2b-cardsKcom">
        <div className="Shopify-right-b2b-cardKcom">
          <div className="Shopify-b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-5_t6orct.jpg" alt="Shopify Plus" />
            <Link href="/portfolio" id="Shopify-human" className="hover-linkCom">View Case Study <MdArrowOutward /> </Link>
          </div>
         
          <a href="/portfolio" className="Shopify-b2b-btnKcom">
          Black Rhino
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="Shopify-right-b2b-cardKcom">
          <div className="Shopify-b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744009340/indrpal-6_xkecsz.png" alt="Shopify Plus" />
            <a href="/slides365" id="Shopify-human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
          
          <a href="/slides365" className="Shopify-b2b-btnKcom">
          Slides 365
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="Shopify-right-b2b-cardKcom">
          <div className="Shopify-b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-3_kaxts8.jpg" alt="Shopify Plus" />
            <a href="/kick-eez" id="Shopify-human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
         
          <a href="/kick-eez" className="Shopify-b2b-btnKcom">
          Kick-eez
            <p>{page}</p>
          </a>
          <hr/>
        </div>

        
      </div>

      

      
    </div>
  
    </div>
    </section>
  );
}