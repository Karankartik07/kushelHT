import Fouroaksfarm from "./Fouroaksfarm";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/fouroaksfarm",
  },
   title: 'Four Oaks Farm Country Store | Ecommerce Growth with BigCommerce Website Development',
        description: "See how Four Oaks Farm Country Store boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
   title: 'Four Oaks Farm Country Store | Ecommerce Growth with BigCommerce Website Development',
        description: "See how Four Oaks Farm Country Store boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/fouroaksfarm",
    type: "website",
  },
};

const Page = () => {
  return <Fouroaksfarm />;
};

export default Page;
