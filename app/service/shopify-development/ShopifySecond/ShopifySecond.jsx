
"use client";
import { useEffect, useState, useRef } from "react";
import "../../bigcommerce-development/BigBanner8/Bigbanner8.css";
import "./ShopifySecond.css"

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
    <div id="shopifySecond">
        <div  className="mmcainBcoSe">
      <div className="mainBcoSe">
        <div className="containCom">
          <div className="bcomcImd">
            <p className="smallcomtext">we are experts in</p>
            <div className="logoImgcbom">
              <img
                src={weExpert?.logo}
                alt=""
              />
            </div>
          </div>

          {/* Dynamic color transition */}
          <p
            ref={descriptionRef}
            className="descriptionCon3 secondary-heading"  
            // style={{
            //   color: `rgb(${Math.floor(0 + 128 * scrollRatio)}, ${Math.floor(
            //     0 + 128 * scrollRatio
            //   )}, ${Math.floor(0 + 128 * scrollRatio)})`,
            //   transition: "color 0.3s ease-in-out",
            // }}
          >
           Kushel Digi Solutions has over 8 years of experience with a team having expertise in Shopify Development Solutions. Our experts work to make sure that your online store is not just functional but also grows with the growth of your business.
          </p>
        </div>
        <div className="maSecImgaec">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744639050/Second_Banner_1_i1dr8m.png"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Result1;