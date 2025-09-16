import React from "react";
import Image from "next/image";
import "./section3.css" 

function Home2Section3() {
  return (
    <div className="h2sec3wrap">
      <div className="sec3cont">
        {/* left side */}
        <div className="h2sec3left">
          <div className="whoweare">
            <span> Who are we?</span>
          </div>

          <h3 className="h3eheaing">A Team of Expert Minds for Your Digital Success</h3>

          <p className="h3para">
            Kushel Digi Solutions is one of the top solution providers for end-to-end digital needs as we specialize in web development, mobile app development, e-commerce platforms, and UI/UX design. With a strong foundation built over the last 8 years, we continue to serve various industries with a mission of customizing the digital experience in order to provide impetus for growth and innovation. We have a team of experienced professionals who bring your imagination into reality with state-of-the-art technologies and strategic insights. Choose us to bring your digital presence to a whole new level, and let us turn your business vision into a reality.
          </p>
        </div>

        {/* right side */}
         {/* https://res.cloudinary.com/ecommerce-website/image/upload/v1724772165/h2eyecircle.fcd4d72cd47863e08805_owlam2.webp */}
        <div className="h2sec3right">
          {/* <picture>
          <Image
            src="https://res.cloudinary.com/dgif730br/image/upload/v1741090424/asit_sir_c_2-01_awat2p.png"
            alt="Eye Circle"
            className="eye-circle"
            width={475}
            height={475}
          />
          </picture> */}
          <Image
            src="https://res.cloudinary.com/ecommerce-website/image/upload/v1724772257/h2eye.49d420b021e30ddb51ab_xrmd6o.webp"
            alt="about kushel digi solutions"
            className="eye-img"
            width={475}
            height={475}
          />
        </div>
      </div>
    </div>
  );
}

export default Home2Section3;
