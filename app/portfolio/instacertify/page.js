import Instacertify from "./Instacertify";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/instacertify",
  },
    title: "Instacertify | Ecommerce Growth with BigCommerce Website Development",
    description: 'See how Instacertify boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
  openGraph: {
    title: "Instacertify | Ecommerce Growth with BigCommerce Website Development",
    description: 'See how Instacertify boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
    url: "https://www.kusheldigi.com/portfolio/instacertify",
    type: "website",
  },
};

const Page = () => {
  return <Instacertify/>;
};

export default Page;
