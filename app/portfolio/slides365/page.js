import SlidesCaseStudyComponent from "./SlidesCaseStudyComponent";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/slide365",
  },
  
  title: "Slides365 | Ecommerce Growth with BigCommerce Website Development",
  description:
    "See how Slides365 boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: "Slides365 Case Study | Kushel Digi Solutions",
    description:
      "Explore how Kushel Digi transformed Slides365 with BigCommerce ecommerce solutions. Increased performance, better UI, and real business impact.",
    url: "https://www.kusheldigi.com/portfolio/slide365",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699366/Group_1171281292_wjrtby.png",
        width: 1200,
        height: 630,
        alt: "Slides365 BigCommerce Case Study",
      },
    ],
  },
};



const Page = () => {
  return <SlidesCaseStudyComponent />;
};

export default Page;