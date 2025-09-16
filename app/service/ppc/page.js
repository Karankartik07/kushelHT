import PpcComponent from "./PpcComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/ppc",
  },
  title: "KushelDigi Solutions- top PPC company",
  description:
    "Elevate your PPC performance with KushelDigi Solutions, your top PPC company. Drive targeted traffic & maximize ROI today!",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/ppc",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
        width: 800,
        height: 600,
        alt: "Kushel Digi Logo",
      },
    ],
  },
};

const Page = () => {
  return <PpcComponent />;
};

export default Page;
