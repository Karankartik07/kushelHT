import EcommerceBelgium from '../components/EcommerceBelgium';
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ecommerce-development-in-belgium",
  },
  title: "Best Ecommerce Website Development Company in Belgium",
  description: "Get expert ecommerce website development in Belgium. Kushel Digi offers scalable, secure, and tailored ecommerce solutions for your business growth.",
  openGraph: {
    title: "Best Ecommerce Website Development Company in Belgium",
    description: "Get expert ecommerce website development in Belgium. Kushel Digi offers scalable, secure, and tailored ecommerce solutions for your business growth.",
    url: "https://www.kusheldigi.com/ecommerce-development-in-belgium",
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

const BelgiumEcommerce = ({ notify }) => {

  return (
    <>
      <EcommerceBelgium notify={notify} />
    </>
  );
};

export default BelgiumEcommerce;

