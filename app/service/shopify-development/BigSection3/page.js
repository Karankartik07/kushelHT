// import "./header.css"
"use client"
const data = [
    {
        num:"01" , 
        title:"Shopify Custom Store Development" , 
        para:"Turn your dream into a completely working Shopify store, the face of your brand. We build customized solutions to cater specifically to your business needs.Our team focuses on building scalable, user-friendly stores that can grow with your business."
    } ,
    {
        num:"02" , 
        title:"Responsive Shopify Theme Design" , 
        para:"Provide the best user experience with mobile-first responsive Shopify themes. Our designs guarantee your store will look great and always drive more conversions on whatever device.With our designs, your store will stand out in a crowded marketplace."
    } ,
    {
        num:"03" , 
        title:"Shopify App Integration" , 
        para:"Easily integrate powerful applications to extend the functionality of your store. From payment gateways to inventory management, we connect you with the best tools. Our experts ensure that each app integrates easily with your store to provide a best user experience."
    } ,
    {
        num:"04" , 
        title:"Shopify Store Migration" , 
        para:"Changing platform? We offer smooth and hassle-free migration to Shopify-no data loss and minimal downtime, so that you can continue your business as usual. We ensure that your store retains its SEO rankings and existing customer base during the transition."
    } ,
    {
        num:"05" , 
        title:"Shopify SEO Optimization" , 
        para:"Improve visibility for your store with our Shopify SEO services. We'll optimize your website for better search engine rankings, leading to increased organic traffic and sales.. We design SEO strategies according to your specific business needs to ensure that your store reaches the right audience."
    } ,
    {
        num:"06" , 
        title:"Shopify Plus Development" , 
        para:"Scale your business with Shopify Plus-the enterprise level of solution. We deliver advanced features and customizations to meet the demands of high-growth businesses.  With Shopify Plus, we help you take your e-commerce operations to the next level."
    } ,
    {
        num:"07" , 
        title:"Shopify Maintenance and Support" , 
        para:"Let your store work seamlessly-our ongoing maintenance and support services handle updates, enhancement troubleshooting, while you focus on growing your business.  We keep your store secure and optimized by conducting regular maintenance and updates."
    } ,
    {
        num:"08" , 
        title:"Shopify Custom App Development" , 
        para:"Looking for custom functionality? We create custom Shopify apps to build unique features in your store, enhancing both customer experience and backend operations. Our custom apps are designed to make your business operations more efficient by automating tasks and adding new capabilities."
    } ,
    {
        num:"09" , 
        title:"Shopify Performance Optimization" , 
        para:"Speed matters for successful e-commerce. We help optimize performance to make your Shopify store load quicker and give users smooth navigation experiences. We help you retain more customers and boost your sales by optimizing loading times and improving server response."
    } ,
    {
        num:"10" , 
        title:"Shopify Payment Gateway Setup" , 
        para:"Let your customers have an absolutely trouble-free experience with checkout through multiple payment options. We set up and configure payment gateways that cater to your business needs. Our team ensures that your payment processes are compliant with the latest security standards."
    } ,
    {
        num:"11" , 
        title:"Shopify Multi-Currency Setup" , 
        para:"Sell globally with Shopify's multi-currency feature. We will set up your store to accept various currencies for seamless international sales. Our setup ensures that your customers enjoy a seamless shopping experience, no matter where they are located."
    } ,
    {
        num:"12" , 
        title:"Shopify Analytics and Reporting" , 
        para:"Know where to go with our analytics and reporting services. We set up Shopify's powerhouse analytics tools to enable you to track performance and optimize your strategy. With this data at your fingertips, you can make smarter decisions to drive growth and profitability."
    } ,
]

function BigSection3() {
  return (
    <div className='bigcomsec3wrap'>

        <div className="bigcosec3cont">

            <h2>OUR SHOPIFY <span>WEB DEVELOPMENT</span> SERVICES</h2>

               <div className="bigwebwrapall">
                 {
           data.map((item , index)=>(
            <div key={index} className="singsec3boxe">

                 <span>{item.num}</span>

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

export default BigSection3