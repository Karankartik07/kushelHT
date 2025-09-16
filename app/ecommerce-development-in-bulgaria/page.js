import BulgariaEcommerce from '../components/BulgariaEcommerce';

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ecommerce-development-in-bulgaria",
  },
  title: "Ecommerce Development Company in Bulgaria | Kushel Digi",
  description: "Get expert ecommerce development in Bulgaria. Kushel Digi builds custom, secure, and scalable ecommerce websites to grow your online business.",
  openGraph: {
      title: "Ecommerce Development Company in Bulgaria | Kushel Digi",
  description: "Get expert ecommerce development in Bulgaria. Kushel Digi builds custom, secure, and scalable ecommerce websites to grow your online business.",
    url: "https://www.kusheldigi.com/ecommerce-development-in-bulgaria",
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

const EcommerceBulgaria = ({ notify }) => {
  
  return (
    <>
    <BulgariaEcommerce notify={notify} />
    </>
  );
};

export default EcommerceBulgaria;

