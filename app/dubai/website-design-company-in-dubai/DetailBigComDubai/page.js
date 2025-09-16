"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailBigComDubai() {
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
          Professional Website Design Company in Dubai – Build a Stunning Online
          Presence
        </h4>
        <p>
          Looking for a partner who creates websites tailored to your brand?
          We're the best website Design company in Dubai, helping brands create
          cool vibes online. We build websites that are safe, load fast, look
          great on mobile, and are really easy for everyone to use.
        </p>
        <p>
          Absolutely, we all know how important it is to make a great first
          impression. That's why we make cool websites that work great and look
          amazing on any device. Your buyers can easily search, no matter what
          device they're on.
        </p>
        <p>
          Every company has its own laid-back vibe. That's why we stay away from
          clichés.We make unique websites that totally fit the vibe and goals of
          your brand. We can whip up anything from a simple business site to a
          super cool e-commerce platform packed with features.
        </p>
        <p>
          Our method is super simple. We get to know your audience, hear your
          thoughts, and create a website that transforms visitors into loyal
          customers. We make your website stand out with stylish designs,
          awesome graphics, and easy-to-use features.
        </p>
        <p>
          Let's turn your dream into a reality. Hit us up anytime to schedule a
          free chat about how we can help you create the perfect website for
          your business.
        </p>
        <h5>What We Offer as a Website Design Services in Dubai?</h5>
        <p>
          We're a top website design company in Dubai, and we’re all about
          making websites that look awesome and work like a charm. If you're
          just starting out online or if you're a well-known brand wanting to
          give your site a fresh look, we've got your back.
        </p>
        <p>
          We make websites that are fast, secure, mobile-friendly, and super
          easy to navigate. We whip up everything from simple business sites to
          fancy online stores, always keeping your audience in mind. We've got
          all your bases covered—payment gateways, custom features, interactive
          stuff, and more—to keep everything running smoothly.
        </p>
        <p>
          What makes us different is the way we team up with you. We hear you
          out, get what you're aiming for, and then whip up solutions that
          really work for your business.Let’s keep it easy and to the point—just
          real talk and genuine results. If you need a website to boost your
          business, we’ve got you covered.
        </p>

        <h5> What Website Design Services Do We Offer?</h5>
        <h6> Tailored Website Design for Your Brand</h6>
        <p>
          Your website shouldn't blend in with the crowd. It’s gotta show off
          your brand and vibe with your audience. We're a top-notch website
          design company in Dubai, crafting designs that really showcase your
          business. We keep things looking fresh and simple from the homepage
          all the way to the product or service pages, making it super easy to
          navigate. Our designers really get to know your business, your
          customers, and your goals before kicking off any project.
        </p>
        <p>
          We keep our layouts looking good while making sure they're super
          practical, so visitors can easily find what they need without getting
          lost. All designs are super mobile-friendly and optimized for
          performance, making sure they run smoothly on phones, tablets, and
          desktops. If you're after a chill, minimal vibe or something totally
          out there, we've got you covered to make your ideas a reality.
        </p>

        <p>
          A solid design really helps build trust, keeps folks interested, and
          sticks in their minds. Working with us means you’ll get a website
          that’s not just really cool but also helps your business stand out.
        </p>
        <h5>E-Commerce Websites That Boost Sales</h5>
        <p>
          If you've got an online store, your website is basically your main
          shop window. We create cool e-commerce websites that not only look
          great but also help turn visitors into customers. Every product page
          is designed to help you browse and buy with ease. We've got some
          awesome features like simple navigation, handy search filters, and a
          super smooth checkout experience.
        </p>
        <p>
          Making sure everything's secure is really important, so your customers
          can feel good about shopping. We set up dependable payment gateways
          and keep everything running without a hitch. We’ll make sure your
          store loads fast, works great on mobile, and can expand as your
          product lineup grows.
        </p>
        <p>
          If you're starting a new online store or sprucing up your existing
          one, we've got the perfect solutions for you. We've got it covered,
          whether it's a little cozy shop or a big online store. Just make sure
          your customers can shop without any hassle, and you'll boost your
          sales with a slick, high-quality website.
        </p>

        <h5>Responsive and Mobile-Friendly Designs</h5>
        <p>
          These days, many people use their phones to surf the web. That's why
          it's no longer a nice-to-have an app that works well on phones, it's a
          must. We make sure that your website works well on all devices and
          looks great.
        </p>

        <p>
          The style changes on the fly so that it looks good and works well on
          any device, whether you're on a phone, tablet, or computer. People can
          scroll, click, and shop without any problems. We’re all about creating
          responsive layouts that are super simple and easy to use. Everything
          from fonts and images to navigation menus and buttons is made to work
          smoothly on mobile. This also boosts your search engine ranking since
          Google likes websites that work well on mobile devices.
        </p>
        <p>
          In Dubai’s bustling market, where people want quick and easy access to
          services, having a responsive design can really set your business
          apart. We check out every site on different devices to make sure
          everything runs smoothly. No need to stress about missing out on
          customers because of a bad mobile design with us around. Your
          website's gonna look super professional all over the place and bring
          in more visitors.
        </p>

        <h5>SEO-Friendly Web Development</h5>
        <p>
          A cool website is only good if people can actually discover it. That's
          where SEO comes into play. We build websites that are designed to be
          SEO-friendly, helping your business move up the ranks on Google and
          other search engines. We've got it all sorted, from clean code to fast
          loading times—every little thing is handled.
        </p>
        <p>
          We whip up content layouts that search engines can totally read and
          index without a hitch. This basically means your site is more likely
          to pop up in front of potential customers. Our team stays on top of
          the latest SEO trends, like using optimised URLs, image tags, and
          ensuring everything looks great on mobile. We set you up with
          analytics tools so you can track performance and really understand
          your audience.
        </p>
        <p>
          In Dubai's digital world, having a website that's SEO-friendly can
          really make a difference. Whether you're targeting the locals or going
          for a worldwide audience, we've got your website sorted to catch eyes
          and deliver results. When you join forces with us, you’re not just
          getting a sleek website—you’re getting one that actually helps people
          discover and trust your business.
        </p>

        <h5>Fast and Secure Websites</h5>
        <p>
          A quick and safe website is really key to making it successful. If
          your site is slow, folks are gonna leave pretty quickly. If it’s not
          safe, folks just won’t trust it. That's why we keep both in mind for
          every project. We’re all about using the latest tech and coding hacks
          to whip up websites that load super fast, even with amazing images and
          fun features.
        </p>

        <p>
          We make sure everything's secure with SSL certificates, reliable
          payment gateways, and regular updates to keep your data and your
          customers safe. This creates a relaxed browsing and shopping
          atmosphere, which is really key for businesses in Dubai’s growing
          online market. A fast and secure website keeps things simple for users
          and can help your SEO rankings as well.
        </p>

        <p>
          Search engines really dig websites that are quick and dependable. We
          run a ton of tests before we launch to make sure everything goes off
          without a hitch. Teaming up with us means you’ll get a website that
          actually works, keeps your visitors relaxed, and helps you grow over
          time.
        </p>

        <h5>Ongoing Support and Maintenance</h5>
        <p>
          Firstly, get your site running. As long as you do regular repairs and
          changes, everything will work fine. We'll keep your site safe, quick,
          and up to date.
        </p>
        <p>
          We've got you covered for all sorts of stuff, whether it's fixing
          little issues or throwing in some awesome new features and switching
          up materials. We switch up the speed when we need to, and we just keep
          an eye on how everything's going. Not stressing over tech problems
          will help your business run like a breeze. They're super flexible, so
          you can choose the help plan that suits you best.
        </p>
        <p>
          In Dubai, where things are always buzzing, it's key to keep your
          website fresh and reliable. Let our experts handle the tech stuff
          while you kick back and focus on growing your business. We're here for
          you every day to help you make those lasting changes that will keep
          your website looking good. If you stay on top of maintenance, your
          website will always look great, be secure, and run smoothly.
        </p>
        {/* <p>
          We handle everything, from building the front end to making sure it
          works with your BigCommerce backend. Our PWA development solution will
          help you get your shop ready for the future and provide your consumers
          with a contemporary experience. We can make your shop better, smarter,
          and quicker all at the same time.
        </p> */}

        <h5>Why Pick Us for Your Website Design in Dubai?</h5>
        <p>
          Choosing the right website design company can be a little challenging.
          Your website is more than just a spot online—it’s the first impression
          folks get of your brand, a way to score some sales, and a chance to
          earn trust. You definitely want a team that gets design, strategy, and
          tech.
        </p>
        <p>
          We're a reliable web design company in Dubai, helping startups, small
          businesses, and enterprises create websites that really get the job
          done. We’ve got everything from sleek, modern designs to layouts that
          are all about SEO. Our goal is to make sure your site grabs attention,
          keeps people interested, and turns visitors into customers right from
          the start.
        </p>
        <p>
          We don’t just whip up websites—we craft complete online experiences
          that help your brand thrive and succeed. When you work with us, you
          can expect clear communication, deadlines that we stick to, and
          results that really show what we can do.Check out why we could be the
          perfect fit for your web design adventure:
        </p>
        <h5> Experience That Matters</h5>
        <p>
          Your business needs a crew that gets what works in the digital space.
          We've got years of experience in website design, creating everything
          from basic business sites to more complex platforms. We don’t just
          pick themes or take the easy route—we really get into your business,
          your goals, and your audience before creating any design. This ensures
          your website isn't just another cookie-cutter template, but a unique
          solution crafted specifically for your brand.
        </p>
        <p>
          We make websites that look awesome, are really easy to use, and have a
          nice, clean feel. As we move along, we’re always checking out the
          latest design trends and tech to keep your site fresh and
          future-ready.
        </p>
        <p>
          We've got experience with everything from corporate sites to
          portfolios and even full-on online stores. We totally know how to get
          it done right from the get-go.
        </p>
        <p>
          When you team up with us, you're not just getting designers—you’re
          getting partners who really know how to make ideas happen.
        </p>

        <h5> Customized Solutions for Your Business</h5>
        <p>
          Your business is one of a kind, and your website should totally
          reflect that. We believe designs should be unique and customized to
          suit personal preferences. We create custom websites that fit your
          brand's style, what your audience wants, and your business goals.
        </p>
        <p>
          Looking for a fun and unique design? A website in multiple languages?
          What about cool stuff like booking systems, product catalogs, or
          custom forms? We get it done. We kick things off by really getting to
          know your brand—what you offer, who your customers are, and what sets
          you apart.
        </p>

        <p>
          You get a website that looks awesome and helps you level up.It will
          bring more users to your site, keep them interested, and make them
          regular customers.
        </p>

        <p>
          We can build a website for you that works for you today and can expand
          with you later, whether you own a little store, a new business that's
          doing well, or a major enterprise.
        </p>
        <h5> Mobile-Friendly, User-Centric Design</h5>
        <p>
          More than half of people who surf the web these days do it on their
          phones. That's why we build websites that look awesome and work
          seamlessly on phones, tablets, and desktops.. A site that's easy to
          use on mobile makes it super simple for your customers to have a great
          experience, no matter where they are.
        </p>

        <p>
          We focus on making things quick and easy, so users can have a smooth
          experience—whether they're just landing on your site, checking out
          services, or making a purchase. A mobile-friendly website not only
          makes users happier but also helps you get more conversions and climb
          up the search rankings.
        </p>
        <p>
          We make everything super easy for users by cutting out the extra steps
          and providing clear calls-to-action. If your browsing experience is
          smooth and quick, people are way more likely to trust your brand and
          do something about it. Your website will not only function but also
          provide a smooth experience on any device.
        </p>
        <h5>SEO-Optimized Websites That Rank</h5>

        <p>
          A website can look super cool, but if nobody can find it, what’s the
          point? Whenever we set up a site, we totally keep SEO best practices
          in mind. We take care of all the techy stuff for you, like sorting out
          your URLs, titles, and meta tags, plus ensuring your site loads
          quickly. This makes it super easy for search engines to find your
          site.
        </p>
        <p>
          We keep SEO in mind when we design, helping your site move up the
          Google ranks and making it a breeze for potential customers to find
          you. We make sure your site’s setup is good for adding new stuff like
          blogs, service updates, and landing pages. This sets you up nicely for
          digital marketing campaigns and helps with steady organic growth over
          time. A slow, clunky website can totally bring your brand down.We’re
          all about making your site easy to use, quick to load, and great for
          search engines. Your website isn’t just about being pretty—it’s all
          about bringing in the right crowd.
        </p>
        <h5> Keeping the Support Going After Launch</h5>
        <p>
          Getting your website up and running is just the beginning. Once we
          launch, we just make a few small tweaks, updates, and check the
          security to keep everything running nice and smooth.
        </p>
        <p>
          We're here to help you out with fixing bugs, adding new features,
          updating content, or just making some design tweaks. We're all about
          keeping your site safe, speedy, and in the loop with the latest
          trends. No worries about any downtime or tech problems—we're here for
          you! Feel free to call, text, or shoot us an email.
        </p>
        <p>
          We'll get back to you fast and break everything down in
          easy-to-understand language. Keeping up with things has never been
          simpler.
        </p>
        <p>
          When you team up with us, you’re not just getting a top-notch website
          design company in Dubai—you’re gaining a reliable digital buddy who's
          all about helping your business thrive online. We're all about your
          success, and we'll stick by you through it all, making sure your
          website looks awesome and gets you the results you want. Let’s build a
          digital vibe that draws in customers, earns trust, and helps us grow.
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
