import ThesurvivalMode from "./Thesurvivalmode";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/thesurvivalmode",
  },
  title: 'The Survival Mode | Ecommerce Growth with BigCommerce Website Development',
        description: "See how the Survival Mode Tactical boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
     title: 'The Survival Mode | Ecommerce Growth with BigCommerce Website Development',
        description: "See how the Survival Mode Tactical boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/thesurvivalmode",
    type: "website",

  },
};



const Page = () => {
  return <ThesurvivalMode />;
};

export default Page;