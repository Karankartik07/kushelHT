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
            Want to Boost Your Online Sales with Finland’s E-Commerce Experts?
          </h2>
          <p>
            Do you want to increase sales? We are a top ecommerce development
            company in Finland, equipped to manage all of your business’s
            requirements. Our personalized online stores make buying incredibly
            simple for all users, are safe, and function flawlessly on mobile
            devices. Our team's SEO experts employ the newest techniques,
            integrate safe getaways and apply SEO best practices. We provide you
            with industry solutions to succeed in the constantly changing
            digital market, whether you're opening a new store or renovating an
            old one.
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
