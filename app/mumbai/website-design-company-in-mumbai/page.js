import WebsiteMumbaiComponent from "./WebsiteMumbaiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/mumbai/website-design-company-in-mumbai",
  },
  title: "Website Design Company in Mumbai | Kushel Digi",
  description: "Looking for a trusted website design company in Mumbai. We create modern, responsive, and SEO-friendly websites to grow your business online.",
  openGraph: {
      title: "Website Design Company in Mumbai | Kushel Digi",
  description: "Looking for a trusted website design company in Mumbai. We create modern, responsive, and SEO-friendly websites to grow your business online.",
    url: "https://www.kusheldigi.com/mumbai/website-design-company-in-mumbai",
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
  return <WebsiteMumbaiComponent />;
};

export default Page;