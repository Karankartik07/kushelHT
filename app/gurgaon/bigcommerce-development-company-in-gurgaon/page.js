import BigcommerceGurgaonComponent from "./BigcommerceGurgaonComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/gurgaon/bigcommerce-development-company-in-gurgaon",
  },
  title: "Bigcommerce Development Company in Gurgaon | Kushel Digi",
  description: "Kushel Digi is a trusted BigCommerce development company in Gurgaon. We design and develop powerful BigCommerce stores that are fast, scalable, and free to audit now",
  openGraph: {
      title: "Bigcommerce Development Company in Gurgaon | Kushel Digi",
  description: "Kushel Digi is a trusted BigCommerce development company in Gurgaon. We design and develop powerful BigCommerce stores that are fast, scalable, and free to audit now",
    url: "https://www.kusheldigi.com/gurgaon/bigcommerce-development-company-in-gurgaon",
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
  return <BigcommerceGurgaonComponent />;
};

export default Page;