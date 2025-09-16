import AbuDhabiComponent from "./AbuDhabiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/abu-dhabi",
  },
  title: " Website Development Company In Abu Dhabi, UAE | Kushel Digi ",
  description: "As a top website development company in Abu Dhabi, UAE, Kushel Digi offers creative, SEO-ready, and scalable websites designed to grow your digital presence.",
  openGraph: {
      title: "Website Development Company In Abu Dhabi, UAE | Kushel Digi ",
  description: "As a top website development company in Abu Dhabi, UAE, Kushel Digi offers creative, SEO-ready, and scalable websites designed to grow your digital presence.",
    url: "https://www.kusheldigi.com/abu-dhabi",
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
  return <AbuDhabiComponent />;
};

export default Page;