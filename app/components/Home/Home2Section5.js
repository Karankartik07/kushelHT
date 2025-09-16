import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import next/image for optimized images
import './section7.css'
import Link from 'next/link'; // Import Link from next/link for navigation


function Home2Section5() {
  const [isFirstSet, setIsFirstSet] = useState(true);
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImages(false);
      setTimeout(() => {
        setIsFirstSet((prev) => !prev);
        setShowImages(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="s5wrap">
      <div className="s5maincont">
        <div className="s5cont">
          <div className="s5content">
            <h3 className="primary-heading">
             We Build with the Best to Ensure Your Success
            </h3>
            <p className='secondary-heading'>
              Our expert minds at Kushel Digi leverage top-tier technologies to
              bring your vision to life with precision and reliability. We work
              on Node, Angular, React, Laravel, MongoDB, HTML5, PHP, ASP.NET,
              and WordPress. For the best user interface, we use CSS3, Magento,
              CMS, and object modeling.
            </p>
          </div>

         <a href="/contact-us">
                  <div className="indus-button-group">
                    <button type="button">Let's Connect</button>
                  </div>
                </a>
        </div>

        <div
          className={`image-container ${showImages ? "fade-in" : "fade-out"}`}
        >
          {isFirstSet ? (
            <>
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767136/Group_1000011223_in1dh6.png"
                className="nodejs1 displaynone sameimgs5"
                alt="Node.js technology icon for ecommerce website development"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767140/Group_1000011229_1_ayymso.png"
                className="angular1 displaynone sameimgs5"
                alt="Angular technology icon for ecommerce website development"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767137/Group_1000011225_cqba1f.png"
                className="react1 displaynone sameimgs5"
                alt="React technology icon for ecommerce website development"
                width={100}
                height={100}
              />

              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766977/Group_1000011216_p62mua.png"
                className="vue1 displaynone sameimgs5"
                alt="Vue.js technology icon for eCommerce website development"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767065/Group_1000011219_1_bmakmn.png"
                className="larvel1 displaynone sameimgs5"
                alt="Laravel technology icon for ecommerce website development"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766976/Group_112_ed3s7q.png"
                className="php1 displaynone sameimgs5"
                alt="php technology icon for ecommerce website development"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767138/Group_1000011227_1_prwr0a.png"
                className="html1 displaynone sameimgs5"
                alt="HTML5 technology icon for ecommerce website development"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766980/Group_1000011218_1_thqeyc.png"
                className="wordpress1 displaynone sameimgs5"
                alt="wordpress technology icon for ecommerce website development"
                width={100}
                height={100}
              />
            </>
          ) : (
            <>
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767152/Group_1171275943_yq6yrg.png"
                className="nodejs1 displaynone sameimgs5"
                alt="MongoDB"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767152/Group_1171275926_oyvwef.png"
                className="react1 displaynone sameimgs5"
                alt="BigCommerce"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767139/Group_1000011227_taehf3.png"
                className="html1 displaynone sameimgs5"
                alt="JavaScript"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767141/Group_1000011229_globko.png"
                className="angular1 displaynone sameimgs5"
                alt="Flutter"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724769827/Group_1000011225_nqhcvk.png"
                className="vue1 displaynone sameimgs5"
                alt="Magento"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767154/Group_1171275946_lefslc.png"
                className="php1 displaynone sameimgs5"
                alt="Shopify"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724766980/Group_1000011218_f4cxsf.png"
                className="wordpress1 displaynone sameimgs5"
                alt="WooCommerce"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767136/Group_1000011219_ldbpnn.png"
                className="larvel1 displaynone sameimgs5"
                alt="Kotlin"
                 width={100}
                height={100}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home2Section5;



