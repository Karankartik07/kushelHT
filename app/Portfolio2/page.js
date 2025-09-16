import '../globals.css'
import Portfolio2 from "../components/Portfolio2";


export const metadata = {
  openGraph: {
    title: "Our eCommerce Projects | Kushel Digi Solutions Portfolio",
    description: "Explore how Kushel Digi Solutions drives eCommerce success and projects of custom Shopify, BigCommerce stores. We help you to grow with innovative and specialized solutions.",
    url: "https://www.kusheldigi.com/portfolio",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Service = ({ notify }) => {
  
  return (
    <>
    <Portfolio2 notify={notify} />
    </>
  );
};

export default Service;

