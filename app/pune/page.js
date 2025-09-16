import PuneComponent from "./PuneComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/pune",
  },
  title: "Top Web Development Agency in Pune | Kushel Digi ",
  description: "Looking for the top web development agency in Pune. Our expert team delivers custom websites, scalable solutions, and digital growth for your business success.",
  openGraph: {
      title: "Top Web Development Agency in Pune | Kushel Digi ",
  description: "Looking for the top web development agency in Pune. Our expert team delivers custom websites, scalable solutions, and digital growth for your business success.",
    url: "https://www.kusheldigi.com/pune",
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
  return <PuneComponent />
};

export default Page;