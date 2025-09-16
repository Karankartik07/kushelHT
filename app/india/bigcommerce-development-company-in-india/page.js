import BigcommerceInidaComponent from "./BigcommerceInidiaComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/india/bigcommerce-development-company-in-india",
  },
  title: "BigCommerce Development Company in India | Kushel Digi",
  description: "Hire a top bigcommerce development company in India for custom store design, API integration, and scalable ecommerce solutions tailored to your business needs.",
  openGraph: {
      title: "BigCommerce Development Company in India | Kushel Digi",
  description: "Hire a top bigcommerce development company in India for custom store design, API integration, and scalable ecommerce solutions tailored to your business needs.",
    url: "https://www.kusheldigi.com/india/bigcommerce-development-company-in-india",
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
  return <BigcommerceInidaComponent />;
};

export default Page;