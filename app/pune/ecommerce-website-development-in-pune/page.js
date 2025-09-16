import EcomPuneComponent from "./EcomPuneComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/pune/ecommerce-website-development-in-pune",
  },
  title: "Ecommerce Website Development in Pune | Kushel Digi",
  description: "Searching for ecommerce website development in Pune? We create custom, scalable, and user-friendly online stores to boost your sales and business growth",
  openGraph: {
      title: "Ecommerce Website Development in Pune | Kushel Digi",
  description: "Searching for ecommerce website development in Pune? We create custom, scalable, and user-friendly online stores to boost your sales and business growth",
    url: "https://www.kusheldigi.com/pune/ecommerce-website-development-in-pune",
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
  return <EcomPuneComponent />;
};

export default Page;