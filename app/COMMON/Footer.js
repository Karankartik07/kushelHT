"use client";
import React, { useState, memo } from "react";
import Link from "next/link";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const partnerLogos = [
  {
    href: "https://www.designrush.com/agency/profile/kushel-digi-solutions",
    src: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276974/b6_pevpva.webp",
    srcSet:
      "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276974/b6_pevpva.webp 1x, https://res.cloudinary.com/dal5dlztv/image/upload/v1748276974/b6_pevpva.webp 2x",
    alt: "Designrush ecommerce listing platform",
  },
  {
    href: "https://clutch.co/profile/kushel-digi-solutions",
    src: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276892/b4_el1k1k.webp",
    srcSet:
      "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276892/b4_el1k1k.webp 1x, https://res.cloudinary.com/dal5dlztv/image/upload/v1748276892/b4_el1k1k.webp 2x",
    alt: "Clutch ecommerce listing platform",
  },
  {
    href: "https://www.goodfirms.co/company/kushel-digi-solutions-1",
    src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1748514234/B-2_io9vgp.webp",
    srcSet:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1748514234/B-2_io9vgp.webp 1x, https://res.cloudinary.com/dqjbzgksw/image/upload/v1748514234/B-2_io9vgp.webp 2x",
    alt: "goodfirms ecommerce listing platform",
  },
  {
    href: "#",
    src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1748519991/file_1748519923-1748519924_easb6z.webp",
    srcSet:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1748519991/file_1748519923-1748519924_easb6z.webp 1x, https://res.cloudinary.com/dqjbzgksw/image/upload/v1748519991/file_1748519923-1748519924_easb6z.webp 2x",
    alt: "Cluth ecommerce listing platform",
  },
  {
    href: "https://partners.bigcommerce.com/directory/partner/1983347/kushel-digi-solutions",
    src: "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276865/b2_cxuq7l.webp",
    srcSet:
      "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276865/b2_cxuq7l.webp 1x, https://res.cloudinary.com/dal5dlztv/image/upload/v1748276865/b2_cxuq7l.webp 2x",
    alt: "BigCommerce development services official logo ",
  },
];

const socials = [
  {
    href: "https://www.linkedin.com/company/kusheldigisolutions/",
    src: "https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741074958/linkedin_logo-01_gvkq3i_ccm6sd.png",
    alt: "LinkedIn social media icon for ecommerce website development by Kushel Digi Solutions",
  },
  {
    href: "https://www.instagram.com/kusheldigi/",
    src: "https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075336/instagram_logo-01_dzqg3b_xzp4ys.png",
    alt: "Instagram social media icon for ecommerce   website development by Kushel Digi Solutions",
  },
  {
    href: "https://www.facebook.com/kusheldigisolutions/",
    src: "https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075570/facebook_logo-01_b88kjo_mhhfn3.png",
    alt: "Facebook social media icon for ecommerce   website development by Kushel Digi Solutions",
  },
  {
    href: "https://twitter.com/KushelDigisoln",
    src: "https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075813/twitter_logo-01_xh3vqk_ksousv.png",
    alt: "Twitter social media icon for ecommerce   website development by Kushel Digi Solutions",
  },
];

// Desktop and mobile link sets kept EXACT (including the mobile MLM path)
const servicesDesktop = [
  { label: "Mobile App Development", href: "/service/mobile-application-development" },
  { label: "E-commerce Development", href: "/service/ecommerce-development" },
  { label: "Website Development", href: "/service/web-development" },
  { label: "Digital Marketing", href: "/service/digital-marketing-agency" },
  { label: "UI/UX Design", href: "/service/ui-ux-design" },
  { label: "Graphic Design", href: "/service/graphic-design" },
  { label: "Staff Augmentation", href: "/staff-augmentation" },
  { label: "Multi-Level Marketing", href: "/service/multi-level-marketing" },
  { label: "Custom Software Development", href: "/service/custom-software-development" },
];

