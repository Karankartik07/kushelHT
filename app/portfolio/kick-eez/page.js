import KickeezComponent from "./KickeezComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/kick-eez",
  },
  title: 'KICK-EEZ | Ecommerce Growth with BigCommerce Website Development',
  description: "See how KICK-EEZ boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: 'KICK-EEZ | Ecommerce Growth with BigCommerce Website Development',
    description: "See how KICK-EEZ boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/kick-eez",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699366/Group_1171281292_wjrtby.png",
        width: 1200,
        height: 630,
        alt: "KICK-EEZ BigCommerce Case Study",
      },
    ],
  },
};



const Page = () => {
  return <KickeezComponent />;
};

export default Page;