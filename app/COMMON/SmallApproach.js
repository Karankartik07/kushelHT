import React from "react";


import Link from "next/link";
import Image from "next/image";
const SmallApproach = () => {
  return (
    <>
      <div className="about-main-13">
        <div className="about-main-130 flex items-center dine-123">
          <div className="about-11">
            <h3>
              Elevate your Digital Identity and win more for your best customers
            </h3>
          <Link href="/contact-us"><button>
              See Our Approach More{" "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 24L9.8625 21.9L18.2625 13.5H0V10.5H18.2625L9.8625 2.1L12 0L24 12L12 24Z" fill="white"/>
                 </svg>
            </button></Link>
          </div>
          <div className="about-10">
          <Image 
  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724934420/e16_1_sgazbk.png" 
  alt="Digital Identity" 
  title="Digital Identity"
  width={700}
  height={436}/>
</div>
        </div>
      </div>
    </>
  );
};

export default SmallApproach;
