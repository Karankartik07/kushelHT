"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomUtah() {
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
        initialCountry: "us",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("us"));
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
          Ecommerce Development Company in Utah – Where Your Brand Meets Smart
          Conversions
        </h4>
        <p>
          Looking for a trusted ecommerce development company in Utah that
          delivers results? Kushel Digi creates online stores that work ideally
          for your businesses. We build custom ecommerce solutions that turn
          visitors into customers and help Utah businesses grow their online
          presence.
        </p>
        <p>
          Your online store is to represent your brand and to meet the
          expectations of your customers. We design custom ecommerce
          applications based on Shopify, BigCommerce, Magento, and WooCommerce.
          We work on creating fast-loading stores that appear professional and
          offer a fast shopping experience on every device.
        </p>
        <p>
          We do manage safe payment handling, just to mention the inventory.
          Attention to the services. Our Utah ecommerce development service will
          also provide continuous support for your store. You not only receive a
          start-up site when you work with us. You receive an installation that
          includes the whole business solution to make sales and grow.
        </p>

        <h5>What You Get with Our E-Commerce Development Services</h5>
        <p>
          When you choose Kushel Digi for your Utah ecommerce project, you
          receive comprehensive development services that cover every aspect of
          online selling. We build responsive stores that work perfectly on
          computers, tablets, and smartphones. Your customers enjoy seamless
          shopping experiences no matter what device they use.
        </p>
        <p>
          Our development process includes custom design work that matches your
          brand identity. We integrate secure payment gateways, set up product
          catalogs, and create user-friendly navigation systems. Every feature
          we build serves a specific purpose to help increase your sales and
          improve customer satisfaction.
        </p>
        <p>
          We also provide SEO optimization to help your store rank well in
          search results. This means more Utah customers can find your business
          online. Our team uses the latest technologies and best practices to
          ensure your store performs well and grows with your business needs.
        </p>

        <h5>
          Our E-Commerce Development Services Include Designing a Custom
          E-Commerce Website
        </h5>
        <p>
          We are convinced that businesses should have their own way on the
          internet. This is why we design bespoke e-commerce websites that fit
          your brand and customer requirements. None of the generic templates
          and cookie cutters. Each design aspect works in your favour as a
          business.
        </p>
        <h6>Mobile-Friendly Shopping Experience</h6>
        <p>
          Modern consumers demand websites that are flawless in action on their
          mobile handheld devices and tablets. Our ecommerce stores are built on
          the basis of mobile-first design. The needs of mobile shoppers are not
          the same as those of desktop users. Their desire is high-speed loading
          processes, usability, and straightforward checkout services. We
          streamline all features to make them shop within their mobile devices.
        </p>
        <p>
          Readable fonts, touch-optimal buttons, and simplified navigation menus
          are part of our mobile-friendly engagement. The rapid loading speed is
          also one of its technologies since cellular users want promptness in
          their services. When your shop performs well in mobile machinery, then
          you capture additional sales to the increasing mobile shopping market.
        </p>

        <h6>Adding a Secure Payment Gateway</h6>
        <p>
          Security provides confidence among online customers. Using PayPal,
          Stripe, and Square, we combine trusted payment processors for your
          ecommerce shop. Your customers receive various secure methods of
          making payments, such as credit cards, digital wallets, and bank
          transfers. This would make them more likely to make their purchases.
        </p>
        <p>
          To ensure the protection of customer information, we use encryption
          through the use of SSL and protection against fraud. Security is not
          just a problem of protection. It is all about creating confidence in
          order to make customers comfortable spending with you. We also make
          sure that the processing of payments happens smoothly without
          technical malfunctions that might disrupt the sales.
        </p>
        <p>
          Uncomplicated checkout flows are part of our secure payment
          integration that does not frustrate customers. Complex shopping
          checkouts make individuals run away with their carts. Our designs are
          simple and secure customer experiences that will encourage customers
          to make purchases and come back to shop in the future.
        </p>
        <h6>Product & Inventory Management</h6>
        <p>
          Managing products shouldn't be complicated. We create easy-to-use
          admin panels where you can add, edit, and organize products without
          technical skills. Upload photos, set prices, track inventory levels,
          and manage product variations all from one simple dashboard.
        </p>
        <p>
          It involves our inventory management systems giving automatic
          low-stock signals so that you will never be caught out of some of your
          popular items. You will be able to put products in categories, insert
          detailed descriptions, and you will have related product suggestions,
          which will help you in increasing the value of those orders that are
          average.
        </p>
        <p>
          We also combine with existing business systems in case you have
          accounting software or warehousing management. This makes your online
          store integrate perfectly with all other business processes. Good
          product management saves your time and makes the customers know
          exactly what they are seeking in the shortest time possible.
        </p>

        <h6>Upgradation and Migration</h6>
        <p>
          Is your existing ecommerce destroying your expansion? We assist
          businesses in Utah to migrate to desirable platforms that assist them
          in achieving their expansion objectives. You might be switching off an
          outdated system or changing to a more sophisticated system; in either
          case, we make the migration level pleasant and hassle-free.
        </p>
        <p>
          All your valuable data, such as the customer, product in form, and the
          order history, is secured during our migration process. Anything that
          we are placing on your new platform is done with care, and it is
          accompanied by an enhancement in site performance and extension of
          capabilities. You will not lose search positions or client information
          in the process of switching.
        </p>
        <h6>Post-Launch Support & Maintenance</h6>
        <p>
          It is not just the start of your ecommerce store. You have us, and we
          are going to keep your site running and performing as you would wish
          it to be. We also perform routine backups, security patches, as well
          as performance observations on an ongoing basis in order to
          troubleshoot trouble before it occurs to your business clients.
        </p>
        <p>
          Something to stop a technical hitch or add functionality? We have a
          strong support team that is prompt to make your store functional. We
          also offer training so you can handle basic updates on your side, as
          we offer the technical maintenance tasks, which require expertise.
        </p>
        <p>
          Our speed and security team closely watches your site. When traffic
          surges during peak seasons or promotions, we can guarantee your store
          is capable of coping with the extra traffic. This steady and constant
          support implies that you can concentrate your efforts on developing
          your business, as we ensure that the technical side is working well.
        </p>
        <h5>Why Choose Us as Your Ecommerce Development Company in Utah?</h5>
        <p>
          Utah businesses need ecommerce partners who understand local markets
          and customer expectations. We combine technical expertise with
          business knowledge to create online stores that succeed in competitive
          markets. Our development approach focuses on building stores that
          convert visitors into customers and generate real revenue growth.
        </p>
        <p>
          Forget cookie-cutter templates. We develop visual masters with
          intuitive interfaces and mobile-first layouts to ensure your site
          represents itself well on everything. Whether you have to open an
          enterprise, a creative product, or a service-centred enterprise, we
          would make your ideation come alive with style and accuracy.
        </p>
        <p>
          We have been shown to be straightforward, precise, on tim,e and with
          you all the way to guarantee your business performance. We're not just
          developers. We're partners invested in your online success and growth
          in the Utah market.
        </p>

        <h6>Tailored E-Commerce Solutions</h6>

        <p>
          All businesses in Utah have their own needs and challenges. We do not
          apply methods that fit only once. We instead consider the time to get
          to know your industry, the targeted customers, and the business
          objectives, and subsequently tailor your ecommerce solution. The
          one-on-one strategy makes your store behave specifically to your case.
        </p>

        <p>
          We will ask about your brand personality, product types ,and customer
          shopping preferences in our custom development process. We design an
          experience for users who are natural to your particular audience. Your
          store design and functionality are exactly in line with the type of
          business you run, whether it is selling handcrafted items or selling
          high-tech equipment.
        </p>
        <h6>CMobile-First, Fast & Responsive Design</h6>
        <p>
          Speed matters in ecommerce. Customers desire pages to be loaded within
          a short period of time, particularly when using mobile devices. We
          make all items in your store work as fast as possible on any device
          and any internet connection. Stores that load very fast keep the
          customers through, and the abandonment rate is low.
        </p>
        <p>
          As our user-friendly design ensures that your shop will fit perfectly
          on all devices and screen sizes. Tablets, smartphones, and desktop
          computers all look great when users are operating them. Our testing is
          comprehensive, across platforms and browsers, to ensure our
          performance is the same anywhere.
        </p>
        <p>
          Image, code, and server settings are also optimised for the greatest
          speed. Fast websites are favoured by search engines and thus speed
          optimization does enhance the user experience as well as search
          ranking. When your store loads fast and operates efficiently,
          customers will spend more time and purchase more.
        </p>
        <h6>SEO-Optimized and Sales-Focused</h6>
        <p>
          It is pointless to build a beautiful store and have the customers
          unable to locate it. We apply optimal practices of SEO and begin at
          the bottom, as well as using clean URLs, optimal meta tags, and speedy
          load time. This assists your Utah business to rank in both local and
          national searches.
        </p>
        <p>
          We are sales-focused, so all design decisions are focused on
          conversion. We develop clear product pages, simple navigation, and
          strong calls-to-action that direct the customer to make purchases. The
          use of shopping cart optimization to minimise abandonment and maximise
          sales that are completed.
        </p>
        <p>
          We also established some analytics, so you would see the interactions
          the customers make on your store. This information will assist you in
          knowing what is already doing well and how you can make even more
          sales after that. Optimization based on concrete data results in
          endless perfect performance.
        </p>
        <h6>Safe, Scalable & Future-Ready</h6>
        <p>
          Security is essential for ecommerce success. We implement multiple
          layers of protection including SSL certificates, secure payment
          processing, and regular security updates. Your customers' personal and
          payment information stays protected from threats and data breaches. We
          build foundations that support long-term growth without requiring
          complete rebuilds.
        </p>

        <p>
          Future-ready development means your store adapts to new technologies
          and changing customer expectations. We use modern coding practices and
          flexible platforms that integrate with new tools and services as they
          become available.
        </p>

        <h6>Transparent Process & Long-Term Support</h6>
        <p>
          In all projects, we believe in clear communication. Nothing but honest
          professional service, which pays attention to your time and budget. We
          do not just fix bugs, and that is our long-term support. We assist you
          in moving with the changes in the markets, introducing new features,
          and optimizing on actual customer data. Consider us as your new,
          continued ecommerce technology provider, not a new vendor.
        </p>
        <p>
          Every day of store management training and documentation is provided
          to enable your staff to take care of day-to-day managerial duties.
          When you require technical support or simply want to enhance features,
          we’re around to provide expert advice and undying implementation
          services.
        </p>
        <h5> Ready to Start Your Utah E-Commerce Development Project?</h5>
        <p>
          The businesses of Utah need ecommerce solutions that can deliver
          actual growth and success. Getting ready to play in an online shopping
          environment or modernising an existing one, Kushel Digi can achieve it
          with the experience and know-how. As a leading ecommerce development
          company in Utah, we have enabled companies throughout Utah to develop
          lucrative e-commerce outlets that have a role to play in the online
          market.
        </p>
        <p>
          Do not allow your rivals to seize an advantage while you're waiting.
          It is now time to begin your ecommerce project. Our team has the
          ability to integrate technical expertise and business-related
          knowledge to produce stores that will make profits immediately. We are
          here to make your company in Utah successful online.
        </p>
        <p>
          Contact us today for a free consultation about your ecommerce business
          in Utah.. Let's discuss your goals, explore your options, and create a
          plan that delivers the online success your business deserves. Your
          profitable ecommerce future starts with the right development partner.
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
