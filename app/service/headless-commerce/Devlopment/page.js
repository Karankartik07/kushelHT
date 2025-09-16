"use client"
import "./dev.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Shopify Headless Development",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747109944/Group_56_vr3m2d.png",
    points: [
      "Integrate with Shopify Storefront API and Hydrogen framework.",
      "Optimize performance and SEO with modern frontend stacks.",
      "Sell across channels—web, mobile, social, and more—from one backend.",
    ],
  },
  {
    title: "BigCommerce Headless Development",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747110237/Group_59_nkfcqq.png",
    points: [
      "Use React, Next.js, or other JS frameworks for custom frontend.",
      "Deliver lightning-fast storefronts with decoupled performance.",
      "Integrate BigCommerce APIs for seamless product and checkout flows.",
    ],
  },
  {
    title: "Magento Headless Development",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747110190/Group_63_tpl8q4.png",
    points: [
      "Use PWA Studio or custom frameworks like Vue Storefront.",
      "Improve user experience with fast, responsive UIs.",
      "Connect with Magento’s robust APIs for real-time data sync.",
    ],
  },
  {
    title: "Odoo Headless Development",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747110090/Group_68_1_c9vdoe.png",
    points: [
      "Connect with Odoo’s REST APIs for seamless frontend integration.",
      "Build dynamic storefronts using frameworks like React or Angular.",
      "Extend ERP, CRM, and eCommerce functionalities into a modern UI.",
    ],
  },
  {
    title: "Headless Migration Services",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747109453/Group_71_1_ud0tpp.png",
    points: [
      "Full data migration including products, users, and orders.",
      "Rebuild frontend using advanced frameworks like React or Vue.",
      "Minimize downtime with a carefully planned, phased transition.",
    ],
  },
  {
    title: "WooCommerce Headless Development",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747109449/Group_72_3_bipdgq.png",
    points: [
      "Build decoupled frontends with React, Gatsby, or Next.js.",
      "Maintain WooCommerce backend with enhanced UX and speed.",
      "Connect plugins, CRMs, and third-party tools with REST or GraphQL APIs.",
    ],
  },
];

export default function WhyChoose() {
  return (
    <section className="developmental">
      <div className="subset">
        <h2 className="developmental-subtitle">FUTURE-PROOF YOUR STORE</h2>
        <p className="developmental-title">With Our Headless Commerce Development</p>

        <div className="developmental-cards">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="developmental-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="developmental-image-wrapper">
                <img src={item.image} alt={item.title} className="developmental-image" />
              </div>
              <h3>{item.title}</h3>
              <ul className="developmental-points-list">
                {item.points.map((point, i) => (
                  <li key={i} className="developmental-point">
                    <FaArrowRight className="developmental-icon" /> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
