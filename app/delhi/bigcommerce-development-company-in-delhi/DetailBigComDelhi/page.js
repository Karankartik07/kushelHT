"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailBigComDelhi() {
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
          BigCommerce Development Company in Delhi – Where Vision Meets
          Conversion
        </h4>
        <p>
          First impressions are incredibly crucial when you sell anything
          online. If you need a trustworthy BigCommerce development company in
          Delhi that can help you get website visitors to come back, you've come
          to the correct spot.
        </p>
        <p>
          At Kushel Digi Solutions, we develop BigCommerce shops that not only
          look amazing but also perform well, load fast, and help you generate
          sales. We build websites that are simple to use on mobile devices and
          help your company meet its objectives, whether you're starting a new
          shop or fixing up an existing one.
        </p>
        <p>
          We know how to use BigCommerce's sophisticated features, including
          secure checkout, multiple selling, and custom APIs, since we've been
          using it for years. And we don't believe that one size fits everyone.
          We make sure that every shop we construct is right for your company
          and resonates with your customers.
        </p>
        <p>
          We still have things to complete when the website goes online. We make
          sure that your shop is simple to pay for, performs well on all
          devices, and is ideal for SEO. Are you going to switch from
          WooCommerce, Magento, or Shopify? There won't be any complications or
          downtime when we do it.
        </p>
        <p>
          We also provide continuous support, which might include adding new
          features, checking on how the site is performing, or completing
          regular maintenance. Choose a BigCommerce development partner in Delhi
          who wants to help your online company stand out if you want to work
          with someone you can trust.
        </p>
        <h5>What You Get with Our BigCommerce Development Services?</h5>
        <p>
          You need more than just a website for your ecommerce business to run.
          You need a plan, the ability to change things, and a promise to always
          make it better. When you hire our BigCommerce development services, we
          do just that. We give you everything you need to build your online
          business, whether you're just starting or want to grow an existing
          one.
        </p>
        <p>
          We make sure that your BigCommerce store works well and looks great by
          creating unique styles and making sure that third-party apps can
          connect to it. Do you need help setting up goods, changing your
          business, or a payment gateway? We'll take care of you. We also work
          on making things run better and making them work on mobile devices so
          that your clients may have a speedy, perfect experience no matter
          where they are.
        </p>
        <p>
          What's different about us? We do more than finish tasks; we also build
          connections. We are honest, flexible, and determined to get things
          done. No tech jargon that doesn't make sense; just actual answers that
          can help you sell online more easily and earn more money. Let's make
          something great together.
        </p>

        <h5> Our BigCommerce Development Services Delhi Include</h5>
        <h6>Custom BigCommerce Store Design</h6>
        <p>
          Each brand has its own style, and that should show in your online
          shop. We make fully unique BigCommerce store designs that fit the
          style and goals of your brand. Our artists work closely with you to
          make your ideas come to life, whether you want something simple and
          clean or bright and bold.
        </p>
        <p>
          We stress adaptable design, user experience, and easy access so that
          your customers can shop without any problems. There will be a store
          that not only looks great but also works perfectly. There are no
          pre-made themes here. Just new, original designs that will help you
          stand out in Delhi's growing digital market.
        </p>

        <p>
          Everything, from the ads to the product pages to the checkout, is made
          to turn viewers into buyers. The best part? We make sure that your
          store looks great on all devices, including phones and computers.
          We'll make what you dream of.
        </p>
        <h5>BigCommerce Development & Customization</h5>
        <p>
          Want more than the basics? Our BigCommerce creation and customisation
          services in Delhi are made to make your online store stronger than
          ever. From advanced search and browsing to product filters and group
          styles, we make it all fit your needs. Want a tool that isn't in
          BigCommerce but you need it? Don't worry, we'll build it for you. We
          make sure that the back end of your site works just as well as the
          front end, which makes it easy to manage sales, supplies, and
          advertising.
        </p>
        <p>
          We don't just care about how your store looks; we also make sure it
          runs quickly, stays safe, and gives customers a great shopping
          experience. Your BigCommerce site will be customised to fit the needs
          and goals of your business, no matter how big or small it is.
        </p>
        <p>
          We also use the best ways to code, so everything is stable and can be
          expanded. We're like your tech team that works behind the scenes to
          make sure your website does what you want it to do.
        </p>

        <h5>BigCommerce API & Third-Party Integrations</h5>
        <p>
          These days, internet stores are more than simply websites; they're
          complete communities. We provide BigCommerce development services in
          Delhi that involve easily adding third-party tools and APIs. We make
          sure that all of them operate effectively together, from CRMs like
          HubSpot and Zoho to ERPs like NetSuite and Tally.
        </p>

        <p>
          Do you need a means to take payments, figure out shipping costs,
          utilise live chat, or automate your marketing? We'll take care of
          setting them up for you. You don't have to move between ten
          applications anymore since everything is in one spot. We also link
          your shop to sites like Amazon, Flipkart, and Google Shopping so that
          as many people as possible can find it.
        </p>
        <p>
          It's obvious to see what we want: to save you time, cut down on manual
          effort, and make sure everything is perfect on all platforms. I/O may
          be hard, yet we handle it all with clean code and no difficulties. You
          can focus on growing your company while your store takes care of
          everything else.
        </p>

        <h5>Improving BigCommerce's SEO and performance </h5>
        <p>
          It doesn't matter how great your shop is if no one comes in or out.
          That's where our BigCommerce SEO and speed improvement services come
          in. We make sure search engines can find your site right away. That
          means things like fast loading times, design that works well on
          phones, clear URL structures, schema code, and more.
        </p>
        <p>
          We also check that your meta tags, alt texts, page layout, and product
          details are all the best they can be. This helps you rank higher on
          Google and other search engines. We do more than SEO, though. Besides
          that, we make sure your site works well so that pages load quickly.
          This keeps the number of people who buy something high and the number
          of people who leave your site low.
        </p>
        <p>
          We also use tools like Google PageSpeed Insights and GTmetrix to check
          your site's speed and make it better. Your competitors will still be
          trying to figure out why their site is slow, but you'll already have
          users and sales. To put it simply, we turn your BigCommerce store into
          a fast, Google-friendly sales machine.
        </p>

        <h5>BigCommerce Store Migration & Upgradation</h5>
        <p>
          Use Shopify, WooCommerce, Magento, or a different tool to run your
          store already? Do you have an old version of BigCommerce? Not a
          problem. Our store moving and upgrading services in Delhi make the
          change easy and stress-free. We take care of all of your sales, users,
          goods, groups, content, and SEO URLs, so you don't have to.
        </p>

        <p>
          Before we start, we also make sure that your info is backed up
          properly. As a result? A new, up-to-date store with all the goods from
          your old store, but without the tech problems. We will also update
          your store without changing anything if you are already on BigCommerce
          but using old styles or features.
        </p>

        <p>
          You'll get better speed, more design choices, and more powerful tools
          to help you grow. We know that moves sounds scary, but our team takes
          care of everything in the background without you having to do
          anything. Not a break. No mistakes. More than that, just a better
          store that's built to grow with your business.
        </p>

        <h5>Progressive Web App (PWA) Development</h5>
        <p>
          In today's mobile-first era, speed and how easy it is to use are more
          crucial than ever. Progressive Web Apps (PWAs) are what you need. We
          can help you make the most of them. Our BigCommerce PWA development
          service's purpose is to make your online shop seem like a quick mobile
          app, but consumers don't have to download anything.
        </p>
        <p>
          Your BigCommerce shop performs better, quicker, and even when your
          internet connection is poor, when you install a PWA. It loads fast,
          allows you to explore while you're not online, and sends you push
          messages like native applications. The best thing is? You don't have
          to worry about having it authorised by the app store since it still
          works in the browser.
        </p>
        <p>
          No matter whether they buy on their phone or PC, your consumers will
          have a flawless, app-like experience that keeps them coming back.
          Also, PWAs get people to engage more, decrease bounce rates, and
          improve overall purchases, which is what every online company wants.
        </p>
        <p>
          We handle everything, from building the front end to making sure it
          works with your BigCommerce backend. Our PWA development solution will
          help you get your shop ready for the future and provide your consumers
          with a contemporary experience. We can make your shop better, smarter,
          and quicker all at the same time.
        </p>

        <h5>Why Choose Us as Your BigCommerce Development Company in Delhi?</h5>
        <p>
          Finding the right BigCommerce development partner in Delhi is a
          never-ending task. The issue is that you need more than one developer.
          You need a team that understands your business, makes things with a
          purpose, and gets outcomes that turn into sales. If you're looking for
          a BigCommerce development company in Delhi, choosing us can be one of
          the finest things you can do for your business for these primary
          reasons.
        </p>
        <p>
          We not only create beautiful shopfronts, but we also make ecommerce
          experiences that are fast, easy to use, and strong. We can help you at
          any point, whether you want to make changes or start again. We want to
          help your shop thrive in every way, from sales to traffic to customer
          loyalty. We do this by offering everything from custom designs to easy
          integrations and ongoing support.
        </p>
        <p>
          Here are some key pointers on why you should choose us as your
          BigCommerce development agency in Delhi:
        </p>
        <h5> End-to-End BigCommerce Expertise</h5>
        <p>
          We offer full BigCommerce options, from setting up to expanding. Our
          team really knows everything there is to know about the BigCommerce
          platform. Whether you're a small business or a big company, we make
          sure that everything fits your needs.
        </p>
        <p>
          We don't have a one-size-fits-all method. Instead, we focus on your
          business goals and fashion a plan around them. We make sure that your
          store looks great, works perfectly, and fits your brand perfectly by
          customising the theme, checkout flows, and advanced features.
        </p>
        <p>
          We can also connect third-party apps like ERPs, CRMs, payment systems,
          and more. Need to connect to an API? Take it as done. They know how to
          deal with real-life ecommerce issues, so you won't just get a store
          that works; you'll get a sales machine that rocks.
        </p>
        <p>
          The best part? We make complicated tech stuff easy for you so you can
          grow your business while we take care of the rest.
        </p>

        <h5>Mobile-Optimized and SEO-Friendly Designs</h5>
        <p>
          More than 60% of people who shop online do so on their phones. We make
          sure that your BigCommerce store is ready for these people. Our
          designs are mobile-first, which means they work well and look great on
          all screen sizes, like phones, tablets, and laptops. That means users
          won't have to pinch or zoom, and they won't have to leave in anger.
        </p>
        <p>
          won't have to pinch or zoom, and they won't have to leave in anger. We
          also look at more than looks. We build all of our sites with SEO best
          practices in mind. We make sure your store is ready to rank on Google
          by making sure the code is clean, the pages load quickly, and the data
          is organised.
        </p>

        <p>
          When it comes to on-page optimisation, we can help with things like
          keyword placement, product information, alt tags, and even mobile page
          speed scores.
        </p>

        <p>
          When your store looks great and is also search engine friendly, you
          get more pure traffic and a better experience for your customers. And
          when that happens, sales follow.
        </p>
        <h5>Custom Solutions for Unique Business Needs</h5>
        <p>
          Your BigCommerce shop should indicate that your firm is different from
          others. That's why we provide you choices that are perfect for your
          users, company, and objectives. We create one-of-a-kind features that
          help your company function smoothly and offer your shop an advantage
          over the competition, whether you sell electronics, handcrafted items,
          or a marketplace featuring goods from many companies.
        </p>

        <p>
          Want to manufacture your things? You need a tool. We are going to make
          it. Need a different method to log in as a company or establish
          prices? We will handle it. Our authors enjoy taking on new projects,
          and we always make sure that your shop is simple to operate and
          versatile, even as your company expands.
        </p>
        <p>
          Don't worry; we won't use technical language that you don't
          comprehend. We will use clear English to describe what we are doing
          and assist you in making decisions at every step. Your shop is more
          than simply a website; it's the heart of your company.
        </p>
        <h5>Ongoing Support and Maintenance</h5>

        <p>
          After launch, your BigCommerce journey doesn't end, and neither does
          our help. We'll be here to make sure everything goes smoothly as your
          store grows. Your store will run smoothly with our help, as we fix
          bugs, fine-tune speed, add new features, and apply security patches.
          We have upkeep plans that can be changed to fit your needs.
        </p>
        <p>
          Need help with adding new features, organising holiday sales, or
          dealing with large amounts of traffic? Just give us a shout—you can
          call or text us. No more having to wait forever for help or deal with
          answers that are too slow. We want our clients to stay with us for a
          long time. That's why we offer continuous tracking, regular reports,
          and clear contact all the way through. Because if your store does
          well, your business does well, and everyone wins.
        </p>
        <h5>Transparent Pricing and Timely Delivery</h5>
        <p>
          To be honest, no one likes being surprised about money or due dates.
          Because of this, we make it clear what things cost and when they will
          be sent. From the start, you'll know what you're paying for and when
          to expect results. There are no surprises or delays at the last
          minute; everything is thought out and done in a clear way.
        </p>
        <p>
          You can see how far you've come by breaking each job down into steps.
          Do you want to change something? We'll be honest about them and change
          the plans if we need to. We want to not only deliver quickly, but also
          well.
        </p>
        <p>
          Because we value your time and money, we keep our vows and meet our
          goals. With us, you don't have to worry about being kept up to date.
          We, as a trusted BigCommerce development company in Delhi, keep you up
          to date and give you results that give your business the confidence to
          grow.
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
