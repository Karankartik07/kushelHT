import NodeJsComponent from "./NodeJsComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/node-js",
  },
  title: "Leading Node.js Development Company | Kushel Digi Solutions",
  description:
    "KushelDigi Solutions excels as a leading Node.js development company, specializing in the creation of high-quality web and mobile applications.",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/node-js",
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
  return <NodeJsComponent />;
};

export default Page;
