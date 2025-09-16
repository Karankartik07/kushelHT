"use client";
import "@splidejs/react-splide/css";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../COMMON/Footer";
import GraphicFAQ from "../../COMMON/GraphicFAQ";
import Navbar from "../../COMMON/Navbar";
import Website from "../../components/Home/HomeForm";
import "../../globals.css";

const GraphicComponent = ({ notify }) => {
    const phoneNumber = "9045301702";

    const whatAppHandler = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
    };
    const callHandler = () => {
        const callUrl = `tel:${phoneNumber}`;
        window.open(callUrl, "_blank");
    };

    const scrollToTop = () => {
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Head>
                {/* Open Graph (OG) Meta Tags */}
                <meta
                    property="og:title"
                    content="Kushel Digi | Expert eCommerce Development Services"
                />
                <meta
                    property="og:description"
                    content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
                />
                <meta property="og:url" content="https://www.kusheldigi.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Kushel Digi | Expert eCommerce Development Services"
                />
                <meta
                    name="twitter:description"
                    content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
                />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
                />
                <meta name="twitter:url" content="https://www.kusheldigi.com/" />
            </Head>

            <Navbar />

            <div className="ser-main">
                <div className="graphic_back0">
                    <div className="graphic_back1">
                        <div className="graphic_des">
                            <h1>
                                Design Services for <br /> Ambitious Brands
                            </h1>

                            <p>
                                Kushel Digi Solutions is a creative and professional graphic
                                design company. Our team specializes in crafting and making a
                                unique digital design for websites which make your business
                                stand out. We are providing graphic designing services in the
                                USA and all over the world.
                            </p>
                            <button>
                                {" "}
                                <Link href="/contact-us">
                                    {" "}
                                    Lets get started
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Link>{" "}
                            </button>
                        </div>
                        <div className="grap12">
                            <div>
                                <img
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170416/graphicImgee_fiztyj.png"
                                    alt="graphic design services"
                                    title="graphic design services"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gettttt">
                    <div className="get_graphic">
                        <div className="get_graphic1">
                            <div className="graphic11">
                                <h3>A VARIETY OF DESIGN SERVICES AT YOUR FINGERTIPS</h3>
                                <h2>
                                    Our Graphic Design Services in USA with the Best Quality
                                </h2>
                                <div className="whether56">
                                    <p>
                                        With Kushel Digi Solutions, discover the potential of
                                        graphic design services in the USA. Your concepts will be
                                        turned into a larger-than-life canvas by our talented
                                        designers. Your vision will come to pass with their
                                        experience. For each concept you present to us, we create an
                                        experience that will never be forgotten—we don't just create
                                        a design.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="get_graphic2">
                            <div className="graphic_end_img">
                                <img
                                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170462/sinki_snpsbw.png"
                                    alt="graphic design agency"
                                    title="graphic design agency"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gd-designnn">
                    <div className="design_services dine-1234">
                        <h2>Design Services</h2>
                        <div className="design_cants">
                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170493/art1_owd5n5.png"
                                            alt="Brand Logo Design"
                                            title="Brand Logo Design"
                                        />
                                    </div>
                                    <div className="arts-head arts-head-first">
                                        <h3>Brand Logo Design</h3>
                                        <p>
                                            Our commitment to providing a visually striking
                                            representation of your brand's core values and message is
                                            reflected in our logo design services. The designers put a
                                            lot of effort into distilling your company's core values
                                            into a single, unforgettable image.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170529/art2_tfrtdj.png"
                                            alt="Catalog Design"
                                            title="Catalog Design"
                                        />
                                    </div>
                                    <div className="arts-head arts-head-first">
                                        <h3>Catalog Design </h3>
                                        <p>
                                            Our talented designers use close attention to detail and a
                                            deeper comprehension of your clients' needs to fascinate
                                            your target consumers. We provide a range of designs that
                                            combine different folds, cuts, and themes for different
                                            types of catalogs in order to successfully communicate
                                            your brand.
                                        </p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170576/art3_hjjkia.png"
                                            alt="Social Media Design"
                                            title="Social Media Design"
                                        />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Social Media Design</h3>
                                        <p>
                                            The graphic design team at Kushel Digi Solutions is
                                            skilled at producing engaging social media material that
                                            is thoughtfully crafted to connect intimately with your
                                            target audience. Allow us to assist you in utilizing
                                            targeted marketing techniques that will influence and
                                            captivate your target demographic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170620/art4_gimatm.png"
                                            alt="Graphics for Website"
                                            title="Graphics for Website"
                                        />
                                    </div>
                                    <div className="arts-head arts-head-firsttt">
                                        <h3>Graphics for Website</h3>
                                        <p>
                                            In website design, graphics have a significant impact on
                                            user engagement, retention, and overall user experience.
                                            Our design team goes above and beyond mere aesthetics to
                                            fully represent the spirit of your brand's personality and
                                            beliefs, making sure that your website functions as a tool
                                            for conversion and communication.
                                        </p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170663/art5_dmwdv0.png"
                                            alt="Advertisement Design"
                                            title="Advertisement Design"
                                        />
                                    </div>
                                    <div className="arts-head arts-head-second">
                                        <h3>Advertisement Design </h3>
                                        <p>
                                            Use Kushel Digi Solutions skillfully created designs to
                                            discover the potential of advertising to expand your
                                            company. When it comes to producing eye-catching 3D
                                            advertising concepts and banners, posters, billboards, and
                                            digital signs, our committed staff is an expert in turning
                                            viewers into buyers.
                                        </p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170698/art6_qb9jxv.png"
                                            alt="Illustration Design"
                                            title="Illustration Design"
                                        />
                                    </div>
                                    <div className="arts-head arts-head-second">
                                        <h3>Illustration Design</h3>
                                        <p>
                                            Get on-brand motion graphics designed to enhance your
                                            website, digital campaigns, presentations and ads.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170889/art7_ldkd4g.png"
                                            alt="Branding Services"
                                            title="Branding Services"
                                        />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Branding Services </h3>
                                        <p>
                                            Get Static and motion ad creative, concepts, and
                                            variations for testing your way to better result across
                                            social media.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739170925/art8_vv73nl.png"
                                            alt="Video Production"
                                            title="Video Production"
                                        />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Video Production</h3>
                                        <p>
                                            Whether you want a static or an animated video, our
                                            graphic designers will create authentic and the best
                                            multimedia content with high-quality graphics.
                                        </p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739171002/art9_zcyprl.png"
                                            alt="Concept Creation"
                                            title="Concept Creation"
                                        />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Concept Creation</h3>
                                        <p>
                                            Get on-brand motion graphics designed to enhance your
                                            website, digital campaigns, presentations and ads.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739171048/art10_c6zrqr.png"
                                            alt="Print Design"
                                            title="Print Design"
                                        />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Print Design</h3>
                                        <p>
                                            Get Static and motion ad creative, concepts, and
                                            variations for testing your way to better result across
                                            social media.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739171084/art11_davnlg.png"
                                            alt="Email Design"
                                            title="Email Design"
                                        />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Email Design</h3>
                                        <p>
                                            At Kushel Digi Solutions, we meticulously craft custom
                                            email templates aligned with your brand identity and the
                                            target demographics.
                                        </p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <img
                                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739171128/art12_xxvf7t.png"
                                            alt="eBooks & Reports Design"
                                            title="eBooks & Reports Design"
                                        />
                                    </div>
                                    <div className="arts-head">
                                        <h3>eBooks & Reports Design</h3>
                                        <p>
                                            Get on-brand motion graphics designed to enhance your
                                            website, digital campaigns, presentations and ads.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="greet-out">
                    <div className="gret-outcome">
                        <div className="gret-outcome1">
                            <h3>DRIVING GREAT OUTCOMES</h3>
                            <p>
                                #1 Creative-as-a-Service solution for marketing and creative
                                teams
                            </p>
                        </div>

                        <div className="gret-outcome2">
                            <Link href="/contact-us">
                                <button>Book a Demo</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="what_makes">
                    <div className="what_makes1">
                        <div className="make-head">
                            <h3>
                                How Graphic Designing help in Business
                                <br />
                            </h3>
                            <p>
                                One of the best things you can do to improve your marketing plan
                                is to use graphic design. An audience is drawn in and intrigued
                                by visually striking content that promotes your brand and
                                product. An informed audience is provided by graphics that are
                                purposefully created. According to a common saying, an image
                                speaks a thousand words. You can now express the tale of your
                                business with your own photographs. You may attract reader's
                                attention to content you want to stand out by using informative
                                images on your website. Awe-inspiring pictures are used to break
                                up dense text and to visually illustrate concepts. Generally
                                speaking, images increase user engagement, which increases
                                traffic to websites.
                            </p>
                            <Link href="/contact-us">
                                <button>Book a Call</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <GraphicFAQ />
                <Website />

                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <img
                            className="what-image-universal"
                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png"
                            alt="whatsApp-kusheldigi"
                            title="whatsApp-kusheldigi"
                        />
                    </button>
                    <button onClick={callHandler}>
                        <img
                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png"
                            alt="call-icon"
                            title="call-icon"
                        />
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GraphicComponent;
