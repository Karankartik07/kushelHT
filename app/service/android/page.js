// app/android-app-development/page.js (or wherever this page is located)

export const metadata = {
  title: "Best Android App Development Services | Custom Android Apps | Kushel Digi",
  description: "Leading Android app development company offering custom Android app development services. Expert Android developers creating high-quality mobile apps for businesses. Get started today!",
  keywords: "android app development, custom android apps, android app development company, android developers, mobile app development, android application development services, kushel digi android development",
  authors: [{ name: "Kushel Digi Solutions" }],
  creator: "Kushel Digi Solutions",
  publisher: "Kushel Digi Solutions",
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/android",
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
    title: "Best Android App Development Services | Custom Android Apps | Kushel Digi",
    description: "Leading Android app development company offering custom Android app development services. Expert Android developers creating high-quality mobile apps for businesses.",
    url: "https://www.kusheldigi.com/service/android",
    type: "website",
    siteName: "Kushel Digi Solutions",
    locale: "en_US",
    images: [{ 
      url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724831488/androids.a9c21f0c111772a8cc17_na3ivu.png", 
      width: 1200, 
      height: 630, 
      alt: "Custom Android App Development Services by Kushel Digi Solutions"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Android App Development Services | Custom Android Apps | Kushel Digi",
    description: "Leading Android app development company offering custom Android app development services. Expert Android developers creating high-quality mobile apps.",
    images: ["https://res.cloudinary.com/dd9tagtiw/image/upload/v1724831488/androids.a9c21f0c111772a8cc17_na3ivu.png"],
    creator: "@kusheldigi",
  },
  other: {
    "service:type": "Android App Development",
    "service:category": "Mobile Application Development",
    "service:location": "India, United States",
  },
}

import AndroidComponent from './AndroidComponent';

const AndroidPage = ({ notify }) => {
  return <AndroidComponent notify={notify} />;
};

export default AndroidPage;