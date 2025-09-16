import AboutNew from '../components/AboutNew'
export const metadata = {
  title: "About Us | Leading eCommerce & Digital Transformation Agency",
  description: "Get to know Kushel Digi Solutions leading eCommerce development company dedicated to building high-performing online stores and driving digital success for brands worldwide.",
  keywords: "about kushel digi, ecommerce development company, bigcommerce experts, shopify developers, digital transformation agency, ecommerce solutions",
  authors: [{ name: "Kushel Digi Solutions" }],
  creator: "Kushel Digi Solutions",
  publisher: "Kushel Digi Solutions",
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "https://www.kusheldigi.com/about",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "About Us | Leading eCommerce & Digital Transformation Agency",
    description: "Get to know Kushel Digi Solutions leading eCommerce development company dedicated to building high-performing online stores and driving digital success for brands worldwide.",
    url: "https://www.kusheldigi.com/about",
    type: "website",
    siteName: "Kushel Digi Solutions",
    locale: "en_US",
    images: [{ 
      url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744117394/who-we-are_z8oj40.png", 
      width: 1200, 
      height: 630, 
      alt: "About Kushel Digi Solutions - Leading eCommerce Development Company"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Leading eCommerce & Digital Transformation Agency",
    description: "Get to know Kushel Digi Solutions leading eCommerce development company dedicated to building high-performing online stores and driving digital success for brands.",
    images: ["https://res.cloudinary.com/dd9tagtiw/image/upload/v1744117394/who-we-are_z8oj40.png"],
    creator: "@kusheldigi",
  },
}

const About = ({ notify }) => {
  return (
    <>
      <AboutNew notify={notify} />
    </>
  );
};

export default About;