"use client"
import Head from 'next/head';


import Link from 'next/link';

import Footer from '../../COMMON/Footer';
import Navbar from '../../COMMON/Navbar';
import '../../globals.css';
const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}

const NextJsComponent = () => {

    return (
        <>

            <Head>
                {/* Open Graph (OG) Meta Tags */}
                <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
                <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
                <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
                <meta property="og:url" content="https://www.kusheldigi.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
                <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
                <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
                <meta name="twitter:url" content="https://www.kusheldigi.com/" />
            </Head>

            <Navbar />

            <div id="kushel-next-js">
                <div className="kushel-next-js-banner">
                    <div className="kushel-next-js-container">
                        <div className="kushel-next-js-content">
                            <div className="kushel-next-js-left-content">
                                <h1>Leading Next JS Development Services in USA</h1>
                                <p>
                                    Create highly performant, scalable, and SEO-friendly applications
                                    with Next JS Development Services. Trusted by leading companies in
                                    USA, Kushel Digi Next JS development company believe in delivering
                                    high quality web applications to meet user expectations. .
                                </p>
                            </div>
                            <div className="kushel-next-js-right-images">
                                {/* <img src={banner} alt="next.js imaage" title="next.js imaage" /> */}
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724850418/banner1img.4a3a1806ac1b89b8c4a3_t9jz9o.png" alt="next.js imaage" title="next.js imaage" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner1">
                    <div className="kushel-next-js-container1">
                        <div className="kushel-next-js-content023">
                            <div className="kushel-next-js-content1">
                                <h2>Your Trusted Next JS Development Company </h2>
                                <p>
                                    Kushel Digi Solutions is a internationally recognised next js web
                                    development company well known for delivering seamless,
                                    high-performing, and scalable web applications. Our dedicated next
                                    js developers have expertise in designing lightweight,
                                    server-rendered, and test-driven applications. Let us be your
                                    digital partner for next js development services.
                                </p>
                                <p>
                                    1) Proficient in modern MV frameworks such as Angular.js, Vue.js,
                                    React, Ember.js, well-acquainted with advanced JavaScript
                                    methodologies like ECMAScript and Node.js, and possess comprehensive
                                    expertise in overall front-end architecture.
                                </p>
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724850378/next2sect.bcf135619d3a6fe16331_fwi0dt.png" alt="Your Trusted Next JS Development Company" title="Your Trusted Next JS Development Company" />
                                <p>
                                    2) Proficient in React, Next.js, SX, Babel, Webpack, React-Redux,
                                    Antdesign, NPM (Node Package Manager), ES6, and Redux Thunk.
                                </p>
                                <p>
                                    3) Experienced in AJAX, SaaS, CSS, Less, Git, Bootstrap, HTML,
                                    RESTful, and full-stack development.
                                </p>
                                <p>
                                    4) Skilled in PostgreSQL, JavaScript, GraphQL, MongoDB, and MySQL./
                                </p>
                                <p>
                                    5) Adept with Text Editor, WARP, React, TypeScript, Profiler,
                                    NX.Dev, Railway, and Remix.
                                </p>
                                <p>6) Expertise in UI performance metrics.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner2">
                    <div className="kushel-next-js-container2">
                        <div className="kushel-next-js-content2">
                            <h6>Reasons to consider Next.js development</h6>
                            <div className="kushel-next-js-main-content">
                                <div className="kushel-next-js-left-content2">
                                    <div className="kushel-next-js-left1-content">
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739425742/Mask-group_fmrem2.svg' alt=" right-tick" title='right-tick' />
                                        <p>
                                            Performance: Next.js enables server-side rendering, optimizing
                                            your web application's performance and improving user
                                            experience.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-left1-content">
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739425742/Mask-group_fmrem2.svg' alt="right-tick" title='right-tick' />
                                        <p>
                                            SEO Friendly: Next.js optimizes your web applications for search
                                            engines and improve search engine visibility and ranking.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-left1-content">
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739425742/Mask-group_fmrem2.svg' alt="right-tick" title='right-tick' />
                                        <p>
                                            Scalability: Next.js allows you to build scalable applications
                                            that can handle growing user bases according to your business
                                            needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="kushel-next-js-left-content2">
                                    <div className="kushel-next-js-left1-content">
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739425742/Mask-group_fmrem2.svg' alt="right-tick" title='right-tick' />
                                        <p>
                                            Easy Integration: Next.js easily integrates with various APIs,
                                            databases, and third-party services.{" "}
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-left1-content">
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739425742/Mask-group_fmrem2.svg' alt="right-tick" title='right-tick' />
                                        <p>
                                            Cost-Effective: Next.js is the most affordable solution that can
                                            reduce overall development and maintenance costs.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-left1-content">
                                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739425742/Mask-group_fmrem2.svg' alt="right-tick" title='right-tick' />
                                        <p>
                                            Stellar user experience: Thanks to the endless support for interactive and dynamic UIs, web apps developed with NextJS can
                                            deliver an engaging and intuitive user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner3">
                    <div className="kushel-next-js-container3">
                        <div className="kushel-next-js-content3">
                            <h6>Transforming Web Solutions with Next.js Expertise </h6>
                            <p>
                                When it comes to next.js development, Kushel Digi stands out as a
                                trusted choice in excelling web solutions with our Next.js skills. Our
                                dedicated team has specialised experience in delivering
                                high-performance, scalable, and SEO-friendly applications. Trust us to
                                enhance your digital presence with our excellence in Next.js-powered
                                web solutions.{" "}
                            </p>
                        </div>
                        <div className="kushel-next-js-cards">
                            <div className="kushel-next-js-cards-main">
                                <div className="kushel-next-js-cards-flex">
                                    <svg
                                        width={60}
                                        height={60}
                                        viewBox="0 0 80 80"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M29.0628 6.17187C23.1878 9.56247 18.266 12.4531 18.1409 12.5781C17.9534 12.75 17.8753 13.2344 17.8441 14.2969L17.7815 15.7656L10.5003 15.8125L3.20343 15.8594L2.31281 16.2969C1.81281 16.5469 1.20343 17 0.937811 17.3125C-0.0621934 18.5312 -0.0153184 16.9219 0.0315565 43.2031L0.0784316 67.1094L0.500307 67.8438C0.750307 68.2344 1.20343 68.7813 1.51593 69.0625C2.70343 70.0312 2.12531 70 19.094 70H34.5316V71.9375V73.8906L31.766 73.9375C29.1409 73.9843 28.9534 74 28.469 74.3437C27.5785 74.9843 27.3441 75.6875 27.3441 77.6563C27.3441 79.1719 27.3753 79.4062 27.6566 79.6875C27.969 80 28.1722 80 40.0003 80C51.8284 80 52.0316 80 52.3441 79.6875C52.6253 79.4062 52.6566 79.1719 52.6566 77.6563C52.6566 75.6875 52.4222 74.9843 51.5316 74.3437C51.0471 74 50.8597 73.9843 48.2503 73.9375L45.469 73.8906V71.9375V70H60.9066C78.4534 70 77.4534 70.0625 78.7503 68.7656C80.1097 67.4062 80.0003 69.5938 80.0003 42.8906C80.0003 16.9219 80.0628 18.5312 79.0628 17.3125C78.7972 17 78.1878 16.5469 77.6878 16.2969L76.7972 15.8594L69.5003 15.8125L62.2191 15.7656L62.1566 14.2969C62.1253 13.0625 62.0628 12.7656 61.7972 12.5312C61.5471 12.2969 41.9378 0.906255 40.5159 0.171879C40.3284 0.078125 40.0785 0 39.969 0C39.8441 0 34.9534 2.78125 29.0628 6.17187ZM49.4222 7.45312C54.594 10.4219 58.9222 12.9375 59.0316 13.0469C59.1722 13.1719 57.0316 14.4843 49.6878 18.7187C44.4534 21.75 40.094 24.2187 40.0159 24.2187C39.8753 24.2187 35.391 21.6563 25.7034 16.0469C24.6722 15.4531 23.1409 14.5781 22.2972 14.0781C20.9066 13.2813 20.7815 13.1875 21.0471 13C21.3129 12.7969 39.8753 2.0625 39.969 2.04688C40.0003 2.03125 44.2503 4.46876 49.4222 7.45312ZM29.5316 20.4375L38.9847 25.8906L39.0316 37.0157C39.0471 43.125 39.0316 48.125 38.969 48.125C38.8909 48.125 20.969 37.8281 20.0471 37.25L19.6878 37.0312V25.9219C19.6878 17.0938 19.7347 14.8281 19.8909 14.8906C19.9847 14.9375 24.3284 17.4219 29.5316 20.4375ZM60.2815 25.9688L60.2347 37.0938L50.7034 42.6094C45.469 45.625 41.1253 48.1094 41.0471 48.125C40.9847 48.125 40.9534 43.125 40.969 37.0157L41.0159 25.9062L47.5003 22.1563C51.0628 20.0938 55.3597 17.6094 57.0316 16.6406C58.7034 15.6563 60.1253 14.8594 60.2034 14.8594C60.266 14.8437 60.2972 19.8437 60.2815 25.9688ZM17.8128 22.5469V27.4375L16.2191 28.5312C13.1409 30.6094 10.6722 33.5 9.7034 36.1719C8.17218 40.4062 9.03157 44.3437 12.3284 48.2656C15.8128 52.4062 22.969 55.8594 30.9378 57.25L32.8909 57.5938L32.9378 59.3125C32.969 60.8281 33.0159 61.0469 33.2972 61.2813C33.4847 61.4375 33.7347 61.5625 33.8597 61.5625C34.1097 61.5625 38.9066 58.4688 39.5003 57.9219C39.969 57.4843 39.9378 56.875 39.4222 56.375C39.1722 56.1563 37.969 55.1563 36.7347 54.1563C35.0628 52.7969 34.3753 52.3437 34.0471 52.3437C33.3597 52.3437 33.1253 52.8281 33.1253 54.3281C33.1253 55.8594 33.2815 55.7969 30.6722 55.3125C17.8441 52.8906 9.53157 45.75 11.0003 38.4219C11.6097 35.4062 13.6409 32.625 16.9378 30.2813L17.8128 29.6563V33.625C17.8128 36.4843 17.8753 37.6875 18.0159 37.9688C18.1566 38.25 21.2503 40.1094 28.8284 44.4843C34.6722 47.8594 39.6097 50.6719 39.7972 50.7187C40.1878 50.8281 40.3129 50.7656 45.2347 47.9219C60.9534 38.8437 61.7972 38.3437 61.9847 37.9688C62.1253 37.6875 62.1878 36.4843 62.1878 33.625V29.6719L63.1722 30.3437C64.4534 31.2344 66.6409 33.4375 67.4222 34.6094C68.6409 36.4688 69.3129 38.8282 69.1566 40.6563C68.4847 48.2344 58.9534 54.3594 45.469 55.875C44.3909 55.9843 43.1566 56.0938 42.7347 56.0938C42.2815 56.0938 41.7972 56.2032 41.594 56.3438C41.1566 56.6406 41.1409 57.3594 41.5628 57.7344C41.8441 57.9843 42.0628 58 43.6253 57.9062C54.2503 57.2813 64.0159 53.1406 68.3597 47.4375C72.0003 42.6406 71.9222 37.1875 68.1253 32.4219C66.8753 30.8437 64.7503 29.0312 62.7815 27.8281L62.1878 27.4688V22.5625V17.6406L69.3441 17.6875C76.2034 17.7344 76.5003 17.75 77.0316 18.0469C77.3284 18.2344 77.7034 18.6094 77.8597 18.9062C78.1097 19.4219 78.1253 20.8282 78.094 43.0781C78.0471 66.6875 78.0471 66.7031 77.7191 67.1406C77.5471 67.375 77.1566 67.7031 76.8597 67.8438C76.3597 68.1094 74.2815 68.125 40.0003 68.125C5.71905 68.125 3.64093 68.1094 3.14093 67.8438C2.84406 67.7031 2.45343 67.375 2.28156 67.1406C1.95343 66.7031 1.95343 66.6875 1.90656 43.2344C1.87531 27.375 1.90656 19.5781 2.01593 19.2031C2.10968 18.8906 2.32843 18.5157 2.48468 18.375C3.21905 17.7031 3.65656 17.6719 10.9066 17.6563H17.8128V22.5469ZM37.2347 57.1875C37.1722 57.25 36.6253 57.625 36.0159 58.0312L34.9222 58.75L34.8753 58.0938C34.8441 57.7187 34.8597 56.9219 34.9222 56.2969L35.0316 55.1719L36.1878 56.125C36.8284 56.6563 37.2972 57.1406 37.2347 57.1875ZM43.594 71.9531V73.9062H40.0003H36.4066V71.9531V70H40.0003H43.594V71.9531ZM50.594 75.9688C50.7034 76.0781 50.7815 76.5781 50.7815 77.1406V78.125H40.0003H29.2191V77.1406C29.2191 76.5781 29.2972 76.0781 29.4066 75.9688C29.6722 75.7031 50.3284 75.7031 50.594 75.9688Z"
                                            fill="#24CDDF"
                                        />
                                    </svg>
                                    <div className="kushel-next-js-cards-content">
                                        <h6>Next.js Server-Side Rendered Apps</h6>
                                        <p>
                                            With over 8 years of experience, our experts Next.js developers
                                            have specialised experience in the successful development of
                                            Server-Side Rendering (SSR) web apps across diverse industry
                                            domains.
                                        </p>
                                    </div>
                                </div>
                                <div className="kushel-next-js-cards-flex">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739425966/card-icon2_tolcah.svg' alt="Next.js Custom Development" title='Next.js Custom Development' />
                                    <div className="kushel-next-js-cards-content">
                                        <h6>Next.js Custom Development</h6>
                                        <p>
                                            Our dedicated team of experts have excellence in developing APIs
                                            using NET Core, enabling easy integration with third-party
                                            services and systems. These APis are designed to provide secure
                                            and efficient communication.
                                        </p>
                                    </div>
                                </div>
                                <div className="kushel-next-js-cards-flex">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426025/card-icon3_kygsw7.svg' alt="Next.js Integration Services" title='Next.js Integration Services' />
                                    <div className="kushel-next-js-cards-content">
                                        <h6>Next.js Integration Services</h6>
                                        <p>
                                            Next.js is a powerful analytics tool that can be seamlessly
                                            integrated into your existing web app, providing valuable user
                                            data for data-driven decisions to optimize your online
                                            experience and keep users engaged.
                                        </p>
                                    </div>
                                </div>

                                <div className="kushel-next-js-cards-flex">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426068/card-icon4_iyz4ei.svg' alt="Next.js Plugin Development" title='Next.js Plugin Development' />
                                    <div className="kushel-next-js-cards-content">
                                        <h6>Next.js Plugin Development</h6>
                                        <p>
                                            Our Next.js experts meticulously review projects to ensure
                                            required plugins are incorporated, and if necessary, develop
                                            custom plugins tailored to meet end users' specific needs,
                                            guaranteeing a seamless and user-friendly experience.
                                        </p>
                                    </div>
                                </div>

                                <div className="kushel-next-js-cards-flex">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426122/card-icon5_oetiao.svg' alt="Next.js Upgradation and Migration Services" title='Next.js Upgradation and Migration Services' />
                                    <div className="kushel-next-js-cards-content">
                                        <h6>Next.js Upgrade and Migration</h6>
                                        <p>
                                            Whether you want to upgrade the web app to the newest NextJS version or migrate it from another
                                            framework to NextJS, we will have your back. Our experts will design a data-backed and effective up-
                                            gradation or migration strategy for your web app in no time.
                                        </p>
                                    </div>
                                </div>

                                <div className="kushel-next-js-cards-flex">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426161/card-icon6_m5g3l3.svg' alt="Next.js Maintenance and Support" title='Next.js Maintenance and Support' />
                                    <div className="kushel-next-js-cards-content">
                                        <h6>Next.js Maintenance and Support</h6>
                                        <p>
                                            We are committed to ensure continuous, smooth operation of your
                                            web applications by providing ongoing support and maintenance
                                            services exclusively designed for next js.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>




                        {/* <div className="kushel-next-js-cards">
        <div className="kushel-next-js-cards-main">
          <div className="kushel-next-js-cards-flex">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426068/card-icon4_iyz4ei.svg' alt="Next.js Plugin Development" title='Next.js Plugin Development' />
            <div className="kushel-next-js-cards-content">
              <h6>Next.js Plugin Development</h6>
              <p>
                Our Next.js experts meticulously review projects to ensure
                required plugins are incorporated, and if necessary, develop
                custom plugins tailored to meet end users' specific needs,
                guaranteeing a seamless and user-friendly experience.
              </p>
            </div>
          </div>

          <div className="kushel-next-js-cards-flex">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426122/card-icon5_oetiao.svg' alt="Next.js Upgradation and Migration Services" title='Next.js Upgradation and Migration Services' />
            <div className="kushel-next-js-cards-content">
              <h6>Next.js Upgradation and Migration Services</h6>
              <p>
                We always assist you in updating existing applications to the
                new version of Next.js along with updated features and. We also
                ensure migration of applications from other frameworks to
                Next.js.{" "}
              </p>
            </div>
          </div>

          <div className="kushel-next-js-cards-flex">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426161/card-icon6_m5g3l3.svg' alt="Next.js Maintenance and Support" title='Next.js Maintenance and Support' />
            <div className="kushel-next-js-cards-content">
              <h6>Next.js Maintenance and Support</h6>
              <p>
                We are committed to ensure continuous, smooth operation of your
                web applications by providing ongoing support and maintenance
                services exclusively designed for next js.
              </p>
            </div>
          </div>

        </div>
      </div> */}
                        <div className="button-group">
                            <Link href={"/contact-us"}>

                                <button type="submit">
                                    Let’s Talk
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.707 17.707L16.414 12L10.707 6.29303L9.29297 7.70703L13.586 12L9.29297 16.293L10.707 17.707Z"
                                            fill="#F2F2F2"
                                        />
                                    </svg>
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner4">
                    <div className="kushel-next-js-container4">
                        <div className="kushel-next-js-content4">
                            <div className="kushel-next-js-left-content4">
                                <h6>
                                    Are you in pursuit of NextJS development experts for
                                    your retail store?
                                </h6>
                            </div>
                            <div className="button-group2">
                                <Link href={"/contact-us"}> <button type="submit">HIRE DEVELOPERS</button>  </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner5">
                    <div className="kushel-next-js-container5">
                        <div className="kushel-next-js-content5">
                            <h5>Technologies we love to use</h5>
                            <p>
                                We prioritize quality work that meets industry standards, ensuring
                                top-notch service from our experienced team of software developers.
                                Our developers possess a variety of technical skills, including
                                expertise in Laravel. React, React Native, Next.js. Alpine.js.
                                Livewire, TailwindCSS, Statamic. PHPUnit, and Cypress.
                            </p>
                        </div>
                        <div className="kushel-next-js-card-technologies">
                            <div className="kushel-next-js-card-flex">
                                <div className="kushel-next-js-cards-content2">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426560/node.js_x784c8.svg' alt="node js" title="node js" />
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426608/react_pgtddr.svg' alt="react" title="react" />
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741000221/next-js_hrhdpn.svg' alt="nextjs" title="nextjs" />
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1741000256/tailwindcss_ql1eok.svg' alt="tailwind" title="tailwind" />
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426437/laravel_loohmi.svg' alt="laravel" title="laravel" />
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426476/stripe_i1ioac.svg' alt="stripe" title="stripe" />
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426521/OpenAI_Logo_1_gwvlvo.svg' alt="openai" title="openai" />

                                </div>
                            </div>


                            {/* <div className="kushel-next-js-card-flex">
          <div className="kushel-next-js-cards-content2">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426437/laravel_loohmi.svg' alt="laravel" title="laravel" />
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426476/stripe_i1ioac.svg' alt="stripe" title="stripe" />
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426521/OpenAI_Logo_1_gwvlvo.svg' alt="openai" title="openai" />
          </div>
        </div> */}
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner6">
                    <div className="kushel-next-js-container6">
                        <div className="kushel-next-js-content6">
                            <h5>
                                Why choose our NextJS development services to build
                                next-gen web apps?
                            </h5>
                        </div>
                        <div className="kushel-next-js-cards-content3">
                            <div className="kushel-next-js-cards-content-flex">
                                <div className="kushel-next-js-cards-content-main3">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426399/highly_responsive_1_lhgvzy.svg' alt="ighly Responsive Design" title="ighly Responsive Design" />
                                    <p>Highly Responsive Design</p>
                                </div>
                                <div className="kushel-next-js-cards-content-main3">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426362/datafetchingintegration_m1cppc.svg' alt="Easy data fetching" title='Easy data fetching' />
                                    <p>Easy data fetching &amp; integration</p>
                                </div>
                                <div className="kushel-next-js-cards-content-main3">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426322/rapidgotomarket_fiscq8.svg' alt="Rapid go-to-Market" title='Rapid go-to-Market' />
                                    <p>Rapid go-to-Market</p>
                                </div>
                                <div className="kushel-next-js-cards-content-main3">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426260/fasterpageloading_efbdiu.svg' alt="Faster Page Loading" title='Faster Page Loading' />
                                    <p>Faster Page Loading</p>
                                </div>
                                <div className="kushel-next-js-cards-content-main3">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739426202/multichannelapproach_yopuaz.svg' alt="Multichannel Approach" />
                                    <p>Multichannel Approach</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="kushel-next-js-banner7">
                    <div className="kushel-next-js-container7">
                        <div className="kushel-next-js-content-main7">
                            <div className="set_borders">
                                <div className="kushel-next-js-cards-flex-main1">
                                    <div className="kushel-next-js-content7">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M21.0162 30V14.688L17.7642 16.644V14.664L21.0162 12.72H22.8042V30H21.0162Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5>Requirement Gathering</h5>
                                        <p>
                                            We begin with a kick-off meeting to ensure we understand your
                                            requirements and objectives.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-content7">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M15.3563 29.988L15.3683 28.38L23.1803 21.324C23.8523 20.716 24.2963 20.14 24.5123 19.596C24.7363 19.044 24.8483 18.468 24.8483 17.868C24.8483 17.156 24.6803 16.512 24.3443 15.936C24.0083 15.36 23.5563 14.904 22.9883 14.568C22.4203 14.224 21.7843 14.052 21.0803 14.052C20.3443 14.052 19.6883 14.228 19.1123 14.58C18.5363 14.932 18.0803 15.396 17.7443 15.972C17.4163 16.548 17.2563 17.176 17.2643 17.856H15.4643C15.4643 16.808 15.7123 15.868 16.2083 15.036C16.7043 14.204 17.3763 13.552 18.2243 13.08C19.0723 12.6 20.0323 12.36 21.1043 12.36C22.1523 12.36 23.0923 12.608 23.9243 13.104C24.7643 13.592 25.4243 14.256 25.9043 15.096C26.3923 15.928 26.6363 16.856 26.6363 17.88C26.6363 18.6 26.5483 19.236 26.3723 19.788C26.2043 20.332 25.9363 20.84 25.5683 21.312C25.2083 21.776 24.7483 22.256 24.1883 22.752L17.2523 29.016L16.9763 28.296H26.6363V29.988H15.3563Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5>Project Planning </h5>
                                        <p>
                                            We initiate developing a project plan that outlines the
                                            timeline, key milestones, and deliverables.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-content7">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M20.6912 30.348C19.8352 30.348 19.0472 30.196 18.3272 29.892C17.6072 29.588 16.9872 29.156 16.4672 28.596C15.9472 28.028 15.5672 27.352 15.3272 26.568L17.0072 26.064C17.2952 26.92 17.7672 27.568 18.4232 28.008C19.0872 28.448 19.8352 28.66 20.6672 28.644C21.4352 28.628 22.0952 28.456 22.6472 28.128C23.2072 27.8 23.6352 27.344 23.9312 26.76C24.2272 26.176 24.3752 25.5 24.3752 24.732C24.3752 23.556 24.0312 22.612 23.3432 21.9C22.6632 21.18 21.7632 20.82 20.6432 20.82C20.3312 20.82 20.0032 20.864 19.6592 20.952C19.3152 21.032 18.9952 21.148 18.6992 21.3L17.8112 19.896L24.5312 13.692L24.8192 14.412H16.0112V12.72H25.9952V14.436L20.1392 20.028L20.1152 19.332C21.3152 19.18 22.3712 19.316 23.2832 19.74C24.1952 20.164 24.9072 20.812 25.4192 21.684C25.9392 22.548 26.1992 23.564 26.1992 24.732C26.1992 25.836 25.9592 26.812 25.4792 27.66C25.0072 28.5 24.3552 29.16 23.5232 29.64C22.6912 30.112 21.7472 30.348 20.6912 30.348Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5> Software Development</h5>
                                        <p>
                                            Our NextJS developers write clean, concise, and scalable code
                                            that meets your project requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border_set3"></div>
                            <div className="kushel-next-js-cards-flex-main2">
                                <div className="kushel-next-js-content7">
                                    <svg
                                        width={42}
                                        height={42}
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                        <path
                                            d="M23.2099 30V26.652H15.1219V24.972L20.9059 12.72H22.8859L17.1019 24.972H23.2099V19.932H24.9859V24.972H26.8699V26.652H24.9859V30H23.2099Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <h5>Functionality Testing </h5>
                                    <p>
                                        We test your web application, ensuring its functionality and
                                        security whilst meeting your expectations.
                                    </p>
                                </div>
                                <div className="kushel-next-js-content7">
                                    <svg
                                        width={42}
                                        height={42}
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                        <path
                                            d="M20.8542 30.36C19.9582 30.36 19.1302 30.176 18.3702 29.808C17.6102 29.44 16.9622 28.932 16.4262 28.284C15.8902 27.636 15.5062 26.892 15.2742 26.052L16.9662 25.596C17.1182 26.22 17.3942 26.76 17.7942 27.216C18.1942 27.664 18.6622 28.012 19.1982 28.26C19.7422 28.508 20.3102 28.632 20.9022 28.632C21.6702 28.632 22.3582 28.448 22.9662 28.08C23.5822 27.704 24.0702 27.208 24.4302 26.592C24.7902 25.976 24.9702 25.3 24.9702 24.564C24.9702 23.804 24.7822 23.12 24.4062 22.512C24.0302 21.896 23.5342 21.408 22.9182 21.048C22.3022 20.688 21.6302 20.508 20.9022 20.508C20.0862 20.508 19.3822 20.688 18.7902 21.048C18.1982 21.4 17.7262 21.844 17.3742 22.38L15.7662 21.708L16.2942 12.72H25.5222V14.412H17.0742L17.9502 13.584L17.4822 21.252L17.0382 20.664C17.5342 20.096 18.1342 19.652 18.8382 19.332C19.5422 19.012 20.2822 18.852 21.0582 18.852C22.1222 18.852 23.0822 19.108 23.9382 19.62C24.7942 20.124 25.4742 20.808 25.9782 21.672C26.4822 22.536 26.7342 23.5 26.7342 24.564C26.7342 25.62 26.4662 26.588 25.9302 27.468C25.3942 28.34 24.6822 29.04 23.7942 29.568C22.9062 30.096 21.9262 30.36 20.8542 30.36Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <h5>Going Live</h5>
                                    <p>
                                        After the application is thoroughly tested and approved, it’s made
                                        available for live hosting on the server.
                                    </p>
                                </div>
                                <div className="kushel-next-js-content7">
                                    <svg
                                        width={42}
                                        height={42}
                                        viewBox="0 0 42 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                        <path
                                            d="M21.0826 30.36C20.0026 30.36 19.0186 30.1 18.1306 29.58C17.2506 29.052 16.5466 28.34 16.0186 27.444C15.4986 26.54 15.2386 25.524 15.2386 24.396V18.408C15.2386 17.248 15.4986 16.216 16.0186 15.312C16.5386 14.4 17.2466 13.684 18.1426 13.164C19.0466 12.636 20.0706 12.372 21.2146 12.372C22.1986 12.372 23.1106 12.588 23.9506 13.02C24.7986 13.452 25.4906 14.056 26.0266 14.832L24.6706 15.948C24.3026 15.372 23.8146 14.912 23.2066 14.568C22.5986 14.224 21.9346 14.052 21.2146 14.052C20.4066 14.052 19.6866 14.248 19.0546 14.64C18.4226 15.032 17.9266 15.548 17.5666 16.188C17.2066 16.82 17.0266 17.508 17.0266 18.252V22.02L16.5826 21.516C17.0866 20.724 17.7466 20.084 18.5626 19.596C19.3866 19.108 20.2826 18.864 21.2506 18.864C22.3226 18.864 23.2866 19.12 24.1426 19.632C24.9986 20.136 25.6786 20.82 26.1826 21.684C26.6866 22.548 26.9386 23.516 26.9386 24.588C26.9386 25.652 26.6706 26.62 26.1346 27.492C25.6066 28.364 24.8986 29.06 24.0106 29.58C23.1306 30.1 22.1546 30.36 21.0826 30.36ZM21.0826 28.644C21.8346 28.644 22.5186 28.464 23.1346 28.104C23.7586 27.744 24.2506 27.256 24.6106 26.64C24.9786 26.024 25.1626 25.34 25.1626 24.588C25.1626 23.836 24.9786 23.152 24.6106 22.536C24.2506 21.912 23.7626 21.42 23.1466 21.06C22.5306 20.692 21.8466 20.508 21.0946 20.508C20.3426 20.508 19.6586 20.692 19.0426 21.06C18.4266 21.42 17.9346 21.912 17.5666 22.536C17.2066 23.152 17.0266 23.836 17.0266 24.588C17.0266 25.332 17.2066 26.012 17.5666 26.628C17.9266 27.244 18.4146 27.736 19.0306 28.104C19.6466 28.464 20.3306 28.644 21.0826 28.644Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <h5>App Maintenance</h5>
                                    <p>
                                        We provide ongoing maintenance and support to make sure your web
                                        application runs smoothly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner72">
                    <div className="kushel-next-js-container72">
                        <div className="kushel-next-js-content-main72">
                            <div className="set_borders72">
                                <div className="kushel-next-js-cards-flex-main172">
                                    <div className="kushel-next-js-content72">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M21.0162 30V14.688L17.7642 16.644V14.664L21.0162 12.72H22.8042V30H21.0162Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5>Requirement Gathering</h5>
                                        <p>
                                            We begin with a kick-off meeting to ensure we understand your
                                            requirements and objectives.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-content72">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M15.3563 29.988L15.3683 28.38L23.1803 21.324C23.8523 20.716 24.2963 20.14 24.5123 19.596C24.7363 19.044 24.8483 18.468 24.8483 17.868C24.8483 17.156 24.6803 16.512 24.3443 15.936C24.0083 15.36 23.5563 14.904 22.9883 14.568C22.4203 14.224 21.7843 14.052 21.0803 14.052C20.3443 14.052 19.6883 14.228 19.1123 14.58C18.5363 14.932 18.0803 15.396 17.7443 15.972C17.4163 16.548 17.2563 17.176 17.2643 17.856H15.4643C15.4643 16.808 15.7123 15.868 16.2083 15.036C16.7043 14.204 17.3763 13.552 18.2243 13.08C19.0723 12.6 20.0323 12.36 21.1043 12.36C22.1523 12.36 23.0923 12.608 23.9243 13.104C24.7643 13.592 25.4243 14.256 25.9043 15.096C26.3923 15.928 26.6363 16.856 26.6363 17.88C26.6363 18.6 26.5483 19.236 26.3723 19.788C26.2043 20.332 25.9363 20.84 25.5683 21.312C25.2083 21.776 24.7483 22.256 24.1883 22.752L17.2523 29.016L16.9763 28.296H26.6363V29.988H15.3563Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5>Project Planning </h5>
                                        <p>
                                            We initiate developing a project plan that outlines the
                                            timeline, key milestones, and deliverables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-set372">
                                <div className="kushel-next-js-cards-flex-main272">
                                    <div className="kushel-next-js-content72">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M20.6912 30.348C19.8352 30.348 19.0472 30.196 18.3272 29.892C17.6072 29.588 16.9872 29.156 16.4672 28.596C15.9472 28.028 15.5672 27.352 15.3272 26.568L17.0072 26.064C17.2952 26.92 17.7672 27.568 18.4232 28.008C19.0872 28.448 19.8352 28.66 20.6672 28.644C21.4352 28.628 22.0952 28.456 22.6472 28.128C23.2072 27.8 23.6352 27.344 23.9312 26.76C24.2272 26.176 24.3752 25.5 24.3752 24.732C24.3752 23.556 24.0312 22.612 23.3432 21.9C22.6632 21.18 21.7632 20.82 20.6432 20.82C20.3312 20.82 20.0032 20.864 19.6592 20.952C19.3152 21.032 18.9952 21.148 18.6992 21.3L17.8112 19.896L24.5312 13.692L24.8192 14.412H16.0112V12.72H25.9952V14.436L20.1392 20.028L20.1152 19.332C21.3152 19.18 22.3712 19.316 23.2832 19.74C24.1952 20.164 24.9072 20.812 25.4192 21.684C25.9392 22.548 26.1992 23.564 26.1992 24.732C26.1992 25.836 25.9592 26.812 25.4792 27.66C25.0072 28.5 24.3552 29.16 23.5232 29.64C22.6912 30.112 21.7472 30.348 20.6912 30.348Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5> Software Development</h5>
                                        <p>
                                            Our NextJS developers write clean, concise, and scalable code
                                            that meets your project requirements.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-content72">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M23.2099 30V26.652H15.1219V24.972L20.9059 12.72H22.8859L17.1019 24.972H23.2099V19.932H24.9859V24.972H26.8699V26.652H24.9859V30H23.2099Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5>Functionality Testing </h5>
                                        <p>
                                            We test your web application, ensuring its functionality and
                                            security whilst meeting your expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border_set272">
                                <div className="kushel-next-js-content-main372">
                                    <div className="kushel-next-js-content72">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M20.8542 30.36C19.9582 30.36 19.1302 30.176 18.3702 29.808C17.6102 29.44 16.9622 28.932 16.4262 28.284C15.8902 27.636 15.5062 26.892 15.2742 26.052L16.9662 25.596C17.1182 26.22 17.3942 26.76 17.7942 27.216C18.1942 27.664 18.6622 28.012 19.1982 28.26C19.7422 28.508 20.3102 28.632 20.9022 28.632C21.6702 28.632 22.3582 28.448 22.9662 28.08C23.5822 27.704 24.0702 27.208 24.4302 26.592C24.7902 25.976 24.9702 25.3 24.9702 24.564C24.9702 23.804 24.7822 23.12 24.4062 22.512C24.0302 21.896 23.5342 21.408 22.9182 21.048C22.3022 20.688 21.6302 20.508 20.9022 20.508C20.0862 20.508 19.3822 20.688 18.7902 21.048C18.1982 21.4 17.7262 21.844 17.3742 22.38L15.7662 21.708L16.2942 12.72H25.5222V14.412H17.0742L17.9502 13.584L17.4822 21.252L17.0382 20.664C17.5342 20.096 18.1342 19.652 18.8382 19.332C19.5422 19.012 20.2822 18.852 21.0582 18.852C22.1222 18.852 23.0822 19.108 23.9382 19.62C24.7942 20.124 25.4742 20.808 25.9782 21.672C26.4822 22.536 26.7342 23.5 26.7342 24.564C26.7342 25.62 26.4662 26.588 25.9302 27.468C25.3942 28.34 24.6822 29.04 23.7942 29.568C22.9062 30.096 21.9262 30.36 20.8542 30.36Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5>Going Live</h5>
                                        <p>
                                            After the application is thoroughly tested and approved, it’s
                                            made available for live hosting on the server.
                                        </p>
                                    </div>
                                    <div className="kushel-next-js-content72">
                                        <svg
                                            width={42}
                                            height={42}
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                            <path
                                                d="M21.0826 30.36C20.0026 30.36 19.0186 30.1 18.1306 29.58C17.2506 29.052 16.5466 28.34 16.0186 27.444C15.4986 26.54 15.2386 25.524 15.2386 24.396V18.408C15.2386 17.248 15.4986 16.216 16.0186 15.312C16.5386 14.4 17.2466 13.684 18.1426 13.164C19.0466 12.636 20.0706 12.372 21.2146 12.372C22.1986 12.372 23.1106 12.588 23.9506 13.02C24.7986 13.452 25.4906 14.056 26.0266 14.832L24.6706 15.948C24.3026 15.372 23.8146 14.912 23.2066 14.568C22.5986 14.224 21.9346 14.052 21.2146 14.052C20.4066 14.052 19.6866 14.248 19.0546 14.64C18.4226 15.032 17.9266 15.548 17.5666 16.188C17.2066 16.82 17.0266 17.508 17.0266 18.252V22.02L16.5826 21.516C17.0866 20.724 17.7466 20.084 18.5626 19.596C19.3866 19.108 20.2826 18.864 21.2506 18.864C22.3226 18.864 23.2866 19.12 24.1426 19.632C24.9986 20.136 25.6786 20.82 26.1826 21.684C26.6866 22.548 26.9386 23.516 26.9386 24.588C26.9386 25.652 26.6706 26.62 26.1346 27.492C25.6066 28.364 24.8986 29.06 24.0106 29.58C23.1306 30.1 22.1546 30.36 21.0826 30.36ZM21.0826 28.644C21.8346 28.644 22.5186 28.464 23.1346 28.104C23.7586 27.744 24.2506 27.256 24.6106 26.64C24.9786 26.024 25.1626 25.34 25.1626 24.588C25.1626 23.836 24.9786 23.152 24.6106 22.536C24.2506 21.912 23.7626 21.42 23.1466 21.06C22.5306 20.692 21.8466 20.508 21.0946 20.508C20.3426 20.508 19.6586 20.692 19.0426 21.06C18.4266 21.42 17.9346 21.912 17.5666 22.536C17.2066 23.152 17.0266 23.836 17.0266 24.588C17.0266 25.332 17.2066 26.012 17.5666 26.628C17.9266 27.244 18.4146 27.736 19.0306 28.104C19.6466 28.464 20.3306 28.644 21.0826 28.644Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h5>App Maintenance</h5>
                                        <p>
                                            We provide ongoing maintenance and support to make sure your web
                                            application runs very smoothly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner721">
                    <div className="kushel-next-js-container721">
                        <div className="kushel-next-js-content-main721">
                            <div className="kushel-next-js-content721">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                    <path
                                        d="M21.0162 30V14.688L17.7642 16.644V14.664L21.0162 12.72H22.8042V30H21.0162Z"
                                        fill="white"
                                    />
                                </svg>
                                <h5>Requirement Gathering</h5>
                                <p>
                                    We begin with a kick-off meeting to ensure we understand your
                                    requirements and objectives.
                                </p>
                            </div>
                            <div className="kushel-next-js-content721">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                    <path
                                        d="M15.3563 29.988L15.3683 28.38L23.1803 21.324C23.8523 20.716 24.2963 20.14 24.5123 19.596C24.7363 19.044 24.8483 18.468 24.8483 17.868C24.8483 17.156 24.6803 16.512 24.3443 15.936C24.0083 15.36 23.5563 14.904 22.9883 14.568C22.4203 14.224 21.7843 14.052 21.0803 14.052C20.3443 14.052 19.6883 14.228 19.1123 14.58C18.5363 14.932 18.0803 15.396 17.7443 15.972C17.4163 16.548 17.2563 17.176 17.2643 17.856H15.4643C15.4643 16.808 15.7123 15.868 16.2083 15.036C16.7043 14.204 17.3763 13.552 18.2243 13.08C19.0723 12.6 20.0323 12.36 21.1043 12.36C22.1523 12.36 23.0923 12.608 23.9243 13.104C24.7643 13.592 25.4243 14.256 25.9043 15.096C26.3923 15.928 26.6363 16.856 26.6363 17.88C26.6363 18.6 26.5483 19.236 26.3723 19.788C26.2043 20.332 25.9363 20.84 25.5683 21.312C25.2083 21.776 24.7483 22.256 24.1883 22.752L17.2523 29.016L16.9763 28.296H26.6363V29.988H15.3563Z"
                                        fill="white"
                                    />
                                </svg>
                                <h5>Project Planning </h5>
                                <p>
                                    We initiate developing a project plan that outlines the timeline,
                                    key milestones, and deliverables.
                                </p>
                            </div>
                            <div className="kushel-next-js-content721">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                    <path
                                        d="M20.6912 30.348C19.8352 30.348 19.0472 30.196 18.3272 29.892C17.6072 29.588 16.9872 29.156 16.4672 28.596C15.9472 28.028 15.5672 27.352 15.3272 26.568L17.0072 26.064C17.2952 26.92 17.7672 27.568 18.4232 28.008C19.0872 28.448 19.8352 28.66 20.6672 28.644C21.4352 28.628 22.0952 28.456 22.6472 28.128C23.2072 27.8 23.6352 27.344 23.9312 26.76C24.2272 26.176 24.3752 25.5 24.3752 24.732C24.3752 23.556 24.0312 22.612 23.3432 21.9C22.6632 21.18 21.7632 20.82 20.6432 20.82C20.3312 20.82 20.0032 20.864 19.6592 20.952C19.3152 21.032 18.9952 21.148 18.6992 21.3L17.8112 19.896L24.5312 13.692L24.8192 14.412H16.0112V12.72H25.9952V14.436L20.1392 20.028L20.1152 19.332C21.3152 19.18 22.3712 19.316 23.2832 19.74C24.1952 20.164 24.9072 20.812 25.4192 21.684C25.9392 22.548 26.1992 23.564 26.1992 24.732C26.1992 25.836 25.9592 26.812 25.4792 27.66C25.0072 28.5 24.3552 29.16 23.5232 29.64C22.6912 30.112 21.7472 30.348 20.6912 30.348Z"
                                        fill="white"
                                    />
                                </svg>
                                <h5> Software Development</h5>
                                <p>
                                    Our NextJS developers write clean, concise, and scalable code that
                                    meets your project requirements.
                                </p>
                            </div>
                            <div className="kushel-next-js-content721">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                    <path
                                        d="M23.2099 30V26.652H15.1219V24.972L20.9059 12.72H22.8859L17.1019 24.972H23.2099V19.932H24.9859V24.972H26.8699V26.652H24.9859V30H23.2099Z"
                                        fill="white"
                                    />
                                </svg>
                                <h5>Functionality Testing </h5>
                                <p>
                                    We test your web application, ensuring its functionality and
                                    security whilst meeting your expectations.
                                </p>
                            </div>
                            <div className="kushel-next-js-content721">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                    <path
                                        d="M20.8542 30.36C19.9582 30.36 19.1302 30.176 18.3702 29.808C17.6102 29.44 16.9622 28.932 16.4262 28.284C15.8902 27.636 15.5062 26.892 15.2742 26.052L16.9662 25.596C17.1182 26.22 17.3942 26.76 17.7942 27.216C18.1942 27.664 18.6622 28.012 19.1982 28.26C19.7422 28.508 20.3102 28.632 20.9022 28.632C21.6702 28.632 22.3582 28.448 22.9662 28.08C23.5822 27.704 24.0702 27.208 24.4302 26.592C24.7902 25.976 24.9702 25.3 24.9702 24.564C24.9702 23.804 24.7822 23.12 24.4062 22.512C24.0302 21.896 23.5342 21.408 22.9182 21.048C22.3022 20.688 21.6302 20.508 20.9022 20.508C20.0862 20.508 19.3822 20.688 18.7902 21.048C18.1982 21.4 17.7262 21.844 17.3742 22.38L15.7662 21.708L16.2942 12.72H25.5222V14.412H17.0742L17.9502 13.584L17.4822 21.252L17.0382 20.664C17.5342 20.096 18.1342 19.652 18.8382 19.332C19.5422 19.012 20.2822 18.852 21.0582 18.852C22.1222 18.852 23.0822 19.108 23.9382 19.62C24.7942 20.124 25.4742 20.808 25.9782 21.672C26.4822 22.536 26.7342 23.5 26.7342 24.564C26.7342 25.62 26.4662 26.588 25.9302 27.468C25.3942 28.34 24.6822 29.04 23.7942 29.568C22.9062 30.096 21.9262 30.36 20.8542 30.36Z"
                                        fill="white"
                                    />
                                </svg>
                                <h5>Going Live</h5>
                                <p>
                                    After the application is thoroughly tested and approved, it’s made
                                    available for live hosting on the server.
                                </p>
                            </div>
                            <div className="kushel-next-js-content721">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={21} cy={21} r={21} fill="#2652E3" />
                                    <path
                                        d="M21.0826 30.36C20.0026 30.36 19.0186 30.1 18.1306 29.58C17.2506 29.052 16.5466 28.34 16.0186 27.444C15.4986 26.54 15.2386 25.524 15.2386 24.396V18.408C15.2386 17.248 15.4986 16.216 16.0186 15.312C16.5386 14.4 17.2466 13.684 18.1426 13.164C19.0466 12.636 20.0706 12.372 21.2146 12.372C22.1986 12.372 23.1106 12.588 23.9506 13.02C24.7986 13.452 25.4906 14.056 26.0266 14.832L24.6706 15.948C24.3026 15.372 23.8146 14.912 23.2066 14.568C22.5986 14.224 21.9346 14.052 21.2146 14.052C20.4066 14.052 19.6866 14.248 19.0546 14.64C18.4226 15.032 17.9266 15.548 17.5666 16.188C17.2066 16.82 17.0266 17.508 17.0266 18.252V22.02L16.5826 21.516C17.0866 20.724 17.7466 20.084 18.5626 19.596C19.3866 19.108 20.2826 18.864 21.2506 18.864C22.3226 18.864 23.2866 19.12 24.1426 19.632C24.9986 20.136 25.6786 20.82 26.1826 21.684C26.6866 22.548 26.9386 23.516 26.9386 24.588C26.9386 25.652 26.6706 26.62 26.1346 27.492C25.6066 28.364 24.8986 29.06 24.0106 29.58C23.1306 30.1 22.1546 30.36 21.0826 30.36ZM21.0826 28.644C21.8346 28.644 22.5186 28.464 23.1346 28.104C23.7586 27.744 24.2506 27.256 24.6106 26.64C24.9786 26.024 25.1626 25.34 25.1626 24.588C25.1626 23.836 24.9786 23.152 24.6106 22.536C24.2506 21.912 23.7626 21.42 23.1466 21.06C22.5306 20.692 21.8466 20.508 21.0946 20.508C20.3426 20.508 19.6586 20.692 19.0426 21.06C18.4266 21.42 17.9346 21.912 17.5666 22.536C17.2066 23.152 17.0266 23.836 17.0266 24.588C17.0266 25.332 17.2066 26.012 17.5666 26.628C17.9266 27.244 18.4146 27.736 19.0306 28.104C19.6466 28.464 20.3306 28.644 21.0826 28.644Z"
                                        fill="white"
                                    />
                                </svg>
                                <h5>App Maintenance</h5>
                                <p>
                                    We provide ongoing maintenance and support to make sure your web
                                    application runs very smoothly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kushel-next-js-banner8">
                    <div className="kushel-next-js-container8">
                        <div className="kushel-next-js-content8">
                            <h2>Let’s Talk</h2>
                            <p>
                                Book a free call and have a no-strings-attached chat about your ideas.
                            </p>
                            <div className="buton-group-3">
                                <Link href={"/contact-us"}>  <button type="submit">
                                    Book a Call
                                    <svg
                                        width={25}
                                        height={24}
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.207 17.707L16.914 12L11.207 6.29297L9.79297 7.70697L14.086 12L9.79297 16.293L11.207 17.707Z"
                                            fill="#F2F2F2"
                                        />
                                    </svg>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999651/whatsapp_gqgicq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
                    </button>
                    <button onClick={callHandler}>
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999664/telephone_fxcxxc.png' alt="call-icon" title="call-icon" />
                    </button>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default NextJsComponent
