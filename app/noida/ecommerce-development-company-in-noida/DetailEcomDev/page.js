"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomDev() {
  const [formData, setFormData] = useState({
    name2: "",
    email2: "",
    phone2:"",
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
      setFormData({ name2: "", email2: "", message2: "",phone2:"" });
      if (phoneInputRef.current) phoneInputRef.current.value = "";
      generateCaptcha();
    }
  };

  return (
    <section className="details-sec">
      <div className="details-desc">
        <h4>
          E-Commerce Development Company in Noida – Build Your Online Store with
          Experts
        </h4>
        <p>
          Looking for a reliable ecommerce development company in Noida? We are
          here to help you in creating custom, sales-driven and development
          services for all kinds of e-commerce websites. As a trusted ecommerce
          development agency in Noida, we work with all popular platforms like
          Shopify, WooCommerce, BigCommerce and Magento and many more. We help
          businesses choose between the platforms to get the best results.{" "}
        </p>
        <p>
          We understand that your website is your brand’s face and it should
          look attractive and pleasing so that the customer stays long. Our
          expert team works in detail with you to understand your brand needs,
          target audience and business objectives to get the best outcomes.
        </p>
        <p>
          To make sure your e-commerce shop functions quickly and smoothly, our
          developers concentrate on speed, security, user experience, and
          performance. We create websites that work well on mobile devices first
          and use the greatest SEO techniques to gain more conversions.
        </p>
        <p>
          We also provide help after launch, ongoing maintenance, and marketing
          tools to help your online company stay ahead of the competition.
        </p>
        <p>
          Let's turn your concept into a profitable internet business that
          sells. Call us now to talk about your project and obtain a free
          consultation. We're just a phone call away from making your ecommerce
          dreams come true!
        </p>
        <h5>
          What We Offer in E-Commerce Development – Noida’s Trusted Services
        </h5>
        <p>
          To assist your company in expanding its online presence, we provide a
          wide variety of website design services. From a basic website to a
          fully functional online shop, we can assist you with it all.
        </p>
        <p>
          We offer a wide range of services, including custom website design,
          responsive layouts, content management system development, ecommerce
          website development, landing page design, and website redesign. We
          also make sure your website loads quickly, has code that is good for
          SEO, and is hosted safely.
        </p>
        <p>
          Every website we make works well on phones and is easy for people to
          use. We create websites that fit your brand and business goals for
          both small and big companies. We can help you create a website that
          really does what you want it to do.
        </p>

        <h5>Complete E-Commerce Development Services in Noida Include:</h5>
        <h6>Custom Website Development</h6>
        <p>
          We design fully customized websites according to your business goals
          and target audience. We don't believe in pre-made templates. As every
          business is different, their goals are different, so why not their
          online shops?
        </p>
        <p>
          Custom-designed websites are more attractive, tailored to business
          goals, unique and drive more conversions. Whether it’s a portfolio,
          business site, or something unique, we will design a clean code
          website.
        </p>

        <p>
          You don't need to learn a single line of code; we will guide you with
          every step, and your website will do exactly what you want from it.
        </p>
        <h5> E-Commerce Website Development</h5>
        <p>
          Want to sell online? We’ve got you covered! Our e-commerce website
          development in Noida helps businesses to build their dream online
          shop, including product pages, and to set up secure payment gateway
          integration. We work with most of the popular platforms like
          BigCommerce, WooCommerce, Shopify and Magento.
        </p>
        <p>
          Our expert team helps businesses in choosing the right platform
          according to their business goals. Our goal? To help you in crafting a
          fast, responsive, secure, mobile-friendly, SEO optimized and
          attractive e-commerce website that attracts users' attention and gets
          higher conversions.
        </p>
        <p>
          We'll even add SEO-friendly features to help your store show up on
          Google. Let’s build your online shop the right way!
        </p>

        <h5>Responsive Web Design</h5>
        <p>
          These days, most of the visitors are mobile or tablet users. So, we
          create mobile-responsive e-commerce stores that work smoothly on all
          devices. Our reliable e-commerce development agency in Noida helps
          your site adjust automatically; we don't shrink the website layout to
          fit the screen size, rather, we design different layouts according to
          the screen size so that visitors find it smooth and engaging.
        </p>

        {/* <p>
          We use the latest web technologies like Service Workers, Web Push
          Notifications, and App Shell architecture to create PWAs that load
          instantly, work offline, and can be installed on the home screen of a
          user's device. Our PWAs are secure, responsive, and scalable, allowing
          businesses to reach their target audience on any device or platform.
        </p> */}
        <p>
          A responsive website helps in increasing SEO ranking, which results in
          a higher Google ranking. With us, you don’t need separate mobile and
          desktop versions—just one powerful website that does it all.
        </p>

        <h5>Website Redesign Services</h5>
        <p>
          Already have a website but not getting what you want? It might look
          old or take too long to load. We can help! Our Noida website makeover
          service focuses on making the style, speed, and experience of the
          customer better.
        </p>
        <p>
          We'll look at what's working, fix what's not, and give you a new look
          that fits your new goals. We'll make your site more current, faster,
          and more useful, whether you need better navigation, a new plan, or a
          whole new look.
        </p>
        <p>
          We also think about SEO, so your ranks won't go down. A new website
          can be all you need to start over online.
        </p>

        <h5>Building websites with a CMS</h5>
        <p>
          Want to make changes to your website without having to call a writer
          each time? We use WordPress, Joomla, or any other tool you choose to
          make CMS (Content Management System) websites that are easy to handle.
        </p>

        <p>
          You won't have to touch any code to add blog posts, change text,
          publish images, or take care of pages. Small businesses, blogs, and
          new companies that want full control over their website will love
          this. Our CMS websites are safe, flexible, and made to grow as your
          business does.
        </p>

        <p>
          We'll also teach you how to use your CMS panel with confidence. That's
          how a website should be: easy to use, flexible, and all yours.
        </p>

        <h5>Landing Page Design & Development</h5>
        <p>
          Do you need a landing page that will get a lot of people to buy a
          product, sign up for an ad campaign, or get leads? We make bespoke
          landing pages that are meant to get people to notice and do something.
        </p>
        <p>
          Our Noida team works on making things seem good, having compelling
          calls to action, and loading quickly. We'll develop a page that gets
          people to click, sign up, or purchase, whether it's for Google Ads,
          social media ads, or email marketing.
        </p>
        <p>
          We also make sure that our sites work well on mobile devices and use
          A/B testing to make them better over time.
        </p>
        <p>
          A good landing page makes all the difference if you're running
          sponsored advertisements, and we know how to develop one that
          succeeds.
        </p>

        <h5>
          What Makes Us the Best E-Commerce Development Company in Noida? 
        </h5>
        <p>
          You need a partner you can trust who knows both business and
          technology when you open or improve your online store. That's where we
          come in. Because we are a reliable ecommerce development business in
          Noida, we build online stores that are smart, easy to use, and get
          results.
        </p>
        <p>
          Our only goal is to help you grow your business by giving you a
          website that works better than it looks. We do everything, from
          planning and building to helping after the start.Businesses in and
          around Noida choose us to make their ecommerce ideas come to life
          because:
        </p>
        <h5>Custom Solutions for Your Unique Business</h5>
        <p>
          Since every business is different, why use a website that only works
          for one type of business? Your brand's attitude, goods, and goals
          should show up in your online shop. That's why we make ecommerce
          products that are unique to your business.
        </p>
        <p>
          We create a website that talks to your community and helps you run
          your business, whether you're selling clothes, electronics, handmade
          goods, or digital goods. We don't just care about how it looks; we
          also make sure that it works well, from the product pages to the
          checkout.
        </p>
        <p>
          So that your website works the way you need it to, our team takes the
          time to learn about your business.
        </p>
        <p>
          How did it turn out? Made just for you, this ecommerce site is one of
          a kind and very powerful.
        </p>

        <h5>Expertise in Multiple E-Commerce Platforms</h5>
        <p>
          You don't have to stick to one site. We have expertise for all of
          them, whether you favour Shopify because it's simple to use,
          WooCommerce because it's adaptable, Magento because it's strong, or
          BigCommerce because it can expand with your company.
        </p>
        <p>
          Our experts in Noida can assist you in choosing the ideal tool for
          your money, company objectives, and goods. This way, you can be
          confident of what you desire. We'll speak about the good and bad
          things in simple language.
        </p>

        <p>
          Next, we'll start building a powerful online shop with everything you
          need to sell, manage, and grow. We handle everything, from adding new
          goods to setting up plugins.
        </p>

        <p>
          Are you going to switch platforms at any point? We can also assist
          with it.
        </p>
        <h5>SEO-Optimized and Mobile-Friendly Design</h5>
        <p>
          If no one can locate your business, why bother making it appear nice?
          We always think about SEO best practices when we make our ecommerce
          sites. We make it easier for Google and your visitors to discover you
          by speeding up your site, changing its structure, URLs, and photos.
        </p>

        <p>
          We also make sure that your online store looks and works great on
          phones, tablets, and computers because the world is mobile-first these
          days. Whether someone is looking around during lunch or shopping at
          midnight, the process will always be smooth and quick. This makes
          people stay on your site longer, which leads to more sales and happy
          customers who keep coming back.
        </p>
        <p>
          When you work with us, we don't just build your store; we make it
          work.
        </p>
        <h5> A smooth User Experience and Quick Checkout</h5>

        <p>
          If your website is hard to use, it might damage your sales. Because of
          this, we put a lot of effort into making sure that the user experience
          is flawless from the site to the final checkout. We make it easy for
          everyone to use, including visitors who are coming for the first time,
          by making it quick to find what you're looking for and promoting your
          items.
        </p>
        <p>
          Customers don't leave their carts since our checkout procedure is
          simple, fast, and safe. This boosts sales. It will be easy for you to
          add all of your payment options, such as cash on delivery, online
          payments, or wallets. We also test every feature before it goes live
          to make sure there are no issues. Our main goal is to make the process
          go as smoothly as possible so that your customers are happy.
        </p>
        <h5> Ongoing Support and Maintenance You Can Count On</h5>
        <p>
          Launching your ecommerce website is just the beginning. We stay with
          you even after your site goes live. Our team provides ongoing support,
          regular updates, performance checks, and quick fixes if anything goes
          wrong. You can always text or call us if you need us to add new
          features, fix bugs, or make your site faster.
        </p>
        <p>
          You don't need to do everything by yourself. With our care plans, your
          website will stay safe, up-to-date, and ready for more users. We want
          to be your IT partner for life and help you do well. We're here to
          help you as you grow.
        </p>
        <p>
          Choose us, the leading ecommerce development company in Noida, to
          build an ecommerce store that not only looks great but truly sells.
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
                 className="form-input resize-none textFormArea"
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
