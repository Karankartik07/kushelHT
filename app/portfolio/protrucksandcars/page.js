import ProTrucks from "./Protrucksandcars";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/protrucksandcars",
  },
    title: 'Pro Trucks and Cars | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Pro Trucks and Cars boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: 'Pro Trucks and Cars | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Pro Trucks and Cars boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/protrucksandcars",
    type: "website",
  },
};

const Page = () => {
  return <ProTrucks />;
};

export default Page;
