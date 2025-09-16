// app/page.js (Simplified version to work with layout.js)

"use client";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import dynamic from "next/dynamic";
// Critical above-the-fold components - load with SSR for faster initial render
const Navbar = dynamic(() => import("./COMMON/Navbar"), {
  ssr: true,
});
const HomeNewBanner = dynamic(() => import("./components/Home/HomeNewBanner"), {
  ssr: true,
});
const HomeTech = dynamic(() => import("./components/Home/HomeTech"), {
  ssr: true,
});
const Homeslidernew = dynamic(() => import("./components/Home/HomeSliderNew"), {
  ssr: true,
});

const Footer = dynamic(() => import("./COMMON/Footer"), { ssr: false });
const Home2AskQuestion = dynamic(
  () => import("./components/Home/Home2AskQuestion"),
  { ssr: false }
);
const Home2Section10 = dynamic(
  () => import("./components/Home/Home2Section10"),
  { ssr: false }
);
const Home2Section5 = dynamic(() => import("./components/Home/Home2Section5"), {
  ssr: false,
});
const Home2Testimonial = dynamic(
  () => import("./components/Home/Home2Testimonial"),
  { ssr: false }
);
const HomeCardSection = dynamic(
  () => import("./components/Home/HomeCardSection"),
  { ssr: false }
);
const HomeForm = dynamic(() => import("./components/Home/HomeForm"), {
  ssr: false,
});
const HomeSecCard = dynamic(() => import("./components/Home/HomeSecCard"), {
  ssr: false,
});
const PopUp = dynamic(() => import("./components/Home/PopUp/PopUp"), {
  ssr: false,
});
const CompaniesSlider = dynamic(
  () => import("./components/Home/slider/CompaniesSlider"),
  { ssr: false }
);

const HomePage = ({ props }) => {
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };

  useEffect(() => {
    // Dynamically load Lenis for smooth scrolling
    const initLenis = async () => {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default;

        // Import CSS dynamically
        await import("lenis/dist/lenis.css");

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup function
        return () => {
          lenis.destroy();
        };
      } catch (error) {
        console.warn("Failed to load Lenis:", error);
      }
    };

    // Initialize Lenis after page is fully loaded to not block initial render
    const timer = setTimeout(initLenis, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_TRACKING_ID');
          `,
        }}
      />

      {/* Hotjar Script */}
      <Script id="hotjar-tracking" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6403397,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      <PopUp />

      <main role="main" className="home-main">
        <Navbar />
        <HomeNewBanner />
        <HomeTech />
        {/* <HomeVision /> */}
        <Homeslidernew />
        {/* <HomeSlider /> */}
        <Home2Section5 />
        {/* <HomeFlax /> */}
        <HomeCardSection />
        <HomeSecCard />
        {/* <ScrollSection /> */}
        <Home2Section10
          heading={"Custom Solutions Crafted for Every Industry"}
          para={
            "Our eCommerce solutions are not confined to any specific industry or business domain as we have delivered hundreds of project catered to more than 15 industry."
          }
        />
        <CompaniesSlider />
        <Home2Testimonial />
        <Home2AskQuestion />
        {/* WhatsApp and Call buttons */}
        <section
          className="whtsApBtns"
          role="region"
          aria-label="Contact buttons"
        >
          <button
            onClick={whatAppHandler}
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
            type="button"
          >
            <Image
              className="what-image-universal"
              src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230407/whatsapp_ztk2oe.png"
              alt="WhatsApp chat icon"
              title="Contact us on WhatsApp"
              width={50}
              height={50}
              loading="lazy"
            />
          </button>
          <button
            onClick={callHandler}
            aria-label="Call us now"
            title="Call us now"
            type="button"
          >
            <Image
              src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230446/telephone_wnquao.png"
              alt="Phone call icon"
              title="Call us now"
              width={50}
              height={50}
              id="callBlinking"
              loading="lazy"
            />
          </button>
        </section>
        <HomeForm />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
