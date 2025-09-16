"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FcClock } from 'react-icons/fc';
import Article from './Article/Article';
import "./blogNew.css";

export default function BlogNew({ parentfunct }) {
    const [activeTag, setActiveTag] = useState('all');
    const articles = [
        //Latest
        {
            id: 1,
            category: "Latest",
            // culture: "More in Culture",
            title: "How Much Does It Cost to Hire a Web Development Company in Delhi?",
            desc: "Want to create an online store? But don't know where to start? You are not alone. Every business, from startups to large enterprises, needs an online presence. That is why the demand for web designing services in Delhi is increasing. ",
            date: "11 AUG 2025",
            image: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1754905681/blog-bannernew_t5y07v.jpg",
            alt: "Article 1",
            time:"10:30 Am"
        },
    ]

    const tags = [
        { id: 'all', label: 'All blogs' },
        { id: 'eCommerce', label: 'e-commerce' },
        { id: 'web-dev', label: 'Web Development' },
        { id: 'Business', label: 'Business' },
        { id: 'bigcommerce-development', label: 'BigCommerce Development' },
        { id: 'shopify', label: 'Shopify' },
        { id: 'shopify-dev', label: 'Shopify Development' },
        { id: 'headless', label: 'Headless' },
        { id: 'bigcommerce-headless', label: 'BigCommerce Headless' },
        { id: 'shopify-headless', label: 'Shopify Headless' },
        { id: 'custom-dev', label: 'Custom Development' },
        { id: 'wordpress', label: 'WordPress' },
        { id: 'bigcommerce', label: 'BigCommerce' },
        { id: 'app-dev', label: 'App Development' },
        { id: 'magento', label: 'Magento' },
        { id: 'magento-dev', label: 'Magento Development' },
    ];

    const handleTagClick = (id) => {
        setActiveTag(id);
        // In future: Filter blogs based on this `id`
        console.log("Selected Tag:", id);
        parentfunct(id)
    };


    function slugify(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
    }
    return (
        <>
            <section className="blog-main-con">
                <div className="blog-container">
                    <h1 className="heading">Innovate With Us</h1>
                    <div className="tags">
                        {tags.map((tag) => (
                            <button
                                key={tag.id}
                                className={`tag ${activeTag === tag.id ? 'active' : ''}`}
                                onClick={() => handleTagClick(tag.id)}
                            >
                                {tag.label}
                            </button>
                        ))}
                    </div>
                    <div>
                        <p
                            style={{
                                border: "1px solid rgba(40, 39, 39, 0.17)",
                                marginTop: 20,
                                marginBottom: 40
                            }}
                        />
                    </div>

                </div>
            </section>
            {
                activeTag === "all" ? <div className="blog-post">
                    {articles
                        .map((article) => (
                            <>
                                <Link
                                    key={article.id}
                                    href={`/blog/${slugify(article.title)}`}
                                    className="blog-image">
                                    <img
                                        src={article.image}
                                        alt="Blog Post"
                                        //   layout="fill"
                                        objectFit="cover" />
                                </Link >

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
                </div> : <Article title={activeTag} />

            }
        </>
    );
}