const servicesMobile = [
  { label: "Mobile App Development", href: "/service/mobile-application-development" },
  { label: "E-commerce Development", href: "/service/ecommerce-development" },
  { label: "Website Development", href: "/service/web-development" },
  { label: "Digital Marketing", href: "/service/digital-marketing-agency" },
  { label: "UI/UX Design", href: "/service/ui-ux-design" },
  { label: "Graphic Design", href: "/service/graphic-design" },
  { label: "Staff Augmentation", href: "/staff-augmentation" },
  // mobile path preserved as in your original:
  { label: "Multi-Level Marketing", href: "/multi-level-marketing" },
  { label: "Custom Software Development", href: "/service/custom-software-development" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Hire", href: "/hire" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const Footer = () => {
  const [showServices, setShowServices] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="foot">
        <div className="footer-Bg-img">
          <div className="foot1 justify-between footer-first-main">
            <div className="foot11 foot111">
              <div className="foot10 footsa">
                <img
                  loading="lazy"
                  width="170"
                  height="56"
                  className="kdssslogo"
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
                  srcSet="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png 1x, https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png 2x, https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png 3x"
                  alt="Kushel Digi Solutions official logo for ecommerce  development agency India"
                />

                <h4 className="text-start  exttextStart mt-[10px] ">
                  Revolutionizing your business <br />
                  through Technology.
                </h4>
               
              </div>
            </div>

            {/* ===== DESKTOP LISTS (unchanged behavior) ===== */}
            <div className="footer-first-xyz">
              <div className="footer-sec-xyzA">
                <div className="foot11 foot12">
                  <h5>Services</h5>
                  <div className="foot10 flex flex-col">
                    {servicesDesktop.map((l) => (
                      <Link key={l.href} href={l.href} className="footLink">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="foot11 foot13">
                  <h5>Company</h5>
                  <div className="foot10 reji flex flex-col">
                    {companyLinks.map((l) => (
                      <Link key={l.href} href={l.href} className="footLink">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="foot11 foot14">
                  <h5>Contact Us</h5>
                  <div className="foot10">
                    {/* trimmed wrappers but same UI */}
                    <p className="flex foot140 items-center mt-5 marginnn">Sales:</p>

                    <a
                      href="mailto:info@kusheldigi.com"
                      className="flex foot140 items-center marginnn"
                    >
                      <h5>info@kusheldigi.com</h5>
                    </a>

                    {/* <p className="flex foot140 items-center marginnn">Mobile:</p>

                    <a href="tel:+91 9045301702 " className="flex foot140 items-center">
                      <h5>+91 9045301702</h5>
                    </a>
                    <a href="tel:+1-585-566-2070 " className="flex foot140 items-center">
                      <h5>+1-585-566-2070</h5>
                    </a> */}
                  </div>
                </div>
              </div>

              {/* ===== MOBILE COLLAPSIBLES (unchanged behavior & click target) ===== */}
              <div className="footer-sec-xyz">
                {/* Services Section */}
                <div
                  className="footer-services-header mobile-only2  mobile-only"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 style={{ margin: 0 }}>Services</h5>
                  <span
                    className="footer-services-toggle"
                    style={{
                      display: "inline-block",
                      marginLeft: 8,
                      cursor: "pointer",
                    }}
                    onClick={() => setShowServices((s) => !s)}
                  >
                    {showServices ? (
                      <RiArrowDropUpLine size={25} />
                    ) : (
                      <RiArrowDropDownLine size={25} />
                    )}
                  </span>
                </div>

                <div
                  className={`foot10 flex flex-col mobile-only2 footer-services-dropdown mobile-only ${
                    showServices ? "show" : ""
                  }`}
                  style={{ display: showServices ? "flex" : "none" }}
                >
                  {servicesMobile.map((l) => (
                    <Link key={l.href} href={l.href} className="footLink">
                      {l.label}
                    </Link>
                  ))}
                </div>

                {/* Company Section */}
                <div
                  className="footer-services-header mobile-only2 mobile-only"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <h5 style={{ margin: 0 }}>Company</h5>
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 8,
                      cursor: "pointer",
                    }}
                    onClick={() => setShowCompany((s) => !s)}
                  >
                    {showCompany ? (
                      <RiArrowDropUpLine size={25} />
                    ) : (
                      <RiArrowDropDownLine size={25} />
                    )}
                  </span>
                </div>

                <div
                  className={`foot10 flex flex-col mobile-only ${
                    showCompany ? "show" : ""
                  }`}
                  style={{ display: showCompany ? "flex" : "none" }}
                >
                  {companyLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="footLink">
                      {l.label}
                    </Link>
                  ))}
                </div>

                {/* Contact Section */}
                <div
                  className="footer-services-header mobile-only2 mobile-only"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <h5 style={{ margin: 0 }}>Contact Us</h5>
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 8,
                      cursor: "pointer",
                    }}
                    onClick={() => setShowContact((s) => !s)}
                  >
                    {showContact ? (
                      <RiArrowDropUpLine size={25} />
                    ) : (
                      <RiArrowDropDownLine size={25} />
                    )}
                  </span>
                </div>

                <div
                  className={`foot10 flex flex-col mobile-only ${
                    showContact ? "show" : ""
                  }`}
                  style={{ display: showContact ? "flex" : "none" }}
                >
                  <p className="flex foot140 items-center mt-5 marginnn">Sales:</p>

                  <a
                    href="mailto:info@kusheldigi.com"
                    className="flex foot140 items-center marginnn"
                  >
                    <h5>info@kusheldigi.com</h5>
                  </a>

                  {/* <p className="flex foot140 items-center marginnn">Mobile:</p>

                  <a href="tel:+91 9045301702 " className="flex foot140 items-center">
                    <h5>+91 9045301702</h5>
                  </a>
                  <a href="tel:+1-585-566-2070 " className="flex foot140 items-center">
                    <h5>+1-585-566-2070</h5>
                  </a> */}
                </div>
              </div>

              {/* Address & Map (unchanged UI; iframe lazily loaded for perf) */}
              <div className="foot14 footer144">
                <div className="footer144-fle">
                  {/* <div className="footer144-flex">
                    <h5> Address</h5>
                    <div className="foot10">
                      <div className="flex foot140 items-center mt-2 foot-para">
                        <p>
                          First Floor, D242, F-32B, Sector 63 Rd, Noida, 201301
                          <br /> Uttar Pradesh
                        </p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="footer-map">
                    <iframe
                      title="myframe"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3954123429044!2d77.3860107742401!3d28.617908984746908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions%20-%20Web%20Design%20Company%20Noida%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1681368789327!5m2!1sen!2sin"
                    ></iframe>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Partner badges (same layout; rendered via map) */}
          <div className="footer2Image1">
            {partnerLogos.map((logo, i) => (
              <div className="footer2Image" key={i}>
                <Link href={logo.href} target="blank" rel="noopener noreferrer">
                  <img
                    width="120"
                    height="122"
                    loading="lazy"
                    decoding="async"
                    src={logo.src}
                    srcSet={logo.srcSet}
                    alt={logo.alt}
                  />
                </Link>
              </div>
            ))}

            <div className="footer2Imagelast">
              <img
                width="137"
                height="140"
                loading="lazy"
                decoding="async"
                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276849/b1_szuidn.webp"
                srcSet="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276849/b1_szuidn.webp 1x, https://res.cloudinary.com/dal5dlztv/image/upload/v1748276849/b1_szuidn.webp 2x"
                alt="8+ years of Experience in ecommerce website development"
              />
            </div>
          </div>
        </div>

        <div className="foot2">
          <div className="foot_bottom">
            <div className="bottom2">
              <div className="foot11 foot15">
                <div className="foot10">
                  <div className="foot151 flex items-center">
                    {socials.map((s, i) => (
                      <a key={i} target="_blank" href={s.href} rel="noopener">
                        <img
                          loading="lazy"
                          width="35"
                          height="35"
                          style={{ width: "35px", height: "35px", display: "block" }}
                          src={s.src}
                          alt={s.alt}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-btn">
              <button type="button" onClick={scrollToTop}>
                Back to top
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.77399L5.99997 0.0669887L0.292969 5.77399L1.70697 7.18799L5.99997 2.89499L10.293 7.18799L11.707 5.77399Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            <div className="bottom1">
              <div className="flex items-center footer_icon"></div>
              <p>
                {" "}
                <span>©</span> 2025 Kusheldigi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
