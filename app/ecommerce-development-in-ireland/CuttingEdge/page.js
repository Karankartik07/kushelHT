// components/Cutting1Section.jsx
"use client";
import Image from "next/image";
import "./cuttingedge.css";
import { useRouter } from "next/navigation";

export default function Cutting1Section() {
      const navigate = useRouter();
  
  return (
    <section className="cutting1-section">
      <div className="cutting1-container">
        <div className="cutting1-left">
          <h2>
            Looking to Boost Your Online Sales with Ireland’s E-Commerce
            Experts?
          </h2>
          <p>
            Our expert ecommerce development services help businesses flourish
            by improving communication with customers and speeding up processes.
            Most companies will largely work online in the next several years,
            either by promoting their products and services online or by using
            secure web apps to handle orders in real time. Because we know a lot
            about ecommerce, we can design systems like Magento, WooCommerce,
            and Shopify. We look at what your business requires to help you
            choose the ideal B2C ecommerce solution for your online shop. This
            makes sure that it can grow and run smoothly.
          </p>
          <button onClick={() => navigate.push('/contact-us')} className="cutting1-btn">Let’s Build Your Store</button>
        </div>

        <div className="cutting1-right">
          <Image
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1750328181/Group_1171281511_tenksh.png"
            alt="Ecommerce Visual"
            width={500}
            height={500}
            className="cutting1-image"
          />
          {/* <div className="cutting1-image-wrapper">
          </div> */}
        </div>
      </div>
    </section>
  );
}
