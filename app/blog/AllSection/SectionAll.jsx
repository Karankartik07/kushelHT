"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcClock } from "react-icons/fc";
import "./allsec.css";

const AllArticleBottom = [

  {
    id: 1,
    title: "The Best E-commerce Frameworks for Online Selling in 2025",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "E-Commerce Frameworks",
    route: "The Best E-commerce Frameworks for Online Selling in 2025",
  },
  {
    id: 2,
    title: "The Growing Demand for Sustainable E-commerce: Creating Eco-Friendly Online Stores",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1749726235/blog_images/xvr2czl8eawud3ijwixt.jpg",
    route: "The Growing Demand for Sustainable E-commerce: Creating Eco-Friendly Online Stores",
    alt: "Sustainable E-Commerce",
  },
  {
    id: 3,
    title: "Comprehensive Guide to Modern E-commerce Solutions: Website Design, Development, AI, Packaging, and More",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748349965/blog_images/evulju9mgxdmwvnv2noe.jpg",
    route: "Comprehensive Guide to Modern E-commerce Solutions: Website Design, Development, AI, Packaging, and More",
    alt: "AI E-Commerce Tools",
  },
  {
    id: 4,

    title: "Headless BigCommerce implementation: Step guide for modern stores",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1748065296/blog_images/kdy4hwdvk3vmndhzvchk.jpg",
    route: "Headless BigCommerce implementation: Step guide for modern stores",
    alt: "BigCommerce Headless",
  },
  {
    id: 5,
    title: "How to Optimize Your Shopify Product Pages for More Conversions",
    desc: "Whenever you are thinking of operating a successful Shopify store then your product pages will be a game changer in turning visitors into customers. You shall have to look for a well optimized product page that not only enhances user experience but also increases sales by a considerable margin. Whether you are creating your first store or giving an existing one a makeover, investing in best eCommerce development services and Shopify development services can assist you in unlocking your store's full potential.",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204514/15_kdu4ia.jpg",
    route: "How to Optimize Your Shopify Product Pages for More Conversions",
    alt: "More Tech",
  },
  {
    id: 6,
    title: "How to Start Your First Shopify Store: A Beginner's Tutorial",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204538/3_wbqpbf.jpg",
    route: "How to Start Your First Shopify Store: A Beginner's Tutorial",
    alt: "More Tech",
  },
  {
    id: 7,
    title: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204538/5_s5t1gn.jpg",
    route: "BigCommerce vs Shopify: Which Platform is Best for Your Business in 2025?",
    alt: "More Tech",
  },
  {
    id: 8,
    title: "What Are the Benefits of Using BigCommerce for Your Online Store?",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204514/12_fuoihx.jpg",
    route: "What Are the Benefits of Using BigCommerce for Your Online Store?",
    alt: "More Tech",
  },
  {
    id: 9,
    title: "Why BigCommerce Is the Best eCommerce Platform for Small Businesses",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204515/11_hfoplj.jpg",
    route: "Why BigCommerce Is the Best eCommerce Platform for Small Businesses",
    desc: "There are many small businesses which are searching for the right eCommerce platform to build a strong portfolio in the digital media.",
    alt: "More Tech",
  },
  {
    id: 10,
    title: "The Psychology of E-Commerce: How Design Impacts Buying Behavior",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1734961153/blog_images/toovwrmf8u3erxe7cor4.jpg",
    route: "The Psychology of E-Commerce: How Design Impacts Buying Behavior",

    alt: "More Tech",
  },
  {
    id: 11,
    title: "Futureproof Your E-Commerce:",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1733983130/blog_images/upmuo2khqbehkedjynk8.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 12,
    title: "Leverage BigCommerce Analytics to Understand Customer Behavior",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1734179278/blog_images/gdj6ht13olbg4ylyqcjl.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 13,
    title: "How can Bigcommerce development services help in creating a mobile-responsive e-commerce store?",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1733573808/blog_images/hg2jovshyqewjc6npn4l.jpg",
    route: "",
    desc: "We are now witnessing a very fast-paced technical world in which the emergence of AI transformed the very nature of e-commerce.",
    alt: "More Tech",
  },
  {
    id: 14,
    title: "How BigCommerce Streamlines Automotive Order Fulfillment and Shipping",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1733384526/blog_images/dbywuuzrjrqbapmz2vnv.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 15,
    title: "Introduction to BigCommerce: Features, Benefits, and Why It Stands Out",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204538/9_h3wqf8.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 16,
    title: "REASONS WHY YOUR BUSINESS STILL NEEDS A WEBSITE IN 2024",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204514/16_jjaklw.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 17,
    title: "Exploring the Benefits of Custom Software Development Services",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204514/17_xhkbfe.jpg",
    route: "",
    desc: "Custom software development is the process of designing software applications that meet the specific needs of an individual or a company. Like commercial off-the-shelf (COTS) software, custom options are usually targeting specific problems. They are meant for the use of in-house and not for resale. ",
    alt: "More Tech",
  },
  {
    id: 18,
    title: "HOW TO CREATE AN EFFECTIVE CONTENT CALENDAR FOR 2024",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732865886/blog_images/ome8rxzhcdxi6wabicor.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 19,
    title: "USING FACEBOOK CUSTOM AUDIENCE AND LOOKALIKE AUDIENCES TO IMPROVE AD TARGETING: UNLOCKING THE POWER OF PRECISION",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204451/19_uhqhiz.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 20,
    title: "Amazon’s Bezos to Face Unprecedented Protests During India Trip",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732865444/blog_images/vwrswqpopkffqevtadr5.webp",
    route: "",
    alt: "More Tech",
  },
  // {
  //   id: 21,
  //   title: "10 Items That Will Make Your Road Trip Feel Like First Class",
  //   src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732864107/blog_images/sqtkztqmjsse02asfyci.webp",
  //   route: "",
  //   alt: "More Tech",
  // },
  {
    id: 22,
    title: "9 BEST SEO TOOLS THAT HELP WEB SITE RANK IN 2024",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732862716/blog_images/razs4hwastcvkyg4wrwg.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 23,
    title: "Google June 2024 Spam Update – What You Need to Know",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732862567/blog_images/tnprjk4ijk0l8r6seyxm.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 24,
    title: "Importance of Local Link Building",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732861957/blog_images/dyrjtfs9jv55wvyxgsym.png",
    route: "",
    alt: "More Tech",
  },
  {
    id: 25,
    title: "TOP 10 PPC REPORTING TOOLS EVERY DIGITAL AGENCY SHOULD USE",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732861119/blog_images/jlvrncytsa7wdnyjn4wk.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 26,
    title: "HOW TO OUTSOURCE YOUR SEO PROJECTS",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204381/26_cgdcve.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 27,
    title: "MANY GOOGLE MAPS USERS WANT TO SEE AN IDEA OF WHAT TO ANTICIPATE WHEN THEY ARRIVE AT THEIR LOCATION.",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756551816/how-google-map_bxjg5f.png",
    route: "",
    alt: "More Tech",
  },
  {
    id: 28,
    title: "WAYS TO INCREASE WORDPRESS WEBSITE SPEED WITHOUT PLUGIN",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732860499/blog_images/sbvs2d5rtkpm0xhl3mvj.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 29,
    title: "How can Bigcommerce development services help in creating a mobile-responsive e-commerce store?",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732860226/blog_images/yfdyyj9khnsuwfzf01ck.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 30,
    title: "Two Big Drug Flops Show How Health-Care Economics Have Changed",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732860020/blog_images/jmjscla0djxeztjeb2tl.webp",
    route: "",
    alt: "More Tech",
  },
  {
    id: 31,
    title: "The French lettering company Letraset manufactured a set of dry",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732859686/blog_images/qa7dykynuxtukdbvicuu.webp",
    route: "",
    alt: "More Tech",
  },
  {
    id: 32,
    title: "The 11 Best Portable Chargers for All of Your Devices",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732858653/blog_images/zhiymle7ljbvzfn8cdfh.webp",
    route: "",
    alt: "More Tech",
  },
  {
    id: 33,
    title: "What to Do if You Overspent During the Holidays",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732857989/blog_images/uxeqbbjuweusikwh05ix.webp",
    route: "",
    alt: "More Tech",
  },
  {
    id: 34,
    title: "IMPORTANCE OF SOCIAL MEDIA",
    src: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1756204381/33_zfmnkk.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 35,
    title: "What are the Factors to Choose Monthly SEO Plans?",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732857234/blog_images/egzjcjpgrqrquwhw9ikc.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 36,
    title: "Why Is SEO Important for Small Businesses?",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1742880021/blog_images/gykdvyoh5vwubamkniye.jpg",
    route: "",
    alt: "More Tech",
  },
  {
    id: 37,
    title: "Keeping Up with Local SEO Algorithm Updates: A Guide for Businesses",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732856573/blog_images/zouwnq1woxk5tcgjn5xm.png",
    route: "",
    alt: "More Tech",
  },
  {
    id: 38,
    title: "Essential features that each e-commerce website should have in 2024",
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732855893/blog_images/n3plzbsxjci1skeqefht.jpg",
    route: "",
    alt: "More Tech",
  },


];

