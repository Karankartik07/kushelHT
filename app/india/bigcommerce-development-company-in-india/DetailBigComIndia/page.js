"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailBigComIndia() {
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
          BigCommerce Development Company in India – Build Powerful Online
          Stores with Us
        </h4>
        <p>
          Need a reliable BigCommerce development company in India to kick off
          or boost your online store? You've come to the right spot! We’re all
          about crafting BigCommerce websites that look great, work smoothly,
          and are totally set up to make sales. If you're a startup ready to
          launch your first online store or a seasoned business wanting to level
          up, we've got the perfect solutions for you.
        </p>
        <p>
          BigCommerce is a super strong eCommerce platform out there right now.
          It gives you the freedom to adapt, grow, and comes with handy tools to
          boost your business. To really make the most of it, you’ll want some
          pros on your side—and that’s exactly what we’re here for.
        </p>
        <p>
          We’re all about creating designs that are super easy to use, making
          sure everything works seamlessly together, and offering personalised
          features that make shopping a breeze for your customers.
        </p>
        <p>
          When you team up with us, you’re not just getting a website—you’re
          getting a buddy for growth.
        </p>
        <p>
          We'll help you set up and create your online business, make sure it
          works well, and make sure it does well.
        </p>
        <h5>How Can Our BigCommerce Services Help Your Business Grow?</h5>
        <p>
          We’ve got you covered with all-in-one BigCommerce solutions to help
          you kick off, run, and expand your online store without any hassle.
          We're here to help you get your store going and add that personal
          touch to your brand, making sure everything runs smoothly.
        </p>
        <p>
          We do theme design, custom development, third-party integrations, and
          help you set up payment gateways. We ensure your store is quick and
          looks awesome on mobile, giving your customers a seamless shopping
          experience every time..
        </p>
        <p>
          We’re here for you with support and maintenance to make sure your
          store runs without a hitch. We’ve got the tech covered, so you can
          chill and concentrate on growing your business with our BigCommerce
          expertise
        </p>

        <h5>Our BigCommerce Development Services in India Include:</h5>
        <h6>BigCommerce Store Setup & Configuration</h6>
        <p>
          A web store might look like a lot of work, but we keep things simple
          and fun. We'll set up everything for you with BigCommerce, from
          choosing the right style to making sure your store is set up
          correctly. We make sure your store looks great, is simple to use, and
          fits with the style of your brand.
        </p>
        <p>
          We’ve got the basics covered too, like product categories, payment
          options, shipping methods, and security settings. If you're new to
          this or switching from somewhere else, we've got you covered to ensure
          everything runs smoothly right from the start.
        </p>

        <p>
          We're here to set you up with a store that's not only ready to go but
          also geared up to make some sales. Why waste time on all those
          technical tasks when you could be putting your energy into your
          products and your customers? We’ll have your BigCommerce store up and
          running in no time, making it super reliable and easy to use—no issues
          at all!
        </p>
        <h6>Custom BigCommerce Site Design</h6>
        <p>
          Your online store needs to be unique, so having a custom design is
          really key. We whip up cool, trendy, and responsive designs for
          BigCommerce stores that really show off your brand’s vibe. We love
          keeping it chill and enjoyable with straightforward layouts, smooth
          navigation, and awesome visuals to make shopping super easy for your
          customers.
        </p>
        <p>
          We focus on creating stuff that not only looks great but also works
          well. Everything's set up to make life easier for users and boost
          those conversions. If you want a fresh modern look or something a
          little more unique, we’ve got you sorted to make your store look great
          on desktops, mobiles, and tablets. As most of the visitors shop online
          using their phones, we ensure your store runs smoothly on all devices.
        </p>
        <p>
          We blend creativity with practicality to help you craft a solid brand
          vibe with our custom designs. So, what's the deal? A BigCommerce store
          that stands out and keeps customers coming back for more.
        </p>

        <h6>BigCommerce Migration Services</h6>
        <p>
          Considering a switch to BigCommerce from another platform? No worries
          here—we make migration a breeze. Changing your store to a new platform
          can be a bit of a pain, but don’t worry, we’ve got your back. We've
          got you covered, so you won't miss out on any important data.
        </p>

        <p>
          We've got your products, customer info, orders, and content all sorted
          out without disrupting your business vibe. No worries about the
          migration; your customers can keep shopping smoothly. We take care of
          all the SEO stuff, URLs, and meta data to keep your rankings strong
          after the migration. Once we wrap up the transfer, we'll take a look
          at everything to ensure your new BigCommerce store is good to go and
          running smoothly.
        </p>
        <p>
          With our migration services, you’ll get a cool, upgraded store packed
          with great features—plus, you can relax knowing your data and traffic
          are secure. We keep the switch simple, dependable, and smooth so your
          business can keep growing without any hiccups.
        </p>

        <h6>BigCommerce App Integration </h6>
        <p>
          Adding apps is a cool way for online stores to grab some extra tools
          that make things run smoother. We're here to help you level up your
          BigCommerce store with some cool apps and third-party tools.
        </p>
        <p>
          Have a look at these cool third-party integrations that can totally
          help your store run better and make everything flow more smoothly,
          like shipping and payment systems, marketing tools, and CRM systems.
          Looking for some help with email marketing, writing product reviews,
          or setting up those reward programs? We've totally got this handled.
          We make sure all the apps work great for your business and are set up
          perfectly. We got your back when it comes to choosing the right apps
          for your business, so you won't be stuck with a bunch of tools you
          don't actually need.
        </p>
        <p>
          Bringing in apps not only cuts down on time but also makes things way
          better for the customer. If your store has the right features, running
          it will be a breeze, chores will take care of themselves, and your
          business will grow faster. We’ve got your BigCommerce store covered
          with everything it needs to run smoothly.
        </p>

        <h6>BigCommerce SEO & Marketing Services</h6>
        <p>
          A cool store is just the start; you also want visitors to discover it.
          That's why we provide SEO and marketing services specifically designed
          for BigCommerce.
        </p>

        <p>
          We tweak the URLs, descriptions, photos, and pages of your products to
          help your store pop up more in search engines like Google. You'll see
          more organic traffic and potential customers when you climb higher in
          the results. We’re all about more than just SEO. We’ve got your back
          with email campaigns, social media marketing, paid ads, and content
          projects. We're all about getting people to check us out and turning
          them into regulars.
        </p>

        <p>
          Your BigCommerce store will do really well and not just sit there if
          you sell it the right way. Our SEO and marketing services can help
          your store stand out in a crowded market.
        </p>

        <h5>BigCommerce Support & Maintenance</h5>
        <p>
          Got an online shop? We've got your back every step of the way. We've
          got your BigCommerce help and maintenance covered, so your store can
          keep cruising along without a hitch. We'll keep you posted with
          updates, handle any tech issues, and check out your site to spot any
          performance bumps. If anything goes wrong, our team is ready to jump
          in and make sure your customers keep enjoying their ride.
        </p>
        <p>
          We're here to help you out with adding new features, updating content,
          or making design tweaks whenever you need us. We’ve got the tech
          covered, so you can just chill and grow your business.
        </p>
        <p>
          We're here to keep your BigCommerce store safe, current, and running
          without a hitch. No worries, the pros are here to help keep your store
          looking awesome. Having good support makes it super easy to keep your
          business going without any stress.
        </p>

        <h5>
          What Makes Us the Best BigCommerce Development Services in India?
        </h5>
        <p>
          If you're considering starting an online store, BigCommerce is a great
          pick for businesses of all sizes. We're a dependable BigCommerce
          development agency in India, focused on creating user-friendly,
          high-performing, and scalable online stores that help you boost your
          brand and sales.
        </p>
        <p>
          We blend our tech skills with a bit of creativity to create solutions
          that not only look cool but also function really well.
        </p>
        <p>
          We’re here to help you get your store up and running, plus make all
          the little adjustments to fit your business just right.
        </p>
        <p>
          If you're starting out or wanting to boost your existing store, our
          BigCommerce services are ready to help your online business run
          smoothly and succeed.
        </p>
        <h6> Custom BigCommerce Store Design</h6>
        <p>
          Getting your online store up and running on BigCommerce might seem
          easy, but you definitely need to have the right groundwork in place.
          If a store isn't set up right, it can lead to issues down the line,
          like slowness, mistakes, or design problems.
        </p>
        <p>
          We make sure your store gets set up right from the get-go. We've got
          everything sorted out, from choosing the right theme to setting up
          products, categories, payment options, and shipping methods.
        </p>
        <p>
          Everything is designed to match your brand's style. If you have a
          store and want to spruce it up for better results, we can definitely
          help out with that. We're here to help you get your store up and
          running smoothly, making it easy to manage while keeping things
          looking professional.
        </p>
        <p>
          If you get everything sorted out, your customers will enjoy a
          hassle-free shopping experience, which means they'll trust you more
          and you'll see an increase in sales for your business. Kicking things
          off with a good setup saves you time, money, and a bunch of headaches
          later on.
        </p>

        <h6>BigCommerce Theme Development & Customization</h6>
        <p>
          The design of your store is the first thing that catches people's
          eyes, and it can totally influence whether they decide to buy
          something or not. A clean, attractive, and easy-to-use design really
          helps build trust and can definitely increase sales. We're here to
          help you pick the perfect theme or whip up a totally custom design
          that vibes with your brand's style.
        </p>
        <p>
          If you're looking for something different, our developers can totally
          shake things up with layouts, colors, and features to give your store
          a cool and professional vibe. We ensure the design looks great on all
          devices, especially mobile, since many folks prefer shopping on their
          phones.
        </p>

        <p>
          We're all about more than just looks—we want to make your experience
          super chill with easy navigation, quick loading times, and a checkout
          that's a piece of cake. This helps customers chill and enjoy browsing
          without stressing over figuring stuff out.
        </p>

        <p>
          If you’re looking to switch things up or completely overhaul stuff,
          we’re here to help turn your ideas into reality. A custom theme
          totally makes your store pop and helps buyers feel more confident
          about you.
        </p>
        <h6>API Integration & Third-Party Tools</h6>
        <p>
          Every online store could really use some extra tools to boost
          functionality—like payment gateways, shipping apps, CRM systems, or
          marketing tools. BigCommerce has a ton of apps, but it's super
          important to get them set up right. We're here to help you get these
          apps to fit just right in your store, making sure everything runs
          smoothly without any hiccups.
        </p>

        <p>
          We can definitely get your store all set up with email marketing
          tools, accounting software, live chat systems, and social media
          platforms. This helps you run your business smoother and keeps your
          customers happy. If you're looking to snag some awesome stuff like
          subscription billing, loyalty programs, or analytics dashboards, we've
          got your back and will ensure everything goes off without a hitch. If
          an app isn't working well, it can totally mess things up, but with our
          service, you can chill and not stress about it.
        </p>
        <p>
          You can work on growing your business while we handle the tech stuff.
          By making the right links, you can save a lot of time, make more
          sales, and keep everything in order as your store grows.
        </p>
        <h6>BigCommerce Migration Services</h6>

        <p>
          Thinking about moving your online store to BigCommerce? We've got your
          back! Migration might feel a little overwhelming, but our team really
          keeps it easy and relaxed. If you're switching from Shopify, Magento,
          WooCommerce, or anything else, we've taken care of all the tricky
          stuff for you. We take our time with your data – moving everything
          over smoothly, like your products, customers, order history, and those
          key SEO details, so your store stays visible on search engines.
        </p>
        <p>
          We're definitely going to keep your store design and functions just as
          they are, or maybe even make them better after the move. We’re all
          about making things simple: no downtime, no data loss, and absolutely
          no stress for you. Once we get your store set up, we'll take a look to
          ensure everything runs smoothly on BigCommerce. Don't worry about the
          tech stuff if you're considering a change. We’ll make your migration
          journey easy, safe, and completely hassle-free!
        </p>
        <h6>Ongoing Support & Maintenance</h6>
        <p>
          Getting your store up and running is only the beginning. To keep
          everything running smoothly, you need some ongoing support and
          maintenance.
        </p>
        <p>
          We've got your BigCommerce store all set, making sure it's updated,
          secure, and running smoothly without any tech stress. We're here to
          lend a hand whenever you need it, whether it's sorting out bugs,
          rolling out updates, or cranking up performance.
        </p>
        <p>
          We watch over your site to catch any problems before they affect your
          customers. We take care of everything from speed boosts to regular
          backups, so you can concentrate on what really counts—running your
          business.
        </p>
        <p>
          If you want to add some cool features or expand your store, we’re here
          to help with advice and development support. Don’t worry about
          downtime or security issues when you have dedicated maintenance sorted
          out. You’ll be chill knowing your store is in good hands.
        </p>
        <p>
          Together, we can make it happen! Join hands with the best BigCommerce
          development company in India.
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
