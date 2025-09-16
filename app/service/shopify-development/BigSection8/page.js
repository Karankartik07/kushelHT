"use client"
import Link from "next/link";
import { useState } from "react";
// import "./big8.css"


const data = [
[] , 
[
        {
            num:"01" , 
            heading:"Discovery & Consultation" , 
            para:"We initiate the process by gaining an understanding of your business needs and goals, ensuring that our strategy aligns with your vision in precisely the best way. This forms the very basis necessary to create a tailor-made Shopify experience."
        } , 
        {
            num:"02" , 
            heading:"Design & Prototyping" , 
            para:"Our expert designers create aesthetically pleasing prototypes that are exceptionally user-friendly, truly reflective of brand identity, and ensure that the design resonates well with your target audience in enhancing the user experience."
        } , 
        {
            num:"03" , 
            heading:"Development & Customization" , 
            para:"We develop your vision into a Shopify store with custom functionalities. Our team at Kushel Digi ensures everything works seamlessly by testing each part for performance and scalability."
        } , 
        {
            num:"04" , 
            heading:"Testing & Quality Assurance" , 
            para:"Before launch, we rigorously test your Shopify store to uncover and fix issues. This process ensures zero flaws for end users on all devices and platforms."
        } , 
        {
            num:"05" , 
            heading:"Launch & Support" , 
            para:"With everything just right, we launch your Shopify store and continue the support beyond that. We will be here to help you grow, optimize, and continue to be successful after launch."
        } , 
    ]
]

const data2 = [1 , 2 , 3 , 4 , 5 ]

function BigSection8() {

    const [currindex , setcurrIndex] = useState(1);

  return (
    <div className="bigs8wrap">

        <div className="big8conta">

            <div className="bgs8content">
                <h3>OUR SHOPIFY DEVELOPMENT SERVICE PROCESS</h3>
                <p>Our Shopify development process is tailored towards bringing on board high-performance-driven online stores for conversions. From consultation to the final launch, we ensure everything is done according to your business goals to create maximum impact.</p>
            </div>

            <div className="numfilters">

             {
                data2.map((item , index)=>(
                    <div key={index} className={`singnum  ${index != 4 && 'addwidths' } `}>
                        <span >{item}</span>
                        {
                            index !== 4 && 
                        <p className="nufilline"></p>
                        }
                    </div>
                ))
             }

            </div>

            <div className="bs8items">

                {
             data[currindex]?.map((item , i)=>(
                 <div key={i} className="bigs8single">
                   <span>{item.num}</span>
                   <h5>{item.heading}</h5>
                   <p>{item.para}</p>
                 </div>
             ))
                }

            </div>


          <Link href="/contact-us" className="bs8items" style={{display:"inline", width:"260px", margin:"0 auto"}}><button className="discuproject"><span>Let’s Discuss your Project</span></button></Link>  

        </div>

    </div>
  )
}

export default BigSection8