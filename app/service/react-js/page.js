import ReactjsComponent from "./ReactJsComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/react-js",
  },
  title: "Unlock the power of React JS Development service",
  description:
    "Kushel Digi Solutions stays on top of React JS development company's most recent features and innovations to make sure your online apps are cutting-edge.",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/react-js",
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
  return <ReactjsComponent />;
};

export default Page;
