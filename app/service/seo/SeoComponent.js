"use client"
import { useEffect } from 'react';
// import { Helmet } from "react-helmet";



import Link from 'next/link';

import Head from "next/head";
import Footer from '../../COMMON/Footer';
import Navbar from '../../COMMON/Navbar';
import '../../globals.css';



const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
}

function SeoComponent() {
  const generateMetadata = ({ params }) => ({
    title: 'KushelDigi Solutions- the Best SEO agency',
    description: 'Unlock your online potential with KushelDigi Solutions – Your best SEO agency for top-notch strategies and unmatched results. Boost your visibility today!',
  });


  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription ? metaDescription.content = description :
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);
  return (
    <>

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

      <Navbar />

      <div className="ser-main overflow">
        <div id="hemesh-seo-kushel">
          <div className="banner">
            <div className="seocontainer">
              <div className="seo_flex">
                <div className="seo_flex_left">
                  <span className='seo-first-heading'>GET RANKED IN A BLACKLISTED INDUSTRY</span>
                  <h1>
                    top
                    <span> digital marketing agency</span> provides
                    <span> upto 8X</span> guaranteed conversions
                  </h1>
                  <p>
                    Can't run paid ads? No problem. Search engine optimization is
                    your perfect solution.
                  </p>

                  <div className="button1">
                    <Link href="/contact-us">
                      <button type="button">Schedule a free consultation</button>
                    </Link>
                  </div>

                </div>
                <div className="seo_flex_right">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428530/Seobanerimg_o077vm.png' alt="Best SEO Agency" title='Best SEO Agency' />
                </div>
              </div>
            </div>
          </div>
          <div className="Text">
            <div className="seocontainer1">
              <div className="seo_flex1">
                <div className="seo-second-heading">
                  <h2>Why choose SEO for your online brand?</h2>
                  <p>Whether you want to boost the conversion rates or amplify your brand’s online visibility, SEO is the
                    ultimate weapon.
                  </p>
                </div>
                <div className="seo-second-card-main">
                  <div className="seo-second-card-man">
                    <div className="seo-second-card-flex0">
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="54" height="54" rx="3" fill="#F1F2F8" />
                        <g clipPath="url(#clip0_462_269)">
                          <path
                            d="M15.8899 7H38.9663C38.9944 7.14366 39.0424 7.27396 39.0391 7.40259C38.9548 12.7198 38.6374 18.0119 37.2505 23.1754C36.3727 26.4429 35.2272 29.6101 32.8253 32.0775C31.9409 32.9862 30.84 33.783 29.6944 34.3093C27.2347 35.4368 25.0114 34.615 23.0608 32.9645C20.6804 30.9516 19.3861 28.227 18.4009 25.332C17.1412 21.6319 16.5313 17.8014 16.2585 13.9125C16.0998 11.644 16.0139 9.36876 15.8899 7ZM23.555 24.4199C23.5054 24.9545 23.9088 25.2418 24.5105 24.9394C25.3205 24.5318 26.1206 24.0942 26.8925 23.6181C27.319 23.3541 27.6562 23.3291 28.091 23.6031C28.8134 24.0574 29.5655 24.4684 30.3325 24.8392C30.5953 24.9662 30.9888 25.0196 31.2301 24.906C31.3739 24.8392 31.407 24.3715 31.369 24.1009C31.2549 23.2773 31.1408 22.4454 30.9127 21.6502C30.7458 21.0672 30.9094 20.7198 31.326 20.3556C31.9508 19.811 32.5525 19.2364 33.1261 18.6367C33.3146 18.4396 33.5245 18.0921 33.47 17.8816C33.4171 17.6778 33.0501 17.4723 32.7939 17.4256C31.9293 17.2702 31.0532 17.17 30.1788 17.0831C29.6944 17.0347 29.4002 16.8392 29.2101 16.3598C28.8944 15.563 28.5241 14.7845 28.1273 14.0244C28.0034 13.7872 27.7224 13.4899 27.5091 13.4865C27.2992 13.4832 27.0049 13.7739 26.881 14.0077C26.4941 14.7411 26.1272 15.4928 25.8379 16.2696C25.6213 16.8492 25.2494 17.0681 24.6824 17.1215C23.8344 17.2034 22.9864 17.3003 22.1483 17.4439C21.9152 17.484 21.5929 17.6728 21.5334 17.8632C21.4739 18.0553 21.6359 18.3911 21.8028 18.5632C22.4591 19.238 23.1815 19.8444 23.8195 20.536C24.0195 20.7532 24.1419 21.1658 24.1022 21.4615C23.9749 22.422 23.7567 23.3709 23.5567 24.4216L23.555 24.4199Z"
                            fill="#0E62FF"
                          />
                          <path
                            d="M18.5363 47C18.3197 44.9235 18.9049 44.1468 20.834 43.8745C23.2904 43.527 25.3253 41.3871 25.5369 38.8847C25.5948 38.1965 25.5452 37.4999 25.5452 36.7999H29.362C29.3934 37.4715 29.4 38.1881 29.4629 38.8997C29.686 41.3921 31.7325 43.5387 34.1839 43.8761C36.0949 44.1384 36.7065 44.962 36.4552 47H18.5363Z"
                            fill="#0E62FF"
                          />
                          <path
                            d="M17.399 28.5461C14.5492 28.3423 11.6415 25.8799 10.8199 22.7394C10.0909 19.953 9.59665 17.1048 9.02304 14.2784C8.88584 13.6001 9.36853 13.0355 10.114 13.0138C11.4034 12.977 12.6961 13.0038 14.0499 13.0038C14.126 13.6987 14.1971 14.3485 14.2797 15.1069H11.2794C11.7902 17.5241 12.2266 19.8361 12.7771 22.1213C13.149 23.6665 14.0681 24.9261 15.4633 25.6645C16.3245 26.1205 16.7923 26.7386 17.0502 27.6206C17.1411 27.9296 17.2767 28.2253 17.399 28.5477V28.5461Z"
                            fill="#0E62FF"
                          />
                          <path
                            d="M43.704 15.1219H40.7335C40.8029 14.3869 40.8641 13.7555 40.9335 13.0288C42.3287 13.0288 43.7255 12.9653 45.1124 13.0572C45.7554 13.099 46.1092 13.6452 45.972 14.3402C45.4397 17.0063 44.9388 19.6791 44.3338 22.3285C43.59 25.5876 40.6723 28.2637 37.606 28.5611C38.1002 27.4385 38.2606 26.2608 39.5913 25.621C41.0608 24.9144 41.9303 23.5062 42.3039 21.9042C42.8196 19.6924 43.2279 17.4556 43.704 15.1219Z"
                            fill="#0E62FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_462_269">
                            <rect
                              width="37"
                              height="40"
                              fill="white"
                              transform="translate(9 7)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4>Rank Higher In Search Engines</h4>
                      <p>
                        Outrank the competition and climb to the top of Google
                        search results.
                      </p>
                    </div>
                    <div className="seo-second-card-flex1">
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="54" height="54" rx="3" fill="#F1F2F8" />
                        <path
                          d="M32.9692 18.7314C31.7686 18.7314 30.7039 18.7236 29.6393 18.7346C29.0733 18.7408 28.62 18.5769 28.3636 18.032C28.0994 17.4714 28.3292 17.039 28.695 16.6205C31.3371 13.6103 33.9713 10.5907 36.6165 7.58203C37.3044 6.79825 37.9532 6.80761 38.6504 7.60077C41.2768 10.5907 43.8955 13.5884 46.5203 16.5784C46.9033 17.014 47.1675 17.459 46.8752 18.0523C46.5907 18.6315 46.0904 18.7424 45.5073 18.733C44.4723 18.7174 43.4358 18.7283 42.3196 18.7283V42.2653H32.9676V18.7314H32.9692Z"
                          fill="#0E62FF"
                        />
                        <path
                          d="M21.2144 42.2528C21.2144 39.0005 21.2144 35.8076 21.2144 32.6132C21.2144 30.8457 21.2082 29.0783 21.2176 27.3125C21.2223 26.3523 21.6397 25.9245 22.5886 25.9213C24.8008 25.912 27.0113 25.912 29.2235 25.9213C30.1412 25.9245 30.5867 26.346 30.5883 27.2407C30.5961 32.1526 30.5914 37.0629 30.5883 41.9749C30.5883 42.0498 30.568 42.1247 30.5492 42.2543H21.216L21.2144 42.2528Z"
                          fill="#0E62FF"
                        />
                        <path
                          d="M26.9958 44.6525C33.0929 44.6525 39.1884 44.6525 45.2854 44.6525C45.5199 44.6525 45.7607 44.6244 45.9874 44.6697C46.6283 44.7962 47.0114 45.1943 46.9942 45.8594C46.977 46.4855 46.5971 46.8587 45.9905 46.9742C45.7638 47.0179 45.5231 46.9914 45.2885 46.9914C33.096 46.9914 20.9019 46.9914 8.7093 46.9914C8.47479 46.9914 8.23404 47.0195 8.00735 46.9742C7.36638 46.8462 6.98336 46.4496 7.00056 45.7845C7.01775 45.1584 7.39765 44.7853 8.00423 44.6697C8.23091 44.626 8.47167 44.6525 8.70617 44.6525C14.8032 44.6525 20.8987 44.6525 26.9958 44.6525Z"
                          fill="#0E62FF"
                        />
                        <path
                          d="M9.33462 42.2527C9.33462 39.497 9.32211 36.799 9.34243 34.1011C9.34712 33.3954 9.82395 32.9551 10.5509 32.9504C12.9178 32.9332 15.2832 32.9332 17.6501 32.9504C18.3755 32.9551 18.8476 33.4 18.8539 34.1058C18.8742 36.8037 18.8617 39.5017 18.8617 42.2527H9.33462Z"
                          fill="#0E62FF"
                        />
                      </svg>
                      <h4>Increase Your Traffic</h4>
                      <p>Attract more potential customers to your website</p>
                    </div>
                    <div className="seo-second-card-flex2">
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="54" height="54" rx="3" fill="#F1F2F8" />
                        <g clipPath="url(#clip0_462_275)">
                          <path
                            d="M10.9389 38.8714C13.5037 36.3075 16.0591 33.7529 18.6202 31.1908C20.3525 32.9695 22.1524 34.8156 23.9898 36.7011C27.1808 33.4736 30.1993 30.4242 33.3865 27.2024C34.6014 28.52 35.6626 29.6727 36.7238 30.8234L36.9188 30.681V21.0493H27.1583C28.3919 22.2038 29.5581 23.2946 30.6661 24.3311C28.3657 26.6401 26.2771 28.7355 24.1435 30.8778C22.3755 29.0991 20.54 27.2493 18.6108 25.3094C15.2848 28.6381 12.0751 31.8505 8.85032 35.0761C5.03874 27.6429 6.88172 15.9888 16.541 9.98379C25.9377 4.14178 38.3061 7.14806 44.0938 16.6486C49.8515 26.1004 46.7824 38.4385 37.2469 44.1512C27.7451 49.8432 16.1285 46.4546 10.9408 38.8714H10.9389Z"
                            fill="#0E62FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_462_275">
                            <rect
                              width="40"
                              height="40"
                              fill="white"
                              transform="translate(7 7)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <h4>Get More Sales</h4>
                      <p>
                        With more traffic comes more opportunities to convert leads
                        into customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="seo_services">
            <div className="seocontainer2">
              <div className="seo_flex2">
                <h2>How we rank websites with our <span>SEO services.</span></h2>
                <div className="seo-third-card-main">
                  <div className="seo-third-card-man">
                    <div className="seo-second-card-flex3">
                      <div className='seo-second-card-flex-scgitem'>
                        <svg
                          width="70"
                          height="70"
                          viewBox="0 0 86 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_462_354)">
                            <circle cx="43" cy="38" r="28" fill="white" />
                          </g>
                          <g clipPath="url(#clip0_462_354)">
                            <path
                              d="M50.1785 43.6368C52.7992 46.2329 55.401 48.8102 58.0005 51.3851C57.4141 51.9489 56.8676 52.4738 56.32 52.9998C53.8039 50.4485 51.2221 47.8324 48.619 45.1938C45.0771 47.9173 41.3118 48.7901 37.1563 47.6507C34.142 46.8239 31.7611 45.0687 30.0641 42.4525C26.6056 37.1199 27.5833 30.235 32.3369 26.0584C36.9789 21.9796 43.9277 21.9701 48.7436 26.0902C53.1858 29.8918 55.0015 37.4502 50.1785 43.6368ZM40.5185 45.6715C46.0478 45.6868 50.5804 41.1645 50.591 35.6219C50.6028 30.0699 46.1171 25.5181 40.5949 25.4768C35.0939 25.4356 30.4813 30.0369 30.4696 35.5783C30.4578 41.0961 34.9975 45.6561 40.5174 45.6726L40.5185 45.6715Z"
                              fill="#0E62FF"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_462_354"
                              x="0"
                              y="0"
                              width="86"
                              height="86"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="5" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_462_354"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_462_354"
                                result="shape"
                              />
                            </filter>
                            <clipPath id="clip0_462_354">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(28 23)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Keywords</h4>
                      <p>
                        Basis of any SEO campaign, we suggest and mutually finalize
                        keywords with you to improve Organic traffic and in turn
                        improve sales.
                      </p>
                    </div>
                    <div className="seo-second-card-flex3">
                      <div className="seo-second-card-flex-scgitem">
                        <svg
                          width="70"
                          height="70"
                          viewBox="0 0 86 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_462_383)">
                            <circle cx="43" cy="38" r="28" fill="white" />
                          </g>
                          <g clipPath="url(#clip0_462_383)">
                            <path
                              d="M28.0106 33.8528H57.9602C57.9731 34.0358 57.9953 34.2015 57.9953 34.3672C57.9977 37.8015 58.0059 41.2358 57.9942 44.67C57.9824 47.9075 55.9073 50.3313 52.6655 50.9021C52.2469 50.9758 51.8108 50.97 51.3829 50.97C45.7951 50.9746 40.2061 50.9033 34.6207 50.9977C31.1281 51.0575 27.9426 48.4887 28 44.4813C28.0481 41.1633 28.0094 37.8429 28.0094 34.5238V33.8528H28.0106ZM43.0317 41.2035C45.4739 41.2035 47.9172 41.2266 50.3593 41.1805C50.7568 41.1736 51.2187 40.9423 51.5236 40.6753C51.8999 40.345 51.8811 39.8294 51.649 39.3932C51.3676 38.8638 50.8647 38.6808 50.2761 38.6808C45.4105 38.6819 40.545 38.675 35.6794 38.6946C35.3511 38.6957 34.9736 38.8189 34.7051 39.0053C34.2561 39.3172 34.106 39.7983 34.2819 40.3335C34.4636 40.8871 34.9279 41.2001 35.5868 41.2012C38.0688 41.207 40.5497 41.2035 43.0317 41.2035ZM40.4594 46.1386C42.0984 46.1386 43.7387 46.1512 45.3777 46.134C46.488 46.1225 47.1504 45.0959 46.6123 44.2373C46.2922 43.7275 45.781 43.5963 45.1983 43.5974C42.0562 43.6055 38.9141 43.5997 35.7709 43.602C34.8329 43.602 34.2197 44.1096 34.2092 44.8761C34.1998 45.6264 34.8224 46.134 35.7744 46.1363C37.3361 46.1409 38.8977 46.1374 40.4582 46.1363L40.4594 46.1386Z"
                              fill="#0E62FF"
                            />
                            <path
                              d="M57.9964 31.2702H28.0855C27.5204 27.4527 30.2475 24.1174 33.9137 24.0598C39.988 23.9632 46.0647 24.0011 52.1402 24.0483C55.2799 24.0725 57.9015 26.8231 57.9941 30.0387C58.0058 30.437 57.9953 30.8352 57.9953 31.2702H57.9964ZM32.9945 28.9074C33.7202 28.9051 34.2842 28.3389 34.2713 27.6242C34.2595 26.9486 33.6721 26.4077 32.9663 26.4238C32.2664 26.4399 31.7224 26.9935 31.7271 27.684C31.7318 28.3792 32.2817 28.9097 32.9945 28.9074ZM36.7451 28.9074C37.4708 28.9051 38.0347 28.34 38.0242 27.6253C38.0136 26.9509 37.4251 26.4088 36.7204 26.4238C36.0205 26.4387 35.4753 26.9912 35.48 27.6817C35.4835 28.3769 36.0322 28.9086 36.7451 28.9063V28.9074ZM40.4945 28.9074C41.2202 28.9074 41.7865 28.3423 41.7771 27.6299C41.7689 26.9566 41.1804 26.4111 40.4769 26.4249C39.777 26.4376 39.2294 26.9889 39.233 27.6794C39.2353 28.3757 39.7828 28.9086 40.4945 28.9086V28.9074Z"
                              fill="#0E62FF"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_462_383"
                              x="0"
                              y="0"
                              width="76"
                              height="76"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="5" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_462_383"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_462_383"
                                result="shape"
                              />
                            </filter>
                            <clipPath id="clip0_462_383">
                              <rect
                                width="30"
                                height="27"
                                fill="white"
                                transform="translate(28 24)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <h4>Content</h4>
                      <p>
                        We suggest, optimize, edit and write content for your
                        website (On-Site Content) and for publishing websites
                        (Off-Site Content) in order to garner right traffic from the
                        right audience.
                      </p>
                    </div>
                    <div className="seo-second-card-flex3">
                      <div className="seo-second-card-flex-scgitem">
                        <svg width="70" height="70" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_462_386)">
                            <circle cx="43" cy="38" r="28" fill="white" />
                          </g>
                          <g clipPath="url(#clip0_462_386)">
                            <path d="M28.0298 52.97L28.1248 51.6575C28.2198 50.2825 28.806 43.2975 31.0085 41.0937C32.1942 39.9364 33.7884 39.2932 35.4452 39.3036C37.1021 39.314 38.6881 39.9772 39.8591 41.1494C41.0301 42.3216 41.6918 43.9082 41.7006 45.5651C41.7094 47.2219 41.0646 48.8155 39.906 50C37.7035 52.2025 30.7198 52.7875 29.341 52.8825L28.0298 52.97ZM56.8748 24.085C56.1453 23.3884 55.1754 22.9996 54.1667 22.9996C53.158 22.9996 52.188 23.3884 51.4585 24.085L38.3148 37.2337C39.5716 37.6614 40.714 38.3707 41.6547 39.3075C42.5954 40.2443 43.3094 41.3837 43.7423 42.6387L56.8748 29.5C57.5917 28.7813 57.9943 27.8076 57.9943 26.7925C57.9943 25.7774 57.5917 24.8037 56.8748 24.085Z" fill="#0E62FF" />
                          </g>
                          <defs>
                            <filter id="filter0_d_462_386" x="0" y="0" width="86" height="86" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="5" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_462_386" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_462_386" result="shape" />
                            </filter>
                            <clipPath id="clip0_462_386">
                              <rect width="30" height="30" fill="white" transform="translate(28 23)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Front-End Optimization</h4>
                      <p>Our experts at Kushel Digi Solutions will optimize the UI design of your website and align it with the
                        SEO rules and standards. This will help you build trust between your target demographics and the brand.
                      </p>
                    </div>

                    <div className="seo-second-card-flex3">
                      <div className="seo-second-card-flex-scgitem">
                        <svg
                          width="70"
                          height="70"
                          viewBox="0 0 86 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_462_390)">
                            <circle cx="43" cy="38" r="28" fill="white" />
                          </g>
                          <g clipPath="url(#clip0_462_390)">
                            <path
                              d="M46.75 23H39.25C37.593 23.002 36.0044 23.6611 34.8328 24.8328C33.6611 26.0044 33.002 27.593 33 29.25V43H53V29.25C52.998 27.593 52.3389 26.0044 51.1672 24.8328C49.9956 23.6611 48.407 23.002 46.75 23Z"
                              fill="#0E62FF"
                            />
                            <path
                              d="M33 46.75C33.002 48.407 33.6611 49.9956 34.8328 51.1672C36.0044 52.3389 37.593 52.998 39.25 53H46.75C48.407 52.998 49.9956 52.3389 51.1672 51.1672C52.3389 49.9956 52.998 48.407 53 46.75V45.5H33V46.75ZM43 48C43.2472 48 43.4889 48.0733 43.6945 48.2107C43.9 48.348 44.0602 48.5432 44.1549 48.7716C44.2495 49.0001 44.2742 49.2514 44.226 49.4939C44.1778 49.7363 44.0587 49.9591 43.8839 50.1339C43.7091 50.3087 43.4863 50.4278 43.2439 50.476C43.0014 50.5242 42.7501 50.4995 42.5216 50.4048C42.2932 50.3102 42.098 50.15 41.9607 49.9445C41.8233 49.7389 41.75 49.4972 41.75 49.25C41.75 48.9185 41.8817 48.6005 42.1161 48.3661C42.3505 48.1317 42.6685 48 43 48Z"
                              fill="#0E62FF"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_462_390"
                              x="0"
                              y="0"
                              width="86"
                              height="86"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="5" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_462_390"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_462_390"
                                result="shape"
                              />
                            </filter>
                            <clipPath id="clip0_462_390">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(28 23)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Technical SEO</h4>
                      <p>From optimizing website’s loading speed to uploading the correct sitemap and designing responsive
                        pages, we will help with all aspects of technical SEO.
                      </p>
                    </div>
                    <div className="seo-second-card-flex3">
                      <div className="seo-second-card-flex-scgitem">
                        <svg
                          width="70"
                          height="70"
                          viewBox="0 0 86 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_462_391)">
                            <circle cx="43" cy="38" r="28" fill="white" />
                          </g>
                          <g clipPath="url(#clip0_462_391)">
                            <path
                              d="M37.375 39.25C36.2625 39.25 35.1749 38.9201 34.2499 38.302C33.3249 37.6839 32.6039 36.8054 32.1782 35.7776C31.7524 34.7498 31.641 33.6188 31.8581 32.5276C32.0751 31.4365 32.6109 30.4342 33.3975 29.6475C34.1842 28.8609 35.1865 28.3251 36.2776 28.1081C37.3688 27.891 38.4998 28.0024 39.5276 28.4282C40.5554 28.8539 41.4339 29.5749 42.052 30.4999C42.6701 31.4249 43 32.5125 43 33.625C42.9983 35.1163 42.4052 36.5461 41.3506 37.6007C40.2961 38.6552 38.8663 39.2483 37.375 39.25ZM46.75 48C46.748 46.343 46.0889 44.7544 44.9172 43.5828C43.7456 42.4111 42.157 41.752 40.5 41.75H34.25C32.593 41.752 31.0044 42.4111 29.8328 43.5828C28.6611 44.7544 28.002 46.343 28 48L28 53H46.75V48ZM49.875 34.25C48.7625 34.25 47.6749 33.9201 46.7499 33.302C45.8249 32.6839 45.1039 31.8054 44.6782 30.7776C44.2524 29.7498 44.141 28.6188 44.3581 27.5276C44.5751 26.4365 45.1109 25.4342 45.8975 24.6475C46.6842 23.8609 47.6865 23.3251 48.7776 23.1081C49.8688 22.891 50.9998 23.0024 52.0276 23.4282C53.0554 23.8539 53.9339 24.5749 54.552 25.4999C55.1701 26.4249 55.5 27.5125 55.5 28.625C55.4983 30.1163 54.9052 31.5461 53.8506 32.6007C52.7961 33.6552 51.3663 34.2483 49.875 34.25ZM51.75 36.75H45.5C45.2806 36.7601 45.062 36.7822 44.845 36.8163C44.3905 37.8679 43.7192 38.8118 42.875 39.5863C44.7079 40.1049 46.3218 41.2068 47.4722 42.725C48.6225 44.2433 49.2467 46.0952 49.25 48H58V43C57.998 41.343 57.3389 39.7544 56.1672 38.5828C54.9956 37.4111 53.407 36.752 51.75 36.75Z"
                              fill="#0E62FF"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_462_391"
                              x="0"
                              y="0"
                              width="86"
                              height="86"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="5" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_462_391"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_462_391"
                                result="shape"
                              />
                            </filter>
                            <clipPath id="clip0_462_391">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(28 23)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Backlinks</h4>
                      <p>
                        We believe in acquiring backlinks from high DA, trusted web
                        sources. We create backlinks every month for your website
                        and delivers a report for backlinks each month.
                      </p>
                    </div>
                    <div className="seo-second-card-flex3">
                      <div className="seo-second-card-flex-scgitem">
                        <svg
                          width="70"
                          height="70"
                          viewBox="0 0 86 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_462_392)">
                            <circle cx="43" cy="38" r="28" fill="white" />
                          </g>
                          <g clipPath="url(#clip0_462_392)">
                            <path
                              d="M45.5 31.75V23.575C46.6413 24.0075 47.6912 24.6737 48.5812 25.5625L52.9362 29.92C53.8263 30.8087 54.4925 31.8588 54.925 33H46.75C46.06 33 45.5 32.4388 45.5 31.75ZM55.47 35.5H46.75C44.6825 35.5 43 33.8175 43 31.75V23.03C42.7987 23.0162 42.5975 23 42.3938 23H36.75C33.3038 23 30.5 25.8038 30.5 29.25V40.5H35.4563L37.585 37.3062C37.8313 36.9362 38.2625 36.715 38.7025 36.7525C39.1475 36.78 39.5438 37.0425 39.7438 37.4413L42.53 43.015L43.835 41.0575C44.0675 40.71 44.4575 40.5013 44.875 40.5013H50.5C51.19 40.5013 51.75 41.0613 51.75 41.7513C51.75 42.4412 51.19 43.0012 50.5 43.0012H45.5437L43.415 46.195C43.1825 46.5437 42.7913 46.7512 42.375 46.7512C42.3488 46.7512 42.3225 46.7513 42.2975 46.7488C41.8525 46.7213 41.4562 46.4587 41.2562 46.06L38.47 40.4862L37.165 42.4438C36.9325 42.7913 36.5425 43 36.125 43H30.5V46.75C30.5 50.1963 33.3038 53 36.75 53H49.25C52.6963 53 55.5 50.1963 55.5 46.75V36.1062C55.5 35.9025 55.4837 35.7013 55.47 35.5Z"
                              fill="#0E62FF"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_462_392"
                              x="0"
                              y="0"
                              width="86"
                              height="86"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="5" />
                              <feGaussianBlur stdDeviation="7.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_462_392"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_462_392"
                                result="shape"
                              />
                            </filter>
                            <clipPath id="clip0_462_392">
                              <rect
                                width="30"
                                height="30"
                                fill="white"
                                transform="translate(28 23)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Reporting</h4>
                      <p>
                        We provide real-time data driven SEO reports not to just
                        display results every month, but to keep updated with all
                        the SEO ongoings at our side.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="seo_companies">
            <div className="seocontainer3">
              <div className="seo_flex3">
                <h3>
                  Increase your brand’s online visibility with our <span>SEO</span> services
                </h3>
                <div className="seo_companies1">
                  <div className="seocontainer4">
                    <div className="seo_flex4">
                      <div className="seo_flex_left1">
                        <p>
                          At Kushel Digi Solutions, we diligently work on crafting tailored SEO strategies for your online brand.
                          From incorporating most searched keywords to integrating backlinks of websites having higher domain
                          authority, we ensure that maximum web traffic can be drawn. We never work on assumptions while
                          designing the SEO strategies. Instead, we capitalize on accurate market data to understand where your
                          business is lacking and accordingly scale our approaches.<br />
                          Connect with us now to boost the incoming traffic and generate better leads. Optimize your website for
                          higher performance and conversion rates. With us, you can rest assured that the bounce rates will be
                          reduced on no time. It’s time you invest in what matters for your brand’s glorious future.
                        </p>
                      </div>
                      <div className="image_right">
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428080/mainBusiness_yhvdef.png' alt="SEO Company in Noida" title='SEO Company in Noida' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="seo_experts1">
            <div className="seo-container6">
              <div className="seo_flex7">
                <div className="seo_flex6">
                  <h3>Collaborate with a renowned <span>SEO</span>expert</h3>
                  <p>
                    Get proven results in only 3 to 6 months with Kushel Digi Solutions!
                  </p>
                </div>
                <div className="seo_content123">
                  <div className="left_image">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428123/seoExperts_lqrx6j.png' alt="SEO Experts" title='SEO Experts' />
                  </div>
                  <div className="right_text">
                    <p>
                      We have worked with numerous clients hailing from different industries, including eCommerce,
                      healthcare, manufacturing, and many more. So, we understand the specifics of these sectors and
                      accordingly can modify our SEO strategies to generate the expected results. We guarantee that our
                      approach will boost your sales and drive higher web traffic in no time. So, worry no longer and reach out
                      to us now!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SEO_services">
            <div className="seo-container7">
              <div className="seo-second-card-flex5">
                <div className="services1">
                  <h3>Our <span>SEO</span> Services</h3>
                </div>
                <div className="seo-third-card-main2">
                  <div className="seo-third-card-man2">
                    <div className="seo-second-card-flex6">
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 86 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_493_110)">
                          <circle cx="43" cy="38" r="28" fill="#0E62FF" />
                        </g>
                        <g clipPath="url(#clip0_493_110)">
                          <path
                            d="M50.1785 43.6369C52.7992 46.233 55.401 48.8102 58.0005 51.3851C57.4141 51.949 56.8676 52.4738 56.32 52.9999C53.8039 50.4486 51.2221 47.8324 48.619 45.1938C45.0771 47.9173 41.3118 48.7902 37.1563 47.6508C34.142 46.8239 31.7611 45.0688 30.0641 42.4526C26.6056 37.12 27.5833 30.2351 32.3369 26.0584C36.9789 21.9796 43.9277 21.9702 48.7436 26.0903C53.1858 29.8919 55.0015 37.4503 50.1785 43.6369ZM40.5185 45.6715C46.0478 45.6869 50.5804 41.1646 50.591 35.622C50.6028 30.07 46.1171 25.5182 40.5949 25.4769C35.0939 25.4356 30.4813 30.0369 30.4696 35.5783C30.4578 41.0962 34.9975 45.6562 40.5174 45.6727L40.5185 45.6715Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_493_110"
                            x="0"
                            y="0"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="5" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_493_110"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_493_110"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="clip0_493_110">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(28 23)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4>SEO Audit</h4>
                      <p>
                        From assessing technical issues to detecting the gaps in keyword placements, we will identify the major
                        loopholes and weakness in your website. This full-scale SEO audit will further help us in improvising our
                        strategies accordingly.
                      </p>
                    </div>
                    <div className="seo-second-card-flex6">
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 86 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_493_109)">
                          <circle cx="43" cy="38" r="28" fill="#0E62FF" />
                        </g>
                        <g clipPath="url(#clip0_493_109)">
                          <path
                            d="M48.3025 25.1962C46.885 23.78 45.0012 23 43 23C40.9987 23 39.1125 23.78 37.6975 25.1962C36.28 26.6125 35.5 28.4963 35.5 30.5C35.5 32.5037 36.28 34.3875 37.7125 35.8175L43 40.99L48.3025 35.8038C49.72 34.3875 50.5 32.5037 50.5 30.5C50.5 28.4963 49.72 26.6125 48.3025 25.1962ZM43 33C41.6187 33 40.5 31.8813 40.5 30.5C40.5 29.1188 41.6187 28 43 28C44.3813 28 45.5 29.1188 45.5 30.5C45.5 31.8813 44.3813 33 43 33ZM58 42.6263V44L43 53L28 44V42.6263L36.1175 37.755L38.8888 40.4662L34.1438 43.3125L42.9987 48.625L51.8538 43.3125L47.1087 40.4662L49.88 37.7563L57.9975 42.6263H58Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_493_109"
                            x="0"
                            y="0"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="5" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_493_109"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_493_109"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="clip0_493_109">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(28 23)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4>Local Seo</h4>
                      <p>Tap into geography-specific markets with our stellar local SEO strategies. From incorporating location-
                        specific keywords to link building from local websites with higher domain authority, we will be there
                        with you in every step.
                      </p>
                    </div>
                    <div className="seo-second-card-flex6">
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 86 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_493_108)">
                          <circle cx="43" cy="38" r="28" fill="#0E62FF" />
                        </g>
                        <g clipPath="url(#clip0_493_108)">
                          <path
                            d="M37.87 43.13C37.1375 42.3987 37.1375 41.21 37.87 40.4787C38.6025 39.7462 39.7887 39.7462 40.5212 40.4787C42.1787 42.1362 45.0712 42.1375 46.7287 40.4787L52.965 34.2425C54.6762 32.5312 54.6762 29.7462 52.965 28.035C51.2537 26.3237 48.4687 26.3237 46.7575 28.035C46.025 28.7675 44.8387 28.7675 44.1062 28.035C43.3737 27.3037 43.3737 26.115 44.1062 25.3837C47.2787 22.21 52.4437 22.21 55.6162 25.3837C58.79 28.5575 58.79 33.72 55.6162 36.8937L49.38 43.13C47.7925 44.7175 45.7087 45.51 43.625 45.51C41.5412 45.51 39.4562 44.7162 37.87 43.13ZM36.14 52.9962C38.2237 52.9962 40.3075 52.2025 41.895 50.6162C42.6275 49.885 42.6275 48.6962 41.895 47.965C41.1625 47.2325 39.9762 47.2325 39.2437 47.965C37.5312 49.6775 34.7462 49.6762 33.0362 47.965C31.325 46.2537 31.325 43.4687 33.0362 41.7575L39.2375 35.5562C40.95 33.8437 43.735 33.8437 45.445 35.5562C46.1775 36.2887 47.3637 36.2887 48.0962 35.5562C48.8287 34.825 48.8287 33.6362 48.0962 32.905C44.9225 29.7312 39.76 29.7312 36.5862 32.905L30.3837 39.1062C27.21 42.28 27.21 47.4425 30.3837 50.6162C31.9712 52.2037 34.0562 52.9962 36.14 52.9962Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_493_108"
                            x="0"
                            y="0"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="5" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_493_108"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_493_108"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="clip0_493_108">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(28 23)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4>Link Building</h4>
                      <p>Our experts will help your website appear in the top search results by leveraging a strong link building
                        strategy. We only use website links that are authoritative and belong to the relevant niche.
                      </p>
                    </div>

                    <div className="seo-second-card-flex6">
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 86 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_493_117)">
                          <circle cx="43" cy="38" r="28" fill="#0E62FF" />
                        </g>
                        <g clipPath="url(#clip0_493_117)">
                          <path
                            d="M37.375 39.25C36.2625 39.25 35.1749 38.9201 34.2499 38.302C33.3249 37.6839 32.6039 36.8054 32.1782 35.7776C31.7524 34.7498 31.641 33.6188 31.8581 32.5276C32.0751 31.4365 32.6109 30.4342 33.3975 29.6475C34.1842 28.8609 35.1865 28.3251 36.2776 28.1081C37.3688 27.891 38.4998 28.0024 39.5276 28.4282C40.5554 28.8539 41.4339 29.5749 42.052 30.4999C42.6701 31.4249 43 32.5125 43 33.625C42.9983 35.1163 42.4052 36.5461 41.3506 37.6007C40.2961 38.6552 38.8663 39.2483 37.375 39.25ZM46.75 48C46.748 46.343 46.0889 44.7544 44.9172 43.5828C43.7456 42.4111 42.157 41.752 40.5 41.75H34.25C32.593 41.752 31.0044 42.4111 29.8328 43.5828C28.6611 44.7544 28.002 46.343 28 48L28 53H46.75V48ZM49.875 34.25C48.7625 34.25 47.6749 33.9201 46.7499 33.302C45.8249 32.6839 45.1039 31.8054 44.6782 30.7776C44.2524 29.7498 44.141 28.6188 44.3581 27.5276C44.5751 26.4365 45.1109 25.4342 45.8975 24.6475C46.6842 23.8609 47.6865 23.3251 48.7776 23.1081C49.8688 22.891 50.9998 23.0024 52.0276 23.4282C53.0554 23.8539 53.9339 24.5749 54.552 25.4999C55.1701 26.4249 55.5 27.5125 55.5 28.625C55.4983 30.1163 54.9052 31.5461 53.8506 32.6007C52.7961 33.6552 51.3663 34.2483 49.875 34.25ZM51.75 36.75H45.5C45.2806 36.7601 45.062 36.7822 44.845 36.8163C44.3905 37.8679 43.7192 38.8118 42.875 39.5863C44.7079 40.1049 46.3218 41.2068 47.4722 42.725C48.6225 44.2433 49.2467 46.0952 49.25 48H58V43C57.998 41.343 57.3389 39.7544 56.1672 38.5828C54.9956 37.4111 53.407 36.752 51.75 36.75Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_493_117"
                            x="0"
                            y="0"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="5" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_493_117"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_493_117"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="clip0_493_117">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(28 23)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4>SEO Management</h4>
                      <p>
                        Boost your search traffic month after month with skilled
                        management of SEO services.
                      </p>
                    </div>
                    <div className="seo-second-card-flex6">
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 86 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_493_120)">
                          <circle cx="43" cy="38" r="28" fill="#0E62FF" />
                        </g>
                        <g clipPath="url(#clip0_493_120)">
                          <path
                            d="M57.6338 50.8662L54.4625 47.695C55.1175 46.7063 55.5 45.5225 55.5 44.25C55.5 40.8037 52.6963 38 49.25 38C45.8037 38 43 40.8037 43 44.25C43 47.6963 45.8037 50.5 49.25 50.5C50.5225 50.5 51.7063 50.1175 52.695 49.4625L55.8662 52.6338C56.11 52.8775 56.43 53 56.75 53C57.07 53 57.39 52.8775 57.6338 52.6338C58.1225 52.145 58.1225 51.355 57.6338 50.8662ZM51.75 23H34.25C30.8038 23 28 25.8038 28 29.25V31.75H58V29.25C58 25.8038 55.1963 23 51.75 23ZM33.625 29.25C32.59 29.25 31.75 28.41 31.75 27.375C31.75 26.34 32.59 25.5 33.625 25.5C34.66 25.5 35.5 26.34 35.5 27.375C35.5 28.41 34.66 29.25 33.625 29.25ZM38.625 29.25C37.59 29.25 36.75 28.41 36.75 27.375C36.75 26.34 37.59 25.5 38.625 25.5C39.66 25.5 40.5 26.34 40.5 27.375C40.5 28.41 39.66 29.25 38.625 29.25ZM57.9975 44.4112C57.9975 44.3575 58 44.3037 58 44.25C58 44.3037 58 44.3575 57.9975 44.4112ZM28 34.25H58V44.25C58 39.425 54.075 35.5 49.25 35.5C44.425 35.5 40.5 39.425 40.5 44.25C40.5 46.6963 41.5087 48.9112 43.1325 50.5H34.25C30.8038 50.5 28 47.6963 28 44.25V34.25Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_493_120"
                            x="0"
                            y="0"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="5" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_493_120"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_493_120"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="clip0_493_120">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(28 23)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4>SEO Consulting</h4>
                      <p>
                        SEO for websites is not easy. With our consulting services,
                        you can overcome any SEO challenges and get valuable
                        insights.
                      </p>
                    </div>
                    <div className="seo-second-card-flex6">
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 76 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_493_123)">
                          <circle cx="43" cy="38" r="28" fill="#0E62FF" />
                        </g>
                        <g clipPath="url(#clip0_493_123)">
                          <path
                            d="M30.5 31.75V46.75C30.5 50.1963 33.3038 53 36.75 53H49.25C52.6963 53 55.5 50.1963 55.5 46.75V31.75H30.5ZM43 45.5H38C37.31 45.5 36.75 44.9412 36.75 44.25C36.75 43.5588 37.31 43 38 43H43C43.69 43 44.25 43.5588 44.25 44.25C44.25 44.9412 43.69 45.5 43 45.5ZM48 39.25H38C37.31 39.25 36.75 38.6912 36.75 38C36.75 37.3088 37.31 36.75 38 36.75H48C48.69 36.75 49.25 37.3088 49.25 38C49.25 38.6912 48.69 39.25 48 39.25ZM55.5 29.25H30.5C30.5 25.8038 33.3038 23 36.75 23H49.25C52.6963 23 55.5 25.8038 55.5 29.25Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_493_123"
                            x="0"
                            y="0"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="5" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_493_123"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_493_123"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="clip0_493_123">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(28 23)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h4  className='friendly'>Google-Friendly Content</h4>
                      <p>
                        Boost SEO marketing with a tailored content strategy. Get
                        relevant, valuable content that drives website traffic and
                        leads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SEO_tools">
            <div className="seocontainer9">
              <div className="seo_flex8">
                <div className="seo_flex_content">
                  <h3>Gain unique insights with our proprietary SEO tools</h3>
                  <p>
                    Ahrefs, Moz, and SEMrush are great, but they only scratch the
                    surface of SEO compared to what our internal tools can do.
                    <br />
                    With SearchAnalytics.ai, we can find the low-hanging fruit
                    keyword groups, so you can get targeted traffic for a smaller
                    budget, while LinkChecker.Pro takes link building to the next
                    level and helps us ensure you only get high-quality backlinks.
                  </p>
                </div>
                <div className="SEO_tools">
                  <div className="seo_flex9">
                    <div className="seo_flex_content_icon">
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428157/google1_o4jz0z.svg' alt="google1" title='google1' />
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428198/ahref_hs62bb.svg' alt="ahref" title='ahref' />
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428236/google2_qfk0xk.svg' alt="semrush" title='semrush' />
                    </div>
                    <div className="seo_flex_content_icon">
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428283/google3_p5jcmp.svg' alt="google anlytc" title='google anlytc' />
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428456/kwfinder_awj6rg.svg' alt="kwfinderew" title='kwfinderew' />
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428324/google4_hxj8ky.svg' alt="screming frog" title='screming frog' />
                    </div>
                    <div className="seo_flex_content_icon">
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428355/google5_i26txu.svg' alt="google Ad word" title='google Ad word' />
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428389/google6_tjmue8.svg' alt="woorank" title='woorank' />
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428423/google7_tcmdet.svg' alt="google ternd" title='google ternd' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SEO_experts">
            <div className="seocontainer10">
              <div className="seo_flex10">
                <h3>
                  How our <span>SEO experts</span> help your business achieve
                  success
                </h3>
              </div>
              <div className="abc">
                <div className="SEO_EXPERTS">
                  <div className="success-card">
                    <div className="card3">
                      <svg
                        width="38"
                        height="28"
                        viewBox="0 0 48 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.85 37.75C11.1833 37.75 8.85 37.1917 6.85 36.075C4.85 34.9583 3.29167 33.4 2.175 31.4C1.05833 29.4 0.5 27.0667 0.5 24.4V13.6C0.5 10.9333 1.05833 8.6 2.175 6.6C3.29167 4.6 4.85 3.04166 6.85 1.925C8.85 0.808332 11.1833 0.249999 13.85 0.249999C16.5167 0.249999 18.85 0.808332 20.85 1.925C22.85 3.04166 24.4083 4.6 25.525 6.6C26.6417 8.6 27.2 10.9333 27.2 13.6V24.4C27.2 27.0667 26.6417 29.4 25.525 31.4C24.4083 33.4 22.85 34.9583 20.85 36.075C18.85 37.1917 16.5167 37.75 13.85 37.75ZM13.85 31.3C15.05 31.3 16.1333 31.0167 17.1 30.45C18.0667 29.8833 18.8333 29.1167 19.4 28.15C19.9667 27.1833 20.25 26.1 20.25 24.9V13.05C20.25 11.85 19.9667 10.7667 19.4 9.8C18.8333 8.83333 18.0667 8.06667 17.1 7.5C16.1333 6.93333 15.05 6.65 13.85 6.65C12.65 6.65 11.5667 6.93333 10.6 7.5C9.63333 8.06667 8.86667 8.83333 8.3 9.8C7.73333 10.7667 7.45 11.85 7.45 13.05V24.9C7.45 26.1 7.73333 27.1833 8.3 28.15C8.86667 29.1167 9.63333 29.8833 10.6 30.45C11.5667 31.0167 12.65 31.3 13.85 31.3ZM40.4414 37V8.4L33.6914 12.55V5.05L40.4414 0.999999H47.3914V37H40.4414Z"
                          fill="black"
                        />
                      </svg>
                      <h3>Discussing the Goals</h3>
                      <p>
                        Get in a 30-minute short call with our SEO experts to discuss your business objectives. Fill in our team
                        with all the details, including your pain points and the ultimate goals you want to achieve.
                      </p>
                    </div>
                  </div>
                  <div className="success-card">
                    <div className="card3">
                      <svg
                        width="49"
                        height="28"
                        viewBox="0 0 59 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.85 37.75C11.1833 37.75 8.85 37.1917 6.85 36.075C4.85 34.9583 3.29167 33.4 2.175 31.4C1.05833 29.4 0.5 27.0667 0.5 24.4V13.6C0.5 10.9333 1.05833 8.6 2.175 6.6C3.29167 4.6 4.85 3.04166 6.85 1.925C8.85 0.808332 11.1833 0.249999 13.85 0.249999C16.5167 0.249999 18.85 0.808332 20.85 1.925C22.85 3.04166 24.4083 4.6 25.525 6.6C26.6417 8.6 27.2 10.9333 27.2 13.6V24.4C27.2 27.0667 26.6417 29.4 25.525 31.4C24.4083 33.4 22.85 34.9583 20.85 36.075C18.85 37.1917 16.5167 37.75 13.85 37.75ZM13.85 31.3C15.05 31.3 16.1333 31.0167 17.1 30.45C18.0667 29.8833 18.8333 29.1167 19.4 28.15C19.9667 27.1833 20.25 26.1 20.25 24.9V13.05C20.25 11.85 19.9667 10.7667 19.4 9.8C18.8333 8.83333 18.0667 8.06667 17.1 7.5C16.1333 6.93333 15.05 6.65 13.85 6.65C12.65 6.65 11.5667 6.93333 10.6 7.5C9.63333 8.06667 8.86667 8.83333 8.3 9.8C7.73333 10.7667 7.45 11.85 7.45 13.05V24.9C7.45 26.1 7.73333 27.1833 8.3 28.15C8.86667 29.1167 9.63333 29.8833 10.6 30.45C11.5667 31.0167 12.65 31.3 13.85 31.3ZM33.1914 36.95V31.05L48.2914 17.65C49.4247 16.65 50.2247 15.7083 50.6914 14.825C51.1581 13.9417 51.3914 13.1167 51.3914 12.35C51.3914 11.25 51.1664 10.275 50.7164 9.425C50.2664 8.55833 49.6331 7.88333 48.8164 7.4C47.9997 6.9 47.0414 6.65 45.9414 6.65C44.7914 6.65 43.7747 6.91666 42.8914 7.45C42.0247 7.96667 41.3497 8.65833 40.8664 9.525C40.3831 10.375 40.1581 11.3 40.1914 12.3H33.1914C33.1914 9.83333 33.7331 7.7 34.8164 5.9C35.8997 4.1 37.4081 2.70833 39.3414 1.725C41.2747 0.741666 43.5247 0.249999 46.0914 0.249999C48.4414 0.249999 50.5414 0.766665 52.3914 1.8C54.2581 2.81666 55.7247 4.24166 56.7914 6.075C57.8581 7.90833 58.3914 10.0333 58.3914 12.45C58.3914 14.2333 58.1414 15.7167 57.6414 16.9C57.1414 18.0667 56.3997 19.15 55.4164 20.15C54.4331 21.1333 53.2247 22.25 51.7914 23.5L42.0414 32.05L41.4914 30.55H58.3914V36.95H33.1914Z"
                          fill="black"
                        />
                      </svg>
                      <h3>Conducting end-to-end SEO audit</h3>
                      <p>
                        Once we have your opinions, our team will analyze your website using over 300 different SEO metrics.
                        This will help us identify the loopholes and find the root causes.
                      </p>
                    </div>
                  </div>
                  <div className="success-card">
                    <div className="card3">
                      <svg
                        width="49"
                        height="28"
                        viewBox="0 0 58 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.85 37.75C11.1833 37.75 8.85 37.1917 6.85 36.075C4.85 34.9583 3.29167 33.4 2.175 31.4C1.05833 29.4 0.5 27.0667 0.5 24.4V13.6C0.5 10.9333 1.05833 8.6 2.175 6.6C3.29167 4.6 4.85 3.04166 6.85 1.925C8.85 0.808332 11.1833 0.249999 13.85 0.249999C16.5167 0.249999 18.85 0.808332 20.85 1.925C22.85 3.04166 24.4083 4.6 25.525 6.6C26.6417 8.6 27.2 10.9333 27.2 13.6V24.4C27.2 27.0667 26.6417 29.4 25.525 31.4C24.4083 33.4 22.85 34.9583 20.85 36.075C18.85 37.1917 16.5167 37.75 13.85 37.75ZM13.85 31.3C15.05 31.3 16.1333 31.0167 17.1 30.45C18.0667 29.8833 18.8333 29.1167 19.4 28.15C19.9667 27.1833 20.25 26.1 20.25 24.9V13.05C20.25 11.85 19.9667 10.7667 19.4 9.8C18.8333 8.83333 18.0667 8.06667 17.1 7.5C16.1333 6.93333 15.05 6.65 13.85 6.65C12.65 6.65 11.5667 6.93333 10.6 7.5C9.63333 8.06667 8.86667 8.83333 8.3 9.8C7.73333 10.7667 7.45 11.85 7.45 13.05V24.9C7.45 26.1 7.73333 27.1833 8.3 28.15C8.86667 29.1167 9.63333 29.8833 10.6 30.45C11.5667 31.0167 12.65 31.3 13.85 31.3ZM44.6914 37.65C42.8914 37.65 41.1747 37.2917 39.5414 36.575C37.9081 35.8417 36.4831 34.8167 35.2664 33.5C34.0664 32.1833 33.2081 30.6333 32.6914 28.85L39.2914 27.1C39.6414 28.4167 40.3247 29.4417 41.3414 30.175C42.3747 30.8917 43.4914 31.25 44.6914 31.25C45.7247 31.25 46.6664 31 47.5164 30.5C48.3831 30 49.0664 29.325 49.5664 28.475C50.0831 27.625 50.3414 26.6833 50.3414 25.65C50.3414 24.1 49.8081 22.775 48.7414 21.675C47.6914 20.5583 46.3414 20 44.6914 20C44.1914 20 43.7081 20.075 43.2414 20.225C42.7747 20.3583 42.3247 20.55 41.8914 20.8L38.8414 15.45L50.2914 5.95L50.7914 7.4H34.0914V0.999999H56.5914V7.4L47.6914 16L47.6414 14.1C49.7081 14.4167 51.4497 15.1417 52.8664 16.275C54.2997 17.3917 55.3831 18.775 56.1164 20.425C56.8664 22.0583 57.2414 23.8 57.2414 25.65C57.2414 27.9167 56.6664 29.9583 55.5164 31.775C54.3664 33.575 52.8414 35.0083 50.9414 36.075C49.0414 37.125 46.9581 37.65 44.6914 37.65Z"
                          fill="black"
                        />
                      </svg>
                      <h3>Crafting tailored SEO strategies</h3>
                      <p>
                        At Kushel Digi Solutions, we will design custom SEO strategies to meet your business requirements and
                        bridge the existing gaps completely. We assure you that our approaches will drive higher web traffic and
                        boost the online rankings.
                      </p>
                    </div>
                  </div>

                  <div className="success-card">
                    <div className="card3">
                      <svg
                        width="49"
                        height="28"
                        viewBox="0 0 59 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.85 37.75C11.1833 37.75 8.85 37.1917 6.85 36.075C4.85 34.9583 3.29167 33.4 2.175 31.4C1.05833 29.4 0.5 27.0667 0.5 24.4V13.6C0.5 10.9333 1.05833 8.6 2.175 6.6C3.29167 4.6 4.85 3.04166 6.85 1.925C8.85 0.808332 11.1833 0.249999 13.85 0.249999C16.5167 0.249999 18.85 0.808332 20.85 1.925C22.85 3.04166 24.4083 4.6 25.525 6.6C26.6417 8.6 27.2 10.9333 27.2 13.6V24.4C27.2 27.0667 26.6417 29.4 25.525 31.4C24.4083 33.4 22.85 34.9583 20.85 36.075C18.85 37.1917 16.5167 37.75 13.85 37.75ZM13.85 31.3C15.05 31.3 16.1333 31.0167 17.1 30.45C18.0667 29.8833 18.8333 29.1167 19.4 28.15C19.9667 27.1833 20.25 26.1 20.25 24.9V13.05C20.25 11.85 19.9667 10.7667 19.4 9.8C18.8333 8.83333 18.0667 8.06667 17.1 7.5C16.1333 6.93333 15.05 6.65 13.85 6.65C12.65 6.65 11.5667 6.93333 10.6 7.5C9.63333 8.06667 8.86667 8.83333 8.3 9.8C7.73333 10.7667 7.45 11.85 7.45 13.05V24.9C7.45 26.1 7.73333 27.1833 8.3 28.15C8.86667 29.1167 9.63333 29.8833 10.6 30.45C11.5667 31.0167 12.65 31.3 13.85 31.3ZM48.8414 37V31.4H33.1914V25.05L44.5414 0.999999H52.3414L40.9914 25.05H48.8414V16.05H55.7414V25.05H58.9414V31.4H55.7414V37H48.8414Z"
                          fill="black"
                        />
                      </svg>
                      <h3>Setting up the Team</h3>
                      <p>
                        Based on the industry your business belongs to, we will assign the best experts having deep domain
                        knowledge in the sub-niche.
                      </p>
                    </div>
                  </div>
                  <div className="success-card">
                    <div className="card3">
                      <svg
                        width="48"
                        height="28"
                        viewBox="0 0 58 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.85 37.75C11.1833 37.75 8.85 37.1917 6.85 36.075C4.85 34.9583 3.29167 33.4 2.175 31.4C1.05833 29.4 0.5 27.0667 0.5 24.4V13.6C0.5 10.9333 1.05833 8.6 2.175 6.6C3.29167 4.6 4.85 3.04166 6.85 1.925C8.85 0.808332 11.1833 0.249999 13.85 0.249999C16.5167 0.249999 18.85 0.808332 20.85 1.925C22.85 3.04166 24.4083 4.6 25.525 6.6C26.6417 8.6 27.2 10.9333 27.2 13.6V24.4C27.2 27.0667 26.6417 29.4 25.525 31.4C24.4083 33.4 22.85 34.9583 20.85 36.075C18.85 37.1917 16.5167 37.75 13.85 37.75ZM13.85 31.3C15.05 31.3 16.1333 31.0167 17.1 30.45C18.0667 29.8833 18.8333 29.1167 19.4 28.15C19.9667 27.1833 20.25 26.1 20.25 24.9V13.05C20.25 11.85 19.9667 10.7667 19.4 9.8C18.8333 8.83333 18.0667 8.06667 17.1 7.5C16.1333 6.93333 15.05 6.65 13.85 6.65C12.65 6.65 11.5667 6.93333 10.6 7.5C9.63333 8.06667 8.86667 8.83333 8.3 9.8C7.73333 10.7667 7.45 11.85 7.45 13.05V24.9C7.45 26.1 7.73333 27.1833 8.3 28.15C8.86667 29.1167 9.63333 29.8833 10.6 30.45C11.5667 31.0167 12.65 31.3 13.85 31.3ZM44.8914 37.75C43.0747 37.75 41.3664 37.375 39.7664 36.625C38.1831 35.875 36.8164 34.8333 35.6664 33.5C34.5164 32.1667 33.6914 30.6167 33.1914 28.85L39.7414 27.1C39.9581 27.95 40.3414 28.6833 40.8914 29.3C41.4581 29.9167 42.1081 30.4 42.8414 30.75C43.5914 31.0833 44.3581 31.25 45.1414 31.25C46.1747 31.25 47.1164 31 47.9664 30.5C48.8331 30 49.5164 29.325 50.0164 28.475C50.5331 27.625 50.7914 26.6833 50.7914 25.65C50.7914 24.6167 50.5331 23.675 50.0164 22.825C49.5164 21.975 48.8331 21.3 47.9664 20.8C47.1164 20.3 46.1747 20.05 45.1414 20.05C43.8747 20.05 42.8414 20.2667 42.0414 20.7C41.2414 21.1167 40.6414 21.5167 40.2414 21.9L34.4914 20.15L35.5914 0.999999H55.2414V7.35H39.3414L41.7414 5.1L40.9914 17.45L39.8414 16.05C40.7414 15.3167 41.7664 14.7833 42.9164 14.45C44.0664 14.1167 45.1414 13.95 46.1414 13.95C48.4081 13.95 50.3997 14.4583 52.1164 15.475C53.8497 16.475 55.1997 17.8583 56.1664 19.625C57.1497 21.375 57.6414 23.3833 57.6414 25.65C57.6414 27.9167 57.0497 29.9667 55.8664 31.8C54.6831 33.6167 53.1247 35.0667 51.1914 36.15C49.2581 37.2167 47.1581 37.75 44.8914 37.75Z"
                          fill="black"
                        />
                      </svg>
                      <h3>Implementing strategies and scaling further</h3>
                      <p>
                        Our experts will help implement the SEO strategies crafted so that you can see the results on time. Worry
                        no more as we will continue to observe the performance and scale the plans accordingly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="seo-customers">
            <div className="seo-container11">
              <div className="main-div">
                <div className="left_seocontainer">
                  <h3>
                    Don't let your competitors steal all the traffic (and customers)
                  </h3>
                  <p>
                    Book a free consultation with one of our SEO experts to see how
                    our services can help you outrank the competition!
                  </p>
                </div>
                <div className="right_image">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428489/business_c2zwfy.png' alt="competitors all the traffic" title='competitors all the traffic' />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423798/whatsapp_yiaqit.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
        </button>
        <button onClick={callHandler}>
          <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739423855/telephone_bcbfsw.png' alt="call-icon" title="call-icon" />
        </button>

      </div>
      <Footer />
    </>
  )
}

export default SeoComponent;
