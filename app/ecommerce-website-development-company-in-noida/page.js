import EcommerceNoida from "../components/EcommerceNoida";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ecommerce-website-development-company-in-noida",
  },
  title: "Best Ecommerce Website Development Company in Noida ",
  description:
    "Looking for an ecommerce website development company in Noida? Kushel Digi delivers secure, scalable ecommerce solutions tailored to your business needs.",
  openGraph: {
    title: "Best Ecommerce Website Development Company in Noida ",
    description:
      "Looking for an ecommerce website development company in Noida? Kushel Digi delivers secure, scalable ecommerce solutions tailored to your business needs.",
    url: "https://www.kusheldigi.com/ecommerce-website-development-company-in-noida",
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

const NoidaEcommerce = ({ notify }) => {
  return (
    <>
      <EcommerceNoida notify={notify} />
    </>
  );
};

export default NoidaEcommerce;
