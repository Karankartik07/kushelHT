"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomDevDubai() {
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
        initialCountry: "ae",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("ae"));
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

    if (phoneDigitsOnly.length !== 9) {
      toast.error("Phone number must be exactly 9 digits!");
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
          E-Commerce Website Development Dubai – Create Online Stores That Sell
        </h4>
        <p>
          Want skilled ecommerce website development Dubai? We can help you
          create custom ecommerce websites that work well for your business, are
          easy to use, and generate a lot of sales. Magento, Shopify,
          WooCommerce, and BigCommerce are just a few of the famous platforms
          that our skilled staff works with. If you don't know which platform to
          pick, we'll help you find the best one for long-term luck.
        </p>
        <p>
          The most important part of your online business is your blog. Because
          of this, the shops we make are clean, new, and easy to use. A website
          that is well-organized keeps people interested and makes them more
          likely to buy something.
        </p>
        <p>
          We pay attention to how fast, safe, and well things work on mobile
          devices. We make sure that every ecommerce site we build is search
          engine-friendly so that it gets more clicks and sales. Checkout is
          quick and safe, and we make sure that everything works well in your
          shop.
        </p>
        <p>
          We keep working after the day starts. We offer regular marketing,
          maintenance, and changes to help your business stay competitive in
          Dubai's online market, which is growing very quickly.
        </p>
        <p>
          If you have an idea for a business, you can make it happen. Get in
          touch with us right away to set up a free meeting and start making
          money with your online store in Dubai.
        </p>
        <h5>Trusted E-Commerce Website Development Services in Dubai</h5>
        <p>
          We can build businesses in Dubai, skilled ecommerce sites that will
          help them grow online. Our only goal is to make websites that sell
          things, look great, and load quickly. We make everything from easy
          websites to complex online shops.
        </p>
        <p>
          Some of the things we do for website creation are custom design,
          mobile-friendly layouts, CMS development, landing pages, and full
          ecommerce development. Every site we build is safe, good for SEO, and
          works well. Most people shop on their phones and computers these days,
          so we make sure that your store works well on all of them.
        </p>
        <p>
          We don't finish what we begin. Maintenance, changes, and marketing
          tools are some of the things we offer to help your business stay ahead
          in Dubai's fast-paced digital market. Join me as we build your online
          business. Get in touch with us right away to begin creating your Dubai
          ecommerce site.
        </p>

        <h5>Our Complete E-Commerce Development Services in Dubai:</h5>
        <h6>Custom Web Design for Your Business</h6>
        <p>
          It's the first thing people see about your business, so make sure it
          looks good and stands out. For unique web design in Dubai, we don't
          just use themes that have already been made. We make websites that are
          tailored to the goals of your business and nothing else.
        </p>
        <p>
          Your website should tell a story about your business that no one else
          does. Our team helps you make up-to-date plans, get people to join,
          and make them happen. The site will look great and work well if the
          code is clean, the style is good for SEO, and it works on phones.
        </p>

        <p>
          We can make things that work and can grow with your business, whether
          you want a portfolio, a business website, or a big store.
        </p>
        <h5>E-Commerce Website Development in Dubai</h5>
        <p>
          Having a website that looks good isn't enough if you want to sell
          things online. As part of our ecommerce website making services in
          Dubai, we make online shops that are safe, scalable, and designed to
          make more sales. We have safe ways for you to pay and pages for your
          goods that are easy to find your way around.
        </p>
        <p>
          We've got you covered with Shopify, WooCommerce, BigCommerce, and
          Magento, so you can count on finding the perfect tool for what you
          need. We want our customers to be happy, so we focus on being quick,
          safe, and making checkout super easy. Your design and SEO work always
          look awesome on mobile devices.
        </p>
        <p>
          This makes sure that your store works well and ranks well. A web store
          will help you get more customers and sell more of your goods.
        </p>

        <h5> Mobile-Responsive Website Design</h5>
        <p>
          A lot of people who shop online do it on their phones. It's no longer
          a nice-to-have to have a mobile-friendly website; it's the rule.
          Websites that look great on phones, tablets, and computers are made by
          our skilled team in Dubai. Because phones are so small, we don't try
          to make PC sites fit on them. Instead, we make designs that work best
          on phones. It's easier for busy people to check out, and the photos
          look better.
        </p>

        <p>
          If you can make changes to your site, your SEO will become better, and
          more people will be able to find you on search engines. When you work
          with us, you won't have to worry about having different copies of your
          page. They all look excellent and work well with it.
        </p>
        {/* <p>
          Our secure payment methods help your clients trust you and protect
          them from abandoning your cart, no matter how large or small your
          company is. It made buying things safer and made people happy, so they
          kept coming back.
        </p> */}

        <h5>Website Redesign Services</h5>
        <p>
          If your website seems old-school or takes forever to load, you might
          be losing out on customers. We’re all about giving your website a
          fresh new look in Dubai to revamp your online vibe. We check out your
          current site, keep the good stuff, and make the not-so-great parts
          better.
        </p>
        <p>
          We’re all about giving your site a fresh look, speeding things up, and
          making navigation a breeze, so it feels modern and easy to use. A
          fresh website design helps build customer trust, keeps people
          interested, and can boost those conversions.
        </p>
        <p>
          When we update, we keep SEO in mind so that your results stay high.
          Our team can give you a new, powerful website that fits your needs,
          whether you just need a few tweaks or a full makeover.
        </p>

        <h5>Easy-to-Manage CMS Websites</h5>
        <p>
          Taking care of your site should be easy. Our CMS website development
          services in Dubai let you manage your site easily, no coding skills
          needed. We team up with platforms like WordPress, Joomla, and a few
          others to whip up websites that are super easy to update.
        </p>

        <p>
          Post new blogs, throw up some images, tweak your content, or handle
          your pages—all on your own. This is great for small businesses,
          startups, and blogs looking for some freedom and flexibility. CMS
          websites are super secure, can easily scale up, and are designed to
          grow alongside your business.
        </p>

        <p>
          And hey, we offer training to make sure you feel good about managing
          your site. Your website is totally in your hands with a CMS solution.
        </p>

        <h5> Landing Page Design That Converts</h5>
        <p>
          Thinking about running some ads or kicking off a new campaign? A
          landing page can totally change the game for your results. In Dubai,
          we whip up landing pages that are designed to really get those
          conversions going.
        </p>
        <p>
          We're all about making layouts that are easy to read, visuals that
          pop, and calls-to-action that really catch your eye and get people to
          take that next step—whether it's making a purchase, signing up, or
          reaching out to you.
        </p>
        <p>
          Every landing page we make is mobile-friendly and quick to load, so
          you won't lose out on customers who might be interested. You can make
          sure you get the most out of your ads by doing A/B testing and tuning.
        </p>
        <p>You need a good landing page to get a good return on your money.</p>

        <h5>Why Choose Us as Your E-Commerce Development Company in Dubai? </h5>
        <p>
          If you're looking to kick off or revamp your online store, having a
          buddy who gets the tech side and the business side is key. That's
          where we step in to lend a hand! We're a reliable ecommerce
          development company in Dubai, building online stores that are smart,
          secure, and super user-friendly. We dig design, but we’re also all
          about how things function and the results we get.
        </p>
        <p>
          We've got you covered with everything from planning and design to
          development and support.
        </p>
        <p>
          We team up with tons of businesses in Dubai to help them turn their
          ecommerce dreams into reality. We create more than just websites; we
          also whip up stuff that helps your business thrive.
        </p>
        <h5>Custom Solutions for Every Business</h5>
        <p>
          Your online store should totally show off what makes your business
          unique. We've got custom ecommerce solutions in Dubai that fit your
          brand, products, and goals perfectly. No matter if you're into
          fashion, electronics, handmade stuff, or digital goods, we’ll help
          your website show off what makes you stand out.
        </p>
        <p>
          We’re all about more than just good looks—our websites are built for
          easy use, whether you’re just browsing or ready to check out. We take
          the time to get to know your business model, who your audience is, and
          what your growth goals are.
        </p>
        <p>
          This lets us create a custom online store that looks great and helps
          boost sales. So, what's the outcome?
        </p>
        <p>
          A great online store that does what you need and makes you stand out
          in Dubai's crowded market..
        </p>
        {/* <p>
          We want you to stay ahead of the rest, sell more, and grow quickly.
        </p> */}
        <h5> Expertise Across Leading E-Commerce Platforms</h5>
        <p>
          When it comes to building ecommerce websites in Dubai, we’ve got
          options for you beyond just one platform. We’re familiar with Shopify,
          WooCommerce, Magento, BigCommerce, and many other platforms.
        </p>
        <p>
          Every platform has its perks, and we're here to help you pick the one
          that suits your budget and business style the best. Shopify is super
          easy to use, WooCommerce gives you a lot of options, Magento packs a
          punch, and BigCommerce can grow with you.
        </p>

        <p>
          We break down the good and bad in easy-to-understand terms, helping
          you make the best choice. After you pick the platform, we’ll get you
          all set up with everything for your store, like product listings and
          plugins.
        </p>

        <p>
          Are you considering changing platforms down the line? We've got you
          covered. You'll get a reliable ecommerce store with us that's ready to
          grow with your business.
        </p>
        <h5>SEO-Friendly and Mobile-Optimized Stores</h5>
        <p>
          A website hits the mark when people can easily find and use it. That's
          why our ecommerce development services in Dubai always come with
          SEO-friendly coding and mobile optimization. We stick to SEO best
          practices to help your site rank high on Google and bring in organic
          traffic.
        </p>

        <p>
          We handle everything from site speed to cool URLs, images, and
          layouts—every little detail is covered. Plus, we make sure your store
          runs smoothly on all devices—smartphones, tablets, and desktops. In
          today's world, where everyone is on their phones, this is super
          important. No matter if your customers are shopping on the move or
          chilling at home, it'll all flow smoothly.
        </p>
        <p>
          So, what’s the outcome? More people are checking it out, sticking
          around longer, and boosting those sales. We help online stores grow
          and stand out, not just build them.
        </p>
        <h5>Easy User Experience and Fast Checkout</h5>

        <p>
          If your website's tough to navigate or super slow, it could really
          hurt your sales. We just want to make your experience super chill by
          keeping the checkout process fast and secure. We keep it super simple
          for folks to navigate, so they can check out your stuff and grab what
          they want without any hassle. Our streamlined checkout makes it super
          quick and easy, so you won't ditch your cart.
        </p>
        <p>
          In Dubai, customers can pay with cards, wallets, or cash on
          delivery—we’ve got all the payment options covered for your business.
          We check every step before launching to make sure everything works
          just right. Our designs make shopping a breeze for your customers,
          helping them come back for more and building their loyalty. A solid
          user experience not only helps sales but also creates trust in your
          brand.
        </p>
        <h5> Dependable Support and Maintenance in Dubai</h5>
        <p>
          Getting your online business up and running is just the start; now you
          gotta make sure it runs smoothly. We offer support and management
          services in Dubai to help you keep your e-commerce site running
          easily, looking great, and staying safe. Now that the issues are
          sorted out, you can just chill and focus on growing your business.
        </p>
        <p>
          We'll make sure everything's running smoothly and handle the latest
          security updates for you. Want to make your content look a little
          different, add some cool features, or speed things up? Our awesome
          team is just a call away whenever you need us. With proactive care,
          you can chill knowing there won’t be any downtime or surprise
          problems.
        </p>
        <p>
          We’re all about creating websites and forming lasting partnerships.
          Enjoy the peace of mind your business deserves with our reliable
          ecommerce website development Dubai services.
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
                if (digits.length <= 9) {
                  e.target.value = digits;
                } else {
                  e.target.value = digits.slice(0, 9);
                  toast.error("Only 9 digit phone number allowed!");
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
