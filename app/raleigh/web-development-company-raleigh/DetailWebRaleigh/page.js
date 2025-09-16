"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailRaleighWeb() {
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
          Web Development Company Raleigh – Custom Websites That Drive Results
        </h4>
        <p>
          Finding a web development company Raleigh that really understands? You
          have hit the right place. In the digital age, your site is not just a
          business card; it is your handshake, your elevator pitch and your
          salesman who does 24/7. It is no longer enough to be online. You
          require a website that converts clicks into customers and scrolls into
          sales. That’s where Kushel Digi Solutions comes in to elevate your
          digital success..
        </p>
        <p>
          We do not simply create websites at Kushel Digi Solutions; we create
          digital experiences. The ones that are simple to navigate, quick to
          load and irresistible to resist. You could be setting up your first
          site, rebranding an existing one or integrating an online store into
          your business; we are there to ensure that it is carried out most
          appropriately.
        </p>
        <p>
          We are the one based on customization. Every company is different, so
          every site we create echoes that difference. Our complex integrations,
          performance, design and coding all exist as a way to create solutions
          unique to your ambitions and not cramming you into a template. Being
          creative, technologically advanced, and strategically oriented will
          provide you with not only a website that looks beautiful but is also
          dependable and convenient to utilize.
        </p>
        <p>
          Selling products, leading, or building a strong brand presence, we
          have a website that delivers. We mix simple navigation, mobile-first
          layout and search engine-optimised structure to ensure your site is
          prepared to meet the needs of people and the search engines. At Kushel
          Digi Solutions, we do not simply introduce websites. We design digital
          platforms which enhance the daily business efforts on your behalf.
        </p>

        <h5>Why Choose Our Web Development Services in Raleigh?</h5>
        <p>
          It is easy to feel overwhelmed because there are a myriad of companies
          to choose from when it comes to web development, but the right one
          matters. At Kushel Digi Solutions, we combine both local knowledge and
          global standards of design and development. We understand the Raleigh
          market, and we know what it demands to compete on a bigger level.
        </p>
        <p>
          We specialise in customising solutions that portray your brand. We are
          not using generalised templates or shortcuts. Instead, we stop and ask
          some questions concerning what you are out to achieve, making websites
          that generate quantifiable outcomes. At our core is user experience.
          All the places that we create are responsive, user-friendly, and
          performance-oriented.
        </p>
        <p>
          We also make your site future-proofed. Whether it is clean coding
          practices, compatibility with the search engine requirements, or
          convenient formats that facilitate expansion and publicity, we
          establish a solid foundation that both sustains growth and visibility.
          And we will remain on your site post-launch, providing maintenance and
          updates, as well as support to ensure your site keeps changing with
          your business.
        </p>

        <h5>Local Expertise, Global Standards</h5>
        <p>
          We understand the Raleigh market—its people, its pace, and its
          potential. We combine local business insight with global design and
          development standards to deliver websites that feel authentic and
          function exceptionally.
        </p>
        <h6>Custom Solutions, Never Templates</h6>
        <p>
          Your business is unique, and your website should be too. We craft
          fully customized web solutions that reflect your brand and are
          tailored to your goals. No generic layouts—just smart, scalable
          websites that work.
        </p>
        <h6>Focused on User Experience</h6>
        <p>
          Great sites are people-friendly. Intuitive navigation and quick load
          time to smooth mobile interaction; we focus on user experience in all
          designs. The result? Visitors spend more time, interact more and
          convert more easily.
        </p>
        <h6>Solid Technical Foundation</h6>
        <p>
          Every great-looking site is backed by good code. The developers at our
          company work with the most recent frameworks and best practices to
          create websites that are secure, fast, and scalable. It can be a CMS,
          e-commerce, or bespoke application- we have the technical part all
          taken care of.
        </p>
        <h6>Ongoing Partnership</h6>
        <p>
          We don’t disappear after launch. We offer long-term support, updates,
          and enhancements to ensure your website evolves as your business
          grows. Consider us your reliable digital partner—today, tomorrow, and
          beyond.
        </p>
        <h6> Our Web Development Services in Raleigh</h6>
        <p>
          We offer a full range of web development services in Raleigh, designed
          to match your business goals, your brand personality, and your
          customer needs.
        </p>
        <h6>Custom Website Design</h6>
        <p>
          Each company in Raleigh has its vibe, and your website must echo the
          same. We design personal websites which are brand-centric and
          audience-focused.
        </p>
        <p>
          Forget cookie-cutter templates. We develop visual masters with
          intuitive interfaces and mobile-first layouts to ensure your site
          represents itself well on everything. Whether you have to open an
          enterprise, a creative product, or a service-centred enterprise, we
          would make your ideation come alive with style and accuracy.
        </p>
        <h6>E-Commerce Website Development</h6>

        <p>
          Launching an online store? We create e-commerce websites that deliver
          a smooth shopping experience to your customers and grow with your
          business.
        </p>

        <p>
          Safe payment gateways and high-speed product loading to intelligent
          filtering and mobile optimization, we have it all. You need to sell
          five or five thousand things. We will create an online store that will
          make the process of buying, browsing, and returning something easy.
        </p>
        <h6>CMS Website Development</h6>
        <p>
          Need complete new media control- without a developer? Our services for
          the development of CMS websites give you the option to manage your
          website without difficulty.
        </p>
        <p>
          We develop sites based on premier applications such as WordPress,
          Joomla, and Drupal and provide websites that are adaptable, simple to
          revise, and optimised to scale. Add new pages, edit but do not write
          your blog, replace pictures, whatever, just add some value, that’s
          all, what is code-free and easy and quick.
        </p>
        <h5>Responsive Web Development </h5>
        <p>
          Responsive design is not an option anymore, since the majority of the
          population is browsing on their mobile devices. Your site is ensured
          to be not only shiny on desktops, but it is also certain on tablets
          and smartphones.
        </p>
        <p>
          The websites that we create are responsive to any screen size,
          increasing their user-friendliness, reducing the bounce rate, and
          improving your SEO.
        </p>
        <h6>Website Maintenance & Support</h6>
        <p>
          A website is never “done.” It must be maintained regularly to be fast,
          secure, and up-to-date. This is the reason why we provide continuous
          maintenance and support of websites, such as updates, bug fixes,
          backups, and performance monitoring.
        </p>

        <p>
          We take care of the tech to allow you to concentrate on business. Our
          team is there when you need it, whether it is a fast change or a
          long-term upgrade strategy.
        </p>

        <h5>SEO-Friendly Web Development</h5>
        <p>
          Why have a beautiful site when no one views it? Our websites are
          search engine optimized at the very beginning. With quick loading
          speed and clean code, correct heading structures and metadata, your
          site will be well positioned to enter the Google hierarchy.
        </p>
        <p>
          We also combine SEO applications enabling you to monitor performance,
          streamline content, and outsmart your competitors.
        </p>
        <h6>Frontend Development Excellence</h6>
        <p>
          First impressions count, and this is what your customers first see on
          the front end of your site. Our attention is paid to the development
          of clean, interactive, and user-friendly interfaces. The front-end
          developers utilise existing structures and libraries to make designs
          accurate. We provide them with a hassle-free experience, regardless of
          the devices, be it a responsive business site or a more complex web
          application.
        </p>
        <p>
          We are strongly concerned with speed and access, too. The presence of
          a slow or clunky site will drive us away, whereas a quick-loading,
          fully operational site will make the visitor spend more time and
          scroll more. Our design is responsive and mobile-first to meet the
          industry standards related to cross-browser compatibility and
          accessibility to meet the needs of every visitor. With creativity and
          reinforced with technology, the front-end solutions we provide are
          both performance-driven and visually appealing.
        </p>

        <h6>Backend Development Power </h6>
        <p>
          Behind any nice-looking website is a strong backend infrastructure.
          This is the place where performance, scalability, and security are
          constructed. At Kushel Digi Solutions, we adopt powerful services at
          the backend to make sure your website operates at full capacity, even
          when it is exposed to immense traffic.
        </p>
        <p>
          Our team is an expert in frameworks such as Node.js, Django, and
          Laravel to develop efficient, secure, and scalable systems. We ensure
          that every detail is processed with high accuracy, such as user
          authentication through database control. Another thing we do is create
          APIs and integrations that enable your site to integrate with other
          tools, CRMs, and payment gateways with ease.
        </p>
        <p>
          As your business grows, a powerful backend not only facilitates
          existing features but should also enable your site to scale. We aim to
          leave you with a stable base that will not have to be overhauled when
          newer opportunities arise.
        </p>
        <h6>Mobile Application Development</h6>
        <p>
          Mobile users constitute a significant percentage of online traffic in
          Raleigh, and companies cannot afford to disregard them. We provide
          mobile application development services, which will supplement your
          website and expand your reach. Be it an iOS/Android native application
          or a cross-platform application, we develop applications that are
          quick, user-friendly, and consistent with your business objectives.
        </p>
        <p>
          We design our mobile applications with user experience in mind. Our
          uncomplicated navigation style, cool design, and performance make our
          users stay interested. Additional features such as push notification,
          location-based services, and secure payment are also implemented by
          us. We would be able to bridge between your mobile application and
          your website so that you have a single brand image across the board.
        </p>
        <h6>Our Development Process: How We Work</h6>
        <p>
          Our process is structured but not very rigid, so that each project is
          met. It begins with knowing your business objectives and target
          market. Next, we proceed to strategy and planning, where we specify
          the design, features and technologies needed.
        </p>
        <p>
          The design stage is about designing layouts and images that represent
          your brand and are easy to use. After this, our developers take the
          design to code, using powerful frontend and backend code. The testing
          is a crucial stage, and the site should be quick, safe, and
          error-free.
        </p>
        <p>
          We offer continuity and maintenance after release. These are updates,
          backups and performance checkpoints. We are open, and we use your
          participation at each stage of the process. The outcome is a site
          which not only looks good but also performs flawlessly on the first
          day.
        </p>

        <h6>
          What Makes Us Different from Other Raleigh Web Development Companies?
        </h6>
        <p>
          Raleigh has numerous web development firms; however, Kushel Digi
          Solutions is unique due to our methodology. Our emphasis is not on
          templates and using them across the board, but instead on developing
          tailored solutions. This makes each of the websites individual and
          business-specific.
        </p>
        <p>
          There is the opportunity to combine both technical expertise and
          familiarity with local markets. We know the Raleigh audience and
          produce websites that appeal to them and are created on a global
          standard of design and performance. Great user experience is central,
          and that translates into fast loading times, responsive layouts, and
          easy navigation.
        </p>

        <p>
          Our long-term commitment is another reason why businesses opt to use
          us. We do not stop delivering a site. Your site will keep growing with
          your business, and we offer constant support, updates, and additions
          to it. We are not only perceived by our clients as developers but also
          as their partners in their digital journey. It is that degree of
          cooperation and commitment that really makes us unique.
        </p>
        <h6>Let’s Build Something Awesome Together</h6>
        <p>
          Your website should be more than just "online." It should attract,
          engage, and convert. That’s where we come in.
        </p>
        <p>
          Are you interested in working with a trusted web development company
          in Raleigh capable of bringing real results? Give us a call. However
          you get there, whether you are starting with a blank sheet of paper or
          you are moving forward with an upgrade, we would like to see what you
          have on your mind.
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
