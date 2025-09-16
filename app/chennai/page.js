import ChennaiComponent from "./ChennaiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/chennai",
  },
  title: " Web Design Company in Chennai | Kushel Digi",
  description: "Looking for a creative web design company in Chennai? Kushel Digi crafts modern, user-friendly, and responsive websites that reflect your brand and help your business grow online.",
  openGraph: {
      title: " Web Design Company in Chennai | Kushel Digi",
  description: "Looking for a creative web design company in Chennai? Kushel Digi crafts modern, user-friendly, and responsive websites that reflect your brand and help your business grow online.",
    url: "https://www.kusheldigi.com/chennai",
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
  return <ChennaiComponent />;
};

export default Page;