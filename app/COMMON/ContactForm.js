import React, { useState } from "react";

import Link from "next/link";

import { useRouter } from 'next/navigation';

const ContactForm = ({ notify }) => {
  const pattern = new RegExp(/^\d{1,9}$/);
  const [isError, setIsError] = useState(false);
  const [loading, setloading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState({
    name2: "",
    email2: "",
    message2: "",
  });

  const [user1, setUser1] = useState({
    phone2: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleChange1 = (e) => {
    setUser1({ ...user1, [e.target.name]: e.target.value });
    if (!pattern.test(e.target.value)) setIsError(true);
    else setIsError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const res = await fetch("https://backend.kusheldigi.com/contact2", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...user, ...user1 }),
      });
      const data = await res.json();

      if (res.ok) {
        setShowPopup(true); // ✅ Show popup on success
        setUser({ name2: "", email2: "", message2: "" });
        setUser1({ phone2: "" });

        setTimeout(() => {
          setShowPopup(false); // Hide popup after 2 seconds
          router.push("/thankyou");
        }, 1000);
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setloading(false);
  };

  //   setTimeout(() => {
  //     //  notify("success" , "Successfully Submitted");
  //     navigate("/thankyou");
  //     setloading(false);
  //   }, 1500)
  //   const res = await fetch("https://backend.kusheldigi.com/contact2", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ ...user, ...user1 }),
  //   });
  //   const data = await res.json();
  //   // console.log(data);
  //   // alert(data.message);
  //   // notify("success", data.message);
  //   setTimeout(() => {
  //     window.location.href = "/";
  //   }, 1000);

  //   setUser({
  //     name2: "",
  //     phone2: "",
  //     email2: "",
  //     message2: "",
  //   });
  //   setloading(false);
  // };

  // const funt = () => {
  //   if (user1.phone2.length > 9) {
  //     document.getElementById("funts").disabled = true;
  //   } else {
  //     document.getElementById("funts").disabled = false;
  //   }

  //   document.getElementById("funts").disabled = false;
  // };

  return (
    <>
     {/* {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Successfully Submitted!</h2>
          
          </div>
        </div>
      )} */}
      <div>
        <div className="flex items-start justify-center discusion-form discusion-form1">
          <div className="w-full  mrs mrs1">
            <h3>Let’s Discuss your Project</h3>
            <form onSubmit={handleSubmit} className="trants">
              <div className=" flex items-start common-form">
                <div className="first-form">
                  <div className="form-field">
                    {/* <input
                      required
                      name="name2"
                      value={user.name2}
                      onChange={handleChange}
                      type="text"
                      placeholder="Name*"
                      maxLength="32"
                    /> */}
                    <input
  required
  name="name2"
  value={user.name2}
  onChange={(e) => {
    const { value } = e.target;

    const regex = /^[A-Za-z]+(?: [A-Za-z]*)?$/;

    if (value === "" || regex.test(value)) {
      setUser((prev) => ({ ...prev, name2: value }));
    }
  }}
  type="text"
  placeholder="Name*"
  maxLength="32"
/>
                  </div>
                  <div className="form-field mt-5">
                    {/* <input
                      id="funts"
                      // onKeyUp={funt}
                      maxLength="10"
                      name="phone2"
                      value={user1.phone2}
                      onChange={handleChange1}
                      // type="number"
                      type="tel"
                      pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                      required
                      title="Please enter a 10-digit phone number "
                      placeholder="Phone number*"
                    /> */}
                    <input
  id="funts"
  maxLength="10"
  name="phone2"
  value={user1.phone2}
  onChange={(e) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove spaces if pasted
    if (/^\d*$/.test(value)) { // Allow only digits
      handleChange1({ target: { name: 'phone2', value } });
    }
  }}
  onKeyDown={(e) => {
    if (e.key === ' ') {
      e.preventDefault(); // Prevent space input
    }
  }}
  type="tel"
  pattern="\d{10}"
  required
  title="Please enter a 10-digit phone number"
  placeholder="Phone number*"
/>

                  </div>
                  <div className="form-field mt-5">
                    {/* <input
                      required
                      name="email2"
                      value={user.email2}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email Address*"
                    /> */}
                    <input
  required
  name="email2"
  value={user.email2}
  onChange={handleChange}
  onInput={(e) => (e.target.value = e.target.value.replace(/\s/g, ""))}
  type="email"
  placeholder="Email Address*"
/>
                  </div>
                </div>
                <div className="second-form">
                  <div className="form-filed1">
                    <textarea
                      required
                      placeholder="Message"
                      name="message2"
                      value={user.message2}
                      onChange={handleChange}
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
            <button>
                  {
                    loading ? <div className="spinner33"></div> : <>
                      Submit <img loading="lazy" className="tih" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738997264/arrow1_gofqri.png' alt="kushel" />
                    </>
                  }

                </button>  
              </div>
            </form>
          </div>
          <div className="w-full loofs loofs1">
            <div className=" loofs-sect1">
              <h2>Would you like to talk to our experts about your project?</h2>
              <p>
                {" "}
                You can send us the details of your project, and a member of our
                team will contact you shortly.
              </p>
              <Link href="/contact-us">
                <button>
                  Request A Call{" "}
                  <img
                    width={12}
                    className="inline ml-1"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738997334/arrow4_ofqyoe.png'
                    alt="arrow4"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
