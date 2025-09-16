import Solenoid from "./SolenoidN";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/solenoid-ninja",
  },
   title:
      "Solenoid Ninja | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how Solenoid Ninja boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
   title:
      "Solenoid Ninja | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how Solenoid Ninja boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/solenoid-ninja",
    type: "website",

  },
};



const Page = () => {
  return <Solenoid />;
};

export default Page;