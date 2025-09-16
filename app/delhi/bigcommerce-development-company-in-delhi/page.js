import BigcommerceDelhiComponent from "./BigcommerceDelhiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/delhi/bigcommerce-development-company-in-delhi",
  },
  title: "BigCommerce Development Company in Delhi | Kushel Digi",
  description: "Kushel Digi is a leading bigcommerce development company in Delhi, offering tailored ecommerce solutions to launch, grow, and scale your online store.",
  openGraph: {
      title: "BigCommerce Development Company in Delhi | Kushel Digi",
  description: "Kushel Digi is a leading bigcommerce development company in Delhi, offering tailored ecommerce solutions to launch, grow, and scale your online store.",
    url: "https://www.kusheldigi.com/delhi/bigcommerce-development-company-in-delhi",
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
  return <BigcommerceDelhiComponent />;
};

export default Page;