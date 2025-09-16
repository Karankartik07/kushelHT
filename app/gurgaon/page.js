import GurgaonComponent from "./GurgaonComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/gurgaon",
  },
  title: " Web Development Company in Gurgaon | Kushel Digi",
  description: "Searching for the best web development company in Gurgaon? We design user-friendly, SEO-ready websites that bring you more traffic and customers",
  openGraph: {
      title: " Web Development Company in Gurgaon | Kushel Digi",
  description: "Searching for the best web development company in Gurgaon? We design user-friendly, SEO-ready websites that bring you more traffic and customers",
    url: "https://www.kusheldigi.com/gurgaon",
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
  return <GurgaonComponent />;
};

export default Page;