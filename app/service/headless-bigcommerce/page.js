import HeadlessComponent from "./HeadlessComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/headless-bigcommerce",
  },
  title: "Headless BigCommerce Development Company | Kushel Digi",
  description:
    "Launch blazing-fast, secure headless BigCommerce stores in the USA. API-first, scalable solutions by certified experts. Get a free consultation today!",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/headless-bigcommerce",
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
  return <HeadlessComponent />;
};

export default Page;
