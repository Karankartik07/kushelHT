
export const metadata = {
  title: "Best BigCommerce Development Services |  Kushel Digi",
  description: "Boost your online store with Kushel Digi's expert BigCommerce development, seamless migration, custom design, and scalable eCommerce solutions for business growth. Get started today!",
  keywords: "bigcommerce development, bigcommerce developers, bigcommerce agency, bigcommerce experts, ecommerce development, bigcommerce migration, bigcommerce design, kushel digi bigcommerce",
  authors: [{ name: "Kushel Digi Solutions" }],
  creator: "Kushel Digi Solutions",
  publisher: "Kushel Digi Solutions",
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/bigcommerce-development",
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
    title: "Best BigCommerce Development Services |  Kushel Digi",
    description: "Boost your online store with Kushel Digi's expert BigCommerce development, seamless migration, custom design, and scalable eCommerce solutions for business growth.",
    url: "https://www.kusheldigi.com/service/bigcommerce-development",
    type: "website",
    siteName: "Kushel Digi Solutions",
    locale: "en_US",
    images: [{ 
      url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463967/mockup-4_h41e2o.png", 
      width: 1200, 
      height: 630, 
      alt: "BigCommerce Development Services by Kushel Digi Solutions - Expert eCommerce Developers"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best BigCommerce Development Services | Kushel Digi",
    description: "Boost your online store with Kushel Digi's expert BigCommerce development, seamless migration, custom design, and scalable eCommerce solutions.",
    images: ["https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463967/mockup-4_h41e2o.png"],
    creator: "@kusheldigi",
  },
  other: {
    "service:type": "BigCommerce Development",
    "service:category": "eCommerce Development",
    "service:location": "India, United States",
    "platform:specialization": "BigCommerce, eCommerce",
  },
}

// Import your client component
import BigCommerceComponent from '../../components/Bigcommercenew';

const BigCommercePage = ({ notify }) => {
  return <BigCommerceComponent notify={notify} />;
};

export default BigCommercePage;