import EcommerceNoidaComponent from "./EcommerceNoidaComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/noida/ecommerce-development-company-in-noida",
  },
  title: "Ecommerce Development Company in Noida | Kushel Digi",
  description: "Kushel Digi is a ecommerce development company in Noida, providing custom website development solutions to build powerful, scalable online stores.",
  openGraph: {
      title: "Ecommerce Development Company in Noida | Kushel Digi",
  description: "Kushel Digi is a ecommerce development company in Noida, providing custom website development solutions to build powerful, scalable online stores.",
    url: "https://www.kusheldigi.com/noida/ecommerce-development-company-in-noida",
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
  return <EcommerceNoidaComponent />;
};

export default Page;