import CrazyCMS from "./Mycrazysimplecms";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/mycrazysimplecms",
  },
  title:
    "MyCrazySimpleCMS | Ecommerce Growth with BigCommerce Website Development",
  description:
    "See how MyCrazySimpleCMS boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title:
      "MyCrazySimpleCMS | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how MyCrazySimpleCMS boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/mycrazysimplecms",
    type: "website",
  },
};

const Page = () => {
  return <CrazyCMS />;
};

export default Page;
