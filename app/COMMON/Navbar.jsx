"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiMinus, FiPlus, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [curopen, setcuropen] = useState(null);
    const router = useRouter();
  const data = [
    {
      title: "About Us",
      navigate: "/about",
      subpart: [],
    },
    {
      title: "Services",
      navigate: "/service",
      subpart: [
        {
          title: "Mobile App Development",
          navigate: "/service/mobile-application-development",
          subpart: [
            {
              title: "ios",
              navigate: "/service/ios",
            },
            {
              title: "Anroid",
              navigate: "/service/android",
            },
          ],
        },
        {
          title: "E-commerce development",
          navigate: "/service/ecommerce-development",
          subpart: [
            {
              title: "Bigcommerce",

              navigate: "/service/bigcommerce-development",
            },
            {
              title: "Shopify",
              navigate: "/service/shopify-development",
            },
            {
              title: "Magento",
              navigate: "/service/magento-development",
            },
            {
              title: "WooCommerce",
              navigate: "/service/woocommerce",
            },
          ],
        },
        {
          title: "website development",
          navigate: "/service/web-development",
          subpart: [
            {
              title: "PHP",
              navigate: "/service/php",
            },
            {
              title: "React.Js",
              navigate: "/service/react-js",
            },
            {
              title: "HTML5",
              navigate: "/service/html5",
            },
            {
              title: "Node.Js",
              navigate: "/service/node-js",
            },
            {
              title: "Wordpress",
              navigate: "/service/wordpress",
            },
            {
              title: "Next.Js",
              navigate: "/service/next-js",
            },
          ],
        },
        {
          subpart: [
            {
              title: "React Native",
              navigate: "/service/react-native",
            },
            {
              title: "Flutter",
              navigate: "/service/flutter",
            },
            {
              title: "Kotlin",
              navigate: "/service/kotlin",
            },
          ],
        },
        {
          title: "Headless commerce",
          navigate: "/service/headless-commerce",
          subpart: [
            {
              title: "Headless shopify",
              navigate: "/service/headless-shopify",
            },
            {
              title: "Headless bigcommerce",
              navigate: "/service/headless-bigcommerce",
            },
          ],
        },
        {
          title: "Graphic design",
          navigate: "/service/graphic-design",
        },
        {
          title: "Digital marketing",
          navigate: "/service/digital-marketing-agency",
          subpart: [
            {
              title: "SEO",
              navigate: "/service/seo",
            },
            {
              title: "SMM",
              navigate: "/service/smm",
            },
            {
              title: "PPC",
              navigate: "/service/ppc",
            },
          ],
        },
        {
          title: "UI & UX Designing",
          navigate: "/service/ui-ux-design",
        },
        {
          title: "custom software development",
          navigate: "/service/custom-software-development",
        },
      ],
    },
    {
      title: "Solutions",
      navigate: "/solutions",
    },
    {
      title: "Industries",
      navigate: "/industries",
    },
    {
      title: "Portfolio",
      navigate: "/portfolio",
    },
    {
      title: "Blogs",
      navigate: "/blog",
    },
    {
      title: "Location",
      // navigate: "/hire",
      subpart: [
        {
          title: "India",
          // navigate: "/",
          subpart: [
            {
              title: "India",
              navigate: "/india",
            },
            {
              title: "Delhi",
              navigate: "/delhi",
            },
            {
              title: "Noida",
              navigate: "/noida",
            },
            {
              title: "Gurgaon",
              navigate: "/gurgaon",
            },
            {
              title: "Chennai",
              navigate: "/chennai",
            },
            {
              title: "Mumbai",
              navigate: "/mumbai",
            },
            {
              title: "Pune",
              navigate: "/pune",
            },
          ],
        },
        {
          title: "Europe",
          // navigate: "/",
          subpart: [
            { title: "Belgium", navigate: "/ecommerce-development-in-belgium" },
            {
              title: "Bulgaria",
              navigate: "/ecommerce-development-in-bulgaria",
            },
            {
              title: "Denmark",
              navigate: "/ecommerce-development-in-denmark",
            },
            {
              title: "Finland",
              navigate: "/ecommerce-development-in-finland",
            },
            {
              title: "Ireland",
              navigate: "/ecommerce-development-in-ireland",
            },
          ],
        },

        {
          title: "UAE",
          // navigate: "/",
          subpart: [
            {
              title: "Dubai",
              navigate: "/dubai",
            },
            {
              title: "Abu dhabi",
              navigate: "/abu-dhabi",
            },
          ],
        },
        {
          title: "United Kingdom",
          // navigate: "/",
          subpart: [
            {
              title: "London",
              navigate: "/ecommerce-development-in-london",
            },
          ],
        },
      ],
    },
    {
      title: "Hire",
      navigate: "/hire",
      subpart: [
        {
          title: "Hire PHP Developer",
          navigate: "/hire/php-developer",
        },
        {
          title: "Hire Laravel Web Developer",
          navigate: "/hire/laravel-developer",
        },
        {
          title: "Hire Node Js Developer",
          navigate: "/hire/node-js-developer",
        },
        {
          title: "Hire React Js Developer",
          navigate: "/hire/react-js-developer",
        },
        {
          title: "Hire Wordpress Developer",
          navigate: "/hire/wordpress-developer",
        },
        {
          title: "Hire Android Developer",
          navigate: "/hire/android-developer",
        },
        {
          title: "Hire IOS Developer",
          navigate: "/hire/ios-developer",
        },
        {
          title: "Hire Flutter Developer",
          navigate: "/hire/flutter-developer",
        },
        {
          title: "Hire React Native Developer",
          navigate: "/hire/react-native-developer",
        },
      ],
    },
    {
      title: "Contact Us",
      navigate: "/contact-us",
    },
  ];
  return (
    <header className="w-full fixed z-[9] top-0  bg-white ">
      <div className=" max-w-[1720px] z-50 flex items-center justify-between gap-[15px] mx-auto px-[20px]  lg:px-[60px] py-[20px] relative top-[3px] w-full">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
            alt="Kushel Digi Logo"
            width={180}
            height={56}
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="hidden lg:flex items-center h-[60px] gap-2 [@media(min-width:1118px)]:gap-5 [@media(min-width:1187px)]:gap-7 font-semibold text-gray-900">
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>

            {/* Services */}
            <li className="group relative">
              <Link href={"/service"} className="hover:text-blue-600 py-4">
                Services
              </Link>
              <div className="absolute left-[-480px] top-[34px] hidden w-[880px] z-50 border-t border-[#d0cece] rounded-lg bg-white p-9 shadow-2xl group-hover:block">
                <div className="grid grid-cols-2 gap-[300px]">
                  {/* Left Column */}
                  <div className="space-y-6 w-[430px]">
                    {/* Mobile App Development */}
                    <div className="mx-[12px] my-[20px]">
                      <Link href="/service/mobile-application-development">
                        <h4 className="font-medium text-sm">
                          Mobile App Development
                        </h4>
                      </Link>
                      <div className="flex flex-wrap font-[400] gap-4 my-[12px] w-[500px] text-[#818181] text-sm">
                        <Link href="/service/ios">
                          {" "}
                          <span>iOS</span>
                        </Link>
                       
                       
                          <span>|</span>
                       
                        <Link href="/service/android">
                          {" "}
                          <span>Android</span>
                        </Link>
                      </div>
                    </div>

                    {/* E-Commerce Development */}
                    <div className="mx-[12px] my-[20px]">
                      <Link href="/service/mobile-application-development">
                        <h4 className="font-medium text-sm">
                          E-Commerce Development
                        </h4>
                      </Link>

                      <div className="flex flex-wrap font-[400] w-[500px] gap-3 my-[12px] text-[#818181] text-sm">
                        <Link href="/service/bigcommerce">
                          <span>BigCommerce</span>
                        </Link>
                        <span>|</span>
                        <Link href="/service/shopify">
                          <span>Shopify</span>
                        </Link>
                        <span>|</span>
                        <Link href="/service/magento">
                          <span>Magento</span>
                        </Link>
                        <span>|</span>
                        <Link href="/service/woocommerce">
                          <span>WooCommerce</span>
                        </Link>
                      </div>
                    </div>

                    {/* Website Development */}
                    <div className="mx-[12px] my-[20px]">
                      <Link href="/service/mobile-application-development">
                        <h4 className="font-medium text-sm">
                          Website Development
                        </h4>
                      </Link>

                      <div className="flex flex-wrap gap-3 font-[400] w-[500px] my-[15px] text-[#818181] text-sm">
                        <Link href="/service/php">PHP</Link>
                        <span>|</span>
                        <Link href="/service/react-js">React.Js</Link>
                        <span>|</span>
                        <Link href="/service/html5">HTML5</Link>
                        <span>|</span>
                        <Link href="/service/node-js">Node.Js</Link>
                        <span>|</span>
                        <Link href="/service/wordpress">WordPress</Link>
                        <span>|</span>
                        <Link href="/service/next-js">Next.Js</Link>
                        <span>|</span>
                        <Link href="/service/react-native">React Native</Link>
                        <span>|</span>
                        <Link href="/service/flutter">Flutter</Link>
                        <span>|</span>
                        <Link href="/service/kotlin">Kotlin</Link>
                      </div>
                    </div>

                    {/* Headless Commerce */}
                    <div className="mx-[12px] my-[20px]">
                      <h4 className="font-medium text-sm">Headless Commerce</h4>
                      <div className="flex flex-wrap font-[400] w-[500px] gap-4 my-[12px] text-[#818181] text-sm">
                     <Link href="/service/headless-shopify"><span>Headless Shopify</span></Link>
<span>|</span>
<Link href="/service/headless-bigcommerce"><span>Headless BigCommerce</span></Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6 w-[400px]">
                    {/* Graphic Design */}
                    <div className="mx-[12px] my-[20px]">
                     <Link href="/service/graphic-design">
  <h4 className="font-medium text-sm">Graphic Design</h4>
</Link>
                    </div>

                    {/* Digital Marketing */}
                    <div className="mx-[12px] my-[20px]">
                     <Link href="/service/digital-marketing">
  <h4 className="font-medium text-sm">Digital Marketing</h4>
</Link>

                      <div className="flex flex-wrap font-[400] gap-3 my-[15px] text-[#818181] text-sm">
                       <Link href="/service/seo"><span>SEO</span></Link>
<span>|</span>
<Link href="/service/smm"><span>SMM</span></Link>
<span>|</span>
<Link href="/service/ppc"><span>PPC</span></Link>
                      </div>
                    </div>

                    {/* UI & UX Designing */}
                    <div className="mx-[12px] my-[20px]">
                     <Link href="/service/ui-ux-designing">
  <h4 className="font-medium text-sm">UI & UX Designing</h4>
</Link>

                    </div>

                    {/* Custom Software Development */}
                    <div className="mx-[12px] my-[20px]">
                     <Link href="/service/custom-software-development">
  <h4 className="font-medium text-sm">Custom Software Development</h4>
</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/solutions" className="hover:text-blue-600">
                Solutions
              </Link>
            </li>

            <li>
              <Link href="/industries" className="hover:text-blue-600">
                Industries
              </Link>
            </li>

            <li>
              <Link href="/portfolio" className="hover:text-blue-600">
                Portfolio
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-blue-600">
                Blogs
              </Link>
            </li>

            {/* Location */}
            <li className="group relative">
              <button className="hover:text-blue-600 py-4">Location</button>
              <div className="absolute left-[-170px] top-[50px] z-50 hidden w-[400px] rounded-lg border border-[#d0cece] bg-white p-6 shadow-lg group-hover:block">
                <div className="space-y-4">
                  {/* India */}
                  <div>
                    <h4 className="font-bold flex items-center gap-2">
                      <div className="flex gap-2">
                        <Image
                          height={24}
                          width={24}
                          className="w-6"
                          src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1753193678/world_fzxwtv.png"
                          alt=""
                        />
                        <span
                         
                          className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                        >
                          {" "}
                          India
                        </span>
                      </div>
                    </h4>
                    <p className="text-[#818181] text-md m-[14px] flex flex-wrap gap-3 font-[400]">
                      <Link
                        href="/india"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        India
                      </Link>{" "}
                      |
                      <Link
                        href="/delhi"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Delhi
                      </Link>{" "}
                      |
                      <Link
                        href="/noida"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Noida
                      </Link>{" "}
                      |
                      <Link
                        href="/gurgaon"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Gurgaon
                      </Link>{" "}
                      |
                      <Link
                        href="/chennai"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Chennai
                      </Link>{" "}
                      |
                      <Link
                        href="/mumbai"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Mumbai
                      </Link>{" "}
                      |
                      <Link
                        href="/pune"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Pune
                      </Link>
                    </p>
                  </div>

                  {/* Europe */}
                  <div>
                    <h4 className="font-bold flex items-center gap-2">
                      <div className="flex gap-2">
                        <Image
                          height={24}
                          width={24}
                          className="w-6"
                          src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1753094658/european-union_coalcr.png"
                          alt=""
                        />
                        <span
                          
                          className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                        >
                          {" "}
                          Europe
                        </span>
                      </div>
                    </h4>
                    <p className="text-[#818181] text-md m-[14px] flex flex-wrap gap-2 font-[400]">
                      <Link
                        href="/ecommerce-development-in-belgium"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Belgium
                      </Link>{" "}
                      |
                      <Link
                        href="/ecommerce-development-in-denmark"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Denmark
                      </Link>{" "}
                      |
                      <Link
                        href="/ecommerce-development-in-finland"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Finland
                      </Link>{" "}
                      |
                      <Link
                        href="/ecommerce-development-in-ireland"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Ireland
                      </Link>{" "}
                      |
                      <Link
                        href="/ecommerce-development-in-bulgaria"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Bulgaria
                      </Link>
                    </p>
                  </div>

                  {/* UAE */}
                  <div>
                    <h4 className="font-bold flex items-center gap-2">
                      <Image
                        width={24}
                        height={24}
                        className="w-6"
                        src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1755607181/united-arab-emirates_yvsofb.png"
                        alt="UAE flag"
                      />
                      <span
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        UAE
                      </span>
                    </h4>

                    <p className="text-[#818181] text-md m-[14px] flex flex-wrap gap-2 font-[400]">
                      <Link
                        href="/dubai"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Dubai
                      </Link>
                      <span>|</span>
                      <Link
                        href="/abu-dhabi"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Abu Dhabi
                      </Link>
                    </p>
                  </div>

                  {/* USA */}
                  <div>
                    <h4 className="font-bold flex items-center gap-2">
                      <div className="flex gap-2">
                        <Image
                          height={24}
                          width={24}
                          className="w-6"
                          src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1757417157/united-states-of-america_lmrh4o.png"
                          alt=""
                        />
                        <span
                          
                          className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                        >
                          {" "}
                          USA
                        </span>
                      </div>
                    </h4>
                    <p className="text-[#818181] text-md m-[14px] flex flex-wrap gap-2 font-[400]">
                      <Link
                        href="/utah"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Utah
                      </Link>{" "}
                      |
                      <Link
                        href="/raleigh"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Raleigh
                      </Link>{" "}
                      |
                      <Link
                        href="/north-carolina"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        North Carolina
                      </Link>{" "}
                      |
                      <Link
                        href="/salt-lake-city"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        Salt Lake City
                      </Link>
                    </p>
                  </div>

                  {/* United Kingdom */}
                  <div>
                    <h4 className="font-bold flex items-center gap-2">
                      <div className="flex gap-2">
                        <Image
                          height={24}
                          width={24}
                          className="w-6"
                          src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1753093834/united-kingdom_uflwsf.png"
                          alt=""
                        />
                        <span
                         
                          className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                        >
                          {" "}
                          UK
                        </span>
                      </div>
                    </h4>
                    <p className="text-[#818181] text-md m-[14px] flex flex-wrap gap-2 font-[400]">
                      <Link
                        href="/ecommerce-development-in-london"
                        className="hover:text-[#1163FF] hover:underline transition-colors duration-300"
                      >
                        London
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </li>

            {/* Hire */}
            <li className="group relative">
              <button className="hover:text-blue-600 py-4">Hire</button>
              <div className="absolute left-[-400px] top-[60px] z-50 hidden w-[600px] rounded-lg border border-[#d0cece] bg-white p-6 shadow-lg group-hover:block">
                <div className="grid grid-cols-2 gap-4 text-md font-[400]">
                 <Link href="/hire/php-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire PHP Developer
  </p>
</Link>

<Link href="/hire/android-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire Android Developer
  </p>
</Link>

<Link href="/hire/laravel-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire Laravel Web Developer
  </p>
</Link>

<Link href="/hire/ios-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire iOS Developer
  </p>
</Link>

<Link href="/hire/node-js-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire Node Js Developer
  </p>
</Link>

<Link href="/hire/flutter-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire Flutter Developer
  </p>
</Link>

<Link href="/hire/react-js-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire React Js Developer
  </p>
</Link>

<Link href="/hire/react-native-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire React Native Developer
  </p>
</Link>

<Link href="/hire/wordpress-developer">
  <p className="my-1 hover:text-[#1163FF] transition-colors duration-300">
    Hire WordPress Developer
  </p>
</Link>

                </div>
              </div>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="rounded-full border border-blue-900 px-5 py-2 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" lg:hidden">
          {/* Hamburger Toggle */}
          <button
            className="text-2xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute overflow-y-auto top-[90px] left-0 w-full z-50 bg-white h-[100vh] shadow-lg">
              <div className="p-4 space-y-4">
                {data?.map((item, index) => (
                  <div key={index}>
                    {/* Top Level Item */}
                    <div className="flex items-center justify-between border-b border-[#d0cece]  pb-[12px] px-[15px]">
                      <p
                        onClick={() => {
                          router.push(item.navigate);
                          if (!item?.subpart?.length) {
                            setMenuOpen(false);
                          }
                        }}
                        className={`cursor-pointer font-medium ${
                          curopen === index ? "text-blue-600" : "text-gray-800"
                        }`}
                      >
                        {item?.title}
                      </p>

                      {/* Expand/Collapse Icons */}
                      {item?.subpart?.length > 0 &&
                        (curopen === index ? (
                          <FiMinus
                            className="cursor-pointer"
                            onClick={() => setcuropen(null)}
                          />
                        ) : (
                          <FiPlus
                            className="cursor-pointer"
                            onClick={() => setcuropen(index)}
                          />
                        ))}
                    </div>

                    {/* Mid Level Menu */}
                    {curopen === index && (
                      <div className="pl-3.5 space-y-2">
                        {item?.subpart?.map((item2, index2) => (
                          <div key={index2}>
                            <h4
                              onClick={() => {
                                router.push(item2.navigate);
                                setMenuOpen(false);
                              }}
                              className="text-gray-700 cursor-pointer border-t border-[#d0cece] pt-[12px] text-md  font-medium"
                            >
                              {item2?.title}
                            </h4>

                            {/* Bottom Level Menu */}
                            {item2?.subpart?.length > 0 && (
                              <div className=" my-2 space-y-1 flex flex-wrap gap-4 text-sm text-[#868686]">
                                {item2?.subpart?.map((item3, index3) => (
                                  <p
                                    key={index3}
                                    onClick={() => {
                                      router.push(item3.navigate);
                                      setMenuOpen(false);
                                    }}
                                    className="cursor-pointer hover:underline"
                                  >
                                    {item3?.title} |
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
