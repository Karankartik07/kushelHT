import ReactNativeComponent from "./ReactNativeComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/hire/react-native-developer",
  },
  title: "React Native Mobile App Development Company - KushelDigi",
  description:
    "KushelDigi is the best React Native mobile app development company in India, offering high-quality React Native development services to build cross-platform mobile apps.",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/hire/react-native-developer",
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
  return <ReactNativeComponent />;
};

export default Page;
