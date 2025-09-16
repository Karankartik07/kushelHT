import HtmlComponent from "./HtmlComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/html5",
  },
  title: "Top-Notch affordable HTML development services",
  description:
    "KushelDigi Solutions, recognized as a premier Website Development Company, specializes in HTML web development services aimed at elevating your brand value",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/html5",
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
  return <HtmlComponent />;
};

export default Page;
