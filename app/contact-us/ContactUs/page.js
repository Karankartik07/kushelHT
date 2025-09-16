"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";

import { useRouter } from "next/navigation";
import { FaAward, FaUserAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../components/Home/homeBan.css";

const ContactUs = () => {
  const interestsOptions = [
    "UI/UX Design",
    "E-Commerce Solution",
    "Web development",
    "Mobile App Development",
    // "Digital Marketing",
    "Graphic Design",
    "Staff Augmentation",
    "Other",
  ];

  const handleChange1 = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInterestClick = (interest) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(interest);
      return {
        ...prev,
        interests: isSelected
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);

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

  const verifyCaptcha = () => {
    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }
    toast.success("Captcha Verified!!");
    setCaptchaVerified(true);
  };

  const [formData, setFormData] = useState({
    name11: "",
    phone11: "",
    email11: "",
    message11: "",
    service11: [],
    termsAccepted: false,
  });

  //   const handleChange = (e) => {
  //     console.log(e);

  // };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        service11: checked
          ? [...prev.service11, value]
          : prev.service11.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(formData);
    }
  };
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log({ [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email11)) {
      toast.error("Invalid email address!");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone11)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (
      formData.name11.trim() === "" ||
      formData.phone11.trim() === "91" ||
      formData.email11.trim() === "" ||
      formData.message11.trim() === "" ||
      formData.service11.length === 0
    ) {
      toast.error("Please fill all the fields!!");
      return;
    }
    if (!captchaVerified) {
      toast.error("Please Verify the Captcha !!");
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
      const response = await fetch("https://backend.kusheldigi.com/contact11", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok || response.success === true || response.status === 200) {
        navigate.push("/thankyou");
        generateCaptcha();
      } else {
        toast.error(JSON.stringify(response), "Unknown error");
      }
    } catch (error) {
      console.error("Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({
        name11: "",
        phone11: "",
        email11: "",
        message11: "",
        service11: [],
      });
    }
  };
  const trackRef = useRef(null);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const images = track.innerHTML;
      track.innerHTML += images;
    }
  }, []);

  return (
    <section className="contactMainku">
      <div className="contact-containerKush">
        <div className="form-sectionKush">
          <form
            onSubmit={handleForm}
            className="contact-formKush"
            id="contactForm"
          >
            <h2>Fill in the form</h2>

            <div className="contact-form1">
              <input
                type="text"
                name="name11"
                placeholder="Full name *"
                value={formData?.name11}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[A-Za-z ]*$/.test(value)) {
                    handleFormChange(e);
                  }
                }}
                required
              />
            </div>
            <div className="input-groupKush">
              <input
                type="email"
                name="email11"
                placeholder="Business email *"
                value={formData?.email11}
                onChange={handleFormChange}
                required
              />

              <input
                type="tel"
                name="phone11"
                placeholder="Phone number*"
                maxLength={10}
                value={formData?.phone11}
                pattern="[0-9]{10}"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    setFormData((prev) => ({ ...prev, phone11: value }));
                  }
                }}
                required
              />
            </div>
            <div>
              <textarea
                name="message11"
                placeholder="Project details *"
                value={formData?.message11}
                onChange={handleFormChange}
                required
              ></textarea>
            </div>

            <div className="interests-listCom checkboxes-listCom">
              {interestsOptions.map((service, index) => {
                const inputId = `service-${index}`;
                const isSelected = (formData.service11 || []).includes(service);
                return (
                  <label
                    key={inputId}
                    className={`checkbox-labelCom ${
                      isSelected ? "selecteCom" : ""
                    }`}
                    htmlFor={inputId}
                  >
                    <input
                      type="checkbox"
                      name="service11"
                      id={inputId}
                      value={service}
                      onChange={handleChange}
                      checked={isSelected}
                      className="checkedCheckbox"
                    />
                    {service}
                  </label>
                );
              })}
            </div>

            <div className="terms-lables">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange1}
                  required
                />
                *I have read and accepted the{" "}
                <a href="/terms-conditions">Terms & Conditions </a> and{" "}
                <a href="/privacy-policy"> Privacy Policy </a>
              </label>
              <div className="captcha-box">
                <div className="inputcapt">
                  <span>{`${firstNo} + ${secondNo} = `}</span>
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
                disabled={loading}
                type="submit"
                className="submit-btnKush"
              >
                {" "}
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="info-sectionkUSH">
          <h1 className="DropCont">
            <span>Got an Idea? </span> Let’s Make It Happen.
          </h1>
          <div className="row-box">
            <div className="col-box dis-flex">
              <div className="iconImgReact">
                <GiTrophyCup />
              </div>

              <div className="desp">
                <h4>8+ Years of Experience</h4>
                <p>
                  Delivering smart, scalable solutions for complex business
                  challenges.
                </p>
              </div>
            </div>
            <div className="col-box dis-flex">
              <div className="iconImgReact">
                <FaAward />
              </div>

              <div className="desp">
                <h4>1000+ Clients Served</h4>
                <p>
                  From budding startups to Fortune 500 companies – we’ve done it
                  all.
                </p>
              </div>
            </div>
            <div className="col-box dis-flex">
              <div className="iconImgReact">
                <FaUserAlt />
              </div>

              <div className="desp">
                <h4>250+ Experts Onboard</h4>
                <p>
                  A powerhouse team focused to deliver digital excellence and
                  business growth.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="trusted-by">
            Tell us about your project. We’ll handle the rest.
          </div>

          <div className="sliderTrusted">
            <div className="slider-track" ref={trackRef}>
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203598/webinstalogo_rutcoc_1_empjy6.png"
                    alt="image"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203613/summer_2_htxjay.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203624/CodePXL_Web_Logo_1_cr6g7c.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203637/Slide365_Logo_1_x9pvmf.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203651/sights_and_scope_black_logo_2_ksdcq4.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203692/70904_228x204_1_rvp6ue.png"
                    alt="img"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
