import CarolinaComponent from "./CarolinaComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/north-carolina",
  },
  title: " Top Web Development Company in North Carolina | Kushel Digi ",
  description: "Your business deserves results, not just a website. Kushel Digi Solutions is the trusted web development company in North Carolina to bring your vision alive.",
  openGraph: {
      title: "Top Web Development Company in North Carolina | Kushel Digi",
  description: "Your business deserves results, not just a website. Kushel Digi Solutions is the trusted web development company in North Carolina to bring your vision alive.",
    url: "https://www.kusheldigi.com/north-carolina",
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
  return <CarolinaComponent />;
};

export default Page;