import TopBrassComponent from "./TopBrassComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/topbrasstactical",
  },
  title: "Top Brass Tactical | Ecommerce Growth with BigCommerce Website Development",
  description:
    "See how Top Brass Tactical boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: "Top Brass Tactical | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how Top Brass Tactical boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/topbrasstactical",
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
  return <TopBrassComponent />;
};

export default Page;
