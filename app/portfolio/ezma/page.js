import Ezma from "./Ezma";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/ezma",
  },
  title: "EZMA | Ecommerce Growth with BigCommerce Website Development",
  description:
    "See how EZMA boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
  openGraph: {
    title: "EZMA | Ecommerce Growth with BigCommerce Website Development",
    description:
      "See how EZMA boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.",
    url: "https://www.kusheldigi.com/portfolio/ezma",
    type: "website",
  },
};

const Page = () => {
  return <Ezma />;
};

export default Page;
