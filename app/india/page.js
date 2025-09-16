import IndiaComponent from "./IndiaComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/india",
  },
  title: "#1 Ecommerce Website Development Company in India | Kushel Digi ",
  description: "India’s #1 ecommerce website development company delivering custom, secure & scalable online store solutions. Grow your business with expert Shopify & BigCommerce developers.",
  openGraph: {
      title: "#1 Ecommerce Website Development Company in India | Kushel Digi ",
  description: "India’s #1 ecommerce website development company delivering custom, secure & scalable online store solutions. Grow your business with expert Shopify & BigCommerce developers.",
    url: "https://www.kusheldigi.com/india",
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
  return <IndiaComponent />;
};

export default Page;