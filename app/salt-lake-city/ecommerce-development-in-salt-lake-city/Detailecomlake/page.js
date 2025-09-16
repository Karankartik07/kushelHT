"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomLake() {
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
          E-commerce Development in Salt Lake City – Where Your Brand Meets
          Smart Conversions
        </h4>
        <p>
          Need professional ecommerce development in Salt Lake City? You're in
          the right place. Kushel Digi solutions creates web-based stores that
          serve your business. We do not simply make nice websites. We construct
          shops that convert visitors into consumers and help your Salt Lake
          City company develop.
        </p>
        <p>
          Your online shop must accommodate your products, your customers, and
          your objectives. Our e-commerce solutions are designed to be exactly
          what you require. You need a slick Shopify site, a robust BigCommerce
          site, or an entirely bespoke ecommerce site; we build it the right
          way.
        </p>
        <p>
          We create websites that run quickly and operate well on computers,
          phones and tablets. It is easy to enable customers to shop using any
          device. We also take care of the key details such as safe payment
          systems and easy product administration. After your site is online,
          our team continues to work on it, updating and improving it
          consistently.
        </p>

        <h5>What You Get with Our E-Commerce Development Services</h5>
        <p>
          By selecting Kushel Digi for your Salt Lake City ecommerce project,
          you are getting a lot more than a website. You receive an end-to-end
          business solution. We do everything, including elegant custom design
          and payment processing and inventory management.
        </p>
        <p>
          Responsive design is part of our e-commerce development services and
          is also quite impressive on any device. We ensure that your shop loads
          fast and offers great shopping experiences. Security is integrated
          into all that we do. Your customers are able to do their shopping
          knowing that their information is safe.
        </p>
        <p>
          We even give you an SEO-friendly structure to ensure that your store
          ranks high in search. This implies that your business will be found
          online by more individuals in Salt Lake City. Our team employs the
          most recent technologies and best practices to create stores that work
          and expand along with your business.
        </p>
        <p>
          We will be with you to make it from planning to launch and beyond.
          Each feature that we create serves a purpose. We are concerned with
          designing stores which turn visitors into customers and make them
          return.
        </p>

        <h5>
          Our E-Commerce Development Services Include Designing a Custom
          E-Commerce Website
        </h5>
        <p>
          We believe your website should tell your unique story. That's why we
          create custom ecommerce designs that fit your brand perfectly. No
          cookie-cutter templates here. Every element is designed with your
          business goals and customer needs in mind.
        </p>
        <h6>Mobile-Friendly Shopping Experience</h6>
        <p>
          The majority of your customers are doing their shopping via their
          phones. That is the way people shop nowadays. We design e-commerce
          websites that are mobile-friendly. Everything is terrific and works
          well when one is using a smartphone, a tablet or a desktop computer.
        </p>
        <p>
          We also test all components on mobile devices to ensure that the
          buttons are functional, that menus in the gadgets are user-friendly,
          and that checkout forms are simple. You will lose sales on a site that
          is difficult to navigate on a mobile phone. An effective site will
          cater to all devices and retain customers who are interested in
          purchasing.
        </p>
        <p>
          We are mobile-first oriented. It implies a one-click checkout option,
          quick load speed, and navigations that work on a small screen. We are
          aiming at making mobile shopping as good as desktop shopping, maybe
          even better. As a mobile-friendly web company, not only will you have
          increased visitors, but you will also convert them into loyal
          customers.
        </p>
        <h6>Adding a Secure Payment Gateway</h6>
        <p>
          Trust is everything when customers are ready to buy online. We connect
          your store to secure and reliable payment processors like PayPal,
          Stripe, Razorpay, and many others. Your customers get multiple secure
          ways to pay including credit cards, debit cards, digital wallets, and
          bank transfers.
        </p>
        <p>
          Our team makes sure information flows smoothly between your store and
          payment systems. Security is our top priority. We use SSL certificates
          and encryption to protect customer data and payment information from
          hackers and fraud attempts.
        </p>
        <p>
          We also make checkout fast and simple. Customers are more likely to
          complete purchases when they don't have to click through lots of
          pages. Our secure payment solutions help build customer trust and
          prevent people from abandoning their carts. Whether your business is
          big or small, safe payments keep customers happy and coming back.
        </p>
        <h6>Product & Inventory Management</h6>
        <p>
          Managing your products shouldn't be complicated. Our smart ecommerce
          solutions give you a clean, easy-to-use dashboard where you can add,
          edit, or remove products anytime. You can upload multiple photos, set
          prices, track inventory, and add different sizes or colors without
          touching any code.
        </p>
        <p>
          We include low stock alerts so you're never caught off guard. Our
          system keeps everything organized and up to date, no matter how many
          products you sell. Need to make bulk changes? No problem. Want to
          organise products into categories or add tags for easier searching?
          We've got you covered.
        </p>
        <p>
          We make the backend simple at Kushel Digi so you can focus on running
          your business. If you use accounting software or ERP systems, we can
          integrate those, too. Good product management saves you time and makes
          shopping easier for your customers.
        </p>
        <h6>Upgradation and Migration</h6>
        <p>
          Does your existing e-commerce system hold you? We can assist in case
          it is slow, lacks features or is simply outdated. We upgrade and
          migrate platforms without any hassle. We take a comprehensive look at
          your existing system and assist you in transferring to a superior and
          quicker, more adaptable system such as Shopify, BigCommerce, Magento,
          or WooCommerce.
        </p>
        <p>
          Does your existing e-commerce system hold you? We can assist in case
          it is slow, lacks features or is simply outdated. We upgrade and
          migrate platforms without any hassle. We take a comprehensive look at
          your existing system and assist you in transferring to a superior and
          quicker, more adaptable system such as Shopify, BigCommerce, Magento,
          or WooCommerce.
        </p>
        <p>
          There is nothing to be concerned about the loss of your SEO positions,
          order history, or user experience. Your new shop will be quicker,
          safer and capable of expanding along with your company. We do not take
          away what you have already established in business online.
        </p>
        <h6> Post-Launch Support & Maintenance</h6>
        <p>
          The opening of your online store is not the culmination of our
          cooperation. We offer continuing assistance so that you can be sure
          that your shop is operating well post-launch. We store and update your
          data, correct bugs, and maintain all your plug-ins and frameworks.
        </p>
        <p>
          Have issues adding new features, have some technical trouble, or need
          to cope with sudden spikes in traffic? We're here for you. The speed
          and the security of your site can also be monitored by us so that
          everything remains fast and secure.
        </p>
        <p>
          Have any questions on how to add new products or change the content?
          Just reach out. You do not need to concern yourself with downtimes and
          features that are no longer up-to-date when you work with us. Our team
          strives to ensure that your online store expands perfectly as your
          business.
        </p>
        <h5>
          Why Choose Us as Your E-Commerce Development Company in Salt Lake
          City?
        </h5>
        <p>
          To make sales, creating an online store that is visually attractive is
          not sufficient. It is all about making it quick, safe, convenient, and
          aimed at transforming visitors into clients. That's where we shine. We
          assist Salt Lake City companies to build custom websites that are
          responsive, secure, mobile friendly and search engine optimized.
        </p>
        <p>
          Whether you are constructing a new store, upgrading an existing store
          or switching to a better platform, we will be by your side at all
          times. We ensure that your online store is prepared to compete and
          succeed on the Web. We do it all; be it design, development, SEO or
          security.
        </p>
        <p>
          We are clear, sincere, and well informed of your objectives in
          everything we do. This is why you need to hire us to do your Salt Lake
          City ecommerce project.
        </p>
        <h6>Tailored E-Commerce Solutions</h6>

        <p>
          We are aware that all businesses are unique. That is why we do not
          apply the same method to everybody. When constructing your e-commerce,
          we ensure that it is adorned to your products, your brand identity and
          what your customers anticipate.
        </p>

        <p>
          We are aware that all businesses are unique. That is why we do not
          apply the same method to everybody. When constructing your e-commerce,
          we ensure that it is adorned to your products, your brand identity and
          what your customers anticipate.
        </p>
        <p>
          Then we apply that knowledge to build you an online store that works.
          Everything is purpose-built, whether it is custom UI/UX design or
          robust backend capabilities. We desire that you outshine competitors,
          sell more products, and grow better.
        </p>
        <h6>Mobile-First, Fast & Responsive Design</h6>
        <p>
          More than 70 percent of customers shop using their mobile phones. This
          is why we create mobile-first websites based on e-commerce that build
          fast and functional e-commerce websites on all devices. The customer
          receives a hassle-free experience as they shop on their tablet
          computers, phones, and tablets.
        </p>
        <p>
          We do everything to maximize the page loading speed, location of
          buttons and more to ensure people stay entertained and feel directed
          to the checkout. The outcome is an increase in sales and a reduction
          in the number of those who leave your site.
        </p>
        <p>
          We have clean and modern designs, which are user-friendly. They are
          designed keeping your target group in mind. We do cross-testing in
          various browsers and screen sizes to ensure that everything works all
          the time.
        </p>
        <h6>SEO-Optimized and Sales-Focused</h6>
        <p>
          There is no use having a beautiful site when no one can locate it.
          That is why we SEO everything at the beginning. All the aspects are
          designed in consideration of search engines, including clean URLs and
          meta tags, high loading speed and mobile appearance.
        </p>
        <p>
          But we don't stop there. We dwell on conversion-oriented design. It
          implies precise call to actions, logical user flow, effortless
          navigation and straightforward processes to check out. We want to do
          more than get visitors to your site, but convert them into customers.
        </p>
        <p>
          We transform the shopping experience to be fun and simple through
          smart filters, product categories, and personal features. This
          develops confidence and boosts sales of your Salt Lake City business.
        </p>
        <h6>Safe, Scalable & Future-Ready</h6>
        <p>
          Security is our highest priority. We use SSL encryption, secure
          payment gateways, and fraud detection technology built right into the
          code to protect every site we build. You can rest easy knowing your
          customers' information is safe with us.
        </p>

        <p>
          Your business should expand, so should your site. That is why we
          develop e-commerce sites that will be scaled up with a rise in
          traffic, product mix, and other functions at the time of requirement.
          No matter what you need to add additional integrations, go global, or
          open stores, we ensure that you are in the right basement the minute
          you start.
        </p>

        <h6>Transparent Process & Long-Term Support</h6>
        <p>
          It must all be open and understandable. We engage you in the process
          and keep you informed during machinery development until the end of
          the project delivery. No surprises. No hidden costs. Only
          understandable communication and reliable output.
        </p>
        <p>
          When your site is live, so isn't the end of our work. We also offer
          continued maintenance, such as code repairs and updates, performance
          monitoring, upgrading the platform, and more. Our aim is to make your
          company remain competitive and to be adaptable to changes in the
          market.
        </p>
        <h5>Ready to Start Your Ecommerce Development in Salt Lake City?</h5>
        <p>
          Are you willing to put your Salt Lake City business online and have a
          unique e-commerce store that works to increase sales? Kushel Digi is
          the one who has the experience and expertise to make it happen. We
          have assisted other businesses in all industries to create effective
          online stores that increase revenue and customer retention.
        </p>
        <p>
          Your competitors are already on the internet. Do not allow them to get
          ahead of you. You can create a new store or renew your existing one;
          either way, we can assist. The combination of technical skills and
          business knowledge enables our team to build ecommerce development in
          Salt Lake City solutions that provide real outcomes.
        </p>
        <p>
          Contact us to schedule a complimentary consultation. We can talk about
          what you want to achieve, what you can do and devise a strategy to
          develop an ecommerce development in Salt Lake City. The right
          development partner is the key to your success online, and we are
          willing to become your development partner.
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
