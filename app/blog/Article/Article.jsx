"use client";
import React from "react";
import "./artcile.css"

import Link from "next/link";
import { FcClock } from "react-icons/fc";


function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

const articles = [
  //Latest
  {
    id: 0,
    category: "Latest",
    // culture: "More in Culture",
    title: "How Much Does It Cost to Hire a Web Development Company in Delhi?",
    desc: "Want to create an online store? But don't know where to start? You are not alone. Every business, from startups to large enterprises, needs an online presence. That is why the demand for web designing services in Delhi is increasing. ",
    date: "11 AUG 2025",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1754905681/blog-bannernew_t5y07v.jpg",
    alt: "Article 1"
  },
  {
    id: 1,
    category: "Latest",
    culture: "More in Culture",
    title: "BigCommerce System Integration For Large Catalog Management",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
    alt: "Article 1"
  },
  {
    id: 2,
    category: "Latest",
    culture: "More in Culture",
    title: "The Best E-Commerce Frameworks For Online Selling In 2025",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "18 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "Article 2"
  },
  {
    id: 3,
    category: "Latest",
    culture: "More in Culture",
    title: "The Growing Demand For Sustainable E-Commerce: Creating Eco-Friendly Online Stores",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "12 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1749726235/blog_images/xvr2czl8eawud3ijwixt.jpg",
    alt: "Article 3"
  },
  {
    id: 4,
    category: "Latest",
    title: "Comprehensive Guide to Modern E-commerce Solutions: Website Design, Development, AI, Packaging, and More",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "27 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748349965/blog_images/evulju9mgxdmwvnv2noe.jpg",
    alt: "Article 3"
  },
  {
    id: 5,
    category: "Latest",
    title: "Headless BigCommerce implementation: Step guide for modern stores",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748065296/blog_images/kdy4hwdvk3vmndhzvchk.jpg",
    alt: "Article 3"
  },
  {
    id: 6,
    category: "Latest",
    title: "How to use social media to build your eCommerce brand & drive conversions?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747739889/blog_images/qp7qo5qnda1umtzvt0cz.jpg",
    alt: "Article 3"
  },
  //Ecommerce

  {
    id: 1,
    category: "eCommerce",
    title: "BigCommerce System Integration For Large Catalog Management",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
    alt: "Article 1"
  },
  {
    id: 2,
    category: "eCommerce",
    title: "The Best E-Commerce Frameworks For Online Selling In 2025",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "18 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "Article 2"
  },
  {
    id: 3,
    category: "eCommerce",
    title: "The Growing Demand For Sustainable E-Commerce: Creating Eco-Friendly Online Stores",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "12 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1749726235/blog_images/xvr2czl8eawud3ijwixt.jpg",
    alt: "Article 3"
  },
  {
    id: 4,
    category: "eCommerce",
    title: "Comprehensive Guide to Modern E-commerce Solutions: Website Design, Development, AI, Packaging, and More",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "27 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748349965/blog_images/evulju9mgxdmwvnv2noe.jpg",
    alt: "Article 3"
  },
  {
    id: 5,
    category: "eCommerce",
    title: "Headless BigCommerce implementation: Step guide for modern stores",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748065296/blog_images/kdy4hwdvk3vmndhzvchk.jpg",
    alt: "Article 3"
  },
  {
    id: 6,
    category: "eCommerce",
    title: "How to use social media to build your eCommerce brand & drive conversions?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747739889/blog_images/qp7qo5qnda1umtzvt0cz.jpg",
    alt: "Article 3"
  },

  //Web Devlopment
  {
    id: 1,
    category: "web-dev",
    title: "The Growing Demand For Sustainable E-Commerce: Creating Eco-Friendly Online Stores",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "12 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1749726235/blog_images/xvr2czl8eawud3ijwixt.jpg",
    alt: "Article 3"
  },
  {
    id: 2,
    category: "web-dev",
    title: "Comprehensive Guide to Modern E-commerce Solutions: Website Design, Development, AI, Packaging, and More",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "27 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748349965/blog_images/evulju9mgxdmwvnv2noe.jpg",
    alt: "Article 3"
  },
  {
    id: 3,
    category: "web-dev",
    title: "How to use social media to build your eCommerce brand & drive conversions?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747739889/blog_images/qp7qo5qnda1umtzvt0cz.jpg",
    alt: "Article 3"
  },
  {
    id: 4,
    category: "web-dev",
    title: "How to Optimize Your Shopify Product Pages for More Conversions",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747114509/blog_images/yb0t2nge01fdkgkdy5lc.png",
    alt: "Article 3"
  },
  {
    id: 5,
    category: "web-dev",
    title: "How to Start Your First Shopify Store: A Beginner's Tutorial",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747054094/blog_images/b0dnupevctc22hrldn27.png",
    alt: "Article 3"
  },
  {
    id: 6,
    category: "web-dev",
    title: "REASONS WHY YOUR BUSINESS STILL NEEDS A WEBSITE IN 2024",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1741181198/blog_images/y3epxu1pcvz8vvnspliz.jpg",
    alt: "Article 3"
  },


  //Business
  {
    id: 1,
    category: "Business",
    title: "Comprehensive Guide to Modern E-commerce Solutions: Website Design, Development, AI, Packaging, and More",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "27 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748349965/blog_images/evulju9mgxdmwvnv2noe.jpg",
    alt: "Article 3"
  },
  {
    id: 2,
    category: "Business",
    title: "How to use social media to build your eCommerce brand & drive conversions?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747739889/blog_images/qp7qo5qnda1umtzvt0cz.jpg",
    alt: "Article 3"
  },
  {
    id: 3,
    category: "Business",
    title: "How to Start Your First Shopify Store: A Beginner's Tutorial",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747054094/blog_images/b0dnupevctc22hrldn27.png",
    alt: "Article 3"
  },
  {
    id: 4,
    category: "Business",
    title: "The rumored iPhone 5SE could come in hot pink, not rose gold",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "23 November 2024",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732865250/blog_images/qsh3y68vxyjifdr6mgpj.webp",
    alt: "Article 3"
  },
  {
    id: 5,
    category: "Business",
    title: "Many Google Maps Users Want To See An Idea Of What To Anticipate When They Arrive At Their Location.",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "18 November 2024",
    image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756551816/how-google-map_bxjg5f.png",
    alt: "Article 3"
  },


  //Big commerce-dev
  {
    id: 1,
    category: "bigcommerce-development",
    title: "BigCommerce System Integration For Large Catalog Management",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
    alt: "Article 1"
  },
  {
    id: 2,
    category: "bigcommerce-development",
    title: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1746696654/blog_images/evde5mbgy9mjcpeeyqh7.png",
    alt: "Article 1"
  },
  //shopify
  {
    id: 1,
    category: "shopify",
    title: "The Best E-Commerce Frameworks For Online Selling In 2025",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "18 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "Article 2"
  },
  {
    id: 2,
    category: "shopify",
    title: "How to Optimize Your Shopify Product Pages for More Conversions",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747114509/blog_images/yb0t2nge01fdkgkdy5lc.png",
    alt: "Article 3"
  },
  {
    id: 3,
    category: "shopify",
    title: "How to Start Your First Shopify Store: A Beginner's Tutorial",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747054094/blog_images/b0dnupevctc22hrldn27.png",
    alt: "Article 3"
  },
  {
    id: 4,
    category: "shopify",
    title: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1746696654/blog_images/evde5mbgy9mjcpeeyqh7.png",
    alt: "Article 1"
  },



  //shopify dev
  {
    id: 1,
    category: "shopify-dev",
    title: "How to Optimize Your Shopify Product Pages for More Conversions",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747114509/blog_images/yb0t2nge01fdkgkdy5lc.png",
    alt: "Article 3"
  },
  {
    id: 2,
    category: "shopify-dev",
    title: "How to Start Your First Shopify Store: A Beginner's Tutorial",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "20 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747054094/blog_images/b0dnupevctc22hrldn27.png",
    alt: "Article 3"
  },
  {
    id: 3,
    category: "shopify-dev",
    title: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1746696654/blog_images/evde5mbgy9mjcpeeyqh7.png",
    alt: "Article 1"
  },

  //headless
  {
    id: 1,
    category: "headless",
    title: "Headless BigCommerce implementation: Step guide for modern stores",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748065296/blog_images/kdy4hwdvk3vmndhzvchk.jpg",
    alt: "Article 3"
  },
  //big comm headless
  {
    id: 1,
    category: "bigcommerce-headless",
    title: "Headless BigCommerce implementation: Step guide for modern stores",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 May 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748065296/blog_images/kdy4hwdvk3vmndhzvchk.jpg",
    alt: "Article 3"
  },


  //shopify hedless
  {
    id: 1,
    category: "shopify-headless",
    title: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1746696654/blog_images/evde5mbgy9mjcpeeyqh7.png",
    alt: "Article 1"
  },
  //big comm
  {
    id: 1,
    category: "bigcommerce",
    title: "BigCommerce System Integration For Large Catalog Management",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
    alt: "Article 1"
  },
  {
    id: 2,
    category: "bigcommerce",
    title: "The Best E-Commerce Frameworks For Online Selling In 2025",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "18 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "Article 2"
  },
  {
    id: 3,
    category: "bigcommerce",
    title: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1746696654/blog_images/evde5mbgy9mjcpeeyqh7.png",
    alt: "Article 1"
  },

  //magento
  {
    id: 2,
    category: "magento",
    title: "The Best E-Commerce Frameworks For Online Selling In 2025",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "18 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "Article 2"
  },
  {
    id: 3,
    category: "magento",
    title: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1746696654/blog_images/evde5mbgy9mjcpeeyqh7.png",
    alt: "Article 1"
  },

];

export default function Article({ title }) {
  return (
    <section className="latest-articles">
      <h2 className="heading">{title}</h2>
      <div className="articles-container">
        {articles
          .filter((article) => article.category === title || article.culture === title)
          .map((article) => (
            <Link
              key={article.id}
              href={`/blog/${slugify(article.title)}`}
              className="article-card"
            >
              <img
                src={article.image}
                alt={article.alt}
                width={420}
                height={250}
                className="article-img"
              />
              <div className="article-content">
                <div className="article-date">{article.date}</div>
                <div className="article-title">{article.title}</div>
                <div className="article-desc">{article.desc.split(" ").slice(0, 20).join(" ")}...</div>
              </div>
              <div className="blogClockTime2">
                <Link href={`/blog/${slugify(article.title)}`}>
                  <p className="cardBlogStpaarw">Read More</p>
                </Link>
                <span className="bimageloDiPargaph1">
                  <FcClock className="iconBlogClock" />
                  5:00 Min
                </span>
              </div>
            </Link>
          ))}

      </div>
    </section>
  );
}
