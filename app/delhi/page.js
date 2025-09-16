import DelhiComponent from "./DelhiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/delhi",
  },
  title: "Web Development Company in Delhi | Kushel Digi",
  description: "Professional web development company in Delhi offering custom websites, eommerce solutions & SEO-friendly design. Get started with Kushel Digi today!",
  openGraph: {
      title: "Web Development Company in Delhi | Kushel Digi",
  description: "Professional web development company in Delhi offering custom websites, eommerce solutions & SEO-friendly design. Get started with Kushel Digi today!",
    url: "https://www.kusheldigi.com/delhi",
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
  return <DelhiComponent />;
};

export default Page;