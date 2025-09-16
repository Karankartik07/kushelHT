import ShopifyDubaiComponent from "./ShopifyDubaiComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/dubai/shopify-web-development-services-dubai",
  },
  title: "Shopify Web Development Services Dubai | Kushel Digi",
  description: "Get professional Shopify web development services Dubai. We create secure, mobile-friendly, and high-converting Shopify stores tailored to your needs.",
  openGraph: {
      title: "Shopify Web Development Services Dubai | Kushel Digi",
  description: "Get professional Shopify web development services Dubai. We create secure, mobile-friendly, and high-converting Shopify stores tailored to your needs.",
    url: "https://www.kusheldigi.com/dubai/shopify-web-development-services-dubai",
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
  return <ShopifyDubaiComponent />;
};

export default Page;