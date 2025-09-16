import WooCommerceNew from "../../components/WoocommerceNew";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/woocommerce-development",
  },
  openGraph: {
    title: "Professional WooCommerce Development Company | Kushel Digi",
    description: "Transform your online business with Kushel Digi’s WooCommerce development, custom plugins, mobile app integration, and secure migration for scalable growth",
    url: "https://www.kusheldigi.com/service/woocommerce-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724840162/uist.9dd8c573f269fd48858b_zstij9.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Woocommerce = ({ notify }) => {
  
  return (
    <>
    <WooCommerceNew notify={notify} />
    </>
  );
};

export default Woocommerce;