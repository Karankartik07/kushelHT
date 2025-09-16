"use client";
import Script from "next/script";
import { useEffect } from "react";
import dynamic from "next/dynamic";
// Critical above-the-fold components - load with SSR for faster initial render
const Navbar = dynamic(() => import("./COMMON/Navbar"), { ssr: true });
const Footer = dynamic(() => import("./COMMON/Footer"), { ssr: true });
const NewBanner = dynamic(() => import("./components/Home/Banner"), { ssr: true });
const CompaniesSlider = dynamic(() => import("./components/Home/CompaniesSlider"), { ssr: true });
const CustomSolution = dynamic(() => import("./components/Home/CustomSolution"), { ssr: true });
const HomeFAQ = dynamic(() => import("./components/Home/HomeFAQ"), { ssr: true });
const OurTechno = dynamic(() => import("./components/Home/OurTechno"), { ssr: true });
const Popup = dynamic(() => import("./components/Home/PopUp/PopUp"), { ssr: true });
const Portfolio = dynamic(() => import("./components/Home/Portfolio"), { ssr: true });
const Portfolio2 = dynamic(() => import("./components/Home/Portfolio2"), { ssr: true });
const RealSuccess = dynamic(() => import("./components/Home/RealSuccess"), { ssr: true });
const Technology = dynamic(() => import("./components/Home/Technology"), { ssr: true });
const Testimonials = dynamic(() => import("./components/Home/Testimonials"), { ssr: true });
const HomeForm = dynamic(() => import("./components/Home/HomeForm"), { ssr: true });

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

      <Popup />

      {/* All other components */}
      <Navbar />
      <NewBanner />
      <OurTechno />
      <Portfolio />
      <RealSuccess />
      <Portfolio2 />
      <CustomSolution />
      <Technology />
      <CompaniesSlider />
      <Testimonials />
      <HomeFAQ />
      <HomeForm />
      <Footer />
    </>
  );
};

export default HomePage;
