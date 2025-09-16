import LakeEcomComponent from "./LakeEcomComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/salt-lake-city/ecommerce-development-in-salt-lake-city",
  },
  title: "Trusted Ecommerce Development in Salt Lake City | Kushel Digi ",
  description: "Kushel Digi offers expert ecommerce development in Salt Lake City. With 8+ years of experience, we build secure, scalable Shopify, BigCommerce & custom stores.",
  openGraph: {
      title: "Trusted Ecommerce Development in Salt Lake City | Kushel Digi ",
  description: "Kushel Digi offers expert ecommerce development in Salt Lake City. With 8+ years of experience, we build secure, scalable Shopify, BigCommerce & custom stores.",
    url: "https://www.kusheldigi.com/salt-lake-city/ecommerce-development-in-salt-lake-city",
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
  return <LakeEcomComponent />;
};

export default Page;