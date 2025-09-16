
import ShopifyNew from "../../components/ShopifyNew"

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/shopify-development",
  },
  title: "Shopify Experts for eCommerce Development Growth | Kushel Digi",
  description:
    "Kushel Digi Solutions delivers Shopify development, theme customization, app integration, and ongoing support. Boost your eCommerce sales with our Shopify expertise.",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/shopify-development",
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

const Shopify = ({ notify }) => {

  return (
    <>
      <ShopifyNew notify={notify} />
    </>
  );
};

export default Shopify;

