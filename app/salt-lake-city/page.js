import LakeComponent from "./LakeComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/salt-lake-city",
  },
  title: "Custom Ecommerce Solutions in Salt Lake City | Kushel Digi",
  description: "Kushel Digi offers custom ecommerce solutions in Salt Lake City. With 8+ years of global experience, we create secure Shopify, BigCommerce & tailored web platforms.",
  openGraph: {
      title: "Custom Ecommerce Solutions in Salt Lake City | Kushel Digi",
  description: "Kushel Digi offers custom ecommerce solutions in Salt Lake City. With 8+ years of global experience, we create secure Shopify, BigCommerce & tailored web platforms.",
    url: "https://www.kusheldigi.com/salt-lake-city",
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
  return <LakeComponent />;
};

export default Page;