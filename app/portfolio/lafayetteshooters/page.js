import Lafayetteshooters from "./Lafayetteshooters";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/lafayetteshooters",
  },
       title: 'Lafayette Shooters | Ecommerce Growth with BigCommerce Website Development',
        description: "See how Lafayette Shooters boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
     title: 'Lafayette Shooters | Ecommerce Growth with BigCommerce Website Development',
        description: "See how Lafayette Shooters boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/lafayetteshooters",
    type: "website",
   
  },
};



const Page = () => {
  return <Lafayetteshooters />;
};

export default Page;