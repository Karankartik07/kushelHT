import IosComponent from "./IosComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/ios",
  },
  title: "IOS app development company - kusheldigi Solutions",
  description:
    "Best iOS app development company! Kushel Digi's staff specializes in developing innovative, user-friendly apps that improve user experiences",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/ios",
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
  return <IosComponent />;
};

export default Page;
