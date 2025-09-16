'use client'

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ScrollSection.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ScrollAnimation = () => {
    const sliderRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (sliderRef.current && sliderRef.current.slickPlay && sliderRef.current.slickPause) {
                    if (entry.isIntersecting) {
                        sliderRef.current.slickGoTo(0);
                        sliderRef.current.slickPlay();
                    }
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className="scroll-section-wrapper" ref={sectionRef}>
            <h3 className="scroll-section-heading primary-heading">Website Design Process</h3>
            <p className="scroll-section-para secondary-heading">
                Take a peek behind the curtain and explore the custom web design process our team follows.<br />
                We build custom sites for brands of all sizes that deliver measurable results.
            </p>

            <div className="mobile-scroll-section">
                <Slider {...settings} ref={sliderRef}>
                    {sectionsData.map((section, index) => (
                        <ScrollSection key={index} {...section} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const ScrollSection = ({ img, number, title, description, listItems }) => (
    <div className="scrolled-section">
        <Image
            className="scroll-card-img"
            decoding="async"
            loading="lazy"
            src={img}
            alt={title}
            width={210}
            height={149}
        />
        <div className="scroll-cardds">
            <h3 className="scroll-card-heading">{title}</h3>
            <p className="scroll-card-para">{description}</p>
            <ul className="scroll-card-ul">
                {listItems.map((item, index) => (
                    <li className="scroll-card-li" key={index}>
                        <IoMdArrowDropright className="scroll-card-li-icon" />
                        {item}
                    </li>
                ))}
            </ul>
            <span className="counter">{number}</span>
        </div>
    </div>
);

const sectionsData = [
    {
        number: "01",
        title: "Discovery Phase",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/discovery-phase_a2muy9.png",
        description: "Kushel Digi always prioritizes understanding your business model, target audience, and growth objectives. It helps us to create a personalized eCommerce strategy best suited for your vision and market demands.",
        listItems: [
            "In-depth business analysis",
            "Identifying target audience & goals",
            "Personalized eCommerce strategy",
        ],
    },
    {
        number: "02",
        title: "Strategy Phase",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015612/strategy-phase_t9oush.png",
        description: "After understanding your requirements, our team designs a development plan that includes platform selection, feature integration, and user experience design. It ensures a solid foundation for an excellent online store.",
        listItems: [
            "Platform selection & tech stack",
            "Feature planning & UX optimization",
            "Roadmap for scalable growth",
        ],
    },
    {
        number: "03",
        title: "Design & Prototyping",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/design-_-prototyping_ssn1c8.png",
        description: "We have a team of dedicated UI/UX designers who design interactive prototypes to visualize your store's layout and functionality. Kushel Digi is committed to a seamless and user-friendly shopping experience.",
        listItems: [
            "Wireframes & interactive prototypes",
            "User-centric design approach",
            "Focus on seamless navigation",
        ],
    },
    {
        number: "04",
        title: "Development Phase",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/development-phase_fbl6fy.png",
        description: "We have a team of the country's best developers with a wide range of experience in building scalable eCommerce platforms with advanced features and third-party integrations.",
        listItems: [
            "Scalable & high-performance solutions",
            "Custom features",
            "Third-party integrations",
        ],
    },
    {
        number: "05",
        title: "Testing Phase",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015611/testing-phase_jygidt.png",
        description: "We perform rigorous testing to identify and resolve bugs. It also helps us optimize performance and ensure your website is responsive and secure. We are committed to a better user experience without errors.",
        listItems: [
            "Multi-device & browser compatibility",
            "Performance & security checks",
            "Bug fixing & optimization",
        ],
    },
    {
        number: "06",
        title: "Launch & Ongoing Support",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744015610/launch_rx3ijg.png",
        description: "After a successful launch, we provide continuous monitoring, updates, and technical support. Our team is always there with you to keep your site optimized according to market trends.",
        listItems: [
            "Smooth deployment & go-live support",
            "Continuous monitoring & updates",
            "24/7 technical assistance",
        ],
    },
];

export default ScrollAnimation;
