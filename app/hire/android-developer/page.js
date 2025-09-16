import AndroidDevComponent from "./AndroidDevComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/hire/android-developer",
  },
  title: "KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified",
  description:
    "Web Development Company | Kushel Digi Solutions",
  openGraph: {
    title: "KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified",
    description:
      "Web Development Company | Kushel Digi Solutions",
    url: "https://www.kusheldigi.com/hire/android-developer",
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
  return <AndroidDevComponent />;
};

export default Page;
