"use client";
import { useState } from "react";
import "./Section6.css";
import { TfiMicrosoft } from "react-icons/tfi";
import { FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";

const Section6 = () => {
  const [activeTab, setActiveTab] = useState("E-Commerce Development");

  const tabs = [
    { name: "E-Commerce Development", icon: <FaShoppingCart /> },
    { name: "Custom Software Development", icon: <FaLaptopFile /> },
    {
      name: "Mobile Apps",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <>
      <section className="Expect6Sec">
        <div className="expertise-section">
          <h2 className="titleKuH2">Our Expertise</h2>
          <p className="subtitleConpa">
            With a proven track record in eCommerce development, we specialize
            in building scalable, user-centric solutions that drive growth and
            deliver results.
          </p>

          <div className="content-boxPara">
            <div className="tabsParacon">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`tab-buttonCom ${
                    activeTab === tab.name ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {activeTab === "E-Commerce Development" && (
              <div className="contentline">
                <div className="image-containerPic">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748021696/file_1747985953-1747985955_rwuhtk.webp"
                    alt="Software Applications"
                    width="460px"
                    height="auto"
                  />
                </div>
                <div className="text-containerCom">
                  <p className="descriptionCom">
                    Our team has specialised experience in building dynamic,
                    scalable, and conversion-driven eCommerce platforms in
                    accordance with your brand. We will set up your product
                    catalog, payment integration and user experience design to
                    deliver solutions that boost your visibility and sales.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "Custom Software Development" && (
              <div className="contentline">
                <div className="image-containerPic">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748209511/t14_ourtcq.webp"
                    alt="Software Applications"
                  />
                </div>
                <div className="text-containerCom">
                  <p className="descriptionCom">
                    Our custom software development services are designed in a
                    way to solve your difficult business problems with creative,
                    secure, and high-performing solutions. We integrate CRM,
                    ERP, or any business-specific tool to build software best
                    suited to your workflow.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "Mobile Apps" && (
              <div className="contentline">
                <div className="image-containerPic">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748209902/t13_cwrche.webp "
                    alt="Software Applications"
                  />
                </div>
                <div className="text-containerCom">
                  <p className="descriptionCom">
                    Our team has expertise in developing user-friendly mobile
                    applications for both iOS and Android. Our apps comes up
                    with smooth designs with high functionality to help
                    businesses connect with their audience anytime.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;
