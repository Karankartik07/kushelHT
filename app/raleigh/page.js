import RaleighComponent from "./RaleighComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/raleigh",
  },
  title: " Trusted Web Development Company in Raleigh for Businesses",
  description: "Kushel Digi Solutions is a trusted web development company in Raleigh for businesses, creating modern, result-driven websites that boost growth.",
  openGraph: {
      title: "Trusted Web Development Company in Raleigh for Businesses",
  description: "Kushel Digi Solutions is a trusted web development company in Raleigh for businesses, creating modern, result-driven websites that boost growth.",
    url: "https://www.kusheldigi.com/raleigh",
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
  return <RaleighComponent />;
};

export default Page;