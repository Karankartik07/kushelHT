"use client"
// export const metadata = {
//   title: "Latest eCommerce Trends & Tech Insights | Kushel Digi Blog",
//   description:
//     "Explore expert tips on eCommerce development, digital marketing, web design, and business growth. Stay updated with Kushel Digi's latest industry insights and trends.",
//   keywords:
//     "ecommerce blog, digital marketing tips, web development insights, business growth strategies, kushel digi blog, ecommerce trends, tech insights, bigcommerce tips, shopify guides",
//   authors: [{ name: "Kushel Digi Solutions" }],
//   creator: "Kushel Digi Solutions",
//   publisher: "Kushel Digi Solutions",
//   metadataBase: new URL("https://www.kusheldigi.com"),
//   alternates: {
//     canonical: "https://www.kusheldigi.com/blog",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   openGraph: {
//     title: "Latest eCommerce Trends & Tech Insights | Kushel Digi Blog",
//     description:
//       "Explore expert tips on eCommerce development, digital marketing, web design, and business growth. Stay updated with Kushel Digi's latest industry insights and trends.",
//     url: "https://www.kusheldigi.com/blog",
//     type: "website",
//     siteName: "Kushel Digi Solutions",
//     locale: "en_US",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
//         width: 1200,
//         height: 630,
//         alt: "Kushel Digi Blog - Latest eCommerce and Technology Insights",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Latest eCommerce Trends & Tech Insights | Kushel Digi Blog",
//     description:
//       "Explore expert tips on eCommerce development, digital marketing, web design, and business growth. Stay updated with industry insights.",
//     images: [
//       "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
//     ],
//     creator: "@kusheldigi",
//   },
//   other: {
//     "content:type": "Blog",
//     "content:category": "eCommerce, Technology, Digital Marketing",
//     "content:topics":
//       "eCommerce Development, BigCommerce, Shopify, Web Design, SEO",
//   },
// };
import { useState } from "react";
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import SectionAll from "./AllSection/SectionAll";
import Article from "./Article/Article";
import BlogNew from "./BlogNew";

export default function Page() {
  const [show, setShow] = useState("all");
  const parentfunct = (id) => {
    setShow(id);
  };
  return (
    <>
      <Navbar />
      <BlogNew parentfunct={parentfunct} />
      {show === "all" ? <Article title="Latest" /> :""}
      {show === "all" ? <Article title="eCommerce" /> :""}
      {show === "all" ? <Article title="web-dev" /> :""}
      {show === "all" ? <Article title="Business" /> :""}
      {show === "all" ? <Article title="bigcommerce-development" /> :""}
      {show === "all" ? <Article title="shopify" /> :""}
      <SectionAll />
      <Footer />
    </>
  );
}
