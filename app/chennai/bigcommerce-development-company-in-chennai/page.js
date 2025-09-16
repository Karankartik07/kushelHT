import BigcommerceChennaiComponent from "./BigcommerceChennaiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/chennai/bigcommerce-development-company-in-chennai",
  },
  title: " BigCommerce Development Company in Chennai | Kushel Digi",
  description: "Kushel Digi is a trusted BigCommerce development company in Chennai helping brands build scalable, secure, and conversion-driven stores that deliver real results.",
  openGraph: {
      title: " BigCommerce Development Company in Chennai | Kushel Digi",
  description: "Kushel Digi is a trusted BigCommerce development company in Chennai helping brands build scalable, secure, and conversion-driven stores that deliver real results.",
    url: "https://www.kusheldigi.com/chennai/bigcommerce-development-company-in-chennai",
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
  return <BigcommerceChennaiComponent />;
};

export default Page;