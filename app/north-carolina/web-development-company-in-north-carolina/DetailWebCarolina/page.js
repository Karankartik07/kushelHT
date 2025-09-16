"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailCarolinaWeb() {
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
        initialCountry: "us",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("us"));
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
          Web Development Company in North Carolina by Leading Developer To
          Elevate Your Digital Journey
        </h4>
        <p>
          Need a web development company in North Carolina that not just hands
          over a site but delivers results? You've just landed in the perfect
          place. At Kushel Digi Solutions, we are not just writing code. We
          create online platforms that assist companies to reach out to their
          listeners, build their brand, and expand digitally. In North Carolina,
          there are successful startups, companies specialising in innovative
          technologies, and well-developed businesses. It is no longer optional,
          in such a competitive market space, to have an effective site to run
          your business. It is essential.
        </p>
        <p>
          Our teamwork is based on developing websites that are appealing and
          efficient at the same time, secure and result-oriented. With
          convenient designs and pages that take only seconds to load,
          everything is created intentionally. We also listen to your objectives
          and customize according to your business requirements. That is how we
          serve as a long-term digital partner to businesses across North
          Carolina.
        </p>
        <h5>Why Choose Our Web Development Services in North Carolina?</h5>
        <p>
          Getting the appropriate web development firm can either make or
          destroy your online experience. The competitive advantage of Kushel
          Digi solutions is that we have an in-depth knowledge of the business
          environment in North Carolina. We understand the opportunities
          available and challenges arising before local businesses in the
          fast-pace financial hub of Charlotte and the rising tech economy of
          Raleigh.
        </p>
        <p>
          Working with us does not simply give you developers. You end up with a
          team where your project is treated as its own. Our specialty is to
          develop websites that are appealing, engaging and produce results that
          are measurable. Our solutions can be expanded, as your business
          expands, so does your site. We help you achieve a combination of
          designs that are both creative and effective, and market them with
          immense power through the use of technology.
        </p>
        <p>
          Creating transparency is one of the values at Kushel Digi Solutions.
          We update you at each development step and ensure you are never left
          out of the process. Having a clear understanding of what exactly is
          being constructed and why is what you will get from the first meeting
          until post-launch support. This collaborative style of partnership is
          the reason why a lot of businesses in North Carolina trust us.
        </p>
        <h6>Our North Carolina Web Development Technology Stack</h6>
        <p>
          Technology is at the heart of every project we build. Not only knowing
          what the tools are, but also how to use them efficiently. At Kushel
          Digi, we offer a blend of frontend, backend, and mobile-oriented
          technologies that are well-tested, trusted, and tailored to the
          requirements of your project.
        </p>
        <p>
          We count on the latest models and programmes to make sure that your
          site will be quick, outsourced, and forward-thinking. Every decision
          is made performance-wise, whether it is creating easy-to-use
          interfaces using React or creating an ultra-fast back-end using
          Node.js. On mobile applications, we adopt technologies such as Flutter
          and React Native to ensure that, regardless of the location, your
          business is available to customers.
        </p>
        <h6>Frontend Development Excellence</h6>
        <p>
          A good website starts with the frontend, the part your customers
          interact with. We believe that design and usability go hand in hand.
          Our frontend developers design clean, user interface-friendly
          interfaces and user experience-optimised interfaces. As someone who
          visits your site, you should have what they need right at your
          fingertips and have fun!
        </p>
        <p>
          We combine technologies such as React and Next.js to create websites
          that should not only be attractive but also be fast and attractive to
          search engines. The use of clean HTML5 structures makes your site easy
          to navigate and also enables the search engines to be able to learn
          what to index about your site. All design decisions we make are to
          provide a slick, responsive experience on any device.
        </p>
        <p>
          The outcome is a site that keeps customers entertained and wants them
          to do something; it can be either a purchase, a form, or getting in
          touch with your company. A strong frontend is the foundation for
          turning casual visitors into loyal customers.
        </p>

        <h6>Backend Development Power</h6>
        <p>
          Behind any great site, there is a robust backend that keeps the engine
          running. At Kushel Digi Solutions, we develop backends that are
          secure, reliable, and scalable. That is a backend, which makes your
          site run smoothly; it can be content management, payment processing,
          or a large mass of visitors.
        </p>
        <p>
          Both PHP and Node.js allow us to do some server-side development,
          which can be both simple sites and elaborate web apps. To businesses
          that prefer greater control over content, we can provide custom
          WordPress packages that are easy to exert control over. Our back-end
          code emphasises security, so the sensitive data will be secured at any
          moment.
        </p>

        <p>
          When you have the proper backend, it means that your site is a
          platform of trust. It provides you with the freedom to scale, be able
          to add features, and accommodate more customers without any doubt over
          stability or any performance problems.
        </p>
        <h5>Mobile Application Development</h5>
        <p>
          It is not just your customers window shopping on a desktop. They are
          phone-crazed, and they demand elegant and seamless mobile experiences.
          This is the reason why the development of mobile applications is
          within our core area of operation at Kushel Digi Solutions.
        </p>
        <p>
          React Native and Flutter are our chosen platforms to develop apps that
          run on both iOS and Android systems. This translates to prompt
          development, cost reduction, and native-like apps. We also use Kotlin
          to develop high-performing technologies that are Android-specific and
          give the best results to the businesses that require these
          technologies.
        </p>
        <p>
          You may be building an e-commerce application, a service reservation,
          or a customer interaction tool: our mobile apps can be built with both
          usability and scalability in mind. Expand your presence to mobile and
          be where the customer goes, as well as stay at the top of the
          competition.
        </p>

        <h6>
          What Makes Us Different from Other North Carolina Web Development
          Companies?
        </h6>
        <p>
          There are numerous web developers. Not many build solutions that
          support business growth. At Kushel Digi we do things differently. We
          begin with what you have set out in business and plot everything
          around it.
        </p>

        <p>
          We incorporate local knowledge with international aspects. Our team
          understands both the needs of North Carolina businesses but also
          introduces the best practices of development trends all around the
          world. This is to make your webpage relevant to your market as well as
          competitive globally.
        </p>
        <p>
          We also believe in long-term relationships. Our job does not end at
          launch. We remain with you to update, sustain, and enhance your site
          as your business continues to optimize. It is this adherence to
          continual value that causes us to become distinctive.
        </p>

        <h6>Our Web Development Services for North Carolina Businesses</h6>
        <p>
          Our services are designed to cover everything a business might need
          for its online journey. We create custom websites that are built from
          the ground up, ensuring that they reflect your brand and support your
          goals. These websites are fast, responsive, and optimized for both
          desktop and mobile users.
        </p>
        <p>
          For businesses looking to expand into mobile, we develop apps that
          connect with customers directly. Our ecommerce solutions help you set
          up online stores that not only look good but also convert visitors
          into buyers. We also offer WordPress customization for businesses that
          want flexibility and control over their content.
        </p>
        <p>
          By tailoring each service to the unique needs of your business, we
          make sure you get solutions that add real value: no templates, no
          shortcuts, just websites and apps built to perform.
        </p>

        <h6>Industries We Serve Across North Carolina</h6>
        <p>
          North Carolina hosts a variety of industries, and we take pride in the
          fact that we serve any business in any of them. Within the technology
          sector, we partner with new and existing businesses in the Research
          Triangle to scale, using reliable digital infrastructure.
        </p>

        <p>
          The state economy is also primarily made up of healthcare and life
          sciences. We are aware of the tightly secure and strict requirements
          in this industry and develop solutions to encounter them. With
          financial services, particularly in Charlotte, we provide secure
          platforms that facilitate sensitive transactions electronically.
        </p>

        <p>
          We are also used to modernising the digital activities of
          manufacturing and industrial enterprises located throughout the state.
          We design websites that resolve practical problems either by
          streamlining the process or by enhancing the communication strengths
          with the customers. We have experience in all sectors to be able to
          fit whatever business and give it.
        </p>

        <h6>Our Development Process: How We Work</h6>
        <p>
          We are sure that clarity of process results in improved performance.
          Discovery and planning are always the initial steps of every project
          at Kushel Digi. We get time to read what you want, to whom you want to
          address, and the issues that your site requires to address. This makes
          sure you have the technical direction aligned to your business
          requirements.
        </p>
        <p>
          This is followed by design and prototyping. We provide the mockups
          before development commences to allow you to view how your site would
          appear and operate. As our team is now approved, we do a combination
          of iterative software development, splitting the process into steps to
          detect and eliminate problems during the early stages.
        </p>
        <p>
          Lastly, we roll out your website fully confident. But launch is not
          the end. We offer consistent maintenance, updates, and support to
          ensure your site remains good. Through this process, you feel secure,
          and your online presence is robust even when the project has finished.
        </p>
        <h6>Technologies We Master for North Carolina Projects</h6>

        <p>
          We are experienced in a broad variety of technologies. In websites
          with lots of content and web applications, we apply PHP web frameworks
          that are secure and flexible. React.js is our current technology of
          choice when companies require platforms that are dynamic and
          interactive, and can also be displayed on any device.
        </p>
        <p>
          Node.js can drive the backend of high-performance applications and
          APIs, particularly when real-time behaviour is valued. We are also
          experts in WordPress, and we build regular blogs to elaborate
          corporate websites with bespoke features.
        </p>
        <p>
          One of our advantages is Next.js, which businesses may use to get new
          websites that are SEO optimised and performance-oriented. In the
          mobile app case, React Native permits us to write applications that
          run both on iOS and Android at the same time, whereas Flutter provides
          eye-catching visuals alongside native performance. We use Kotlin when
          the project involves Android features necessitating Android-specific
          app development due to its security and up-to-date features.
        </p>
        <p>
          Through the integration of these technologies, we come up with digital
          solutions that are not only functional but also scalable. We will
          choose the tools that work best in your business, and you will see
          that you have a site or an application applicable now that works
          tomorrow as well.
        </p>
        <h6>Ready to Start Your North Carolina Web Development Project?</h6>
        <p>
          Your business deserves more than just a digital presence. It deserves
          a website or app that drives growth and connects with your audience.
          We are willing to make that happen to you at Kushel Digi Solutions.
        </p>
        <p>
          From a simple website to your fancy application or a mobile
          application that will be loved by customers, we have the skills and
          expertise to provide. Never settle when you can be outstanding. Choose
          a Web development company in North Carolina today!
        </p>
        <p>
          Get in touch with us today to discuss your goals. We offer a free
          consultation where we learn about your business and share how we can
          help. Let us build the digital solution your North Carolina business
          needs to succeed.
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
