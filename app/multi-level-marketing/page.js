import MultiLevelComponent from "./MultiLevelComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/multi-level-marketing",
  },
  title: "MLM Website & Software Development | Kushel Digi Solutions",
  description:
    "Looking to launch or scale your MLM business? Kushel Digi Solutions specializes in custom MLM software and website development with secure architecture, real-time commission tracking, and scalable network solutions. Get a free consultation today!",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/multi-level-marketing",
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
  return <MultiLevelComponent />;
};

export default Page;
