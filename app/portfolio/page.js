import PortfolioComponent from "./PortfolioComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/portfolio",
  },
  title: "Showcasing eCommerce & Digital Solutions | Kushel Digi Portfolio",
  description:
    "Explore our portfolio of custom eCommerce development, BigCommerce solutions, web and mobile app projects, and UI/UX design. See Kushel Digi Solutions success stories.",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/portfolio",
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
  return <PortfolioComponent />;
};

export default Page;
