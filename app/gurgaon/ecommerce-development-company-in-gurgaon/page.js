import EcommerceGurgaonComponent from "./EcommerceGurgaonComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/gurgaon/ecommerce-development-company-in-gurgaon",
  },
  title: " Ecommerce Development Company in Gurgaon | Kushel Digi ",
  description: "Looking for an ecommerce development company in gurgaon? Kushel Digi creates easy-to-use, custom online stores that help your business sell more and grow faster.",
  openGraph: {
      title: " Ecommerce Development Company in Gurgaon | Kushel Digi ",
  description: "Looking for an ecommerce development company in gurgaon? Kushel Digi creates easy-to-use, custom online stores that help your business sell more and grow faster.",
    url: "https://www.kusheldigi.com/gurgaon/ecommerce-development-company-in-gurgaon",
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
  return <EcommerceGurgaonComponent />;
};

export default Page;