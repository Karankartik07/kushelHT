"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { useRouter } from "next/navigation";

function BigSection5() {

  const splideRef = useRef(null);
  const  router = useRouter();

  return (
    <div className="bgs5wrap">
      <div className="big5conta">

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            focus: "center",
            gap: "40px",
            pagination: false,
          }}
          className="branchswipe3"
          ref={splideRef} 
        >

      
          <SplideSlide>
            <div className="singlsesc5bg">

              {/* left side */}
              <div className="bg5left2">
                <span className="casespan">CASE STUDY 01</span>

                <div className="bigcomtags">
                  <p>B2B</p>
                  <p>Military & tactical industry</p>
                </div>

                <h5 className="lefetbtgh5">Ballistic Dummy Lab</h5>

                <p className="whwedo">
                  <span> What We Did:</span> Magento to BigCommerce Migration, Data Migration, BigCommerce Store Design, Custom Theme Development, SEO, Integration.
                </p>

                <div className="whatwdowraps">
                  <label>
                    <p>INCREASED CONVERSIONS</p>
                    <span>+85%</span>
                  </label>
                  <label>
                    <p>INCREASED REVENUE</p>
                    <span>+58%</span>
                  </label>
                  <label>
                    <p>INCREASED AOV</p>
                    <span>+6%</span>
                  </label>
                </div>
              </div>

              {/* right side */}
              <div className="bg5rights2">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730449431/Background_Image_lqebet.jpg" className="blackscrebg" alt="kushel" />
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730449434/Group_1171279183_corgnq.png" className="brighimages122" alt="kushel" />
              </div>
            </div>
          </SplideSlide>


          <SplideSlide>
<div className="singlsesc5bg">
  
  <div className="bg5left2">

    <span className="casespan">CASE STUDY 02</span>

    <div className="bigcomtags">
      <p>B2B</p>
      <p>Recoil Pads</p>
    </div>

    <h5 className="lefetbtgh5">Ezma</h5>

    <p className="whwedo">
      <span> What We Did:</span> Magento to BigCommerce Migration, Data Migration, BigCommerce Store Design, Custom Theme Development, SEO, Integration.
    </p>

    <div className="whatwdowraps">
      <label>
        <p>INCREASED CONVERSIONS</p>
        <span>+85%</span>
      </label>
      <label>
        <p>INCREASED REVENUE</p>
        <span>+58%</span>
      </label>
      <label>
        <p>INCREASED AOV</p>
        <span>+6%</span>
      </label>
    </div>
  </div>

  <div className="bg5rights2">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730449431/Background_Image_lqebet.jpg" className="blackscrebg" alt="kushel" />
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730449413/Group_1171279192_qyxq2x.png" className="brighimages122" alt="kushel" />
              </div>

</div>
</SplideSlide>
         

          {/* You can add more SplideSlide components here */}
        </Splide>

        <div className="slidbotns2">
          <button
            className="slibntss"
            onClick={() => splideRef.current.splide.go("<")}
          >
            <GoArrowLeft fontSize={22} className="GoArrowLeft" />
          </button>
          <button
            className="slibntss"
            onClick={() => splideRef.current.splide.go(">")} // Move to next slide
          >
            <GoArrowRight fontSize={22} className="GoArrowLeft" />
          </button>
        </div>

        <div className="allprojectbtns">
    <button onClick={()=>router.push("/portfolio")}><span>View All Projects</span></button>
  </div>

      </div>
    </div>
  );
}

export default BigSection5;