import Digitalmna from "./Digitalmna";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio/digitalmna",
  },
      title: "DigitalMNA | Ecommerce Growth with BigCommerce Website Development",
    description: 'See how DigitalMNA boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.',
  openGraph: {
       title: "DigitalMNA | Ecommerce Growth with BigCommerce Website Development",
    description: 'See how DigitalMNA boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study.', 
    url: "https://www.kusheldigi.com/portfolio/digitalmna",
    type: "website",
  },
};

const Page = () => {
  return <Digitalmna />;
};

export default Page;
