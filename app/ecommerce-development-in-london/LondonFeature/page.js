"use client"
import React from 'react'
import './londonfeat.css';


const scrollToFormHome = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            const yOffset = -120;
            const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

 function EcommerceFeatures() {
  return (
    <section className="ecom-section">
      <div className="ecom-container">
        <h2 className="ecom-heading">
    What Are the Main Reasons to Choose Our  <br className="hide-on-mobile" /> E-Commerce Websites?
        </h2>

        <div className="ecom-grid">
          {features.map((item) => (
            <div key={item.id} className="ecom-card">
              <div className="ecom-number">{item.id}</div>
              <h4 className="ecom-titlle">{item.title}</h4>
              <p className="ecom-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="ecom-buttons">
          <button onClick={scrollToFormHome} className="connect-btn">Request a No-Cost Audit</button>
          {/* <button className="demo-btn">Schedule a Demo</button> */}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    id: 1,
    title: "Made Just for Your Business",
    text: "Every shop is made with your goods and consumers in mind, so it feels like home to both.",
  },
  {
    id: 2,
    title: "Can Grow in the Future",
    text: "Your site may grow with your ambitions as they become larger. No problem if you need more features, more visitors, or a new way to pay.",
  },
  {
    id: 3,
    title: "Evolves with Your Brand",
    text: "Our platforms are designed to adapt to your vision, so you'll always be ready for the next great idea.",
  },
  {
    id: 4,
    title: "SEO-Optimized E-Commerce Store",
    text: "We use clever, tried-and-true SEO practices on every page so that search engines discover you faster and buyers find you organically.",
  },
  {
    id: 5,
    title: "Advanced Site Analytics",
    text: "Every site has traffic and behavior dashboards that show you who comes, how they move around, and where sales decline.",
  },
  {
    id: 6,
    title: "Control Meta Tags Without Code",
    text: "You may change page names, descriptions, and keywords right from the dashboard. All you need to do is fill out a form.",
  },
  {
    id: 7,
    title: "Links Between ERP and Inventory",
    text: "We connect your business to any back-office system so that orders, stock, and reports all go through without any extra inputs.",
  },
  {
    id: 8,
    title: "Tools for Smart Automation",
    text: "Automatic email notifications, stock updates, and shipping monitoring cut down on manual work so your team can concentrate on growth.",
  },
  {
    id: 9,
    title: "Custom Modules for the Back End",
    text: "Want a unique workflow? We make panels that are versatile and suit your company, which makes it easy to handle every day.",
  },
];

export default EcommerceFeatures;