"use client"
import { useState } from "react";

// import { NavLink } from "react-router-dom";
import Link from "next/link";
import '../globals.css';

import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
// import { Helmet } from "react-helmet";

const HireTeam = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);


  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler=()=>{
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }



  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <Navbar/>
     
      <div className="ser-main">
        <div className="hire-back">
          <div className="hire-sect">
            <h1>Get Your<br />
              <span>Team Hired</span></h1>
            <p>
              Our expert recruiters help you go from ‘’ hope to HIRED’’ by finding meaningful employment for applicants, and outstanding employees for clients!
            </p>
          </div>
        </div>
        <div className="hireee-ss">
          <div className="hire-status flex items-center justify-around max-w-[1720px] m-auto">
            <div className="hiring-status">
              <h3>1000+</h3>
              <p>Hires Placed</p>
            </div>
            <div className="hiring-status">
              <h3>1000+</h3>
              <p>Interviews completed</p>
            </div>
            <div className="hiring-status">
              <h3>3258+</h3>
              <p>Resumes sourced</p>
            </div>
            <div className="hiring-status">
              <h3>1500+</h3>
              <p>Testimonials & Reviews</p>
            </div>
          </div>
        </div>

        <div className="hires-team">
          {/* <img src={hireTeam} alt="HireTeam" /> */}
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <h3>HIRE TEAM</h3>
          </marquee>
          <div className="hiring-team">
            <div className="first-hiring">
              <h5>Team Hired Helps</h5>
              <h2>Build Your Business</h2>
              <div className="hired-para">

                <p className="hiring-second-para">
                  We assist you in growing your company and guiding it towards success and longevity. Our staff, which is highly skilled and experienced, is dedicated to professionally, effectively, and efficiently promoting your company. Our goal is to build your company so that you can achieve unparalleled success.
                </p>
              </div>
              <Link href="/service">
                <button>
                  Our Services{" "}
                  <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" /> </svg>
                </button>
              </Link>
            </div>
            <div className="second-hiring">
              <div className="about165">
                <img className="hiredEllipse" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479853/hiredEllipse_avoyyq.png' alt="hiredEllipse-desgin" title="hiredEllipse-desigm" />
              </div>
              <img className="hiper" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479792/hiper_sdrvuw.png' alt="Build Your Business" title="Build Your Business" />
            </div>
          </div>
        </div>

        <div className="team-hired-help">

          <div className="hired-help-sect">
            <h5>Team Hired Helps</h5>
            <h2>GET YOUR TEAM HIRED</h2>
            <div className="list-hired">
              <div className="listing-hired">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479896/watta_kajy5c.png' alt="TEAM HIRED with right point" title="TEAM HIRED with right point" />
                <p>Our skilled recruiters through our Team Hired Virtual Hiring Events can help get you hired fast build your team fast</p>
              </div>
              <div className="listing-hired">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479896/watta_kajy5c.png' alt="TEAM HIRED with right point" title="TEAM HIRED with right point" />
                <p>Learn tips and tricks on how to refine your hiring process</p>
              </div>
              <div className="listing-hired">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479896/watta_kajy5c.png' alt="TEAM HIRED with right point" title="TEAM HIRED with right point" />
                <p>Expert Coaching & Consulting to support your business</p>
              </div>
              <div className="listing-hired">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479896/watta_kajy5c.png' alt="TEAM HIRED with right point" title="TEAM HIRED with right point" />
                <p>Let Team Hired become an extension of your brand to help scale your business to the next level.</p>
              </div>
            </div>
            <Link href="/contact-us" style={{display:"flex",width:"180px"}}><button>Contact US 
              <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" /> </svg>
            </button></Link>
          </div>
          {/* </div> */}
        </div>

        <div className="benifits-hire">
          <h3>Benefits of Hire Team</h3>
          <div className="hired-cards mt-10">
            <div className="hired-card">
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479967/hf2_ypdcb8.png' alt="hSave time finding talent" title="Save time finding talent" />
                  <p>Save time finding talent</p>
                </div>
              </div>
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740479967/hf2_ypdcb8.png' alt="Save money spent on sorcing talent" title="Save money spent on sorcing talent" />
                  <p>Save money spent on <br /> sourcing talent</p>
                </div>
              </div>
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480039/hf3_dwd1vh.png' alt="productive team" title="productive team" />
                  <p>Work with a <br /> productive team</p>
                </div>
              </div>
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480069/hf4_erwf57.png' alt="finalized by you" title="finalized by you" />
                  <p>Team members are <br /> finalized by you</p>
                </div>
              </div>
            </div>
            <div className="hired-card">
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480102/hf5_j6amnq.png' alt="talented professionals" title="talented professionals" />
                  <p>Access to a pool of <br /> talented professionals</p>
                </div>
              </div>
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480128/hf6_qxgbpf.png' alt="comfortable with" title="comfortable with" />
                  <p>Work with people you <br /> are comfortable with</p>
                </div>
              </div>
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480158/hf7_eevnq8.png' alt="igher resource" title="igher resource" />
                  <p>Higher resource <br /> efficiency since teams <br /> work remotely</p>
                </div>
              </div>
              <div className="hired-box">
                <div className="hired-sard">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480185/hf8_mw1crt.png' alt="Faster and better" title="Faster and better" />
                  <p>Faster and better <br /> outcomes</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact-us"><button>Lets Discuss Your Project</button></Link>
        </div>

        <div className="hireee-serv">
          <div className="hire-serve">
            <div className="first-serve">
              <h3>INDUSTRIES WE SERVE</h3>
              <p>Our digital marketing services serve different industries. We operate in the technology, financial, health and financial services, education, tourism, commercial good, and industrial sectors.Our team strengthen their digital reach and guide them towards growth.</p>
            </div>
            <div className="second-serve">
              <div className="indu-fard mt-8">
                <div className="indu-card indus-gard indu-card1">
                  <div className="indu-box"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <img src={hovered ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480660/posis10_wcvrvl.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480435/dilkush_hh8ycu.png'} alt="Healthcare & Wellness" title="Healthcare & Wellness" />
                    <p>Healthcare & Wellness</p>
                  </div>
                  <div className="indu-box"
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                  >
                    <img src={hovered2 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480470/posis2_nsg7aw.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480216/dec1_ljtd5g.png'} alt="Real Estate" title="Real Estate" />
                    <p>Real Estate</p>
                  </div>
                  <div className="indu-box"
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                  >
                    <img src={hovered3 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480503/posis3_i20kgv.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480251/dec2_cs0fuw.png'} alt="Software & Internet Marketing" title="Software & Internet Marketing" />
                    <p>IT, Software & Internet Marketing</p>
                  </div>

                </div>
                <div className="indu-card indus-gard indu-card1">

                  <div className="indu-box"
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}
                  >
                    <img src={hovered4 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480528/posis4_gtmcsr.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480279/dec3_kupbmp.png'} alt="Finance & Banking" title="Finance & Banking" />
                    <p>Finance & Banking</p>
                  </div>
                  <div className="indu-box"
                    onMouseEnter={() => setHovered5(true)}
                    onMouseLeave={() => setHovered5(false)}
                  >
                    <img src={hovered5 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480551/posis5_kcgm4z.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480309/dec4_gx77em.png'} alt="Government & Public" title="Government & Public" />
                    <p>
                      Government & Public <br /> Sector Enterprises
                    </p>
                  </div>
                  <div className="indu-box"
                    onMouseEnter={() => setHovered6(true)}
                    onMouseLeave={() => setHovered6(false)}
                  >
                    <img src={hovered6 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480580/posis6_velzqq.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480336/dec5_juy6ud.png'} alt="Travel & Tour" title="Travel & Tour" />
                    <p>Travel & Tour</p>
                  </div>

                </div>
                <div className="indu-card indus-gard indu-card1">


                  <div className="indu-box"
                    onMouseEnter={() => setHovered7(true)}
                    onMouseLeave={() => setHovered7(false)}
                  >
                    <img src={hovered7 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480605/posis7_xj147r.png': 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480376/dec6_c6oc4v.png'} alt="Retail" title="Retail" />
                    <p>Retail</p>
                  </div>
                  <div className="indu-box"
                    onMouseEnter={() => setHovered8(true)}
                    onMouseLeave={() => setHovered8(false)}
                  >
                    <img src={hovered8 ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480633/posis8_piomxi.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480406/dec7_xex8ro.png'} alt="SPORTS ( outdoor & indoor )" title="SPORTS ( outdoor & indoor )" />
                    <p>SPORTS ( outdoor & indoor )</p>
                  </div>
                  <div className="indu-box indus-trust"

                  >
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480336/dec5_juy6ud.png' alt="Travel & Tour" title="Travel & Tour" />
                    <p>Travel & Tour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="demo-hire">
          <div className="demo-hire-sect">
            <h3>Apply for services right now, to learn more about our work or schedule an appointment.</h3>
            <Link href="/contact-us">
            <button>Get Your Demo Now
              <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" /> </svg>
            </button></Link>
          </div>
        </div>

        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480684/whatsapp_fuwawo.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HireTeam;
