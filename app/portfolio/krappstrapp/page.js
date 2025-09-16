import Krappstrapp from "./Krappstrapp";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/krappstrapp",
  },
    title: 'Krapp Strapp | Ecommerce Growth with BigCommerce Website Development',
        description: "See how Krapp Strapp boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: 'Krapp Strapp | Ecommerce Growth with BigCommerce Website Development',
        description: "See how Krapp Strapp boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/krappstrapp",
    type: "website",

  },
};



const Page = () => {
  return <Krappstrapp />;
};

export default Page;