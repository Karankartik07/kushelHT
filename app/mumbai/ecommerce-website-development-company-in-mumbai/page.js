import EcomMumbaiComponent from "./WebsiteMumbaiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/mumbai/ecommerce-website-development-company-in-mumbai",
  },
  title: "Ecommerce Website Development Company in Mumbai | Kushel Digi",
  description: "Looking for the best ecommerce website development company in Mumbai? We build scalable, user-friendly online stores that drive sales and growth for your business.",
  openGraph: {
      title: "Ecommerce Website Development Company in Mumbai | Kushel Digi",
  description: "Looking for the best ecommerce website development company in Mumbai? We build scalable, user-friendly online stores that drive sales and growth for your business.",
    url: "https://www.kusheldigi.com/mumbai/ecommerce-website-development-company-in-mumbai",
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
  return <EcomMumbaiComponent />;
};

export default Page;