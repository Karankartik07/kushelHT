import DigitalMarketing from "./digitaltitle";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/digital-marketing-agency",
  },
  title: "Your one stop place for top Digital Marketing services",
  description:
    "KushelDigi Solutions is one of the Professional and best Digital Marketing company, which provide a 360 Degree marketing approach",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/digital-marketing-agency",
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
  return <DigitalMarketing />;
};

export default Page;
