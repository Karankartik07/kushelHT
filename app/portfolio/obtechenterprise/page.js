import Obtechenterprise from "./Obtechenterprise";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/obtechenterprise",
  },
     title: "Obtech Enterprise | Ecommerce Growth with BigCommerce Website Development",
        description: 'See how Obtech Enterprise boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
  openGraph: {
      title: "Obtech Enterprise | Ecommerce Growth with BigCommerce Website Development",
        description: 'See how Obtech Enterprise boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
    url: "https://www.kusheldigi.com/portfolio/obtechenterprise",
    type: "website",
  },
};

const Page = () => {
  return <Obtechenterprise />;
};

export default Page;
