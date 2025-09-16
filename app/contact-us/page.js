
export const metadata = {
  title: "Contact Us | Custom eCommerce Development & BigCommerce Experts | Kushel Digi",
  description: "Connect with Kushel Digi Solutions for expert eCommerce development, BigCommerce solutions, and digital strategy. Get a free discovery call and start your project today.",
  keywords: "contact kushel digi, ecommerce development consultation, bigcommerce experts contact, free discovery call, ecommerce project inquiry, digital strategy consultation",
  authors: [{ name: "Kushel Digi Solutions" }],
  creator: "Kushel Digi Solutions",
  publisher: "Kushel Digi Solutions",
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "https://www.kusheldigi.com/contact-us",
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
    title: "Contact Us | Custom eCommerce Development & BigCommerce Experts | Kushel Digi",
    description: "Connect with Kushel Digi Solutions for expert eCommerce development, BigCommerce solutions, and digital strategy. Get a free discovery call and start your project today.",
    url: "https://www.kusheldigi.com/contact-us",
    type: "website",
    siteName: "Kushel Digi Solutions",
    locale: "en_US",
    images: [{
      url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
      width: 1200,
      height: 630,
      alt: "Contact Kushel Digi Solutions - Expert eCommerce Development Team"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Custom eCommerce Development & BigCommerce Experts | Kushel Digi",
    description: "Connect with Kushel Digi Solutions for expert eCommerce development, BigCommerce solutions, and digital strategy. Get a free discovery call today.",
    images: ["https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"],
    creator: "@kusheldigi",
  },
  other: {
    "page:type": "Contact",
    "business:contact_data": "phone, email, address",
    "service:consultation": "Free Discovery Call Available",
  },
}


import ContactComponent from "./ContactComponent";

const Page = () => {

  return (
    <div>
      <ContactComponent />
    </div>
  );
};

export default Page;
