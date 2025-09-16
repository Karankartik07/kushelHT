import EcommerceLondon from '../components/EcommerceLondon';

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ecommerce-development-in-london",
  },
  title: "Ecommerce Website Development Company in London",
  description: "Boost your online store with expert ecommerce development services in London. Kushel Digi builds scalable, secure, and custom ecommerce websites.",
  openGraph: {
    title: "Ecommerce Website Development Company in London",
    description: "Boost your online store with expert ecommerce development services in London. Kushel Digi builds scalable, secure, and custom ecommerce websites.",
    url: "https://www.kusheldigi.com/ecommerce-development-in-london",
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

const LondonEcommerce = ({ notify }) => {

  return (
    <>
      <EcommerceLondon notify={notify} />
    </>
  );
};

export default LondonEcommerce;

