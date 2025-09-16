import WoodView from "./Woodview";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/woodView",
  },
       title: 'The WoodView | Ecommerce Growth with BigCommerce Website Development',
    description: "See how WoodView boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: 'The WoodView | Ecommerce Growth with BigCommerce Website Development',
    description: "See how WoodView boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/woodView",
 
  },
};

const Page = () => {
  return <WoodView />;
};

export default Page;