export default function SectionAll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexArt, setCurrentIndexArt] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 425) setVisibleItems(1);
      else if (width < 768) setVisibleItems(2);
      else if (width < 1024) setVisibleItems(3);
      else setVisibleItems(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(AllArticleBottom.length / visibleItems);
  const currentPage = Math.floor(currentIndex / visibleItems) + 1;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentIndex(currentIndex + visibleItems);
      setCurrentIndexArt(currentIndexArt + 1)
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentIndex(currentIndex - visibleItems);
      setCurrentIndexArt(currentIndexArt - 1)
    }
  };
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
      id: 1,
      title: "How Much Does It Cost to Hire a Web Development Company in Delhi?",
      desc: "Want to create an online store? But don't know where to start? You are not alone. Every business, from startups to large enterprises, needs an online presence. That is why the demand for web designing services in Delhi is increasing. ",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1754905681/blog-bannernew_t5y07v.jpg",
      alt: "Article 1"
    },
    {
      id: 2,
      title: "How to use social media to build your eCommerce brand & drive conversions?",
      desc: "Do you want to make social media your hidden weapon for your commerce brand’s ultimate success? Here are the tips you can leverage in 2025 for a glorious success.",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1747739889/blog_images/qp7qo5qnda1umtzvt0cz.jpg",
      alt: "Article 1"
    },
    {
      id: 3,
      title: "Why BigCommerce Is the Best eCommerce Platform for Small Businesses",
      desc: "There are many small businesses which are searching for the right eCommerce platform to build a strong portfolio in the digital media. ",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1741163083/blog_images/g0fierl0acbgr4edl5rl.jpg",
      alt: "Article 1"
    },
    {
      id: 4,
      title: "E-Commerce in the Age of AI: Beyond Basics",
      desc: "We are now witnessing a very fast-paced technical world in which the emergence of AI transformed the very nature of e-commerce.",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1733574096/blog_images/rkxnjjhb9g0z31s6pgvq.jpg",
      alt: "Article 1"
    },
    {
      id: 5,
      title: "Exploring the benefits of Woo Commerce",
      desc: "to this civic the in today’s world now interconnected Customers with world whole world the effortlessly and conveniently with online experience which will be there to meet this civic requirement. ",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1742879897/blog_images/uesnk6e8z2snlswl7ust.jpg",
      alt: "Article 1"
    },
    {
      id: 6,
      title: "The rumored iPhone 5SE could come in hot pink, not rose gold",
      desc: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection.",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732865250/blog_images/qsh3y68vxyjifdr6mgpj.webp",
      alt: "Article 1"
    },
    {
      id: 7,
      title: "The Local SEO Impact of Artificial Intelligence",
      desc: "Artificial intelligence has, over time, turned out to be a powerful driver of change across many industries. It is, therefore, expected to impact local search engine optimization in similar ways.",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1740810751/blog_images/k8ye6lo8h5wcywxvc7kz.jpg",
      alt: "Article 1"
    },
    {
      id: 8,
      title: "Fashion Portrait of Young Talented Businessman Handsome Model Man in Casual Cloth",
      desc: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection.",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732860367/blog_images/auifftlopjyqu7oyqd6s.webp",
      alt: "Article 1"
    },
    {
      id: 9,
      title: "8 Reasons You’re Not Getting Any website Traffic",
      desc: "Several explanations exist for why a blog or website may not receive enough traffic. Their influence is determined by factors such as the domain’s age, the author’s reputation, the quantity and kind of referrals (incoming links), social media strategy, and the freshness of the material.",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732858504/blog_images/s63qn57firo8tk9drpxq.jpg",
      alt: "Article 1"
    },
    {
      id: 8,
      title: "COMPREHENSIVE SEO TECHNIQUES TO BOOST KEYWORD RANKINGS",
      desc: "SEO means search engine optimization and it is the process used to optimise a website’s technical configuration, content relevance, and link popularity so its pages can become easily findable, more relevant, and popular towards user search queries, and as a consequence, search engines rank them better.",
      date: "11 AUG 2025",
      image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1732856782/blog_images/djer8c3iok6ltg7k7s3f.jpg",
      alt: "Article 1"
    },

  ]
  return (
    <>
      <section className="blog-main-con">
        <h3 className="head-sec">All</h3>
        <div className="blog-post-b">
          {articles
            .slice(currentIndexArt, currentIndexArt + 1)
            .map((article) => (
              <>
                <Link
                  key={article.id}
                  href={`/blog/${slugify(article.title)}`}
                  className="blog-image">
                  <img
                    src={article.image}
                    alt="Blog Post"
                    objectFit="cover" />
                </Link>

                <div className="blog-content">
                  <p className="date">{article.date}</p>
                  <Link href={`/blog/${slugify(article.title)}`}>
                    <h2>{article.title}</h2>
                  </Link>
                  <p>
                    {article.desc}
                  </p>
                  <div className="blogClockTime1">
                    <Link href={`/blog/${slugify(article.title)}`}>
                      <p className="cardBlogStpaarw">Read More</p>
                    </Link>
                    <span className="bimageloDiPargaph1">
                      <FcClock className="iconBlogClock" />
                      5:00 Min
                    </span>
                  </div>
                </div>
              </>

            ))}


        </div>
      </section>

      <section className="main-class-h-ye">
        <div className="ye-carousel-class">
          {AllArticleBottom
            .slice(currentIndex, currentIndex + visibleItems)
            .map((item) => (
              <Link href={`/blog/${slugify(item.title)}`} key={item.id} className="ye-carousel-item-class">
                <img src={item.src} alt={item.alt} />
              </Link>
            ))}
        </div>

        <div className="ye-pagination-box">
          <button onClick={handlePrev} className="ye-btn-prev">
            Prev
          </button>
          <span className="ye-page-number">
            Page {currentPage}
          </span>
          <button onClick={handleNext} className="ye-btn-next">
            Next
          </button>
        </div>
      </section>
    </>
  );
}
