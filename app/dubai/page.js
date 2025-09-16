import DubaiComponent from "./DubaiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/dubai",
  },
  title: "Web Design Agency Dubai | Kushel Digi",
  description: "Searching for a web design agency Dubai? We craft modern, user-friendly websites that reflect your brand and help you attract more customers online.",
  openGraph: {
      title: "Web Design Agency Dubai | Kushel Digi",
  description: "Searching for a web design agency Dubai? We craft modern, user-friendly websites that reflect your brand and help you attract more customers online.",
    url: "https://www.kusheldigi.com/dubai",
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
  return <DubaiComponent />;
};

export default Page;