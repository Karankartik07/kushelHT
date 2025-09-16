"use client"
import React from 'react'
// import "./section6.css"

const data = [
    {
     img:  "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202394/bigs7_dhsziw.png" , 
     title:"Comprehensive E-commerce Tools" , 
     para:"Shopify provides a complete set of services-from managing your products to processing your payments-to make sure your online store wants for nothing. Run every aspect of your business from a single, easy-to-use admin panel. Its all-in-one solution makes complex processes easy and increases the efficiency of operations."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202392/bigs72_ccr7fd.png" , 
     title:"Scalability" , 
     para:"Whether you're a small startup or an expanding enterprise, Shopify scales with your business. Its flexible infrastructure adapts to your growing needs without compromising performance. You can effortlessly upgrade as your business grows, without any disruptions."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202394/bigs73_h3o6mh.png"  , 
     title:"User-Friendly Interface" , 
     para:"Shopify's intuitive interface makes it easy to build and manage your store- even if you don't have any technical expertise. Focus on your products and customers, and let Shopify take care of the complexity. Smooth setup and hassle-free management are waiting for you with a clean, straightforward design."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs75_sdnxpe.png"  , 
     title:"Strong App Ecosystem" , 
     para:"Power your store with the many thousands of apps available in the Shopify App Store, from marketing and inventory to everything in between. Seamlessly integrate the tools that drive success, tailor your store to meet specific needs, and expand its capabilities with ease."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730450949/Group_1000009988_klh8vg.png"  , 
     title:" Mobile Responsiveness" , 
     para:"Shopify will surely make your store look and perform beautifully on each and every device. With its native mobile-first design, capture sales from on-the-go customers with a seamless, super-smooth shopping experience. Adapt to the increasingly mobile market by having a store optimized for both smartphones and tables."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs76_rqvjnz.png" , 
     title:"Built-in SEO Features" , 
     para:"Improve your store's visibility by using Shopify's built-in SEO tools. Optimize your site for better search engine rankings and drive organic traffic and sales. Give your search ranking a boost and bring more customers to your site with automated features."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs74_wiyr6p.png"  , 
     title:"Dedicated Customer Support" ,
     para:"Shopify's 24/7 customer support ensures you are never alone. Whether it is a technical issue or questions about features, expert help is always there when you need it. Leverage a suite of resources including live chat and email support to address any concern."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs77_tlgswl.png"  , 
     title:"Secure and Reliable Hosting" , 
     para:"Shopify boasts hosting for an ecommerce online store: secure, fast, and reliable. Take pride in your online store with free built-in security features and 99.99% uptime. Advance the protection of your data by using advanced encryption and robust security protocols."
    } , 
   
   
   
]

function BigSection7() {
  return (
    <div className='bigsec6wrap addbgs7'>

     <div className="bigsec6cont">

        <div className="bigs6topcon">
            <h3>Why Shopify is the All-in-One Solution for E-commerce Success</h3>
            <p>Shopify ingeniously combines powerful tools, scalability, and ease of use, making it the ultimate platform for creating, managing, and growing an online store with ease.</p>
        </div>


        <div className="alls6elems">
            {
                data.map((item , index)=>(
                    <div key={index} className="singeles72">

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

export default BigSection7