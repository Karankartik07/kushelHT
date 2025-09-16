"use client";
import { useEffect } from "react";
// import "../components/css/ppc.css";
// import { Helmet } from "react-helmet";

import Head from "next/head";

import Link from "next/link";

import Footer from "../../COMMON/Footer";
import Navbar from "../../COMMON/Navbar";
import "../../globals.css";

const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
};

function PpcComponent() {
  const generateMetadata = ({ params }) => ({
    title: "KushelDigi Solutions- top PPC company",
    description:
      "Elevate your PPC performance with KushelDigi Solutions, your top PPC company. Drive targeted traffic & maximize ROI today!",
  });

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription
      ? (metaDescription.content = description)
      : document.head.insertAdjacentHTML(
          "beforeend",
          `<meta name="description" content="${description}">`
        );
  }, []);
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
        <div id="hemesh-ppc">
          <div className="ppc">
            <div className="ppccontainer">
              <div className="ppccontent1">
                <div className="left-content">
                  <h1>76%+ OF AD SPEND IS WASTED</h1>
                  <p>
                    Our team is ready to audit your PPC account and give you
                    actionable insights whether you end up working with us or
                    not.
                  </p>

                  <div className="Button">
                    <Link href="/contact-us">
                      <button type="button">Get Your Free Audit</button>
                    </Link>
                  </div>
                </div>
                <div className="right-image">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472628/Ppcrighta_qqxk8f.png"
                    alt="Best Ppc agency"
                    title="Best Ppc agency"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ppc1">
            <div className="content1">
              <div className="left-content1">
                <h2>
                  Improve your <span>ROI</span> with
                  <span> scalable PPC</span> marketing.
                </h2>
                <p>
                  Kushel Digi is rated in the top 1% of digital marketing
                  agencies. Blending performance with exceptional customer
                  service, our PPC specialists are some of the best in the
                  industry with a track record for growing successful
                  businesses.
                </p>
              </div>
              <div className="right-image1">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472706/ppcImgb_ycdcmr.png"
                  alt="ROI ppc marketing"
                  title="ROI ppc marketing"
                />
              </div>
            </div>
          </div>
          <div className="ppc2">
            <div className="ppccontainer2">
              <div className="content2">
                <div className="right-image2">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472736/PpcGoogleC_oxlwly.png"
                    alt="PPC Organic Trafic"
                    title="PPC Organic Trafic"
                  />
                </div>
                <div className="left-content2">
                  <h2>
                    Drive more <span>organic traffic</span> to your website.
                  </h2>
                  <p>
                    Get more qualified traffic on the search terms that matter
                    most to your business. We achieve measurable results by
                    working on every variable that impacts SERPs. Trust our
                    proven track record to maximize your visibility online. Set
                    your business up for long-term success.
                  </p>
                  <div className="ppcheader">
                    <div>
                      <span>200%</span>
                    </div>
                    <p>
                      Most of our SEO campaigns double their traffic within 6
                      months.
                    </p>
                    {/* <div className"para">
               <p>Most of our SEO campaigns double their traffic within 6 months</p>
               </div> */}
                  </div>

                  <div className="buttonn">
                    <Link href="/contact-us">
                      <button type="button">
                        Contact Us
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 24L9.8625 21.9L18.2625 13.5H0V10.5H18.2625L9.8625 2.1L12 0L24 12L12 24Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ppc7">
            <div className="ppccontainer7">
              <div className="content7">
                <h3>
                  PPC Advertising <span>Awareness</span>
                </h3>
                <p>
                  A model in online marketing is Pay Per Click or PPC whereby
                  advertisers are supposed to pay for each click on their ad.
                  It’s one of the most affordable ways through which you can
                  reach your target audience who currently search for items or
                  services falling under your category. A PPC ad is displayed on
                  the SERPs of search engines and countless websites all over
                  the world, whereby advertisers have a chance to target
                  specific keywords demographic groups as well geographical
                  locations.
                </p>
              </div>
            </div>
          </div>
          <div className="ppc3"></div>
          <div className="ppccontainer3">
            <div className="content3">
              <h3>
                The Benefits of Using a <span>PPC Agency</span> 
              </h3>
            </div>
            <div className="card">
              <div className="card1 abc">
                <h3 className="underline-text">Certified Experts</h3>
                <div className="line">
                  <hr />
                </div>
                <p>
                  A specialized pay per click agency brings years of experience
                  and industry knowledge. We stay on top of everything that is
                  trending, among the best practices and when it comes to
                  algorithm changes so we can ensure that your campaigns are
                  constantly prepared for peak performance.
                </p>
              </div>
              <div className="card1 abc1">
                <h3 className="underline-text">Strategic Approach</h3>
                <div className="line">
                  <hr />
                </div>
                <p>
                  The successful PPC company will develop a special plan based
                  on your enterprise’s goals, target audience and budget. They
                  will implement well-thought keyword research, competitor
                  analysis and audience segmentation to help you maximize on
                  your campaigns.
                </p>
              </div>
              <div className="card1 abc2">
                <h3 className="underline-text">
                  Communication and Collaboration
                </h3>
                <div className="line">
                  <hr />
                </div>
                <p>
                  The only way to succeed in a PPC campaign, therefore, is
                  through good communication. Choose an agency that applauds
                  transparency, responsiveness and collaboration. They should
                  give you updates on the progress of any campaign, change
                  related to it and be ready for enquiry regarding same
                </p>
              </div>

              <div className="card1 abc3">
                <h3 className="underline-text">Results Oriented Approach</h3>
                <div className="line">
                  <hr />
                </div>
                <p>
                  The success of a pay per click agency should be judged by
                  output. Identify firms that consider performance metrics such
                  as ROI, conversion rates and revenue generation to be
                  critical. Companies that are only concerned with metrics such
                  as impressions and clicks without generating real business
                  outcomes should be avoided.
                </p>
              </div>
              <div className="card1 abc4">
                <h3 className="underline-text">Continuous Optimization</h3>
                <div className="line">
                  <hr />
                </div>
                <p>
                  PPC advertising is a method that has to be constantly
                  monitored, tested and perfected in order for it to yield
                  satisfactory outcomes. Choose an agency that relies on data
                  based methodology where campaigns are developed, launched and
                  monitored in real time with constant refinement due to
                  performance feedback
                </p>
              </div>
            </div>
          </div>
          <div className="ppc4">
            <div className="ppccontainer4">
              <div className="content4">
                <h3>Next Steps to Get the PPC Results You Want</h3>
              </div>
              <div className="card2">
                <div className="ppccard-content">
                  <div className="card-matter1">
                    <img
                      src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472775/Ppcauditf_yj0rqj.png"
                      alt="PPC Free Audit"
                      title="PPC Free Audit"
                    />
                    <div className="divider-content">
                      <h4>Get Your Free Audit</h4>
                      <p>
                        Click the button below to request your free audit. We’ll
                        reach out to get your meeting scheduled with our team.
                        The more information you can give us prior to meeting,
                        the more we’ll be able to understand your specific needs
                        and how we can best support.
                      </p>
                    </div>
                  </div>
                  <div className="card-matter1">
                    <img
                      src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472810/PpcauditS_sywkk8.png"
                      alt="PPC Our Team Expert"
                      title="PPC Our Team Expert"
                    />
                    <div className="divider-content">
                      <h4>Meet with Our Team</h4>
                      <p>
                        We'll show you the key areas we could optimize and
                        enhance your PPC strategy while giving you a complete
                        overview of our process. You can get your questions
                        answered and have the support needed to make a
                        well-informed decision.
                      </p>
                    </div>
                  </div>
                  <div className="card-matter1">
                    <img
                      src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472943/PpcauditT_djqjin.png"
                      alt="PPC Reach Your Goals"
                      title="PPC Reach Your Goals"
                    />
                    <div className="divider-content">
                      <h4>Reach Your Goals</h4>
                      <p>
                        Your PPC efforts are about to get dramatically easier!
                        We’ll take the burden off your shoulders by doing what
                        we do best, so you can stay focused on your business.
                        Our PPC marketing agency will help you get more leads,
                        sales, and brand awareness online.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="button1">
                  <Link href="/contact-us">
                    <button type="button">Get Your Free Audit</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ppc5">
            <div className="ppccontainer5">
              <div className="flex-content">
                <div className="content5">
                  <h3>
                    Why go for a pay-per- <span>click agency</span>?
                  </h3>
                  <p>
                    The <span>benefits provided</span> to businesses that are
                    interested in running <span>successful campaigns</span>{" "}
                    include a <span>pay-per-click agency</span> , known as one
                    of the best companies in the industry. Qualified
                    pay-per-click companies come armed with the required
                    knowledge, resources, and tools to ensure proper strategic
                    planning together with effective execution followed by
                    optimization resulting in
                    <span>noticeable results</span> .
                  </p>
                </div>
                <div className="right-image3">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740472975/fifthimage_esx0rq.svg"
                    alt="PPC pay-per click agency"
                    title="PPC pay-per click agency"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ppc6">
            <div className="ppccontainer6">
              <div className="content6">
                <h3>Let’s make things happen</h3>
                <p>
                  Partner with the #1 ranked digital marketing agency - before
                  your competitor does.
                </p>
              </div>

              <div className="ppcbutton2">
                <Link href="/contact-us">
                  <button type="button">Let’s Connect</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <img
            className="what-image-universal"
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469695/whatsapp_ubh9of.png"
            alt="whatsApp-kusheldigi"
            title="whatsApp-kusheldigi"
          />
        </button>
        <button onClick={callHandler}>
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469745/telephone_twhjto.png"
            alt="call-icon"
            title="call-icon"
          />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default PpcComponent;
