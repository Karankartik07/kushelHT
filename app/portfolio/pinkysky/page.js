import Pinksky from "./Pinksky";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/pinkysky",
  },
          title: "Pinkysky | Ecommerce Growth with BigCommerce Website Development",
        description: 'See how Pinkysky boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
  openGraph: {
        title: "Pinkysky | Ecommerce Growth with BigCommerce Website Development",
        description: 'See how Pinkysky boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
    url: "https://www.kusheldigi.com/portfolio/pinkysky",
    type: "website",
  },
};

const Page = () => {
  return <Pinksky />;
};

export default Page;
