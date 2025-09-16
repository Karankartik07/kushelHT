import ShopifyIndiaComponent from "./ShopifyIndiaComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/india/shopify-development-company-in-india",
  },
  title: "Trusted Shopify Development Company in India | Kushel Digi",
  description: "Kushel Digi Solutions, a Shopify development company in India! We help businesses set up their cool, user-friendly Shopify stores, built to grow and increase sales.",
  openGraph: {
      title: "Trusted Shopify Development Company in India | Kushel Digi",
  description: "Kushel Digi Solutions, a Shopify development company in India! We help businesses set up their cool, user-friendly Shopify stores, built to grow and increase sales.",
    url: "https://www.kusheldigi.com/india/shopify-development-company-in-india",
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
  return <ShopifyIndiaComponent />;
};

export default Page;