import BigcommerceDubaiComponent from "./BigcommerceDubaiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/dubai/website-design-company-in-dubai",
  },
  title: "Website Design Company in Dubai | Kushel Digi",
  description: "Kushel Digi is a trusted Website Design Company in Dubai offering creative, responsive, and SEO-friendly web solutions to help your business grow online.",
  openGraph: {
      title: "Website Design Company in Dubai | Kushel Digi",
  description: "Kushel Digi is a trusted Website Design Company in Dubai offering creative, responsive, and SEO-friendly web solutions to help your business grow online.",
    url: "https://www.kusheldigi.com/dubai/website-design-company-in-dubai",
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
  return <BigcommerceDubaiComponent />;
};

export default Page;