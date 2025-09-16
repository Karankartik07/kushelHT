"use client";
import React, { useEffect, useRef, useState } from "react";

import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import "./hero.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function HeroEcomPune() {
  const [showModal, setShowModal] = useState(false);

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

  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth <= 760;

  const formContent = (
    <div
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: 700,
        width: "98vw",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <button
        onClick={() => setShowModal(false)}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          zIndex: 10,
        }}
        aria-label="Close Contact Form"
      >
        <RxCross2 />
      </button>
      <h2 style={{ fontSize: 22, fontWeight: 600, textAlign: "center" }}>
        Take the First Step Toward{" "}
        <span style={{ fontWeight: 700 }}>your project</span>
      </h2>
      <p
        className="drop"
        style={{ color: "#0066ff", marginBottom: 20, textAlign: "center" }}
      >
        Drop your details below!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={formData?.name}
          onChange={handleChange}
          required
          type="text"
          name="name"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: 12,
            margin: "10px 0",
            border: "none",
            borderBottom: "1px solid #ccc",
            fontSize: 15,
            outline: "none",
          }}
        />
        <input
          value={formData?.email}
          onChange={handleChange}
          required
          name="email"
          type="email"
          placeholder="Email*"
          style={{
            width: "100%",
            padding: 12,
            margin: "10px 0",
            border: "none",
            borderBottom: "1px solid #ccc",
            fontSize: 15,
            outline: "none",
          }}
        />
        <div
          className="phoneN"
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          <span style={{ fontWeight: "bold" }}>(+91)</span>
          <input
            name="phone"
            ref={phoneInputRef}
            onInput={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              if (digits.length <= 10) {
                e.target.value = digits;
              } else {
                e.target.value = digits.slice(0, 10); // trim to 11
                toast.error("Only 10 digit phone number allowed!");
              }
            }}
            type="number"
            placeholder="Mobile Number"
            style={{
              flex: 1,
              padding: 12,
              border: "none",
              borderBottom: "1px solid #ccc",
              fontSize: 15,
              outline: "none",
            }}
          />
        </div>
        <div
          className="captcha"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            margin: "15px 0",
            width: "100%",
          }}
        >
          <span style={{ width: 60 }}>{`${firstNo} + ${secondNo} = `}</span>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            required
            style={{
              flex: 1,
              padding: 12,
              border: "none",
              borderBottom: "1px solid #ccc",
              fontSize: 15,
              outline: "none",
            }}
          />
          <a
            style={{
              color: "#0066ff",
              fontWeight: 600,
              textDecoration: "none",
            }}
            onClick={verifyCaptcha}
          >
            VERIFY
          </a>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 15,
            fontSize: 16,
            fontWeight: 600,
            background: "#0066ff",
            color: "#fff",
            border: "none",
            borderRadius: 30,
            marginTop: 10,
            cursor: "pointer",
          }}
          disabled={loading}
          className="submit"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        <p
          className="terms"
          style={{
            margin: "8px auto",
            textAlign: "center",
            width: "90%",
            fontSize: 13,
            color: "#333",
          }}
        >
          By clicking on submit, you agree to our{" "}
          <a
            href="/terms-conditions"
            style={{ color: "#0066ff", textDecoration: "none" }}
          >
            Terms & Condition
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            style={{ color: "#0066ff", textDecoration: "none" }}
          >
            Privacy policy
          </a>
        </p>
      </form>
    </div>
  );

  return (
    <section className="hero-bigCom">
      <div className="overlay-black">
        <div className="containerN">
          {/* Left Section */}
          <div className="leftN">
            <h1>Crafting Websites That Inspire Trust and Action</h1>
            <p>
              Your website should do more than just look appealing — it should
              inspire confidence, guide visitors smoothly, and help your
              business grow. We design websites that combine creativity with
              strategy to deliver real results.
            </p>

            <ul className="features">
              <li className="feat-icon">
                {" "}
                <img src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756447593/next_1_fmsl3r.png" />{" "}
                Tailored designs that truly represent your brand
              </li>
              <li className="feat-icon">
                {" "}
                <img src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756447593/next_1_fmsl3r.png" />{" "}
                Seamless, responsive experience on every device
              </li>
              <li className="feat-icon">
                {" "}
                <img src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756447593/next_1_fmsl3r.png" />{" "}
                Intuitive layouts that turn visitors into loyal customers
              </li>
            </ul>

            <div className="partners">
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756447594/Group_1171281720_rpteuq.png"
                alt="BigCommerce"
              />
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756447593/Group_1171281718_diwlmv.png"
                alt="Shopify"
              />
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756447593/Group_1171281719_ha4duf.png"
                alt="Certified Partner"
              />
            </div>

            <div className="partnersN">
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756796115/Group_1171281850_f3pngy.png"
                alt="BigCommerce"
              />
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756796115/Group_1171281849_jgkg2j.png"
                alt="Shopify"
              />
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756796120/078b23cd8619148c3314eda77b86dd3cb5717e6d_qbj6ap.png"
                alt="Certified Partner"
              />
            </div>

            <div className="buttons">
              <Link href={"/contact-us"}>
                <button className="btnNew blue">
                  {" "}
                  Get a Free Consult Today
                </button>
              </Link>
              <Link
                href="https://calendly.com/shubham-goq0/sales-discovery-call?month=2025-08&utm_source=Email&utm_medium=email&utm_campaign=Chalendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnNew white">Schedule a Call</button>
              </Link>
              <button
                className="btnNewhide blue"
                onClick={() => setShowModal(true)}
                // style={{ display: "block" }}
              >
                Get a Free Consult Today
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="rightN">
            <h2>
              Take the First Step Toward <span>your project</span>
            </h2>
            <p className="drop">Drop your details below!</p>

            <form onSubmit={handleSubmit}>
              <input
                value={formData?.name}
                onChange={handleChange}
                required
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <input
                value={formData?.email}
                onChange={handleChange}
                required
                name="email"
                type="email"
                placeholder="Email*"
              />
              <div className="phoneN">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="mblinp "
                  name="phone"
                  ref={phoneInputRef}
                  onInput={(e) => {
                    const digits = e.target.value.replace(/\D/g, "");
                    if (digits.length <= 10) {
                      e.target.value = digits;
                    } else {
                      e.target.value = digits.slice(0, 10); // trim to 11
                      toast.error("Only 10 digit phone number allowed!");
                    }
                  }}
                  required
                />
              </div>

              <div className="captcha">
                <span>{`${firstNo} + ${secondNo} = `}</span>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  required
                  // id="ans-captch"
                />
                <a href="#" onClick={verifyCaptcha}>
                  VERIFY
                </a>
              </div>

              <button type="submit" disabled={loading} className="submit">
                {loading ? "Sending..." : "Submit"}
              </button>

              <p className="terms">
                By clicking on submit, you agree to our{" "}
                <a href="/terms-conditions">Terms & Condition</a> and{" "}
                <a href="/privacy-policy">Privacy policy</a>
              </p>
            </form>
          </div>
        </div>
        {/* Modal for small screens */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.7)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {formContent}
          </div>
        )}
      </div>
    </section>
  );
}
