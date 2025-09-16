// app/page.js (Simplified version to work with layout.js)

"use client";
import Script from "next/script";
import { useEffect } from "react";
import Footer from "./COMMON/Footer";
import Navbar from "./COMMON/Navbar";
import NewBanner from "./components/Home/Banner";
import CompaniesSlider from "./components/Home/CompaniesSlider";
import CustomSolution from "./components/Home/CustomSolution";
import HomeFAQ from "./components/Home/HomeFAQ";
import OurTechno from "./components/Home/OurTechno";
import Popup from "./components/Home/PopUp/PopUp";
import Portfolio from "./components/Home/Portfolio";
import Portfolio2 from "./components/Home/Portfolio2";
import RealSuccess from "./components/Home/RealSuccess";
import Technology from "./components/Home/Technology";
import Testimonials from "./components/Home/Testimonials";
import HomeForm from "./components/Home/HomeForm";
// Critical above-the-fold components - load with SSR for faster initial render
// const Navbar = dynamic(() => import("./COMMON/Navbar"), {
//   ssr: true,
// });
// const HomeNewBanner = dynamic(() => import("./components/Home/HomeNewBanner"), {
//   ssr: true,
// });
// const HomeTech = dynamic(() => import("./components/Home/HomeTech"), {
//   ssr: true,
// });
// const Homeslidernew = dynamic(() => import("./components/Home/HomeSliderNew"), {
//   ssr: true,
// });

// const Footer = dynamic(() => import("./COMMON/Footer"), { ssr: false });
// const Home2AskQuestion = dynamic(
//   () => import("./components/Home/Home2AskQuestion"),
//   { ssr: false }
// );
// const Home2Section10 = dynamic(
//   () => import("./components/Home/Home2Section10"),
//   { ssr: false }
// );
// const Home2Section5 = dynamic(() => import("./components/Home/Home2Section5"), {
//   ssr: false,
// });
// const Home2Testimonial = dynamic(
//   () => import("./components/Home/Home2Testimonial"),
//   { ssr: false }
// );
// const HomeCardSection = dynamic(
//   () => import("./components/Home/HomeCardSection"),
//   { ssr: false }
// );
// const HomeForm = dynamic(() => import("./components/Home/HomeForm"), {
//   ssr: false,
// });
// const HomeSecCard = dynamic(() => import("./components/Home/HomeSecCard"), {
//   ssr: false,
// });
// const PopUp = dynamic(() => import("./components/Home/PopUp/PopUp"), {
//   ssr: false,
// });
// const CompaniesSlider = dynamic(
//   () => import("./components/Home/slider/CompaniesSlider"),
//   { ssr: false }
// );

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

        <Navbar />
        <NewBanner/>
        <OurTechno/>
        <Portfolio/>
        <RealSuccess/>
        <Portfolio2/>
        <CustomSolution/>
        <Technology/>
        <CompaniesSlider/>
        <Testimonials/>
        <HomeFAQ/>
        <HomeForm/>
        <Footer/>
     
    </>
  );
};

export default HomePage;
