import EcommerceChennaiComponent from "./EcommerceChennaiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/chennai/ecommerce-development-company-in-chennai",
  },
  title: " Ecommerce Development Company in Chennai | Kushel Digi",
  description: "Kushel Digi, a leading ecommerce development company in chennai, creates user-friendly ecommerce websites designed to boost your sales and brand visibility online",
  openGraph: {
      title: " Ecommerce Development Company in Chennai | Kushel Digi",
  description: "Kushel Digi, a leading ecommerce development company in chennai, creates user-friendly ecommerce websites designed to boost your sales and brand visibility online",
    url: "https://www.kusheldigi.com/chennai/ecommerce-development-company-in-chennai",
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
  return <EcommerceChennaiComponent />;
};

export default Page;