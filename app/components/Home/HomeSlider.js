"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './homeBan.css'
import Image from "next/image";
import Link from "next/link";
const Slider = () => {

  return (
    <section className="carousel-container">
      <div className="inner-carousel-container">
        <h3 className="carousel-container-heading primary-heading">
          Helping Top Global Brands to Expand, Migrate & Succeed
        </h3>

        <p className="carousel-container-para secondary-heading">
          Kushel Digi has been helping leading global brands scale and optimize their ecommerce success with our expert BigCommerce solutions.

        </p>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">

                <Image
                  width={498}
                  height={523}
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/w_498,h_523,c_limit/v1747983177/file_1747921390-1747921391_eeth9a.webp"
                  alt="2ndamendment Guns ecommerce  website development services portfolio image"
                />

                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                  <div className="left-carousel-btn blue-bg">Military & Tactical Industry</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  2nd amendment Guns
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Development</li>
                      <li>UI/UX design</li>
                      <li>Security Compliance</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">
                  2nd Amendment Guns is known for being a leading provider of high-quality firearms and tactical equipment  serving customers both locally in Brandon, FL and across the nation.usted firearms provider of high-quality gun accessories.
                </p>
                <Link href="/2ndamendmentguns">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* First slider */}
            <div className="carousel-item">
              <div className="left-carousel-item">
                <Image
                  width={498}
                  height={523}
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/w_498,h_523,c_limit/v1747983178/file_1747921375-1747921377_rfowkk.webp"
                  alt="KICK-EEZ ecommerce website development services portfolio image"
                />

                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn">B2B</div>
                  <div className="left-carousel-btn blue-bg">Firearms</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  KICK-EEZ
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol className="list_type">
                      <li>
                        Website Development
                      </li>
                      <li>SEO Optimization</li>
                      <li>UX/UI Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">
                  KICK-EEZ Premium known for Made in America recoil pads and accessories to make your shooting experience more comfortable.
                </p>
                <Link href="/kick-eez">
                  <button
                    className="left-carousel-btn blue-bg right-carousel-inner-btn">

                    View Case Study
                  </button>
                </Link>
              </div>
            </div>



          </SwiperSlide>

          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">

                <Image width={498} height={523} loading="lazy" src={"https://res.cloudinary.com/dqjbzgksw/image/upload/w_498,h_523,c_limit/v1747983171/file_1747921354-1747921359_t6jppi.webp"} alt="Slides365 ecommerce website development services portfolio image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn">D2C</div>
                  <div className="left-carousel-btn blue-bg">E-commerce</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Slides 365
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Website Development</li>
                      <li>Ecommerce Site Design</li>
                      <li>UI/UX Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">

                  Slides365 aimed to serve various needs of professionals by offering subscription-based templates, presentations, design slides, and industry-specific slides.
                </p>
                <Link href="/slides365">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">
                <Image width={498} height={523} loading="lazy" src={"https://res.cloudinary.com/dqjbzgksw/image/upload/w_498,h_523,c_limit/v1747983171/file_1747921258-1747921260_n65kdd.webp"} alt="Black Rhino ecommerce website development services portfolio image" />
                <div className="left-carousel-btn-div">

                  <div className="left-carousel-btn blue-bg">Real Estate</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Black Rhino
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Website </li>
                      <li>Development</li>
                      <li>UI/UX Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">
                  Black Rhino is a minority-owned small business in Lowell, Indiana has been a pioneer of custom Kydex holsters and accessories.
                </p>
                <Link href="/portfolio">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">
                <Image width={498} height={523} loading="lazy" src={"https://res.cloudinary.com/dqjbzgksw/image/upload/w_498,h_523,c_limit/v1747983172/sight_scope_i6pns0.webp"} alt="Sites & scopes ecommerce website development services portfolio image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                  <div className="left-carousel-btn blue-bg">Gunshop</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Sites & Scopes
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Store </li>
                      <li>Development</li>
                      <li>QA & Website Testing</li>
                      <li>UI/UX Design</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">

                  Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals.
                </p>
                <Link href="/sitesandscopes">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">
                <Image width={498} height={523} loading="lazy" src={"https://res.cloudinary.com/dqjbzgksw/image/upload/w_498,h_523,c_limit/v1747983171/file_1747921193-1747921195_qjddam.webp"} alt="Top Brass Tactical ecommerce website development services portfolio image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                  <div className="left-carousel-btn blue-bg">E-commerce</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Top Brass Tactical
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Website</li>
                      <li>Development</li>
                      <li>UI/UX Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">

                  The idea of our webstore started small, but quickly gathered speed after we encountered frequent requests from individuals and companies looking for small quantity, high-quality electromagnetic components.
                </p>
                <Link href="/topbrasstactical">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;