import EcommerceIndiaComponent from "./EcommerceIndiaComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/india/ecommerce-development-company-in-india",
  },
  title: "Ecommerce Development Company in India | Kushel Digi",
  description: "Partner with the best ecommerce development company in India for custom online stores, secure platforms, and scalable solutions that grow your business.",
  openGraph: {
      title: "Ecommerce Development Company in India | Kushel Digi",
  description: "Partner with the best ecommerce development company in India for custom online stores, secure platforms, and scalable solutions that grow your business.",
    url: "https://www.kusheldigi.com/india/ecommerce-development-company-in-india",
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

const Page = () => {
  return <EcommerceIndiaComponent />;
};

export default Page;