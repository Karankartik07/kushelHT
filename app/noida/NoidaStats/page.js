"use client";
import React from "react";
import "./noidastats.css";
import Link from "next/link";

export default function NoidaStatsService() {
    const stats = [
        {
            icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
            // sub: "eCommerce",
            title: "ECommerce Development Company in Noida",
            discp:
                "Get ecommerce solutions that are made just for your company. Easily increase sales, improve the customer experience, and build your brand online.",
            className: "card-blue",
            route: "/noida/ecommerce-development-company-in-noida",
        },
        {
            icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
            // sub: "BigCommerce",
            title: "Bigcommerce Development Company in Noida",
            discp:
                "Choosing the correct ecommerce development company in Noida helps in drastic business growth and more conversions. Solutions that are quick, easy to build, and good for search engines for your growing company.",
            className: "card-yellow",
            route: "/noida/bigcommerce-development-company-in-noida",
        },
        // {
        //     icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
        //     // sub: "Shopify",
        //     title: "Shopify Development in Noida",
        //     discp:
        //         "Launch a stunning Shopify store tailored to your brand and goals. From custom themes to smart integrations, we turn clicks into customers.",
        //     className: "card-green center-item-noida ",
        //     route: "/shopify-development-company-in-noida",
        // },
    ];
    return (
        <>
            <section className="main-stats-sec">
                <h3 className="service-heading">Our Services</h3>
                <section className="stats-section-noida">
                    {stats.map((stat, index) => (
                        <Link href={`${stat.route}`} key={index} className={`stat-card-noida ${stat.className}`}>
                            <div className="stat-icon">
                                <img src={stat.icon} alt="icon" />
                            </div>
                            <div className="service-title">
                                <span>{stat.title}</span>
                                {/* <h3>{stat.title}</h3> */}
                            </div>
                            <p className="ptag-service">{stat.discp}</p>
                            <Link href={`${stat.route}`}>
                                {" "}
                                <button className="btn-service-visit">Visit More</button>
                            </Link>
                        </Link>
                    ))}
                </section>

                <section className="service-sec2">
                    <h4>Smart E-Commerce Development for Growing Brands</h4>
                    <p>
                        We are a team of expert developers, specialising in eCommerce website development. Whether you're a startup or a growing brand, we help you build an online store that looks great, runs smoothly, and enables you to sell more. Our e-commerce websites are fast, secure, easy to use, scalable, flexible, SEO optimized and grow along with the brand. Our one and only goal is to help you succeed online by making a custom eCommerce site that fits your business perfectly.
                        No useless talk, and wastage of time- Just real results and website growth. Let's make your online business something great!
                    </p>
                </section>
            </section>
        </>
    );
}
