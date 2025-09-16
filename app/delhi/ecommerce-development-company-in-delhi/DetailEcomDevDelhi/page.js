"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomDevDelhi() {
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
          E-Commerce Development Company in Delhi– Where Your Brand Meets Smart
          Conversions
        </h4>
        <p>
          Looking for a fully customizable e-commerce development company in
          Delhi that makes your brand stand out?? We don't just make pretty
          websites here at Kushel Digi Solutions; we also help your business
          grow. We build online stores that represent who you are, whether
          you're a new, small company or a large enterprise.
        </p>
        <p>
          We understand that your online store has to meet your products, your
          consumers, and your ambitions. That's why we create fully customized
          ecommerce stores. We can develop a solution that matches your demands,
          whether you need a clean Shopify shop, a robust BigCommerce platform,
          or a completely customized ecommerce website.
        </p>
        <p>
          We build websites that load fast and operate well on PCs, phones, and
          tablets. This makes it easy for consumers to purchase from any device.
          We handle all the critical things, such as secure payment options and
          simple product maintenance. We continue working on your site long
          after it is online. We also undertake monthly maintenance, set up SEO,
          integrate data, and make adjustments regularly to keep your online
          company working at its best.
        </p>
        <p>
          Kushel Digi Solutions is the top firm in Delhi for building ecommerce
          sites. They employ the latest technology and have a good layout, which
          is why. We don't simply build code; we also assist your internet
          company to thrive.
        </p>
        <p>
          Let's build an online shop that both your consumers and your
          competitors will want to purchase from. Please get in contact with us
          straight away!
        </p>
        <h5>What You Get with Our E-Commerce Development Services</h5>
        <p>
          We are the best e-commerce firm in Delhi, and we do more than simply
          build websites. We handle everything that has to do with purchasing
          online. Our online store services could provide you with all you need
          to start, operate, and grow your company online. We do everything,
          from coming up with fresh designs and styles that look excellent on
          phones to introducing secure methods to pay.
        </p>
        <p>
          You may also keep track of your supplies, items, and groups using
          simple tools. Would you like to learn about discount codes, specials,
          or programs that offer rewards to customers? We'll also take care of
          that for you. Additionally, our layout is SEO-friendly, which means
          your store will rank higher on Google, ultimately attracting more
          customers and driving sales.
        </p>
        <p>
          The best part? We offer continued assistance, speed fixes, and updates
          to ensure your store remains fast, secure, and fully functional. We
          help businesses of all sizes sell better and grow faster, without the
          stress.
        </p>

        <h5>Our E-Commerce Development Services Include </h5>
        <h6>Designing a Custom E-Commerce Website</h6>
        <p>
          Your website should show that your business is special. We make unique
          ecommerce sites that fit your brand, your business goals, and what
          your customers expect. We don't think it's right to use old themes. We
          instead make plans that are unique to your products, your story, and
          the way your customers shop.
        </p>
        <p>
          Everything is made with conversion in mind, from the ads on the home
          page to the styles of the product pages and the buttons that tell
          people what to do. When you open a new store or make changes to an old
          one, we make sure the design looks good, works well, and is
          up-to-date. Also, our websites are adaptable, which means they work
          great on phones, tablets, and computers.
        </p>

        <p>
          We pay close attention to how easy it is for your buyers to find what
          they need as well. As a result? A store that is simple to run for you
          and fun for your customers to shop in. Because how something works is
          just as important as how it looks.
        </p>
        <h5>Mobile-Friendly Shopping Experience</h5>
        <p>
          Truly, most of your clients are shopping on their phones. Because of
          this, mobile SEO is now required; it's no longer a choice. When we
          make ecommerce sites, they are fully flexible, which means they look
          great on all screen sizes. The experience should be smooth, quick, and
          easy for everyone, whether they are looking around your store on a
          small phone screen or a big laptop.
        </p>
        <p>
          We test each part carefully on mobile devices to make sure everything
          works great. This includes buttons, menus, product pictures, and
          checkout forms. A mobile site that is hard to use can cost you sales,
          but one that works well on all devices gets people interested and
          ready to buy. We also look at features that work well on mobile
          devices, such as one-click checkouts, sticky navigation, and pages
          that load quickly and keep people from leaving.
        </p>
        <p>
          Our goal? To make shopping on a phone feel as good as shopping on a
          PC, if not better. With our mobile-first method, you'll get more
          visitors, but they'll also become loyal customers who come back again
          and again.
        </p>

        <h5> Adding a Secure Payment Gateway</h5>
        <p>
          When you purchase online, you need to be able to trust the site,
          particularly when you check out. We link your online store to secure
          and reliable payment processors like PayPal, Razorpay, Stripe, and
          many more for this reason. We make sure that your consumers have a
          multitude of secure methods to pay, such as credit and debit cards,
          UPI, net banking, wallets, and more.
        </p>

        <p>
          Our staff makes sure that information flows smoothly between your
          server system and your customers. We also care a lot about safety. We
          employ SSL certificates and encryption to protect user data and
          payment information against scams and hacker attempts. We also made it
          straightforward and fast to check out since we know that consumers are
          more inclined to purchase if they don't have to browse through a lot
          of pages.
        </p>
        <p>
          Our secure payment methods help your clients trust you and protect
          them from abandoning your cart, no matter how large or small your
          company is. It made buying things safer and made people happy, so they
          kept coming back.
        </p>

        <h5>Product & Inventory Management</h5>
        <p>
          It doesn't have to be hard to keep track of your goods and manage your
          product list. When you use our smart ecommerce solutions, you get a
          clean, easy-to-use dashboard where you can add, change, or remove
          goods at any time. You don't have to change a single line of code to
          post multiple pictures, set prices, keep track of stock, or even add
          different sizes or colors.
        </p>
        <p>
          We also let you know when we're running low on stock, so you're never
          caught off guard. Our software keeps everything organized and up to
          date, no matter how many goods you sell. Need a lot of edits? Not a
          problem. Want to put items into categories or add labels to make
          searching easier? Done.
        </p>
        <p>
          We ease the back end at Kushel Digi Solutions so you can run your
          business, which is what counts. And if you already use third-party
          accounting tools or ERP systems, we can connect them too. Product
          management that works well saves you time and makes things easier for
          your buyers.
        </p>

        <h5>Upgradation and Migration</h5>
        <p>
          Is the ecommerce tool you are utilizing right now getting in your way?
          If your performance is awful, it doesn't have any new features, or you
          simply want a better one, we can assist. We make it easy and
          stress-free to swap systems or obtain better ones. We carefully
          examine your current setup and assist you in transitioning to a
          better, quicker, and more adaptable platform, such as BigCommerce,
          WooCommerce, Magento, or Shopify.
        </p>

        <p>
          You won't lose any information or have to stop what you're doing. We
          take care of moving information about items and customers, creating
          copies, and adding new ones. We do anything, from moving information
          about customers and things to copying designs and building new ones.
        </p>

        <p>
          Don't worry—your SEO rankings, order history, and the way people use
          your site will remain the same or perhaps grow better. The new store
          will be quicker, safer, and able to expand with your company. We can
          make your web company better without getting rid of what you've
          previously done.
        </p>

        <h5>Post-Launch Support & Maintenance</h5>
        <p>
          Putting up your online store is not the end. Our work doesn't stop
          after the start either. We'll help get the store up and running and
          make sure it always works well after it starts. We back up your data,
          fix bugs, and make sure all of your tools are up to date.
        </p>
        <p>
          We can help you add a new feature, fix a tech problem, or deal with a
          sudden surge in traffic. We can also check your site for speed and
          security to make sure it is safe and works quickly.
        </p>
        <p>
          Need help adding new items or making changes to the content? Write us
          a message. When you work with us, you don't have to worry about
          downtime or old features.
        </p>
        <p>
          Our team works hard to make sure that your online store grows along
          with your business. When an app comes out, support shouldn't end. It
          should last as long as you need it.
        </p>

        <h5>Why Choose Us as Your E-Commerce Development Company in Delhi? </h5>
        <p>
          Setting up an online store that looks pleasing is not enough to
          generate sales. It's about making it fast, responsive, secure, keeping
          the user interested, and turning viewers into customers. That's where
          we come in. We help Delhi businesses build custom-designed websites
          that are responsive, secure, mobile-friendly, SEO optimized, and easy
          to navigate, resulting in higher conversion rates.
        </p>
        <p>
          As you build a new store, improve an old one, or move to a better
          platform, we'll be there for you every step of the way. We make sure
          that your ecommerce site is ready to fight and do well in the digital
          world. This includes everything from design to development to SEO to
          security.
        </p>
        <p>
          Everything we do is clear, honest, and based on a deep knowledge of
          your goals. If you want to do the right thing, work with us:
        </p>
        <h5>Tailored E-Commerce Solutions</h5>
        <p>
          We know that every business is different. That's the reason we don't
          always answer everyone the same way. When we build an ecommerce site
          for you, we make sure it fits your goods, your brand's style, and what
          your customers want.
        </p>
        <p>
          It doesn't matter if you're trying to reach a niche market or work in
          a busy field—your online store should show who you are and what you
          want to do. We take the time to learn about your company, what makes
          it unique, and how your clients act.
        </p>
        <p>
          It doesn't matter if you're trying to reach a niche market or work in
          a busy field—your online store should show who you are and what you
          want to do. We take the time to learn about your company, what makes
          it unique, and how your clients act.
        </p>
        <p>
          Then we use what we've learnt to create an online store that works for
          you. From the unique UI/UX designs to the powerful server features,
          everything is built with a purpose in mind.
        </p>
        <p>
          We want you to stay ahead of the rest, sell more, and grow quickly.
        </p>
        <h5>Mobile-First, Fast & Responsive Design</h5>
        <p>
          More than 70% of shoppers look at things on their phones. That's why
          we make ecommerce sites that work quickly and correctly on all devices
          by putting mobile users first. Your buyers will have a smooth,
          stress-free shopping experience on any device, like a phone, tablet,
          or computer.
        </p>
        <p>
          We improve everything, from how fast the page loads to where the
          buttons are placed, to keep people interested and moving them towards
          the checkout. As a result? More sales and fewer "bounces."
        </p>

        <p>
          Our plans are clean and current, making them easy to use. They were
          made with your audience in mind. We test on a range of browsers and
          screen sizes to make sure that everything works the same way every
          time.
        </p>

        <p>
          Not only does a flexible design make things easier for users, but it
          also helps with SEO and builds trust in your brand.
        </p>
        <h5>SEO-Optimized and Sales-Focused</h5>
        <p>
          If no one can find your website, it doesn't matter how nice it looks.
          That's why we build SEO from the start. Every part is made with search
          engines in mind, from URLs and meta tags that are easy for search
          engines to read to pages that load quickly and styles that work well
          on phones.
        </p>

        <p>
          But we won't stop there. We focus on design that gets people to buy.
          This means having clear calls to action, a good user flow, easy
          navigation, and quick and easy checkout processes.
        </p>
        <p>
          To help you make sales, we want to help you get people to your site.
          We make shopping fun and easy by using smart filters, categorizing
          products, and adding personal touches. This builds trust and increases
          sales.
        </p>
        <h5>Safe, Scalable & Future-Ready</h5>

        <p>
          We care most about your safety. We use SSL security, secure payment
          methods, and technologies that hunt for fraud directly in the code to
          safeguard every site we develop. You may rest easy knowing that your
          clients' information is secure with us. Your website should grow as
          your company does.
        </p>
        <p>
          That's why we build ecommerce systems that can grow with your business
          and handle more consumers, more products, and additional features in
          the future. Whether you want to add extra connections, go worldwide,
          or operate more than one shop, we make sure you have the proper tools
          and platforms from the start. Your website is ready for tomorrow as
          well as now.
        </p>
        <h5> Transparent Process & Long-Term Support</h5>
        <p>
          Everything should be clear and easy to understand. From the first
          meeting to the last release of the project, we keep you informed and
          active at all times. Do not say anything. Not a surprise.
          Communication that is easy to understand and results you can count on.
        </p>
        <p>
          We're not done with our work when your site goes live. We can help you
          with bug fixes, changes, speed tests, platform upgrades, and more. To
          help your business stay competitive and adapt to change, we're here.
        </p>
        <p>
          As a trusted ecommerce development company in Delhi, we'll work on
          your online store for as long as you need us to, whether it's to add
          marketing tools, data, or a new look in the future. We might be more
          to you than just a service company.
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
