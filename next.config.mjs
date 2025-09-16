// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['res.cloudinary.com'], // Add Cloudinary domain here
//     },
//   };

//   export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Advanced optimization settings
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Image optimization
  images: {
    domains: ["res.cloudinary.com"],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'framer-motion', 
      'gsap',
      'swiper',
      'react-slick'
    ],
    // Temporarily disable problematic features
    // optimizeCss: true,
    // scrollRestoration: true,
    // optimizeServerReact: true,
    // turbo: {
    //   rules: {
    //     '*.svg': {
    //       loaders: ['@svgr/webpack'],
    //       as: '*.js',
    //     },
    //   },
    // },
  },

  // Webpack optimization for production
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Advanced code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 30,
        maxAsyncRequests: 30,
        minSize: 10000,
        maxSize: 200000,
        cacheGroups: {
          // Mobile-specific chunks
          mobile: {
            test: /[\\/]node_modules[\\/](swiper|react-slick)[\\/]/,
            name: 'mobile',
            chunks: 'all',
            priority: 20,
            maxSize: 100000,
          },
          // React ecosystem - highest priority for critical components
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 40,
            maxSize: 150000,
          },
          // Critical components - load first
          critical: {
            test: /[\\/]app[\\/](COMMON|components[\\/]Home[\\/](HomeNewBanner|HomeTech))[\\/]/,
            name: 'critical',
            chunks: 'all',
            priority: 35,
            maxSize: 100000,
          },
          // Icons and UI libraries
          icons: {
            test: /[\\/]node_modules[\\/](react-icons|@heroicons)[\\/]/,
            name: 'icons',
            chunks: 'all',
            priority: 25,
            maxSize: 50000,
          },
          // Animation libraries
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion|gsap|lenis)[\\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 15,
            maxSize: 100000,
          },
          // Vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            maxSize: 200000,
          },
          // Common chunks
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            maxSize: 100000,
          },
        },
      };

      // Tree shaking optimizations
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      config.optimization.concatenateModules = true;
      
      // CSS optimization
      config.optimization.minimize = true;
      
      // Module concatenation for better performance
      config.optimization.concatenateModules = true;
    }

    return config;
  },

  async redirects() {
    console.log("Redirects loaded"); // Debug
    return [
      {
        source: "/web-development-in-usa",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/bigcommerce",
        destination: "/bigcommerce-development",
        permanent: true,
      },
      {
        source: "/ecommerce-solutions",
        destination: "/ecommerce-development",
        permanent: true,
      },
      {
        source: "/web-development-usa",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/web-d",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/blogs/wp-content/uploads/2022/05/8-770x470.jpg",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/ecommerce-solutions-usa%E2%80%9D",
        destination: "/ecommerce-development",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/ecommerce-solutions-usa",
        destination: "/ecommerce-development",
        permanent: true,
      },
      {
        source: "/magento",
        destination: "/magento-development",
        permanent: true,
      },
      {
        source: "/shopify",
        destination: "/shopify-development",
        permanent: true,
      },
      {
        source:
          "/web-development%3Cbr%3E%0A!%5BImage%20description%5D(https:/dev-to-uploads.s3.amazonaws.com/uploads/articles/mc2g64zluond0brjxjhn.jpg)",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/bigComm",
        destination: "/bigcommerce-development",
        permanent: true,
      },
      {
        source: "/woocommerce",
        destination: "/woocommerce-development",
        permanent: true,
      },
      {
        source: "/1/HfN/1179i0w3irc8z891wyjkde58o1ogucdfccfaa.placename",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/rifflesupply",
        destination: "/riflesupply",
        permanent: true,
      },
      {
        source: "/pro-track",
        destination: "/protrucksandcars",
        permanent: true,
      },
      {
        source: "/rely",
        destination: "/relysafety",
        permanent: true,
      },
      {
        source: "/ballistic",
        destination: "/ballisticdummylab",
        permanent: true,
      },
      {
        source: "/sites",
        destination: "/sitesandscopes",
        permanent: true,
      },
      {
        source: "/topbrass",
        destination: "/topbrasstactical",
        permanent: true,
      },
      {
        source: "/Slidesdesign",
        destination: "/slides365",
        permanent: true,
      },
      {
        source: "/2ndamendment",
        destination: "/2ndamendmentguns",
        permanent: true,
      },
      {
        source: "/blackRhino",
        destination: "/blackrhinoconcealment",
        permanent: true,
      },
      {
        source: "/Survival",
        destination: "/thesurvivalmode",
        permanent: true,
      },
      {
        source: "/Race-wax",
        destination: "/racewax",
        permanent: true,
      },
      {
        source: "/Krap-strap",
        destination: "/krappstrapp",
        permanent: true,
      },
      {
        source: "/bobcat",
        destination: "/bobcatarmament",
        permanent: true,
      },
      {
        source: "/serve",
        destination: "/servapure",
        permanent: true,
      },
      {
        source: "/lafayette-shooters",
        destination: "/lafayetteshooters",
        permanent: true,
      },
      {
        source: "/four-farm",
        destination: "/fouroaksfarm",
        permanent: true,
      },
      {
        source: "/Ai2",
        destination: "/aipartscenter",
        permanent: true,
      },
      {
        source: "/crazyCMS",
        destination: "/mycrazysimplecms",
        permanent: true,
      },
      {
        source: "/instacertified",
        destination: "/instacertify",
        permanent: true,
      },
      // {
      //   source: '/Digitalmna',
      //   destination: '/digitalmna',
      //   permanent: true,
      // },
      {
        source: "/digital",
        destination: "/digitalmna",
        permanent: true,
      },
      {
        source: "/Hitbaazar",
        destination: "/hitbaazar",
        permanent: true,
      },
      {
        source: "/ushaFastners",
        destination: "/ushafasteners",
        permanent: true,
      },
      {
        source: "/career-beacon",
        destination: "/thecareerbeacon",
        permanent: true,
      },
      // {
      //   source: '/woodview',
      //   destination: '/woodView',
      //   permanent: true,
      // },
      {
        source: "/blogdetails/675a7b9b03dec66b0a76fb04",
        destination:
          "/blog/comprehensive-guide-to-modern-e-commerce-solutions-website-design-development-ai-packaging-and-more",
        permanent: true,
      },
      // {
      //   source: '/Headless-shopify',
      //   destination: '/headless-shopify',
      //   permanent: true,
      // },
      {
        source: "/native",
        destination: "/react-native",
        permanent: true,
      },
      {
        source: "/nodejs-developer",
        destination: "/node-js-developer",
        permanent: true,
      },
      {
        source: "/success",
        destination: "/thankyou",
        permanent: true,
      },
      {
        source: "/blogdetails/67c1b2edbb2f2db617912132",
        destination:
          "/blog/the-best-e-commerce-frameworks-for-online-selling-in-2025",
        permanent: true,
      },
      {
        source: "/blogs/8-reasons-youre-not-getting-any-website-traffic/",
        destination: "/blog/8-reasons-youre-not-getting-any-website-traffic",
        permanent: true,
      },
      {
        source: "/blogdetails/undefined",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/index.rdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "/refund",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogdetails/headless-commerce",
        destination:
          "/blog/headless-bigcommerce-implementation-step-guide-for-modern-stores",
        permanent: true,
      },
      {
        source:
          "/blogs/how-can-bigcommerce-development-services-help-in-creating-a-mobile-responsive-e-commerce-store/",
        destination:
          "/blog/how-to-start-your-first-shopify-store-a-beginners-tutorial",
        permanent: true,
      },
      {
        source: "/blogs/category/seo/page/2/",
        destination: "/seo",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/main",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.xml",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/custom-software-developmen",
        destination: "/service/custom-software-development",
        permanent: true,
      },
      {
        source: "/blogdetails/681db91304aea0b9fa198608",
        destination:
          "/blog/the-growing-demand-for-sustainable-e-commerce-creating-eco-friendly-online-stores",
        permanent: true,
      },
      {
        source: "/2020/09/13/post-7817/",
        destination: "/ecommerce-development",
        permanent: true,
      },
      {
        source:
          "/blogs/ways-to-increase-wordpress-website-speed-without-plugin/",
        destination:
          "/blog/how-to-optimize-your-shopify-product-pages-for-more-conversions",
        permanent: true,
      },
      {
        source: "/m2012-08-01/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ecommerce-solutions-usa/",
        destination: "/ecommerce-development",
        permanent: true,
      },
      {
        source: "/blogs/importance-of-local-link-building/",
        destination:
          "/blog/how-to-use-social-media-to-build-your-ecommerce-brand-drive-conversions",
        permanent: true,
      },
      {
        source:
          "/blogs/how-to-optimize-your-bigcommerce-store-for-better-performance-and-user-experience-2/",
        destination:
          "/blog/bigcommerce-vs-shopify-which-platform-is-best-for-your-business-in-2025",
        permanent: true,
      },
      {
        source: "/blogs/category/digital-marketing/",
        destination:
          "/blog/using-facebook-custom-audience-and-lookalike-audiences-to-improve-ad-targeting-unlocking-the-power-of-precision",
        permanent: true,
      },
      {
        source:
          "/blogs/bigcommerce-vs-shopify-vs-bigcommerce-which-is-better-for-your-ecommerce-business/",
        destination:
          "/blog/bigcommerce-vs-shopify-which-platform-is-best-for-your-business-in-2025",
        permanent: true,
      },
      // {
      //   source: '/Flutter',
      //   destination: '/flutter',
      //   permanent: true,
      // },
      {
        source: "/blogs/category/uncategorized/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/20-advertising-trends-to-watch-in-2024/",
        destination:
          "/blog/headless-bigcommerce-implementation-step-guide-for-modern-stores",
        permanent: true,
      },
      {
        source:
          "/blogs/amazons-bezos-to-face-unprecedented-protests-during-india-trip/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/fashion-portrait-of-young-businessman-handsome-model-man-in-casual-cloth/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/category/trends/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/essential-features-that-each-e-commerce-website-should-have-in-2024/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/the-rumored-iphone-5se-could-come-in-hot-pink-not-rose-gold/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/rank-math-vs-yoast-is-it-time-to-switch-from-yoast/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/here-are-the-4-cheapest-electric-vehicles-you-can-buy/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/latest-web-design-trends-in-2024/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/cloud-based-bigcommerce-speed-and-security-trends-driving-ecommerce-success/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/anxious-singles-are-renting-partners-for-chinese-new-year/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/how-long-before-seeing-results-from-seo-and-why/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/economists-see-few-monetary-policy-changes-with-powell-leading-fed/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/25-practical-and-actionable-blogging-tips-for-beginners-2024/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/8-reasons-youre-not-getting-any-website-traffic-how-to-fix-it/",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/many-google-maps-users-want-to-see-an-idea-of-what-to-anticipate-when-they-arrive-at-their-location/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/how-to-create-an-effective-content-calendar-for-2024/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/blog/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/html",
        destination: "/html5",
        permanent: true,
      },
      {
        source: "/ireland",
        destination: "/ecommerce-development-in-ireland",
        permanent: true,
      },
      {
        source: "/blogs/web-development/",
        destination:
          "/blog/the-growing-demand-for-sustainable-e-commerce-creating-eco-friendly-online-stores",
        permanent: true,
      },
      {
        source: "/blogs/category/ecommerce/",
        destination:
          "/blog/how-to-use-social-media-to-build-your-ecommerce-brand-drive-conversions",
        permanent: true,
      },
      {
        source: "/blogs/category/web-development/",
        destination:
          "/blog/how-to-start-your-first-shopify-store-a-beginners-tutorial",
        permanent: true,
      },
      {
        source: "/tags/ルリビタキ",
        destination: "/blog",
        permanent: true,
      },
      // {
      //   source: "/terms",
      //   destination: "/terms-conditions",
      //   permanent: true,
      // },
      {
        source: "/terms&conditions",
        destination: "/terms-conditions",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/ios",
        destination: "/service/ios",
        permanent: true,
      },
      {
        source: "/android",
        destination: "/service/android",
        permanent: true,
      },
      {
        source: "/bigcommerce-development",
        destination: "/service/bigcommerce-development",
        permanent: true,
      },
      {
        source: "/shopify-development",
        destination: "/service/shopify-development",
        permanent: true,
      },
      {
        source: "/magento-development",
        destination: "/service/magento-development",
        permanent: true,
      },
      {
        source: "/woocommerce-development",
        destination: "/service/woocommerce-development",
        permanent: true,
      },
      {
        source: "/php",
        destination: "/service/php",
        permanent: true,
      },
      {
        source: "/react-js",
        destination: "/service/react-js",
        permanent: true,
      },
      {
        source: "/html5",
        destination: "/service/html5",
        permanent: true,
      },
      {
        source: "/node-js",
        destination: "/service/node-js",
        permanent: true,
      },
      {
        source: "/wordpress",
        destination: "/service/wordpress",
        permanent: true,
      },
      {
        source: "/next-js",
        destination: "/service/next-js",
        permanent: true,
      },
      {
        source: "/react-native",
        destination: "/service/react-native",
        permanent: true,
      },
      {
        source: "/flutter",
        destination: "/service/flutter",
        permanent: true,
      },
      {
        source: "/kotlin",
        destination: "/service/kotlin",
        permanent: true,
      },
      {
        source: "/headless-shopify",
        destination: "/service/headless-shopify",
        permanent: true,
      },
      {
        source: "/headless-bigcommerce",
        destination: "/service/headless-bigcommerce",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/service/seo",
        permanent: true,
      },
      {
        source: "/smm",
        destination: "/service/smm",
        permanent: true,
      },
      {
        source: "/ppc",
        destination: "/service/ppc",
        permanent: true,
      },
      {
        source: "/kick-eez",
        destination: "/portfolio/kick-eez",
        permanent: true,
      },
      {
        source: "/protrucksandcars",
        destination: "/portfolio/protrucksandcars",
        permanent: true,
      },
      {
        source: "/relysafety",
        destination: "/portfolio/relysafety",
        permanent: true,
      },
      {
        source: "/solenoid-ninja",
        destination: "/portfolio/solenoid-ninja",
        permanent: true,
      },
      {
        source: "/ballisticdummylab",
        destination: "/portfolio/ballisticdummylab",
        permanent: true,
      },
      {
        source: "/sitesandscopes",
        destination: "/portfolio/sitesandscopes",
        permanent: true,
      },
      {
        source: "/topbrasstactical",
        destination: "/portfolio/topbrasstactical",
        permanent: true,
      },
      {
        source: "/slides365",
        destination: "/portfolio/slides365",
        permanent: true,
      },
      {
        source: "/2ndamendmentguns",
        destination: "/portfolio/2ndamendmentguns",
        permanent: true,
      },
      {
        source: "/blackrhinoconcealment",
        destination: "/portfolio/blackrhinoconcealment",
        permanent: true,
      },
      {
        source: "/thesurvivalmode",
        destination: "/portfolio/thesurvivalmode",
        permanent: true,
      },
      {
        source: "/racewax",
        destination: "/portfolio/racewax",
        permanent: true,
      },
      {
        source: "/instacertify",
        destination: "/portfolio/instacertify",
        permanent: true,
      },
      {
        source: "/thecareerbeacon",
        destination: "/portfolio/thecareerbeacon",
        permanent: true,
      },
      {
        source: "/krappstrapp",
        destination: "/portfolio/krappstrapp",
        permanent: true,
      },
      {
        source: "/bobcatarmament",
        destination: "/portfolio/bobcatarmament",
        permanent: true,
      },
      {
        source: "/servapure",
        destination: "/portfolio/servapure",
        permanent: true,
      },
      {
        source: "/ushafasteners",
        destination: "/portfolio/ushafasteners",
        permanent: true,
      },
      {
        source: "/lafayetteshooters",
        destination: "/portfolio/lafayetteshooters",
        permanent: true,
      },
      {
        source: "/fouroaksfarm",
        destination: "/portfolio/fouroaksfarm",
        permanent: true,
      },
      {
        source: "/aipartscenter",
        destination: "/portfolio/aipartscenter",
        permanent: true,
      },
      {
        source: "/rideready",
        destination: "/portfolio/rideready",
        permanent: true,
      },
      {
        source: "/typhoondefense",
        destination: "/portfolio/typhoondefense",
        permanent: true,
      },
      {
        source: "/graco-corp",
        destination: "/portfolio/graco-corp",
        permanent: true,
      },
      {
        source: "/riflesupply",
        destination: "/portfolio/riflesupply",
        permanent: true,
      },
      {
        source: "/mycrazysimplecms",
        destination: "/portfolio/mycrazysimplecms",
        permanent: true,
      },
      {
        source: "/woodView",
        destination: "/portfolio/woodView",
        permanent: true,
      },
      {
        source: "/subhAlloy",
        destination: "/portfolio/subhAlloy",
        permanent: true,
      },
      {
        source: "/digitalmna",
        destination: "/portfolio/digitalmna",
        permanent: true,
      },
      {
        source: "/obtechenterprise",
        destination: "/portfolio/obtechenterprise",
        permanent: true,
      },
      {
        source: "/pinkysky",
        destination: "/portfolio/pinkysky",
        permanent: true,
      },
      {
        source: "/ezma",
        destination: "/portfolio/ezma",
        permanent: true,
      },
      {
        source: "/ecommerce-development",
        destination: "/service/ecommerce-development",
        permanent: true,
      },
      {
        source: "/mobile-application-development",
        destination: "/service/mobile-application-development",
        permanent: true,
      },
      {
        source: "/headless-commerce",
        destination: "/service/headless-commerce",
        permanent: true,
      },
      {
        source: "/web-development",
        destination: "/service/web-development",
        permanent: true,
      },

      {
        source: "/graphic-design",
        destination: "/service/graphic-design",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency",
        destination: "/service/digital-marketing-agency",
        permanent: true,
      },
      {
        source: "/ui-ux-design",
        destination: "/service/ui-ux-design",
        permanent: true,
      },
      {
        source: "/custom-software-development",
        destination: "/service/custom-software-development",
        permanent: true,
      },
      {
        source: "/ecommerce-development-company-in-delhi",
        destination: "/delhi/ecommerce-development-company-in-delhi",
        permanent: true,
      },
      {
        source: "/bigcommerce-development-company-in-delhi",
        destination: "/delhi/bigcommerce-development-company-in-delhi",
        permanent: true,
      },
      {
        source: "/ecommerce-development-company-in-noida",
        destination: "/noida/ecommerce-development-company-in-noida",
        permanent: true,
      },
      {
        source: "/bigcommerce-development-company-in-noida",
        destination: "/noida/bigcommerce-development-company-in-noida",
        permanent: true,
      },
      {
        source: "/Ai",
         destination: "/portfolio/aipartscenter",
        permanent: true,
      },
      {
        source: "/contact-us1",
        destination: "/contact-us",
        permanent: true,
      },
       {
        source: "/headless-commerce1",
        destination: "/service/headless-commerce",
        permanent: true,
      },
      {
        source: "/bigcommerce-development1",
        destination: "/service/bigcommerce-development",
        permanent: true,
      },
      {
        source: "/about2",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/ecommerce-development-in-Qatar",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ecommerce-development-in-qatar",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ecommerce-development1",
        destination: "/service/ecommerce-development",
        permanent: true,
      },

    ];
  },
};

export default nextConfig;
