"use client"
import React, { useState } from 'react'

import Head from 'next/head';


import ContactForm1 from '../COMMON/ContactForm1'

import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import '../globals.css'

import Link from 'next/link';

const HowWork = ({notify}) => {
  const [tab, setTab] = useState(1);

  const tabAnother1 = () => {
    setTab(1);
    document.getElementById("track1").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "none";
  }
  const tabAnother2 = () => {
    setTab(2);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "none";
  }
  const tabAnother3 = () => {
    setTab(3);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "none";
  }
  const tabAnother4 = () => {
    setTab(4);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "1.5px solid #1476F2";
    document.getElementById("track5").style.borderBottom = "none";

  }
  const tabAnother5 = () => {
    setTab(5);
    document.getElementById("track1").style.borderBottom = "none";
    document.getElementById("track2").style.borderBottom = "none";
    document.getElementById("track3").style.borderBottom = "none";
    document.getElementById("track4").style.borderBottom = "none";
    document.getElementById("track5").style.borderBottom = "1.5px solid #1476F2";
  }

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
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
  
    <div className="ser-main">

<Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>
      
          <Navbar/>
      <div className="learn-back">
        <div className='chanu'>
          <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999228/studentFrame_qjy2bw.png' alt="kushel" />
        </div>
        <div className="learn-back1">
          <h1>Learn about our <br /> workflow</h1>
          <p>We take care of your projects with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment. Our workflow amplifies collaboration and faster turnarounds to achieve even the most ambitious goals.</p>
          <Link href="/contact-us"><button>LET’S TALK</button></Link>
        </div>
        <div className="learn-back2">
          <div className="studentFrame">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999228/studentFrame_qjy2bw.png' alt="student" />
          </div>
          <img className='student22' src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999165/students_vka29m.png' alt="student" />
        </div>
      </div>

      <div className="why_ecoming  why_ecoming22">
        <h4>Product building done right</h4>
        <div className="why_poinhy">
          <p>With over 450 completed projects, our project lifecycle is designed to</p>
          <p>help clients ship quality products at the speed of digital efficiency.</p>
        </div>
        <div className="ecoming_cards">
          <div className="ecoming_card">
            <div className="ecoming_box">
              <div className="yt_img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999265/pinnak1_qfssk3.png' alt="pinnak" />
              </div>
              <div className="yt_heading">
                <h3>Communication</h3>
                <p>Onboard Kushel Digi staff to your preferred messenger and project management channels.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999294/pinnak2_wju73g.png' alt="pinnak" />
              </div>
              <div className="yt_heading">
                <h3>Ideation</h3>
                <p>Get expert evaluation on your product ideas and how to best execute their development.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999321/pinnak3_uczoqm.png' alt="pinnak" />
              </div>
              <div className="yt_heading">
                <h3>Transparency</h3>
                <p>Receive updates on a daily basis and review work completed through agile iterations.</p>
              </div>
            </div>
          </div>
          <div className="ecoming_card">
            <div className="ecoming_box">
              <div className="yt_img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999347/pinnak4_mzchfi.png' alt="pinak" />
              </div>
              <div className="yt_heading">
                <h3>Quick Kickoff</h3>
                <p>The scoping session takes a single day and project kickoff can happen in as little as a week.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999372/pinnak5_pqapj5.png' alt="pinak" />
              </div>
              <div className="yt_heading">
                <h3>Excellence</h3>
                <p>We hire exclusively mid-to-senior level talent with decades of combined experience.</p>
              </div>
            </div>
            <div className="ecoming_box">
              <div className="yt_img">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999399/pinnak6_wo8s4f.png' alt="pianak" />
              </div>
              <div className="yt_heading">
                <h3>Flexibility</h3>
                <p>Our teams are your teams, so feel free to shape our workflow as much as you need.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="workShop">
        <div className="workshop_nav">
          <p onClick={tabAnother1} id='track1'> Workshops </p>
          <p onClick={tabAnother2} id='track2'>Kick-off</p>
          <p onClick={tabAnother3} id='track3'>UX/UI Design</p>
          <p onClick={tabAnother4} id='track4'>Development</p>
          <p onClick={tabAnother5} id='track5'>Delivery & Support</p>
        </div>
        <div className="workFolow">
          {/* ================1st================ */}
          {
            tab === 1 && (
              <div className="workflow_chart mt-28">
                <div className="working_pnt">
                  <div className="working_pnt1">
                    <div className='poinyuj'>
                      <h3>1.</h3>
                      <p>Workshops</p>
                    </div>
                  </div>
                  <div className="working_pnt2">
                    <h4>What do businesses gain by kickstarting products/the design process with our Workshops?</h4>
                    <div className="processings_nas mt-5">
                      <div className="processing_nas">
                        <p>Save time and money early on</p>
                        <p>Identify and mitigate future risks</p>
                        <p>Refine product vision and business goals</p>
                      </div>
                      <div className="processing_nas">
                        <p>Understand users and their needs</p>
                        <p>Define the redesign direction and
                          crucial points</p>
                        <p>Ideate based on the learning and data</p>
                      </div>
                    </div>

                    <div className="procct_img mt-8">
                      <div className="proccet_img_left">
                        <p>Our Lean Design Workshop is an efficient and easy method to discover users’ pain
                          points and business goals. Together, we will identify how the product’s design
                          can fit the target audience. The workshop helps us design the product to match
                          your users’ needs, and enable the users to navigate the platform easily.</p>
                      </div>
                      <div className="proccet_img_right">
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999424/recy_gup37g.png' alt="recy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {/* ====================2nd==================== */}
          {
            tab === 2 && (
              <div className="workflow_chart mt-28">
                <div className="working_pnt">
                  <div className="working_pnt1">
                    <div className='poinyuj'>
                      <h3>2.</h3>
                      <p>Kick-off</p>
                    </div>
                  </div>
                  <div className="working_pnt2">
                    <h4>Meet your Kushel Digi team members and dedicated project manager, and integrate people into your <br /> preferred messenger channels and project management tools.</h4>
                    <div className="processings_nas mt-5">
                      <div className="processing_nas">
                        <p>Save time and money early on</p>
                        <p>Identify and mitigate future risks</p>
                        <p>Refine product vision and business goals</p>
                      </div>
                      <div className="processing_nas">
                        <p>Understand users and their needs</p>
                        <p>Define the redesign direction and
                          crucial points</p>
                        <p>Ideate based on the learning and data</p>
                      </div>
                    </div>

                    <div className="procct_img mt-8">
                      <div className="proccet_img_left">
                        <p>Our Lean Design Workshop is an efficient and easy method to discover users’ pain
                          points and business goals. Together, we will identify how the product’s design
                          can fit the target audience. The workshop helps us design the product to match
                          your users’ needs, and enable the users to navigate the platform easily.</p>
                      </div>
                      <div className="proccet_img_right">
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999454/remix_rmv3ed.png' alt="recy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }



          {/* =====================3rd================ */}
          {
            tab === 3 && (
              <div className="flowChart3 mt-28">
                <div className="flowChart33_left">
                  <div className="flowa">
                    <div className="flowChartSec">
                      <div className='poinyuj'>
                        <h3>3.</h3>
                        <p>Design</p>
                      </div>

                    </div>
                    <div className="flowChartSec1">
                      <div className='flowChartSec11'>
                        <p>Our frontend teams provide UX and UI mockups of your website or app. The design phase involves visualizing your ideas and conceptualizing the navigation, structure and interaction experience.</p>

                      </div>
                      <div className="flow_ul">
                        <h2>Product design meets UX/UI:</h2>
                        <ul>
                          <li>Demonstrable mockups</li>
                          <li>UX/UI and the user journey</li>
                          <li>Clickable or tappable prototypes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flowChart33_right">
                  <div className="grimta">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999480/grimta_o0ourv.png' alt="grimta" />
                  </div>
                </div>
              </div>
            )
          }


          {/* ==============4th================= */}
          {
            tab === 4 && (
              <div className="flowChart3 mt-28">
                <div className="flowChart33_left">
                  <div className="flowa">
                    <div className="flowChartSec">
                      <div className='poinyuj'>
                        <h3>4.</h3>
                        <p>Development</p>
                      </div>

                    </div>
                    <div className="flowChartSec1">
                      <div className='flowChartSec11 flowsr'>
                        <p>Kushel Digi developers work in sprints, daily standups, planning, and retrospective meetings help us maintain momentum and build trust within the team.</p>

                      </div>
                      <div className="kesa_process">
                        <p>Frameworks</p>
                        <div></div>
                        <p>Development</p>
                        <div></div>
                        <p>Code Review</p>
                        <div></div>
                        <p>QA test</p>
                      </div>
                      <div className='flowChartSec11 flowsr flowsr11'>
                        <p>Ready-made solutions get the heavy lifting done ridiculously fast so that we never have to reinvent the wheel every time—saving your time, money and boosting efficiency.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flowChart33_right">
                  <div className="grimta">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999513/pixelArt_oew1hg.png' alt="grimta" />
                  </div>
                </div>
              </div>
            )
          }



          {/* ===================5th==================== */}
          {
            tab === 5 && (
              <div className="flowChart3 mt-28">
                <div className="flowChart33_left">
                  <div className="flowa">
                    <div className="flowChartSec">
                      <div className='poinyuj'>
                        <h3>5.</h3>
                        <p>Delivery & <br /> Support</p>
                      </div>

                    </div>
                    <div className="flowChartSec1">
                      <div className='flowChartSec11 flowsr flowsr111'>
                        <p>We release your project into a live production environment! But it doesn’t end there. We provide whatever you need to keep your project secure, maintained, and ready to scale at a moment’s notice.</p>
                        
                       <Link href="/contact-us">
                        <button>LET’S TALK</button>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="flowChart33_right">
                  <div className="grimta">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999543/richa_edvgo2.png' alt="grimta" />
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>

      <div className="manbi">
        <div className="manbi_card">
          <div className="manbi_img">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999570/manbiTui_dkujxx.png' alt="manbi" />
          </div>
          <div className="card-textj">
            <h3>Got a preferred workflow? We’ll <br /> adapt to your needs.</h3>
            <p>We’re always flexible to fit your style of working.</p>
          </div>
          <div className="manbi-btn">
            <Link href="/contact-us"><button>LET’S TALK</button></Link>
          </div>
        </div>
      </div>

      <div className="ready_talks ready_talks1">
        <div className="ready_folks">
          <div className="ready_left">
            <div className="rdar_talk">
              <h3>Ready to talk about your</h3>
              <h3>eCommerce project?</h3>
              <div className="fantars">
                <div className="tellUs">
                  <div className="tellUs_right">
                    <h3>1.</h3>
                  </div>
                  <div className="tellUs_left">
                    <span> Share Your Idea
                    </span>
                    <p>Want to start or scale your online store? Tell us about  your vision, and we’ll help you to shape it into a successful eCommerce platform.</p>
                  
                  </div>
                </div>
                <div className="tellUs">
                  <div className="tellUs_right">
                    <h3>2.</h3>
                  </div>
                  <div className="tellUs_left">
                    <span>Get a Custom Plan
                    </span>
                    <p>Our team will analyze your needs and suggest the right features, technology, and strategies to boost sales and engagement.
                    </p>

                  </div>
                </div>
                <div className="tellUs">
                  <div className="tellUs_right">
                    <h3>3.</h3>
                  </div>
                  <div className="tellUs_left">
                    <span>Launch & Scale Your Store
                    </span>
                    <p>Our team will be there for you from development to marketing to help you grow a high-performing online business.</p>
                    <Link href="/contact-us"><button>GET IN TOUCH</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ready_right">
            <div className="ready_side">
              <img src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1724756985/Rectangle_18261_uxrlyd.png"} alt="woman" />
            </div>
          </div>
        </div>
      </div>



      <ContactForm1 notify={notify}/>

      <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423798/whatsapp_yiaqit.png" alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423855/telephone_bcbfsw.png" alt="call-icon" title="call-icon" />
          </button>

        </div>

<Footer/>
    </div>
  )
}

export default HowWork