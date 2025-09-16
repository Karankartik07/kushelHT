"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function WebDevdetChennai() {
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
          Best Ecommerce Development Company in Chennai for Custom Store Web
          Development Company in Chennai - Your Partner in Online Excellence
        </h4>
        <p>
          A powerful online presence is not optional anymore. It presents the
          image of your business in the internet world. In Chennai, you are
          aware of the city developing at a rapid pace technologically,
          commercially, and in startups. When a site is professional-looking and
          functions well it enables you to establish contact with more
          customers, earn their trust and keep competition at bay. With the
          assistance of a professional web development company in chennai, you
          can expand your business online effortlessly.
        </p>
        <p>
          Kushel Digi Solutions has the ability to comprehend the requirements
          of small and large businesses. Being a trusted partner, we create
          websites that go beyond the way they appear. They work, page swiftly,
          and you attain your objectives. Selecting the best web development
          service in Chennai is the initial step of establishing a digital
          presence.
        </p>
        <p>
          The demand for mobile-friendly, secure and easy-to-use websites has
          grown with time. The customers will demand websites that load fast,
          help them navigate without the hustle, and show a familiar image of
          the brand. That is why professional web development can be so
          important. However, it is not merely a design issue, but
          functionality, security, and performance, too.
        </p>
        <p>
          Some ideas may be turned in a fully working website, which portrays
          your business with the right team. Kushel Digi Solutions assists
          companies in Chennai to develop good websites that will make a
          long-lasting impression.
        </p>
        <h4>Why Choose Web Development in Chennai?</h4>
        <p>
          Chennai ranks as one of the leading technology paragons in India.
          There are numerous IT firms, startup companies, and expanding
          enterprises in it. It is relative easy here, with this strong
          ecosystem, it is easy to find skilled developers and creative
          agencies.
        </p>
        <p>
          It is a popular service in Chennai because web development services
          are designed to be affordable, yet maintain the quality. The cost of
          solutions is cheap compared to other cities, and yet the service is
          professional. This harmony is one of the primary reasons that push
          numerous companies to cooperate with local experts.
        </p>
        <p>
          The other benefit is local market knowledge. It is a form of Chennai
          developers comprehending the purchasing trends, cultural and customer
          needs of the area. That simplifies the task of designing websites that
          will attract your audience. It does not matter whether you are a
          retailer, an educational organization or a start-up company, local
          knowledge will bring more value to your project.
        </p>
        <p>
          There is also an expansive talent pool in Chennai. Whether you need a
          frontend designer or backend coder to become a full-stack worker, it
          is possible to hire any person you want. A number of developers in
          this area are well trained in the usage of modern technology and
          international standards.
        </p>
        <p>
          Since you are going to select a company in Chennai, there is also an
          improvement in communication and support. It allows working in the
          same time zone and with a natural grasp of language. Any firm in
          Chennai is encouraged to consider web development as the
          cost-effective parameter is combined with skill and local familiarity
          on all levels.
        </p>
        <h4>Our Web Development Services </h4>
        <h6>Custom Website Development</h6>
        <p>
          Every business is unique, and so should be its website. We build
          websites from scratch that match your brand identity. Unlike
          templates, custom development gives you more control and flexibility.
        </p>
        <h5>E-Commerce Website Development</h5>

        <p>
          Online shopping is growing quickly in Chennai. We create e-commerce
          websites that are safe, easy to use, and attractive. Our team works
          with platforms like Shopify, WooCommerce, and Magento. We also make
          sure payment gateways are secure and checkout is smooth.
        </p>
        <h5>Web Application Development</h5>
        <p>
          Web applications are useful for businesses that want to offer more
          than just information. Examples include booking platforms, dashboards,
          or online learning systems. We create scalable web apps that help you
          serve your customers better.
        </p>
        <h6>CMS Development</h6>
        <p>
          Managing content should not be hard. We offer CMS solutions on
          WordPress, Joomla, and Drupal. This allows you to add or update
          content anytime without technical help.
        </p>
        <h6>Responsive and Mobile-Friendly Design</h6>
        <p>
          Most people today use mobile phones to browse the internet. A
          responsive design makes your website work on any device. This ensures
          a smooth user experience whether your customer uses a laptop, tablet,
          or smartphone.
        </p>
        <h6>Website Maintenance and Support</h6>
        <p>
          A website needs regular care. We continue to maintain it to remain
          secure, updated and fast. Whether we are adding new features or
          eliminating bugs, we ensure that your web site is always best
          performing.
        </p>
        <p>
          Kushel Digi Solutions can provide all of this in a single roof. We aim
          to develop websites which will help your business grow and bring
          tangible results.
        </p>
        <h6>Why Work With Us? </h6>
        <p>
          The difficulty of your searching a suitable partner would largely
          determine the outcome your Web site achieves. Kushel Digi Solutions is
          located at Chennai and it has long years of experience in creating
          websites in various industries.
        </p>
        <p>
          Our staff is committed to quality, open communication and timely
          delivery. We establish a clear plan on which all the projects can be
          based; there are no surprises afterwards. We have had small businesses
          to established businesses that required solutions that were web based
          and dependable.
        </p>
        <p>
          Another reason to work with us is transparency. You have the costs,
          timelines, and processes in all stages. This fosters trust and
          promotes a smooth process.
        </p>
        <p>
          We also appreciate long term partnership. A large percentage of our
          clients come back to us years later to upgrade or redesign or use us
          on a new project due to the nature that we are with them even after we
          launch. We blend creativity, technology and business proficiency and
          can guide you to come up with websites that really deliver in your
          objectives.
        </p>
        <h6>Benefits of Professional Web Development</h6>
        <p>
          A well-designed website is one of the most powerful tools that a
          business can possess in today and age. It is not just a site on the
          internet. That is usually the first thing that people think of your
          brand. When a carefully constructed and well-designed site is created,
          then it can open a lot of gates to development. One of the great
          advantages is exposure. A well-developed site is one that has been
          well-coded and structured and is capable of appearing higher in the
          search engines. This indicates that more customers will locate your
          company when they search your products or services.
        </p>

        <p>
          Speed is another element of difference. Customers get impatient when
          the web page is slow, and may abandon the site. A well-experienced
          team will optimize performance on your website. This makes the user
          experience seamless and pleasant. Credibility is also created on a
          trusted site. Customers would have a better chance of trusting a
          company with a neat, password-protected and straightforward site.
        </p>
        <p>
          Professional web development also provides you with an opportunity to
          reach a greater audience. Mobile-friendly and responsive design means
          your site can serve customers on all devices. Last but not least, it
          promotes the objectives of your business by increasing conversions. A
          great site is vital in regard to sales, bookings or leads. These
          benefits also lead to improved opportunities and a competitive
          advantage for businesses in Chennai.
        </p>
        <h6>Technologies We Use</h6>
        <p>
          Web development involves using the correct combination of tools and
          technologies that provide trusted outcomes. In Kushel Digi Solution,
          frameworks and the latest programming languages are involved, which
          make your site modern as well as powerful. The frontend is developed
          with HTML5, CSS3, allowing us to create a clean layout, and
          JavaScript, React, and Angular have interactive components that make
          the site dynamic and exciting. The combination of these technologies
          produces an attractive and convenient design.
        </p>
        <p>
          For the backend, our developers rely on trusted platforms like PHP,
          Node.js, Python, and Java. These technologies handle the main
          functions of your website, from processing data to managing user
          requests. We use MySQL and MongoDB databases to keep and manage
          information securely. This enables your site to be highly implemented
          even when dealing with vast amounts of information.
        </p>
        <p>
          We can assure high-quality work with the content management system and
          online stores, including WordPress, Drupal, Joomla, Magento, and
          Shopify. Businesses can easily make content updates or product
          management in these systems without the need for technical assistance.
          The combination of these technologies enables us to create fast,
          scalable, secure, and future-proof websites.
        </p>
        <h6>Industries We Serve in Chennai</h6>
        <p>
          We provide web development services, keeping in mind the specific
          requirements of various industries in Chennai. Small businesses and
          start-ups usually require a robust online presence in order to
          introduce the brand to new customers. We assist them in developing
          websites, which are both affordable and professional, on which they
          can base their future.
        </p>
        <p>
          For retail and e-commerce companies, a smooth and secure shopping
          experience is essential. We design platforms that allow easy
          navigation, safe payment options, and attractive product displays. In
          healthcare and education, the need is different. These industries
          often require portals, booking systems, or e-learning platforms. We
          build solutions that make access easier for patients, students, and
          staff.
        </p>
        <p>
          The use of websites is good to promote real estate and hospitality
          businesses by displaying properties, hotels or services using quality
          visuals and details. Our designs showcase what is unique about them,
          and it also helps to attract more clients. In the case of IT/SaaS
          firms, we design elevated web applications that benefit the products
          and platforms of the firms. Every industry poses unique challenges,
          and we offer viable solutions that are specific to its requirements.
        </p>

        <h6>Crafting Digital Experiences That Matters </h6>
        <p>
          The most important element of your online business is your website. It
          has to be your brand, it should perform, and it should attract new
          clients. Kushel Digi Solutions will help the process of achieving this
          through professional services that cater to your needs.
        </p>
        <p>
          And, since you are in search of the best web development company in
          Chennai, our firm is ready to serve you. To get started on a free
          consultation and the creation of a site that can actually serve as a
          reflection of your business, contact us today.
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
