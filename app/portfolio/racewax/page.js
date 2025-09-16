import Racewax from "./Racewax";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/racewax",
  },
 title: 'Race Wax | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Race Wax boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
  title: 'Race Wax | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Race Wax boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/racewax",
    type: "website",
  },
};

const Page = () => {
  return <Racewax />;
};

export default Page;
