"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailBigCom() {
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
          BigCommerce Development Company in Noida – Build a Powerful Online
          Store with Us
        </h4>
        <p>
          Are you dreaming of an online store? BigCommerce is the best platform
          out there, and we’re ready to help turn your dream online business
          into reality. As a prominent BigCommerce development company in Noida,
          we create fast, responsive, secure, mobile-friendly, and
          easy-to-navigate ecommerce stores that help in increasing conversions.
        </p>
        <p>
          Our skilled workers know everything there is to know about
          BigCommerce. We'll do everything for you, from setting up your new
          store to adding features that are unique to you and linking it to
          other services.
        </p>
        <p>
          We make sure that your store works well on all devices and looks
          great. Additionally, it loads quickly and makes shopping a nice
          experience for your customers. We don't use pre-made designs because
          every business is different. Instead, we make ecommerce websites that
          are just right for each client.
        </p>
        <p>
          Our professional team takes the time to learn about your business
          goals, customers, and objectives. We can make everything for you, from
          simple lists of products to complex changes.
        </p>
        <p>
          Get in touch with us right away to get a price quote and talk about
          your website creation needs.
        </p>
        <h5>What We Offer in BigCommerce Development Services?</h5>
        <p>
          As the best BigCommerce development business in Noida, we do
          everything for you, from setting up your online store to making it
          more profitable over time. We will help you in any way we can, whether
          you are just starting or want to improve the site you already have.
        </p>
        <p>
          We design BigCommerce stores that are fast, secure, responsive, easy
          to navigate, mobile-friendly and are simple to run. We also integrate
          third-party tools like payment gateways, custom themes, add-on plugins
          and many more for the smooth functioning of your BigCommerce store.
        </p>
        <p>
          What's the best thing? We listen to what you have to say, learn about
          your business, and then we work out ways to help you reach your goals.
          There is no technical speak—only clear communication and real results.
          Just give us a call if you want to grow your online business.
        </p>

        <h5>What BigCommerce Development Services Do We Offer?</h5>
        <h6>Custom BigCommerce Store Design</h6>
        <p>
          Suppose you want your store to stand out, not blend in. You can have a
          custom BigCommerce store design that fits your business and speaks
          directly to your customers. Our Noida-based design team takes the time
          to learn about your business, your ideal users, and your style.
          Everything is made with the user experience and sales in mind, from
          the style of the home page to the design of the product pages.
        </p>
        <p>
          We make sure that your store is not only nice to look at, but also
          works well and is easy to use on phones. We also follow BigCommerce's
          most recent rules, which means your site loads quickly and works well
          on all devices. We'll make your ideas come to life, whether you want a
          simple look or something bold and unique.
        </p>

        <p>
          People will keep coming back to your store because it looks nice and
          is easy to use. Because a good website makes your business look good.
          Make your online store something you're happy to show off.
        </p>
        <h5>BigCommerce Store Setup & Configuration</h5>
        <p>
          Beginning from scratch? We'll take care of everything, so don't worry.
          Our service for setting up your BigCommerce store includes full
          installation, design, and customisation based on the needs of your
          business. We'll help you pick the right style, set up your shipping
          rules, payment systems, the order of your product groups, and more.
        </p>
        <p>
          We make sure that your store is ready for real people to shop there.
          Our back-end system and your front-end style are both clean, simple,
          and easy to use. There are no hard-to-find choices or settings in this
          store; it's just built to grow with you.
        </p>
        <p>
          Our team will help you move your info from another site so you don't
          lose anything. When we give it to you, your BigCommerce store will be
          fully working, safe, and ready for the world to see. And if you get
          stuck, you can call our helpful team at any time. We make it easy and
          stress-free for you to open an online store.
        </p>

        <h5>Theme Customization and UX Improvements</h5>
        <p>
          Do you wish to change the theme in your BigCommerce shop, or do you
          already have one? Don't worry; we're here to assist you with anything.
          We can tweak, enhance, or completely change the layout of your
          BigCommerce shop using our theme customisation services.
        </p>

        <p>
          We can change the colors, shift things around, make your site easier
          to use on mobile devices, or add features that are just available to
          your company. We don't only make your site seem nice; we also focus on
          user experience (UX) to make sure that visitors can easily navigate
          and engage with it. We make sure that the design is clear, consistent,
          and focused on getting people to go from the site to the checkout. If
          your current store seems slow, antiquated, or hard to comprehend, it
          could be time for a UX overhaul.
        </p>
        <p>
          We make it easy. Our developers know what works in eCommerce design
          and how small adjustments may have a big effect. If you make the UX
          better, your customers will stay longer, purchase more, and trust your
          company. Let's turn your usual theme into something spectacular that
          genuinely shows off your business.
        </p>

        <h5>BigCommerce App & Plugin Integration</h5>
        <p>
          Do you want to make your BigCommerce store better? We'll take care of
          you. We help you connect and add the right apps for your needs,
          whether it's a payment method, an inventory system, a CRM, an email
          marketing tool, or an analytics plugin. BigCommerce has a lot of
          powerful third-party apps, but it can be hard to pick the right ones
          and set them up.
        </p>
        <p>
          Our Noida team helps you choose the best ones, sets them up properly,
          and makes sure they work well with what you already have. We can also
          assist you in identifying connections that fit with your particular
          concept. Your shop can do more with our aid. We can help you in
          choosing items, interact with you, set up automated systems, and hold
          reviews.
        </p>
        <p>
          We make sure nothing breaks or gets in the way. As a result? A smart
          online store with lots of features that works quickly and saves you
          time. Do what you need to do to grow your business while we take care
          of the tech. Better tools lead to better performance and outcomes.
        </p>

        <h5>Making BigCommerce Stores SEO-Friendly</h5>
        <p>
          Why have a great online store if no one can find it? That's why SEO is
          important. Our team can help you improve your BigCommerce store's
          Google ranking and get more people to visit. We take care of
          everything that helps your site stand out, from keyword study to
          product descriptions and picture alt tags to meta names.
        </p>

        <p>
          We also make the site's layout, URLs, internal links, and page speed
          better. Search engine algorithms change all the time, but we stay on
          top of them so that your site stays ahead of the rest. Our SEO
          services aren't just for quick fixes; they're meant to last. When you
          open a new store or make changes to an old one, we make sure the SEO
          is done right from the start.
        </p>

        <p>
          More traffic means more sales, and more traffic means more sales.
          We'll make sure that your BigCommerce store looks great and is simple
          for people to find.
        </p>

        <h5>Support and Maintenance that Lasts</h5>
        <p>
          Web pages are never really "done." When tech gets better, things
          change and sometimes break. That's why we offer help and care for your
          BigCommerce store all the time. We're always here to help with new
          features, solving bugs, changing styles, or making the site run
          faster.
        </p>
        <p>
          You don't have to worry about problems with the back end, plugins, or
          slow load times. Our support team makes sure that your site is always
          up to date with the newest features and is working smoothly. As
          needed, we can also update your content, make changes based on the
          seasons, and connect your marketing.
        </p>
        <p>
          We're like your tech partner; we're always making sure your store
          works right. No tech speak or long wait times—just quick, helpful help
          when you need it most. Because you need to feel safe about your work,
          and we're here to give it to you.
        </p>
        {/* <p>
          Our Upgradation & Migration services include consultation, analysis,
          planning, design, development, testing, and deployment. We also
          provide ongoing maintenance and support to ensure your upgraded or
          migrated application runs smoothly and efficiently. Contact us today
          to learn more about our Upgradation & Migration services and how we
          can help you upgrade and migrate your web applications seamlessly.
        </p> */}

        <h5>
          What Makes Us the Right Choice for BigCommerce Development in Noida?
        </h5>
        <p>
          It is important to pick the best BigCommerce development agencies when
          you are thinking of creating an online store. We are here to help you
          with that. As a reliable BigCommerce development in Noida, we help
          companies in building fast, responsive, mobile-friendly,
          SEO-optimized, and easy-to-navigate BigCommerce stores that drive
          sales from the launch day itself.
        </p>
        <p>
          We also integrate third-party tools like payment gateways, custom
          themes, add-on features, and many more for a seamless user experience.
          We don't just make websites; we also make full shopping experiences
          that help your business grow and succeed.
        </p>
        <p>
          We help startups, small businesses, and even established ones. We
          believe in clear talks, clear deadlines, keeping things easy, and
          results that speak.
        </p>
        <p>
          This is why we might be the best choice for your eCommerce journey:
        </p>
        <h5>Experience That Matters</h5>
        <p>
          It doesn't matter what size business you have; we know what works. Our
          team has used BigCommerce for years, so they know how to make shops
          that are both useful and nice to look at. We don't just use themes or
          quick fixes.
        </p>
        <p>
          Before we build anything, we learn a lot about your business, your
          goals, and your crowd. This means that your store isn't just another
          website; it's a one-of-a-kind answer made just for you. We've done it
          all, from selling products to integrating payment systems, so we know
          how to do it right the first time.
        </p>
        <p>
          We also keep up with the newest BigCommerce features and changes, so
          your online store is always the most up-to-date, safe, and useful one
          possible. You should have a team that knows what they're doing for
          your business, not just a basic setting.
        </p>
        <p>What we bring to the table is just that.</p>

        <h5>Custom Solutions Made for Your Business</h5>
        <p>
          We don't believe that "one size fits all" when it comes to eCommerce.
          Your website should indicate that your firm has distinct products,
          objectives, and consumer needs. That's why we provide BigCommerce
          development services that are suited to how your company operates.
        </p>
        <p>
          We can make it exactly the way you want it, whether you need a bold
          design, custom product filters, support for multiple languages, or a
          different way to ship items. Our team takes the time to learn
          everything there is to know about your business. This way, the end
          result helps you get more people and make the brand experience better.
        </p>

        <p>
          We do more than make things look good. We also make sure they work
          great for you and your users.
        </p>

        <p>
          We'll create a system that works for your business and grows as it
          does, whether you sell ten items or ten thousand.
        </p>
        <h5>User-Friendly, Mobile-Optimized Stores</h5>
        <p>
          More than half of your customers shop from their phones these days, so
          we make sure that every BigCommerce store we build is fully
          mobile-responsive. Your website will look and work great on any
          screen, whether it's a desktop, tablet, or phone.
        </p>

        <p>
          We pay special attention to speed, layout, and navigation so that
          users have a smooth shopping experience no matter where they are. A
          mobile-optimized store means fewer drop-offs, happier customers, and
          higher sales.
        </p>
        <p>
          We also make the shopping process easier by simplifying the steps from
          product discovery to checkout. Our goal is always to create an
          enjoyable, hassle-free experience for your users. After all, the
          easier it is to shop, the more likely they are to buy. With us, your
          BigCommerce site won't just work; it'll work beautifully everywhere.
        </p>
        <h5>Speed and SEO Improvements</h5>

        <p>
          It's great to have an attractive store, but if it's not fast or not
          visible, then of no use. There comes the SEO part, SEO optimization is
          a very crucial part in BigCommerce development services, so that your
          website will be visible on Google and can generate real and targeted
          traffic.
        </p>
        <p>
          Use clean code, make sure run times are fast, and make sure URLs and
          meta tags are optimized. These are the best ways to do SEO these days.
          To make sure it works well, we also use light code, shrink pictures,
          and test our speed on all of them. We don't take risks because a delay
          of even one second can hurt sales. Your BigCommerce store will be
          quick, reliable, and easy to find if you use our way. Each customer
          and search engine will adore your company. This helps you in every way
          when you're online.
        </p>
        <h5>Friendly Support Service Even After the Launch</h5>
        <p>
          We'll still be here after your website goes live. In fact, we really
          start helping you after launch. We do regular maintenance, give you
          information, and are here to help you whenever you need it.
        </p>
        <p>
          We're always here to help, whether you need us to fix a bug, make
          changes to your content, or add new features. People, not just
          platforms, are what we want to build over time. You can chat with us,
          call us, or email us, whichever works best for you.
        </p>
        <p>
          We use basic words that are easy to understand and reply to right
          away, so you never have to wait. If you have any technical issues
          while running your online company, our expert team is here to help.
          You're not simply getting a service provider when you work with us;
          you're getting a partner who will assist you with your eCommerce
          journey.
        </p>
        <p>
          We are a reputable BigCommerce development company in Noida, and we
          offer to provide you high-quality BigCommerce development services at
          a reasonable price so you can get the most for your money and have a
          strong online presence.
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
