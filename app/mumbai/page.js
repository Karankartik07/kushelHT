import MumbaiComponent from "./MumbaiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/mumbai",
  },
  title: "Top Web Development Agency in Mumbai | Kushel Digi",
  description: "Kushel Digi is Mumbai’s trusted web development agency, crafting high-performing websites, eCommerce platforms, and digital solutions that help brands scale and succeed.",
  openGraph: {
      title: "Top Web Development Agency in Mumbai | Kushel Digi",
  description: "Kushel Digi is Mumbai’s trusted web development agency, crafting high-performing websites, eCommerce platforms, and digital solutions that help brands scale and succeed.",
    url: "https://www.kusheldigi.com/mumbai",
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
  return <MumbaiComponent />;
};

export default Page;