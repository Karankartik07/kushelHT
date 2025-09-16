"use client"
import { useEffect } from "react";
import Head from 'next/head';
import Footer from "../../COMMON/Footer";
import Navbar from "../../COMMON/Navbar";
import '../../globals.css';

const SmmComponent = () => {


  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }

  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

      <div className="ser-main">
        <div className="main-section">
          <div className="social-media">
            <div className="social-media-first-section">
              <h1>Social Media Marketing</h1>
              <p>
                Visibility and awareness, engagement, and driving website
                traffic along with helping in data analytics and insights for a
                greater impact concerning the customers and audiences.
              </p>
            </div>
            <div className="social-media-second-section">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467586/social_media_image_zm9yn3.png' alt="Social Media Marketing" title="Social Media Marketing" />
            </div>
          </div>
        </div>
        {/* ---------------Lead-section--------------------  */}
        <div className="lead-main-section">
          <div className="lead-smm ">
            <div className="lead-first-section">
              <h2>From Likes to Leads: How SMM Can Drive Your Success !!!</h2>
              <hr className="line" />
              <p>
                Social Media Marketing (SMM) is a vital approach for businesses
                aiming to increase brand
              </p>
            </div>
            <div className="lead-second-section">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467628/leads_image_v6pxov.png' alt="SMM can drive your success" title="SMM can drive your success" />
            </div>
          </div>
        </div>
        {/*  ---------------End-Lead-section-------------------- * / */}
        {/* ---------------strategy-section--------------------  */}
        <div className="strategy-main-section">
          <div className="strategy-section">
            <div className="strategy-first-section">
              <div className="under-strategy-section">
                <h4>Your Strategy, Amplified !</h4>
                <h3>One Stop Shop For All Your Social Media Needs!</h3>
                <p>
                  With our variety of services grow on social media in no time
                  without hassle.
                </p>
              </div>
              <div className="strategy-icon-section">
                <div className="icon-2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467674/strategy_icon-1_hz7kfm.svg' alt="Real Followers" title="Real Followers" />
                </div>
                <div className="text">
                  <h3>Real Followers</h3>
                  <p>
                    This organic social engagement will bring you real and
                    engaged Instagram users, who will actively interact with
                    your account.
                  </p>
                </div>
              </div>
              <div className="strategy-icon-section">
                <div className="icon-2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467714/strategy_icon-2_vvwdyk.svg' alt="Real Like" title="Real Like" />
                </div>
                <div className="text">
                  <h3>Real Likes</h3>
                  <p>
                    Find the people who love your content, and monetize them
                    with real likes on any digital media platform.
                  </p>
                </div>
              </div>
              <div className="strategy-icon-section">
                <div className="icon-2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467748/strategy_icon-3_jsonp6.svg' alt="Real Views" title="Real Views" />
                </div>
                <div className="text">
                  <h3>Real Views</h3>
                  <p>
                    Our real viewers will give a kick start to your promotion.
                    Simply great for any kind of content!
                  </p>
                </div>
              </div>
            </div>
            <div className="strategy-second-section">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467780/strategy_image_yvbu7e.png' alt="Social Media Needs" title="Social Media Needs" />
            </div>
          </div>
        </div>
        {/* ------------------End-strategy-section-------------------- */}
        {/* ------------------process-section-------------------- */}
        <div className="process-main-section">
          <div className="process-section">
            <h3>Process</h3>
            <h4>It's Easier Than Making A Cup Of Tea !</h4>
            <p>
              Your social media success is largely dependent on the number of
              likes, comments <br />
              and followers you have.
            </p>
          </div>
          <div className="process-under-section ">
            <div className="process-first-section">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467812/process_image_ow0o6r.png' alt="Social Media Process" title="Social Media Process" />
            </div>
            <div className="process-second-section">

              <div className="process-icon-section">
                <div className="icon-1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467847/process_icon-1_ec7s9g.svg' alt="Sign Up To Create New Accoun" title="Sign Up To Create New Accoun" />
                  <div className="line-1">
                    <hr />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 1</h4>
                  <h3>Create a new account</h3>
                  <p>Visit our online website and create a new user account. Once you sign up, you will get access to our
                    diverse social media marketing services.
                  </p>
                </div>
              </div>

              <div className="process-icon-section">
                <div className="icon-1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467886/process_icon-2_njbg0l.svg' alt="Add Funds To Account" title="Add Funds To Account" />
                  <div className="line-1">
                    <hr />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 2</h4>
                  <h3>Add Funds To Account</h3>
                  <p>
                    Add funds to your smm panel account with plenty of available
                    major payment gateways such as paytm, coinbase, stripe,
                    paypal and more.
                  </p>
                </div>
              </div>

              <div className="process-icon-section">
                <div className="icon-1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467923/process_icon-3_h57mla.svg' alt="Select Service You Want To Order" title="Select Service You Want To Order" />
                  <div className="line-1 line-3">
                    <hr />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 3</h4>
                  <h3>Select Service You Want To Order</h3>
                  <p>
                    Find the perfect service according to your requirement from
                    100s of categories such as Instagram, Facebook, Youtube,
                    Twitter etc.
                  </p>
                </div>
              </div>

              <div className="process-icon-section">
                <div className="icon-1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467961/process_icon-4_wodf2x.svg' alt="Sit Back Enjoy" title="Sit Back Enjoy" />
                  <div className="line-1 line-2">
                    <hr className="extraheight" />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 4</h4>
                  <h3>Put x, Sit Back &amp; Enjoy</h3>
                  <p>
                    Add proper link and quantity to get price for service
                    automatically. Verify details and you are good to go.
                  </p>
                </div>
              </div>

              <div className="btn">
                <a href="/contact-us"><button type="submit">Contact us</button></a>
              </div>

            </div>
          </div>
        </div>
        {/* ------------------end process-section-------------------- */}
        {/* ------------------Our Services-------------------- */}
        <div className="main-services-section">
          <div className="services-section">
            <div className="our-services-first-section">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                Tap the power of your online presence in this digital world
                using - SMM which will use its expertise to paint your brand’s
                image with an artistic approach, a lit fire of creativity, and
                exciting content, engaging in meaningful conversations with your
                target audience.
              </p>
            </div>


            <div className="second-section-card">
              <div className="card-content">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740467997/services_icon-1_eprcha.svg' alt="Social Media Management" title="Social Media Management" />
                <h3>Social Media Management</h3>
                <p>
                  Day-to-day maintenance of social network accounts,
                  including making posts, keeping track of the likes,
                  responding to replies and comments, shares, subscriptions,
                  scheduling; also analyzing the records.
                </p>
              </div>

              <div className="card-content">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468033/services_icon-2_igamop.svg' alt="Social Media Advertising" title="Social Media Advertising" />
                <h3>Social Media Advertising</h3>
                <p>
                  Using paid ad campaigns on sites that include but are not
                  limited to Facebook, Instagram, Twitter, and LinkedIn
                  targeted towards increasing reach and engagement which
                  also helps in maintaining favorable connections in the
                  future as well.
                </p>
              </div>

              <div className="card-content">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468074/services_icon-3_stfvxp.svg' alt="Influencer Marketing" title="Influencer Marketing" />
                <h3>Influencer Marketing</h3>
                <p>
                  Influencer marketing involves social media influencers in
                  the promotion of your brand, product, or services.
                </p>
              </div>

              <div className="card-content">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468118/services_icon-4_na3ftc.svg' alt="Reputation Management" title="Reputation Management" />
                <h3>Reputation Management</h3>
                <p>
                  Keeping track of online reviews, feedback, and brand
                  sentiments and just not it but further working on the same
                  to help it improve to a larger extent.
                </p>
              </div>

              <div className="card-content">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468159/services_icon-5_mdwjnc.svg' alt="Community Buildingt" title="Community Buildingt" />
                <h3 style={{ marginTop: 15 }}>Community Building </h3>
                <p>
                  We will help optimize your social media profiles so that you can connect with more followers easily.
                  Now leverage our domain expertise to build a strong community and engage them with your brand.
                </p>
              </div>

              <div className="card-content">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468203/services_icon-6_pxeclp.svg' alt="Crisis Management" title="Crisis Management" />
                <h3>Crisis Management</h3>
                <p>
                  Coming up with different approaches or strategies to
                  tackle and mitigate the potential negative publicity or
                  social media crises.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------end Our Services-------------------- */}
        {/* ------------------choose section-------------------- */}
        <div className="main-choose-section">
          <div className="choose-section ">
            <div className="choose-first-section">
              <h3>
                Why You Choose <span>kushel Digi</span>
              </h3>
              <p>
                Picking Kushel Digi opens up to you a variety of knowledge and
                uniquely personal solutions. Our goal is to achieve significant
                outcomes through unique content, evidence-based approaches, and
                budget-friendly options along with helping you save time,
                maintain dignity in the branding process, and give your business
                an upper hand over competitors in this ever-changing social
                media arena. We are a one-stop shop for content generation and
                promotion.
              </p>
            </div>
            <div className="choose-second-section">
              <div className="upper-second-section-card">
                <div className="choose-second-section-card">
                  <div className="card-content">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468249/choose_icon-1_jxhdw5.svg' alt="Expertise" title="Expertise" />

                    <h3>Expertise</h3>
                  </div>
                </div>
                <div className="choose-second-section-card next-card">
                  <div className="card-content">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468286/choose_icon-2_wmlhwb.svg' alt="Creative Content" title="Creative Content" />

                    <h3>Creative Content</h3>
                  </div>
                </div>
              </div>
              <div className="upper-second-section-card">
                <div className="choose-second-section-card">
                  <div className="card-content">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468328/choose_icon-3_ezfk9m.svg' alt="Tailored Strategies" title="Tailored Strategies" />

                    <h3>Tailored Strategies</h3>
                  </div>
                </div>
                <div className="choose-second-section-card next-card">
                  <div className="card-content">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468371/choose_icon-4_rey6ee.svg' alt="Result-Driven Approach" title="Result-Driven Approach" />

                    <h3>Result-Driven Approach</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------End choose section--------------------  */}
        {/* ------------------------Benefits section-------------------------- */}
        <div className="main-benefit-section">
          <div className="benefit-section">
            <div className="benefit-heading1">
              <h3>Benefit of using our SMM Services</h3>
              <p>
                Your social media success is largely dependent on the number of
                likes, comments <br />
                and followers you have.
              </p>
            </div>
            <div className="benefit-main-card">
              <div className="benefit-card">
                <div className="card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468455/branding_image-1_zjvtru.png' alt="SMM consistent branding" title="Consistent Branding" />

                </div>
                <div className="card-text">
                  <h3>Improved Brand Awareness:</h3>
                  <p>

                    Our SMM strategies are developed to increase your brand's exposure across a wide array of social media platforms. With the regular posting of engaging content and through focused advertising, we make sure that your brand reaches a larger audience and cultivates better recognition and trust.

                  </p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468496/branding_image-2_auokrk.png' alt="SMM consistent branding" title="SMM consistent branding" />

                </div>
                <div className="card-text">
                  <h3>Improved Customer Engagement:
                  </h3>
                  <p>
                    We believe in engaging with your audience, creating meaningful interactions with them. Our team comes up with customized content that speaks to your customers, driving likes, comments, shares, and direct messages,whether you want to engage customers for better customer relationships and loyalty.

                  </p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468535/branding_image-3_jnjp9s.png' alt="SMM consistent branding" title="SMM consistent branding" />

                </div>
                <div className="card-text">
                  <h3>Higher Conversion Rates:
                  </h3>
                  <p>
                    Through correct targeting and compelling calls-to-action in our SMM services, we drive loads of traffic to your website and turn followers into customers. We keep a tab on engagement metrics to track and analyze them so that we can further refine our approach to maximize your ROI.


                  </p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="card-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740468576/branding_image-4_m3sbml.png' alt="SMM consistent branding" title="SMM consistent branding" />

                </div>
                <div className="card-text">
                  <h3>Cost-Effective Marketing:
                  </h3>
                  <p>
                    Compared to the traditional modes of advertisement, social media marketing is way cheaper. We know how to optimize ad spend with organic growth strategies so you get tremendous results without spending a fortune.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466393/whatsapp_onug09.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740466433/telephone_g3zvoj.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SmmComponent;
