"use client"
import React from 'react'


const data = [
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202136/setingimg_lc7zdx.png" , 
     title:"Expertise in Custom Shopify Solutions" , 
     para:"Our team has long years of experience in crafting custom Shopify stores that align perfectly with your business goals. We create each solution to meet your specific needs."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg2_rfjulk.png"  , 
     title:"Smooth Workflow" , 
     para:"Get a seamless development experience with Kushel Digi Solutions. Our workflow is structured for timely delivery and a hassle-free experience."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg3_tdtqta.png"  , 
     title:"Dedicated Support" , 
     para:"We have a dedicated support team to assist you at every stage. We are there to provide you with continuous guidance and solutions for seamless operation."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg4_yl3zry.png" , 
     title:"Commitment to Confidentiality" , 
     para:"Rest assured that your project details are safe & secure with our strict adherence to NDAs, protecting your business’s confidential information."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg5_kxruv6.png" , 
     title:"Content Management" , 
     para:"Trust us to populate and organize your store’s content, ensuring every product detail is perfectly placed and ready for launch."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg6_ewo3om.png" , 
     title:"Focus on User Experience" , 
     para:"We prioritize user experience in every Shopify store we build. Our designs ensure that your customers enjoy a smooth and engaging shopping journey."
    } , 
]

function Bigsection6() {
  return (
    <div className='bigsec6wrap'>

     <div className="bigsec6cont">


        <div className="bigs6topcon">
            <h3>Why Shopify Development by Kushel Digi Solutions?</h3>
            <p>Choose Kushel Digi Solutions for Shopify development in order to take your e-commerce business to great heights with customized and scalable solutions. We ensure  seamless integration of a high performance online store to drive growth by unlocking your full sales potential.</p>
        </div>

        <div className="alls6elems2">
            {
                data.map((item , index)=>(
                    <div key={index} className="singeles6">

                        <img src={item.img} alt="kushel" />

                        <h5>{item.title}</h5>

                        <p>{item.para}</p>

                    </div>
                ))
            }
        </div>



     </div>

    </div>
  )
}

export default Bigsection6