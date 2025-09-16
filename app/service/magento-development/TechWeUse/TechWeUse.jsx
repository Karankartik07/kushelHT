'use client'
import React from 'react';
import "./TechWeUse.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Autoplay } from 'swiper/modules';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <MdOutlineNavigateNext size={24} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <GrFormPrevious size={24} />
        </div>
    );
}

const TechWeUse = () => {

    const technologies = [
        {
            category: "Frontend Technologies",
            items: ["HTML5", "CSS3", "JavaScript"]
        },
        {
            category: "Backend Technologies",
            items: ["PHP 8.x", "Magento Framework"]
        },
        {
            category: "Database Management",
            items: ["MySQL", "MongoDB"]
        },
        // {
        //     category: "Cloud & Hosting Solutions",
        //     items: ["AWS", "Google Cloud Platform", "Microsoft Azure"]
        // },
        // {
        //     category: "Payment Gateways",
        //     items: ["PayPal", "Stripe", "Authorize.net", "Braintree", "Razorpay"]
        // },
        // {
        //     category: "DevOps & Security",
        //     items: ["Docker", "Kubernetes", "Jenkins", "Cloudflare", "SSL/TLS Encryption"]
        // }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
           cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
        <div className='tech-we-use-outer-container'>
            <h3 className='tech-we-use-heading primary-heading'>Technologies We Rely On</h3>
            <p className='tech-we-use-para secondary-heading'>Kushel Digi Solutions believes in leveraging latest and advanced technologies to deliver you the best Magento Development Services.</p>

            <div className="tech-we-use-slider-container">
                <Slider {...settings}>
                    {technologies.map((tech, index) => (
                        <div key={index} className='tech-we-use-slide-item'>
                            <h3>{tech.category}</h3>
                            <ul>
                                {tech.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default TechWeUse