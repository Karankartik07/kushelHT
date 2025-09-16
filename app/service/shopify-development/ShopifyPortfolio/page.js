"use client"
import React from "react";
import '../../ecommerce-development/Banner9/Banner9.css'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
// const projects = [
//   {
//     name: "Koolfly",
//     category: "eCommerce",
//     image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
//   },
//   {
//     name: "Chrome Industries",
//     category: "eCommerce",
//     image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
//   },
//   {
//     name: "Koolfly",
//     category: "eCommerce",
//     image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
//   },
//   {
//     name: "Chrome Industries",
//     category: "Kick-eez ",
//     image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
//   },
// ];

export default function Banner9({page}) {
  return (
    <section className="projectsSectionKcom">
      <div className="projectsHeaderKcom">
        <div className="textKcom">
          <h2 className="primary-heading">Our Success Stories</h2>
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
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463965/sacoor-brother_bvl6nm.png" alt="Shopify Plus" />
            <Link href="https://pt.sacoorbrothers.com" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward /></Link>
          </div>
          
          <a href="https://pt.sacoorbrothers.com" className="b2b-btnKcom">
          Sacoor-brothers
            <p>{page}</p>
          </a>  
          <hr className="hrKcomKu"/>
        </div>
        <div className="left-b2b-cardKcom-2">
          <div className="b2b-logoKcom">
           
           <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463965/designonline_p6id3i.png" alt="Shopify Plus" />
           <Link href="https://xtremedesignonline.com/" id="human" className="hover-linkCom"> View Case Study<MdArrowOutward /></Link>
          </div>
         
          <a href="https://xtremedesignonline.com/" className="b2b-btnKcom">
          Design-Online
            <p>{page}</p>
          </a>  
          <hr />
        </div>
        
        <div className="left-b2b-cardKcom-3">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463965/brucebolt_f1bvhf.png" alt="Shopify Plus" />
            <Link href="https://brucebolt.us" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward/></Link>
          </div>
         
          <a href="https://brucebolt.us" className="b2b-btnKcom">
          BruceBolt
            <p>{page}</p>
          </a>
          <hr/>
        </div>
      </div>
      <div className="right-b2b-cardsKcom">
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463966/roses_vnt7rd.png" alt="Shopify Plus" />
            <Link href="https://heirloomroses.com/" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /> </Link>
          </div>
         
          <a href="https://heirloomroses.com/" className="b2b-btnKcom">
          Heirloom-rose
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744637847/Shopify-Portfolio_dzyhzc.jpg" alt="Shopify Plus" />
            <a href="https://ballisticdummylab.com/?currency=USD" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
          
          <a href="https://ballisticdummylab.com/?currency=USD" className="b2b-btnKcom">
          Ballistic-Dummy
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom ">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744637847/Shopify-Portfilo_xzdoih.jpg" alt="Shopify Plus" />
            <a href="https://flowershut.com/" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
         
          <a href="https://flowershut.com/" className="b2b-btnKcom">
          Flowers Hut
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