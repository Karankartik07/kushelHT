"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomIndia() {
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
          Ecommerce Development Company in India | Scalable, Secure &
          User-Friendly Stores
        </h4>
        <p>
          If you want to run a business these days, having a solid online
          presence is a must. That's where an ecommerce development company in
          India, like Kushel Digi Solutions, steps in. Nowadays, a bunch of
          people are all about online shopping, and if your business doesn't
          have a good and easy-to-use store, you could lose them to the
          competition. That’s why having a well-designed ecommerce website isn’t
          just a luxury—it’s super important.
        </p>
        <p>
          At Kushel Digi Solutions, we help businesses of all sizes create
          awesome online stores that look great and are really easy for
          customers to use. We're here to make shopping a breeze for customers
          and keep things smooth for business owners.
        </p>
        <p>
          If you're just starting or want to level up your current store, we've
          got your back with solutions that work for you.
        </p>
        <p>
          We've got your back with safe payment choices and designs that work
          great on mobile for your online shop to succeed.
        </p>
        <p>
          When you join forces with us, you’re not just getting a website—you’re
          getting a friend who's totally on board for your growth.
        </p>
        <h5>What We Offer in E-Commerce Development Services in India?</h5>
        <p>
          Starting a successful online store is about more than just putting a
          website together. It's all about creating a chill shopping vibe that
          draws people in, keeps them interested, and makes it super easy to buy
          stuff.
        </p>
        <p>
          We're a go-to ecommerce development company in India, offering all the
          solutions you need to boost your business online. We’ve got you
          covered with everything from custom website design to cool stuff like
          payment gateways, product management, mobile optimization, and
          security. If you're a small biz just getting started online or a
          well-known brand looking to grow, we've got your back to ensure your
          store is dependable, speedy, and easy for customers to use.
        </p>
        <p>
          We've got the tools and game plan to help you connect with your
          audience and set you up for long-term success. Take a look at the best
          ecommerce development services we offer in India to give your business
          a boost.
        </p>

        <h5>Our E-Commerce Development Services in India Include:</h5>
        <h6>Customized E-Commerce Website Design</h6>
        <p>
          Your online shop should totally look great and vibe with your brand's
          style. A custom website design really makes your online shop pop and
          gives your customers a fun and easy time while shopping. We create
          websites that match your business just right, making sure every little
          thing—from the layout to the colors—fits your vibe and goals.
        </p>
        <p>
          We’re all about making designs that are super user-friendly, simple,
          and look great on your phone. These days, a lot of folks are shopping
          on their phones, so we ensure your store runs smoothly on every
          device. We always think about user experience when we're designing
          stuff. From product pages to checkout, everything's designed to make
          shopping super easy and fast for everyone.
        </p>

        <p>
          A custom-built store lets you throw in some cool features that are
          one-of-a-kind for your business. If you're looking for product
          filters, wishlist options, or some awesome search features, we’ve got
          you covered. Your ecommerce site isn't just a store; it turns into a
          solid brand vibe.
        </p>
        <h6>Secure Payment Gateway Integration</h6>
        <p>
          A reliable payment system is really important for any ecommerce site.
          We want our customers to feel super chill when they enter their
          payment info, and that’s the vibe our payment gateway integration
          services bring.
        </p>
        <p>
          We connect your online store with trustworthy payment options like
          PayPal, Stripe, Razorpay, and a few others. This offers your customers
          a bunch of secure payment options, like credit cards, debit cards, net
          banking, or wallets. We've got you covered with awesome security
          measures like SSL encryption, ensuring every transaction keeps your
          customers' data safe and sound.
        </p>
        <p>
          We make the payment process super simple and quick. Checkout can be a
          hassle, but we’ve made it super easy with one-click payment options
          and clear order confirmations. This keeps folks from abandoning their
          carts and boosts their confidence in shopping with us. We help your
          store amp up sales and look great while doing it with easy and secure
          payment options.
        </p>

        <h6> Mobile-Friendly E-Commerce Stores</h6>
        <p>
          These days, over half of all online shopping happens on mobile
          devices. If your website isn't working well on smartphones, you might
          be missing out on a bunch of potential clients. That's why we're all
          about creating ecommerce stores that run smoothly on mobile devices,
          making shopping a breeze no matter where you are.
        </p>

        <p>
          We create layouts that look awesome on any screen, whether you're
          using your phone, tablet, or computer. This makes it super easy for
          your customers to check out products, toss them in the cart, and buy
          without any fuss. We’re all about moving quickly and making sure
          everything’s done right. Mobile users hate waiting around, so we make
          sure your store loads fast. We whip up easy navigation menus and
          touch-friendly buttons that make browsing super smooth.
        </p>
        <p>
          A mobile-friendly store makes it super easy for customers to shop and
          can help your site rank better on Google, since search engines dig
          responsive websites. Your ecommerce store is going to be future-ready,
          super user-friendly, and crafted to catch the eye of the increasing
          mobile audience.
        </p>

        <h6>Shopping Cart & Product Management</h6>
        <p>
          Getting a chill shopping cart going and making product management a
          breeze are key for making your online store a hit. We whip up shopping
          cart solutions that let customers easily add products, save stuff for
          later, and check out without any hassle.
        </p>
        <p>
          Our shopping cart comes with some awesome features like updating
          quantities, applying promo codes, calculating taxes, and automatically
          figuring out shipping costs. These small things really make shopping a
          breeze and help folks wrap up their orders instead of ditching stuff
          in their carts. We’ve got some awesome product management tools for
          business owners. It's super easy to add new products, change prices,
          keep track of stock, and sort out categories right from a simple
          dashboard. This makes things quicker and keeps your store running
          smoothly.
        </p>
        <p>
          We’ve got features like product reviews, ratings, and recommendations
          to boost customer trust and keep everyone engaged. Your store gets
          super easy to manage and way more profitable with a solid shopping
          cart and a clever product management system.
        </p>

        <h6>SEO-Friendly Development</h6>
        <p>
          Having an online store is cool, but it won’t do much good if nobody
          can find it. That's why we always think about SEO when we're building
          your ecommerce site. We’ll get your store up in the Google ranks and
          attract more visitors with top-notch SEO practices.
        </p>

        <p>
          We update up product pages with neat URLs, awesome meta tags, and
          designs that load in a flash. We make sure your website is super easy
          for search engines to check out, so Google can easily crawl and index
          your store. We've got some cool stuff like XML sitemaps, schema
          markup, and keyword optimization to help you stand out more.
        </p>

        <p>
          Mobile optimization and page speed are super important for SEO. That's
          why we keep your store quick and easy to use for smoother browsing.
          Getting better rankings means your website can attract more organic
          traffic without shelling out a ton on ads. An SEO-friendly ecommerce
          store helps you grow over time and keeps you ahead of the competition.
        </p>

        <h5>Ongoing Support & Maintenance</h5>
        <p>
          Launching your ecommerce website is just the beginning. To keep
          everything running smoothly, you really need to stay on top of updates
          and support. That's why we provide complete maintenance services once
          your store is up and running.
        </p>
        <p>
          We watch over your website to make sure it’s safe, fast, and working
          well. We handle software updates, fix bugs, and make little tweaks to
          keep your store running without a hitch. If you hit any tech snags,
          we're here to help you out quickly so you can keep your business
          running smoothly. We check out performance reports to see where we can
          improve. We've got your back, whether it's launching new features,
          updating products, or stepping up security.
        </p>
        <p>
          Don't worry about the tech stuff; we've got ongoing support and
          maintenance covered. Just concentrate on building your business, and
          we’ll take care of making sure your ecommerce store runs without a
          hitch.
        </p>

        <h5>What E-Commerce Development Services Do We Offer? </h5>
        <p>
          We love making online stores for businesses that are easy for
          customers to use, work well, and are ready to grow at Kushel Digi
          Solutions. The things a business needs to do for online shopping are
          unique to that business.
        </p>
        <p>
          We don't just make websites; we also make great shopping experiences
          that make it easy for your customers to look around, buy, and keep
          coming back for more. Some of the things we have planned are custom
          ecommerce sites and safe ways to pay.
        </p>
        <p>
          We want to help you sell things online and make sure your customers
          have a great time. We can help you make your online business look
          great, have cool tools, and have great customer service. We have
          services that can make your business stand out on the web. Check them
          out.
        </p>
        <h6>Custom E-Commerce Website Development</h6>
        <p>
          Each business has a unique story, and your ecommerce site should show
          that. If you work with Kushel Digi Solutions, we can make an online
          store that fits your brand's style and goals. We don't use the same
          themes for everyone.
        </p>
        <p>
          Instead, we make websites that are unique in how they look and how
          they work for your business. Your customers are thought of in every
          part of the website, from the home page to the checkout.
        </p>
        <p>
          Our team makes websites that are safe to use, quick to load, and easy
          to find your way around. We also make sure that your store works well
          on phones, since most people prefer to shop on their phones these
          days. We also add important ecommerce tools like product searches,
          wish lists, and different payment methods to make the user experience
          better.
        </p>
        <p>
          We don't just make websites; we also make online shops that get people
          to visit, earn their trust, and make them want to buy again.
        </p>

        <h6>
          E-Commerce Platform Development (Shopify, Magento, WooCommerce & More)
        </h6>
        <p>
          There are tons of tools out there that can make your store run
          smoother. That's why we help businesses choose a platform like
          Shopify, Magento, WooCommerce, BigCommerce, or something else and get
          started with it. We’ll help you pick the platform that fits your
          business best, taking into account its size, products, and growth
          plans.
        </p>
        <p>
          Kushel Digi Solutions has a team of skilled workers who’ve got
          experience with all the big platforms. We can help you get your
          Shopify store up and running in no time, create a super customizable
          Magento site, or set up a WooCommerce store that you can tweak to fit
          your needs. We get the site up and running, plus we throw in cool
          stuff like payment options, third-party apps, and product management.
        </p>

        <p>
          We want your store to run smoothly. Feel free to add more space if you
          need it, and let’s make shopping enjoyable for you.
        </p>

        <p>
          If we lend a hand with your platform, you'll be able to kick things
          off quicker and grow without the stress.
        </p>
        <h6>Payment Gateway Integration & Security</h6>
        <p>
          When you're shopping online, it's really important to feel safe and
          secure. People just want to feel like their payments are safe and
          super easy to manage. At Kushel Digi Solutions, we set up secure
          payment gateways like PayPal, Razorpay, Stripe, and more to make
          transactions smooth and hassle-free.
        </p>

        <p>
          We keep your ecommerce site fresh with all the latest security
          features, like SSL certificates and data encryption. We've got all
          kinds of payment options for you, like debit/credit cards, UPI,
          wallets, and net banking. Your customers can pay however they like,
          which is pretty cool. We've got some cool fraud detection tools ready
          to keep your business and your buyers safe.
        </p>
        <p>
          We make checkouts easy and keep your transactions safe, helping you
          build trust and cut down on cart abandonment. We make sure your
          ecommerce store is safe, reliable, and super easy for customers to
          handle payments.
        </p>
        <h6>E-Commerce SEO & Digital Marketing</h6>

        <p>
          Starting an ecommerce store is just the first step; the tough part is
          actually getting folks to visit it. That's where our ecommerce SEO and
          digital marketing services come into play. At Kushel Digi Solutions,
          we’re all about helping your online store get noticed on Google and
          linking you up with the right people. We take care of everything from
          finding the right keywords to sprucing up your product pages, making
          sure your website grabs the attention of potential buyers.
        </p>
        <p>
          But wait, there’s more—we also get into digital marketing things like
          Google Ads, Facebook Ads, Instagram promos, and email marketing. These
          strategies help attract more visitors and convert them into customers.
          We’re always checking out the results and breaking them down to step
          up our game as we move forward. It's simple: attract more people to
          your stuff, increase those sales, and see your online store thrive. We
          mix SEO and marketing just right to ensure your brand isn’t just
          chilling online but actually stands out.
        </p>
        <h6>Support and Maintenance Services</h6>
        <p>
          Opening your online store is just the beginning of your journey.
          Websites need a bunch of updates every day to stay secure and run
          smoothly.
        </p>
        <p>
          The Kushel Digi Solutions crew is ready to assist you with all your
          computer stuff. No need to stress about anything. We will keep your
          program up to date, fix bugs, make changes to make it safer, and test
          its speed.
        </p>
        <p>
          Watch out for any downtime in your store, and make sure everything
          works well on all of our devices. Our customer service team is here to
          help you if you have any issues, such as slow speeds, trouble with
          payments, or features that don't work right.
        </p>
        <p>
          Keep in touch with us through regular updates to let you know how your
          website is doing. As a leading ecommerce development company in India,
          we got the tech covered, so you can just focus on growing your
          business. Your online store will be secure, current, and operating
          without a hitch.
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
