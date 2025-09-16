import SmmComponent from "./SmmComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/smm",
  },
  title: "KushelDigi Solutions- the Best SMM Service company",
  description:
    "Unlock the power of social media with KushelDigi Solutions, your trusted partner for the best SMM services. Boost your brand today!",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/smm",
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
  return <SmmComponent />;
};

export default Page;
