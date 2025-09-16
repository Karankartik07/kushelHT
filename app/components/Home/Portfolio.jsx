"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Portfolio() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-r from-gray-100 to-blue-50 py-12 px-6 lg:px-16 text-center">
      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-3xl mx-auto mb-6">
        Delivering Success with the Best Ecommerce Platforms
      </h3>
      <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-10">
        Our expert team has specialised experience in top-tier ecommerce
        technologies to provide seamless migration, custom development, and
        optimized solutions according to your business needs. Don&apos;t settle
        for less, we will let your brand get the best.
      </p>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BigCommerce */}
        <div className="bg-white border border-gray-300 shadow-md rounded-2xl p-6 flex flex-col min-h-[500px]">
          <div className="bg-gray-100 p-3 rounded-xl flex justify-center mb-6">
            <Image
              width={219}
              height={50}
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835775/bigcommerce-logo_quhwmf.webp"
              alt="BigCommerce development services official logo"
            />
          </div>
          <h3 className="text-lg text-left font-semibold mb-3">
            Certified BigCommerce Partner Agency
          </h3>
          <ul className="list-disc text-left pl-5 space-y-2 text-sm text-gray-700 flex-1 lg:text-[15px]">
            <li>BigCommerce Replatforming & Migration Services</li>
            <li>BigCommerce Custom App Development</li>
            <li>BigCommerce Store Setup & Implementation</li>
            <li>BigCommerce API Integration Services</li>
            <li>BigCommerce B2B Solutions</li>
            <li>BigCommerce D2C Solutions</li>
            <li>BigCommerce for Regulated Industries</li>
            <li>BigCommerce Headless Commerce Development</li>
            <li>BigCommerce Website Development</li>
            <li>BigCommerce Website Development for Healthcare</li>
          </ul>
          <button
            onClick={() => router.push("/bigcommerce-development")}
            className="mt-auto text-blue-600 font-semibold text-sm lg:text-left lg:mt-5"
          >
            Learn More
          </button>
        </div>

        {/* Shopify */}
        <div className="bg-white border border-gray-300 shadow-md rounded-2xl p-6 flex flex-col min-h-[500px]">
          <div className="bg-gray-100 p-3 rounded-xl flex justify-center mb-6">
            <Image
              width={156}
              height={46}
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/shopify-logo_bcrvfv.webp"
              alt="Shopify development services official logo"
            />
          </div>
          <h3 className="text-lg text-left font-semibold mb-3">
            Certified Shopify Plus Agency
          </h3>
          <ul className="list-disc pl-5 text-left space-y-2 text-sm text-gray-700 flex-1 lg:text-[15px]">
            <li>Shopify Replatforming & Store Migration</li>
            <li>Shopify App Development Custom</li>
            <li>Shopify Conversion Rate Optimization (CRO)</li>
            <li>UI/UX Design for Shopify Stores</li>
            <li>Performance Optimization for Shopify Sites</li>
            <li>Shopify B2B Solutions</li>
            <li>Shopify D2C Solutions</li>
            <li>Shopify API Integration</li>
            <li>Shopify Website Development</li>
            <li>Shopify Headless Storefront Development</li>
          </ul>
          <button
            onClick={() => router.push("/shopify-development")}
            className="mt-auto text-blue-600 font-semibold text-sm lg:text-left lg:mt-5"
          >
            Learn More
          </button>
        </div>

        {/* Magento */}
        <div className="bg-white border border-gray-300 shadow-md rounded-2xl p-6 flex flex-col min-h-[500px]">
          <div className="bg-gray-100 p-3 rounded-xl flex justify-center mb-6">
            <Image
              width={156}
              height={46}
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/manish_sir_logo_e3ckbh.png"
              alt="Magento development services official logo"
            />
          </div>
          <h3 className="text-lg  text-left font-semibold mb-3">Expert Magento Agency</h3>
          <ul className="list-disc pl-5 text-left space-y-2 text-sm text-gray-700 flex-1 lg:text-[15px]">
            <li>Magento Replatforming & Migration</li>
            <li>Custom Magento Theme Design & Development</li>
            <li>Magento Extension Development</li>
            <li>Magento B2B Store Development</li>
            <li>Magento Integrations with Third-Party Systems</li>
            <li>Magento Website Development</li>
            <li>Magento Headless Commerce Solutions</li>
            <li>Magento D2C Store Development</li>
          </ul>
          <button
            onClick={() => router.push("/magento-development")}
            className="mt-auto text-blue-600 font-semibold text-sm lg:text-left lg:mt-5"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
