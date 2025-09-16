import CarolinaWebComponent from "./CarolinaWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/north-carolina/web-development-company-in-north-carolina",
  },
  title: "Get Best Web Development Company in North Carolina ",
  description: "Need a web development company in North Carolina that not just hands over a site but delivers results? You've just landed in the perfect place. At Kushel Digi Solutions.",
  openGraph: {
      title: "Get Best Web Development Company in North Carolina",
  description: "Need a web development company in North Carolina that not just hands over a site but delivers results? You've just landed in the perfect place. At Kushel Digi Solutions.",
    url: "https://www.kusheldigi.com/north-carolina/web-development-company-in-north-carolina",
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
  return <CarolinaWebComponent />;
};

export default Page;