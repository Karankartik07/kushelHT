"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailBigComChennai() {
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
          BigCommerce Development Company in Chennai – Build a Scalable Store
          That Grows With Your Business
        </h4>
        <p>
          Kushel Digi is a reliable BigCommerce development agency in Chennai
          working with brands to make their online stores fast, flexible and
          built to convert. We understand that your ecommerce shop is not just a
          digital catalogue; it is a hub of experience of your brand. This is
          the reason that our skilled developers will work closely with you and
          comprehend your business objectives, product algorithms and intended
          customers prior to the advancement of the development.
        </p>
        <p>
          Our BigCommerce solutions are responsive, rich in features, and easy
          to operate. Whether you are moving over to our platform or building a
          brand-new store or expanding an existing store, we customize all of
          the elements-including theme customization and backend integrations-
          to provide smooth user engagements and efficient operations.
        </p>
        <p>
          We utilize current BigCommerce APIs and extensions to create safe,
          search engine optimized stores that enable multi-channel sales,
          inventory synchronization, custom check out processes, and others.
          Your store will be modern and with constant support, maintenance, and
          performance tracking, ready to grow.
        </p>
        <p>
          Kushel Digi is one of the leading and trusted BigCommerce development
          companies in Chennai that will help you to take your ecommerce brand
          to the next level. So, why don’t we create a smarter and
          stronger-selling store?
        </p>
        <h5>Our BigCommerce Development Services in Chennai Include –</h5>
        <p>
          Our team of BigCommerce development experts in Chennai delivers
          advanced design services, depending on the individual objectives of
          contemporary retailers and brands. We craft our solutions in a way
          that they are elastic, adaptable, and performance intensive so that
          your ecommerce platform can achieve both functionality and perfect
          customer experiences.
        </p>
        <p>
          We are a team of dedicated BigCommerce developers who will partner
          with you to figure out your business type, your customer behavior, and
          growth plan. Are you creating a new shop, converting another platform,
          or improving an already running BigCommerce site? We build and design
          with accuracy.
        </p>
        <p>
          Custom theme build, API integrations, highly sophisticated product
          filtering, multi-location shipping policies, and mobile responsiveness
          take into consideration every single detail in order to match your
          brand image and increase conversion.
        </p>
        <p>
          We also provide after sales assistance, performance monitoring and
          features updates so that your shop adapts as your business grows. Our
          BigCommerce development company in Chennai provide a future-proof
          technology supported with creativity and strategy that enables you to
          have an ecommerce feature versatile and future-proof.
        </p>
        <h6>Custom Web Application Development</h6>
        <p>
          We provide custom web application development services in Chennai at
          Kushel Digi to build secure, scalable, and business-specific
          applications in your ecommerce business. Whether you are adding
          features to your existing BigCommerce solution or designing in-house
          tools to support operations, our developers develop custom web apps
          that will work well with your workflow.
        </p>
        <p>
          We use a tested development process - gathering requirements,
          designing, testing, and delivering the solutions, keeping the delivery
          fast, communication continuous, and security at the highest level. Our
          programmers are experienced with PHP, Python, Node.js and others so we
          can build specific add-ons such as custom dashboards, order tools and
          vendor portals to perfectly suit your requirements.
        </p>
        <p>
          All applications are designed to enhance your online business and
          enhance the backend performance. We integrate with third-party tools
          and payment systems and ERPs and BigCommerce API, and the end product
          becomes versatile and one that future-proofs itself.
        </p>
        <h6>User Experience (UX) Design</h6>
        <p>
          An excellent user experience may come between the bounce and buy. That
          is why the UX design services of Kushel Digi have been designed to
          transform your BigCommerce store into a highly intuitive, captivating,
          and conversion-oriented platform.
        </p>
        <p>
          We use a research-driven model the real user flows are tested, user
          interviews are carried out, and buyer journeys are analyzed. On this
          basis, we develop unambiguous information architecture, wireframes,
          and mobile-first interfaces that simplify browsing and streamline
          checkouts.
        </p>
        <p>
          Our UX team will work together with your brand to create a visual
          design to represent both your identity but also to minimize navigation
          without compromising on retention. We even have an A/B test, heatmap
          tracking, and UI improvement to constantly optimize performance and
          customer satisfaction.
        </p>
        <p>
          It doesn’t matter whether you are creating a new ecommerce site or
          improving an existing one; our UX designs will make your visitors
          spend more time, spend more on the site plus visit it frequently.
        </p>
        <h6>Progressive Web App (PWA) Development</h6>
        <p>
          Progressive Web Apps (PWAs) represent an effective method of improving
          ecommerce in environments where mobile devices are the dominant
          platform, as is the case in Chennai. Kushel Digi creates secure,
          blazing-fast PWAs that are the best of both worlds; websites and
          native mobile applications - allowing your BigCommerce store to run
          perfectly across devices even when offline.
        </p>
        <p>
          In Chennai, we build responsive, easy-to-install web apps that
          leverage contemporary technologies, such as Service Workers, Web Push
          Notifications and App Shell architecture to enhance loading speed,
          retention and engagement. The applications are native, enable
          background synchronization and can be called up straight to the home
          screen of a user- an experience that is easy and natural to shop.
        </p>
        <p>
          You may want to develop a PWA as an external application or add PWA
          support to your storefront on BigCommerce; we provide full-scale
          support, including consultation and wireframing, development,
          deployment, and optimization.
        </p>
        <p>
          We make your ecommerce PWA safe, search-engine friendly, and
          conversion-optimised, which will enable your brand to stand out in the
          competitive world of mobile apps.
        </p>
        <h6>API Integration</h6>
        <p>
          Smooth flow of data is a priority in any developing ecommerce
          business. That is why we provide BigCommerce store customised API
          integration services in Chennai - get your stores linked to ERPs,
          CRMs, inventory solutions, shipping companies, payment gateways, and
          several other solutions.
        </p>
        <p>
          Our programmers collaborate with your staff to get a clear picture of
          which systems have to communicate with others and how to make it work.
          We make sure that every integration is safe, scalable, and entirely
          compliant and intertwined with your BigCommerce backend so that your
          operations are running smoothly behind the scene without making it a
          bother to your customers.
        </p>
        <p>
          We can cover the entire pre-installation and post-deployment of API
          integration, including third-party tools of marketing, warehouse
          management, and customer service optimization.
        </p>
        <p>
          Our team can make your store a networked, intelligent ecommerce
          machine that delivers efficiency and improvement.
        </p>
        <h6>Full-Stack Development</h6>
        <p>
          The modern ecommerce platform has more to do than a beautiful
          interface alone; it must have strong architecture in the back end. In
          Kushel Digi, our full-stack development in Chennai has expertise in
          both frontend and backend development of BigCommerce to scale, secure,
          and high-performance BigCommerce experiences.
        </p>
        <p>
          We can develop strong ecommerce capabilities such as custom product
          filtering, user dashboards, advanced search, and automated workflows
          in technologies such as React, Next.js, Node.js, PHP and MySQL.
          Regardless of whether you introduce a B2C store or operate a B2B
          marketplace, we customize the full-stack framework to your business
          requirements.
        </p>
        <p>
          We match your store requirements with its performance in terms of code
          performance all the way through system design, database architecture,
          backend business logic, and frontend development to give your store
          both performance and reliability. We have a discovery, development,
          QA, and deployment sequence, and a lot of emphasis on maintainability
          and expansion of the future.
        </p>
        <p>
          We also integrate your BigCommerce store with CRMs, ERPs, analytics
          tools, and custom APIs, so your ecommerce system can be as lean as it
          can be.
        </p>
        <h5>
          Why Choose Us as Your BigCommerce Development Company in Chennai?
        </h5>
        <p>
          With Kushel Digi, you can do Business with Intelligence, partner with
          a team that believes just as much in strategy as it does in code. We
          are not only developers, but also the growth partners to an ecommerce
          company wishing to scale in a competitive market.
        </p>
        <p>
          Working on BigCommerce projects in various industry verticals over the
          years, our staff operating in Chennai is aware of the specifics of
          online selling; local buyer habits and sales trends during specific
          seasons, supply and last mile delivery requirements, and more. Every
          build should focus on performance, responsiveness, and conversion
          optimization.
        </p>
        <p>
          We have a collaborative, transparent, long-term approach. Our platform
          is brand-specific, product-specific, and operation-specific, whether
          it be starting a new D2C store or a store migration off another
          platform.
        </p>
        <p>
          This is what makes Kushel Digi the choice of leading ecommerce brands
          in Chennai in terms of BigCommerce development:
        </p>
        <h6>Expert Team of Developers</h6>
        <p>
          We have certified BigCommerce developers, front end specialists, API
          integrations, and UX strategists on our team that collaboratively
          construct smooth and high performing online stores.
        </p>
        <p>
          Our area of expertise is custom theme development in BigCommerce, site
          performance optimization, and installation of advanced capabilities,
          including subscriptions, filters, and internationalization. We are
          also good at tricky backend customizations including ERP sync,
          customer segmentation logic, and abandoned cart flows.
        </p>
        <p>
          What makes us different? Not only do we deliver code, but
          strategy-based, scalable ecommerce platforms that generate real
          revenue.
        </p>
        <h6>Leverage New Technology</h6>
        <p>
          To remain ahead of others in the ecommerce world, we need to adopt the
          latest tools and innovations and that we do it best. We integrate the
          most important technologies driving modern retail: AI-driven product
          recommendations, headless commerce, as well as Progressive Web App
          (PWA) capabilities.
        </p>
        <p>
          Our team at Chennai is continuously following the changes and updates
          in the industry and BigCommerce to make your store future-proof. We
          employ enterprise-level analytics solutions, advertising platforms,
          and third-party integrations to enable you to grow more intelligently
          and support your customers.
        </p>
        <p>
          Through the use of the latest technology, we can make sure your e
          commerce store does not only compete, but it is visionary and can
          adapt to the changing needs of the buyers and surpass them.
        </p>
        <h6>Responsive Website</h6>
        <p>
          When you live in a mobile-first world, having a responsive ecommerce
          store is not an option anymore it is a necessity. Our responsive
          BigCommerce agencies in Chennai, at Kushel Digi, create and develop
          websites that are responsive in every aspect to make them look best
          and run perfectly on every screen size, any device, and any browser.
        </p>
        <p>
          In our team, we take care of every aspect of this, including product
          listings, checkout flows, and other features, to make them mobile
          friendly, quickly loading, and intuitively engaging with. Your
          customer might be accessing your store on a desktop in the office or
          in a phone in traffic-congested Chennai, but your store is still
          intuitive and easy to convert.
        </p>
        <p>
          We do brand first, user-centric responsiveness, which aligns with your
          business objectives, brand uniqueness and customer expectations. This
          will not only help your BigCommerce store be beautiful but will also
          work beautiful to bring in more sales.
        </p>
        <h6>Flexibility</h6>
        <p>
          Each ecommerce enterprise is unique, and so should your site be. With
          our BigCommerce development service in Chennai you get a very flexible
          platform that enables you to customize your store to your business
          model, teamwork processes, and customer experience objectives.
        </p>
        <p>
          Want multi-pricing levels on wholesalers? Localized checkout? COD
          order custom workflows? We have made it all. The components and
          integrations our developers create are flexible and completely under
          your control, as they provide full control over your store and further
          expandability.
        </p>
        <p>
          We hear then we create; your BigCommerce site functions the way you do
          and evolves as you do.
        </p>
        <h6>Customization Techniques</h6>
        <p>
          Customization is what we do in making your ecommerce store yours.
          Kushel Digi implements the latest methods of BigCommerce customization
          to provide both B2C and B2B brands in Chennai with personalized
          digital experiences.
        </p>
        <p>
          Whether it is the tailored storefronts, individual filters, custom
          loyalty programs, or tailored upsell logic, we create features that
          complement your customer flow and business objectives. Our team
          announces customization of backend processes as well to make it easier
          to manage orders, coordinate vendors, and reporting.
        </p>
        <p>
          We blend the knowledge of best development practices, conversion
          practices, and innovative UX insights in a bid to build an online
          store that is distinctive to you, but not the duplicate of someone.
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
