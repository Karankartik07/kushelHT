"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailBigComgurgaon() {
  const [formData, setFormData] = useState({
    name2: "",
    email2: "",
    phone2: "",
    message2: "",
  });

  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const router = useRouter();

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setFirstNo(num1);
    setSecondNo(num2);
    setCorrectAnswer(num1 + num2);
    setUserAnswer("");
    setCaptchaVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const verifyCaptcha = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      return;
    }
    toast.success("Captcha Verified!!");
    setCaptchaVerified(true);
  };

  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("in"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      phoneInputRef.current._iti = iti;
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "name2") {
      // Name only alphabets and spaces
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone2 = phoneInputRef.current?.value || "";
    const phoneDigitsOnly = phone2.replace(/\D/g, "");

    if (!formData.name2 || !formData.email2 || !phoneDigitsOnly) {
      toast.error("Please fill all the fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email2)) {
      toast.error("Invalid email address!");
      return;
    }

    if (phoneDigitsOnly.length !== 10) {
      toast.error("Phone number must be exactly 10 digits!");
      return;
    }

    if (!captchaVerified) {
      toast.error("Please Verify the Captcha!!");
      generateCaptcha();
      return;
    }

    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        ...formData,
        phone2: phoneDigitsOnly,
      };

      const response = await fetch("https://backend.kusheldigi.com/contact2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Result--->>", result);

      router.push("/thankyou");
    } catch (error) {
      console.error("❌ Error while sending email:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setFormData({ name2: "", email2: "", message2: "", phone2: "" });
      if (phoneInputRef.current) phoneInputRef.current.value = "";
      generateCaptcha();
    }
  };
  return (
    <section className="details-sec">
      <div className="details-desc">
        <h4>
          BigCommerce Development Company in Gurgaon – Build a Scalable Store
          That Grows With Your Business
        </h4>
        <p>
          At Kushel Digi, we assist growth businesses in Gurgaon to get started
          and grow stronger online stores with BigCommerce. We are confident
          BigCommerce development company in Gurgaon that can deliver an
          ecommerce project with a strategic and performance-oriented approach.
        </p>
        <p>
          Whether it is cybertech parks or it is retail giants, the different
          business environment created in Gurgaon requires ecommerce solutions
          that are versatile, robust, and can be scaled to meet the challenges.
          We collaborate deeply with you to create a store that is not merely
          beautiful and in line with your brand but also one that has been
          optimized to enable conversions and logistics and backend automation.
        </p>
        <p>
          Does your team want to migrate a legacy platform or are you launching
          your first BigCommerce store? Either way, we have the tools, the tech,
          and the strategy to provide quantifiable outcomes.
        </p>
        {/* <p>
          Kushel Digi is one of the leading and trusted BigCommerce development
          companies in Chennai that will help you to take your ecommerce brand
          to the next level. So, why don’t we create a smarter and
          stronger-selling store?
        </p> */}
        <h5>Our BigCommerce Development Services in Gurgaon Include –</h5>
        <p>
          In Gurgaon, Our BigCommerce services offer ambitious brands that need
          to make their online store a genuine cash churner. We provide
          end-to-end services: in designing, developing, optimizing, and
          maintenance to suit Gurgaon, and the high growth of the business
          there.
        </p>
        <p>
          Our scalable infrastructure, custom functionality, and easy
          third-party extensions make sure that your store keeps changing with
          your business. If you sell throughout India or globally, we have the
          solutions to keep up.
        </p>
        <p>Our fundamentals services are:</p>
        {/* <p>
          We also provide after sales assistance, performance monitoring and
          features updates so that your shop adapts as your business grows. Our
          BigCommerce development company in Chennai provide a future-proof
          technology supported with creativity and strategy that enables you to
          have an ecommerce feature versatile and future-proof.
        </p> */}
        <h6>Custom Web Application Development</h6>
        <p>
          Based in Gurgaon, our team designs powerful bespoke applications that
          work greatly, and be closely connected to your BigCommerce store. A
          web app that helps you manage your stock, an internal CRM control
          panel, or web-based customer account management, we can create a
          secure, scalable, and blazing-fast web application to suit your
          processes.
        </p>
        <p>
          Our development cycles are agile to work on time and on budget, and
          every feature is designed to meet your operational logic. Our
          applications are highly integrated, have powerful backend systems and
          enhance efficiency, minimize manual tasks and grow with your business.
        </p>
        <p>
          Custom applications are particularly effective with multichannel
          sellers, intricate fulfillment arrangements, or business with
          stratified approvals and pricing processes, all frequent in the
          energetic enterprise environment of Gurgaon.
        </p>
        <h6>User Experience (UX) Design</h6>
        <p>
          Gurgaon online shopper behaviours are digitally mature - and that
          requires intelligent, intuitive ecommerce experiences. Our team of UX
          designers work with behavioural research, wireframe and conversion
          heuristics to create BigCommerce stores that are not only attractive
          in view but also in sales.
        </p>
        <p>
          We are visualizing each customer path, the process of finding a
          product to making a purchase to eliminate friction and increase
          engagement. Our layouts are created on the foundation of user personas
          and device usage patterns and are aimed at fast scanning, recognizable
          CTAs, and flawless navigation.
        </p>
        <p>
          The outcome: an effective user experience that can assist you in
          minimizing bounce, enhancing time on site, and developing trust with
          your Gurgaon customer.
        </p>
        {/* <p>
          It doesn’t matter whether you are creating a new ecommerce site or
          improving an existing one; our UX designs will make your visitors
          spend more time, spend more on the site plus visit it frequently.
        </p> */}
        <h6>Progressive Web App (PWA) Development</h6>
        <p>
          PWAs are the hidden weapon of the rapidly expanding ecommerce brands
          and, in a city like Gurgaon where mobile penetration is high among
          both B2C and B2B customers, they can be a game changer.
        </p>
        <p>
          Our PWAs are fully integrated with BigCommerce, load within seconds,
          can be used offline, and act exactly like mobile native applications.
          Your customers can browse, add to cart and even checkout but with the
          speed of lightning and push notifications.
        </p>
        <p>
          Whether it be product catalogs, with many items, or real-time stock
          update, our PWAs can handle excessive lifting without compromising
          performance. We take care of strategy through deployment with one
          guarantee; your app will stimulate engagement and help you employ
          mobile sales first methods.
        </p>
        {/* <p>
          We make your ecommerce PWA safe, search-engine friendly, and
          conversion-optimised, which will enable your brand to stand out in the
          competitive world of mobile apps.
        </p> */}
        <h6>API Integration</h6>
        <p>
          Gurgaon boasts of startups that are fast scaling up and the back
          offices of large enterprises- both dependent on the efficiency of
          system connectivity. Our focus is in BigCommerce API integrations to
          tie all your other tools together, including CRMs, ERPs, shipping, and
          analytics.
        </p>
        <p>
          Is there a need to synchronize orders with Zoho or SAP? Automate
          Klaviyo emails? Be able to track delivery through Delhivery APIs? We
          have tried it all safe and at scale.
        </p>
        <p>
          We deal with the full lifecycle: consultation, integration readiness,
          error management, testing, and performance monitoring - so systems
          communicate with each other in real time, without interruption.
        </p>
        {/* <p>
          Our team can make your store a networked, intelligent ecommerce
          machine that delivers efficiency and improvement.
        </p> */}
        <h6>Full-Stack Development</h6>
        <p>
          We provide BigCommerce full-stack development in Gurgaon including
          custom frontends and potent backend engines. We create
          high-performance, SEO-friendly storefronts as well as intelligent
          backend inventory and order routing systems and business logic
          automation.
        </p>
        <p>
          Whether you are a high-SKU D2C brand or have a complex B2B catalog, we
          ensure an eased integration with the user interface and internal
          systems. Our framework of choice is building around React, Node.js,
          and Laravel with reliance on the APIs provided by BigCommerce to bring
          us a store that is not only beautiful but also powerful.
        </p>
        <p>
          Gurgaon business frequently requires localization, GST-enabled
          functionality, and a complicated logic for logistics, and we can
          provide exactly that.
        </p>
        {/* <p>
          We also integrate your BigCommerce store with CRMs, ERPs, analytics
          tools, and custom APIs, so your ecommerce system can be as lean as it
          can be.
        </p> */}
        <h6>Upgradation & Migration</h6>
        <p>
          In case you feel that you are getting stuck with your current
          ecommerce arrangement, we make it simple to migrate to BigCommerce. We
          do complete migrations of platforms such as Magento, WooCommerce or
          any custom stack ones; data transfer, theme replication, SEO mapping,
          testing.
        </p>
        <p>
          We also have UI revamping, performance enhancement, and app
          modernization services available to existing BigCommerce users. The
          competitiveness of Gurgaon requires rapidity, mobile optimization, and
          personalized experiences, and our upgrading services will meet all the
          requirements.
        </p>
        <p>
          There is no downtime in all transitions, making them all
          risk-calculated and estimated in transition, and more importantly,
          they are done with very minimal to no downtimes, ensuring that
          traffic, data, and customer trust are not lost in the process.
        </p>
        <h5>
          Why Choose Us as Your BigCommerce Development Company in Gurgaon?
        </h5>
        <p>
          We know that Gurgaon is not any ordinary metro but an Indian land of
          tech, finance and startups. That is why we provide local
          context-driven ecommerce development using industry best practices and
          performance metrics that count.
        </p>
        <p>
          We work with VC-backed D2C brands all the way up to established
          enterprise retailers in Gurgaon, and we successfully help them to not
          only grow faster but also to automate smarter and scale better with
          BigCommerce. When you partner with our BigCommerce development company
          in Gurgaon, you get more than a development partner. You receive a
          tactical business-wise team.{" "}
        </p>
        {/* <p>
          We have a collaborative, transparent, long-term approach. Our platform
          is brand-specific, product-specific, and operation-specific, whether
          it be starting a new D2C store or a store migration off another
          platform.
        </p> */}
        <p>Our clients use to hire us because:</p>
        <h6>Expert Team of Developers</h6>
        <p>
          We have developers with extensive knowledge of BigCommerce APIs,
          Stencil framework, enterprise integrations. Headquartered in Gurgaon,
          we have developed ecommerce platforms of logistics companies, health
          technology platforms, and pan-India retailers.
        </p>
        <p>
          We partner directly with your in-house technology or marketing
          departments to provide code that is clean, scalable and maintainable.
          We have the experience in the front end design, backend logic, and
          cross-platform data flow talks in line with revenue objectives.
        </p>
        <p>We are not engineers alone but e-commerce problem-solvers.</p>
        <h6>Leverage New Technology</h6>
        <p>
          Our development process embraces innovation. AI-powered search to
          voice-guided carts and smart bundling algorithms -- we are trying out
          the newest technology to provide your BigCommerce store with an
          advantage.
        </p>
        <p>
          We also remain on the front of trends in headless commerce, PWA
          performance optimization, and real-time personalization. Our Gurgaon
          office keeps experimentally analyzing tools and frameworks that
          maximize site speed, product relevance, and repeat purchase behavior.
        </p>
        <p>
          We can help you deliver to your customers future-ready when they are
          demanding modern experiences dependably based on today-built
          future-ready technology.
        </p>
        <h6>Responsive Website</h6>
        <p>
          A customer visits your shop on a coffee break, a Zoom meeting or while
          travelling in a taxi cab- it is a go place shopper in Gurgaon. This is
          the reason why we create BigCommerce websites, which are fast in
          response and adapt to any device.
        </p>
        <p>
          Whether it is one-page checkouts, product galleries, or any other
          functionality, we make it work on any screen size. Other
          mobile-specific capabilities (such as sticky CTAs, swipe navigation,
          and smart product carousels) that streamline user flow are also in
          place.
        </p>
        <p>
          Responsive design is about more than layout it is also about
          eliminating purchase friction, wherever your customers are.
        </p>
        <h6>Flexibility</h6>
        <p>
          There are no two identical businesses in Gurgaon, and there can be no
          two identical builds. Our BigCommerce builds are versatile to best
          suit your business needs whether you require multilingual support to
          NCR audiences or trickily-interested sales tax requirements across
          states in India.
        </p>
        <p>
          We develop modular and editable blocks and provide custom
          configurability services so you can grow or adapt without dependence
          on technology. You gain independence in easily executing flash sales,
          introducing seasonal collections, or switching product bundles
          engineering team is not in the queue.
        </p>
        <p>
          Our BigCommerce development company in Gurgaon enables your ecommerce
          system to perform the way your business does and evolve right
          alongside you.
        </p>
        <h6>Customization Techniques</h6>
        <p>
          Brand rivalry in Gurgaon is not limited to products, but how products
          are brought forward, suggested, and provided as well. We use
          customization methods to make sure your BigCommerce shop will showcase
          your unique advantage.
        </p>
        <p>
          We develop bespoke category logic, active product search,
          geographic-specific pricing, and individual email sequencing -
          specific to your users. On the backend we create administration tools,
          detailed reporting dashboards, and inventory logics that make your
          team easier at their day-to-day operations.
        </p>
        <p>
          Your brand should have a store that feels like it was made just for
          you because with us, it is.
        </p>

        <div className="detail-foot">
          <h5>Our Contact Address</h5>
          <p className="detail-foot-p">Kushel Digi Solutions</p>
          <p>
            <span>PHONE :</span> +91 9045301702
          </p>
          <p>
            <span>EMAIL :</span> info@kusheldigi.com
          </p>
          <p>
            <span>ADDRESS :</span> First Floor, D242, F-32B, Sector 63 Rd,
            Noida, 201301 Uttar Pradesh
          </p>
        </div>
      </div>
      <form className="getquote-wrapper" onSubmit={handleSubmit}>
        <div className="getquote-form">
          <div className="getquote-header"></div>
          <h2>GET A FREE QUOTE</h2>

          <label className="getquote-form-label">Enter your name</label>
          <input
            type="text"
            name="name2"
            placeholder="Full Name*"
            className="form-input"
            value={formData?.name2}
            onChange={handleChange}
            required
          />

          <label className="getquote-form-label">Enter your Email</label>
          <input
            type="email"
            name="email2"
            placeholder="Email*"
            className="form-input"
            value={formData?.email2}
            onChange={handleChange}
            required
          />

          <label className="getquote-form-label">Contact No.</label>
          <div className="form-phone-wrapper">
            <input
              type="tel"
              name="phone2"
              placeholder="Mobile Number*"
              className="form-input phone-input"
              ref={phoneInputRef}
              onInput={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                if (digits.length <= 10) {
                  e.target.value = digits;
                } else {
                  e.target.value = digits.slice(0, 10);
                  toast.error("Only 10 digit phone number allowed!");
                }
              }}
              required
            />
          </div>

          <label htmlFor="message" className="getquote-form-label">
            Message
          </label>
          <textarea
            className="form-input textFormArea resize-none"
            name="message2"
            id="message"
            placeholder="How Can We Help You?*"
            required
            value={formData?.message2}
            onChange={handleChange}
          ></textarea>

          <div className="captcha-box">
            <div className="inputcapt">
              <label htmlFor="ans-captch" className="visually-hidden">
                {`${firstNo} + ${secondNo} = `}
              </label>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                required
                id="ans-captch"
              />
            </div>
            <span className="captcha-btn" onClick={verifyCaptcha}>
              Verify Captcha
            </span>
          </div>

          <button className="form-submit-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {loading && <span className="loader3"></span>}

          <p className="getquote-terms">
            By clicking on submit, you agree to
            <br />
            our <a href="/terms-conditions">Terms & Condition</a> and{" "}
            <a href="/privacy-policy">Privacy policy</a>
          </p>
        </div>
      </form>
    </section>
  );
}
