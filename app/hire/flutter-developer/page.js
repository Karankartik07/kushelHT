import FlutterDevComponent from "./FlutterDevComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/hire/flutter-developer",
  },
  title: "KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified",
  description:
    "Web Development Company | Kushel Digi Solutions",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/hire/flutter-developer",
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
  return <FlutterDevComponent />;
};

export default Page;
