import EcommerceDubaiComponent from "./EcommerceDubaiComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/dubai/ecommerce-website-development-dubai",
  },
  title: "Ecommerce Website Development Dubai | Kushel Digi",
  description: "Looking for ecommerce website development Dubai? We design easy-to-use, secure, and modern online stores that help your business grow and attract more customers.",
  openGraph: {
      title: " Ecommerce Website Development Dubai | Kushel Digi",
  description: "Looking for ecommerce website development Dubai? We design easy-to-use, secure, and modern online stores that help your business grow and attract more customers.",
    url: "https://www.kusheldigi.com/dubai/ecommerce-website-development-dubai",
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
  return <EcommerceDubaiComponent/>;
};

export default Page;