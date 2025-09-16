"use client"
import React from "react";
import './Banner9.css'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
const projects = [
  {
    name: "Koolfly",
    category: "Ecommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "Ecommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Koolfly",
    category: "Ecommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "Kick-eez ",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
];

export default function Banner9({page}) {
  return (
    <section className="projectsSectionKcom">
      <div className="projectsHeaderKcom">
        <div className="textKcom">
          <h3 className="primary-heading">Our Success Stories</h3>
          <p className="secondary-heading">
          Explore how our custom solutions have helped businesses to shine in this competitive world.
          </p>
        </div>
          <Link href="/portfolio">
        <button className="viewAllBtnKcom">
          View All Work 
          </button>
          </Link>

      </div>

<div className="b2b-sectionKcom">
  
    <div className="b2b-contentKcom">
      <div className="left-b2b-cardsKcom">
        <div className="left-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748210272/t7_nvqtyp.webp" alt="Shopify Plus" />
            <Link href="/2ndamendmentguns" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward /></Link>
          </div>
          
          <a href="/2ndamendmentguns" className="b2b-btnKcom">
          2ndamendment
            <p>{page}</p>
          </a>  
          <hr className="hrKcomKu"/>
        </div>
        <div className="left-b2b-cardKcom-2">
          <div className="b2b-logoKcom">
           
           <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-6_wfoqas.jpg" alt="Shopify Plus" />
           <Link href="/sitesandscopes" id="human" className="hover-linkCom"> View Case Study<MdArrowOutward /></Link>
          </div>
         
          <a href="/sitesandscopes" className="b2b-btnKcom">
          Sites And scopes 
            <p>{page}</p>
          </a>  
          <hr />
        </div>
        
        <div className="left-b2b-cardKcom-3">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748210308/t3_vcmfun.webp" alt="Shopify Plus" />
            <Link href="/topbrasstactical" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward/></Link>
          </div>
         
          <a href="/topbrasstactical" className="b2b-btnKcom">
          Top Brass Tactical
            <p>{page}</p>
          </a>
          <hr/>
        </div>
      </div>
      <div className="right-b2b-cardsKcom">
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748210286/t6_k6lrcg.webp" alt="Shopify Plus" />
            <Link href="/blackrhinoconcealment" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /> </Link>
          </div>
         
          <a href="/blackrhinoconcealment" className="b2b-btnKcom">
          Black Rhino
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748210301/t4_msdyvc.webp" alt="Shopify Plus" />
            <a href="/slides365" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
          
          <a href="/slides365" className="b2b-btnKcom">
          Slides 365
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748210318/t2_l9bzbo.webp" alt="Shopify Plus" />
            <a href="/kick-eez" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
         
          <a href="/kick-eez" className="b2b-btnKcom">
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