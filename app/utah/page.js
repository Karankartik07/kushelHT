import UtahComponent from "./UtahComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/utah",
  },
  title: " Ecommerce Solution Experts in Utah | Kushel Digi",
  description: "Kushel Digi is a trusted expert ecommerce solution in Utah. With 8+ years of global experience, we deliver scalable online stores, Shopify, BigCommerce & custom web solutions.",
  openGraph: {
      title: "Ecommerce Solution Experts in Utah | Kushel Digi",
  description: "Kushel Digi is a trusted expert ecommerce solution in Utah. With 8+ years of global experience, we deliver scalable online stores, Shopify, BigCommerce & custom web solutions.",
    url: "https://www.kusheldigi.com/utah",
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
  return <UtahComponent />;
};

export default Page;