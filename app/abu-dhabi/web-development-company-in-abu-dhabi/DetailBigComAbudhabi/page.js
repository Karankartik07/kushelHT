"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailAbuDhabiWeb() {
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
          Web Development Company in Abu Dhabi – Build Websites That Drive
          Results
        </h4>
        <p>
          Hey, are you looking for a reliable web development company in Abu
          Dhabi? You’re in the right place. Nowadays, your website is so much
          more than just being on the internet. Your business vibe, that initial
          impression, and often the reason people choose you over the
          competition. That's why having a solid, user-friendly website is
          really important these days.
        </p>
        <p>
          We create websites that not only look awesome but also function
          smoothly.We create websites that are super user-friendly, load fast,
          and are built to help your business thrive.
        </p>
        <p>
          We can help you if you need a new website, an online store, or just
          want to make your old one look better. We've got everything
          sorted—from awesome designs and creative layouts to secure coding and
          mobile-friendly features. We'll make sure your site reflects your
          brand and connects with your audience.
        </p>
        <p>
          Our simple goal is to make your website a useful tool that you can use
          at any time. When you team up with us, you’re not just getting a
          website; you’re getting real results.
        </p>
        <p>
          If you're looking for a website that attracts visitors and boosts your
          business online, we've got you covered.
        </p>
        <h5>What Web Development Services Do We Provide in Abu Dhabi?</h5>
        <p>
          We offer a complete lineup of web development services in Abu Dhabi
          that are tailored to fit your business needs. Every business has its
          own vibe, and its website should totally reflect that. That's why we
          whip up websites that are totally custom, super easy to use, and
          designed to help you grow.
        </p>
        <p>
          We offer business websites, online stores, and custom web apps. We can
          totally help you give your website a makeover, so your old site looks
          fresh and modern. All the websites we create are mobile-friendly,
          secure, and super fast. Your visitors will have a seamless experience
          no matter what device they're using.
        </p>
        <p>
          We go beyond just design and coding. We make sure your website is
          super easy to handle and can totally grow along with your business
          needs. We take care of everything from the initial idea all the way to
          the final launch.
        </p>

        <h5> Our Web Development Services in Abu Dhabi Include</h5>
        <h6>Custom Website Design</h6>
        <p>
          Every business has its own vibe, and its website should totally
          reflect that. We design websites that totally vibe with your brand’s
          personality. We don’t roll with generic templates. We blend up layouts
          that click with your audience and match your goals. If you're looking
          for a slick corporate website, a cool portfolio, or an
          easy-to-navigate business site, we've got you covered to make your
          ideas a reality.
        </p>
        <p>
          We're all about easy navigation, cool visuals, and designs that work
          great on mobile. This makes sure your customers have a chill
          experience on any device. We make sure your website stays quick and
          easy to use, so visitors always have a smooth experience. A
          good-looking website makes people feel confident and sticks in their
          minds.
        </p>

        <p>
          With our know-how, you’re not just getting a nice-looking site—you’re
          scoring a solid online presence. If you're looking for a one-of-a-kind
          website that really shows off your brand, our custom design service is
          just what you need.
        </p>
        <h5>E-Commerce Website Development</h5>
        <p>
          An online store isn’t just about displaying products; it’s like having
          your own laid-back shop on the internet. We create awesome e-commerce
          sites that look fantastic, are really easy to use, and keep your info
          secure. We want to ensure your customers have a smooth experience
          while shopping, from browsing to checking out.
        </p>
        <p>
          We make it super easy to find product pages, navigation is a piece of
          cake, and carts load in no time. All good on the security front! No
          worries, every payment method is backed by reliable gateways. Whether
          you've got a few items or a ton, our e-commerce solutions scale up
          with your business. We've got some awesome features like product
          filters, wishlists, and order tracking to make your shopping
          experience way more enjoyable.
        </p>
        <p>
          Mobile users are really key for online shopping, so we’ve made sure
          your store works great on phones too. We help you turn visitors into
          loyal buyers with awesome designs and clever features. We're here to
          support you with our e-commerce development service so your business
          can really take off.
        </p>

        <h5>CMS Website Development</h5>
        <p>
          A website needs to be really simple to use, even if you’re not a tech
          expert. That's where CMS websites step in. With our CMS development
          service, you get complete control over your content.
        </p>

        <p>
          Go ahead and switch up the text, images, blogs, and products whenever
          you feel like it—no coding needed! We partner up with popular CMS
          platforms like WordPress, Joomla, and Drupal. Every website is made
          just for you, whether it’s a blog, a business, or an online shop. The
          design is really user-friendly, works awesome on mobile, and is all
          about high performance. We're here to help you save time and have more
          fun. No more hanging around for developers to sort out those small
          adjustments.
        </p>
        <p>
          A CMS totally simplifies keeping your website looking fresh and
          current. We’ll help you manage your site like a champ. If you want
          some flexibility and control, our CMS website development service is a
          solid choice for your business.
        </p>

        <h5>Responsive Web Development </h5>
        <p>
          Nowadays, tons of people are browsing websites on their phones. You
          definitely want a website that works well on all devices. We make sure
          your website looks great on any device—whether it's a desktop, tablet,
          or mobile. Your customers are gonna have a great time, no matter what
          device they’re using.
        </p>
        <p>
          We make websites that automatically resize to look great on any
          screen. This totally helps users out and gives SEO rankings a nice
          little lift as well. A mobile-friendly site loads faster and keeps
          folks engaged. We watch over the design, making sure buttons, menus,
          and images look spot on.
        </p>
        <p>
          A responsive website means you only need one design that works on all
          devices. You can use this site no matter where you are. This lets you
          save time, money, and effort while meeting more people. If you want a
          sleek website that's ready for mobile users, our responsive web
          development service is perfect for you.
        </p>

        <h5>Website Maintenance & Support</h5>
        <p>
          A website isn't just something you do once and forget about. It just
          needs a bit of regular care to stay secure, fast, and current. We take
          care of the website maintenance, so you can just relax. We've got
          everything sorted—updates, backups, bug fixes, and security checks.
          This keeps your website running smoothly and your visitors happy.
        </p>

        <p>
          If anything goes wrong, our support team is ready to jump in and help
          you out quickly. We watch how things are running to make sure your
          site loads fast and works without any issues. Staying on top of your
          site updates helps keep those cyber threats and tech issues at bay. We
          like to keep things fresh by making updates whenever needed, so your
          website always feels current.
        </p>

        <p>
          We’ve got the tech covered so you can keep your focus on running your
          business with our maintenance service. It’s like having a digital
          friend who's always got your back. A nice, tidy website makes folks
          trust you and keeps them coming back for more. That's exactly what we
          offer.
        </p>

        <h5>SEO-Friendly Web Development</h5>
        <p>
          A beautiful website is pretty useless if no one can find it. That's
          why we build websites that totally keep SEO in mind. We ensure your
          website is super easy to find on search engines with our SEO-friendly
          web development.
        </p>
        <p>
          We’re into clean code, fast loading times, and smooth design.
          Everything—from the headings to the images—is set up to help search
          engines understand what your content is all about. It's really
          important to make sure your site runs smoothly on all devices, and
          we've got that handled. We've got SEO tools ready to go for you,
          making it super chill to manage your keywords, meta tags, and
          analytics.
        </p>
        <p>
          We're just trying to get your website all set up to rank higher on
          Google. When you’re more visible, more folks notice you, which means
          more leads and sales coming your way. We blend cool design with smart
          optimization for a development that's SEO-friendly. It's a solid way
          to naturally amp up your online vibe.
        </p>
        {/* <p>
          We handle everything, from building the front end to making sure it
          works with your BigCommerce backend. Our PWA development solution will
          help you get your shop ready for the future and provide your consumers
          with a contemporary experience. We can make your shop better, smarter,
          and quicker all at the same time.
        </p> */}

        <h5>Why Choose Us for Web Development Services in Abu Dhabi? </h5>
        <p>
          Picking the right web development company can really change the game
          for your business. A solid website isn't just some spot online; it's
          more like your brand's hangout zone. At our company, we’re all about
          making websites that not only look awesome but also run smoothly.
        </p>
        <p>
          We've got it all, from easy navigation to designs that adapt
          perfectly. We mix creativity and tech to get you awesome results. We
          get what local businesses in Abu Dhabi need and create solutions that
          match your goals.
        </p>
        <p>
          When you team up with us, you’re not just getting a service
          provider—you’re getting a dependable partner who really cares about
          your success.Here’s why we could be the perfect fit for your web
          development adventure:
        </p>
        <h5> Local Expertise with Global Standards</h5>
        <p>
          We know the Abu Dhabi market pretty well. Local businesses totally
          need websites that connect with the community while also meeting those
          global standards. We blend cultural vibes with fresh design styles.
        </p>
        <p>
          Your website totally connects with your target customers right away.
          We're all about using the latest tech while keeping it chill and
          user-friendly. You’re not just getting a website—you’re getting a cool
          digital identity that totally matches what your business needs.
        </p>
        <p>
          Whether you're just getting started, expanding your business, or
          already a recognized name, we've got the right solutions for you.
        </p>
        <p>
          We mix local expertise with great quality to make your business stand
          out online.
        </p>

        <h5>Customized Web Solutions</h5>
        <p>
          Your business is one of a kind, and your website should totally show
          that off. We think that generic solutions really aren’t the way to go.
          We hang out with you to get a feel for your business goals, who you
          want to reach, and what design vibes you’re into.
        </p>
        <p>
          We whip up custom solutions just for you, whether it's for e-commerce
          sites or corporate portals. Your websites can totally roll with the
          punches as your business grows. We make sure everything works great
          for your users, always thinking about how it functions.
        </p>

        <p>
          What sets us apart is our personalized approach towards web
          development.
        </p>

        <p>
          We don't create just good looking websites, in fact we craft a fully
          functional online store that works well and delivers real results.
        </p>
        <h5>Focus on User Experience</h5>
        <p>
          Using a website should be super easy. One reason for this is that we
          create with the user in mind. We ensure your visitors have a great
          time by keeping everything from navigation to loading times smooth and
          fast.
        </p>

        <p>
          If people have a good time on your website, they'll stick around
          longer and are more likely to buy something. All our designs work
          great on desktops, tablets, and phones, so you can use them anywhere
          without a hitch.
        </p>
        <p>
          We run everything through a solid testing process to ensure there are
          no issues. Focusing on the user experience helps us build trust and
          credibility with your audience. If your website is easy to get around
          and fun to use, visitors are way more likely to come back and buy
          again.
        </p>
        <h5>Strong Technical Expertise</h5>

        <p>
          A Cool website looks awesome, but it could really use some solid
          coding behind it. That's why our crew focuses on building websites
          with a strong technical foundation.. Our developers totally know their
          stuff when it comes to the latest programming languages, frameworks,
          and tools. We can create websites that are fast, secure, and really
          responsive, whether you need one on WordPress, Shopify, or something
          completely custom.
        </p>
        <p>
          We love design, but we also make sure your site works great on any
          device. We believe that speed and performance are super important, so
          we make sure your website loads fast and gives users a smooth
          experience. We're really into security, as well. We've got your back
          with some great tips to keep your data and customers safe from online
          threats. And we handle all the important SEO stuff while we’re putting
          it together. This makes sure your website is easy to use and good for
          search engines right from the get-go. With our cool tech skills,
          you’ll get a website that looks great and works like a charm. Pick us
          as your go-to web development team in Abu Dhabi.
        </p>
        <h5> Reliable Help & Ongoing Collaboration</h5>
        <p>
          Launching your website is just the first step on your path to online
          success. But the story doesn't end though. That's why we ensure you
          always have support after your site is up and running.
        </p>
        <p>
          We're here for you after launch with all the support you need, regular
          updates, security checks, and fast fixes whenever you want them. We're
          all about growing together. As your business grows, we’re here to help
          you jazz up your website with cool new features, design tweaks, or
          extra functionality.
        </p>
        <p>
          If you need to fix a little bug, update your content, or make your
          site ready for more visitors, we’re here to help. We aim to be your
          go-to digital buddy for the long haul, not just a quick fix. We've got
          your back with dependable, continuous support.
        </p>
        <p>
          {" "}
          If you need a reliable web development company in Abu Dhabi, we’ve got
          your back. Let’s team up and make your success happen—reach out to us
          today!
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
