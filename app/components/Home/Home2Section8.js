import  './section8.css'; // Use CSS Modules
import Link from 'next/link'; // Use Next.js Link component for routing
import { useRouter } from 'next/navigation';
const data = [
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724770190/bgcoms8.b465562a07f65049cbad_j64pv6.webp", 
      para: "BigCommerce technology allows your store to scale seamlessly, easily handling increased traffic and sales. We harness its flexibility to develop tailor-made shopping experiences that are personal to your brand. With built-in SEO and marketing tools at your disposal, your store will be optimized for maximum visibility. This gives an e-commerce site that's powerful, easy to use, and in full compliance with business requirements.", 
      link: "/bigcommerce-development", 
      alt: "big-commerce logo"
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724770190/shopify-logo-1.267b14f95e65e4678b89_rpktit.webp", 
      para: "Shopify offers intuitive functionality for easy store management. We brand your Shopify store to stay consistent with your identity and extend its functionalities through custom integrations. We focus on responsive design to ensure that your store looks and works perfect on every device. More than that, we can help you achieve mobile-first, user-friendly storefronts for boosting your business.", 
      link: "/shopify-development", 
      alt: "Shopify logo"
    },
];

function Home2Section8() {
  const navigate = useRouter()
  return (
    <div className="h2s8wrap">
        <div className="h2s8cont">
            <p className="s8para1">Kushel Digi Helps you Grow with</p>
            <h4 className="s8h4">Leading Ecommerce Technology</h4>
            <p className="s8para2">
              Kushel Digi Solutions empowers your business with the latest Ecommerce technology, driving its growth and improving online presence. We provide you with customized solutions for your success in the marketplace.
            </p>

            <div className="ecoTechBoxes">
                {data?.map((d, i) => (
                    // <Link key={i} href={d.link}>
                        <div key={i} className="singleEcoBox">
                            {/* Left side */}
                            <img src={d.img} alt="kushel" title={d?.alt} />

                            {/* Right side */}
                            <div className="sEcoRight">
                                <p className="scoripara1">{d.para}</p>
                                <div className="leamorediv">
                                
                                    <p onClick={() => navigate.push(`${d?.link}`)} className="text32">LEARN MORE</p>
                                  
                                    <p className="textbelowline"></p>
                                </div>
                            </div>
                        </div>
                   
                ))}
            </div>
        </div>
    </div>
  );
}

export default Home2Section8;
