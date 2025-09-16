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
            Looking for E-commerce Development Services That Drive Growth?
          </h2>
          <p>
            Want to boost your sales? We're a leading ecommerce development
            company in Denmark, ready to handle everything your business needs.
            Our custom online shops are safe, work great on phones, and make
            shopping super easy for every visitor. The SEO pros on our team use
            the latest tricks so your site starts climbing the rankings from day
            one. To keep everything running smoothly behind the scenes, we also
            plug in the newest tools and tech from around the industry.
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
