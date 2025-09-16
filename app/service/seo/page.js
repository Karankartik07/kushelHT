import SeoComponent from "./SeoComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/seo",
  },
  title: "KushelDigi Solutions- the Best SEO agency",
  description:
    "Unlock your online potential with KushelDigi Solutions – Your best SEO agency for top-notch strategies and unmatched results. Boost your visibility today!",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/seo",
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
  return <SeoComponent />;
};

export default Page;
