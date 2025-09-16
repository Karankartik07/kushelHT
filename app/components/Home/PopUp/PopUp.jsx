"use client";

import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { RxCross1 } from "react-icons/rx";
import "./PopUp.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

const Popup = () => {
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

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
      intlTelInput(phoneInputRef.current, {
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
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    if (name === "name") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address!");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (
      formData.name.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.email.trim() === ""
    ) {
      toast.error("Please fill all the fields!!");
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
      const response = await fetch("https://backend.kusheldigi.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Result--->>", result);

      if (response.ok) {
        sessionStorage.setItem("popupSubmitted", "true"); // ✅ Prevent future popups
        router.push("/thankyou");
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", phone: "" });
      generateCaptcha();
    }
  };

  // ✅ Show popup after delay only if not already submitted
  useEffect(() => {
    const isSubmitted = sessionStorage.getItem("popupSubmitted");
    if (!isSubmitted) {
      const timer = setTimeout(() => {
        setShowPopUp(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPopUp && (
        <section className="popup-modal" id="popupModal">
          <div className="modal-box">
            <div className="cross-icon" onClick={() => setShowPopUp(false)}>
              <RxCross1 />
            </div>
            <div className="upper-modal-box">
              <div className="upper-left-content">
                <h3 className="popup-form-heading">
                  Hey Hey! Before You Leave...👋
                </h3>
                <hr className="popup-hr" />
                <p className="popupup-sm-heading">
                  Our Experts are Ready to Provide Free
                </p>
                <p className="popup-para">
                  <img
                    width={20}
                    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446922/right-icon_dqytxe.png"
                    alt=""
                  />{" "}
                  Development Blueprint.
                </p>
                <p className="popup-para">
                  <img
                    width={20}
                    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446922/right-icon_dqytxe.png"
                    alt=""
                  />{" "}
                  Tentative Budget.
                </p>
                <p className="popup-para">
                  <img
                    width={20}
                    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446922/right-icon_dqytxe.png"
                    alt=""
                  />{" "}
                  Estimated Time-To-Market.
                </p>
              </div>
            </div>
            <div className="bottom-modal-box">
              <div>
                <div className="bottom-left-box">
                  <h3 className="bottom-left-box-heading">95%</h3>
                  <p className="popup-extra-small-heading ninty_five">
                    Customer Retention Ratio
                  </p>
                </div>
                <div className="bottom-left-box">
                  <h3 className="bottom-left-box-heading">2000+</h3>
                  <p className="popup-extra-small-heading">Projects</p>
                </div>
              </div>
              <hr className="bottom-popup-hr" />

              <div>
                <div className="bottom-right-box">
                  <h3 className="bottom-right-box-heading">1800+</h3>
                  <p className="popup-extra-small-heading ninty_five">
                    Certified Professionals
                  </p>
                </div>
                <div className="bottom-right-box">
                  <h3 className="bottom-right-box-heading">20+</h3>
                  <p className="popup-extra-small-heading">Global Offices</p>
                </div>
              </div>
            </div>

            <div className="pop-right-parent-div">
              <div className="pop-rightForm">
                <h3 className="popup-contact-heading">
                  Let’s Build your Success Together!
                </h3>
                <form
                  className="pop-contact-form"
                  id="contactForm"
                  onSubmit={handleSubmit}
                >
                  <div className="input-parent-div">
                    <input
                      className="pop-contact-input"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData?.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="pop-contact-input"
                      type="email"
                      name="email"
                      placeholder="Business Email"
                      value={formData?.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="pop-contact-input"
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      maxLength={10}
                      value={formData?.phone}
                      onChange={handleChange}
                      ref={phoneInputRef}
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

                  <button
                    className="pop-contact-form-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                  {loading && <span className="loader3"></span>}

                  <Image
                    style={{ width: "70%", margin: "10px auto" }}
                    className="popup-companies"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073874/popup-upper-companies_qxbjt0.png"
                    loading="lazy"
                    width="315"
                    height="57"
                    alt="companies"
                  />
                  <Image
                    style={{ width: "80%", margin: "15px auto" }}
                    className="popup-companies"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073843/popup-below-companies_yboe3z.png"
                    loading="lazy"
                    width="360"
                    height="29"
                    alt="companies"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Popup;
