import '../globals.css'

import Solution4 from '../components/solution/Solution4';


export const metadata = {
  openGraph: {
    title: "Our eCommerce Services | Build, Scale & Optimize Your Store",
    description: "For seamless integration and performance optimization, we provide custom Shopify and BigCommerce development solutions. Get end to end Ecommerce solutions for long-term success in platform development, UI/UX, and performance marketing.",
    url: "https://www.kusheldigi.com/solutions",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Solution = ({ notify }) => {
  
  return (
    <>
    <Solution4 notify={notify} />
    </>
  );
};

export default Solution;

