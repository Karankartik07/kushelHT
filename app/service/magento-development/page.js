
import MagentoNew  from "../../components/MagentoNew"

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/magento-development",
  },
  title: "Magento Development Experts for eCommerce Success | Kushel Digi",
  description:
    "Kushel Digi offers Magento customization, PWA development, extension integration, and ongoing maintenance for secure, scalable, and innovative eCommerce platforms.",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/magento-development",
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

const magento = ({ notify }) => {
  
  return (
    <>
    <MagentoNew notify={notify} />
    </>
  );
};

export default magento;

