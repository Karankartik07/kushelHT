"use client";

import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

export default function Testimonials() {
    const splideRef = useRef(null);

    const goPrev = () => {
        splideRef.current?.splide?.go('-1');
    };

    const goNext = () => {
        splideRef.current?.splide?.go('+1');
    };

    useEffect(() => {
        const slides = document.querySelectorAll('.splide__slide');
        slides.forEach(slide => {
            if (slide.getAttribute('role') === 'group') {
                slide.removeAttribute('role');
            }
        });
    }, []);

    return (
        <section className="w-full relative bg-[#f6f5f4] py-[50px] flex flex-col gap-10 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start max-w-[1720px] w-full gap-[30px] px-6 md:px-8 lg:px-16 mx-auto flex-col md:flex-row">
                <div className="flex flex-col w-full">
                    <p className="text-[20px] font-normal leading-[40px]">TESTIMONIALS</p>
                    <p className="text-[39px] font-semibold leading-[44px] mt-2">
                        What our Clients are saying
                    </p>
                </div>

                <div className="flex items-center gap-[18px] w-auto md:w-auto mt-4 md:mt-0">
                    <button
                        onClick={goPrev}
                        aria-label="Previous testimonial"
                        className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center transition-colors hover:border-[#1063ff]"
                    >
                        {/* left arrow */}
                        <svg className="w-[14px] h-[14px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1661 9.1131L1.1131 8.83393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#0e151d]" />
                            <path d="M9 17L1.1131 8.83393L9.27917 0.947037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#0e151d]" />
                        </svg>
                    </button>

                    <button
                        onClick={goNext}
                        aria-label="Next testimonial"
                        className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center transition-colors hover:border-[#1063ff]"
                    >
                        {/* right arrow (rotated) */}
                        <svg className="w-[14px] h-[14px] rotate-180" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1661 9.1131L1.1131 8.83393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#0e151d]" />
                            <path d="M9 17L1.1131 8.83393L9.27917 0.947037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#0e151d]" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Slider wrapper */}
            <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 overflow-visible mt-3">
                <Splide
                    ref={splideRef}
                    options={{
                        type: "loop",
                        perPage: 3,
                        perMove: 1,
                        gap: "30px", // thoda bada rakho
                        pagination: false,
                        arrows: false,
                        drag: "free",
                        breakpoints: {
                            1450: { perPage: 3, gap: "24px" },
                            1200: { perPage: 2, gap: "20px" },
                            800: { perPage: 1, gap: "20px" },
                        },
                    }}
                >

                    {/* Slide 1 */}
                    <SplideSlide>
                        <div className="flex flex-col gap-4 bg-white rounded-[10px] relative min-h-[400px] min-w-[350px] p-6 shadow-md">
                            <div className="flex items-center justify-between w-full ">
                                <Image
                                    loading="lazy"
                                    width={100}
                                    height={18}
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp"
                                    alt="stars"
                                />
                                <Image
                                    loading="lazy"
                                    width={100}
                                    height={70}
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745842494/manish-bhai-1_hmba1g.png"
                                    alt="client logo"
                                    className="rounded-full"
                                />
                            </div>

                            <p className="text-[17px] font-normal leading-[26px] text-left text-[#111] mt-2">
                                Kushel Digi Solutions delivered exceptional ecommerce development
                                services and helped us built a highly functional online platform.
                                The team's technical skills and experience is really commendable which
                                provided a seamless digital upgrade.
                            </p>

                            <div className="absolute left-[24px] bottom-[14px]">
                                <p className="text-[19px] font-semibold text-[#000] lg:mb-1">Shikhar Mithal</p>
                                <p className="text-[14px] font-normal mt-[-4px] lg:mb-0.5">Mithal Industries</p>
                            </div>
                        </div>
                    </SplideSlide>

                    {/* Slide 2 */}
                    <SplideSlide>
                        <div className="flex flex-col gap-4 bg-white rounded-[10px] relative min-h-[400px] p-6 shadow-md">
                            {/* Top section with stars + logo */}
                            <div className="flex items-center justify-between w-full">
                                {/* Stars */}
                                <Image
                                    loading="lazy"
                                    width={100}
                                    height={18}
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp"
                                    alt="stars"
                                />
                                {/* Client Logo */}
                                <Image
                                    loading="lazy"
                                    width={100}
                                    height={80}
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745842480/manish-bhai-3_uz3ee0.png"
                                    alt="client logo"
                                    className="object-contain"
                                />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-[17px] font-normal leading-[26px] text-left text-[#111] mt-2">
                                From designing to execution, Kushel Digi Solutions was the best choice for
                                the innovative development of our project. Their expertise as well as
                                attention to detail in website development &amp; BigCommerce solutions
                                ensured to enhance our digital strategy and user's online experience.
                            </p>

                            {/* Client Name + Company */}
                            <div className="absolute left-[24px] bottom-[14px]">
                                <p className="text-[19px] font-semibold text-[#000] lg:mb-1">Annu Koteshwara</p>
                                <p className="text-[14px] font-normal mt-[-4px] lg:mb-0.5">Slides365</p>
                            </div>
                        </div>
                    </SplideSlide>

                    {/* Slide 3 */}
                    <SplideSlide>
                        <div className="flex flex-col gap-4 bg-white rounded-[10px] relative min-h-[400px] p-6 shadow-md">
                            {/* Stars + Logo */}
                            <div className="flex items-center justify-between w-full">
                                {/* Stars */}
                                <Image
                                    loading="lazy"
                                    width={100}
                                    height={18}
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp"
                                    alt="stars"
                                />
                                {/* Client Logo */}
                                <Image
                                    loading="lazy"
                                    width={100}
                                    height={80}
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1745842486/manish-bhai-2_strlgl.png"
                                    alt="client logo"
                                    className="rounded-full"
                                />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-[17px] font-normal leading-[26px] text-left text-[#111] mt-2">
                                Kushel Digi Solutions understands the core of eCommerce development and
                                delivered BigCommerce solutions that became a game changer for our online
                                business. Their team provided scalability and improved customer experience.
                            </p>

                            {/* Client Name + Company */}
                            <div className="absolute left-[24px] bottom-[14px]">
                                <p className="text-[19px] font-semibold text-[#000] lg:mb-1">Aron Kiefer</p>
                                <p className="text-[14px] font-normal mt-[-4px] lg:mb-0.5">MyCrazySimpleCMS</p>
                            </div>
                        </div>
                    </SplideSlide>


                    {/* Duplicate slides — add more SplideSlide components with same structure */}
                </Splide>
            </div>
        </section>
    );
}
