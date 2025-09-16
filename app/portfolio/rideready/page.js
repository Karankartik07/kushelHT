import Rideready from "./Rideready";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/rideready",
  },
    title: 'RideReady | Ecommerce Growth with BigCommerce Website Development',
    description: "See how RideReady boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
     title: 'RideReady | Ecommerce Growth with BigCommerce Website Development',
    description: "See how RideReady boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/rideready",
    type: "website",
  },
};

const Page = () => {
  return <Rideready />;
};

export default Page;
