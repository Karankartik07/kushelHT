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
            Power Up Your Online Store with Top E-Commerce Developers in
            Bulgaria
          </h2>
          <p>
            Kushel Digi Solutions makes ecommerce sites that are smart,
            scalable, quick, safe, mobile-friendly, simple to use, and
            customized to your wants and needs. We are a reliable ecommerce
            development business in Bulgaria, and we use third-party tools like
            payment platforms and SEO tools to help users become buyers. We have
            options that are made just for each type of business, whether it's
            B2B, B2C, or D2C. Pick us to make your dream come true.
          </p>
          <button
            onClick={() => navigate.push("/contact-us")}
            className="cutting1-btn"
          >
            Let’s Build Your Store
          </button>
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
