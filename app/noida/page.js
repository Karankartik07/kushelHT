import NoidaComponent from "./NoidaComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/noida",
  },
  title: "Web Development Company in Noida | Kushel Digi",
  description: "Top web development company in Noida offering custom websites, eommerce solutions & SEO-ready design. Build your online presence with Kushel Digi!",
  openGraph: {
      title: "Web Development Company in Noida | Kushel Digi",
  description: "Top web development company in Noida offering custom websites, eommerce solutions & SEO-ready design. Build your online presence with Kushel Digi!",
    url: "https://www.kusheldigi.com/noida",
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
  return <NoidaComponent />;
};

export default Page;