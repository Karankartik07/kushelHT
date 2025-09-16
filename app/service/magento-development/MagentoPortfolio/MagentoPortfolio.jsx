"use client"
import React from "react";
import './MagentoPortfolio.css'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";


export default function MagentoPortfolio({page}) {
    return (
        <section className="projectsSectionKcom">
            <div className="projectsHeaderKcom">
                <div className="textKcom">
                    <h2 className="primary-heading">Our Success Stories</h2>
                    <p className="secondary-heading">
                        Explore how our custom solutions have helped businesses to shine in this competitive world.
                    </p>
                </div>
                <Link href="/portfolio">
                    <button className="viewAllBtnKcom">
                        View All Work
                    </button>
                </Link>

            </div>

            <div className="b2b-sectionKcom">

                <div className="b2b-contentKcom">
                    <div className="left-b2b-cardsKcom">
                        <div className="left-b2b-cardKcom">
                            <div className="b2b-logoKcom">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744024691/shooters_1_atm6x0.png" alt="Shopify Plus" />
                                <a href="https://typhoondefense.com/" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward /></a>
                            </div>

                            <a href="https://typhoondefense.com/" className="b2b-btnKcom">
                            Typhoon Defense
                                <p>{page}</p>
                            </a>
                            <hr className="hrKcomKu" />
                        </div>
                        <div className="left-b2b-cardKcom-2">
                            <div className="b2b-logoKcom">

                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744024692/typoon_r4qbbn.png" alt="Shopify Plus" />
                                <a href="https://lafayetteshooters.com/" id="human" className="hover-linkCom"> View Case Study<MdArrowOutward /></a>
                            </div>

                            <a href="https://lafayetteshooters.com/" className="b2b-btnKcom">
                            Lafayette Shooters
                                <p>{page}</p>
                            </a>
                            <hr />
                        </div>

                        <div className="left-b2b-cardKcom-3">
                            <div className="b2b-logoKcom">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744024693/indrpal-9_aupyjc.png" alt="Shopify Plus" />
                                <a href="https://graco-corp.com/" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward /></a>
                            </div>

                            <a href="https://graco-corp.com/" className="b2b-btnKcom">
                                Graco-Corp
                                <p>{page}</p>
                            </a>
                            <hr />
                        </div>
                    </div>
                    <div className="right-b2b-cardsKcom">
                        <div className="right-b2b-cardKcom">
                            <div className="b2b-logoKcom">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744024692/Untitled-indrpal-10_en8ton.png" alt="Shopify Plus" />
                                <a href="https://fouroaksfarm.com/" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /> </a>
                            </div>

                            <a href="https://fouroaksfarm.com/" className="b2b-btnKcom">
                            Four Oaks Farm
                                <p>{page}</p>
                            </a>
                            <hr />
                        </div>
                        <div className="right-b2b-cardKcom">
                            <div className="b2b-logoKcom">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744024697/krap-stap_tzepfo.png" alt="Shopify Plus" />
                                <a href="https://krappstrapp.com/" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
                            </div>

                            <a href="https://krappstrapp.com/" className="b2b-btnKcom">
                                Krapp Strapp
                                <p>{page}</p>
                            </a>
                            <hr />
                        </div>
                        <div className="right-b2b-cardKcom">
                            <div className="b2b-logoKcom">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744175096/tap-brass_wun8e3.png" alt="Shopify Plus" />
                                <a href="https://topbrasstactical.com/" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
                            </div>

                            <a href="https://topbrasstactical.com/" className="b2b-btnKcom">
                            Top Brass Tactical
                                <p>{page}</p>
                            </a>
                            <hr />
                        </div>


                    </div>




                </div>

            </div>
        </section>
    );
}