"use client";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const HomeForm = () => {
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
      alert("Wrong Captcha! Try again.")
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }
    toast.success("Captcha Verified!!");
    setCaptchaVerified(true);
  };

  const [formData, setFormData] = useState({
    name2: "",
    phone2: "",
    email2: "",
    message2: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  // Only allow letters and spaces in name field, and keep input blank if only numbers are typed
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "name2") {
      // If the value contains only numbers, set to blank
      if (/^[0-9]+$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: "" }));
      } else {
        // Remove any character that is not a letter or space
        const filtered = value.replace(/[^A-Za-z\s]/g, "");
        setFormData((prev) => ({ ...prev, [name]: filtered }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    console.log({ [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email2)) {
      toast.error("Invalid email address!");
      return;
    }

    const digitsOnly = formData.phone2.replace(/\D/g, "");

    if (digitsOnly.length < 10) {
      toast.error("Please enter a valid phone number (at least 10 digits)!");
      alert("Please enter a valid phone number (at least 10 digits)!")
      return;
    }


    // Name validation: only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (formData.name2.trim() === "") {
      toast.error("Please enter your name!");
      return;
    }
    if (!nameRegex.test(formData.name2.trim())) {
      toast.error("Name should only contain letters and spaces!");
      return;
    }
    if (
      formData.phone2.trim() === "91" ||
      formData.email2.trim() === "" ||
      formData.message2.trim() === ""
    ) {
      toast.error("Please fill all the fields!!");
      alert("Please fill all the fields!!")
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
      const response = await fetch("https://backend.kusheldigi.com/contact2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok || response.status === 200 || response.success === true) {
        navigate.push("/thankyou");
        generateCaptcha();
      } else {
        alert(JSON.stringify(response), "Unknown error");
      }
    } catch (error) {
      console.error("Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({
        name2: "",
        phone2: "",
        email2: "",
        message2: "",
      });
    }
  };

  return (
    <div className="w-full bg-[linear-gradient(280deg,#89c7fb,#c8d5f9_62.02%,#f9f9f4)] max-w-[1720px] mx-auto">
      <div
        className="max-w-[1720px] mx-auto flex flex-col xl:flex-row justify-between items-center gap-8 p-6 xl:p-16"
        id="innerIdcont"
      >
        {/* Left Section */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-[26px] lg:text-[24px] leading-[30px] lg:w-[600px] font-semibold text-[#083792]  mb-8">
            Want To Lead Market With AI-Led Digital Solutions?
          </h2>

          {/* Contact Cards */}
          <div className="flex flex-wrap gap-6 mb-10">
            {/* USA */}
            <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md hover:shadow-lg w-[300px]">
              <div className="flex items-center gap-3">
                <Image
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1757682386/download_12_cphfk3.png"
                  alt="USA Flag"
                  width={32}
                  height={22}
                  className="rounded-sm"
                />
                <div>
                  <p className="text-[#1b76fe] text-[20px] font-semibold leading-6">
                    +1-585-566-2070
                  </p>
                  <p className="text-black font-medium text-[15px]">
                    United States
                  </p>
                </div>
              </div>
              <span className="text-[#1b76fe] text-[22px]">
                <svg
                  className="phone-icon"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#1b76fe"
                    stroke="none"
                  >
                    <path
                      d="M1473 2986 c-87 -40 -97 -178 -15 -220 15 -7 68 -17 117 -21 204 -16
347 -54 505 -136 232 -119 417 -305 535 -540 77 -151 115 -296 130 -494 8
-102 23 -138 65 -160 66 -34 149 -5 177 63 28 68 -3 318 -63 502 -191 583
-709 979 -1329 1015 -67 4 -98 2 -122 -9z"
                    />
                    <path
                      d="M520 2760 c-224 -58 -400 -210 -481 -415 -21 -54 -23 -75 -22 -200 3
-583 336 -1220 855 -1637 251 -203 553 -358 839 -432 201 -52 446 -77 554 -57
169 31 352 175 434 342 45 91 81 218 81 283 0 46 -27 97 -64 121 -20 13 -487
99 -909 166 -116 18 -175 -19 -197 -126 l-12 -56 -56 32 c-264 148 -525 399
-707 679 -97 149 -94 137 -30 150 107 22 144 81 126 197 -67 422 -153 889
-166 909 -42 65 -113 78 -245 44z"
                    />
                    <path
                      d="M1460 2408 c-47 -32 -62 -63 -56 -118 3 -35 11 -51 38 -76 31 -28 43
-32 121 -38 335 -27 586 -278 613 -613 6 -78 10 -90 38 -121 25 -27 41 -35 76
-38 55 -6 86 9 118 56 22 33 24 41 18 124 -15 223 -104 418 -262 578 -156 157
-358 249 -579 264 -84 6 -92 4 -125 -18z"
                    />
                  </g>
                </svg>
              </span>
            </div>

            {/* India */}
            <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md hover:shadow-lg w-[300px]">
              <div className="flex items-center gap-3">
                <Image
                  src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1757682387/istockphoto-1471401435-612x612-removebg-preview_yk8kie_fb3wzd.avif"
                  alt="India Flag"
                  width={32}
                  height={22}
                  className="rounded-sm"
                />
                <div>
                  <p className="text-[#1b76fe] text-[20px] font-semibold leading-6">
                    +91 9045301702
                  </p>
                  <p className="text-black font-medium text-[15px]">India</p>
                </div>
              </div>
              <span className="text-[#1b76fe] text-[22px]">
                <svg
                  className="phone-icon"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#1b76fe"
                    stroke="none"
                  >
                    <path
                      d="M1473 2986 c-87 -40 -97 -178 -15 -220 15 -7 68 -17 117 -21 204 -16
347 -54 505 -136 232 -119 417 -305 535 -540 77 -151 115 -296 130 -494 8
-102 23 -138 65 -160 66 -34 149 -5 177 63 28 68 -3 318 -63 502 -191 583
-709 979 -1329 1015 -67 4 -98 2 -122 -9z"
                    />
                    <path
                      d="M520 2760 c-224 -58 -400 -210 -481 -415 -21 -54 -23 -75 -22 -200 3
-583 336 -1220 855 -1637 251 -203 553 -358 839 -432 201 -52 446 -77 554 -57
169 31 352 175 434 342 45 91 81 218 81 283 0 46 -27 97 -64 121 -20 13 -487
99 -909 166 -116 18 -175 -19 -197 -126 l-12 -56 -56 32 c-264 148 -525 399
-707 679 -97 149 -94 137 -30 150 107 22 144 81 126 197 -67 422 -153 889
-166 909 -42 65 -113 78 -245 44z"
                    />
                    <path
                      d="M1460 2408 c-47 -32 -62 -63 -56 -118 3 -35 11 -51 38 -76 31 -28 43
-32 121 -38 335 -27 586 -278 613 -613 6 -78 10 -90 38 -121 25 -27 41 -35 76
-38 55 -6 86 9 118 56 22 33 24 41 18 124 -15 223 -104 418 -262 578 -156 157
-358 249 -579 264 -84 6 -92 4 -125 -18z"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>

          {/* Our Clients */}
          <h3
            className="relative text-[#083792] font-semibold text-[18px] mb-6 inline-block 
   after:content-[''] after:absolute after:top-[12px] after:left-[120px] after:h-[2px] after:bg-[#b1c8eb] 
   after:w-[174px] md:after:w-[400px]"
          >
            Our Clients
          </h3>

          {/* Client Logos */}
          {/* Client Logos */}
          <div className="flex flex-col gap-6  max-w-[500px] mx-auto">
            {/* Top Row (4 logos combined) */}
            <Image
              src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1757681746/LOGOS-1_dhbr7h_ffi9gg.avif"
              alt="Clients Top Logos"
              width={500}
              height={80}
            />

            {/* Bottom Row (2 logos combined) */}
            <Image
              src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1757681806/LOGO-2_mhkyhy_rjmgze.avif"
              alt="Clients Bottom Logos"
              width={400}
              height={60}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden w-full lg:w-auto">
          <h3 className="bg-[#8591aa] text-white text-center text-2xl lg:text-[25px] py-5">
            Share Your Ideas, We'll Build it.
          </h3>
          <form className="px-6 py-4" onSubmit={handleForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className=" text-[#191d26] text-lg font-medium relative mb-2">
                  Name{" "}
                  <span className="absolute text-red-600 top-0 right-[-9px]">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="name2"
                  placeholder="Your Name"
                  value={formData.name2}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none "
                />
              </div>
              <div>
                <style jsx global>{`
                  .react-tel-input .form-control {
                    width: auto !important;
                    height: auto !important;
                  }
                `}</style>
                <label className=" text-[#191d26] text-lg font-medium relative mb-2">
                  Phone{" "}
                  <span className="absolute text-red-600 top-0 right-[-9px]">
                    *
                  </span>
                </label>
                <PhoneInput
                  country={"in"}
                  value={formData.phone2}
                  placeholder="Phone"
                  required
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone2: phone }))
                  }
                  inputClass="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className=" text-[#191d26] text-lg font-medium relative mb-2">
                Email{" "}
                <span className="absolute text-red-600 top-0 right-[-9px]">
                  *
                </span>
              </label>
              <input
                type="email"
                required
                name="email2"
                placeholder="Email"
                value={formData.email2}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label className=" text-[#191d26] text-lg font-medium relative mb-2">
                Message{" "}
                <span className="absolute text-red-600 top-0 right-[-9px]">
                  *
                </span>
              </label>
              <textarea
                name="message2"
                required
                placeholder="How Can We Help You?"
                value={formData.message2}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded-md p-3 h-28 focus:outline-none "
              ></textarea>
            </div>

            {/* Captcha */}
            <div className="flex items-start sm:items-normal gap-4 mb-4 flex-col sm:flex-row">
             <div> <span className="text-lg font-medium">
                Captcha: {firstNo} + {secondNo} =
              </span>
              <input
                type="number"
                required
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="border-b-2 border-black text-center w-16 p-1 text-lg font-semibold focus:outline-none"
              /></div>
              <button
                type="button"
                onClick={verifyCaptcha}
                className="bg-green-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-800 transition-colors duration-300"
              >
                Verify
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r cursor-pointer from-blue-600 via-cyan-400 to-blue-600 text-white font-bold py-3 rounded-full hover:bg-gradient-to-l transition-all duration-300"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
