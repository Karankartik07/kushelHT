import EcommerceDelhiComponent from "./EcommerceDelhiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/delhi/ecommerce-development-company-in-delhi",
  },
  title: "Ecommerce Development Company in Delhi | Kushel Digi",
  description: "Searching for an ecommerce development company in Delhi? Kushel Digi builds user-focused, high-converting websites tailored to your business goals.",
  openGraph: {
      title: "Ecommerce Development Company in Delhi | Kushel Digi",
  description: "Searching for an ecommerce development company in Delhi? Kushel Digi builds user-focused, high-converting websites tailored to your business goals.",
    url: "https://www.kusheldigi.com/delhi/ecommerce-development-company-in-delhi",
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
  return <EcommerceDelhiComponent />;
};

export default Page;