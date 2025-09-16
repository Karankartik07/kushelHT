"use client";
import { useEffect, useState, useRef } from "react";
import "./Bigbanner8.css";

const Result1 = ({weExpert}) => {
  const [scrollRatio, setScrollRatio] = useState(0);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (descriptionRef.current) {
        const rect = descriptionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;

        // Define start and end points for transition effect
        const start = elementTop - windowHeight;
        const end = elementTop + elementHeight;

        let ratio = (scrollTop - start) / (end - start);
        ratio = Math.max(0, Math.min(1, ratio));

        setScrollRatio(ratio);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mmcainBcoSe">
      <div className="mainBcoSe">
        <div className="containCom">
          <div className="bcomcImd">
            <p className="smallcomtext">we are experts in</p>
            <div className="logoImgcbom">
              <img
                src={weExpert?.logo}
                alt="Magento ecommerce  website development icon Kushel Digi Solutions"
              />
            </div>
          </div>

          {/* Dynamic color transition */}
          <p
            ref={descriptionRef}
            className="descriptionCon3 secondary-heading"  
            
          >
            {/* As a certified BigCommerce partner, Kushel Digi Solutions has a
            successful proven track record in offering modern BigCommerce
            solutions to grow your business. Our experts work to make sure that
            your online store is not just functional but optimized for success. */}
            {weExpert?.para}
          </p>
        </div>
        <div className="maSecImgaec">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745669979/lovely-background-images_uuicgq.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Result1;