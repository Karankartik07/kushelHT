import Graco from "./Gracocorp";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/graco-corp",
  },
   title: 'Graco Corporation | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Graco Corporation boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
   title: 'Graco Corporation | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Graco Corporation boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/graco-corp",
    type: "website",
  },
};

const Page = () => {
  return <Graco/>;
};

export default Page;
