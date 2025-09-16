import EcommerceNew from '../../components/EcommerceNew'
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/ecommerce-development",
  },
  openGraph: {
    title: "Top eCommerce Development Company | Kushel Digi Solutions.",
    description: "Elevate your online store with Kushel Digi expert eCommerce development. Custom, scalable solutions on Shopify, Magento, BigCommerce & more. Boost sales with seamless UX & secure payments.",
    url: "https://www.kusheldigi.com/service/ecommerce-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463967/mockup-4_h41e2o.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Ecommerce= ({ notify }) => {
  
  return (
    <>
    <EcommerceNew notify={notify} />
    </>
  );
};

export default Ecommerce;

