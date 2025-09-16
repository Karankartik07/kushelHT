"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomDevChennai() {
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
          Best Ecommerce Development Company in Chennai for Custom Store
          Solutions
        </h4>
        <p>
          Kushel Digi helps Chennai companies create fast, scalable e-commerce
          stores. These stores boost conversions. We customize ecommerce
          solutions for all types of businesses. This includes legacy
          manufacturers going digital and new D2C fashion companies.
        </p>
        <p>
          Tech-savvy shoppers in Chennai need online stores to be both practical
          and engaging. We possess a healthy local context. We integrate
          friendly UI/UX with safe backend platforms. This covers payment
          integrations and logistic efforts that suit your model.
        </p>
        <p>
          You may sell handmade foods, Mylapore, or tech tools all over India.
          Through our platforms, we ensure that they are enjoyable to use,
          enable fast checkout, and are mobile-friendly. Our ecommerce
          development company in Chennai does not only develop websites. We
          design digital experiences to develop brand loyalty.
        </p>
        <p>
          Make your business future-proof in the e-commerce of Chennai by
          selecting Kushel Digi as your technology partner.
        </p>
        <h4>What We Offer: Ecommerce Website Development in Chennai</h4>
        <p>
          Kushel Digi provides end-to-end ecommerce development to the Chennai
          market. Their services satisfy the needs of the unique and vibrant
          segment of the area. Regardless of whether your business is a legacy
          brand transitioning to the digital world or a rapidly expanding
          startup,
        </p>
        <p>
          In Chennai, our team cooperates with local retailers and B2B
          suppliers, and D2C brands. We develop scalable, secure, and reliable
          ecommerce solutions together. Local factors like language choice, the
          way people choose to pay, taxes set, and the expectations of delivery
          we already know. This is something that we apply in each line of code.
        </p>
        <p>
          We do not simply make websites, but rather we make ecommerce
          ecosystems. We relate technology to commercial performance. Kushel
          Digi offers strategy and technology to brands in Chennai or anywhere
          in India, ready to be the leader online.
        </p>
        {/* <p>
          We offer web development services that can hit the spot in Chennai and
          beyond to provide high-performance outcomes based on your brand, your
          audience, and your goals with a focus on results and performance.
        </p> */}
        <h4>End-to-End Custom Web App Development Solutions</h4>
        {/* <h6>Custom Web Application Development</h6> */}
        <p>
          The Chennai ecommerce market combines older businesses running an
          online presence with new companies that are rapidly expanding. Both
          require intelligent tools. We deliver brand-specific web application
          development in Chennai. Our services can automate activities, increase
          efficiency and scale comfortably.
        </p>
        <ul className="extra-chen-li">
          You may have to:
          <li>Operate dealer networks. </li>
          <li>The same inventory is installed in the various locations. </li>
          <li>Develop a product configuration tool. </li>
        </ul>

        <p>
          The applications we create can be safe and scalable, and able to
          seamlessly integrate into your ecommerce process. We have a Chennai
          team that provides intuitive admin portals and analytics dashboards,
          as well as loyalty. Our solutions are based on React, Laravel, and
          Django frameworks. We program your commercial practices, ensuring your
          back office is as efficient as your front office store.
        </p>
        <p>
          We provide cloud-compatible applications, which enhance performance.
          These enable teams to have control and view more of the ecommerce
          process. Kushel Digi is designed to integrate with you when you are in
          Chennai and require tools best suited to your process.
        </p>
        <h6>UX/UI Design Experts Creating Smooth, Responsive Interfaces</h6>
        <p>
          Shoppers in Chennai want more than just good prices. They expect a
          smooth, clutter-free online experience. We help ecommerce brands in
          Chennai create smooth and engaging online and app experiences.
        </p>
        <p>
          Our ecommerce development company in Chennai focuses on research. We
          conduct competitor audits, customer interviews, and journey mapping.
          This helps us understand how your audience interacts with your brand
          online. This helps us to create wireframes, interaction flows, and
          detailed prototypes. These tools help boost engagement and increase
          conversions.
        </p>
        <p>
          Our UX design covers everything from product discovery to checkout. We
          focus on shopping habits in Tamil Nadu. Key features include
          multi-language toggles, regional filters, and a cash-on-delivery
          option.
        </p>
        <p>
          We design e-commerce journeys that resonate with Gen Z tech-savvy
          consumers in OMR and conventional families in T. Nagar. At Kushel
          Digi, we believe that good design goes deeper than skin deep.
        </p>
        <h6>Build High-Performance PWAs for Modern Web and Mobile Users</h6>
        <p>
          Mobile-first commerce is booming in Chennai. Progressive Web Apps
          (PWAs) offer fast, app-like experiences. Also, they don’t require any
          downloads. At Kushel Digi, we enhance offline efficiencies in PWAs.
          This helps ecommerce brands load faster and boosts their conversions
          in the region.
        </p>
        <p>
          We build our PWAs using modern frameworks like Vue.js and React. This
          will enable them to operate without any trouble, even on the machines.
          Train and in-shop browsing customers experience a fast web experience
          on phones. They get quick responses, push messages, and home-screen
          shortcuts.
        </p>
        <p>
          The user interaction with any type of business is advanced using our
          PWA solutions. You may be a small store in Anna Nagar or a
          subscription brand covering the whole of India, but we can support
          you. These are the solutions that lower the bounce rates and encourage
          multiple sales.
        </p>
        <p>
          PWAs are modern, cheap, and terrific in search engines. They perfectly
          fit the developing online business in Chennai, where customers care
          the most about speed, along with mobile availability.
        </p>
        <h6>Integrate Third-Party APIs with Ease and Efficiency</h6>
        <p>
          The various systems used by businesses in Chennai that engage in
          eCommerce include:
        </p>
        <ul className="extra-chen-li">
          Inventory software
          <li>CRMs</li>
          <li>Location-specific distribution partners</li>
          <li>Payment gateways</li>
        </ul>
        <p>
          All of the above is integrated in our API integration experience to
          achieve a single seamless backend. This helps you increase your
          operations.
        </p>
        <p>
          Our ecommerce development company in Chennai connects local businesses
          with tools like Razorpay, Zoho, Tally, Delhivery, and custom ERPs. We
          can help you link your systems. Whether you need to sync stock between
          your warehouse and shop, automate order statuses, or track loyalty
          points, we’ve got you covered.
        </p>
        <p>
          We provide end-to-end integration such as discovery, documentation,
          testing, error handling, and monitoring. It translates into less
          downtime, less hand labor, and more reliable data flow, allowing your
          team to concentrate on growth.Our Chennai customers value that we
          don’t just plug and play. We know just how each business is different.
          In that case, we just join painlessly to your ecommerce structure.
        </p>
        <h6>End-to-End Full-Stack Development for Custom Web Applications</h6>
        <p>
          The Chennai ecommerce business never stays the same. The importance of
          full-stack development lies in the creation of flexible platforms able
          to keep up. We provide end-to-end ecommerce branding in Kushel Digi.
          We provide services for everything: the frontend and the backend.
        </p>
        <p>
          The MERN, MEVN, and LAMP stacks are used by us because they enable our
          engineers to support fast, safe, and scalable stores. We do a lot of
          things. This encompasses high-level front-end functionality such as
          product comparison sliders and filtering multilevel extensivity. We
          produce backend tools as well. These are tax automation, vendor
          dashboards, and custom workflows.
        </p>
        <p>
          In Chennai, a lot of companies are engaged in cross-channel logistics.
          They also have to comply with region-specific payment regulations and
          handle intricate product libraries. Our end-to-end design has
          everything in line. No bottlenecks or weak integrations.
        </p>
        <p>
          Our solutions for ecommerce are ready to be used. They are not
          problematic to maintain and extend, owing to a well-documented and
          modular code. We produce intelligent, clean, scalable systems as a
          startup or as enterprise brands.
        </p>
        <h6>Ecommerce Website Migration and Version Upgrades Made Easy</h6>
        <p>
          Traditional ecommerce websites drag you behind. We assist businesses
          in Chennai to enhance their tech stack. We port them to quicker,
          elastic systems. In so doing, they do not lose information, and they
          are not severely disrupted.
        </p>
        <p>
          they are not severely disrupted. Whether you are changing platforms,
          such as when migrating between WooCommerce and Shopify, or you have a
          complicated migration, our team can assist you. We take care of all of
          that, including your product catalogue and user information, SEO
          redirects, and third-party integrations.
        </p>
        <p>
          We provide upgrade services such as performance optimization, user
          interface and user experience update, and feature addition to existing
          ecommerce websites. Most of the retailers in Chennai are transitioning
          to mobile-first and multilingual environments. We assist you in
          changing without losing your current momentum.
        </p>
        <p>
          We create all our transitions thoughtfully. We graph dependencies,
          pre-launch test, and provide post-migration assistance. In this
          manner, you ensure that your store continues doing well. Assuming that
          a D2C business and a wholesale company expand activities at an
          identical pace, we will increase your ecommerce presence in the
          dynamic Chennai market.
        </p>
        <h4>
          Top Reasons to Choose Our Ecommerce Development Services in Chennai
        </h4>
        <p>
          Chennai is a city of heritage, commerce, and tech Startups. Your
          ecommerce platform should reflect this diversity. At Kushel Digi, we
          use global best practices and adapt them for Chennai. This helps us
          build effective ecommerce stores. Our goal is to create stores that
          connect with your audience and meet your objectives.
        </p>
        <p>
          Our ecommerce development company in Chennai offers local ecommerce
          solutions. We use a multilingual design to attract local shoppers. We
          also integrate with local courier partners and banks. Our Chennai team
          blends speed with cultural insight. We will spend decades on your
          digital quest.
        </p>
        <p>
          We do not merely code. We help brands rethink how they sell, interact,
          and grow. You might be in the retail hub of T. Nagar or expanding your
          office in the OMR IT corridor. Kushel Digi is your key partner for
          ecommerce success.Choose us because we know Chennai, its people, its
          pace, and its potential.
        </p>
        <h6>Skilled Ecommerce Developers with Industry Expertise</h6>
        <p>
          Our Chennai team includes skilled engineers, creative problem solvers,
          and ecommerce strategists. They all work together under one roof. We
          don’t just make what you want. We think outside the box to give your
          business what it needs to succeed online.
        </p>
        <p>
          Our developers have addressed all aspects of the ecommerce lifecycle.
          Their back-end inventory systems are strong. They also produced
          user-friendly, quick, and clear front-end experiences. When selling,
          you decide to only sell in Tamil Nadu or India as a whole. We make
          your store local and global in quality.
        </p>
        <p>
          Our experiences span Shopify, WooCommerce, BigCommerce, and bespoke
          builds. We are also on top of current advances in ecommerce
          frameworks, such as React, and headless CMS. We are also stack and
          scalable to your work.
        </p>
        <p>
          When you employ the Chennai team of Kushel Digi, you will have a
          caring team. They care about timelines, performance, and scalability.
          They are also interested in the growth story of your brand.
        </p>
        <h6>Stay Ahead with the Newest Ecommerce Development Tools</h6>
        <p>
          We at Kushel Digi feel that the right technology stack can elevate the
          way ecommerce businesses in Chennai can grow and make success happen.
          We assist our customers in employing new technology. This technology
          can improve performance, automate tasks, and improve the customer
          experience.
        </p>
        <ul className="extra-chen-li">
          We’ve launched:
          <li>AI chatbots</li>
          <li>Individualized product suggestions </li>
          <li>Third-wave analytics dashboards</li>
          <li>Voice search</li>
          <li>Testing augmented reality</li>
        </ul>
        <p>
          These tools will increase online shopping in Chennai. We also allow
          local sellers to have simple mobile billing, smart COD, and real-time
          tracking integrations.
        </p>
        <p>
          We always test and use new ecommerce tools for our developers. This
          keeps your platform fast, secure, and relevant. Are you ready to
          experience headless architecture, personalization layers, or
          blazing-fast PWAs? We ensure that technology becomes your asset, not
          your headache.
        </p>
        <p>
          We do not follow fashions. We use tools that fit your business model,
          audience, and scale. In this manner, each of the technologies that we
          use has its measurable impact.
        </p>
        <h6>Fully Responsive Ecommerce Stores for Mobile and Desktop Users</h6>
        <p>
          You will need your ecommerce store to perform flawlessly across all
          devices on the hectic digital landscape around Chennai. At our
          ecommerce development company in Chennai, we create responsive
          websites. These sites adjust to fit any screen size. So, your
          customers get the same experience on their iPhones in Adyar and
          desktops in Ambattur.
        </p>
        <p>
          We do not even stop at fluid grids. We optimize tap targets. We use
          fast-loading images. Our layouts reduce bounces and boost conversions.
          Our mobile-first design is shaped by local insights. As an example, a
          majority of the Chennai shoppers would like to shop in Tamil. Also,
          the checkout design can affect their choice for cash-on-delivery.
        </p>
        <p>
          We test on many devices and browsers to ensure real-world performance.
          This will lead to less cart abandonment, more traffic, and better
          visibility in mobile search results.
        </p>
        <p>
          Your customers expect speed and clarity. We ensure that your ecommerce
          site provides both, all the time, and on all screens.
        </p>
        <h6>Customizable Development to Fit Your Unique Business Goals</h6>
        <p>
          Each ecommerce brand in Chennai has a unique story to tell, and your
          platform must spell that out. We create ecommerce websites that are
          flexible and can be modified, expanded, and pivoted without having to
          begin again.
        </p>
        <p>
          Selling in multiple categories? Hybrid fulfillment? Spikes during
          festival season? Our architecture has you covered. Feeling like doing
          subscription logic later? Will you be offering region-specific prices
          or GST invoices? Your system will scale with your business when you
          use Kushel Digi.
        </p>
        <p>
          Our modular development strategy implies that you can roll out
          features as you are prepared to do so, not at once. We make sure that
          we add versioning, scalability, and compatibility with plugins, which
          means that your store can evolve with your requirements.
        </p>
        <p>
          Whether it is the payment methods and product filters, language and
          inventory logic, flexibility is not only a feature, it is our
          ecommerce DNA.
        </p>
        <h6>Custom Ecommerce Features Built for Your Business</h6>
        <p>
          Your ecommerce experience should never be like two Chennai shoppers
          are the same. At Kushel Digi, we specialize in customizing ecommerce
          practices. We ensure they fit your brand, product niche, and consumer
          behavior.
        </p>
        <ul className="extra-chen-li">
          We create shopping experiences just for you. Our services include:
          <li>Location-based pricing</li>
          <li>Personalized deals</li>
          <li>Dynamic product recommendations</li>
          <li>Tailored checkout experiences</li>
        </ul>
        <p>
          Have to do a Tamil New Year promo with local filters? Feel like having
          a backend dashboard to manage orders by sales zones? We do it, and we
          do it without sacrificing performance.
        </p>
        <p>
          Our programmers will create custom scripts, API logic, and UI
          elements. This will make every part of your site reflect your
          business. We create solutions that fit your model. They include
          front-end micro-interactions and backend process automation.
        </p>
        <p>
          Kushel Digi does not just provide functionality. You end up with an
          ecommerce store that seems custom-made to your brand, your team, and
          your audience.
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
