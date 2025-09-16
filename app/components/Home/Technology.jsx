"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Technology() {
  const [isFirstSet, setIsFirstSet] = useState(true);
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImages(false);
      setTimeout(() => {
        setIsFirstSet((prev) => !prev);
        setShowImages(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gray-100 py-16 px-6 xl:px-20">
      <div className="relative max-w-[1400px] mx-auto flex flex-col items-center gap-10 text-center">
        {/* Content */}
        <div className="max-w-3xl flex flex-col gap-6">
          <h3 className="text-3xl sm:text-4xl xl:text-[44px] font-normal leading-snug text-gray-900">
            We Build with the Best to Ensure Your{" "}
            <span className="font-extrabold">Success</span>
          </h3>
          <p className="text-base sm:text-lg xl:text-xl text-gray-800 leading-relaxed">
            Our expert minds at Kushel Digi leverage top-tier technologies to
            bring your vision to life with precision and reliability. We work on
            Node, Angular, React, Laravel, MongoDB, HTML5, PHP, ASP.NET, and
            WordPress. For the best user interface, we use CSS3, Magento, CMS,
            and object modeling.
          </p>
        </div>

        {/* Button */}
        <Link href="/contact-us">
          <button className="w-56 h-14 sm:h-16 rounded-full bg-black text-white text-lg font-medium transition-all duration-300 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600">
            Let&apos;s Connect
          </button>
        </Link>
      </div>

      {/* Icons - Only show on XL and above */}
      <div
        className={`hidden xl:block absolute inset-0 transition-opacity duration-500 ${
          showImages ? "opacity-100" : "opacity-0"
        }`}
      >
        {isFirstSet ? (
          <>
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767136/Group_1000011223_in1dh6.png"
              alt="Node.js"
              width={110}
              height={110}
              className="absolute top-20 left-48"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767140/Group_1000011229_1_ayymso.png"
              alt="Angular"
              width={110}
              height={110}
              className="absolute bottom-20 left-12"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767137/Group_1000011225_cqba1f.png"
              alt="React"
              width={110}
              height={110}
              className="absolute top-1/3 left-12"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766977/Group_1000011216_p62mua.png"
              alt="Vue.js"
              width={110}
              height={110}
              className="absolute top-20 right-12"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767065/Group_1000011219_1_bmakmn.png"
              alt="Laravel"
              width={110}
              height={110}
              className="absolute bottom-20 right-64"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766976/Group_112_ed3s7q.png"
              alt="PHP"
              width={110}
              height={110}
              className="absolute top-1/3 right-48"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767138/Group_1000011227_1_prwr0a.png"
              alt="HTML5"
              width={110}
              height={110}
              className="absolute bottom-1/3 left-48"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766980/Group_1000011218_1_thqeyc.png"
              alt="WordPress"
              width={110}
              height={110}
              className="absolute bottom-1/3 right-12"
            />
          </>
        ) : (
          <>
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767152/Group_1171275943_yq6yrg.png"
              alt="MongoDB"
              width={110}
              height={110}
              className="absolute top-20 left-48"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767152/Group_1171275926_oyvwef.png"
              alt="BigCommerce"
              width={110}
              height={110}
              className="absolute top-1/3 left-12"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767139/Group_1000011227_taehf3.png"
              alt="JavaScript"
              width={110}
              height={110}
              className="absolute bottom-1/3 left-48"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767141/Group_1000011229_globko.png"
              alt="Flutter"
              width={110}
              height={110}
              className="absolute bottom-20 left-12"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724769827/Group_1000011225_nqhcvk.png"
              alt="Magento"
              width={110}
              height={110}
              className="absolute top-20 right-12"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767154/Group_1171275946_lefslc.png"
              alt="Shopify"
              width={110}
              height={110}
              className="absolute top-1/3 right-48"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766980/Group_1000011218_f4cxsf.png"
              alt="WooCommerce"
              width={110}
              height={110}
              className="absolute bottom-1/3 right-12"
            />
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767136/Group_1000011219_ldbpnn.png"
              alt="Kotlin"
              width={110}
              height={110}
              className="absolute bottom-20 right-64"
            />
          </>
        )}
      </div>
    </section>
  );
}

export default Technology;
