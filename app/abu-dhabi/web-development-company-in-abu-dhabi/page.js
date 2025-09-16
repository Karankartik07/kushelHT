import AbuDhabiWebComponent from "./AbuDhabiWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/abu-dhabi/web-development-company-in-abu-dhabi",
  },
  title: "Web Development Company In Abu Dhabi | Kushel Digi  ",
  description: "Kushel Digi is a trusted web development company in Abu Dhabi. We design user-friendly, SEO-ready websites that help your business grow online",
  openGraph: {
      title: "Web Development Company In Abu Dhabi | Kushel Digi  ",
  description: "Kushel Digi is a trusted web development company in Abu Dhabi. We design user-friendly, SEO-ready websites that help your business grow online",
    url: "https://www.kusheldigi.com/abu-dhabi/web-development-company-in-abu-dhabi",
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
  return <AbuDhabiWebComponent />;
};

export default Page;