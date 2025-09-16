"use client"
import React, { useState } from "react";
import "./pwa.css";

const tabData = {
  Speed: {
    label: "Speed",
    heading: "Kushel Digi Solutions builds PWAs to deliver speed at every step from loading the homepage to completing checkout.",
    content1: " Uses service workers to cache content and resources. Instant load time even on slow networks",
    content2: " Reduces bounce rate and improves user satisfaction. Smooth performance across pages and actions",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743795855/Speed-Tab-Picture_1_cqbsnh.png",
  },
  MobileFirstUX: {
    label: "Mobile-First UX",
    heading: "PWAs mainly prioritize mobile usability. These are designed for smaller screens by offering intuitive interfaces, smooth scrolling, and gesture-friendly navigation.",
    content1: " Touch-optimized and responsive layout. Fast transitions and lightweight interactions",
    content2: " Consistent user experience across devices Supports mobile gestures and animations",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743854131/Uniqueness-Tab-Picture.png_1_tqkhcb.png",
  },
  OfflineBrowsing: {
    label: "Offline Browsing",
    heading: "PWAs allow users to access essential content even when they’re offline or on unstable connections. This helps to keep customers engaged no matter their connectivity.",
    content1: " Works without an active internet connection. Caches product pages and assets",
    content2: " Enhances reliability in low-network areas Improves accessibility and user trust",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743854193/Agility-Tab-Picture.png_1_zq3pfu.png",
  },
  AppLikeExperience: {
    label: "App-Like Experience",
    heading: "Most important feature of PWAs is that it behaves just like native mobile apps. They can be installed directly from a browser, run in full-screen mode, and even send push notifications",
    content1: "Installable on home screen Full-screen UI without browser chrome",
    content2: " Push notifications for offers and updates.Smooth interactions like native apps",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743854192/Growth-Tab-Picture.png_1_p1qgal.png",
  },
};

export default function HeadlessPWASection() {
  const [activeTab, setActiveTab] = useState("Speed");
  const { heading, content1, content2, image } = tabData[activeTab];

  return (
    <section className="headless-pwa">
      <div className="human-pwa">
        <div className="headless-pwa-title">
          What <span className="headless-pwa-bold"></span> Faster, Smarter & Always Accessible with PWAs
        </div>

        <div className="headless-pwa-tabs">
          {Object.entries(tabData).map(([key, tab]) => (
            <div
              key={key}
              className={`headless-pwa-tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="headless-pwa-content">
          <div className="headless-pwa-text-section">
            <h3>{heading}</h3>
            <p>
              <span className="headless-pwa-bolld">Headless</span>: {content1}
            </p>
            <p>
              <span className="headless-pwa-bolld">PWA</span>: {content2}
            </p>
          </div>
          <div className="headless-pwa-image-section">
            <img src={image} alt={tabData[activeTab].label + " Preview"} />
          </div>
        </div>
      </div>
    </section>
  );
}
