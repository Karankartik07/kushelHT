import ReactNativeComponent from "./ReactNativeComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/react-native",
  },
  title: "Empowering Mobile Experiences: React Native Development Company",
  description:
    "Kushel Digi Solutions stays is top React Js development company We specialize in developing ReactJS web applications for small to large-scale enterprises.",
  openGraph: {
    title: "Empowering Mobile Experiences: React Native Development Company",
    description:
      "Kushel Digi Solutions stays is top React Js development company We specialize in developing ReactJS web applications for small to large-scale enterprises.",
    url: "https://www.kusheldigi.com/service/react-native",
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
  return <ReactNativeComponent/>;
};

export default Page;
