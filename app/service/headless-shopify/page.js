import HeadlessShopifyComponent from "./HeadlessShopifyComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/headless-shopify",
  },
  title: "Headless Shopify Development Company | Kushel Digi",
  description:
    "Experience next-gen ecommerce with headless Shopify. Custom design, secure checkout, global scalability, and ongoing support. Get your free quote now!",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/service/headless-shopify",
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
  return <HeadlessShopifyComponent />;
};

export default Page;
