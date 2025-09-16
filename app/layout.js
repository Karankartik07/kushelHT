import Script from "next/script";
import "./globals.css"
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Expert eCommerce & BigCommerce Development Company ",
  description: "Work with 8+ year ecommerce experts to build, optimize, and grow your ecommerce store—BigCommerce and Shopify design, development, integrations, and apps.",
  keywords: [
    "Best Web Design Agency",
    "Professional Web Design Company",
    "how to build your custom solution",
    "Ecommerce Development",
    "Ecommerce Development Experts",
    "Custom App Development for BigCommerce",
    "full-service eCommerce digital agency",
    "Scalable, Custom Ecommerce Solutions",
    "BigCommerce Design & Development Services",
    "Custom Ecommerce Solutions",
    "Custom BigCommerce Integrations",
    "BigCommerce SEO Support",
    "Custom BigCommerce Checkout",
    "Headless BigCommerce Development",
    "Shopify Design & Development Services",
    "Shopify merchants with specialized development",
    "premier ecommerce UX agency",
    "customize your BigCommerce or Shopify theme",
    "Ecommerce UX Agency",
    "Custom App Development for BigCommerce and Shopify Stores"
  ],
  authors: [{ name: "Kushel Digi Solutions" }],
  creator: "Kushel Digi Solutions",
  publisher: "Kushel Digi Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.kusheldigi.com/"),
  alternates: {
    canonical: "https://www.kusheldigi.com/",
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
  twitter: {
    card: "summary_large_image",
    title: "Expert eCommerce & BigCommerce Development Company | Kushel Digi",
    description: "Work with 8+ year ecommerce experts to build, optimize, and grow your ecommerce store—BigCommerce and Shopify design, development, integrations, and apps.",
    images: [{
      url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
      width: 1200,
      height: 630,
      alt: "Kushel Digi Solutions - eCommerce Development Company"
    }],
    creator: "@kusheldigi",
    site: "@kusheldigi",
  },
  openGraph: {
    title: "Expert eCommerce & BigCommerce Development Company | Kushel Digi",
    description: "Work with 8+ year ecommerce experts to build, optimize, and grow your ecommerce store—BigCommerce and Shopify design, development, integrations, and apps.",
    url: "https://www.kusheldigi.com/",
    type: "website",
    siteName: "Kushel Digi Solutions",
    locale: "en_US",
    images: [{
      url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
      width: 1200,
      height: 630,
      alt: "Kushel Digi Solutions - Expert eCommerce Development Company"
    }],
  },
  verification: {
    google: "u8hOCEYTlB2dEFUZ297M4Kzx-y4H_RU35SXKUqwsEzA",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  category: "technology",
  classification: "business",
  other: {
    "revisit-after": "7 days",
    "language": "English",
    "distribution": "global",
    "rating": "general",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
    "geo.position": "28.5355;77.3910",
    "ICBM": "28.5355, 77.3910",
  },
};

const jsonLd ={
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Service"],
  "@id": "https://www.kusheldigi.com/#organization",
  "name": "Kushel Digi Solutions",
  "url": "https://www.kusheldigi.com/",
  "logo": "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
  "image": "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
  "description": "Transform your online presence with Kushel Digi Solutions eCommerce development, BigCommerce solutions, and tailored B2B and marketplace platforms. Start your project today!",
  "foundingDate": "2017",
  "founder": {
    "@type": "Person",
    "name": "Mr. Shubhaam Gupta"
  },
  "numberOfEmployees": 50,
  "priceRange": "$$",
  "telephone": "+91-9045301702",
  "email": "info@kusheldigi.com",
  "openingHours": "Mo-Sa 10:00-17:00",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, D242, F-32B, Sector 63 Rd",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6289676,
    "longitude": 77.3017304
  },
  "sameAs": [
    "https://www.facebook.com/kusheldigisolutions/",
    "https://www.linkedin.com/company/kusheldigisolutions/",
    "https://www.instagram.com/kusheldigi/",
    "https://twitter.com/KushelDigisoln"
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "USA" },
    { "@type": "Country", "name": "UAE" }
  ],
  "serviceType": [
    "Ecommerce Website Development",
    "BigCommerce Website Development"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Website Development & Ecommerce Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ecommerce Website Development",
          "description": "End-to-end custom ecommerce store design and development, with scalable features, user-friendly UI/UX, secure payments, and SEO optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "BigCommerce Development",
          "description": "Certified BigCommerce implementation, migration, app integration, replatforming, and ongoing support for growth."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "110"
  },
  "review": [
    {
      "@type": "Review",
      "author": "Annu Koteshwara",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Kushel Digi delivered exceptional BigCommerce development services."
    }
  ]
}


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kushel Digi Solutions",
  "url": "https://www.kusheldigi.com/",
  "description": "Expert eCommerce and BigCommerce development company",
  "publisher": {
    "@type": "Organization",
    "name": "Kushel Digi Solutions"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.kusheldigi.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.kusheldigi.com/"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Noida" />
        <meta name="geo.position" content="28.5355;77.3910" />
        <meta name="ICBM" content="28.5355, 77.3910" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Critical Resource Preloading for First Section */}
        <link rel="preload" href="/app/COMMON/Navbar/Navbar.js" as="script" />
        <link rel="preload" href="/app/components/Home/HomeNewBanner/HomeNewBanner.jsx" as="script" />
        <link rel="preload" href="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230407/whatsapp_ztk2oe.png" as="image" />
        <link rel="preload" href="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230446/telephone_wnquao.png" as="image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/app/favicon.ico"/>
    
       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Hreflang for International SEO */}
        <link rel="alternate" hrefLang="en-us" href="https://www.kusheldigi.com/" />
        <link rel="alternate" hrefLang="en-in" href="https://www.kusheldigi.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.kusheldigi.com/" />

        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K7DSK87RV0"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K7DSK87RV0', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `,
          }}
        />

        {/* Google Tag Manager (Optional - add your GTM ID) */}
        {/* <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        /> */}

        {/* Microsoft Clarity (Optional) */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        {/* Google Tag Manager (noscript) - Uncomment if using GTM */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript> */}

        <ToastContainer position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
