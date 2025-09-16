import EcommerceFinland from "../components/EcommerceFinland";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ecommerce-development-in-finland",
  },
  title: "Ecommerce Development Company in Finland | Kushel Digi",
  description: "Looking for expert ecommerce development in Finland? Kushel Digi creates high-performance, SEO-friendly websites that boost your digital growth.",
  openGraph: {
      title: "Ecommerce Development Company in Finland | Kushel Digi",
  description: "Looking for expert ecommerce development in Finland? Kushel Digi creates high-performance, SEO-friendly websites that boost your digital growth.",
    url: "https://www.kusheldigi.com/ecommerce-development-in-finland",
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

const FinlandEcommerce = ({ notify }) => {
  return (
    <>
      <EcommerceFinland notify={notify} />
    </>
  );
};

export default FinlandEcommerce;
