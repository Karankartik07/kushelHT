import React,{useEffect,useState} from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
const ServiceCommon = () => {
    const [perPage, setPerPage] = useState(3);
  useEffect(() => {
      if (window.matchMedia("(max-width: 1350px)").matches) {
          setPerPage(3);
      }
      if (window.matchMedia("(max-width: 750px)").matches) {
          setPerPage(1);
      }
  }, []);
  return (
     <>
            <div className="others_nat_serv dine-1234" id="other-services">
                <h3 className='ot_ser'>Other Services</h3>
                <hr className='ot_line' />
                <div className="nat_card">
                    <Splide
                        className="w-full"
                        aria-label="Our Services"
                        options={{
                            perPage: perPage,
                            perMove: 1,
                            autoplay: true,
                            pauseOnHover: true,
                            type: "loop",
                            interval: 3000,
                            drag: true,
                            gap: 1,
                            breakpoints: {
                                1024: { perPage: 3 },
                                768: { perPage: 2 },
                                480:{ perPage: 1}
                              },
                        }}
                    >
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724914748/nativeSer1.cbab4fca37286881546c_pbzjvd.png" alt="E-commerce Solutions" title='E-commerce Solutions' />
                                </div>
                                <div className="nat_heading">
                                    <h3>E-commerce Solutions</h3>
                                    <p>Teams at fast-growing companies use Superside to get quality graphic design done at scale. </p>
                                   <Link href="/ecommerce-development"><span>Read More</span></Link>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724914747/nativeSer2.a1a157ff9a3b4df1f1bf_gvgzqi.png" alt="UI/UX Design"  title='UI/UX Design'/>
                                </div>
                                <div className="nat_heading">
                                    <h3>UI/UX Design</h3>
                                    <p>redesign, rebuild and redefine user
                                        experiences and craft interactions like no
                                        other with our best-in-class design services.</p>
                                   <Link href="/ui-ux-design"><span>Read More</span></Link>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724914747/nativeSer3.2a73bb3aa0bc26c1e106_tdtnil.png" alt="Mobile App Development" title='Mobile App Development' />
                                </div>
                                <div className="nat_heading">
                                    <h3>Mobile App Development</h3>
                                    <p>We design custom dynamic mobile apps using cutting-edge technologies to help you transform your business.</p>
                                   <Link href="/mobile-application-development"><span>Read More</span></Link>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724914747/pjkn.ad23c6892c44ed733e6f_qyclmb.jpg" alt="Web Development" title='Web Development' />
                                </div>
                                <div className="nat_heading">
                                    <h3>Web Development</h3>
                                    <p>Our web professionals create strong, durable, and bespoke websites that set you apart from the competition.</p>
                                   <Link href="/web-development"><span>Read More</span></Link>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724914747/nativeSer5.18138177fb65e4a7f9ea_rdaczb.png" alt="Graphic Design" title='Graphic Design' />
                                </div>
                                <div className="nat_heading">
                                    <h3>Graphic Design</h3>
                                    <p>Teams at fast-growing companies use Superside to get quality graphic design done at scale.</p>
                                  <Link href="/graphic-design"><span>Read More</span></Link>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724914747/nativeSer6.2d4d3a21f476cb0f2c92_qawkke.png" alt="Digital Marketing" title='Digital Marketing' />
                                </div>
                                <div className="nat_heading">
                                    <h3>Digital Marketing</h3>
                                    <p>Drive sustainable growth, increase customer acquisition, and high website traffic with our online tools.</p>
                                   <Link href="/digital-marketing-agency"><span>Read More</span></Link>
                                </div>
                            </div>
                        </SplideSlide>
                        {/* <SplideSlide>
                            <div className="nat_box">
                                <div className="nat_img">
                                    <img loading="lazy" src={nativeSer7} alt="baty" />
                                </div>
                                <div className="nat_heading">
                                    <h3>AR/VR</h3>
                                    <p>We assist clients to employ AR and VR technologies to captivate audiences and multiple ROI.</p>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </SplideSlide> */}
                    </Splide>

                </div>
            </div>

     </>
  )
}

export default ServiceCommon