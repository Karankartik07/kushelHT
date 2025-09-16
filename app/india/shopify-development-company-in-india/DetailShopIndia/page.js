"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailShopIndia() {
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
          Shopify Development Company in India| Boost Your Online Presence Today
        </h4>
        <p>
          Want to start or grow an online business? That was a smart move! We at
          Kushel Digi Solutions use Shopify to make it even easier for people to
          sell things online. We’re a Shopify development company in India. We
          help you make stores that look good and make more sales.
        </p>
        <p>
          Our team makes sure that your store is easy to use, starts quickly,
          and works well on phones. We handle everything, from making it easy to
          check out to discovering the best apps and features.
        </p>
        <p>
          Your store should show that your company is unique. We build and
          change Shopify stores so they fit your brand's style and goals.
        </p>
        <p>
          Whether your business is brand new or has been around for a while. We
          can help your Shopify store grow with it.
        </p>
        <p>
          We do more than just make websites for a living. You can meet people
          and grow your business online with our help.
        </p>
        <h5>Which Shopify Development Solutions Can We Deliver in India?</h5>
        <p>
          Kushel Digi Solutions takes care of everything when it comes to
          Shopify. Not sure if you want to open a new store or just change the
          way the one you already have looks? We can help. Shopify stores that
          are safe, quick, fast, and very easy to run are what we do. We're here
          to make sure your store looks great and works well. To do this, we add
          new styles and apps and set up different ways to pay.
        </p>
        <p>
          The best part? We do pay attention to you. We make products that fit
          the needs of your business because every business is different. We'll
          help you reach your goals, no matter what they are.
        </p>
        <p>
          Let's keep things simple and clear—just honest talk and real results.
          A great way to grow your online business is to open a Shopify store in
          India.
        </p>

        <h6> Easy Shopify Store Setup & Configuration</h6>
        <p>
          Are you just starting with Shopify? Don't worry, we've got it all
          covered. We connect you with Shopify in India and ensure that
          everything is exactly perfect. We will rearrange everything and set it
          all. We've got you covered when it comes to selecting the proper
          style, determining payment methods, managing delivery, arranging your
          product groups, and a variety of other tasks. Visitors may now stop by
          your shop.
        </p>
        <p>
          Do you feel stressed about moving data from one place to another? Do
          not worry! We'll make sure that your sales, buyers, and product moves
          go smoothly. Your Shopify store will be fully open, running smoothly,
          and ready for business when we're done.
        </p>

        <p>
          Our staff is always here to help you if you need it or are having
          trouble. Getting your Shopify store up and running quickly is easy and
          simple when you work with us.
        </p>
        <h6>Customized Shopify Store Design Just for You</h6>
        <p>
          Your online shop should totally stand out from the crowd. We’re here
          to help you connect with your customers by creating Shopify stores
          that fit your business just right. They get to know your business,
          what you’re selling, and the type of customers you’re looking to
          attract in India. Everything from the home page design to how the
          product pages are set up is all about making sales and keeping the
          customer in focus.
        </p>
        <p>
          It looks awesome on all of them since each style works well on
          different devices. We make sure your store is easy to use and runs
          smoothly.
        </p>
        <p>
          If your Shopify store looks great and is super easy to navigate,
          people will keep coming back for more. It's not only about how it
          looks, but also about boosting your business.
        </p>

        <h6> Shopify Theme Customization</h6>
        <p>
          You already have a Shopify theme, but you want to customize it. Or
          maybe you're considering creating something entirely new? We have the
          ability to customize your Shopify themes and make your store stand
          out.
        </p>

        <p>
          Our Indian team can completely transform the way your company looks
          and feels, add some new features, and make it function more smoothly
          on mobile devices. We care about how things appear and how effectively
          they function for people (UX). That involves making it simple for
          consumers to check out, discover, and purchase items. People are more
          likely to pick up anything that seems clear and uncomplicated. If your
          company seems old or too cluttered, it might be time to change the UX.
        </p>
        <p>
          Changing up how you shop, display your belongings, or check out may be
          quite simple. We'll make sure your Shopify site looks amazing and
          performs efficiently, so your customers will be delighted to purchase.
        </p>

        <h6>Third-Party Apps Integration</h6>
        <p>
          Looking to level up your Shopify store? This is when Shopify apps
          really shine. There are tons of things you can add to Shopify. There
          are ways to keep tabs on your stuff, tools to help with that, and
          software that makes it easy. There are also ways to keep tabs on your
          stuff. Choosing the right ones and getting them set up could be a bit
          tricky.
        </p>
        <p>
          We’re here to help you discover the coolest apps for your business,
          get them set up just right, and ensure they run smoothly with your
          store in India. If you've got the right tools, you can save time,
          boost your sales, and connect with your customers in a bunch of
          different ways. We'll hook up a link between your store and theirs. Is
          that why? A tool that boosts your business, makes things run smoother,
          and frees up your time.
        </p>
        <p>
          Everything went smoothly and worked perfectly. Your Shopify store can
          definitely be more than just a place to shop if you use the right apps
          and tools.
        </p>

        <h6>Dependable Support & Maintenance</h6>
        <p>
          Launching your Shopify store is just the beginning of your journey.
          You need to make sure it's safe, up to date, and running smoothly.
          We're here to lend a hand with Shopify support in India. Whenever you
          need a hand, we've got your back.
        </p>

        <p>
          We can sort out bugs, boost the site's speed, throw in some new
          features, and keep the info spot on. We'll sort out any computer
          problems fast, so your business can keep rolling. Our team is
          definitely thinking about security, too. We keep your store fresh and
          ready to welcome more customers as your business expands. We're here
          to be your go-to tech buddy for the long haul.
        </p>

        <p>
          We'll always keep your Shopify store running smoothly. No need to wait
          around or try to wrap your head around complicated tech jargon.
          Getting help when you need it is super easy and fast. We'll keep your
          Shopify store safe, fast, and set up for success.
        </p>

        <h5>Shopify SEO Optimization</h5>
        <p>
          Even if your store looks great, people won't be able to find you
          online. That's why we made sure Shopify stores are SEO-friendly from
          the start. We're here to help you level up your Google ranking. We’re
          all about keeping your URLs and meta names neat and ensuring your
          pages load quickly.
        </p>
        <p>
          We'll adjust your site's layout and add some internal links to make it
          easier for search engines to find their way around. Search engines are
          always switching things up, but we stay on top of it so your shop
          stays ahead of the game. If you nail your SEO, you'll attract more
          people who are ready to make a purchase.
        </p>
        <p>
          More people checking out your stuff means more sales, and that’s how
          your business gets to grow over time. Our Shopify SEO services in
          India help your store get noticed, stay in the spotlight, and keep
          expanding, whether you're launching a new store or upgrading an
          existing one.
        </p>

        <h5>Why Should You Choose Us for Shopify Development in India? </h5>
        <p>
          You need more than just a website to run an online store. To level up,
          you need speed, style, fun for the users, and the right tools. That's
          where we come in. We create fast, responsive, mobile-friendly,
          SEO-optimized, and third-party-integrated websites.
        </p>
        <p>
          We do a lot more than just make Shopify sites. We make great shopping
          experiences that connect with your customers, keep them coming back,
          and bring in more sales. We'll take care of everything, from setting
          up ways for you to pay to making cool styles and freebies, so you
          don't have to.
        </p>
        <p>
          We've got your back, no matter if you're just starting, running a
          small business, or already a big name in the market. Keeping it
          straightforward with easy-to-understand language and simple steps is
          the way to go. We’ll help you get things done and build trust as you
          start and grow this way.Here are a few reasons why we could be the
          perfect fit for your Shopify store in India:
        </p>
        <h6>Tailored Solutions </h6>
        <p>
          Every business has its own vibe. Your Shopify store can totally shine.
          That's why we create custom solutions that fit your needs perfectly.
          Want to create a chill, stylish vibe for your fashion brand?
        </p>
        <p>
          How about adding support for different languages for your customers
          all over the place? What do you think about adding some cool product
          filters, fun shipping methods, or trendy checkout options? Whatever
          you're thinking—we'll make it happen.
        </p>
        <p>
          We definitely check out your products, your customers, and what drives
          you. Next up, we’ll make your Shopify store look great and run like a
          charm, ready to grow with your business.
        </p>
        <p>
          We ensure that everything aligns with your goals and helps your
          business shine, whether you're just getting started or you've already
          made a name for yourself. A store that highlights what your business
          does could boost trust and maybe even sales.
        </p>

        <h6>Conversion-Rated Mobile-Friendly Stores </h6>
        <p>
          In India, most people use their phones to shop. That's why we ensure
          all our Shopify shops are totally mobile-friendly. Your website will
          work just fine on any computer, tablet, or phone.
        </p>
        <p>
          We focus on stuff like how fast it is, how easy it is to use, and the
          checkout process. Why not? Every second counts. A smooth and simple
          mobile experience keeps folks engaged and prevents them from bouncing
          from their carts.
        </p>

        <p>
          We put in the effort to help folks easily find and buy products. Your
          customers will have a great time shopping with you if it's easy to
          browse, loads fast, and is a breeze to check out. So, what’s the deal?
          More sales, happy customers, and then more sales over and over. Your
          Shopify store will not just work on phones; it'll be designed with
          phones in mind right from the start.
        </p>

        {/* <p>
          If we lend a hand with your platform, you'll be able to kick things
          off quicker and grow without the stress.
        </p> */}
        <h6>Hands-On Experience</h6>
        <p>
          It is necessary to understand Shopify fully. We've set up shops for
          all kinds of businesses, so we totally get what it takes to create a
          store that actually works. We've got Shopify down and can handle it
          all for you, from setting up awesome stores to integrating complex
          payment systems
        </p>

        <p>
          We're not about finding shortcuts or taking the easy route. Before we
          kick things off, let's chat about your business, your clients, and
          what you're aiming for. This helps your store stand out from the crowd
          with a solution that's tailored just for you and designed to grow.
        </p>
        <p>
          We've been using Shopify for ages, so we're pretty familiar with all
          the new features, apps, and updates. Your store is always current,
          secure, and reliable. We totally know what works, so we nail it on the
          first try. It's awesome to be on a team with smart folks who actually
          care about helping you grow.
        </p>
        <h6>Fast and SEO That Boosts Growth</h6>

        <p>
          A Shopify store needs to look great and load fast. It should be super
          easy to find online. That's why we keep SEO and speed in mind when
          we're building shops. We keep our code clean and light, ensure images
          are the right size, and speed up page loads. Your store will be super
          easy for everyone and search engines to find. People won’t stick
          around on a super fast site, but they’ll definitely bounce from one
          that’s dragging its feet.
        </p>
        <p>
          We also set up solid SEO foundations. We got the URLs, meta tags,
          menus, and product names all set up to make sure Google digs your
          store. We’re always on top of the latest SEO trends to help you stay
          ahead of the game. If your site ranks higher and loads faster, your
          business will do better.
        </p>
        <h6>Help After the Launch</h6>
        <p>
          First, you need to make your Shopify store live. We'll still be here
          for you after your site goes live. There is a customer service team
          here to help with any bugs, changes, new features, or just making sure
          everything works well.
        </p>
        <p>
          Need to change some things for the Christmas campaign? Have you
          thought about adding a new plugin? Having trouble with your tech? You
          can call or text us at any time. We'd like to work with you on more
          than one project. We want to work together with you for a long time.
          So, when our clients need help, they always feel free to contact us.
        </p>
        <p>
          We keep things easy, move quickly, and make sure your store works
          well, so you won't be stuck at all. You get a lot more than just a
          service when you work with us. You have a friend you can count on when
          you start in ecommerce.
        </p>
        <p>
          Contact us right away if you're looking for a Shopify development
          company in India and need some professional help! Let's make your
          business better.
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
            Noida, 201301 Uttar Pradesh
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
