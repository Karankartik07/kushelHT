import UtahEcomComponent from "./UtahEcomComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/utah/ecommerce-development-company-in-utah",
  },
  title: "Trusted Ecommerce Development Company in Utah | Kushel Digi ",
  description: "We are certified Ecommerce Development Services in Utah. We have been working in the development market since 2018. We create websites, applications and more for businesses .",
  openGraph: {
      title: "Trusted Ecommerce Development Company in Utah | Kushel Digi ",
  description: "We are certified Ecommerce Development Services in Utah. We have been working in the development market since 2018. We create websites, applications and more for businesses .",
    url: "https://www.kusheldigi.com/utah/ecommerce-development-company-in-utah",
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
  return <UtahEcomComponent />;
};

export default Page;