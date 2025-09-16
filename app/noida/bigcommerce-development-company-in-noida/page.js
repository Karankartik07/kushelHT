import BigcommerceNoidaComponent from "./BigcommerceNoidaComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/noida/bigcommerce-development-company-in-noida",
  },
  title: "BigCommerce Development Company in Noida | Kushel Digi",
  description: "Kushel Digi is a trusted bigcommerce development company in Noida, delivering tailored ecommerce solutions and website development for your online success.",
  openGraph: {
      title: "BigCommerce Development Company in Noida | Kushel Digi",
  description: "Kushel Digi is a trusted bigcommerce development company in Noida, delivering tailored ecommerce solutions and website development for your online success.",
    url: "https://www.kusheldigi.com/noida/bigcommerce-development-company-in-noida",
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
  return <BigcommerceNoidaComponent />;
};

export default Page;