"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailShopDubai() {
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
          Shopify Web Development Services Dubai – Build Your Dream Store with
          Us
        </h4>
        <p>
          Are you planning to start or grow your online business? That was a
          smart choice, and Shopify makes it even better. And that's the best
          part: we make it work even better for you! We are a Shopify web
          development services Dubai. We can help you make an online store that
          looks great, works well, and makes sales.
        </p>
        <p>
          We make your store look great right away, let you add the apps you
          want, and make sure it's easy and quick to check out. People can shop
          at any time and from anywhere because your site opens fast, works well
          on all devices, and is very simple to use.
        </p>
        <p>
          Each business is different, so there isn't a single answer that works
          for all of them. Each business has its own style, and that style
          should shine through in its online shop. We come up with styles and
          features that fit your brand's personality and help you reach your
          goals.
        </p>
        <p>
          As your business grows, so does your Shopify store. It doesn't matter
          how long your business has been around or how new it is.
        </p>
        <p>
          We can help your online store be a lot more than just a website. That
          is a good way to get to know your customers better and make your
          business grow.
        </p>
        <h5>How We Help Your Shopify Business Grow?</h5>
        <p>
          We take care of everything because we are one of the best Shopify
          development companies in Dubai. We can totally set up your new Shopify
          store and help you level up. We can help you out with redesigning your
          current store or setting up a brand new one.
        </p>
        <p>
          We create Shopify stores that are secure, load fast, look great on
          mobile, and are super easy to manage. We’re always adding new styles,
          apps, and tools, plus more payment options, to help your store run
          smoothly. The best part? We pay attention to what you say. We look at
          what your business needs and come up with ways to give it to you.
        </p>
        <p>
          No jargon, no confusion—just clear communication and real results.
          Setting up a Shopify store in Dubai can help you grow your online
          business.
        </p>

        <h5> What Shopify Development Services Do We Offer in Dubai?</h5>
        <h6>Custom Shopify Store Design for Your Brand</h6>
        <p>
          Your web store shouldn't look and feel like a hundred others. We help
          you connect with your customers by making Shopify stores that are
          perfect for your company. They learn about your business, the things
          you sell, and the kind of people you want to buy from you in Dubai.
          From the way the home page looks to the way the product pages are laid
          out, everything we do is built with sales and the customer in mind.
        </p>
        <p>
          It looks great on all of them because each style can be used on
          different devices. We also make sure that your store is quick and
          simple to use so that it works well. It doesn't matter if you want
          something clean and simple or bright and cool. We'll get it done.
        </p>

        <p>
          People will keep coming back to your Shopify store if it looks good
          and is easy to use. Not just because it looks good, but because it
          helps your business grow.
        </p>
        <h5>Shopify Store Setup & Configuration Made Easy</h5>
        <p>
          Are you just starting out with Shopify? Don't worry; we'll handle
          everything. We set up and customize Shopify in Dubai so that nothing
          is left out. We change the store and get it ready. We can help you
          choose the proper style, set up payment options, manage shipment,
          organize your product groupings, and more. People can now visit your
          store.
        </p>
        <p>
          The front and rear will be clean and easy to use. Are you afraid to
          move information from one area to another? Don't worry; we'll migrate
          your orders, buyers, and goods without any problems. Your Shopify
          store will be safe, perform properly, and be ready to go when we're
          done.
        </p>
        <p>
          If you need help or get stuck, our team is always available for you.
          When you work with us, it's easy, stress-free, and quick to have your
          Shopify store up and operating.
        </p>

        <h5> Theme Customization & Better User Experience</h5>
        <p>
          You already have a Shopify theme, but you want it to look and feel
          better. Or maybe you want to create something completely new? We know
          how to modify the themes on Shopify so that your shop stands out.
        </p>

        <p>
          Our Dubai team can transform the way your business looks and feels,
          add innovative features, and make it operate better on mobile devices.
          We care about how something appears and how well it performs for
          people (UX). That includes making things simple for consumers to look
          at, find, and purchase. People are more inclined to purchase anything
          if the style is clear and simple. It could be time to update the UX if
          your business appears ancient or is overly crowded.
        </p>
        <p>
          Making substantial changes to how you shop, show off your items, or
          check out doesn't have to be complicated. We will ensure your Shopify
          store looks modern and runs fast so that your customers will be
          willing to purchase from your store.
        </p>

        <h5>Smart Features and App Integration</h5>
        <p>
          Do you want to improve your Shopify store? This is when the Shopify
          apps come in handy. You can add many things to Shopify. There are
          systems for keeping track of your things, tools for doing that, and
          software that does that. There are also systems for keeping track of
          your things. It might be tough to pick the right ones and set them up.
        </p>
        <p>
          We can help you find the best apps for your business, set them up
          properly, and make sure they work well with your store in Dubai. With
          the right tools, you can save time, make more sales, and connect with
          your customers in more ways. We will set up a link between your store
          and theirs. Because of this? One that helps your business grow, works
          better, and saves you time.
        </p>
        <p>
          Nothing went wrong or had bugs; everything worked great. If you add
          the right apps and tools to your Shopify store, it can be more than
          just a store. It turns into a growth machine.
        </p>

        <h5>Shopify SEO Services for Better Visibility</h5>
        <p>
          Even if your store looks great, people won't be able to find you the
          web. That's why we make Shopify shops SEO-friendly from the start. Our
          team works on everything that can help you get a better Google
          ranking, like making sure your URLs and meta names are clean and that
          your pages load quickly. We also fix the layout of your site and add
          internal links to make it easier for search engines to crawl.
        </p>

        <p>
          Search engines change their rules all the time, but we keep up with
          them so your shop never falls behind. If you set up your SEO
          correctly, you'll get more people who are ready to buy. More visitors
          means more sales, which means your business will grow over time.
        </p>

        <p>
          Our Shopify SEO services in Dubai make sure that your store gets seen,
          stays seen, and keeps growing, whether you're opening a new store or
          making changes to an old one.
        </p>

        <h5> Reliable Shopify Support & Maintenance in Dubai</h5>
        <p>
          When you open your Shopify store, the work isn't done. It's just as
          important to keep it safe, up to date, and running well. That's why we
          offer Shopify support and help in Dubai all the time. Anytime you need
          help, we're here.
        </p>
        <p>
          We can fix bugs, speed up the site, add new features, and make sure
          the information is always correct. We'll quickly fix any computer
          issues so your business doesn't have to. There's also security on our
          team's mind. We make sure your store is always up to date and ready
          for more people as your business grows. We want to be your long-term
          tech partner.
        </p>
        <p>
          We'll always make sure your Shopify store works well. You don't have
          to wait or understand tech talk that is hard to understand. Getting
          help when you need it is simple and quick. We'll make sure that your
          Shopify store is always safe, quick, and ready to do well.
        </p>
        {/* <p>
          We handle everything, from building the front end to making sure it
          works with your BigCommerce backend. Our PWA development solution will
          help you get your shop ready for the future and provide your consumers
          with a contemporary experience. We can make your shop better, smarter,
          and quicker all at the same time.
        </p> */}

        <h5>Why Choose Us for Shopify Development in Dubai?</h5>
        <p>
          Having a website alone isn't enough to run an online store. If you’re
          looking to level up, you need some speed, a dash of style, a sprinkle
          of fun for the users, and the right tools in your kit. That's where we
          come in. We build online shops in Dubai that load quickly, look
          awesome on mobile, are SEO-friendly, and super easy to handle.
        </p>
        <p>
          We’re all about more than just building Shopify sites. We create
          awesome shopping experiences that really connect with your clients,
          keep them coming back, and boost sales. We've got you covered for a
          hassle-free experience, handling everything from setting up payment
          options to creating cool styles and extras.
        </p>
        <p>
          We're here to support you, no matter if you're just starting out, a
          small business, or a big name in the game. Plain language and easy
          steps keep things simple. This way, we can make sure you get results
          and build trust as you start and grow. We could be the perfect fit for
          your Shopify store in Dubai for a few reasons:
        </p>
        <h5>Experience That Talks</h5>
        <p>
          Knowing your stuff about Shopify is pretty key. We've set up shops for
          all sorts of companies, so we totally get what it takes to create a
          store that actually works. We've got some experience with Shopify and
          can handle everything from setting up awesome stores to integrating
          advanced payment systems.
        </p>
        <p>
          We don't go for quick fixes or shortcuts. We get to know your company,
          your clients, and what you’re aiming for before diving in. This
          ensures your store stands out from the usual templates, offering a
          solution tailored just for you and designed to grow.
        </p>
        <p>
          We've been using Shopify for years, so we're in the loop about all the
          latest features, apps, and changes. Your store will always be current,
          secure, and reliable.
        </p>
        <p>
          We get it right the first time because we know what clicks. That's why
          it's awesome to team up with a bunch of talented folks who really care
          about your growth.
        </p>

        <h5>Custom Solutions Just for you</h5>
        <p>
          Every business is unique. Your Shopify store doesn't have to be like
          that. That's why we create and build tailored solutions that fit your
          specific needs. Looking for a standout, high-end look for your fashion
          brand?
        </p>
        <p>
          How about adding support for multiple languages for your customers
          around the world? Maybe some custom product filters, cool shipping
          methods, or fancy checkout options? Anything you can think of—we'll
          make it happen. We totally look into your products, your customers,
          and what makes you tick. Next, we’ll get your Shopify store looking
          awesome and working smoothly, all set to grow along with your
          business.
        </p>

        <p>
          We make sure that every element fits with your aims and makes your
          business stand out, whether you're just starting out or you've already
          built a reputation for yourself. A shop that shows off what your firm
          does might help people trust you and perhaps increase sales.
        </p>

        {/* <p>
          When your store looks great and is also search engine friendly, you
          get more pure traffic and a better experience for your customers. And
          when that happens, sales follow.
        </p> */}
        <h5>Mobile-Friendly Stores That Convert</h5>
        <p>
          Most people in Dubai shop on their phones. That's why we make sure
          that all of our Shopify shops are fully mobile-friendly. Any computer,
          tablet, or phone will be able to see and use your website without any
          problems.
        </p>

        <p>
          We pay attention to things like speed, ease of use, and the checkout
          process. Why? Because each second is important. A quick and easy
          mobile experience keeps people interested and stops them from leaving
          their carts.
        </p>
        <p>
          We also work hard to make it easy for people to find products and buy
          them. Your customers will enjoy shopping with you if it's easy to look
          around, loads quickly, and is simple to check out. As a result? More
          sales, happy customers, and more sales again and again. Not only will
          your Shopify store work on phones, but it will be designed to work on
          phones first.
        </p>
        <h5>Speed and SEO That Drive Growth</h5>

        <p>
          A Shopify store should look good and load quickly. It should also be
          easy to find online. That's why we think about SEO and speed when we
          build shops. We use clean, light code, make sure images are
          well-sized, and speed up page loads. This makes your store easy for
          both people and search engines to find. People will not stay on a site
          that is too fast, but they will leave one that is too slow.
        </p>
        <p>
          Our team also builds strong SEO bases. We set up the URLs, meta tags,
          menus, and product names so that Google loves your store. We also keep
          up with the latest SEO trends to help you stay ahead of the
          competition. Your business will do better if your site ranks higher
          and loads faster.
        </p>
        <h5>Support After the Launch and Beyond</h5>
        <p>
          The first thing you need to do is open your Shopify shop. We'll still
          be here for you after your site is live. Our customer service team is
          always ready to help with bugs, changes, new features, and making
          things work better.
        </p>
        <p>
          Need to make changes to the materials for a holiday campaign? Do you
          want to add a new plugin? Or are you having trouble with your tech?
          You can call or text us. We want to do more than one job with you. We
          want to work long-term with you. That's why our clients always know
          they can come to us for help.
        </p>
        <p>
          Because we value your time and money, we keep our vows and meet our We
          use clear language, move quickly, and make sure your store always
          works well, so you'll never feel stuck. You receive more than simply a
          service when you deal with us. As you travel through eCommerce, you
          have a partner you can trust.
        </p>
        <p>
          If you are looking for a shopify web development services Dubai and
          receive support from specialists, get in contact with us right now.
          Let's grow your company.
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
