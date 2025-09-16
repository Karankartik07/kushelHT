import SitesCaseStudyComponent from "./SitesCaseStudyComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/sitesandscopes",
  },
  title: "Sites and Scopes | Ecommerce Growth with BigCommerce Website Development",
  description:
    "See how Sites and Scopes boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: "Sites and Scopes Case Study | Kushel Digi Solutions",
    description:
      "Explore how Kushel Digi transformed Sites and Scopes with BigCommerce ecommerce solutions. Increased performance, better UI, and real business impact.",
    url: "https://www.kusheldigi.com/portfolio/sitesandscopes",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699366/Group_1171281292_wjrtby.png",
        width: 1200,
        height: 630,
        alt: "Sites and Scopes BigCommerce Case Study",
      },
    ],
  },
};



const Page = () => {
  return <SitesCaseStudyComponent />;
};

export default Page;