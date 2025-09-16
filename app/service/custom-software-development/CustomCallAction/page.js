"use client";
import React from "react";
import "./customcallaction.css";
import Link from "next/link";

const CustomCallAction = () => {
    return (
        <section className="banner-wrapper">
            <div className="banner-container">
                <div className="banner-left">
                    <h1>
                        We Create The Most Innovative <br />
                        <span>Software Development Solutions In </span>
                        Just <span className="highlight">90 days</span> or less!
                    </h1>
                    <p>
                        Unlock your business potential with our software development company today!
                    </p>
                    <a href="/contact-us" className="banner-button">
                        Contact Now!
                        <span className="rotated-icon">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.707 5.77399L5.99997 0.0669887L0.292969 5.77399L1.70697 7.18799L5.99997 2.89499L10.293 7.18799L11.707 5.77399Z" fill="white" />
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="banner-right">
                    <img
                        src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1749638974/custom-cta1img_wpvkat.png"
                        alt="Software Development"
                        className="banner-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default CustomCallAction;
