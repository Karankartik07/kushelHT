import NextJsComponent from "./NextJsComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/next-js",
  },
  title: "Leading Next.js Development Company | Kushel Digi Solutions",
  description:
    "Kushel Digi Solutions a globally recognized Next js web development company, is your go-to destination for top-notch Next.js Web development services",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/next-js",
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
  return <NextJsComponent />;
};

export default Page;
