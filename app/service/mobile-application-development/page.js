import MobileAppComponent from "./MobileAppComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/mobile-application-development",
  },
  title: "Unlock the Power of Mobile App Development",
  description:
    "The best mobile app development company, expert in Android, iOS, and more. Our company not only enhances online presence but also redefines digital experiences.",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/mobile-application-development",
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
  return <MobileAppComponent />;
};

export default Page;
