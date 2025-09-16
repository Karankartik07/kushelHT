import WebDevChennaiComponent from "./WebDevChennaiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/chennai/web-development-company-in-chennai",
  },
  title: " Web Development Company in Chennai | Kushel Digi",
  description: "As a leading Web Development Company in Chennai, Kushel Digi delivers user-friendly websites with sleek designs and smart features that make your business shine",
  openGraph: {
      title: " Web Development Company in Chennai | Kushel Digi",
  description: "As a leading Web Development Company in Chennai, Kushel Digi delivers user-friendly websites with sleek designs and smart features that make your business shine",
    url: "https://www.kusheldigi.com/chennai/web-development-company-in-chennai",
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
  return <WebDevChennaiComponent />;
};

export default Page;