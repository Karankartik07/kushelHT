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
            Experts in Belgium E-Commerce can help you increase your online
            sales
          </h2>
          <p>
            You can enhance your online store with our cutting-edge ecommerce
            software services. One of Belgium's leading ecommerce development
            companies, we design distinctive, user-friendly, and mobile-friendly
            websites. We thrive in achieving and surpassing your company's
            goals. We help increase sales, enhance operations, and simplify
            purchasing. Whether you are launching a new company or enhancing an
            existing one, we provide you with the resources you need to thrive
            in the ever-evolving digital sector.
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
