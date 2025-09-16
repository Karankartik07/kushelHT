"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailEcomDevGurgaon() {
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
        <h3>
          Ecommerce Development in Gurgaon: Build Future-Ready Digital Stores
        </h3>
        <p>
          Wanting to grow your online business with solutions that are both
          strong and futuristic? We are an ecommerce development agency that
          serves growth-driven businesses in Gurgaon. We design and build fast,
          flexible, result-oriented ecommerce platforms. We know how to scale in
          India’s top tech hubs. This applies to D2C lifestyle brands, B2B
          distributors, and hyperlocal delivery start-ups.
        </p>
        <p>
          The online marketplace of Gurgaon is booming like never before, and so
          should your online store. We create ecommerce experiences that are
          both beautiful and functional. This helps you attract more traffic,
          reduce cart abandonment, and boost repeat purchases.
        </p>
        <p>
          You could be launching a product for the first time. Maybe you're
          changing your sales model. Or you might be expanding your multi-vendor
          operation. We shape our development process to fit your needs and
          business goals. At our ecommerce development company in Gurgaon, we
          build ecommerce platforms that grow with your vision. We start with
          your concept and take it all the way to code and conversion. Our
          solutions are future-proof.
        </p>
        {/* <p>
          When you seek a skilled e-commerce development company in Chennai with
          the capability to integrate technology with intelligent branding, no
          one is better than us. Get in touch with Kushel Digi, we will create
          something your chapter members will adore and your rivals will crave.
        </p> */}
        <h4>Custom Web App Development for Modern Businesses</h4>
        <p>
          A basic web application is not sufficient in Gurgaon, where the
          ecommerce industry is booming. Companies require intelligent
          applications that are able to address actual operations. We provide
          tailor-made web application services. They assist in improving
          logistics, inventory, and customer relations in your ecommerce
          adventure.
        </p>
        <p>
          We develop powerful web applications to meet your requirements. Your
          sales force in Gurgaon might find use in customized CRM systems, and
          your delivery partners might require to track tracking dashboards. You
          are covered by us. Our technologies are React, Node.js, Laravel, etc.
          Our tools are flexible, safe, and easy to use. They are integratable
          with your current systems. This will help you to develop efficiencies
          and a competitive edge.
        </p>
        {/* <p>
          The integration of third-party tools, custom plugins, dashboards, and
          performance optimizations is also the area of our expertise to make
          sure your site is productive in its functional efficiency and success
          in search engine rankings. All our websites are mobile-friendly,
          search engine optimized, and ready to scale.
        </p>
        <p>
          We offer web development services that can hit the spot in Chennai and
          beyond to provide high-performance outcomes based on your brand, your
          audience, and your goals with a focus on results and performance.
        </p> */}
        <h4>UX/UI Design Services for Seamless Digital Experiences</h4>
        {/* <h6>Custom Web Application Development</h6> */}
        <p>
          In Gurgaon, the ecommerce customers are on the move, smart, and easy
          to go out with. The UX design department is aware of the modern
          customers. The well-designed experiences are retention, engagement,
          and conversion.
        </p>
        <p>
          It is award-winning, heatmap, behavior-tracked, A/B tested visual
          storytelling. This makes for a custom and hassle-free ecommerce
          experience.
        </p>
        <ul className="extra-chen-li">
          Our UX strategies can:
          <li>Optimize the checkout flow </li>
          <li>Create interactive product discovery environments </li>
          <li>Improve sales </li>
          <li>Limit cart abandonment</li>
        </ul>
        <p>
          Focusing on urban consumers in the NCR region or B2B buyers can set
          you apart with purposeful design. We will enable it.
        </p>
        <h6>
          Progressive Web App Development for Fast, Mobile-First Performance
        </h6>
        <p>
          In this fast and competitive digital economy of Gurgaon, it is purely
          speed and availability. Our PWA development services help ecommerce
          companies to offer app-like UX, which can be operated smoothly without
          needing anything to be installed. PWAs are faster to load,
          offline-capable, and are also among the fully mobile-optimized
          applications. This will be the magnet that will attract the high-tech
          buyers in Gurgaon.
        </p>
        <p>
          We develop bespoke PWAs made with Angular, Vue.js, and React. This
          assists in making your ecommerce store quicker and raises SEO. Your
          PWA will increase user engagement and repeat visits. This is because
          it uses push notifications, unlimited access to the home screen, and
          very minimal data usage. This is critical in the case of local brands,
          delivery apps, and on-demand services as well.
        </p>
        {/* <p>
          We will seek to develop a user interface that is natural, exposed, and
          coherent with your brand narrative as well as user anticipation. Good
          design is about more than sight; it is practical, and it sells.
        </p> */}
        <h6>
          Custom API Integration Services for Seamless System Connectivity
        </h6>
        <p>
          The ecommerce companies of Gurgaon have the need to grow with strong
          API connectivity. Interested in setting up third-party logistics APIs
          such as Delhivery or Shiprocket? Or are you in need of payment
          processors such as Stripe or Razorpay? Or we may assist in SAP or Zoho
          ERPs. You can find it all here!
        </p>
        <p>
          Our expertise in integration, safety, real-time, and optimization on
          your platforms is guaranteed. We assist you in connecting your
          warehouse, payment, inventory, and customer relationship management
          (CRM) systems. This forms a core e-commerce engine. It enhances
          automation, quickens delivery, and improves the customer experience
          via channels.
        </p>
        {/* <p>
          Our PWAs are reliable, secure, and fast, whether in e-commerce systems
          or booking engines. Our PWA services offer high performance and low
          bounce rates so that your brand can compete effectively against other
          mobile-first consumers in India or take over where you have limited
          presence presently.
        </p> */}
        <h6>End-to-End Full-Stack Web Development Services</h6>
        <p>
          Our ecommerce development company in Gurgaon helps businesses gain
          full control of their technology. We will provide a full development.
          This consists of UI/UX design and backend logic, and database
          structure.
        </p>
        <p>
          We utilize the stacks (MERN, MEAN, LAMP) to develop safe and scalable
          environments. Whether you run a fashion store for Gen Z or a B2B
          company with complex orders, our team will build an ecommerce site. It
          will manage peak traffic and grow with your needs.
        </p>
        {/* <p>
          The API integration services we offer include consultation, system
          mapping, development, testing, and after-launch support. Both headless
          commerce solution construction and multichannel lead collection
          automation benefit from seamless, secure connectivity throughout the
          process, facilitated by our local Chennai team.
        </p> */}
        <h6>Website Upgrade and Platform Migration Solutions</h6>
        <p>
          In this dynamic ecommerce environment, transferring your internet
          store to a new modern platform or upgrading it is inevitable. We
          provide upgrade and migration services to businesses in Gurgaon. We
          are able to migrate legacy CMS, legacy code, or slow processes to
          modern systems. It incorporates a platform such as BigCommerce,
          Shopify, Magento, or even a headless CMS.
        </p>
        <p>
          All the data is not lost, your SEO remains intact, and users
          experience a faster and better experience. It could be tech migration
          or a total redesign of UX; we simplify it all for you. This will
          enable you to remain competitive in the Gurgaon dynamic market.
        </p>
        {/* <p>
          We aim at creating powerful applications that not only give an
          appealing look but also provide a smooth usability, quick loading, and
          good conversion rates. In the rapidly developing tech and startup
          environment in Chennai, we can keep you on pace with full-stack
          solutions that grow with you.
        </p> */}
        <h6>Why Choose Us As Your Ecommerce Development Company in Gurgaon?</h6>
        <p>
          We are not only ecommerce developers; we are your digital growth
          partners. Located in the core of Gurgaon, we know the business pulse,
          consumer behaviour, and how fast D2C and B2B ecommerce business models
          have grown. We empower local, evidence-based, and scaled responses.
        </p>
        <h6>Skilled ecommerce Developers in Gurgaon</h6>
        <p>
          Our expert team in Gurgaon will deliver a great blend of creativity,
          technical skill, and ecommerce insight. We do not merely write code,
          but create conversion and retention-driving digital ecosystems.
        </p>
        <p>
          Our developers know many ecommerce frameworks. They include Shopify,
          Magento, BigCommerce, and custom-built solutions. We can set up tricky
          filter conditions. We can also create custom checkout processes and
          connect with local delivery providers. We were able to do all of the
          above and more.
        </p>
        <p>
          All of our members are not only coded; they are also commercially
          trained. We know the behavior of the real shoppers, how logistics
          work, and how performance influences the selling. We are based in
          Gurgaon. We understand local needs, like regional tax rules. We also
          work with payment and fulfillment partners in NCR.
        </p>
        <p>
          With our team, you gain more than developers. You get long-term
          partners who care about your growth in ecommerce. They will treat your
          business as their own.
        </p>
        <h4>Latest Ecommerce Technologies and Tools</h4>
        <p>
          Gurgaon is a rapidly growing technological city. In this case, keeping
          oneself abreast of technology is not an option, but a requirement. At
          Kushel Digi, we enable online companies to use the current technology.
          In this way, they will be able to establish quick and solid online
          stores in the future. We integrated features that are demanded by the
          modern customer. These are AI product suggestions, voice search, and
          dynamic pricing engines.
        </p>
        <p>
          Our area of interest is premium technological solutions. This involves
          marketing automation, chat engines in real time, headless
          architecture, and personalization engines. The purpose of these apps
          is to drive more interaction, convert better, and make backend tasks
          easier.
        </p>
        <p>
          Our coders know the latest ecommerce trends and technology. You don’t
          have to. We suggest upgrades, run pilot tests, and improve your stack
          for the best performance. Your ecommerce platform with Kushel Digi
          will not fall behind, but will rather pioneer it.
        </p>
        <h6>Mobile-Responsive and Optimized Ecommerce Stores</h6>
        <p>
          The online shoppers in Gurgaon are in very large numbers who are
          dependent on mobiles, and responsive design is the key to success in
          an online business. At Kushel Digi, our ecommerce websites are
          responsive on every device. They maintain the same outstanding
          performance and appearance whether it is on a desktop, laptop, tablet,
          or smartphone.
        </p>
        <p>
          We apply an adaptive development strategy where each touchpoint is
          convenient to utilize. This covers product exploration and checkout.
          These functions are quick and are wholly optimized to be used on
          phones. Our fluid layouts, adaptive videos and images, and smooth
          navigation are used. This ensures that shopping is easy regardless of
          how and where customers browse your brand.
        </p>
        <p>
          We consider mobile speed and Core Web Vitals, not just aesthetics.
          This helps boost your SEO rankings and lower the bounce rate. Whether
          your customer is on a metro ride in Gurgaon or shopping in Cyber City,
          your site will look great and function better.
        </p>
        <p>
          Our ecommerce development company in Gurgaon tests on real devices and
          browsers. This way, we ensure responsive results.
        </p>
        <h6>Flexible Ecommerce Solutions Tailored to Your Business</h6>
        <p>
          Each business in Gurgaon is different, and your ecommerce store must
          be too. We build ecommerce scalable e-commerce applications. They suit
          your business processes and may help you grow. Our development
          strategy is tailored to your use, to your local Delhi NCR or national
          seller.
        </p>
        <p>
          We have features that are aligned with your business. This involves
          multi-tier shipping, custom bundles of products, and versatile
          discounts. We are also offering a backend architecture that scales.
          This allows you to add newer features, integrations, or storefronts
          without redesigning everything.
        </p>
        <p>
          Need to pivot in the middle of the project or use a flash sale? No
          problem. Our solutions cope with seasonal fluctuations and life
          changes. Flexibility is an attitude at Kushel Digi. It aids your shop
          in maintaining timeliness in the dynamic Gurgaon market.
        </p>
        <h6>Custom-Built Ecommerce Features for Better Conversions</h6>
        <p>
          Personalization is one thing that can make ecommerce brands stand out
          in a saturated market. It is like in Gurgaon, wherein the availability
          of a unique niche holds the key to recognition. We tailor your web
          store by utilizing your brand and making sure it meets the needs of
          your customers, as well as details in every aspect at Kushel Digi.
        </p>
        <p>
          We create bespoke category models. Our packages are young products and
          urban services. Our designs are multi-lingual, and we emphasize client
          data. You require loyalty features to satisfy the Gurgaon customers.
          You need GST-priced purchasing or a bespoke B2B portal with controlled
          accessibility. We can help with all of this.
        </p>
        <p>
          We create custom dashboards. You can manage them with an admin. They
          have role-based permissions for large teams. Plus, they offer
          real-time analytics integrations. This way, you’ll always stay in
          control. We do not work with templates; we create with purpose,
          strategy, and stories.
        </p>
        <p>
          Your brand will be unique in every touch point, whether it is through
          homepage banners, follow-up emails after an order, or much more.
          Personalization is not superficial. It has a purpose, and we are
          successful in it.
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
