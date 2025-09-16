"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (section) => {
    if (isMobile) {
      setOpen(open === section ? null : section);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-white text-black"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dd9tagtiw/image/upload/f_auto,q_auto/footerBgImage_qjv7en.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Logo + tagline */}
          <div>
            <Image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
              alt="Kushel Digi Solutions official logo"
              width={170}
              height={56}
              className="mb-4"
            />
            <p className="text-base font-medium leading-relaxed">
              Revolutionizing Your Business <br /> Through Technology.
            </p>
          </div>

          {/* Services */}
          <div>
            <button
              onClick={() => toggle("services")}
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none text-lg font-semibold mb-4 lg:mb-2"
            >
              Services
              {isMobile && <span>{open === "services" ? "−" : "+"}</span>}
            </button>
            <ul
              className={`space-y-2 text-sm overflow-hidden transition-all duration-300 ${
                isMobile
                  ? open === "services"
                    ? "max-h-96"
                    : "max-h-0"
                  : "max-h-none"
              }`}
            >
              {[
                ["Mobile App Development", "/mobile-application-development"],
                ["E-commerce Development", "/ecommerce-development"],
                ["Website Development", "/web-development"],
                ["Digital Marketing", "/digital-marketing-agency"],
                ["UI/UX Design", "/ui-ux-design"],
                ["Graphic Design", "/graphic-design"],
                ["Staff Augmentation", "/staff-augmentation"],
                ["Multi-Level Marketing", "/multi-level-marketing"],
                ["Custom Software Development", "/custom-software-development"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="hover:text-blue-400 transition">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <button
              onClick={() => toggle("company")}
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none text-lg font-semibold mb-4 lg:mb-2"
            >
              Company
              {isMobile && <span>{open === "company" ? "−" : "+"}</span>}
            </button>
            <ul
              className={`space-y-2 text-sm overflow-hidden transition-all duration-300 ${
                isMobile
                  ? open === "company"
                    ? "max-h-96"
                    : "max-h-0"
                  : "max-h-none"
              }`}
            >
              {[
                ["About Us", "/about"],
                ["Hire", "/hire"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms&conditions"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="hover:text-blue-400 transition">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <button
              onClick={() => toggle("contact")}
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none text-lg font-semibold mb-4 lg:mb-2"
            >
              Contact Us
              {isMobile && <span>{open === "contact" ? "−" : "+"}</span>}
            </button>
            <div
              className={`space-y-3 text-sm overflow-hidden transition-all duration-300 ${
                isMobile
                  ? open === "contact"
                    ? "max-h-96"
                    : "max-h-0"
                  : "max-h-none"
              }`}
            >
              <div>
                <p className="font-medium">Sales:</p>
                <a
                  href="mailto:info@kusheldigi.com"
                  className="block font-semibold hover:text-blue-400"
                >
                  info@kusheldigi.com
                </a>
              </div>
              {/* <div>
                <p className="font-medium">Mobile:</p>
                <a
                  href="tel:+919045301702"
                  className="block font-semibold hover:text-blue-400"
                >
                  +91 9045301702
                </a>
                <a
                  href="tel:+1-585-566-2070"
                  className="block font-semibold hover:text-blue-400"
                >
                  +1-585-566-2070
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Address + Map */}
        {/* <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-2">Address</h5>
            <p className="text-sm leading-relaxed">
              First Floor, D242, F-32B, Sector 63 Rd, Noida, 201301 <br />
              Uttar Pradesh
            </p>
          </div>
          <div className="h-48 w-full">
            <iframe
              title="Kushel Digi Solutions Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3954123429044!2d77.3860107742401!3d28.617908984746908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions%20-%20Web%20Design%20Company%20Noida%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1681368789327!5m2!1sen!2sin"
              className="w-full h-full rounded-md border"
              loading="lazy"
            ></iframe>
          </div>
        </div> */}

        {/* Certifications */}
        <div className="mt-12 flex flex-wrap lg:justify-between justify-center items-center gap-8">
          {[
            "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276974/b6_pevpva.webp",
            "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276892/b4_el1k1k.webp",
            "https://res.cloudinary.com/dqjbzgksw/image/upload/v1748514234/B-2_io9vgp.webp",
            "https://res.cloudinary.com/dqjbzgksw/image/upload/v1748519991/file_1748519923-1748519924_easb6z.webp",
            "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276865/b2_cxuq7l.webp",
            "https://res.cloudinary.com/dal5dlztv/image/upload/v1748276849/b1_szuidn.webp",
          ].map((src, i) => (
            <Image key={i} width={112} height={112} src={src} alt={`Certification ${i + 1}`} className="w-28 h-auto" />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 relative z-10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/kusheldigisolutions/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
              width={28}
              height={28}
                src="https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741074958/linkedin_logo-01_gvkq3i_ccm6sd.png"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </a>
            <a
              href="https://www.instagram.com/kusheldigi/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
              width={28}
              height={28}
                src="https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075336/instagram_logo-01_dzqg3b_xzp4ys.png"
                alt="Instagram"
                className="w-7 h-7"
              />
            </a>
            <a
              href="https://www.facebook.com/kusheldigisolutions/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075570/facebook_logo-01_b88kjo_mhhfn3.png"
                alt="Facebook"
                className="w-7 h-7"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://twitter.com/KushelDigisoln"
              target="_blank"
              rel="noreferrer"
            >
              <Image
              width={28}
              height={28}
                src="https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075813/twitter_logo-01_xh3vqk_ksousv.png"
                alt="Twitter"
                className="w-7 h-7"
              />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full flex items-center gap-1 hover:bg-blue-700 transition"
          >
            Back to top
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M11.707 5.774L6 0.067 0.293 5.774 1.707 7.188 6 2.895l4.293 4.293L11.707 5.774Z"
                fill="white"
              />
            </svg>
          </button>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            © 2025 Kusheldigi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
