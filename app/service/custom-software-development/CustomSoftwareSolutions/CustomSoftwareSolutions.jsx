'use client'

import React, { useRef, useState } from 'react';
import "./CustomSoftwareSolutions.css";
import { FaChevronLeft } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const CustomSoftwareSolutions = () => {

    const softwareSolutions = [
        {
            // icon: <FaHandshake/>,
            imgSrc: "https://res.cloudinary.com/dal5dlztv/image/upload/v1746984059/relation-2_asqpkl.png",
            title: "Improve Customer Relationship Management",
            description:
                "We help businesses track and analyze customer data with our custom CRM software by providing a unified view of customer information across the organization. Through our customized software we ensure seamless customer experience and drive customer satisfaction."
        },
        {
            // icon: <BiSolidCustomize/>,

            imgSrc: "https://res.cloudinary.com/dal5dlztv/image/upload/v1746983932/interface-development-2_qteaow.png",
            title: "Custom Programming Interface Development",
            description:
                "Through our software development services we create APIs tailored to the specific integration needs of businesses enabling better communication and interactions between different software systems. Custom APIs facilitate effective data exchange, automate processes, and smooth third-party integrations."
        },
        {
            // icon: <MdSettingsSuggest/>,
            imgSrc: "https://res.cloudinary.com/dal5dlztv/image/upload/v1746984032/software-2_rkjkyy.png",
            title: "Software Integrations into Existing Tech Ecosystem",
            description:
                "Our custom softwares are designed to seamlessly integrate with specific software platforms. Through these integrations, organizations can leverage the full potential of their existing software investments, improve collaboration between departments, and achieve greater operational efficiency."
        },
        {
            // icon: <GoWorkflow/>,
            imgSrc: "https://res.cloudinary.com/dal5dlztv/image/upload/v1746983911/automation_zqjxow.png",
            title: "Achieve Workflow Automation With Customisation",
            description:
                "Our customized solutions most effectively streamline repetitive tasks and processes within an organization. Our software development company provides flexibility in designing workflows that align with the unique requirements of different departments of an organization."
        },
        {
            // icon: <MdBusinessCenter/>,
            imgSrc: "https://res.cloudinary.com/dal5dlztv/image/upload/v1746983844/business_tdpmnh.png",
            title: "Business Intelligence and Analytics",
            description:
                "We push business intelligence through our data-driven AI-inspired custom software development that analyze and visualize data to support better decision-making. The custom software can allow businesses to create reports tailored to specific metrics and KPIs that can predict trends, suggest strategies, and drive growth."
        },
        {
            // icon: <HiLightBulb/>,
            imgSrc: "https://res.cloudinary.com/dal5dlztv/image/upload/v1746983883/custom-softwareeeee_pfxidi.png",
            title: "Custom Software Solutions for Enterprises",
            description:
                "We offer comprehensive technology solutions to large organizations to manage various aspects of their operations. We highly customize the software to align with specific workflows that differ for every enterprise. Our software development services help in Enterprise resource planning by integrating business processes."
        }
    ];

    const sliderRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current, next) => {
            const totalSlides = softwareSolutions.length - 1;
            const calc = (next / totalSlides) * 100;
            setProgress(calc);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
        <div className='custom-software-solutions-outer-container'>
            <div className="custom-software-solutions-inner-container">
                <h4 className='custom-solutions-sm-heading'>CUSTOM SOFTWARE SOLUTIONS</h4>
                <h3 className='custom-solutions-heading'>Customise, develop and succeed with TechAhead, your partner software development company</h3>


                <div className="custom-solutions-slide-container">
                    <Slider ref={sliderRef} {...settings}>
                        {
                            softwareSolutions.map((solution, index) => {
                                return (
                                    <div key={index} className='custom-slide-solutions'>
                                        <div className='custom-slide-icon-cont'>
                                          <img src={solution.imgSrc}  alt="" />
                                        </div>
                                        <h3>{solution.title}</h3>
                                        <hr />
                                        <p>{solution.description}</p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <div className='custom-solutions-slider-bottom'>
                        <div className="custom-progress-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}>
                            <div className="custom-progress-bar" style={{ backgroundSize: `${progress}% 100%` }}>
                                <span className="sr-only">{Math.round(progress)}% completed</span>
                            </div>
                        </div>
                        <div className='custom-solutions-slider-bottom-btn-cont'>
                            <span className='custom-solutions-slide-btn' onClick={() => sliderRef.current?.slickPrev()}>
                                <FaChevronLeft />
                            </span>
                            <span className='custom-solutions-slide-btn' onClick={() => sliderRef.current?.slickNext()}>
                                <FaChevronLeft className='rotatenextbtn' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomSoftwareSolutions