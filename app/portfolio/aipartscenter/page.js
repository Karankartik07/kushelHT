import AiPartComponent from "./AiPartComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/aipartscenter",
  },
  title: 'A&I Parts Center | Ecommerce Growth with BigCommerce Website Development',
    description: "See how A&I Parts Center boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: 'A&I Parts Center | Ecommerce Growth with BigCommerce Website Development',
    description: "See how A&I Parts Center boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/aipartscenter",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699366/Group_1171281292_wjrtby.png",
        width: 1200,
        height: 630,
        alt: "A&I Parts Center BigCommerce Case Study",
      },
    ],
  },
};



const Page = () => {
  return <AiPartComponent />;
};

export default Page;