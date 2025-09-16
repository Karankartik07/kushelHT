import DelhiEcommerce from "../components/DelhiEcommerce";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ecommerce-development-in-delhi",
  },
  title: 'Ecommerce Website Development Company in Delhi ',
      description: 'Looking for ecommerce website development in Delhi? Kushel Digi builds secure, scalable, and custom ecommerce websites to grow your online business effectively.',
  openGraph: {
    title: 'Ecommerce Website Development Company in Delhi ',
      description: 'Looking for ecommerce website development in Delhi? Kushel Digi builds secure, scalable, and custom ecommerce websites to grow your online business effectively.',
    url: "https://www.kusheldigi.com/ecommerce-development-in-delhi",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
        width: 800,
        height: 600,
        alt: "Kushel Digi Logo",
      },
    ],
  },
};

const EcommerceDelhi = ({ notify }) => {
  
  return (
    <> 
    <DelhiEcommerce notify={notify} /> 
    </>
  );
};

export default EcommerceDelhi;

