"use client";

import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import "./bulgariabanner.css";

const BulgariaBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
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
        initialCountry: "bg",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("bg"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      // Optional: Store the instance if you ever need to validate
      phoneInputRef.current._iti = iti;
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    let updatedValue = value;

    // if (name === "phone") {
    //     updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    // }

    if (name === "name") {
      // ✅ Name only alphabets and spaces
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = phoneInputRef.current?.value || "";
    const phoneDigitsOnly = phone.replace(/\D/g, ""); // Only digits

    if (!formData.name || !formData.email || !phone) {
      toast.error("Please fill all the fields!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address!");
      return;
    }

    if (phoneDigitsOnly.length !== 11) {
      toast.error("Phone number must be exactly 11 digits!");
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
        phone: phoneDigitsOnly, // send clean number
      };
      const response = await fetch("https://backend.kusheldigi.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      console.log("Result--->>", result);

      if (response.ok || response.success === true || response.status === 200) {
        router.push("/thankyou");
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "" });
      phoneInputRef.current.value = ""; // reset manually
      generateCaptcha();
    }
  };

  const scrollToFormHome = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      const yOffset = -120;
      const y =
        formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navigate = useRouter();

  return (
    <section className="bulgaria-banner-section">
      <div className="bulgaria-banner-overlay">
        <div className="bulgaria-banner-content-wrapper">
          {/* Left Content */}
          <div className="bulgaria-banner-left">
            <h1 className="bulgaria-banner-heading">
              E-Commerce Development
              <br />
              <span className="bulgaria-banner-span">Company in Bulgaria</span>
            </h1>
            <p className="bulgaria-banner-subtext">
              Are you in search of a reliable ecommerce development company in
              Bulgaria to help you create an ecommerce store, but not sure who
              to choose? Look no further, because Kushel Digi solutions helped
              many companies in creating conversion-focused ecommerce stores
              that are reliable, fast, secure, SEO optimized and
              mobile-friendly. We provide seamless interface, fast solutions and
              smart features on all platforms.
            </p>
            <div className="bulgaria-banner-buttons">
              <button
                onClick={scrollToFormHome}
                className="bulgaria-banner-btn-yellow"
              >
                Get a Free Consultation
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/shubham-goq0/sales-discovery-call?month=2025-06&utm_source=Email&utm_medium=email&utm_campaign=Chalendly",
                    "_blank"
                  )
                }
                className="bulgaria-banner-btn-outline"
              >
                Schedule a Demo
              </button>
            </div>

            <div className="bulgaria-banner-images">
              <img
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281720_x2l3jk.png"
                alt="eCommerce Development in noida"
                className="noida-banner-image"
              />
              <img
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281718_y1ktz6.png"
                alt="Graphic Design"
                className="noida-banner-graphic"
              />
              <img
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281719_ywsaio.png"
                alt="Graphic Design"
                className="noida-banner-graphic2"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="bulgaria-banner-form">
            <form className="form-box" onSubmit={handleSubmit}>
              <h3 className="form-heading">
                Are you ready to start <strong>your project?</strong>
              </h3>
              <p className="form-subheading">Drop your details below!</p>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-input"
                value={formData?.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="form-input"
                value={formData?.email}
                onChange={handleChange}
                required
              />

              <div className="form-phone-wrapper">
                {/* <span className="form-country-code">(+1)</span> */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number*"
                  className="form-input phone-input"
                  ref={phoneInputRef}
                  onInput={(e) => {
                    const digits = e.target.value.replace(/\D/g, ""); // remove non-digits
                    if (digits.length <= 11) {
                      e.target.value = digits;
                    } else {
                      e.target.value = digits.slice(0, 11); // trim to 11
                      toast.error("Only 11 digit phone number allowed!");
                    }
                  }}
                  required
                />
              </div>

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

              <div className="mt-btn">
                <button
                  className="form-submit-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
                {loading && <span className="loader3"></span>}
              </div>

              <p className="form-terms">
                By clicking on submit, you agree to our
                <a href="/termsconditions"> Terms & Condition</a> and
                <a href="/privacy-policy"> Privacy policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulgariaBanner;
