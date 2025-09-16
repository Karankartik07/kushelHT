"use client";
import "@splidejs/react-splide/css";
import Head from 'next/head';
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import '../components/Home/slider/NewSlider.css';
import '../globals.css';
// import data from "../data/data";
import Image from "next/image";
import Slider from "react-slick";
import IndustriesFAQ from "../COMMON/IndustriesFAQ";
import Website from "./Home/HomeForm";

const Ankitcrouser = [
  {
    // rightitle: "Visit link",
    svgleft: (
      <svg
        width="75"
        height="54"
        viewBox="0 0 101 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.24 29.872C50.24 35.504 49.152 40.528 46.976 44.944C44.864 49.296 41.92 52.72 38.144 55.216C34.432 57.712 30.208 58.96 25.472 58.96C20.736 58.96 16.48 57.712 12.704 55.216C8.992 52.72 6.048 49.296 3.872 44.944C1.76 40.528 0.704 35.504 0.704 29.872C0.704 24.24 1.76 19.248 3.872 14.896C6.048 10.48 8.992 7.024 12.704 4.528C16.48 1.968 20.736 0.688 25.472 0.688C30.208 0.688 34.432 1.968 38.144 4.528C41.92 7.024 44.864 10.48 46.976 14.896C49.152 19.248 50.24 24.24 50.24 29.872ZM37.28 29.872C37.28 26.416 36.768 23.408 35.744 20.848C34.784 18.224 33.408 16.176 31.616 14.704C29.824 13.232 27.776 12.496 25.472 12.496C23.104 12.496 21.024 13.232 19.232 14.704C17.44 16.176 16.032 18.224 15.008 20.848C14.048 23.408 13.568 26.416 13.568 29.872C13.568 33.328 14.048 36.336 15.008 38.896C16.032 41.456 17.44 43.472 19.232 44.944C21.024 46.416 23.104 47.152 25.472 47.152C27.776 47.152 29.792 46.416 31.52 44.944C33.312 43.472 34.72 41.456 35.744 38.896C36.768 36.272 37.28 33.264 37.28 29.872ZM100.089 46.384V58H61.1128V46.384H74.7448V17.296C74.1688 18.064 73.2728 18.864 72.0568 19.696C70.8408 20.464 69.4648 21.2 67.9288 21.904C66.3928 22.608 64.8568 23.184 63.3208 23.632C61.7848 24.08 60.4088 24.304 59.1928 24.304V12.304C60.3448 12.304 61.7208 11.952 63.3208 11.248C64.9848 10.48 66.6168 9.584 68.2168 8.56C69.8808 7.536 71.2888 6.544 72.4408 5.584C73.6568 4.56 74.4248 3.76 74.7448 3.184H87.8968V46.384H100.089Z"
          fill="#C6C6C7"
        />
      </svg>
    ),
    leftitle: "Top Brass Tactical",
    quote:
      "Top Brass resolutely back the front-line hero. We are spirited supporters of the 2nd Amendment. Moreover, we proclaim the values of diligence, fairness, and the standard American demeanour.",
    // rightimg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739430318/topbrasstactical_x4lygw.png',
    rightimg: 'https://res.cloudinary.com/dqjbzgksw/image/upload/f_auto,q_auto,w_1080/v1748249452/1_c2jrzl.webp',
    link: "/topbrasstactical",
    // target: "_blank"
  },
  {
    // rightitle: "Visit link",
    svgleft: (
      <svg
        width="75"
        height="55"
        viewBox="0 0 105 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.24 29.872C50.24 35.504 49.152 40.528 46.976 44.944C44.864 49.296 41.92 52.72 38.144 55.216C34.432 57.712 30.208 58.96 25.472 58.96C20.736 58.96 16.48 57.712 12.704 55.216C8.992 52.72 6.048 49.296 3.872 44.944C1.76 40.528 0.704 35.504 0.704 29.872C0.704 24.24 1.76 19.248 3.872 14.896C6.048 10.48 8.992 7.024 12.704 4.528C16.48 1.968 20.736 0.688 25.472 0.688C30.208 0.688 34.432 1.968 38.144 4.528C41.92 7.024 44.864 10.48 46.976 14.896C49.152 19.248 50.24 24.24 50.24 29.872ZM37.28 29.872C37.28 26.416 36.768 23.408 35.744 20.848C34.784 18.224 33.408 16.176 31.616 14.704C29.824 13.232 27.776 12.496 25.472 12.496C23.104 12.496 21.024 13.232 19.232 14.704C17.44 16.176 16.032 18.224 15.008 20.848C14.048 23.408 13.568 26.416 13.568 29.872C13.568 33.328 14.048 36.336 15.008 38.896C16.032 41.456 17.44 43.472 19.232 44.944C21.024 46.416 23.104 47.152 25.472 47.152C27.776 47.152 29.792 46.416 31.52 44.944C33.312 43.472 34.72 41.456 35.744 38.896C36.768 36.272 37.28 33.264 37.28 29.872ZM58.6168 58C58.6168 55.12 58.8408 52.528 59.2888 50.224C59.7368 47.92 60.5048 45.776 61.5928 43.792C62.7448 41.808 64.2808 39.952 66.2008 38.224C68.1848 36.432 70.6808 34.704 73.6888 33.04C76.3128 31.632 78.6168 30.416 80.6008 29.392C82.5848 28.304 84.2488 27.312 85.5928 26.416C87.0008 25.52 88.0568 24.624 88.7608 23.728C89.4648 22.768 89.8168 21.68 89.8168 20.464C89.8168 19.184 89.4648 18.032 88.7608 17.008C88.0568 15.92 87.0648 15.056 85.7848 14.416C84.5048 13.776 82.9048 13.456 80.9848 13.456C79.4488 13.456 78.0088 13.648 76.6648 14.032C75.3848 14.416 74.1688 14.96 73.0168 15.664C71.9288 16.368 70.9048 17.168 69.9448 18.064C68.9848 18.896 68.1208 19.792 67.3528 20.752L59.1928 11.344C60.0888 10.448 61.2728 9.488 62.7448 8.464C64.2808 7.376 66.0728 6.384 68.1208 5.488C70.2328 4.528 72.5368 3.76 75.0328 3.184C77.5928 2.544 80.3128 2.224 83.1927 2.224C87.5448 2.224 91.2568 2.928 94.3288 4.336C97.4008 5.68 99.7368 7.568 101.337 10C103.001 12.432 103.833 15.28 103.833 18.544C103.833 20.784 103.417 22.768 102.585 24.496C101.753 26.224 100.697 27.76 99.4168 29.104C98.1368 30.384 96.7288 31.536 95.1928 32.56C93.7208 33.584 92.2808 34.48 90.8728 35.248C88.8888 36.272 87.0968 37.232 85.4968 38.128C83.8968 38.96 82.4888 39.824 81.2728 40.72C80.0568 41.552 78.9688 42.416 78.0088 43.312C77.1128 44.208 76.3128 45.232 75.6088 46.384H104.889V58H58.6168Z"
          fill="#C6C6C7"
        />
      </svg>
    ),
    leftitle: "KICK-EEZ",
    quote:
      "KICK-EEZ® sells a wide selection of shotgun and rifle recoil pads and shooting supplies. Our products are proudly MADE IN AMERICA and utilize Sorbothane.",
    rightimg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179375/kickeez_vrv0rs.png',
    link: "/kick-eez",
    // target: "_blank"
  },
  {
    // rightitle: "Visit link",
    svgleft: (
      <svg
        width="75"
        height="55"
        viewBox="0 0 105 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.24 29.872C50.24 35.504 49.152 40.528 46.976 44.944C44.864 49.296 41.92 52.72 38.144 55.216C34.432 57.712 30.208 58.96 25.472 58.96C20.736 58.96 16.48 57.712 12.704 55.216C8.992 52.72 6.048 49.296 3.872 44.944C1.76 40.528 0.704 35.504 0.704 29.872C0.704 24.24 1.76 19.248 3.872 14.896C6.048 10.48 8.992 7.024 12.704 4.528C16.48 1.968 20.736 0.688 25.472 0.688C30.208 0.688 34.432 1.968 38.144 4.528C41.92 7.024 44.864 10.48 46.976 14.896C49.152 19.248 50.24 24.24 50.24 29.872ZM37.28 29.872C37.28 26.416 36.768 23.408 35.744 20.848C34.784 18.224 33.408 16.176 31.616 14.704C29.824 13.232 27.776 12.496 25.472 12.496C23.104 12.496 21.024 13.232 19.232 14.704C17.44 16.176 16.032 18.224 15.008 20.848C14.048 23.408 13.568 26.416 13.568 29.872C13.568 33.328 14.048 36.336 15.008 38.896C16.032 41.456 17.44 43.472 19.232 44.944C21.024 46.416 23.104 47.152 25.472 47.152C27.776 47.152 29.792 46.416 31.52 44.944C33.312 43.472 34.72 41.456 35.744 38.896C36.768 36.272 37.28 33.264 37.28 29.872ZM91.5448 35.344C94.2328 35.792 96.5688 36.816 98.5528 38.416C100.537 39.952 102.073 41.936 103.161 44.368C104.313 46.8 104.889 49.488 104.889 52.432C104.889 56.4 103.865 59.856 101.817 62.8C99.7688 65.744 96.8568 68.016 93.0808 69.616C89.3688 71.28 84.9848 72.112 79.9288 72.112C75.0648 72.112 70.7448 71.312 66.9688 69.712C63.2568 68.176 60.1528 65.904 57.6568 62.896L64.9528 53.776C66.6168 55.824 68.6008 57.424 70.9048 58.576C73.2728 59.792 76.1528 60.4 79.5448 60.4C83.4488 60.4 86.4248 59.6 88.4728 58C90.5208 56.464 91.5448 54.128 91.5448 50.992C91.5448 47.664 90.3608 45.104 87.9928 43.312C85.6248 41.52 82.0408 40.624 77.2408 40.624H74.5528V31.024H77.5288C81.4328 31.024 84.4728 30.128 86.6488 28.336C88.8888 26.544 90.0088 24.304 90.0088 21.616C90.0088 19.888 89.5928 18.448 88.7608 17.296C87.9288 16.144 86.7768 15.28 85.3048 14.704C83.8968 14.128 82.2327 13.84 80.3127 13.84C77.4328 13.84 74.8088 14.512 72.4408 15.856C70.0728 17.2 68.1528 19.088 66.6808 21.52L58.6168 12.496C59.9608 10.512 61.7848 8.816 64.0888 7.408C66.4568 5.936 69.1448 4.784 72.1528 3.952C75.2248 3.12 78.4248 2.704 81.7528 2.704C86.1048 2.704 89.9128 3.408 93.1768 4.816C96.5048 6.224 99.0968 8.208 100.953 10.768C102.809 13.328 103.737 16.304 103.737 19.696C103.737 22.192 103.225 24.56 102.201 26.8C101.177 29.04 99.7368 30.928 97.8808 32.464C96.0888 33.936 93.9768 34.896 91.5448 35.344Z"
          fill="#C6C6C7"
        />
      </svg>
    ),
    leftitle: "DigitalMnA",
    quote:
      "DigitalMnA is a full-service Merger and Acquisition company helping companies Sell and Buy assets by creating value.",
    rightimg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179410/digitalmna_znwlsh.png',
    link: "/digitalmna",
    // target: "_blank"
  },
  {
    // rightitle: "Visit link",
    svgleft: (
      <svg
        width="75"
        height="55"
        viewBox="0 0 107 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.24 29.872C50.24 35.504 49.152 40.528 46.976 44.944C44.864 49.296 41.92 52.72 38.144 55.216C34.432 57.712 30.208 58.96 25.472 58.96C20.736 58.96 16.48 57.712 12.704 55.216C8.992 52.72 6.048 49.296 3.872 44.944C1.76 40.528 0.704 35.504 0.704 29.872C0.704 24.24 1.76 19.248 3.872 14.896C6.048 10.48 8.992 7.024 12.704 4.528C16.48 1.968 20.736 0.688 25.472 0.688C30.208 0.688 34.432 1.968 38.144 4.528C41.92 7.024 44.864 10.48 46.976 14.896C49.152 19.248 50.24 24.24 50.24 29.872ZM37.28 29.872C37.28 26.416 36.768 23.408 35.744 20.848C34.784 18.224 33.408 16.176 31.616 14.704C29.824 13.232 27.776 12.496 25.472 12.496C23.104 12.496 21.024 13.232 19.232 14.704C17.44 16.176 16.032 18.224 15.008 20.848C14.048 23.408 13.568 26.416 13.568 29.872C13.568 33.328 14.048 36.336 15.008 38.896C16.032 41.456 17.44 43.472 19.232 44.944C21.024 46.416 23.104 47.152 25.472 47.152C27.776 47.152 29.792 46.416 31.52 44.944C33.312 43.472 34.72 41.456 35.744 38.896C36.768 36.272 37.28 33.264 37.28 29.872ZM84.9208 70.192V55.888H56.8888V44.464L89.0488 3.184H97.7848V44.368H106.233V55.888H97.7848V70.192H84.9208ZM69.7528 44.368H86.3608V22.672L69.7528 44.368Z"
          fill="#C6C6C7"
        />
      </svg>
    ),
    leftitle: "Slides365",
    quote:
      "Slides365, strive to help people tell their story effectively. Your invisible friend inside the PowerPoint helps you create the Professional Presentations. We are working towards creating an experience for you telling your story.",
    rightimg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179452/slide365_obxkik.png',
    link: "/slides365",
    // target: "_blank"
  },
  // {
  //   // rightitle: "Visit link",
  //   svgleft: (
  //     <svg
  //       width="75"
  //       height="55"
  //       viewBox="0 0 106 73"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M50.24 29.872C50.24 35.504 49.152 40.528 46.976 44.944C44.864 49.296 41.92 52.72 38.144 55.216C34.432 57.712 30.208 58.96 25.472 58.96C20.736 58.96 16.48 57.712 12.704 55.216C8.992 52.72 6.048 49.296 3.872 44.944C1.76 40.528 0.704 35.504 0.704 29.872C0.704 24.24 1.76 19.248 3.872 14.896C6.048 10.48 8.992 7.024 12.704 4.528C16.48 1.968 20.736 0.688 25.472 0.688C30.208 0.688 34.432 1.968 38.144 4.528C41.92 7.024 44.864 10.48 46.976 14.896C49.152 19.248 50.24 24.24 50.24 29.872ZM37.28 29.872C37.28 26.416 36.768 23.408 35.744 20.848C34.784 18.224 33.408 16.176 31.616 14.704C29.824 13.232 27.776 12.496 25.472 12.496C23.104 12.496 21.024 13.232 19.232 14.704C17.44 16.176 16.032 18.224 15.008 20.848C14.048 23.408 13.568 26.416 13.568 29.872C13.568 33.328 14.048 36.336 15.008 38.896C16.032 41.456 17.44 43.472 19.232 44.944C21.024 46.416 23.104 47.152 25.472 47.152C27.776 47.152 29.792 46.416 31.52 44.944C33.312 43.472 34.72 41.456 35.744 38.896C36.768 36.272 37.28 33.264 37.28 29.872ZM80.1208 72.304C75.1928 72.304 70.7448 71.248 66.7768 69.136C62.8088 67.024 59.8008 64.144 57.7528 60.496L65.1448 52.816C66.9368 55.312 69.1768 57.296 71.8648 58.768C74.5528 60.24 77.3368 60.976 80.2168 60.976C82.5208 60.976 84.5368 60.496 86.2648 59.536C88.0568 58.576 89.4648 57.232 90.4888 55.504C91.5128 53.776 92.0248 51.792 92.0248 49.552C92.0248 47.312 91.5448 45.36 90.5848 43.696C89.6248 42.032 88.3128 40.752 86.6488 39.856C84.9848 38.896 83.0968 38.416 80.9848 38.416C78.8728 38.416 76.8888 38.896 75.0328 39.856C73.2408 40.752 71.8008 42.064 70.7128 43.792H59.4808L67.3528 3.184H100.953V14.896H76.6648L73.8808 30.16C74.7128 29.392 75.8648 28.752 77.3368 28.24C78.8088 27.664 80.6328 27.376 82.8088 27.376C87.0968 27.376 90.9368 28.304 94.3288 30.16C97.7208 32.016 100.377 34.608 102.297 37.936C104.217 41.2 105.177 44.976 105.177 49.264C105.177 53.808 104.089 57.808 101.913 61.264C99.7368 64.784 96.7608 67.504 92.9848 69.424C89.2088 71.344 84.9208 72.304 80.1208 72.304Z"
  //         fill="#C6C6C7"
  //       />
  //     </svg>
  //   ),
  //   leftitle: "Building Network",
  //   quote:
  //     "The world's top contractors for superior project collaboration. Most trusted reputation and customer experience platform for brands & local businesses",
  //   rightimg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179481/btob_wzfkcg.png',
  //   link: "https://buildlinknetwork.com/",
  //   target: "_blank"
  // },
];

const slider1Images = [
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175877/006_1_nxufng.svg', alt: "Lafayette Shooters project logo by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175921/013_1_ol5byc.svg', alt: "2nd Amendment project logo by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739175957/015_1_zhd61k.svg', alt: "KICK-EEZ image for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176045/017_1_tiv6mk.svg', alt: "Black Rhino image for ecommerce website development by Kushel Digi Solutions", className: 'black-rhino-img' },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176269/92945677531_1_tb9rkt.svg', alt: "CodePXLProject logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png', alt: "Sites and Scopes Project logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176371/Group_2_1_zx1tqa.svg', alt: "MadFish Solutions project logo by Kushel Digi Solutions", className: 'madfish-img' },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176422/Group_2_2_yypji2.svg', alt: "Slide365 project logo by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176477/Group_3_1_xq1tod.svg', alt: "Rifle Supply logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/Slide365_Logo_1_sgrncf.png', className: 'ride-img', alt: "Ride ready Logo for ecommerce website development  by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/70904_228x204_1_l5j13v.png', className: 'armore-img', alt: "Project logo for ecommerce website development by Kushel Digi Solutions" },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176591/Layer_1_4_sqlymy.svg', alt: "Serv A Pure logo for ecommerce website development " },
  { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176714/images_1_xmbtva.svg', alt: "GRACO CORPORATION for ecommerce website development" },
];

// const slider2Images = [
//   { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176477/Group_3_1_xq1tod.svg', alt: "Rifle Supply logo for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/Slide365_Logo_1_sgrncf.png', className: 'ride-img', alt: "Ride ready Logo for ecommerce website development  by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/70904_228x204_1_l5j13v.png', className: 'armore-img', alt: "Project logo for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176591/Layer_1_4_sqlymy.svg', alt: "Serv A Pure logo for ecommerce website development " },
//   { src: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1739176714/images_1_xmbtva.svg', alt: "GRACO CORPORATION for ecommerce website development" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/topbrasstactical_miqpat.png' },
//   { src: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750058139/Group_1171281500_kye3hk.png', alt: "Top Brasst Logo for ecommerce website development " },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/solenoid_f5nbub.png', alt: "SoleSolenoid Ninja Logo for ecommerce website development " },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/typhoon_sorthk.png', alt: "Typhoon Defense Logo for ecommerce website development " },
// ];

// const slider3Images = [
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/bobcat_fo7ruq.png', alt: "Bobcat Armament logo for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/four_sob0lr.png', alt: "Four Oaks Farm logo for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/landf_swe3ad.jpg', alt: "Land Big FIsh logo for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743672316/Group_1171280670_1_fsujvq.png', alt: "Survival Mode Tactical logo for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png', alt: "Lafayette Shooters Logo image for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png', alt: "2nd Amendment  Logo image for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png', alt: "KICK-EEZ Logo image for ecommerce website development by Kushel Digi Solutions" },
//   { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png', alt: "CodePXL image for ecommerce website development by Kushel Digi Solutions" },
// ];

function Industries() {
  const [Page, setPage] = useState(4);
  const [Page1, setPage1] = useState(2);
  const [Page2, setPage2] = useState(1);
  const data = [];
  const [cardItem] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = cardItem?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, cardItem]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Ankitcrouser.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Ankitcrouser.length) % Ankitcrouser.length
    );
  };

  const currentItem = Ankitcrouser[currentIndex];

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };

  const [selectOurSer, setSelectOurSer] = useState({
    index: 0,
    whichOne: 1,
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [autoplaySpeed, setAutoplaySpeed] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplaySpeed(4000);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const commonSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: autoplaySpeed,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnHover: false,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const renderSlider = (images, rtl = false) => (
    <Slider {...commonSettings} rtl={rtl} className="custom-slider">
      {images.map((img, index) => (
        <div className="slide-item" key={index}>
          <Image
            width={298}
            height={173}
            loading="lazy"
            src={img.src}
            alt={img.alt}
            className={img.className || ''}
          />
        </div>
      ))}
    </Slider>
  );

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
      {/* <Helmet> */}
      <link rel="canonical" href="https://www.kusheldigi.com/industries" />
      {/* </Helmet> */}
      <div className="ser-main">
        <div className="indus-banner">
          <div className="indus-container">
            <div className="indus-content">
              <div className="indus-left-content">
                <h1>Revolutionizing Industries with Kushel Digi Solutions</h1>
                <p>
                  Healthcare | Education | Banking | Entertainment Wealth <br />{" "}
                  Block Chain | Retails | Online Payment
                </p>
                <a href="/contact-us">
                  <div className="indus-button-group">
                    <button type="button">Let's Connect</button>
                  </div>
                </a>
              </div>
              <div className="indus-right-image">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724930071/landImage.d48ec8dc6e76a4f980db_gnfiia.webp"
                  alt="banner image"
                  title="banner image"
                // width={478} height={478}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="indus-banner1">
          <div className="indus-container1">
            <div className="indus-content1">
              <h2>What we can do for you?</h2>
              <p>
                {" "}
                Our team of skilled professionals can strengthen your digital
                journey by providing excellent web solutions to elevate your
                online presence and achieve your digital goals
              </p>
            </div>
            <div className="indus-cards">
              <div className="indus-card-main">
                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 84 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3391_93)">
                      <path
                        d="M42.8299 84C42.283 84 41.7361 84 41.1892 84C40.8983 83.8491 40.6095 83.6937 40.3164 83.5472C27.537 77.1553 14.7599 70.7612 1.97392 64.3803C0.895478 63.8422 0.110166 63.1466 0.114541 61.8406C0.118916 60.5347 0.908603 59.8369 1.9936 59.3119C3.88798 58.3975 5.76048 57.4394 7.63954 56.4922C7.82329 56.3981 8.12079 56.3631 8.1186 56.1072C8.11642 55.8534 7.82329 55.8162 7.63735 55.7222C5.71017 54.7509 3.78298 53.7797 1.84485 52.8281C0.810166 52.3206 0.116728 51.5965 0.114541 50.3737C0.112353 49.1531 0.792666 48.4203 1.82954 47.9106C3.71735 46.9831 5.59642 46.0359 7.47329 45.0887C7.70954 44.9706 8.09017 44.9269 8.10767 44.6425C8.12954 44.3275 7.7336 44.2969 7.50392 44.1809C5.55485 43.1922 3.59267 42.2297 1.64579 41.2344C0.460166 40.6284 -0.0713967 39.62 0.138603 38.4212C0.315791 37.4106 1.00267 36.8353 1.87985 36.3978C7.60235 33.5497 13.3161 30.6819 19.0408 27.8337C19.5767 27.5669 19.9989 27.265 20.2002 26.6591C20.3774 26.1253 20.7799 25.6791 21.2961 25.4909C22.8667 24.9178 23.1358 23.8219 23.1424 22.2447C23.1511 20.5647 22.8514 19.4512 21.1977 18.7031C19.9224 18.1278 19.5724 16.6097 20.2592 15.3781C21.8824 12.4666 23.5492 9.57905 25.2533 6.71562C25.973 5.50374 27.3402 5.18874 28.6242 5.80999C29.0158 6.0003 29.4095 6.20374 29.7639 6.4553C30.3545 6.87312 30.8642 6.88405 31.4636 6.4203C32.0433 5.97187 32.682 5.55187 33.3624 5.3003C34.3599 4.9328 34.7252 4.30718 34.5545 3.30093C34.537 3.19374 34.5611 3.08218 34.5502 2.9728C34.4255 1.58374 35.0008 0.597178 36.2564 -0.00219727C40.0845 -0.00219727 43.9127 -0.00219727 47.7408 -0.00219727C48.7624 0.514053 49.5652 1.27312 49.4142 2.47843C49.2064 4.13437 49.9042 4.92405 51.3239 5.74655C52.818 6.61062 53.9227 6.8928 55.4058 5.8428C56.493 5.0728 57.9783 5.46874 58.652 6.59093C60.413 9.5178 62.1214 12.4775 63.7795 15.4656C64.4227 16.625 63.9852 17.9484 62.8761 18.7075C62.4473 19.0006 61.9967 19.2609 61.5373 19.5016C61.0692 19.7466 60.8767 20.09 60.903 20.6237C60.9423 21.4703 61.0036 22.3278 60.9008 23.1634C60.7805 24.1456 61.1742 24.6881 62.0208 25.0819C62.7645 25.4297 63.517 25.8475 63.8123 26.6787C64.0289 27.2869 64.4555 27.5734 64.987 27.8381C70.6877 30.6753 76.3773 33.5322 82.0802 36.3694C83.1323 36.8922 83.887 37.5922 83.8958 38.8566C83.9067 40.1209 83.1805 40.8516 82.1217 41.3722C80.3061 42.2625 78.4992 43.1681 76.6923 44.0803C76.408 44.2247 75.9377 44.2837 75.918 44.6009C75.8961 44.9531 76.3795 44.9947 76.6552 45.1369C78.4336 46.0425 80.212 46.9481 82.0058 47.8166C83.0864 48.3394 83.8848 49.035 83.8958 50.3409C83.9067 51.6884 83.082 52.3928 81.9752 52.9287C80.1311 53.8212 78.3045 54.7531 76.4758 55.6762C76.2636 55.7834 75.9136 55.825 75.9048 56.0809C75.8939 56.4047 76.2789 56.4309 76.5064 56.5469C78.3833 57.4984 80.2645 58.4434 82.1523 59.3731C83.1827 59.8806 83.887 60.5981 83.898 61.8231C83.9089 63.0875 83.1827 63.8159 82.1261 64.3387C79.7002 65.5375 77.283 66.7537 74.8636 67.9634C64.1886 73.3119 53.5092 78.6559 42.8299 84ZM75.4236 38.8894C75.3295 38.6466 75.0736 38.5831 74.8658 38.4781C70.8102 36.4459 66.748 34.4291 62.7033 32.3772C62.1105 32.0775 61.8502 32.235 61.5549 32.7665C60.6952 34.3197 59.8048 35.8597 58.8927 37.3822C58.0461 38.7931 56.587 39.2853 55.2548 38.3709C53.8942 37.4369 52.923 37.6534 51.5361 38.4344C49.9983 39.3006 49.1824 40.1406 49.4055 41.9956C49.5564 43.2425 48.408 44.3231 47.148 44.3384C43.7311 44.3778 40.3142 44.3756 36.8995 44.3428C35.668 44.3319 34.4692 43.2906 34.6224 42.1094C34.8849 40.0925 33.9202 39.2197 32.2949 38.3272C31.0283 37.6337 30.1686 37.4653 28.9392 38.2834C27.4167 39.2962 25.9861 38.8369 25.0564 37.2684C24.1945 35.8094 23.3261 34.3525 22.5233 32.8628C22.1777 32.2197 21.8736 32.0884 21.1933 32.4384C17.6911 34.2322 14.1649 35.9734 10.6452 37.7322C10.107 38.0012 9.56892 38.2659 9.03517 38.5416C8.87329 38.6247 8.61954 38.6597 8.63485 38.8915C8.64798 39.1059 8.89735 39.1387 9.05704 39.235C9.1511 39.2919 9.25173 39.3334 9.35017 39.3837C19.9552 44.6841 30.5645 49.98 41.1608 55.3022C41.7995 55.6237 42.2895 55.5953 42.913 55.2825C48.4977 52.4628 54.0999 49.6737 59.6955 46.8759C64.7289 44.3581 69.7645 41.8425 74.7958 39.3203C75.008 39.2131 75.2617 39.1519 75.4236 38.8894ZM30.9714 31.6728C31.6845 31.7122 32.2817 32.0075 32.8133 32.4756C34.2461 33.7356 35.8627 34.674 37.6717 35.2997C39.0827 35.7897 39.5989 36.5728 39.612 38.0778C39.6142 38.2134 39.623 38.3512 39.612 38.4869C39.5617 39.0797 39.8177 39.3356 40.4236 39.3159C41.3249 39.2897 42.2283 39.3094 43.1295 39.3094C44.3961 39.3094 44.3961 39.3072 44.4092 38.0537C44.4224 36.6144 44.9211 35.8116 46.2227 35.3566C48.1345 34.6894 49.8342 33.6875 51.3567 32.3575C52.2799 31.5525 53.3145 31.4672 54.4017 32.0359C54.5702 32.1256 54.7473 32.2066 54.9005 32.3181C55.432 32.7119 55.7908 32.6572 56.108 32.0162C56.5061 31.2091 56.9983 30.4478 57.4511 29.6691C58.0242 28.6803 58.0242 28.6803 57.0377 28.0875C55.712 27.2934 55.3248 26.4797 55.5742 24.9441C55.8105 23.4828 55.9855 22.0237 55.747 20.545C55.6814 20.1403 55.6311 19.7356 55.5677 19.3309C55.3336 17.8062 55.7186 16.9903 57.0508 16.1941C58.0264 15.6122 58.0264 15.6122 57.4423 14.6059C57.0311 13.8972 56.622 13.1862 56.2108 12.4753C55.6705 11.5434 55.6705 11.5434 54.743 12.0619C53.2577 12.8931 52.3892 12.8166 51.0899 11.7053C49.703 10.5197 48.1586 9.61843 46.4327 9.01905C44.9255 8.49624 44.4224 7.7503 44.4092 6.13374C44.4092 6.02437 44.4005 5.91499 44.4092 5.80562C44.4595 5.21499 44.208 4.95687 43.5998 4.97437C42.6986 5.00062 41.7952 4.98093 40.8939 4.98093C39.6252 4.98093 39.6252 4.98312 39.612 6.23655C39.5989 7.67374 39.1024 8.47874 37.8008 8.93812C35.8911 9.60968 34.187 10.6006 32.6645 11.9306C31.7152 12.7575 30.652 12.8275 29.5474 12.215C29.3811 12.1231 29.2039 12.0422 29.0508 11.9306C28.5695 11.5784 28.248 11.6419 27.9592 12.2041C27.5217 13.0528 27.012 13.8644 26.533 14.6934C26.0014 15.6122 26.0014 15.6122 26.9202 16.1634C28.3333 17.01 28.7314 17.8041 28.4361 19.4316C28.1364 21.0875 28.0664 22.7391 28.3617 24.3994C28.7511 26.5781 28.517 27.16 26.6117 28.2953C26.0911 28.6059 26.0955 28.8837 26.3755 29.3409C26.9311 30.2509 27.4714 31.1697 27.9724 32.1103C28.2414 32.6134 28.5236 32.7141 29.0027 32.3969C29.5955 32.0031 30.2277 31.675 30.9714 31.6728ZM14.0358 47.565C13.8695 47.6372 13.6399 47.7225 13.4211 47.8297C12.0517 48.5122 10.6824 49.1925 9.31954 49.8903C9.06798 50.0194 8.63923 50.0456 8.65235 50.3934C8.66329 50.6625 9.05485 50.715 9.29329 50.8331C19.9464 56.1641 30.6017 61.4884 41.2483 66.8281C41.793 67.1016 42.2348 67.1081 42.7795 66.8303C45.8967 65.2444 49.0292 63.6912 52.1574 62.1272C59.6364 58.3887 67.1133 54.6503 74.5902 50.9053C74.8745 50.7631 75.3602 50.7019 75.3624 50.3891C75.3667 50.0019 74.8527 49.9691 74.553 49.8137C73.2908 49.1597 72.0002 48.5647 70.7511 47.8887C70.1583 47.5694 69.677 47.5781 69.0733 47.8822C60.6755 52.1019 52.258 56.2822 43.8689 60.5172C42.5739 61.1712 41.4495 61.1712 40.1524 60.515C31.7874 56.2887 23.3961 52.115 15.0136 47.9259C14.7227 47.7816 14.447 47.5912 14.0358 47.565ZM41.9855 78.6275C42.1933 78.5466 42.4011 78.4831 42.5936 78.3891C43.2564 78.0653 43.9149 77.7328 44.5755 77.4025C54.6445 72.3691 64.7136 67.3356 74.7783 62.2934C75.0058 62.1797 75.3908 62.1534 75.3777 61.8253C75.3667 61.5716 75.0189 61.5256 74.8067 61.4184C73.4658 60.7403 72.103 60.1016 70.7839 59.3862C70.1605 59.0472 69.6617 59.0691 69.0317 59.3862C60.6602 63.5972 52.2667 67.7622 43.9017 71.9884C42.5761 72.6578 41.4364 72.6491 40.1108 71.9797C31.748 67.7512 23.3524 63.5841 14.9786 59.3775C14.3836 59.0778 13.9002 59.0384 13.3008 59.3622C11.9533 60.0862 10.5686 60.7381 9.2036 61.4272C8.9936 61.5322 8.65454 61.5737 8.64798 61.845C8.64142 62.125 8.98485 62.1644 9.19267 62.2694C19.8939 67.6244 30.5952 72.9772 41.3008 78.3256C41.513 78.435 41.7427 78.5225 41.9855 78.6275Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M32.9248 22.1703C32.9204 17.0734 36.9323 13.0615 42.0292 13.0637C47.0779 13.0659 51.092 17.08 51.0942 22.1265C51.0986 27.2234 47.0867 31.2375 41.9898 31.2353C36.9498 31.2309 32.927 27.2103 32.9248 22.1703ZM46.0301 22.1134C45.9929 19.9368 44.0832 18.0665 41.9548 18.1256C39.7695 18.1847 37.9123 20.1031 37.9889 22.2228C38.0676 24.3884 39.9029 26.1843 42.0248 26.1712C44.1904 26.1559 46.0673 24.2572 46.0301 22.1134Z"
                        fill="#0E151D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_93">
                        <rect
                          width="83.8075"
                          height="84"
                          fill="white"
                          transform="translate(0.0966797)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>Mobile App Development</p>
                </div>

                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 86 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3391_103)">
                      <path
                        d="M85.7185 8.59052C85.7185 26.8518 85.7185 45.1215 85.7185 63.3827C85.676 63.5443 85.6249 63.706 85.5909 63.8676C84.4512 68.9368 79.8667 72.1264 75.1632 71.9988C70.196 71.8627 65.2203 71.9818 60.2446 71.9563C59.4791 71.9563 59.2155 72.2114 59.2325 72.9769C59.275 74.6185 59.2665 76.26 59.2325 77.9016C59.2155 78.633 59.4961 78.8797 60.2106 78.8712C62.405 78.8372 64.5994 78.8542 66.7938 78.8627C68.4779 78.8712 69.5836 79.8663 69.6006 81.3888C69.6176 82.9538 68.5119 84 66.7938 84C50.9566 84 35.1195 84 19.2738 84C17.5472 84 16.4415 82.9623 16.45 81.4058C16.4585 79.8834 17.5727 78.8712 19.2483 78.8712C21.3916 78.8627 23.5265 78.8712 25.6699 78.8712C26.7926 78.8712 26.8181 78.8457 26.8181 77.6804C26.8181 76.209 26.8181 74.729 26.8181 73.2576C26.8181 71.9903 26.8181 71.9903 25.5848 71.9903C20.4731 71.9903 15.3613 72.0073 10.2495 71.9818C4.89104 71.9392 0.298088 67.3463 0.289582 61.9708C0.281077 44.6537 0.281077 27.3366 0.289582 10.0194C0.289582 4.59295 4.88253 0.00850547 10.309 0.00850547C32.1255 0 53.9336 0.00850547 75.7501 0C77.2215 0 78.6164 0.331713 79.9348 0.969623C83.1328 2.53463 84.97 5.14581 85.7185 8.59052ZM42.9955 56.1361C55.1669 56.1361 67.3382 56.1361 79.5095 56.1446C80.1899 56.1446 80.6662 56.1276 80.6662 55.2005C80.6407 40.3329 80.6577 25.4654 80.6407 10.5978C80.6407 7.32321 78.4378 5.15431 75.1632 5.15431C53.7379 5.14581 32.3127 5.14581 10.8874 5.15431C9.67111 5.15431 8.51437 5.4435 7.51923 6.18348C5.95422 7.34872 5.40987 8.98177 5.40987 10.8615C5.40987 25.5589 5.40987 40.2649 5.40987 54.9623C5.40987 56.1361 5.40987 56.1361 6.64317 56.1361C18.7635 56.1361 30.8838 56.1361 42.9955 56.1361ZM43.0721 61.2734C30.9943 61.2734 18.908 61.2734 6.83029 61.2734C6.54961 61.2734 6.27743 61.2734 5.99675 61.2819C5.57148 61.2904 5.40137 61.52 5.4439 61.9283C5.63952 63.723 6.40501 65.1604 7.99554 66.096C9.01619 66.6914 10.1304 66.8275 11.2872 66.8275C32.4488 66.8275 53.6189 66.8275 74.7805 66.8275C75.0016 66.8275 75.2227 66.836 75.4439 66.819C78.1146 66.6914 80.0964 65.0328 80.5046 62.5832C80.7258 61.2734 80.7258 61.2734 79.3989 61.2734C67.2956 61.2734 55.1839 61.2734 43.0721 61.2734ZM43.0381 78.8542C46.3722 78.8542 49.7063 78.8372 53.0405 78.8627C53.772 78.8712 54.0186 78.6075 54.0016 77.8846C53.9676 76.2175 53.9676 74.5419 54.0016 72.8748C54.0101 72.1859 53.7635 71.9477 53.0745 71.9477C46.3807 71.9648 39.6869 71.9648 32.9931 71.9477C32.3042 71.9477 32.0575 72.1944 32.0745 72.8748C32.1085 74.5164 32.117 76.158 32.066 77.7995C32.0405 78.6075 32.3212 78.8627 33.1207 78.8542C36.4293 78.8372 39.7294 78.8542 43.0381 78.8542Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M44.79 19.3839C48.5154 19.3839 52.2323 19.3754 55.9577 19.3839C58.7049 19.3924 60.4485 21.5698 59.7766 24.2575C58.6454 28.7314 57.4631 33.1968 56.2724 37.6536C55.762 39.5504 54.3756 40.5625 52.4109 40.5625C45.3003 40.571 38.1897 40.571 31.0792 40.5625C28.6806 40.5625 27.1411 38.9975 27.1411 36.5735C27.1326 30.0583 27.1411 23.5516 27.1411 17.0364C27.1411 15.8371 27.1411 15.8371 25.9249 15.8371C24.564 15.8371 23.2031 15.8541 21.8422 15.8286C20.3453 15.8031 19.2055 14.6974 19.1885 13.277C19.18 11.8651 20.3198 10.7083 21.8082 10.6998C24.4449 10.6828 27.0816 10.6743 29.7268 10.6998C31.1982 10.7168 32.2359 11.763 32.2614 13.2344C32.2869 14.9355 32.304 16.6281 32.2529 18.3292C32.2274 19.1287 32.4826 19.4009 33.2991 19.3924C37.1266 19.3584 40.954 19.3839 44.79 19.3839ZM43.3015 24.5212C39.9419 24.5212 36.5822 24.5382 33.2225 24.5127C32.4996 24.5042 32.2444 24.7509 32.2529 25.4823C32.2784 28.4592 32.2869 31.4361 32.2529 34.4131C32.2444 35.1615 32.4656 35.4422 33.2481 35.4422C39.0233 35.4167 44.7985 35.4167 50.5737 35.4422C51.2456 35.4422 51.5688 35.2126 51.7304 34.5577C52.5044 31.5127 53.304 28.4762 54.1205 25.4398C54.3161 24.7168 54.1035 24.5127 53.3805 24.5212C50.0208 24.5382 46.6612 24.5212 43.3015 24.5212Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M33.0863 45.4532C33.7752 45.4532 34.4727 45.4277 35.1616 45.4532C36.5565 45.5128 37.5857 46.61 37.5942 48.0049C37.5942 49.3998 36.5735 50.531 35.1786 50.565C33.7412 50.6075 32.2953 50.6075 30.8579 50.565C29.4715 50.5225 28.4593 49.3743 28.4678 47.9794C28.4763 46.6185 29.497 45.5213 30.8409 45.4532C31.5893 45.4192 32.3378 45.4532 33.0863 45.4532Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M50.3695 50.582C49.6806 50.582 48.9831 50.599 48.2942 50.582C46.8483 50.5309 45.8021 49.4337 45.8106 47.9963C45.8191 46.6014 46.8568 45.4957 48.2517 45.4617C49.6636 45.4277 51.0755 45.4277 52.4874 45.4617C53.8823 45.4957 54.92 46.6099 54.9285 47.9963C54.937 49.4337 53.8908 50.5309 52.4449 50.582C51.7559 50.599 51.0585 50.582 50.3695 50.582Z"
                        fill="#0E151D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_103">
                        <rect
                          width="85.4374"
                          height="84"
                          fill="white"
                          transform="translate(0.28125)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>E-Commerce Development</p>
                </div>

                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 96 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3391_115)">
                      <path
                        d="M95.4076 3.44712C95.4076 24.339 95.4076 45.2238 95.4076 66.1157C94.4376 68.6975 92.5047 69.7442 89.8392 69.6535C89.4694 69.6395 89.0995 69.6535 88.7297 69.6535C79.6654 69.6535 70.5941 69.6535 61.5298 69.6535C60.3575 69.6535 60.3087 69.7232 60.7134 70.7769C61.5647 72.9959 62.437 75.2079 63.2743 77.4338C63.4976 78.0339 63.8395 78.327 64.5094 78.2921C65.3677 78.2502 66.2329 78.2642 67.0982 78.2921C68.3263 78.334 69.2125 78.9341 69.687 80.0645C70.5034 82.0044 69.1218 83.9791 66.9098 83.9861C59.7574 84.007 52.5981 83.9931 45.4458 83.9931C39.989 83.9931 34.5323 84 29.0686 83.9791C27.38 83.9721 26.1519 82.751 26.1449 81.1531C26.1379 79.5691 27.38 78.327 29.0477 78.2851C29.8501 78.2642 30.6526 78.2363 31.4551 78.2921C32.1947 78.341 32.5715 78.0409 32.8227 77.3571C33.6252 75.1869 34.4835 73.0308 35.3138 70.8746C35.7674 69.6953 35.7465 69.6535 34.4556 69.6535C26.2216 69.6535 17.9877 69.6535 9.75379 69.6535C8.36518 69.6535 6.97658 69.6814 5.58798 69.6395C2.54561 69.5418 0.598775 67.6299 0.591797 64.7271C0.591797 44.7633 0.591797 24.8065 0.591797 4.8427C0.591797 4.38216 0.605753 3.92162 0.731355 3.46805C1.35937 1.2421 3.13175 0.0279474 5.80429 0.0279474C33.8694 0.0279474 61.9276 0.0419032 89.9927 3.58289e-05C92.6513 -0.00694207 94.4237 1.00485 95.4076 3.44712ZM48.0136 51.0434C61.488 51.0434 74.9623 51.0434 88.4366 51.0434C89.7764 51.0434 89.7764 51.0364 89.7764 49.7036C89.7764 35.4897 89.7764 21.2826 89.7764 7.06865C89.7764 5.74285 89.7764 5.74285 88.4227 5.74285C61.5019 5.74285 34.5881 5.74285 7.66739 5.74285C6.27879 5.74285 6.27879 5.74285 6.27879 7.12448C6.27879 21.3036 6.27879 35.4827 6.27879 49.6688C6.27879 51.0434 6.27879 51.0434 7.67437 51.0434C21.1278 51.0434 34.5742 51.0434 48.0136 51.0434ZM47.9857 63.8269C58.1595 63.8269 68.3403 63.8269 78.514 63.8269C81.8774 63.8269 85.2338 63.8269 88.5971 63.8269C89.7555 63.8269 89.7764 63.792 89.7834 62.6128C89.7903 61.0986 89.7903 59.5844 89.7834 58.0701C89.7834 56.9397 89.7275 56.8909 88.5622 56.8839C88.3738 56.8839 88.1924 56.8839 88.004 56.8839C61.3624 56.8839 34.7137 56.8839 8.07211 56.8839C7.79299 56.8839 7.51388 56.9048 7.24174 56.8839C6.51604 56.8281 6.26483 57.177 6.27879 57.8817C6.31368 59.2424 6.28577 60.6031 6.28577 61.9568C6.28577 63.9525 6.10434 63.8339 8.11398 63.8339C21.3999 63.8269 34.6928 63.8269 47.9857 63.8269ZM48.0415 78.2712C50.8467 78.2712 53.6448 78.2572 56.4499 78.2782C57.1896 78.2851 57.378 78.0898 57.0919 77.3641C56.1778 75.0753 55.2986 72.7726 54.4263 70.4629C54.21 69.8907 53.8681 69.6465 53.254 69.6535C49.7721 69.6674 46.2971 69.6674 42.8151 69.6535C42.201 69.6535 41.8661 69.9047 41.6498 70.4769C40.7845 72.7865 39.9053 75.0893 38.9842 77.378C38.6842 78.1246 38.9214 78.2921 39.6332 78.2851C42.4383 78.2572 45.2364 78.2712 48.0415 78.2712Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M76.0433 28.4768C76.0782 29.335 75.7363 30.0398 75.1432 30.6329C71.6961 34.0382 68.263 37.4573 64.788 40.8416C63.4203 42.1744 61.6688 42.1674 60.5105 40.9184C59.394 39.7182 59.4917 37.9807 60.7896 36.6898C63.3086 34.1917 65.8346 31.6936 68.3886 29.2304C68.9677 28.6721 69.0096 28.3372 68.4095 27.758C65.8486 25.253 63.3435 22.6991 60.8036 20.1731C60.1128 19.4822 59.6662 18.7007 59.7429 17.7099C59.8336 16.5655 60.3919 15.7002 61.4525 15.2676C62.569 14.814 63.6506 14.9675 64.5507 15.7979C65.3671 16.5515 66.1347 17.354 66.9232 18.1425C69.5818 20.8081 72.2404 23.4736 74.9059 26.1392C75.5688 26.7811 76.0712 27.4999 76.0433 28.4768Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M20.026 28.3233C19.9772 27.4929 20.3261 26.7812 20.9192 26.202C24.4081 22.7549 27.8901 19.3008 31.407 15.8817C32.6002 14.7164 34.3865 14.7443 35.4891 15.8468C36.6264 16.9842 36.6264 18.7705 35.4053 19.9917C32.8584 22.5525 30.2905 25.0855 27.7017 27.5976C27.1365 28.1488 27.0737 28.4838 27.6738 29.0769C30.2138 31.554 32.6979 34.087 35.2099 36.5921C35.8938 37.2759 36.3683 38.0505 36.3124 39.0413C36.2496 40.2206 35.6914 41.0998 34.5959 41.5743C33.4585 42.0628 32.3978 41.8604 31.5116 41.03C30.2766 39.8647 29.1043 38.6436 27.9041 37.4434C25.6363 35.1756 23.3754 32.9008 21.1006 30.633C20.4726 29.998 20.0051 29.3002 20.026 28.3233Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M50.9591 15.0443C53.0316 15.0374 54.3364 16.9074 53.6387 18.9799C52.7036 21.7571 51.6988 24.5064 50.7219 27.2696C49.2844 31.3377 47.854 35.4128 46.4026 39.4809C45.8095 41.1487 44.5674 42.0279 43.1788 41.8185C41.2947 41.5255 40.2411 39.774 40.8621 37.8621C41.4692 36.0199 42.1461 34.1987 42.795 32.3635C44.5744 27.3324 46.3537 22.3083 48.1401 17.2773C48.6704 15.777 49.6054 15.0443 50.9591 15.0443Z"
                        fill="#0E151D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_115">
                        <rect
                          width="94.8158"
                          height="84"
                          fill="white"
                          transform="translate(0.591797)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Website Development</p>
                </div>



                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 84 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3391_144)">
                      <path
                        d="M0.00390625 67.8575C0.00390625 47.2043 0.00390625 26.5511 0.00390625 5.89797C0.837687 2.80205 2.80596 0.840615 5.90188 0C26.555 0 47.2082 0 67.8614 0C67.9912 0.0478399 68.1142 0.0956798 68.2441 0.129851C71.8252 1.23017 73.8208 3.92287 73.8208 7.68855C73.8277 11.6456 73.8208 15.6095 73.8208 19.5665C73.8208 21.5895 73.8345 23.6124 73.814 25.6285C73.8072 26.2641 74.0395 26.5238 74.682 26.4965C75.3654 26.4623 76.0488 26.4828 76.7322 26.4896C80.6961 26.5306 83.9766 29.7906 83.9834 33.775C83.9971 48.0859 83.9971 62.3969 83.9834 76.7147C83.9766 80.6854 80.6893 83.9727 76.7186 83.9795C70.0552 84 63.3918 84.0137 56.7283 83.9727C53.8648 83.9522 51.753 82.5511 50.3178 80.0976C49.4157 78.5599 49.402 76.8719 49.4362 75.1701C49.4635 73.8238 49.443 73.8238 48.0898 73.8238C34.599 73.8238 21.1013 73.8169 7.61045 73.8306C6.38028 73.8306 5.22529 73.6256 4.12497 73.0925C1.90383 72.0127 0.646328 70.1811 0.00390625 67.8575ZM28.0586 68.7801C34.7767 68.7801 41.4948 68.7801 48.2128 68.7801C49.4362 68.7801 49.443 68.7801 49.443 67.5567C49.443 56.3896 49.4362 45.2155 49.443 34.0483C49.443 29.7017 52.6551 26.5033 57.0017 26.4965C60.576 26.4896 64.1572 26.4965 67.7315 26.4965C68.7567 26.4965 68.7772 26.4691 68.7772 25.4235C68.7772 23.8926 68.7772 22.3617 68.7772 20.8377C68.7772 19.7647 68.7567 19.7442 67.67 19.7442C61.2253 19.7442 54.7806 19.751 48.3359 19.7374C47.7344 19.7374 47.2287 19.8877 46.7161 20.1953C44.6659 21.4459 42.5882 22.6556 40.5448 23.9199C39.7042 24.4393 38.8431 24.6785 37.8453 24.6785C27.3068 24.658 16.7615 24.6649 6.22309 24.6649C4.98609 24.6649 4.98609 24.6649 4.98609 25.8814C4.98609 39.1262 4.98609 52.371 4.98609 65.6158C4.98609 67.919 5.86088 68.7938 8.15036 68.7938C14.7864 68.7801 21.4225 68.7801 28.0586 68.7801ZM78.9465 51.2023C78.9465 45.6598 78.9465 40.1172 78.9465 34.5746C78.9465 32.4491 78.0239 31.5333 75.8916 31.5333C69.775 31.5333 63.6583 31.5333 57.5416 31.5333C55.4093 31.5333 54.4867 32.4491 54.4867 34.5746C54.4867 45.7144 54.4867 56.8543 54.4867 67.9941C54.4867 69.0876 54.5072 69.1081 55.5733 69.1081C63.0022 69.1081 70.4242 69.1081 77.8531 69.1081C78.926 69.1081 78.9465 69.0876 78.9465 67.9941C78.9465 62.3969 78.9465 56.7996 78.9465 51.2023ZM57.2682 14.6868C60.7879 14.6868 64.3144 14.6732 67.834 14.7005C68.5311 14.7073 68.8113 14.4887 68.7977 13.7642C68.7635 11.8233 68.7908 9.88919 68.784 7.94826C68.7772 5.93215 67.834 4.98218 65.8179 4.98218C46.5384 4.98218 27.2658 4.98218 7.98633 4.98218C5.92238 4.98218 4.99292 5.91848 4.98609 7.99609C4.97925 11.4884 4.98609 14.9876 4.98609 18.4799C4.98609 19.587 4.99976 19.6007 6.0659 19.6007C16.3583 19.6007 26.6507 19.6007 36.95 19.6075C37.5172 19.6075 38.0093 19.4708 38.4945 19.1701C40.5926 17.8921 42.7113 16.6483 44.8094 15.3634C45.5816 14.8919 46.3676 14.6595 47.2834 14.6663C50.6048 14.7073 53.9331 14.6868 57.2682 14.6868ZM66.7132 74.1518C63.1662 74.1518 59.6192 74.1518 56.0723 74.1518C54.4867 74.1518 54.4867 74.1518 54.4867 75.751C54.4867 78.0815 55.3546 78.9426 57.7193 78.9426C63.5558 78.9426 69.3991 78.9426 75.2355 78.9426C78.2905 78.9426 78.9534 78.2455 78.9671 75.1701C78.9671 74.3773 78.7142 74.1313 77.9282 74.1382C74.1899 74.1723 70.4516 74.1518 66.7132 74.1518Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M26.2267 29.442C30.7578 29.442 35.2889 29.442 39.8201 29.442C41.7336 29.442 42.6836 30.392 42.6836 32.3124C42.6904 35.3673 42.6904 38.4291 42.6836 41.484C42.6836 43.3497 41.72 44.3202 39.8679 44.3202C30.7783 44.327 21.6887 44.327 12.5992 44.3202C10.7402 44.3202 9.78344 43.3497 9.77661 41.4908C9.76978 38.4086 9.76978 35.3195 9.77661 32.2372C9.78344 30.4261 10.7471 29.4488 12.5513 29.442C17.1098 29.4352 21.6682 29.442 26.2267 29.442ZM26.2267 34.4857C22.7617 34.4857 19.2967 34.5062 15.8318 34.472C15.0322 34.4652 14.7588 34.7317 14.8066 35.5177C14.8613 36.413 14.8135 37.3151 14.8203 38.2172C14.8271 39.256 14.8408 39.2765 15.8796 39.2765C19.9733 39.2765 24.0671 39.2765 28.154 39.2765C30.9902 39.2765 33.8264 39.256 36.6626 39.2902C37.4281 39.297 37.6809 39.0305 37.6468 38.2855C37.5989 37.3629 37.5921 36.4266 37.6468 35.504C37.6946 34.7112 37.4007 34.4584 36.6148 34.472C33.1566 34.5062 29.6917 34.4857 26.2267 34.4857Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M26.1447 63.9893C21.6409 63.9893 17.1371 63.9893 12.6333 63.9893C10.7266 63.9893 9.77661 63.0325 9.77661 61.1189C9.76978 58.064 9.76978 55.0022 9.77661 51.9473C9.77661 50.0816 10.7402 49.1179 12.5923 49.1179C21.6819 49.1111 30.7715 49.1111 39.8611 49.1179C41.72 49.1179 42.6768 50.0816 42.6768 51.9473C42.6836 55.0296 42.6836 58.1187 42.6768 61.2009C42.6699 63.0052 41.6995 63.9893 39.9021 63.9893C35.3163 63.9961 30.7305 63.9893 26.1447 63.9893ZM26.2882 54.1548C22.7686 54.1548 19.2489 54.1684 15.7293 54.1479C15.0663 54.1411 14.7861 54.353 14.8066 55.0432C14.8476 56.0752 14.834 57.114 14.8135 58.1528C14.8066 58.6927 14.998 58.9524 15.5721 58.9524C22.666 58.9456 29.76 58.9456 36.854 58.9524C37.4759 58.9524 37.6604 58.6791 37.6468 58.105C37.6263 57.1482 37.6399 56.1982 37.6399 55.2414C37.6399 54.1753 37.6194 54.1616 36.5191 54.1616C33.1088 54.1548 29.6985 54.1548 26.2882 54.1548Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M66.7067 36.3242C67.7934 36.3242 68.8869 36.3105 69.9735 36.331C71.4634 36.3583 72.5159 37.4176 72.509 38.8597C72.5022 40.2949 71.4497 41.3542 69.953 41.3679C67.8002 41.3884 65.6474 41.3884 63.4946 41.3679C61.9911 41.3542 60.9318 40.3085 60.9181 38.8802C60.9044 37.4108 61.9706 36.3515 63.5151 36.331C64.5813 36.3173 65.6474 36.3242 66.7067 36.3242Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M14.9778 12.3222C14.9641 13.7505 13.8501 14.8303 12.4149 14.8167C10.9934 14.7962 9.92044 13.6754 9.94778 12.2333C9.97511 10.846 11.0686 9.77982 12.4696 9.78665C13.898 9.77982 14.9915 10.887 14.9778 12.3222Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M22.27 14.8098C20.8417 14.7962 19.7619 13.6822 19.7755 12.247C19.796 10.8254 20.9168 9.74563 22.3589 9.77297C23.7462 9.80031 24.8124 10.8938 24.8124 12.2948C24.8124 13.73 23.7052 14.8235 22.27 14.8098Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M32.1595 14.8098C30.7243 14.8235 29.6172 13.73 29.6172 12.2948C29.6172 10.8596 30.7107 9.76615 32.1527 9.77298C33.5537 9.77982 34.6404 10.8528 34.654 12.247C34.6677 13.6822 33.5811 14.803 32.1595 14.8098Z"
                        fill="#0E151D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_144">
                        <rect
                          width="83.9932"
                          height="84"
                          fill="white"
                          transform="translate(0.00390625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>Digital Marketing</p>
                </div>


                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 84 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3391_156)">
                      <path
                        d="M40.1922 0C41.3945 0 42.5967 0 43.7989 0C43.9052 0.0327135 44.0034 0.0736053 44.1097 0.0981404C47.9126 0.89962 50.7096 3.01782 52.4189 6.50998C52.7624 7.21332 52.9996 7.07429 53.4576 6.62448C56.7207 3.48398 60.5891 2.43715 64.9318 3.67209C72.1615 5.73303 75.4165 14.0177 71.6626 20.5849C71.1637 21.46 70.9347 21.4191 72.1697 21.7381C72.2187 21.7545 72.276 21.7626 72.3332 21.7708C79.0886 23.5782 83.8729 29.7693 83.8811 36.7536C83.8893 42.3312 83.8974 47.9007 83.8729 53.4783C83.8565 58.05 79.5465 61.5422 75.0566 60.6589C74.0343 60.4545 74.0343 60.4545 74.0343 61.5422C74.0343 66.5964 74.0262 71.6507 74.0343 76.7131C74.0343 77.9153 73.7399 79.0357 73.1838 80.0907C72.0879 82.1926 70.2886 83.3703 68.0559 83.9918C67.0745 83.9918 66.085 83.9918 65.1036 83.9918C64.0404 83.6483 62.9772 83.2803 62.0939 82.5688C61.7831 82.3234 61.5296 82.3234 61.227 82.5688C60.3356 83.2721 59.2887 83.6565 58.2174 83.9918C57.236 83.9918 56.2464 83.9918 55.265 83.9918C54.2018 83.6483 53.1386 83.2803 52.2553 82.5688C51.9446 82.3234 51.691 82.3234 51.3884 82.5688C50.497 83.2721 49.4502 83.6565 48.3788 83.9918C47.3974 83.9918 46.4078 83.9918 45.4264 83.9918C44.3632 83.6483 43.3 83.2803 42.4168 82.5688C42.106 82.3234 41.8525 82.3234 41.5499 82.5688C40.6584 83.2721 39.6116 83.6565 38.5402 83.9918C37.5588 83.9918 36.5692 83.9918 35.5878 83.9918C34.5246 83.6483 33.4615 83.2803 32.5782 82.5688C32.2674 82.3234 32.0139 82.3234 31.7113 82.5688C30.8198 83.2721 29.773 83.6565 28.7016 83.9918C27.7202 83.9918 26.7307 83.9918 25.7493 83.9918C24.6861 83.6483 23.6229 83.2803 22.7396 82.5688C22.4288 82.3234 22.1753 82.3234 21.8727 82.5688C20.9813 83.2721 19.9344 83.6565 18.8631 83.9918C17.8817 83.9918 16.8921 83.9918 15.9107 83.9918C15.8125 83.9509 15.7062 83.9019 15.6081 83.8773C12.026 82.945 9.83416 79.6818 9.91594 76.2142C10.0304 71.2745 9.9323 66.3184 9.95683 61.3786C9.95683 60.6998 9.8178 60.4627 9.08175 60.6017C4.28923 61.534 0.118259 58.0991 0.11008 53.2248C0.101902 47.6799 0.11008 42.1268 0.11008 36.5818C0.11008 36.0911 0.101902 35.5923 0.167329 35.1097C1.07513 28.4035 5.49962 23.3901 12.0587 21.6808C12.8111 21.4846 12.7457 21.2638 12.4185 20.7158C11.2899 18.8511 10.7501 16.8311 10.7665 14.6311C10.7992 7.28692 17.7263 1.79106 24.8905 3.45945C27.0742 3.96651 28.9715 5.00516 30.5336 6.6163C31.0734 7.17243 31.3269 7.09882 31.6131 6.4282C31.8421 5.90478 32.1447 5.41408 32.4719 4.93973C34.3365 2.20816 36.9863 0.670626 40.1922 0ZM49.3111 55.204C49.3111 53.6992 49.3111 52.1943 49.3111 50.6895C49.3111 45.2509 49.3193 39.8041 49.3029 34.3655C49.3029 33.2778 49.6955 32.4436 50.6524 31.9283C52.3862 30.996 54.3408 32.2309 54.349 34.2837C54.3654 39.8859 54.349 45.4963 54.3572 51.0984C54.3572 52.865 55.3304 54.0508 56.7534 54.0508C58.1765 54.0508 59.1415 52.865 59.1497 51.0984C59.1497 51.0739 59.1497 51.0412 59.1497 51.0167C59.1497 45.3572 59.1579 39.6978 59.1415 34.0384C59.1415 33.2205 59.0679 32.3945 58.9044 31.593C57.8739 26.5388 53.6375 23.0712 48.4197 23.0303C44.126 22.9976 39.8324 23.0139 35.5388 23.0303C34.8027 23.0303 34.0585 23.1284 33.347 23.2756C28.2682 24.347 24.8578 28.5834 24.8333 33.883C24.8087 39.5997 24.8251 45.3082 24.8251 51.0248C24.8251 52.8486 25.7983 54.059 27.2377 54.0426C28.6853 54.0263 29.6176 52.8322 29.6176 50.9921C29.6176 45.578 29.6176 40.164 29.6176 34.7499C29.6176 32.7789 30.5745 31.593 32.1611 31.6094C33.7395 31.6257 34.6719 32.7952 34.6719 34.7826C34.6719 48.4814 34.6719 62.1801 34.6719 75.8789C34.6719 77.7763 35.6205 78.9948 37.0845 78.9785C38.5566 78.9621 39.4644 77.7681 39.4644 75.8462C39.4644 70.0477 39.4644 64.2574 39.4644 58.459C39.4644 56.2999 39.448 54.1408 39.4726 51.9817C39.4889 50.4115 40.732 49.3319 42.2859 49.4791C43.6353 49.61 44.5104 50.6813 44.5104 52.2434C44.5186 60.1192 44.5104 67.9949 44.5104 75.8625C44.5104 77.7681 45.4428 78.9785 46.9067 78.9785C48.3706 78.9785 49.3029 77.7763 49.3029 75.8625C49.3193 68.9845 49.3111 62.0983 49.3111 55.204ZM14.9865 56.8805C14.9865 63.2188 14.9865 69.5652 14.9865 75.9034C14.9865 76.3696 14.9947 76.8276 15.1419 77.2856C15.4609 78.2751 16.4341 79.0112 17.4155 78.9948C18.3805 78.9785 19.3129 78.267 19.6237 77.3101C19.7872 76.803 19.7872 76.2878 19.7872 75.7726C19.7872 61.9184 19.8036 48.0561 19.7709 34.2019C19.7627 31.6666 20.1553 29.254 21.2593 26.9723C21.5129 26.4407 21.3657 26.3098 20.8259 26.3098C19.1002 26.3262 17.3828 26.2771 15.6572 26.3343C13.0646 26.4161 10.7338 27.2585 8.77097 29.0005C6.31746 31.1841 5.17249 33.9729 5.15613 37.2197C5.1316 42.413 5.14795 47.6063 5.14795 52.7995C5.14795 53.2412 5.18885 53.6746 5.33606 54.0917C5.64683 54.9995 6.58735 55.6783 7.51968 55.7029C8.46837 55.7192 9.44977 55.0159 9.77691 54.0754C9.94048 53.601 9.95683 53.1103 9.95683 52.6196C9.95683 47.6472 9.95683 42.6665 9.94865 37.6941C9.94865 36.9171 10.104 36.222 10.6765 35.674C11.4535 34.938 12.3613 34.6926 13.3917 35.0934C14.4059 35.4859 14.9947 36.3528 14.9947 37.5305C14.9947 43.9833 14.9865 50.436 14.9865 56.8805ZM64.2039 54.3207C64.2039 61.485 64.2039 68.641 64.2039 75.8053C64.2039 76.2142 64.2039 76.6313 64.2939 77.0239C64.621 78.5123 66.0441 79.322 67.4017 78.8231C68.4567 78.4305 68.9965 77.5064 68.9965 76.0424C68.9965 63.4723 68.9965 50.894 68.9965 38.3238C68.9965 37.9967 68.9883 37.6696 69.0046 37.3424C69.0537 36.2792 69.5935 35.535 70.5585 35.1261C72.2596 34.3982 74.0343 35.6331 74.0425 37.5714C74.0589 42.6256 74.0507 47.6881 74.0425 52.7423C74.0425 53.4374 74.1161 54.1081 74.5414 54.6887C75.1302 55.5066 76.1362 55.8582 77.0685 55.5884C78.1726 55.2612 78.835 54.3534 78.835 53.0204C78.8432 47.6635 78.9005 42.3067 78.8187 36.9499C78.7451 31.7239 75.2693 27.5611 70.2477 26.5633C67.8433 26.089 65.398 26.3752 62.969 26.3343C62.3229 26.3262 62.6255 26.7351 62.7482 27.005C63.7541 29.1722 64.2203 31.4376 64.2121 33.8339C64.1876 40.6547 64.2039 47.4836 64.2039 54.3207ZM48.4769 11.4497C48.4279 7.90848 45.4019 4.92338 41.9424 4.99698C38.3848 5.07059 35.4161 8.10476 35.5142 11.556C35.6124 15.0973 38.5402 17.9842 42.0078 17.9679C45.5245 17.9515 48.526 14.9255 48.4769 11.4497ZM28.7834 14.8846C28.7344 11.4661 26.3381 8.40736 22.4043 8.30922C19.0021 8.22744 15.9925 10.7137 15.8534 14.5984C15.7308 17.9679 18.2006 21.0757 22.159 21.2065C25.5693 21.3292 28.5463 18.8184 28.7834 14.8846ZM68.1623 14.8519C68.2768 11.4088 65.3162 8.37465 61.7504 8.27651C58.3237 8.18654 55.2977 11.0408 55.2241 14.6311C55.1587 18.0742 57.6612 21.1084 61.5705 21.2065C65.0463 21.3046 67.9415 18.7285 68.1623 14.8519ZM24.8333 68.0031C24.8333 70.7674 24.8169 73.5235 24.8415 76.2878C24.8496 77.8499 25.8883 78.9948 27.2295 78.9948C28.579 78.9948 29.6176 77.8499 29.6176 76.2878C29.634 70.7347 29.6176 65.1898 29.634 59.6366C29.634 58.9742 29.4132 58.827 28.808 58.966C27.7857 59.2114 26.7388 59.2196 25.7247 58.9824C25.0377 58.8188 24.8087 58.9906 24.8169 59.7184C24.8496 62.4827 24.8333 65.2388 24.8333 68.0031ZM54.3654 68.0276C54.3654 70.7919 54.349 73.548 54.3735 76.3123C54.3817 77.8662 55.4531 79.0194 56.7862 78.9948C58.111 78.9703 59.1415 77.858 59.1497 76.345C59.1661 70.7674 59.1497 65.1898 59.1661 59.6121C59.1661 58.917 58.8798 58.8433 58.3155 58.9742C57.2932 59.2114 56.2464 59.2277 55.2323 58.9742C54.5044 58.7943 54.3408 59.0642 54.349 59.743C54.3817 62.5073 54.3654 65.2634 54.3654 68.0276Z"
                        fill="#0E151D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_156">
                        <rect
                          width="83.8119"
                          height="84"
                          fill="white"
                          transform="translate(0.09375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>Staff Augmentation</p>
                </div>

                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 84 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0107422 1.72511C0.622207 0.480345 1.594 -0.0219303 2.99163 0.0108267C5.99436 0.0763408 8.99709 0.0217457 11.9998 0.0326648C13.8561 0.0326648 14.806 0.993538 14.8169 2.87161C14.8278 4.94622 14.8278 4.94622 16.9461 4.94622C22.6022 4.94622 28.2582 4.9353 33.9034 4.95714C34.624 4.95714 35.0062 4.7606 35.3556 4.09454C36.7532 1.47397 38.948 0.0326648 41.9616 0.0326648C44.9753 0.0326648 47.17 1.46306 48.5676 4.09454C48.917 4.7606 49.2992 4.95714 50.0198 4.95714C56.0253 4.9353 62.0417 4.94622 68.0471 4.94622C69.1063 4.94622 69.1718 4.9353 69.0954 3.85432C68.9097 0.851591 70.0016 -0.109282 72.917 0.0108267C75.6686 0.120017 78.4311 0.0326648 81.1936 0.0326648C83.0062 0.0326648 83.978 1.00446 83.9889 2.8061C83.9998 5.91802 83.9998 9.02994 83.9889 12.1419C83.9889 13.8998 83.0062 14.8825 81.2482 14.8825C78.1036 14.8934 74.9698 14.8934 71.8251 14.8825C70.1217 14.8825 69.15 13.8889 69.1281 12.1746C69.1281 11.6833 69.1063 11.1919 69.1281 10.7005C69.15 10.1983 68.9971 9.95805 68.4402 9.95805C65.4593 9.97989 62.4894 9.96897 59.4648 9.96897C59.5412 10.2747 59.7814 10.3621 59.9671 10.4931C67.8397 16.029 72.382 23.5959 73.7796 33.0845C73.8015 33.2156 73.8124 33.3575 73.8124 33.4885C73.7687 34.4822 74.1618 35.0718 75.1008 35.5741C78.8788 37.6159 80.0253 42.3111 77.7541 46.0454C75.6468 49.5067 70.7332 50.5222 67.3046 48.2074C62.6859 45.0845 63.0353 38.0527 67.9707 35.4758C68.7023 35.0936 68.8115 34.7005 68.7241 33.9471C68.069 28.7388 66.1035 24.1091 62.806 20.0472C59.2464 15.6687 54.7696 12.6223 49.3319 11.039C48.8297 10.8862 48.5458 10.9954 48.251 11.443C45.139 16.0836 38.8278 16.0618 35.6722 11.4212C35.3993 11.0172 35.1372 10.8862 34.6568 11.0281C29.2409 12.5895 24.786 15.6141 21.2155 19.938C18.1472 23.6614 16.2255 27.9198 15.4066 32.6805C15.3847 32.8116 15.352 32.9535 15.3192 33.0845C14.9916 34.3293 15.2319 35.1155 16.5312 35.8689C19.5339 37.6159 20.6258 41.252 19.4466 44.6041C18.3438 47.7597 15.1554 49.7251 11.6177 49.4303C8.46206 49.1573 5.63404 46.4603 5.099 43.2065C4.59673 40.0727 6.19091 36.8843 9.07353 35.454C9.76142 35.1155 10.0453 34.6896 10.1108 33.969C10.7332 27.4176 13.2009 21.6196 17.3392 16.5313C19.2282 14.2056 21.4339 12.2183 23.8906 10.5149C24.0872 10.3839 24.3274 10.2965 24.4803 9.97989C23.7705 9.97989 23.0935 9.97989 22.4275 9.97989C20.2109 9.97989 18.0053 10.0017 15.7887 9.96897C15.0681 9.95805 14.7187 10.1328 14.806 10.9189C14.8606 11.4321 14.8278 11.9562 14.806 12.4694C14.7514 13.8234 13.7578 14.8716 12.4038 14.8825C9.04077 14.9153 5.68863 14.9044 2.32557 14.8825C1.17908 14.8825 0.513017 14.14 0.0107422 13.201C0.0107422 9.37934 0.0107422 5.55769 0.0107422 1.72511ZM7.392 9.8707C7.97071 9.8707 8.53849 9.84886 9.1172 9.8707C9.59764 9.89254 9.8051 9.70691 9.8051 9.20464C9.78326 8.02539 9.78326 6.85705 9.8051 5.6778C9.81602 5.20828 9.60856 5.05541 9.16088 5.05541C7.98162 5.06633 6.81329 5.06633 5.63404 5.05541C5.17544 5.05541 4.97889 5.2192 4.97889 5.68872C4.98981 6.86797 5.00073 8.0363 4.97889 9.21556C4.96798 9.71783 5.18636 9.89254 5.66679 9.8707C6.23458 9.84886 6.81329 9.8707 7.392 9.8707ZM76.5749 5.06633C75.9743 5.06633 75.3738 5.07725 74.7732 5.06633C74.3147 5.05541 74.1399 5.25196 74.1509 5.69963C74.1618 6.87889 74.1727 8.04722 74.1509 9.22648C74.1399 9.73967 74.3802 9.88162 74.8497 9.8707C75.9962 9.84886 77.1427 9.84886 78.2892 9.8707C78.7915 9.88162 78.9662 9.67416 78.9552 9.19372C78.9334 8.04722 78.9334 6.90073 78.9552 5.75423C78.9662 5.19736 78.715 5.04449 78.2127 5.06633C77.6668 5.08817 77.1208 5.06633 76.5749 5.06633ZM44.331 7.49035C44.3419 6.23467 43.2719 5.14277 42.0053 5.11001C40.7605 5.07725 39.6468 6.1364 39.6031 7.41392C39.5594 8.68053 40.6732 9.82702 41.9725 9.82702C43.2282 9.82702 44.3092 8.74604 44.331 7.49035ZM12.4912 39.6905C11.2355 39.6796 10.1436 40.7388 10.1108 42.0054C10.0781 43.2501 11.1372 44.3639 12.4147 44.4076C13.6923 44.4512 14.8388 43.3375 14.8388 42.049C14.8278 40.7934 13.7578 39.7015 12.4912 39.6905ZM73.8342 42.0818C73.856 40.8261 72.7969 39.7233 71.5303 39.6905C70.2855 39.6469 69.1718 40.706 69.1172 41.9726C69.0626 43.2501 70.1654 44.3966 71.4648 44.4076C72.7096 44.4185 73.8015 43.3484 73.8342 42.0818Z"
                      fill="#0E151D"
                    />
                    <path
                      d="M26.4016 84C24.6655 83.2138 24.5454 81.7179 24.7528 80.1237C25.1459 77.0227 26.4562 74.3912 28.7819 72.2948C29.1859 71.9235 29.306 71.5632 29.2187 71.0063C28.3561 65.3285 26.0631 60.3057 22.4489 55.8617C21.9029 55.1847 21.2915 54.5514 20.7128 53.8962C19.5335 52.5532 19.4571 51.5596 20.4616 50.0637C24.6873 43.7197 28.913 37.3867 33.1386 31.0427C35.2897 27.8107 37.4407 24.5896 39.5918 21.3685C40.9566 19.3266 42.9767 19.3266 44.3306 21.3685C50.6964 30.9117 57.0622 40.4549 63.417 49.9982C64.4762 51.5923 64.4434 52.575 63.1441 53.9618C59.8247 57.4995 57.3352 61.5286 55.8393 66.1583C55.3042 67.8289 54.9548 69.5323 54.66 71.2575C54.5617 71.8362 54.9439 72.0873 55.2715 72.404C57.7173 74.7297 59.0276 77.5687 59.2351 80.9536C59.3224 82.373 58.8092 83.3885 57.5317 84.0109C47.1586 84 36.7746 84 26.4016 84ZM39.4498 30.8899C39.2751 31.0537 39.2205 31.0864 39.1987 31.1301C34.7765 37.7579 30.3543 44.3967 25.9211 51.0245C25.6154 51.4722 25.67 51.7889 26.0085 52.182C27.1004 53.4049 28.0613 54.737 28.9457 56.1128C31.4134 59.9781 33.1059 64.1492 33.9794 68.6478C34.0886 69.2265 34.3397 69.3576 34.8747 69.2156C35.65 69.0082 36.4471 69.03 37.2332 69.03C40.3998 69.03 43.5663 69.03 46.7328 69.03C47.4971 69.03 48.2724 68.9972 49.0149 69.2047C49.6482 69.3903 49.8556 69.1501 49.9867 68.5277C51.2205 62.4349 53.8192 57.0082 57.8593 52.2802C58.3069 51.767 58.2851 51.3958 57.9248 50.8608C53.5899 44.3967 49.2769 37.9217 44.9639 31.4467C44.8547 31.283 44.8001 31.0427 44.5381 31.0209C44.5271 31.0973 44.5053 31.1519 44.5053 31.2065C44.5053 35.4103 44.5162 39.6142 44.4835 43.818C44.4726 44.5386 44.6691 44.9208 45.3461 45.2593C50.4016 47.7816 50.8274 54.9117 46.1432 58.0564C42.6709 60.3821 37.7028 59.3121 35.6609 55.7962C33.3898 51.8981 34.711 47.181 38.6418 45.2375C39.286 44.9208 39.4935 44.5496 39.4826 43.8617C39.4498 41.0446 39.4716 38.2384 39.4716 35.4213C39.4498 33.969 39.4498 32.495 39.4498 30.8899ZM41.9721 79.0318C45.63 79.0318 49.2878 79.0209 52.9457 79.0427C53.5135 79.0427 53.71 78.9226 53.4152 78.3548C52.2251 76.0509 50.4234 74.5004 47.8029 74.2275C44.2651 73.8562 40.7164 74.0528 37.1677 74.1073C34.1978 74.151 31.9812 75.5814 30.5836 78.2347C30.2014 78.9554 30.2669 79.0427 31.0858 79.0427C34.711 79.0318 38.347 79.0318 41.9721 79.0318ZM44.3306 51.9199C44.3524 50.6642 43.2933 49.5614 42.0267 49.5286C40.7819 49.485 39.6682 50.5441 39.6136 51.8107C39.559 53.0882 40.6618 54.2347 41.9612 54.2457C43.2059 54.2566 44.2978 53.1865 44.3306 51.9199Z"
                      fill="#0E151D"
                    />
                  </svg>
                  <p>
                    Graphic Design
                  </p>
                </div>


                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 92 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3391_174)">
                      <path
                        d="M0.546875 81.9916C0.546875 55.3275 0.546875 28.6725 0.546875 2.00844C1.17394 0.39987 2.44626 0 4.02756 0C31.9639 0.0181759 59.9003 0.00908796 87.8458 0.00908796C90.5267 0.00908796 91.4446 0.945148 91.4446 3.65336C91.4446 29.2178 91.4446 54.7822 91.4446 80.3466C91.4446 80.7011 91.4628 81.0555 91.4355 81.4099C91.3265 82.5914 90.6994 83.382 89.5998 83.791C89.0091 84.0091 88.382 83.9909 87.7549 83.9909C76.1405 83.9909 64.517 83.9909 52.9026 83.9909C36.5806 83.9909 20.2677 83.9818 3.94577 84C2.38264 84.0091 1.15577 83.5547 0.546875 81.9916ZM45.8685 78.4018C58.7825 78.4018 71.7056 78.4018 84.6196 78.4018C85.9828 78.4018 85.9919 78.4018 85.9919 77.0204C85.9919 53.6826 85.9919 30.3447 85.9919 7.00682C85.9919 5.62545 85.9919 5.61636 84.6287 5.61636C72.5962 5.61636 60.5637 5.59818 48.5313 5.62545C45.2687 5.63453 46.1502 5.06199 44.7416 7.96105C41.9971 13.6228 37.5076 16.322 31.2642 16.2856C23.2849 16.2493 15.3057 16.2765 7.3174 16.2765C5.93603 16.2765 5.93603 16.2765 5.93603 17.6488C5.93603 37.4333 5.93603 57.2178 5.93603 77.0023C5.93603 78.4018 5.93603 78.4018 7.38102 78.4018C20.2041 78.4018 33.0363 78.4018 45.8685 78.4018ZM22.8487 5.60727C17.5868 5.60727 12.3249 5.61636 7.06294 5.59818C6.23594 5.59818 5.86333 5.81629 5.91786 6.70691C5.98147 7.65206 5.97239 8.6063 5.91786 9.55144C5.86333 10.3875 6.15414 10.7056 7.0175 10.6965C15.4693 10.6693 23.9211 10.6965 32.382 10.6693C35.4265 10.6602 37.6712 9.2061 39.1889 6.58877C39.6978 5.70724 39.6433 5.61636 38.6345 5.61636C33.3726 5.60727 28.1107 5.60727 22.8487 5.60727Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M71.7513 47.3937C71.7604 48.966 70.6335 50.1201 68.934 50.211C68.0525 50.2564 67.1619 50.2655 66.2712 50.2201C65.5078 50.1746 65.1443 50.4382 64.9989 51.2107C64.8353 52.1104 64.5809 53.001 64.2901 53.8644C64.0901 54.446 64.181 54.8095 64.7354 55.1003C65.5442 55.5275 66.3349 56 67.1164 56.4726C68.6341 57.3996 69.1067 58.9445 68.3251 60.335C67.5345 61.7345 65.8895 62.1162 64.3264 61.2438C63.5267 60.7985 62.7269 60.3532 61.9454 59.8624C61.4637 59.5534 61.1093 59.5716 60.7367 60.0442C60.0914 60.853 59.3462 61.58 58.5465 62.2435C58.1284 62.5888 58.0648 62.9251 58.3465 63.3976C58.8555 64.2337 59.3462 65.0789 59.8006 65.9423C60.6003 67.4418 60.2005 69.0503 58.8645 69.8228C57.4923 70.6135 55.8928 70.1409 54.9931 68.6505C54.5023 67.8416 54.0207 67.0237 53.5754 66.1876C53.3209 65.7151 53.0301 65.5515 52.5121 65.7605C51.5215 66.1604 50.4854 66.4239 49.4403 66.5875C48.8951 66.6784 48.686 66.951 48.686 67.4872C48.6951 68.4687 48.6951 69.4411 48.686 70.4226C48.6588 72.0948 47.5046 73.3217 45.9596 73.3217C44.4147 73.3217 43.2514 72.0948 43.2333 70.4226C43.2242 69.4411 43.2151 68.4687 43.2333 67.4872C43.2423 66.951 43.0333 66.6784 42.488 66.5875C41.4338 66.4239 40.4069 66.1513 39.4163 65.7514C38.8892 65.5424 38.6075 65.706 38.353 66.1785C37.8895 67.0419 37.3988 67.8871 36.8899 68.7141C35.9992 70.1409 34.4089 70.5953 33.0638 69.8228C31.7279 69.0594 31.328 67.4418 32.1187 65.9513C32.5731 65.088 33.0729 64.2428 33.5728 63.4067C33.8454 62.9432 33.809 62.5979 33.3819 62.2525C32.5549 61.58 31.8097 60.8166 31.1281 59.9896C30.8009 59.5898 30.4919 59.5534 30.0648 59.8261C29.2105 60.3532 28.3381 60.853 27.4475 61.3347C25.9843 62.1253 24.3667 61.7073 23.6033 60.3532C22.8217 58.99 23.2761 57.4268 24.7211 56.5362C25.5481 56.0273 26.4024 55.5365 27.2475 55.064C27.711 54.8004 27.8473 54.4823 27.6474 53.9643C27.293 53.0192 27.0385 52.0468 26.8658 51.0562C26.7659 50.4564 26.4569 50.2019 25.8298 50.2292C24.9119 50.2655 23.9941 50.2564 23.0853 50.2292C21.3313 50.1656 20.1589 49.0296 20.168 47.421C20.1771 45.8215 21.3585 44.7037 23.1216 44.6492C24.0395 44.6219 24.9574 44.6219 25.8662 44.6492C26.4387 44.6673 26.7477 44.4401 26.8477 43.8767C27.0294 42.8588 27.2839 41.8501 27.6565 40.8777C27.8564 40.3415 27.6656 40.0507 27.2203 39.7962C26.3933 39.3327 25.5754 38.8601 24.7665 38.3694C23.267 37.4606 22.8035 35.8793 23.6124 34.4888C24.403 33.1347 26.0388 32.753 27.5565 33.5982C28.3835 34.0526 29.2105 34.5252 30.0103 35.025C30.4647 35.3067 30.8009 35.2977 31.1463 34.8614C31.8097 34.0253 32.5822 33.2801 33.4001 32.5985C33.7909 32.2805 33.8454 31.9533 33.5909 31.5171C33.0911 30.681 32.6003 29.8358 32.1369 28.9724C31.3189 27.4729 31.6916 25.8734 33.0002 25.0737C34.3634 24.2558 35.9811 24.7102 36.8899 26.1824C37.3988 27.0094 37.8986 27.8546 38.353 28.718C38.6166 29.2087 38.9256 29.2996 39.4345 29.0997C40.3978 28.718 41.3975 28.4453 42.4244 28.2908C43.0061 28.2 43.2423 27.9273 43.2333 27.3457C43.2151 26.3369 43.2151 25.3282 43.2333 24.3285C43.2696 22.7381 44.4874 21.5294 45.9869 21.5567C47.4682 21.5839 48.6406 22.7654 48.6769 24.3103C48.7042 25.2827 48.7042 26.2642 48.6769 27.2457C48.6588 27.8819 48.8678 28.2181 49.5494 28.3181C50.54 28.4635 51.5215 28.7271 52.4484 29.1088C53.0028 29.336 53.3118 29.1906 53.5844 28.6725C54.0388 27.8092 54.5387 26.964 55.0476 26.137C55.9291 24.7193 57.5468 24.2831 58.8827 25.0737C60.1823 25.8371 60.5822 27.4275 59.8188 28.8816C59.3644 29.7449 58.8736 30.5901 58.3647 31.4262C58.0648 31.9169 58.0921 32.2805 58.5556 32.6531C59.3826 33.3256 60.1187 34.098 60.8003 34.916C61.1002 35.2795 61.391 35.3249 61.8 35.0795C62.6633 34.5615 63.5358 34.0617 64.4082 33.5709C65.8714 32.7712 67.489 33.162 68.2797 34.4797C69.0794 35.8338 68.6523 37.4152 67.2255 38.3149C66.3712 38.8511 65.4988 39.3418 64.6263 39.8326C64.1992 40.0779 64.0629 40.3778 64.2446 40.8595C64.6081 41.8319 64.8717 42.8316 65.0535 43.8585C65.1534 44.4129 65.4442 44.6583 66.0259 44.6492C66.9983 44.6219 67.9798 44.6128 68.9522 44.6583C70.6153 44.7219 71.7422 45.8579 71.7513 47.3937ZM45.9415 61.3256C52.7665 61.471 59.7915 56.0182 59.8824 47.3937C59.9642 39.7326 53.639 33.5709 45.9869 33.4892C39.1255 33.4165 32.1278 38.8783 32.046 47.4301C31.9733 55.0912 38.2894 61.3256 45.9415 61.3256Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M70.1507 13.4229C70.1689 14.9679 68.9602 16.222 67.4516 16.2402C65.943 16.2583 64.707 15.0042 64.707 13.4683C64.707 11.9688 65.8794 10.742 67.3698 10.6965C68.8602 10.6511 70.1325 11.8961 70.1507 13.4229Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M80.8028 13.4956C80.7938 15.0315 79.5305 16.2765 78.031 16.2493C76.5133 16.2129 75.3228 14.9497 75.3501 13.4047C75.3773 11.9143 76.6042 10.6965 78.0765 10.6965C79.5851 10.6965 80.8119 11.9507 80.8028 13.4956Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M37.9161 47.3392C37.9252 42.9043 41.6058 39.26 46.0225 39.2964C50.5029 39.3418 54.0381 42.9861 54.0109 47.5391C53.9927 51.9286 50.3484 55.5456 45.9498 55.5365C41.4877 55.5365 37.8979 51.8832 37.9161 47.3392ZM45.968 49.9474C47.3585 49.9474 48.5399 48.7842 48.5308 47.421C48.5308 46.0487 47.3494 44.9036 45.9589 44.9036C44.5594 44.9036 43.3961 46.0578 43.3961 47.4301C43.3961 48.7933 44.5776 49.9474 45.968 49.9474Z"
                        fill="#0E151D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_174">
                        <rect
                          width="90.9068"
                          height="84"
                          fill="white"
                          transform="translate(0.546875)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>Software Development</p>
                </div>


                <div className="indus-card-main-flex">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 82 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3391_185)">
                      <path
                        d="M2.19817 84C0.863707 83.44 0.363281 82.4034 0.363281 80.9974C0.375196 59.0979 0.363281 37.1983 0.375196 15.2987C0.375196 13.44 1.31647 12.2962 2.85349 12.2366C4.27137 12.1889 5.36754 13.166 5.4986 14.5957C5.53435 14.9532 5.51052 15.3106 5.51052 15.6562C5.51052 31.92 5.51052 48.1838 5.51052 64.4596C5.51052 65.7345 5.51052 65.7345 6.82115 65.7345C8.59647 65.7345 10.3718 65.7106 12.1471 65.7464C12.8739 65.7583 13.148 65.5677 13.136 64.7813C13.0884 61.9694 13.1122 59.1455 13.1241 56.3336C13.1241 54.0936 13.9939 53.2357 16.2578 53.2357C19.0935 53.2357 21.9292 53.2119 24.765 53.2477C25.5752 53.2596 25.7778 52.9855 25.7658 52.2111C25.7301 48.9345 25.742 45.646 25.7539 42.3694C25.7539 40.2247 26.7071 39.2834 28.8637 39.2834C32.8195 39.2834 36.7752 39.2834 40.7309 39.2834C42.542 39.2834 43.519 40.2485 43.519 42.0596C43.5309 45.4791 43.5429 48.8987 43.5071 52.3064C43.4952 53.0213 43.7097 53.2596 44.4365 53.2357C46.3786 53.1881 48.3088 53.2 50.2509 53.2357C50.9301 53.2477 51.1446 53.0213 51.1446 52.3421C51.1207 49.0655 51.1326 45.777 51.1326 42.5004C51.1326 40.4034 52.0858 39.4383 54.1709 39.4383C57.0663 39.4383 59.9616 39.4025 62.845 39.4621C63.7029 39.474 63.8935 39.2 63.8816 38.3898C63.8458 33.1115 63.8578 27.8332 63.8697 22.5668C63.8697 20.5174 64.7752 19.6 66.8007 19.6C70.7803 19.6 74.7718 19.6 78.7514 19.6C80.6101 19.6 81.6348 20.6008 81.6348 22.4953C81.6467 42.0477 81.6348 61.5881 81.6348 81.1404C81.6348 82.4749 81.0629 83.44 79.8118 83.9762C53.9326 84 28.0654 84 2.19817 84ZM76.4875 51.9013C76.4875 43.1557 76.4756 34.4102 76.4995 25.6647C76.4995 24.8783 76.2731 24.6281 75.4867 24.6519C73.5803 24.6996 71.662 24.6996 69.7556 24.6519C69.0765 24.64 68.8739 24.8664 68.8739 25.5455C68.8858 43.0962 68.8858 60.6349 68.8739 78.1855C68.8739 78.8289 69.0646 79.0434 69.7199 79.0315C71.6024 78.9957 73.485 79.0196 75.3675 79.0196C76.4875 79.0196 76.4875 79.0196 76.4875 77.8996C76.4875 69.2374 76.4875 60.5634 76.4875 51.9013ZM38.4909 61.6834C38.4909 56.2145 38.479 50.7574 38.5029 45.2885C38.5029 44.5974 38.348 44.3115 37.5973 44.3353C35.6671 44.383 33.725 44.3711 31.7948 44.3353C31.1395 44.3234 30.8773 44.4902 30.8773 45.2051C30.8892 56.1906 30.8892 67.1762 30.8773 78.1617C30.8773 78.8647 31.1395 79.0434 31.7948 79.0315C33.6773 78.9957 35.5599 79.0196 37.4424 79.0196C38.5029 79.0196 38.5029 79.0196 38.5029 77.9234C38.4909 72.5021 38.4909 67.0928 38.4909 61.6834ZM63.8578 61.7787C63.8578 56.3455 63.8458 50.9004 63.8697 45.4672C63.8697 44.7047 63.6433 44.4783 62.8926 44.5021C60.9624 44.5498 59.0203 44.5379 57.0901 44.5021C56.4348 44.4902 56.2322 44.7285 56.2441 45.36C56.2799 46.8613 56.2561 48.3625 56.2561 49.8638C56.2561 59.2051 56.2561 68.5464 56.2561 77.8996C56.2561 79.0077 56.2561 79.0196 57.388 79.0196C59.2109 79.0196 61.0458 78.9838 62.8688 79.0434C63.679 79.0672 63.8697 78.7932 63.8697 78.0187C63.8458 72.5974 63.8578 67.1881 63.8578 61.7787ZM18.1403 68.6655C18.1403 71.8349 18.1522 75.0042 18.1284 78.1736C18.1284 78.8051 18.2952 79.0434 18.9624 79.0315C20.9284 78.9957 22.8824 78.9957 24.8484 79.0315C25.5156 79.0434 25.7539 78.8408 25.7539 78.1498C25.7301 71.8111 25.7301 65.4842 25.7539 59.1455C25.7539 58.514 25.5752 58.2757 24.9199 58.2877C22.9897 58.3234 21.0475 58.3353 19.1173 58.2877C18.3786 58.2757 18.1284 58.4783 18.1284 59.2528C18.1641 62.3864 18.1403 65.5319 18.1403 68.6655ZM51.1207 68.7132C51.1207 65.5438 51.0969 62.3745 51.1326 59.2051C51.1446 58.4783 50.9063 58.2638 50.1914 58.2757C48.2254 58.3115 46.2714 58.3115 44.3054 58.2757C43.6978 58.2638 43.5071 58.4783 43.5071 59.086C43.519 65.4485 43.519 71.8111 43.5071 78.1855C43.5071 78.8289 43.7097 79.0434 44.3531 79.0315C46.2833 78.9957 48.2254 78.9838 50.1556 79.0315C50.9182 79.0553 51.1446 78.8051 51.1326 78.0545C51.0969 74.9447 51.1207 71.8349 51.1207 68.7132ZM5.51052 74.9328C5.51052 76.0289 5.53435 77.1132 5.4986 78.2094C5.48669 78.7932 5.66541 79.0434 6.28498 79.0315C8.2986 78.9957 10.3241 79.0077 12.3378 79.0315C12.8858 79.0434 13.1241 78.8766 13.1122 78.2928C13.0884 76.0766 13.0884 73.8723 13.1122 71.6562C13.1241 71.0604 12.8739 70.9055 12.3258 70.9174C10.3122 70.9413 8.28669 70.9413 6.27307 70.9174C5.64158 70.9055 5.47477 71.1796 5.48669 71.7515C5.53435 72.8 5.51052 73.8604 5.51052 74.9328Z"
                        fill="#0E151D"
                      />
                      <path
                        d="M74.0805 0C75.3554 0.631489 75.832 1.65617 75.7962 3.07404C75.7248 5.48085 75.7843 7.88766 75.7724 10.2945C75.7724 11.9387 74.7596 13.023 73.2703 13.0349C71.769 13.0468 70.7682 11.9626 70.7443 10.3302C70.7443 9.8417 70.7443 9.35319 70.7443 8.79319C70.3392 8.8766 70.1724 9.17447 69.9699 9.38894C62.4992 16.8596 55.0405 24.3421 47.5699 31.8247C45.9137 33.4928 44.8771 33.5523 43.0303 32.0868C38.6933 28.6434 34.3562 25.1881 30.0311 21.7208C29.5307 21.3157 29.2567 21.3634 28.8277 21.7923C24.2167 26.4391 19.5699 31.074 14.9469 35.7208C14.3631 36.3166 13.7435 36.8289 12.8499 36.8647C11.7894 36.9004 10.9911 36.4834 10.4907 35.554C9.99029 34.6247 10.0618 33.7072 10.6575 32.8494C10.8243 32.5991 11.0507 32.3966 11.2652 32.1821C16.4958 26.9396 21.7145 21.7089 26.9452 16.4664C28.4822 14.9294 29.6022 14.8698 31.2941 16.2162C35.6669 19.7072 40.0516 23.1864 44.4124 26.6894C44.8414 27.0349 45.0916 27.1421 45.5443 26.6774C52.5741 19.6 59.6158 12.5583 66.6575 5.50468C66.7648 5.39745 66.872 5.26638 67.0984 5.00425C66.443 5.00425 65.9426 5.00425 65.4422 5.00425C64.072 4.99234 63.095 4.31319 62.7852 3.14553C62.4635 1.97787 62.9758 0.881702 64.1435 0.190638C64.2269 0.107234 64.3222 0.0595745 64.4175 0C67.6345 0 70.8516 0 74.0805 0Z"
                        fill="#0E151D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_185">
                        <rect
                          width="81.2715"
                          height="84"
                          fill="white"
                          transform="translate(0.363281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Multi-Level Marketing</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="indus-banner2">
          <div className="indus-container2">
            <div className="indus-content2">
              <h3>Industries, we can deliver exceptional service</h3>
              <p>
                Our skill in creating unique online stores that attract, engage,
                and increase sales is missing. Our ability to use technology
                successfully keeps businesses from controlling the digital
                space, which makes it harder for them to draw clients and make
                money.
              </p>
            </div>
            <div className="indus-card2">
              <div className="indus-card2-main">
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3216_166)">
                      <path
                        d="M52.69 56C44.2418 56 35.7935 56 27.3452 56C27.2964 55.9865 27.2477 55.9675 27.1962 55.9567C25.2189 55.5422 23.9946 53.7379 24 51.9553C24.0271 43.0261 24.0136 34.0996 24.0136 25.1731C24.0136 24.3386 24.3494 24.0081 25.1891 24.0081C35.0811 24.0081 44.9758 24.0108 54.8678 24.0027C55.396 24.0027 55.7725 24.1788 56 24.6583C56 34.002 56 43.3485 56 52.6922C55.9161 52.9902 55.8538 53.2963 55.7264 53.5808C55.1333 54.9137 54.1013 55.6939 52.69 56ZM40.0163 33.4196C35.4603 33.4196 30.9017 33.4196 26.3457 33.4196C25.9448 33.4196 25.9313 33.4304 25.9313 33.8151C25.9313 39.8293 25.9286 45.8436 25.9313 51.8578C25.9313 53.2178 26.7981 54.0982 28.1551 54.0982C36.0616 54.1036 43.9682 54.1009 51.8747 54.0982C52.2187 54.0982 52.5627 54.0522 52.8769 53.9004C53.76 53.4751 54.0985 52.7355 54.0985 51.7928C54.0985 45.8192 54.0985 39.8483 54.0985 33.8747C54.0985 33.4196 54.0985 33.4196 53.6218 33.4196C49.0903 33.4196 44.5533 33.4196 40.0163 33.4196ZM40.0217 31.4988C44.556 31.4988 49.0903 31.4988 53.6245 31.4988C54.1013 31.4988 54.1013 31.4988 54.1013 31.0112C54.1013 29.4507 54.1013 27.8903 54.1013 26.3298C54.1013 25.937 54.0931 25.9289 53.695 25.9289C44.5749 25.9289 35.4522 25.9289 26.3322 25.9289C25.9448 25.9289 25.934 25.9397 25.934 26.338C25.934 27.9093 25.934 29.4805 25.934 31.0491C25.934 31.4961 25.934 31.4961 26.389 31.4961C30.9342 31.4988 35.4766 31.4988 40.0217 31.4988Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M40.0029 48.531C39.6806 48.531 39.3582 48.5473 39.0359 48.5256C38.7434 48.5066 38.6811 48.6014 38.7407 48.8859C39.0007 50.1429 38.3913 51.3891 37.2563 51.9716C36.0483 52.5892 34.5937 52.2777 33.7378 51.213C32.9008 50.1727 32.9008 48.6719 33.7784 47.6451C34.0168 47.3661 34.0601 47.171 33.8543 46.8676C33.6674 46.5913 33.6078 46.2526 33.5265 45.9303C32.871 43.3945 32.2128 40.8588 31.5682 38.3204C31.4896 38.0142 31.365 37.8842 31.04 37.9032C30.6147 37.9303 30.1868 37.9167 29.7615 37.9059C29.19 37.8923 28.7864 37.5212 28.7593 36.9983C28.7322 36.443 29.0789 35.996 29.6613 35.9689C30.5226 35.9282 31.3867 35.9391 32.248 35.9689C32.741 35.9851 33.0417 36.294 33.1663 36.768C33.3559 37.4914 33.559 38.212 33.7242 38.9435C33.7974 39.2658 33.9382 39.3769 34.2741 39.3742C38.4346 39.3634 42.5951 39.3661 46.7556 39.3661C46.9966 39.3661 47.2323 39.3688 47.449 39.5042C47.8174 39.7318 48.0043 40.149 47.8851 40.615C47.3921 42.5493 46.891 44.4809 46.3764 46.4098C46.2951 46.7159 46.0242 47.0058 46.0378 47.2929C46.054 47.5666 46.4034 47.7724 46.5551 48.0488C47.1077 49.043 47.0373 50.2838 46.3384 51.1643C45.58 52.1206 44.5805 52.4673 43.3968 52.1991C42.2782 51.9472 41.4385 51.0125 41.2705 49.8801C41.2191 49.5307 41.2137 49.1731 41.3085 48.8263C41.3654 48.6096 41.3031 48.5202 41.0674 48.5283C40.7099 48.5418 40.3577 48.531 40.0029 48.531ZM40.0192 41.3275C38.2612 41.3275 36.5033 41.3275 34.7454 41.3275C34.3797 41.3275 34.3554 41.36 34.442 41.7013C34.7806 43.0098 35.1192 44.3183 35.4605 45.6241C35.642 46.3177 36.0158 46.6075 36.7417 46.6075C38.9249 46.6102 41.1107 46.6102 43.2939 46.6075C44.0198 46.6075 44.3909 46.3177 44.5724 45.6214C44.911 44.3346 45.2414 43.0451 45.5746 41.7582C45.6829 41.3329 45.6775 41.3248 45.2279 41.3248C43.4916 41.3248 41.7554 41.3275 40.0192 41.3275ZM36.8636 49.4467C36.8663 48.9807 36.4302 48.5418 35.9643 48.5364C35.5011 48.5337 35.0596 48.9699 35.0542 49.4386C35.0515 49.9045 35.4876 50.3434 35.9535 50.3488C36.4221 50.3515 36.8609 49.9154 36.8636 49.4467ZM44.9814 49.4413C44.9787 48.9753 44.5399 48.5364 44.074 48.5391C43.6081 48.5418 43.1693 48.9807 43.172 49.4467C43.1747 49.9126 43.6135 50.3515 44.0794 50.3488C44.5453 50.3461 44.9814 49.9072 44.9814 49.4413Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M36.2375 29.6729C33.7537 29.6729 31.2671 29.6756 28.7833 29.6729C28.1549 29.6729 27.7405 29.2611 27.7594 28.6705C27.773 28.191 28.144 27.7982 28.6181 27.7576C28.6912 27.7521 28.7643 27.7521 28.8375 27.7521C33.797 27.7521 38.7565 27.7521 43.7161 27.7521C44.3553 27.7521 44.7725 28.1152 44.786 28.6759C44.8022 29.2286 44.4068 29.6539 43.8488 29.6702C43.4642 29.681 43.0795 29.6729 42.6949 29.6729C40.5415 29.6729 38.3909 29.6729 36.2375 29.6729Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M47.5793 27.7548C48.1237 27.7575 48.5382 28.1802 48.53 28.7274C48.5246 29.2719 48.0966 29.681 47.5495 29.6729C47.0213 29.6648 46.6123 29.2476 46.6123 28.7139C46.6123 28.1666 47.0321 27.7521 47.5793 27.7548Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M51.3032 27.7548C51.8503 27.7494 52.2756 28.1612 52.2783 28.7057C52.281 29.253 51.8639 29.6729 51.3194 29.6729C50.7858 29.6729 50.3714 29.2665 50.3606 28.7355C50.3497 28.1856 50.7587 27.7603 51.3032 27.7548Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3216_166">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>E-commerce</h3>
                  <p>
                    Experience seamless online shopping experiences for your
                    customers.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_234)">
                      <path
                        d="M58.1781 41.9901C58.1781 42.3692 58.1781 42.7451 58.1781 43.1242C57.9979 43.6182 57.7773 44.0843 57.3764 44.4478C56.7954 44.9729 56.0932 45.1283 55.3413 45.1283C53.4615 45.1283 51.5817 45.1345 49.7019 45.1221C49.3788 45.119 49.2048 45.2153 49.0805 45.5291C48.4125 47.2349 47.7227 48.9314 47.036 50.631C46.9521 50.8422 46.9117 51.0535 46.9148 51.2772C46.918 52.3865 46.918 53.4988 46.9148 54.608C46.9117 55.6023 46.514 56 45.5167 56C42.0678 56 38.6189 56 35.17 56C34.1105 56 33.7314 55.6179 33.7314 54.5459C33.7314 51.5693 33.7314 48.5927 33.7314 45.6192C33.7314 45.1407 33.719 45.1283 33.2498 45.1283C31.1246 45.1283 28.9993 45.1314 26.8741 45.1252C26.3614 45.1252 25.8549 45.0724 25.3827 44.8362C24.6525 44.4758 24.2486 43.8637 24 43.1211C24 42.742 24 42.3661 24 41.987C24.1833 41.493 24.4039 41.03 24.8047 40.6665C25.3858 40.1414 26.0911 39.986 26.843 39.9954C27.1537 39.9985 27.2842 39.8773 27.3122 39.579C27.4302 38.3983 27.7254 37.2611 28.2381 36.1923C30.4068 31.6777 33.9831 29.2417 39.0104 28.9714C39.3118 28.9559 39.6225 28.9683 40.014 28.8657C39.2341 28.4214 38.7556 27.8342 38.6003 27.0263C38.4418 26.1967 38.6655 25.4666 39.2124 24.8327C40.0388 23.8789 41.5489 23.7235 42.5711 24.4754C43.0931 24.8607 43.4411 25.3703 43.5654 26.0041C43.8078 27.2563 43.2827 28.1853 42.2231 28.8595C42.3785 28.9559 42.4934 28.9372 42.6022 28.9372C43.873 28.959 45.1438 29.0553 46.3494 29.4685C51.2089 31.1339 54.0829 34.4834 54.8628 39.579C54.9094 39.8742 55.0244 39.9985 55.3351 39.9985C55.8353 39.9985 56.3294 40.0482 56.7954 40.2781C57.5225 40.6385 57.9233 41.2506 58.1781 41.9901ZM41.1046 39.9923C44.7772 39.9923 48.4466 39.9923 52.1192 39.9923C52.7655 39.9923 52.7624 39.9923 52.6474 39.3398C52.3274 37.5004 51.5537 35.8691 50.3047 34.4834C48.4404 32.4141 46.1132 31.2613 43.3075 31.1557C41.9963 31.106 40.682 31.1401 39.3708 31.1339C38.1559 31.1246 36.9721 31.3017 35.8443 31.7553C32.3301 33.1691 30.2111 35.7449 29.5089 39.4672C29.4126 39.9829 29.4343 39.9892 29.9563 39.9892C33.6724 39.9923 37.3885 39.9923 41.1046 39.9923ZM40.4956 49.6522C41.8845 49.6522 43.2764 49.6429 44.6653 49.6584C44.9822 49.6615 45.1407 49.5466 45.2557 49.2545C45.7435 48.0024 46.253 46.7595 46.7502 45.5136C46.8869 45.1687 46.8651 45.1345 46.4892 45.1314C45.1003 45.1283 43.7114 45.1314 42.3195 45.1283C42.0957 45.1283 41.9155 45.2029 41.7384 45.3334C40.8032 46.0325 39.8648 46.7222 38.9234 47.4151C38.507 47.7196 38.0689 47.7818 37.6184 47.5052C37.2145 47.2567 37.0529 46.8217 37.1555 46.281C37.2083 45.9983 37.2673 45.7155 37.3263 45.4328C37.3729 45.2215 37.3077 45.119 37.0747 45.1283C36.8199 45.1376 36.562 45.1438 36.3072 45.1283C36.0058 45.1096 35.8971 45.2277 35.9002 45.5353C35.9126 46.7564 35.9033 47.9775 35.9064 49.1986C35.9064 49.6274 35.9313 49.6553 36.3569 49.6553C37.7365 49.6522 39.116 49.6522 40.4956 49.6522ZM41.0859 42.1859C36.4035 42.1859 31.7242 42.1859 27.0418 42.1859C26.8958 42.1859 26.7529 42.1859 26.6069 42.1921C26.3769 42.2014 26.1781 42.2604 26.1625 42.537C26.147 42.8228 26.3396 42.9191 26.582 42.9533C26.6597 42.9658 26.7374 42.9595 26.815 42.9595C36.3352 42.9595 45.8522 42.9595 55.3724 42.9595C55.4842 42.9595 55.5961 42.9533 55.7017 42.9316C55.913 42.885 56.0342 42.7545 56.0155 42.5277C56 42.3133 55.8602 42.2169 55.6613 42.2014C55.4967 42.189 55.3289 42.1859 55.1611 42.1859C50.4694 42.1859 45.7777 42.1859 41.0859 42.1859ZM40.2905 53.8282C41.6235 53.8282 42.9595 53.8282 44.2925 53.8282C44.7212 53.8282 44.7337 53.8126 44.7368 53.4087C44.7399 53.0203 44.7243 52.6319 44.7399 52.2435C44.7523 51.9577 44.6436 51.8396 44.3546 51.8458C43.932 51.8583 43.5095 51.8489 43.0869 51.8489C40.8405 51.8489 38.594 51.8489 36.3507 51.8489C35.9375 51.8489 35.9095 51.88 35.9064 52.2808C35.9033 52.6568 35.9219 53.0359 35.9002 53.4118C35.8815 53.7318 35.9965 53.8375 36.3196 53.8344C37.6433 53.8188 38.9669 53.8282 40.2905 53.8282ZM41.4557 26.5292C41.4091 26.3366 41.3159 26.1688 41.0953 26.1719C40.8591 26.1719 40.7286 26.3366 40.7379 26.5603C40.7473 26.7653 40.8778 26.9114 41.1046 26.9021C41.3252 26.8927 41.4246 26.7436 41.4557 26.5292Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_234">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Hospitality</h3>
                  <p>
                    Experience a new era of hospitality where innovation meets
                    flawless service.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_270)">
                      <path
                        d="M41.3824 24C41.7586 24 42.131 24 42.5071 24C43.3723 24.2107 43.9967 24.8276 44.7603 25.4144C44.6475 24.7298 44.8205 24.2633 45.381 24C46.8367 24 48.2962 24 49.752 24C50.241 24.237 50.414 24.6282 50.4065 25.1661C50.3839 26.6106 50.4103 28.0588 50.3914 29.5032C50.3877 29.8192 50.493 30.0186 50.7337 30.2142C51.5952 30.9026 52.4979 31.542 53.2954 32.3019C54.2057 33.167 54.4051 34.5438 53.822 35.6309C53.2164 36.7594 51.9864 37.3499 50.7526 37.0866C50.4667 37.0264 50.3914 37.0942 50.3952 37.38C50.4065 38.9825 50.399 40.5812 50.4027 42.1836C50.4027 42.2701 50.3613 42.3717 50.4817 42.4582C50.666 42.2626 50.8466 42.067 51.0309 41.8714C52.197 40.6564 53.8973 40.5661 55.1123 41.6532C55.5712 42.0632 55.8082 42.6012 55.9962 43.1692C55.9962 43.5453 55.9962 43.9177 55.9962 44.2939C55.8571 44.7453 55.669 45.1666 55.3831 45.5465C53.9274 47.4837 52.4867 49.4322 51.0121 51.3619C49.609 53.1976 47.7621 54.138 45.4224 54.1267C40.9197 54.1079 36.4133 54.1267 31.9069 54.1192C31.6323 54.1192 31.4856 54.202 31.3502 54.4502C30.8236 55.4395 29.9922 55.9774 28.86 55.9925C27.5999 56.0075 26.3435 55.9962 25.0833 55.9962C24.3724 55.9962 24 55.6276 24 54.9242C24 49.9814 24 45.0387 24 40.0959C24 39.4038 24.3724 39.0276 25.0533 39.0276C26.3134 39.0239 27.5698 39.0276 28.8299 39.0276C29.0706 39.0276 29.3076 39.0464 29.5408 39.1179C30.6656 39.4564 31.3728 40.1862 31.6097 41.3448C31.6624 41.593 31.7339 41.6307 31.952 41.4877C32.332 41.2319 32.7495 41.0401 33.1896 40.9009C33.4115 40.8294 33.4981 40.7053 33.4943 40.4683C33.483 39.4489 33.4905 38.4295 33.4905 37.4101C33.4905 37.0302 33.4905 37.0302 33.0993 37.1092C31.8279 37.3612 30.485 36.6465 29.9847 35.4541C29.443 34.1676 29.8004 32.8924 30.9665 31.9596C33.8517 29.6499 36.7368 27.3478 39.6182 25.0344C40.1599 24.5943 40.7015 24.1806 41.3824 24ZM38.8283 52.2008C41.0138 52.2008 43.1992 52.2045 45.3847 52.197C45.7383 52.197 46.0919 52.1744 46.4418 52.1105C47.7508 51.881 48.7476 51.1626 49.53 50.1131C50.9294 48.236 52.34 46.3665 53.743 44.4932C53.8371 44.3691 53.9274 44.2412 53.9913 44.0983C54.2509 43.519 53.8747 42.8946 53.2465 42.8457C52.9042 42.8193 52.6559 42.9886 52.4302 43.2293C51.14 44.6174 49.846 45.9979 48.5595 47.3859C47.9088 48.0893 47.1301 48.458 46.1596 48.4467C44.7641 48.4279 43.3723 48.4429 41.9767 48.4429C40.7279 48.4429 39.479 48.4467 38.2302 48.4392C37.6283 48.4354 37.2221 48.0103 37.2446 47.4311C37.2634 46.8931 37.6734 46.5207 38.2678 46.5207C40.6414 46.517 43.0112 46.517 45.3847 46.5207C45.5841 46.5207 45.7797 46.517 45.9716 46.4568C46.4079 46.3176 46.6637 45.8662 46.5621 45.4224C46.453 44.9522 46.0994 44.7001 45.5014 44.7001C43.7861 44.6964 42.067 44.6926 40.3517 44.7039C39.9981 44.7077 39.6934 44.6211 39.4264 44.403C39.1029 44.1434 38.7794 43.8763 38.4634 43.613C37.2785 42.6237 35.9318 42.2701 34.4159 42.5711C33.4454 42.7629 32.6555 43.2895 31.9408 43.9478C31.7564 44.1171 31.6699 44.2864 31.6699 44.5384C31.6774 46.9533 31.6737 49.3645 31.6737 51.7795C31.6737 52.1933 31.6812 52.2045 32.0912 52.2045C34.3331 52.2008 36.5788 52.2008 38.8283 52.2008ZM48.4241 44.6211C48.4956 44.5421 48.4768 44.4443 48.4768 44.3541C48.4768 41.5554 48.4768 38.7568 48.4805 35.9582C48.4805 35.7625 48.4128 35.6271 48.2624 35.5068C46.2386 33.893 44.2111 32.2755 42.1949 30.6543C42.0181 30.5113 41.8864 30.5038 41.7059 30.6505C39.6784 32.2793 37.6471 33.9043 35.6121 35.5256C35.4804 35.6309 35.4127 35.7475 35.4127 35.9243C35.4165 37.3612 35.4165 38.7944 35.4127 40.2313C35.4127 40.442 35.4955 40.5247 35.7099 40.5323C36.8233 40.5699 37.854 40.9009 38.8095 41.4689C38.8847 41.514 38.9637 41.6194 39.054 41.5705C39.163 41.5103 39.1104 41.3824 39.1104 41.2846C39.1141 40.2652 39.1104 39.2458 39.1141 38.2264C39.1179 37.538 39.4865 37.1619 40.1712 37.1581C41.3485 37.1543 42.5222 37.1543 43.6995 37.1581C44.4255 37.1581 44.7829 37.5267 44.7829 38.2603C44.7866 39.5204 44.7791 40.7768 44.7829 42.0369C44.7866 42.872 44.6851 42.7704 45.5051 42.7779C45.5691 42.7779 45.6292 42.7779 45.6932 42.7779C46.8781 42.8043 47.7207 43.3648 48.2661 44.4067C48.3038 44.4782 48.3075 44.5873 48.4241 44.6211ZM25.9222 47.4988C25.9222 49.5601 25.9259 51.6177 25.9184 53.6791C25.9184 53.9725 25.9974 54.0891 26.3059 54.0816C27.077 54.0628 27.8444 54.0778 28.6155 54.0741C29.3866 54.0703 29.744 53.7167 29.744 52.9418C29.7477 49.3194 29.7477 45.7007 29.744 42.0783C29.744 41.3109 29.3866 40.9536 28.6117 40.9498C27.8632 40.946 27.1146 40.9498 26.3661 40.9498C25.9297 40.9498 25.9259 40.9536 25.9259 41.3824C25.9222 43.4212 25.9222 45.46 25.9222 47.4988ZM41.9353 25.941C41.6307 25.9259 41.405 26.0915 41.183 26.272C38.2414 28.6268 35.2999 30.9815 32.3583 33.3325C32.2116 33.4492 32.0574 33.562 31.9332 33.6974C31.4706 34.1977 31.7 34.9801 32.3545 35.1645C32.7608 35.2811 33.0542 35.0779 33.3438 34.8447C35.9506 32.757 38.5612 30.6693 41.168 28.5854C41.736 28.1302 42.1498 28.1302 42.7102 28.5779C44.482 29.996 46.2537 31.4104 48.0254 32.8285C48.9094 33.5357 49.7933 34.2504 50.6848 34.95C51.1663 35.33 51.7419 35.2547 52.0465 34.7996C52.3211 34.3896 52.2346 33.9043 51.8058 33.5545C51.1927 33.0542 50.572 32.5652 49.9551 32.0686C47.5401 30.1389 45.129 28.2055 42.714 26.2758C42.4883 26.0952 42.2551 25.9222 41.9353 25.941ZM41.0326 40.8934C41.0326 41.4125 41.0401 41.9353 41.0288 42.4544C41.025 42.6764 41.104 42.7779 41.3373 42.7742C41.7435 42.7629 42.1498 42.7629 42.556 42.7742C42.793 42.7817 42.8607 42.6726 42.8607 42.4507C42.8532 41.4313 42.8532 40.4119 42.8607 39.3925C42.8645 39.1405 42.7554 39.0652 42.5222 39.0728C42.1385 39.084 41.751 39.0878 41.3673 39.0728C41.1003 39.0615 41.025 39.1781 41.0288 39.4264C41.0438 39.9154 41.0326 40.4044 41.0326 40.8934ZM48.4768 28.3936C48.4768 27.5811 48.4768 26.8663 48.4768 26.1516C48.4768 25.9598 48.3752 25.8959 48.2022 25.8996C47.7771 25.9034 47.3521 25.8996 46.927 25.8996C46.833 25.8996 46.7389 25.9034 46.6825 26.0012C46.596 26.1441 46.6486 26.9152 46.7728 27.0168C47.3144 27.4644 47.8636 27.9008 48.4768 28.3936Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_270">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Real Estate</h3>
                  <p>
                    Your digital gateway to world of real estate with your
                    perfect property match .
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_207)">
                      <path
                        d="M59.3964 35.4452C59.2247 36.6244 58.9232 37.7655 58.4003 38.8379C57.8164 40.0362 57.0722 41.1315 56.1296 42.0742C52.1721 46.0432 48.1954 49.9969 44.2264 53.9544C43.6731 54.5078 43.1121 55.0535 42.5511 55.5993C42.0091 56.1259 41.4138 56.1297 40.8795 55.5993C36.361 51.1036 31.8272 46.6194 27.3277 42.0971C25.6752 40.437 24.5494 38.4563 24.1563 36.1207C23.6411 33.06 24.3967 30.3122 26.3469 27.9194C28.1902 25.6563 30.5907 24.332 33.5025 24.0534C36.1854 23.7977 38.5935 24.5992 40.7612 26.1715C40.994 26.3394 41.2306 26.5073 41.4405 26.702C41.6428 26.8928 41.7878 26.8737 41.9977 26.6981C43.0586 25.8128 44.2188 25.0915 45.5278 24.6411C49.2182 23.3703 52.5919 23.9962 55.6068 26.4348C57.7439 28.1636 58.9919 30.4343 59.362 33.1745C59.3697 33.2203 59.3888 33.2622 59.4002 33.308C59.3964 34.0179 59.3964 34.7315 59.3964 35.4452ZM52.0347 40.0477C52.6338 40.0477 53.233 40.0477 53.8284 40.0477C55.1679 40.0477 55.1679 40.0477 55.893 38.9142C57.9767 35.6665 57.6676 31.6098 55.0877 28.9078C52.7292 26.431 49.8746 25.6105 46.5659 26.576C45.0202 27.0263 43.7341 27.9385 42.5854 29.0452C42.0015 29.61 41.4443 29.6062 40.8604 29.0605C40.517 28.7399 40.162 28.4231 39.7919 28.1331C38.2233 26.9042 36.4564 26.1829 34.4528 26.1639C32.9759 26.1524 31.5791 26.5226 30.3159 27.3088C27.7131 28.9231 26.2362 31.2434 26.1523 34.3232C26.095 36.4298 26.9193 38.2693 28.2398 39.895C28.3467 40.0286 28.4802 40.0515 28.6367 40.0515C30.1098 40.0477 31.5829 40.0477 33.056 40.0553C33.2774 40.0553 33.4148 39.9828 33.5292 39.7882C33.8803 39.1814 34.2467 38.5822 34.6093 37.9792C35.1741 37.0442 36.0633 37.0252 36.6548 37.9449C37.4944 39.2501 38.3226 40.5667 39.1622 41.8757C39.3568 42.1772 39.3873 42.1772 39.5476 41.849C40.0628 40.769 40.5704 39.6851 41.0856 38.6051C41.8832 36.9221 42.6846 35.2391 43.4823 33.5523C43.7036 33.0867 44.0509 32.8424 44.5737 32.873C45.0928 32.9035 45.3523 33.2546 45.5736 33.6668C46.6498 35.6742 47.7337 37.6778 48.8022 39.689C48.9434 39.9561 49.1075 40.0668 49.4205 40.0591C50.2868 40.0324 51.1607 40.0477 52.0347 40.0477ZM30.4266 42.1696C30.5601 42.3108 30.6365 42.3947 30.7166 42.4749C31.6669 43.4137 32.6171 44.3487 33.5636 45.2913C36.1892 47.9055 38.8187 50.5197 41.4329 53.1416C41.6619 53.3705 41.784 53.3553 42.0053 53.1377C45.566 49.5847 49.1343 46.0432 52.6987 42.494C52.7865 42.41 52.901 42.3413 52.9391 42.2077C52.8285 42.1352 52.714 42.1734 52.6033 42.1734C51.2676 42.1696 49.9319 42.1505 48.6 42.181C47.9626 42.1963 47.5696 41.9444 47.2795 41.3949C46.4437 39.8073 45.5812 38.2311 44.7302 36.6512C44.6844 36.5672 44.6691 36.4184 44.547 36.426C44.4363 36.4336 44.4211 36.5748 44.3753 36.6664C43.883 37.7045 43.3907 38.7463 42.8984 39.7844C42.1046 41.4597 41.3108 43.1313 40.5131 44.8029C40.2651 45.3219 39.8758 45.5432 39.353 45.4783C38.9523 45.4287 38.7042 45.1692 38.4981 44.8448C37.6242 43.4633 36.7464 42.0856 35.8687 40.7079C35.674 40.4026 35.6626 40.4064 35.4718 40.7232C35.3115 40.9903 35.1436 41.2498 34.9947 41.5246C34.739 41.9788 34.3688 42.1887 33.8384 42.181C32.724 42.1543 31.6211 42.1696 30.4266 42.1696Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_207">
                        <rect
                          width="35.3965"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Health Care</h3>
                  <p>
                    Your trusted digital health partner where technology meets
                    healthcare for a brighter future.
                  </p>
                </div>


                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_243)">
                      <path
                        d="M21 31.081C21.2333 30.6446 21.617 30.4301 22.0723 30.2721C27.9042 28.2215 33.7323 26.1672 39.5604 24.1016C40.0194 23.9398 40.4257 23.9849 40.866 24.143C45.7158 25.8624 50.5694 27.5706 55.423 29.2863C56.4577 29.6513 57.4962 30.0012 58.5233 30.3887C59.3774 30.7123 59.6107 31.668 59.02 32.2963C58.8432 32.4844 58.6099 32.5785 58.3766 32.665C57.9063 32.8343 57.4397 33.0074 56.9657 33.1579C56.7286 33.2332 56.6346 33.3573 56.6346 33.6132C56.6421 37.0182 56.6421 40.4195 56.6346 43.8246C56.6346 44.0578 56.7211 44.1782 56.928 44.2798C58.1998 44.9195 58.8883 45.9429 58.8845 47.3839C58.8808 48.8099 58.1772 49.8145 56.9318 50.4541C56.7061 50.5707 56.6346 50.7024 56.6383 50.9432C56.6496 52.2413 56.6496 53.5356 56.6383 54.8336C56.6346 55.4394 56.2583 55.8683 55.6638 55.9812C55.1973 56.0715 54.6555 55.7743 54.441 55.3115C54.3545 55.1233 54.347 54.9277 54.347 54.7283C54.347 53.4942 54.3394 52.2601 54.3545 51.026C54.3583 50.7287 54.2717 50.5632 53.9933 50.4202C52.7554 49.7806 52.0895 48.7459 52.0932 47.35C52.097 45.9692 52.763 44.9458 53.9895 44.3212C54.268 44.1782 54.3545 44.0202 54.3545 43.7192C54.3432 40.6528 54.3432 37.5864 54.3545 34.5162C54.3545 34.1775 54.283 34.1061 53.9557 34.234C53.2596 34.5049 52.5523 34.757 51.8412 34.9865C51.5477 35.0805 51.4649 35.2386 51.4687 35.532C51.48 37.703 51.4499 39.8702 51.4837 42.0411C51.4988 43.0156 51.0887 43.7117 50.3286 44.2497C49.2413 45.021 47.9996 45.4312 46.7317 45.766C44.256 46.4245 41.7313 46.6653 39.1804 46.5712C36.7686 46.4809 34.3945 46.1197 32.1069 45.307C31.3431 45.0361 30.6056 44.6975 29.9472 44.2121C29.2173 43.6741 28.8297 42.9968 28.841 42.0524C28.8711 39.8852 28.8448 37.7143 28.8561 35.5433C28.8561 35.2348 28.7658 35.0805 28.461 34.9752C26.3315 34.2302 24.2132 33.4627 22.0836 32.7177C21.6283 32.5597 21.2446 32.3414 21.0113 31.9088C21 31.6303 21 31.3557 21 31.081ZM25.6504 31.4798C25.7407 31.5287 25.7746 31.5513 25.8085 31.5626C30.5041 33.2332 35.1959 34.9037 39.8915 36.578C40.1097 36.657 40.2978 36.6194 40.501 36.5441C44.2447 35.2085 47.9884 33.8803 51.732 32.5484C52.6915 32.206 53.6509 31.8636 54.6555 31.5062C54.5614 31.4573 54.52 31.4309 54.4749 31.4159C49.8245 29.7754 45.1703 28.135 40.5198 26.487C40.2564 26.3929 40.0232 26.4042 39.7635 26.4983C36.8627 27.5292 33.9618 28.5526 31.0609 29.576C29.2775 30.2043 27.4941 30.8327 25.6504 31.4798ZM49.1171 39.1365C49.1171 38.2147 49.1171 37.2929 49.1171 36.3673C49.1171 35.9572 49.1058 35.9534 48.722 36.0889C46.0469 37.0408 43.368 37.9889 40.6929 38.9446C40.3242 39.0763 39.9667 39.0688 39.598 38.9371C36.9229 37.9814 34.244 37.037 31.5726 36.0738C31.2641 35.9647 31.1851 36.0249 31.1851 36.3447C31.1964 37.9024 31.1888 39.4601 31.1888 41.0178C31.1888 42.4249 31.1851 42.4324 32.5057 42.9554C34.5337 43.7606 36.6595 44.0917 38.8192 44.2046C41.1293 44.325 43.4245 44.1632 45.6857 43.6176C46.7655 43.358 47.8266 43.042 48.7935 42.4663C49.0343 42.3233 49.1322 42.1427 49.1284 41.8605C49.1058 40.9576 49.1171 40.047 49.1171 39.1365ZM55.472 48.4336C56.089 48.4412 56.5819 47.9633 56.5819 47.3613C56.5819 46.7932 56.0815 46.2928 55.5021 46.289C54.9038 46.2815 54.3884 46.7857 54.3959 47.3726C54.3996 47.9596 54.8737 48.4261 55.472 48.4336Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_243">
                        <rect
                          width="38.3436"
                          height="32"
                          fill="white"
                          transform="translate(21 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Education</h3>
                  <p>
                    Take the first step towards for unlocking your potential in
                    your educational goals.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_279)">
                      <path
                        d="M56.0001 48.8762C56.0001 49.2495 56.0001 49.6267 56.0001 50C55.8591 50.4114 55.7182 50.8267 55.4363 51.1733C55.3601 51.2686 55.3601 51.36 55.4363 51.4552C55.7182 51.8019 55.8591 52.2133 56.0001 52.6286C56.0001 53.0019 56.0001 53.379 56.0001 53.7524C55.8515 54.16 55.7144 54.5676 55.4439 54.9181C55.0058 55.4819 54.4191 55.8019 53.7525 56C50.8572 56 47.962 56 45.0668 56C44.5639 55.8476 44.0801 55.6571 43.7068 55.2724C43.5239 55.0857 43.3525 55.0667 43.1201 55.1505C42.3658 55.4209 41.5811 55.5848 40.7925 55.7181C39.9734 55.859 39.143 55.9048 38.3163 55.9962C36.9639 55.9962 35.6077 55.9962 34.2553 55.9962C33.882 55.9619 33.5125 55.9276 33.1391 55.8933C31.6191 55.7562 30.1296 55.4857 28.7087 54.9105C26.7696 54.1257 25.3068 52.8495 24.5296 50.8609C24.2477 50.1371 24.1106 49.3829 24.0039 48.6209C24.0039 47.8933 24.0039 47.1619 24.0039 46.4343C24.0915 45.9124 24.1449 45.3829 24.2668 44.8686C25.101 41.3143 27.0287 38.5105 30.0725 36.4876C30.2858 36.3467 30.3201 36.2514 30.1639 36.0343C29.2534 34.7314 29.5925 32.9638 30.9258 32.08C31.1696 31.92 31.2344 31.7905 31.1353 31.5048C30.6591 30.0952 30.202 28.6781 29.7487 27.2609C29.4782 26.4229 29.8972 25.8514 30.7696 25.8476C31.6039 25.8438 32.4344 25.8476 33.2687 25.8476C33.4172 25.8476 33.5658 25.8476 33.6382 25.68C34.042 24.7809 34.7582 24.2552 35.6877 23.9962C36.061 23.9962 36.4382 23.9962 36.8115 23.9962C37.7411 24.259 38.4572 24.7809 38.861 25.68C38.9372 25.8476 39.082 25.8438 39.2306 25.8438C40.1068 25.8438 40.9791 25.84 41.8553 25.8476C42.3315 25.8514 42.6934 26.1257 42.8077 26.5562C42.8725 26.8076 42.823 27.0514 42.743 27.2914C42.282 28.7048 41.8249 30.1219 41.3563 31.5352C41.2801 31.7676 41.2991 31.8971 41.5239 32.0457C42.9106 32.9448 43.2572 34.7048 42.3201 36.0609C42.1791 36.2629 42.2134 36.3505 42.4077 36.4724C43.4287 37.1162 44.3277 37.9009 45.1125 38.8152C45.303 39.0362 45.5087 39.1048 45.7906 39.1048C48.2477 39.0971 50.7049 39.1009 53.162 39.1009C54.0839 39.1009 54.8306 39.4705 55.4211 40.1752C55.7144 40.5295 55.8553 40.9524 56.0077 41.3752C56.0077 41.7486 56.0077 42.1257 56.0077 42.499C55.8668 42.9105 55.7258 43.3257 55.4439 43.6724C55.3677 43.7676 55.3677 43.859 55.4439 43.9543C55.7258 44.3009 55.8668 44.7124 56.0077 45.1276C56.0077 45.5009 56.0077 45.8781 56.0077 46.2514C55.8668 46.6629 55.7258 47.0781 55.4439 47.4248C55.3677 47.52 55.3677 47.6114 55.4439 47.7067C55.7182 48.0495 55.8591 48.4609 56.0001 48.8762ZM36.2515 37.2762C35.1696 37.2762 34.0839 37.2762 33.002 37.2762C32.8191 37.2762 32.6553 37.3105 32.4877 37.3829C31.2649 37.9276 30.1753 38.6705 29.2496 39.6343C26.9449 42.0343 25.7715 44.8762 25.9544 48.2324C26.0687 50.3809 27.0325 51.9771 29.002 52.9181C30.663 53.7105 32.4496 53.9352 34.2515 54.0343C36.0382 54.1295 37.8287 54.1143 39.6153 53.92C40.602 53.8133 41.5696 53.6343 42.5106 53.3143C42.6858 53.2533 42.7887 53.1695 42.8001 52.9676C42.8268 52.4457 43.0096 51.9695 43.3182 51.5505C43.4325 51.3981 43.4591 51.2838 43.3372 51.1086C42.5944 50.0305 42.5906 48.8419 43.3296 47.7867C43.4439 47.6229 43.4439 47.5086 43.3296 47.3448C42.602 46.3048 42.5982 45.0705 43.322 44.0495C43.4439 43.8743 43.4439 43.7562 43.322 43.5848C42.5906 42.5486 42.6058 41.2305 43.3715 40.24C43.5163 40.0533 43.5239 39.939 43.3563 39.7676C42.4191 38.7962 41.3601 38.0076 40.1334 37.4362C39.901 37.3295 39.6687 37.2762 39.4134 37.2762C38.3544 37.28 37.303 37.2724 36.2515 37.2762ZM36.2172 31.6C37.1353 31.6 38.0496 31.5924 38.9677 31.6038C39.2077 31.6076 39.322 31.52 39.3944 31.2952C39.7106 30.2933 40.0382 29.2952 40.3658 28.2933C40.5563 27.7143 40.5639 27.7714 39.9696 27.7714C39.101 27.7714 39.101 27.7714 39.0858 28.6362C39.0744 29.2343 38.6858 29.6419 38.1296 29.6457C37.5696 29.6457 37.1734 29.2381 37.1658 28.6438C37.1582 28.0914 37.1658 27.539 37.162 26.9867C37.162 26.7543 37.1277 26.5295 36.9982 26.3276C36.7963 26.019 36.4382 25.8667 36.0801 25.9429C35.6649 26.0267 35.421 26.3124 35.3449 26.8C35.2344 27.5086 34.9296 27.7714 34.2172 27.7752C33.5925 27.7752 32.9677 27.7752 32.343 27.7752C31.9772 27.7752 31.9696 27.7829 32.0763 28.1181C32.4191 29.1771 32.7696 30.2362 33.1049 31.2952C33.1772 31.52 33.2915 31.6076 33.5315 31.6038C34.4268 31.5924 35.322 31.6 36.2172 31.6ZM49.3753 42.8495C50.5525 42.8495 51.7296 42.8495 52.903 42.8495C53.082 42.8495 53.2572 42.8381 53.4287 42.7924C53.882 42.6629 54.1563 42.2133 54.0572 41.7524C53.9544 41.2724 53.5887 41.0248 52.9677 41.0248C50.5944 41.0209 48.2211 41.0209 45.8477 41.0248C45.6915 41.0248 45.5353 41.0438 45.3868 41.0819C44.9296 41.2 44.6591 41.6571 44.7582 42.1181C44.8611 42.5867 45.2191 42.8419 45.8172 42.8457C47.002 42.8533 48.1868 42.8495 49.3753 42.8495ZM49.402 46.6019C50.5677 46.6019 51.7334 46.6019 52.8991 46.6019C53.6382 46.6019 54.0801 46.2629 54.0839 45.6952C54.0877 45.1276 53.642 44.7771 52.9106 44.7771C50.5791 44.7771 48.2477 44.7771 45.9163 44.7771C45.1772 44.7771 44.7353 45.1162 44.7315 45.6838C44.7277 46.2514 45.1734 46.6019 45.9049 46.6019C47.0706 46.6019 48.2363 46.6019 49.402 46.6019ZM49.3982 48.5257C48.2325 48.5257 47.0668 48.5257 45.9011 48.5257C45.722 48.5257 45.5468 48.5371 45.3753 48.5867C44.922 48.7162 44.6553 49.1733 44.7582 49.6343C44.8572 50.08 45.2115 50.3505 45.7601 50.3505C48.1944 50.3581 50.6325 50.3543 53.0668 50.3505C53.1887 50.3505 53.3144 50.3276 53.4363 50.2933C53.8896 50.1676 54.1563 49.7105 54.0534 49.2495C53.9506 48.7924 53.5925 48.5333 53.021 48.5295C51.8134 48.5219 50.6058 48.5257 49.3982 48.5257ZM49.421 52.2743C48.2439 52.2743 47.0706 52.2743 45.8934 52.2743C45.7258 52.2743 45.562 52.2857 45.3982 52.3276C44.9258 52.4571 44.6515 52.9143 44.762 53.3905C44.8687 53.8552 45.2306 54.099 45.8363 54.099C48.2211 54.1029 50.602 54.1029 52.9868 54.099C53.1315 54.099 53.2801 54.08 53.4172 54.0457C53.8896 53.9238 54.1639 53.4629 54.0534 52.9867C53.9468 52.5333 53.5887 52.2819 53.0134 52.2781C51.8134 52.2705 50.6172 52.2743 49.421 52.2743ZM36.2439 35.3524C37.3982 35.3524 38.5563 35.3524 39.7106 35.3524C39.8896 35.3524 40.0649 35.3448 40.2363 35.2952C40.7049 35.1657 40.9791 34.7009 40.8649 34.2286C40.7506 33.7638 40.3963 33.5238 39.7906 33.5238C37.4325 33.5238 35.082 33.5238 32.7277 33.5238C32.5601 33.5238 32.3963 33.539 32.2363 33.5886C31.802 33.7181 31.5353 34.1714 31.6306 34.6171C31.7296 35.0895 32.0915 35.3486 32.682 35.3486C33.8706 35.3524 35.0553 35.3486 36.2439 35.3524Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M39.089 47.9162C39.0242 48.9867 38.5213 49.84 37.5271 50.3657C37.2871 50.4914 37.1804 50.6324 37.2071 50.899C37.2223 51.0552 37.2147 51.2114 37.2071 51.3676C37.1804 51.8933 36.769 52.2781 36.2471 52.2781C35.7213 52.2781 35.2642 51.8857 35.3061 51.3638C35.348 50.7847 35.1613 50.4724 34.6471 50.1676C33.809 49.6686 33.409 48.8457 33.409 47.8514C33.409 47.3143 33.7861 46.9105 34.308 46.8724C34.7994 46.8381 35.2604 47.2228 35.3252 47.7371C35.3442 47.8819 35.3556 48.0267 35.409 48.1638C35.569 48.5752 35.9918 48.8076 36.4147 48.7238C36.8452 48.6362 37.1271 48.2743 37.1194 47.8209C37.1118 47.3714 36.8147 47.0171 36.3613 46.9714C35.668 46.9028 35.009 46.7581 34.449 46.3009C32.8604 44.9943 33.1194 42.4876 34.9594 41.5695C35.2185 41.44 35.3099 41.2952 35.2909 41.0171C35.268 40.7047 35.2794 40.3924 35.2871 40.08C35.2985 39.5124 35.7061 39.1124 36.2547 39.1162C36.788 39.12 37.1918 39.5162 37.2033 40.0686C37.2109 40.4114 37.2185 40.7581 37.2033 41.1009C37.1918 41.3333 37.2833 41.4514 37.489 41.5581C38.4985 42.08 39.0356 42.9219 39.0737 44.0609C39.0928 44.6057 38.6928 45.0324 38.1709 45.0705C37.6756 45.1086 37.249 44.7467 37.1575 44.2095C37.0471 43.5619 36.7994 43.2609 36.3423 43.2228C35.8166 43.1771 35.3937 43.5162 35.3404 44.0343C35.2909 44.499 35.6718 44.9524 36.1709 44.9905C36.849 45.0438 37.4813 45.2038 38.0223 45.6457C38.7271 46.2133 39.0585 46.9676 39.089 47.9162Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_279">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Finance</h3>
                  <p>
                    We are committed to thrive for your financial success as
                    your trusted financial advisor.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_216)">
                      <path
                        d="M24 42.2987C24 40.757 24 39.2193 24 37.6776C24.1977 37.2111 24.5771 37.0293 25.0594 36.9779C25.7433 36.9028 26.4232 36.804 27.1032 36.7328C27.3127 36.713 27.4233 36.634 27.4787 36.4324C27.7435 35.4639 28.127 34.5468 28.6251 33.6731C28.7358 33.4794 28.712 33.3371 28.5776 33.1671C28.1349 32.6137 27.704 32.0563 27.2692 31.495C26.8264 30.9218 26.8581 30.4632 27.372 29.9454C28.2337 29.0836 29.0955 28.2219 29.9573 27.3641C30.4751 26.8502 30.9337 26.8185 31.5069 27.2613C32.0682 27.6922 32.6295 28.123 33.183 28.5658C33.3529 28.7002 33.4952 28.7239 33.6889 28.6132C34.5626 28.1191 35.4836 27.7356 36.4521 27.4708C36.634 27.4233 36.7288 27.3324 36.7486 27.1269C36.8198 26.4351 36.9225 25.7473 36.9977 25.0555C37.049 24.5771 37.2348 24.1977 37.7013 24C39.243 24 40.7886 24 42.3303 24C42.8838 24.2411 43.0182 24.6997 43.0142 25.2492C43.0063 27.4431 43.0103 29.641 43.0103 31.835C43.0103 32.2737 43.0103 32.7086 43.0142 33.1474C43.0142 33.262 43.0142 33.3806 43.1368 33.4478C43.4016 33.5941 44.0855 33.4478 44.2713 33.1988C45.0777 32.1275 45.8881 31.0562 46.6906 29.977C46.9475 29.6292 47.2756 29.4631 47.7065 29.475C48.0702 29.4829 48.4378 29.4592 48.8015 29.4829C49.1059 29.5027 49.2561 29.3999 49.3786 29.1074C50.4025 26.6762 53.6716 26.2335 55.324 28.2891C55.6996 28.7555 55.8933 29.3011 56.0316 29.8703C56.0316 30.2656 56.0316 30.6609 56.0316 31.0562C56 31.1669 55.9644 31.2736 55.9328 31.3843C55.5375 32.8509 54.3951 33.7482 52.7269 33.9103C51.4263 34.0368 50.0388 33.262 49.4814 32.0089C49.2759 31.5424 49.0268 31.3645 48.5485 31.4436C48.509 31.4515 48.4655 31.4476 48.422 31.4436C48.1295 31.4041 47.9437 31.5385 47.7737 31.7717C46.9949 32.8272 46.1964 33.8668 45.4177 34.9223C45.1449 35.2899 44.8049 35.4639 44.3503 35.4481C44.038 35.4362 43.7258 35.4599 43.4135 35.4401C43.117 35.4243 43.0023 35.535 43.0063 35.8355C43.0182 36.7526 43.0103 37.6657 43.0103 38.5828C43.0103 39.0058 43.034 39.0216 43.453 39.0256C45.2358 39.0256 47.0187 39.0177 48.8015 39.0335C49.1098 39.0374 49.2561 38.9386 49.3747 38.65C49.9044 37.3851 50.8729 36.6537 52.2367 36.547C53.6716 36.4324 54.822 36.9779 55.5968 38.2271C55.8261 38.5947 55.9328 39.0098 56.0316 39.4248C56.0316 39.8004 56.0316 40.1759 56.0316 40.5475C55.9209 41.0061 55.7984 41.4567 55.5296 41.852C54.735 43.0379 53.5965 43.5479 52.2051 43.4253C50.8294 43.3028 49.8767 42.5438 49.347 41.267C49.2719 41.0812 49.2047 40.9428 48.9596 40.9428C47.0819 40.9507 45.2042 40.9468 43.3305 40.9468C43.1249 40.9468 43.0142 41.0219 43.0182 41.2353C43.0182 42.2355 43.0182 43.2316 43.0182 44.2317C43.0182 44.4413 43.117 44.5322 43.3265 44.5282C43.6704 44.5243 44.0143 44.5361 44.3582 44.5243C44.8128 44.5085 45.1528 44.6824 45.4256 45.05C46.1292 46.0067 46.8803 46.9277 47.5484 47.9081C47.8844 48.3983 48.256 48.6038 48.841 48.5406C49.1138 48.5129 49.264 48.4536 49.3786 48.1848C50.3708 45.8327 53.4266 45.307 55.1738 47.1728C55.6363 47.6709 55.8735 48.2718 56.0356 48.9161C56.0356 49.3114 56.0356 49.7067 56.0356 50.102C56.004 50.2206 55.9684 50.3432 55.9368 50.4618C55.4782 52.13 53.8456 53.1894 52.13 52.9482C50.778 52.7585 49.857 52.0272 49.347 50.778C49.264 50.5725 49.1533 50.4855 48.9319 50.4894C48.5366 50.5013 48.1413 50.4815 47.7421 50.4934C47.2875 50.5092 46.9475 50.3313 46.6747 49.9637C45.9158 48.9319 45.1251 47.9239 44.378 46.8843C44.1566 46.5759 43.9155 46.4613 43.5439 46.481C43.0221 46.5087 43.0182 46.4889 43.0182 47.0068C43.0182 49.513 43.0182 52.0232 43.0182 54.5295C43.0182 54.7153 43.0142 54.905 42.9944 55.0908C42.9272 55.6561 42.5596 55.9881 41.9864 55.9881C40.6819 55.9921 39.3813 55.9921 38.0768 55.9881C37.4878 55.9881 37.14 55.7035 37.049 55.1145C36.9305 54.3634 36.8395 53.6124 36.7565 52.8573C36.7328 52.6439 36.6419 52.545 36.4482 52.4936C35.4876 52.2327 34.5784 51.8493 33.7127 51.3631C33.5071 51.2484 33.3569 51.2682 33.179 51.4105C32.6177 51.8611 32.0484 52.2999 31.4752 52.7348C30.9455 53.138 30.4712 53.1064 29.9928 52.632C29.1113 51.7584 28.2337 50.8847 27.3601 50.0072C26.862 49.5051 26.8343 49.0426 27.2652 48.4813C27.704 47.912 28.1428 47.3428 28.5895 46.7815C28.7081 46.6352 28.7358 46.5048 28.6409 46.3308C28.1389 45.4374 27.7435 44.5006 27.4708 43.5123C27.4233 43.3384 27.3245 43.2633 27.1387 43.2435C26.4469 43.1684 25.7552 43.0695 25.0594 42.9944C24.5811 42.947 24.1977 42.7612 24 42.2987ZM41.0574 28.7437C41.0574 27.9017 41.0535 27.0597 41.0614 26.2137C41.0614 25.9884 40.9863 25.8896 40.7531 25.8935C40.2233 25.9014 39.6897 25.9014 39.156 25.8935C38.9505 25.8896 38.8595 25.9686 38.8358 26.1781C38.7647 26.8304 38.6698 27.4787 38.5947 28.127C38.5275 28.712 38.2784 29.0243 37.7132 29.1508C36.377 29.4513 35.1318 29.9612 33.9775 30.6965C33.5031 31.0009 33.1237 30.9692 32.677 30.6293C32.1393 30.2182 31.6017 29.8031 31.072 29.3801C30.9139 29.2536 30.8032 29.2418 30.653 29.3999C30.2656 29.807 29.8703 30.2063 29.4592 30.5897C29.2576 30.7795 29.2773 30.9179 29.4394 31.1155C29.8466 31.6175 30.2419 32.1275 30.6332 32.6414C30.9851 33.1039 31.0127 33.4794 30.7044 33.9657C29.977 35.1002 29.471 36.3217 29.1746 37.6341C29.0362 38.2547 28.7279 38.4919 28.0875 38.5631C27.4471 38.6342 26.8067 38.7291 26.1663 38.8002C25.9765 38.8319 25.8975 38.9149 25.9014 39.1086C25.9054 39.6897 25.9054 40.2747 25.9014 40.8558C25.9014 41.0456 25.9686 41.1365 26.1663 41.1602C26.8067 41.2314 27.4471 41.3302 28.0875 41.4014C28.7318 41.4725 29.0362 41.7057 29.1785 42.3264C29.475 43.6388 29.981 44.8603 30.7083 45.9948C31.0206 46.481 30.9969 46.8566 30.6451 47.3191C30.2419 47.8488 29.8308 48.3746 29.4157 48.8964C29.2773 49.0703 29.2852 49.1928 29.4434 49.347C29.8426 49.7305 30.2379 50.1139 30.6135 50.5171C30.7993 50.7148 30.9416 50.7029 31.1392 50.5408C31.6413 50.1337 32.1552 49.7423 32.6691 49.351C33.1316 48.9952 33.5071 48.9675 33.9933 49.2798C35.1279 50.0032 36.3533 50.5092 37.6697 50.8057C38.2943 50.948 38.5314 51.2524 38.6026 51.8888C38.6737 52.5174 38.7686 53.1459 38.8358 53.7744C38.8595 53.9958 38.9465 54.0828 39.1679 54.0788C39.6897 54.067 40.2115 54.067 40.7333 54.0788C40.9784 54.0828 41.0653 53.9879 41.0614 53.7468C41.0535 52.0825 41.0535 50.4183 41.0614 48.7501C41.0614 48.5011 40.9665 48.4101 40.7214 48.4457C40.0336 48.5485 39.3497 48.4773 38.6658 48.3746C34.7246 47.7776 31.5899 44.2476 31.499 40.2708C31.4436 37.8357 32.2619 35.7169 34.0091 33.9973C35.8671 32.167 38.1085 31.3092 40.7333 31.5266C40.9902 31.5464 41.0614 31.4436 41.0614 31.2064C41.0535 30.3881 41.0574 29.5659 41.0574 28.7437ZM41.0574 39.9862C41.0574 37.9582 41.0495 35.9303 41.0653 33.8985C41.0693 33.5822 40.9389 33.4636 40.6542 33.4557C40.1324 33.4439 39.6146 33.4201 39.0967 33.4952C35.6259 33.9973 33.1355 37.1637 33.4794 40.6345C33.8313 44.1725 37.0451 46.821 40.6226 46.5127C41.0179 46.4771 41.0614 46.4336 41.0614 46.0383C41.0574 44.0222 41.0574 42.0062 41.0574 39.9862ZM52.5964 51.0271C53.4661 51.0231 54.1223 50.3708 54.1263 49.5051C54.1263 48.675 53.4305 47.9951 52.5727 47.999C51.7347 48.003 51.0547 48.675 51.0547 49.5012C51.0508 50.3827 51.703 51.031 52.5964 51.0271ZM51.0508 39.9743C51.0547 40.8479 51.7346 41.5279 52.5964 41.516C53.4542 41.5041 54.1421 40.8005 54.1263 39.9466C54.1104 39.1363 53.4068 38.4524 52.5885 38.4484C51.7505 38.4445 51.0468 39.1442 51.0508 39.9743ZM52.5767 28.9374C51.7347 28.9374 51.0547 29.6015 51.0508 30.4277C51.0468 31.3132 51.703 31.9694 52.5885 31.9694C53.4542 31.9694 54.1065 31.3211 54.1223 30.4474C54.1381 29.6252 53.4345 28.9374 52.5767 28.9374Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_216">
                        <rect
                          width="32.0356"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Technology</h3>
                  <p>
                    We have specialised experience in web industry through our
                    innovative technical expertise.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_252)">
                      <path
                        d="M62.0428 27.307C61.3742 28.711 60.7005 30.1151 60.037 31.5243C59.5382 32.5735 59.0547 33.6329 58.5507 34.677C58.417 34.9495 58.3553 35.2221 58.3553 35.5307C58.3604 41.2292 58.3604 46.9328 58.3553 52.6313C58.3553 54.2462 57.2547 55.5886 55.6809 55.9229C53.6185 56.3652 51.6333 54.7862 51.6333 52.6827C51.623 46.9688 51.6282 41.26 51.6333 35.5461C51.6333 35.2427 51.5716 34.9701 51.443 34.6924C50.3167 32.3112 49.2007 29.9299 48.0795 27.5436C47.74 26.8184 47.9046 26.2527 48.6041 25.8464C50.8567 24.5297 53.2739 23.8303 55.902 24.036C57.9233 24.1954 59.7799 24.8846 61.508 25.9184C61.7651 26.0726 61.9245 26.2989 62.0428 26.5664C62.0428 26.8132 62.0428 27.0601 62.0428 27.307ZM54.9814 33.6638C55.3774 33.6638 55.7735 33.6535 56.1695 33.6689C56.3803 33.6741 56.5141 33.6072 56.6066 33.4066C57.5015 31.4883 58.3964 29.5751 59.3016 27.6618C59.389 27.4767 59.3684 27.379 59.1782 27.2864C56.3958 25.9955 53.6185 25.9852 50.831 27.2761C50.6253 27.3738 50.5944 27.4716 50.6921 27.6721C51.587 29.5596 52.4768 31.4523 53.3562 33.3501C53.4694 33.5918 53.6185 33.6741 53.8705 33.6638C54.2357 33.6535 54.6111 33.6638 54.9814 33.6638ZM53.9065 46.6037C53.9065 48.5683 53.9014 50.5381 53.9117 52.5027C53.9168 53.1816 54.39 53.6908 54.9866 53.6959C55.5832 53.7011 56.0563 53.197 56.082 52.5182C56.0923 52.2713 56.082 52.0244 56.082 51.7776C56.082 48.1312 56.0769 44.4796 56.0872 40.8332C56.0872 40.4989 56.0049 40.3652 55.65 40.3909C55.2077 40.4166 54.7603 40.4166 54.3128 40.3909C53.9785 40.3703 53.8963 40.4989 53.8963 40.8177C53.9117 42.7464 53.9014 44.675 53.9065 46.6037ZM54.9917 35.9473C54.7191 35.9473 54.4466 35.9524 54.174 35.9473C53.9888 35.9421 53.9014 36.0141 53.9014 36.2096C53.9065 36.7547 53.9065 37.2999 53.9014 37.8399C53.8962 38.0508 53.9888 38.1228 54.1894 38.1228C54.7191 38.1177 55.254 38.1177 55.7837 38.1228C55.9843 38.1228 56.0769 38.0508 56.0769 37.8399C56.0718 37.3102 56.0666 36.7753 56.0769 36.2456C56.082 36.0193 55.9895 35.937 55.7683 35.9421C55.5112 35.9524 55.2489 35.9473 54.9917 35.9473Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M29.6106 49.2523C22.791 44.3253 22.3538 35.2221 27.394 29.7756C32.5833 24.1594 41.0847 24.0514 46.3718 29.4465C51.6897 34.8724 51.3914 44.2893 44.51 49.2112C44.6232 49.2883 44.7517 49.2472 44.8649 49.2472C46.1764 49.2523 47.4878 49.2472 48.7993 49.2523C49.5965 49.2523 50.0131 49.6998 50.0491 50.4918C50.1108 51.8084 49.8896 53.0325 49.0513 54.0868C48.0793 55.3108 46.8192 55.9794 45.2403 55.9794C39.763 55.9846 34.2856 55.9846 28.8083 55.9794C26.1648 55.9794 24.0253 53.8296 24.015 51.1861C24.015 50.965 24.015 50.7387 24.015 50.5175C24.0201 49.6946 24.4522 49.2523 25.2699 49.2523C26.5659 49.2472 27.8671 49.2523 29.1632 49.2523C29.2866 49.2523 29.41 49.2523 29.6106 49.2523ZM37.032 49.2523C42.9311 49.1803 47.7244 44.5722 47.745 38.5548C47.7656 32.5477 43.0134 27.8007 37.0269 27.8059C31.0301 27.8059 26.3088 32.5632 26.3139 38.5188C26.3139 44.531 31.097 49.1752 37.032 49.2523ZM37.0475 51.5307C33.6222 51.5307 30.1969 51.5307 26.7717 51.5307C26.3448 51.5307 26.3139 51.577 26.4579 51.9781C26.8334 53.0325 27.7951 53.6959 28.9832 53.7062C30.0941 53.7165 31.2101 53.7062 32.321 53.7062C36.564 53.7062 40.807 53.7062 45.05 53.7062C46.2535 53.7062 47.1998 53.0685 47.5958 52.0141C47.7604 51.5821 47.7244 51.5358 47.2564 51.5358C43.8517 51.5307 40.447 51.5307 37.0475 51.5307Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M34.8414 42.7052C34.8311 42.3761 34.9597 42.1035 35.186 41.8721C36.914 40.1389 38.6421 38.4057 40.3804 36.6827C40.8536 36.2147 41.5736 36.2096 42.0211 36.6365C42.4942 37.089 42.52 37.7988 42.0262 38.2977C40.2982 40.0463 38.5547 41.7846 36.8112 43.5127C36.4512 43.8676 35.9986 43.9807 35.5151 43.7647C35.0625 43.559 34.8517 43.1938 34.8414 42.7052Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M39.2175 34.3221C39.2278 34.6667 39.0889 34.9495 38.8523 35.1861C37.1294 36.909 35.4116 38.632 33.6836 40.3497C33.2001 40.828 32.4595 40.828 32.0172 40.3857C31.5543 39.9229 31.5543 39.2234 32.0481 38.7245C33.771 36.9862 35.4991 35.2581 37.2374 33.5352C37.5974 33.1803 38.0449 33.0569 38.5335 33.2729C38.986 33.4683 39.2072 33.8284 39.2175 34.3221Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_252">
                        <rect
                          width="38.0431"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Fashion and Apparel</h3>
                  <p>
                    We are here for you to elevate your fashion brand’s online
                    presence.
                  </p>
                </div>


                <div className="indus-card2-main-flex">
                  <svg
                    width="85"
                    height="85"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_288)">
                      <path
                        d="M55.9672 29.8023C55.8066 30.8581 55.6551 31.9185 55.4806 32.9697C55.1639 34.8839 55.0446 36.8349 54.4799 38.7032C53.3828 42.348 51.3217 45.2721 47.9936 47.2185C47.1949 47.6867 46.3594 48.0861 45.5377 48.5038C45.3128 48.6186 45.1659 48.7746 45.0557 49.0042C44.4085 50.3446 43.5776 51.5564 42.5172 52.6031C41.8287 53.2825 41.163 53.9848 40.4561 54.6412C39.0606 55.9403 37.4081 56.3672 35.6453 55.6603C33.9331 54.9763 32.2576 54.1592 30.7703 53.0392C28.0344 50.9918 26.3405 48.2421 25.4499 44.9737C25.1103 43.7389 24.9771 42.4628 24.7706 41.205C24.5181 39.658 24.2794 38.111 24.0453 36.5595C23.903 35.6001 24.0682 34.7095 24.7338 33.9704C25.4913 33.1258 26.4369 32.8779 27.5065 33.236C29.2417 33.8144 31.0136 34.0852 32.8406 34.0301C33.6439 34.0072 33.6347 34.0118 33.7495 33.236C34.0662 31.0463 34.3967 28.8613 34.7181 26.6762C34.9246 25.2991 35.6591 24.3902 37.0041 24C37.3346 24 37.6697 24 38.0002 24C38.4822 24.1239 38.8862 24.3856 39.2901 24.6656C41.6955 26.3457 44.3672 27.2317 47.3096 27.2913C49.0862 27.3281 50.7984 27.0251 52.4785 26.4513C53.7455 26.0152 55.017 26.5523 55.6413 27.7412C55.7882 28.0212 55.8662 28.3196 55.9626 28.6134C55.9672 29.0128 55.9672 29.4075 55.9672 29.8023ZM44.5508 42.5179C44.5646 41.7329 44.4911 40.9617 44.3672 40.1905C44.0596 38.2625 43.775 36.3345 43.4629 34.4065C43.3894 33.9475 43.394 33.4701 43.1691 33.0432C42.8982 32.5245 42.4575 32.4235 41.9847 32.754C41.645 32.9927 41.3099 33.2406 40.9565 33.4563C37.4769 35.6001 33.7219 36.3896 29.6732 35.7607C28.7459 35.6184 27.8462 35.3797 26.9556 35.0859C26.5425 34.9482 26.2487 35.063 26.0697 35.4256C25.9595 35.6506 25.909 35.8893 25.9503 36.1509C26.0926 37.0231 26.2165 37.8953 26.3589 38.7675C26.6251 40.4476 26.8363 42.1414 27.1805 43.8032C27.8553 47.0257 29.4436 49.7065 32.1474 51.6437C33.419 52.5572 34.8512 53.1952 36.2696 53.8333C37.1602 54.2327 38.1058 54.1041 38.8495 53.4523C39.9603 52.4837 41.0437 51.4692 41.9618 50.3124C43.7658 48.0356 44.5416 45.4007 44.5508 42.5179ZM42.4989 30.5919C42.5861 30.6011 42.7008 30.6057 42.811 30.6286C44.1147 30.8581 45.042 31.8772 45.2531 33.2773C45.5102 34.962 45.7856 36.6375 46.0427 38.3222C46.2171 39.4698 46.4375 40.6128 46.488 41.7788C46.5476 43.1146 46.4329 44.4367 46.1666 45.7449C46.1529 45.8138 46.0932 45.8964 46.1666 45.9469C46.2355 45.9974 46.3043 45.9332 46.364 45.901C46.6716 45.7312 46.9929 45.5751 47.2913 45.3869C50.2751 43.5002 52.0608 40.7597 52.8044 37.3628C53.3874 34.6957 53.6491 31.969 54.0484 29.2698C54.1586 28.5445 53.594 28.1176 52.8962 28.3517C52.8274 28.3747 52.7585 28.3976 52.6897 28.4206C49.8298 29.3479 46.9332 29.5039 43.9953 28.8429C41.8057 28.3472 39.8089 27.4382 37.9865 26.13C37.5412 25.8086 37.1648 25.8683 36.8664 26.2952C36.7379 26.4788 36.669 26.6808 36.6369 26.9012C36.568 27.3923 36.4946 27.8881 36.4211 28.3793C36.1824 29.9905 35.9437 31.6018 35.7096 33.213C35.6499 33.6216 35.6591 33.6262 36.0631 33.516C37.8258 33.0294 39.437 32.2353 40.9014 31.1427C41.3742 30.7939 41.8929 30.6148 42.4989 30.5919Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M41.0674 46.3509C41.0628 48.7976 39.2037 50.7715 36.835 50.9735C34.4893 51.1754 32.0288 49.4357 31.8865 46.562C31.8452 45.6944 32.5292 45.2124 33.3325 45.5384C35.4625 46.3968 37.4089 46.1214 39.1762 44.6341C39.8556 44.0602 40.613 44.2898 40.87 45.139C40.9986 45.5613 41.0445 45.9928 41.0674 46.3509ZM34.3057 47.8611C34.8428 48.7884 36.0684 49.2475 37.1426 48.9628C38.0469 48.7241 38.9283 47.8474 38.9283 47.1588C37.4685 47.8749 35.9445 48.132 34.3057 47.8611Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M28.3283 41.8981C28.3421 41.7467 28.3926 41.5768 28.4798 41.4207C29.5356 39.5662 31.9686 39.1668 33.5569 40.5899C33.993 40.9801 34.0572 41.5539 33.7083 41.9808C33.3778 42.3893 32.7994 42.4398 32.3404 42.1001C31.4269 41.4299 30.7842 41.5309 30.1278 42.4398C29.8294 42.853 29.4209 42.9999 28.9894 42.853C28.5992 42.7152 28.3192 42.3251 28.3283 41.8981Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M40.2214 38.3222C41.1532 38.3406 41.8969 38.6481 42.5304 39.2127C42.9573 39.5892 43.0032 40.1721 42.6635 40.5807C42.3238 40.9892 41.7546 41.0351 41.2909 40.6954C40.405 40.039 39.7348 40.14 39.0921 41.0214C38.7341 41.5126 38.1649 41.6411 37.7058 41.3289C37.2605 41.026 37.1595 40.4522 37.4809 39.9472C38.1373 38.9235 39.0646 38.3543 40.2214 38.3222Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_288">
                        <rect
                          width="38.9679"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Entertainment and media</h3>
                  <p>
                    Let us be your partner in shaping the future of digital
                    entertainment and media.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_225)">
                      <path
                        d="M60.3684 30.8442C60.3684 38.9835 60.3684 47.1228 60.3684 55.2584C60.1249 55.7491 59.756 56 59.1878 56C47.857 55.9926 36.5262 55.9963 25.1954 55.9963C24.4316 55.9963 23.9999 55.5683 23.9999 54.8119C23.9999 47.0047 23.9963 39.1975 24.0036 31.394C24.0036 29.6968 25.4352 28.28 27.1324 28.2652C27.7966 28.2578 28.457 28.2652 29.1211 28.2615C30.8257 28.2615 32.5266 28.2615 34.2312 28.2615C34.7183 28.2615 34.7183 28.2615 34.7183 27.7597C34.7183 27.5605 34.7183 27.3575 34.7183 27.1583C34.733 25.439 36.1461 24.0148 37.8618 24.0074C40.7471 24 43.6324 24.0037 46.5213 24.0074C47.4769 24.0074 48.2591 24.4022 48.8901 25.1069C49.5763 25.8743 49.735 26.7967 49.6796 27.7855C49.6538 28.2541 49.6833 28.2615 50.1519 28.2652C52.5059 28.2652 54.8599 28.2689 57.2138 28.2652C57.7341 28.2652 58.2211 28.3906 58.6786 28.6305C59.5863 29.099 60.0991 29.8812 60.3684 30.8442ZM42.1971 53.8121C43.6397 53.8121 45.0824 53.8121 46.525 53.8121C50.2626 53.8121 54.0002 53.8121 57.7378 53.8157C58.0108 53.8157 58.2174 53.8121 58.2137 53.4357C58.2026 49.8162 58.2063 46.1967 58.21 42.5772C58.21 42.2931 58.1473 42.2451 57.8964 42.4038C56.9814 42.9794 55.9852 43.2339 54.8968 43.2266C52.5317 43.2081 50.1667 43.2266 47.8016 43.2155C47.5028 43.2155 47.3404 43.3114 47.2002 43.5808C46.5877 44.7319 45.6248 45.3444 44.3076 45.3481C42.9018 45.3555 41.4924 45.3555 40.0867 45.3481C38.7695 45.3407 37.8065 44.7282 37.194 43.5808C37.0501 43.3114 36.8914 43.2155 36.5926 43.2155C34.1796 43.2266 31.7666 43.2155 29.3536 43.2229C28.3574 43.2266 27.4424 42.9609 26.5864 42.4628C26.4794 42.4001 26.3797 42.2451 26.2506 42.3189C26.1252 42.3927 26.1916 42.5587 26.1916 42.6805C26.1842 46.2078 26.1842 49.7314 26.1842 53.2586C26.1842 53.8121 26.1842 53.8121 26.7266 53.8121C31.8846 53.8121 37.0427 53.8121 42.1971 53.8121ZM42.234 30.4458C40.4704 30.4458 38.7104 30.4458 36.9468 30.4458C33.7774 30.4458 30.608 30.4458 27.435 30.4458C26.6085 30.4458 26.1879 30.8664 26.1842 31.6928C26.1805 33.6926 26.1768 35.6924 26.1842 37.6885C26.1916 39.5074 27.2948 40.7619 29.0879 40.9944C29.8406 41.094 30.6007 41.0276 31.357 41.0312C33.0469 41.0386 34.7404 41.0276 36.4302 41.0386C36.7328 41.0386 36.873 40.9501 36.8472 40.6328C36.8287 40.4077 36.8398 40.1826 36.8472 39.9576C36.8693 39.3709 37.301 38.9097 37.884 38.9097C40.7582 38.9023 43.6324 38.9023 46.5066 38.9097C47.0895 38.9134 47.5212 39.3709 47.5434 39.9576C47.5507 40.1826 47.5618 40.4077 47.5434 40.6328C47.5175 40.9501 47.6577 41.0386 47.9603 41.0386C50.2663 41.0312 52.5723 41.0386 54.882 41.0312C55.465 41.0276 56.0368 40.9279 56.5534 40.6291C57.7009 39.9686 58.2026 38.9466 58.21 37.6553C58.2174 35.7145 58.2137 33.7738 58.21 31.8367C58.21 30.8184 57.8374 30.4458 56.819 30.4458C51.9561 30.4458 47.0969 30.4458 42.234 30.4458ZM42.2008 28.2615C43.7246 28.2615 45.2484 28.2615 46.7722 28.2615C47.5618 28.2615 47.4917 28.3279 47.4917 27.531C47.4917 26.568 47.1006 26.1879 46.1265 26.1879C43.5881 26.1879 41.0459 26.1879 38.5075 26.1879C37.1829 26.1879 36.8988 26.4868 36.8951 27.8224C36.8951 28.1656 37.0058 28.2726 37.3453 28.2689C38.965 28.2541 40.5811 28.2615 42.2008 28.2615ZM42.2119 41.0903C41.4075 41.0903 40.6069 41.0903 39.8026 41.0903C38.9466 41.094 39.0314 41.0017 39.0314 41.8762C39.0314 42.7506 39.441 43.1638 40.308 43.1638C41.4407 43.1675 42.5771 43.1306 43.7062 43.1749C45.0455 43.2229 45.4329 42.7395 45.3702 41.4777C45.3554 41.1862 45.2595 41.0866 44.9717 41.0903C44.053 41.0977 43.1306 41.0903 42.2119 41.0903Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_225">
                        <rect
                          width="36.3685"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Professional Services</h3>
                  <p>
                    Experience the best fitness and wellness services with us.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_261)">
                      <path
                        d="M41.9807 24C42.3543 24 42.728 24 43.1054 24C43.868 24.1906 44.4704 24.6367 44.9851 25.2124C45.1338 25.3764 45.252 25.4107 45.4121 25.2277C45.9268 24.6558 46.5254 24.2059 47.2842 24C47.6578 24 48.0315 24 48.4089 24C49.1715 24.1944 49.7739 24.6405 50.2886 25.2163C50.4411 25.3878 50.5593 25.3954 50.7194 25.2201C51.2341 24.6482 51.8327 24.1983 52.5914 24C52.9651 24 53.3387 24 53.7162 24C54.0937 24.1411 54.4825 24.2593 54.8143 24.5109C56.2631 25.6051 56.3927 27.5115 55.1116 28.8803C54.9363 29.0671 54.6236 29.212 54.6236 29.4598C54.6236 29.7038 54.9363 29.8487 55.1116 30.0355C55.9237 30.9086 56.2021 31.9037 55.8246 33.0552C55.6264 33.6614 55.2031 34.1075 54.7571 34.5307C54.5855 34.6946 54.5626 34.8128 54.7532 34.9844C55.0697 35.2703 55.3709 35.5754 55.5844 35.949C56.2745 37.15 56.0915 38.4692 55.085 39.491C54.2957 40.2917 53.4989 41.0809 52.702 41.8739C52.0615 42.5145 51.5887 42.5145 50.9444 41.8739C49.5603 40.4937 48.1763 39.1097 46.7961 37.7257C46.6208 37.5503 46.4987 37.4817 46.2891 37.6952C43.4257 40.57 40.5586 43.4371 37.6838 46.3005C37.497 46.4873 37.516 46.6093 37.6952 46.7847C38.2404 47.3147 38.7704 47.8561 39.308 48.3937C40.1964 49.282 41.0923 50.1704 41.9769 51.0664C42.4458 51.5429 42.4763 52.0882 42.0417 52.5304C41.1686 53.4226 40.2955 54.3148 39.3919 55.1765C38.3968 56.122 37.1119 56.2593 35.9452 55.592C35.5792 55.3823 35.278 55.0926 35.0035 54.7799C34.8166 54.5664 34.6794 54.5817 34.504 54.7837C34.3477 54.9629 34.1685 55.1231 33.9855 55.2794C32.9942 56.1182 31.7703 56.2326 30.6494 55.592C30.2643 55.3747 29.9593 55.0544 29.6619 54.738C29.5132 54.5779 29.4026 54.5817 29.2501 54.738C29.0328 54.9629 28.8078 55.1803 28.5676 55.3747C27.5458 56.2059 26.0817 56.1983 25.0485 55.3785C24.4995 54.9439 24.2021 54.3643 24 53.7162C24 53.3425 24 52.9689 24 52.5914C24.1983 51.8289 24.6482 51.2303 25.2201 50.7156C25.3954 50.5593 25.384 50.4373 25.2163 50.2848C24.6405 49.7739 24.1944 49.1714 24 48.4089C24 48.0353 24 47.6616 24 47.2842C24.2021 46.5254 24.652 45.9268 25.2277 45.4121C25.4069 45.2482 25.3764 45.13 25.2124 44.9851C24.6367 44.4704 24.1906 43.868 24 43.1054C24 42.7509 24 42.3963 24 42.0455C24.1678 41.3058 24.5948 40.7339 25.1286 40.2154C25.853 39.5139 26.5583 38.7933 27.2713 38.0803C27.8966 37.455 28.377 37.4588 29.0061 38.0841C30.3748 39.4529 31.7436 40.8178 33.1124 42.1866C33.4288 42.503 33.4326 42.503 33.7453 42.1904C36.5628 39.3728 39.3804 36.559 42.1942 33.7415C42.503 33.4326 42.503 33.4288 42.1828 33.1085C40.7949 31.7169 39.4033 30.3291 38.0155 28.9374C37.4779 28.3999 37.4817 27.8737 38.0155 27.3361C38.6751 26.6727 39.3499 26.0207 39.9981 25.3459C40.5624 24.7549 41.161 24.2211 41.9807 24ZM37.4436 54.0479C37.6838 54.0365 37.9164 53.9145 38.1184 53.7162C38.6675 53.1633 39.2165 52.6067 39.777 52.0653C39.9523 51.8937 39.9485 51.7793 39.777 51.6078C35.9719 47.8065 32.1668 44.0052 28.3655 40.1964C28.1749 40.0057 28.0567 40.0324 27.8851 40.2116C27.3857 40.7263 26.871 41.2296 26.3639 41.7367C25.7615 42.3429 25.7577 42.7814 26.3601 43.3838C28.6629 45.6866 30.9658 47.9895 33.2687 50.2924C34.3934 51.4171 35.522 52.5419 36.6429 53.6704C36.8564 53.8801 37.089 54.0441 37.4436 54.0479ZM54.0403 37.4665C54.0441 37.1081 53.8992 36.8793 53.6895 36.6734C50.2238 33.2077 46.7618 29.7419 43.2961 26.28C42.8081 25.792 42.3162 25.792 41.8282 26.2762C41.3097 26.7871 40.7988 27.3056 40.284 27.8203C39.9714 28.133 39.9676 28.1368 40.284 28.4494C43.0559 31.2213 45.8315 33.9969 48.6034 36.7687C49.6023 37.7677 50.6088 38.7666 51.604 39.7731C51.7679 39.9409 51.8861 39.9676 52.0615 39.7846C52.6105 39.2165 53.1748 38.6598 53.7353 38.1032C53.9259 37.9087 54.0326 37.6838 54.0403 37.4665ZM54.0441 32.1554C54.0593 31.816 53.884 31.5682 53.6552 31.3394C52.05 29.7381 50.4449 28.133 48.8436 26.5278C48.0124 25.6967 47.7036 25.7043 46.861 26.5278C46.6284 26.7528 46.6474 26.8786 46.8686 27.0997C48.5119 28.7239 50.1399 30.3596 51.7717 31.9952C52.1606 32.3841 52.5495 32.7768 52.9422 33.1619C53.0185 33.2382 53.11 33.3869 53.2244 33.2839C53.5675 32.9598 53.9945 32.693 54.0441 32.1554ZM32.1363 54.0479C32.2774 54.0441 32.4756 53.9945 32.6472 53.8611C32.7273 53.7963 32.8073 53.7276 32.8798 53.6514C33.4555 53.0604 33.4517 53.2358 32.895 52.6753C31.0611 50.8338 29.2196 48.9961 27.3781 47.1545C26.7909 46.5674 26.7909 46.5674 26.2228 47.1774C25.8148 47.6159 25.8034 48.1115 26.2266 48.5347C27.9576 50.2771 29.6962 52.0081 31.4348 53.7467C31.6063 53.9221 31.8122 54.0288 32.1363 54.0479ZM42.4306 38.7094C42.4153 38.6827 42.3963 38.6293 42.362 38.595C42.0341 38.2633 41.7024 37.9316 41.3707 37.6037C41.2487 37.4817 41.1457 37.5542 41.0504 37.6495C39.918 38.7818 38.7895 39.9142 37.6533 41.0428C37.5122 41.1838 37.5084 41.2944 37.6533 41.4355C37.9507 41.7252 38.2443 42.0188 38.534 42.3162C38.6751 42.4611 38.7857 42.4535 38.9267 42.3124C40.0477 41.1838 41.1724 40.0629 42.2972 38.9382C42.3543 38.8772 42.423 38.82 42.4306 38.7094ZM45.0881 36.113C45.0919 36.0214 45.0461 35.9757 45.0004 35.9299C44.6801 35.6059 44.3522 35.2894 44.0357 34.9615C43.9023 34.8243 43.807 34.8814 43.7002 34.992C43.4028 35.2932 43.1016 35.5982 42.7966 35.8918C42.667 36.0176 42.6403 36.1168 42.7852 36.254C43.0978 36.5552 43.4066 36.8641 43.7079 37.1767C43.8413 37.3178 43.9442 37.2987 44.0701 37.1691C44.3636 36.8641 44.6687 36.5667 44.9699 36.2655C45.0156 36.2159 45.0575 36.1549 45.0881 36.113ZM36.0481 42.6784C36.0214 42.6975 35.9757 42.7204 35.9414 42.7585C35.6097 43.0864 35.2818 43.4181 34.9501 43.746C34.8243 43.8718 34.8853 43.9633 34.9844 44.0586C35.2932 44.3636 35.6059 44.6687 35.9071 44.9851C36.0443 45.1262 36.1435 45.0995 36.2693 44.9737C36.5628 44.6686 36.8641 44.3674 37.1691 44.0739C37.2987 43.9481 37.3178 43.8489 37.1767 43.7117C36.8641 43.4105 36.559 43.0978 36.2502 42.789C36.2006 42.7356 36.1549 42.6784 36.0481 42.6784ZM54.0479 26.7871C54.0212 26.4554 53.8763 26.1809 53.5599 26.0207C53.232 25.8568 52.9079 25.8835 52.6219 26.1046C52.4122 26.2686 52.2331 26.4744 52.0386 26.6613C51.9204 26.7756 51.9547 26.8786 52.0615 26.9815C52.2597 27.1798 52.4542 27.3819 52.6563 27.5763C53.2434 28.1482 53.0604 28.1597 53.6819 27.5611C53.8954 27.3476 54.0403 27.1074 54.0479 26.7871ZM26.81 54.0479C26.8366 54.0441 26.8672 54.0441 26.8977 54.0403C27.4124 53.9678 27.6716 53.5561 27.9881 53.2205C28.0453 53.1595 27.9995 53.0795 27.9461 53.0261C27.6183 52.6944 27.2865 52.3665 26.9587 52.0348C26.8557 51.9318 26.7604 51.9433 26.6613 52.0424C26.4744 52.2369 26.2686 52.4161 26.1046 52.6296C25.8835 52.9155 25.8606 53.2396 26.0245 53.5675C26.1847 53.8763 26.4592 54.0212 26.81 54.0479Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_261">
                        <rect
                          width="31.9962"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Fitness and Wellness</h3>
                  <p>
                    We have specialised experience to take your automotive
                    business forward.
                  </p>
                </div>
                <div className="indus-card2-main-flex">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#E4E8FF" />
                    <g clipPath="url(#clip0_3391_297)">
                      <path
                        d="M24 50.647C24 46.7186 24 42.7945 24 38.866C24.0131 38.8223 24.0306 38.783 24.0393 38.7393C24.5331 36.6331 25.8266 35.3003 27.9241 34.7541C28.1295 34.7016 28.2081 34.5793 28.2518 34.3914C28.4091 33.7359 28.5227 33.0586 28.7587 32.4293C29.0602 31.6253 28.8636 31.031 28.3611 30.3493C27.8279 29.6283 27.2948 29.2394 26.3684 29.3574C25.7479 29.4404 25.3066 28.9379 25.3109 28.3392C25.3153 27.758 25.7479 27.3385 26.3597 27.3298C26.836 27.3254 27.3167 27.3604 27.793 27.321C28.4048 27.273 28.8374 27.5002 29.1651 28.0115C29.3006 28.2212 29.4273 28.4616 29.6938 28.6145C29.8206 28.1338 29.9254 27.6837 30.0565 27.238C30.6115 25.3503 32.39 24.0087 34.3564 24.0044C38.8311 24 43.3101 24.0044 47.7848 24C48.1082 24 48.4271 24.0306 48.7418 24.1136C50.5159 24.5768 51.6477 25.6998 52.1502 27.4609C52.2595 27.8367 52.3469 28.2212 52.4561 28.6495C52.762 28.3611 52.9411 28.0552 53.1596 27.7799C53.3694 27.5133 53.6272 27.3385 53.9768 27.3342C54.5973 27.3298 55.2222 27.321 55.8427 27.3342C56.4064 27.3473 56.8259 27.7842 56.8303 28.3392C56.8346 28.9116 56.4195 29.353 55.8383 29.3748C55.5062 29.3836 55.1697 29.388 54.8376 29.3748C54.641 29.3705 54.5055 29.4404 54.3875 29.5977C54.0249 30.0915 53.6622 30.5809 53.2864 31.0616C53.1553 31.2276 53.129 31.3893 53.1815 31.586C53.4174 32.508 53.6578 33.43 53.8763 34.3564C53.9375 34.6099 54.0642 34.7278 54.3089 34.7803C54.8376 34.8895 55.3227 35.108 55.7771 35.3921C57.0968 36.2179 57.8528 37.4196 58.1368 38.936C58.1368 42.8382 58.1368 46.7448 58.1368 50.647C57.8921 51.1583 57.4945 51.3768 56.9264 51.3418C56.5593 51.3199 56.1923 51.3462 55.8252 51.3331C55.5805 51.3243 55.4844 51.4248 55.4887 51.6652C55.4975 52.207 55.4975 52.7532 55.4887 53.2951C55.4713 54.7502 54.2346 55.9738 52.7751 55.9913C52.1196 56 51.4642 56 50.8087 55.9913C49.3535 55.9738 48.1213 54.7415 48.1082 53.282C48.1038 52.7489 48.0994 52.2158 48.1082 51.687C48.1125 51.4336 48.0208 51.3331 47.7586 51.3331C43.2926 51.3374 38.8311 51.3374 34.3651 51.3331C34.103 51.3331 34.0112 51.4336 34.0156 51.687C34.0287 52.2201 34.0243 52.7532 34.0156 53.282C33.9981 54.7415 32.7702 55.9738 31.315 55.9913C30.6596 56 30.0041 56 29.3486 55.9913C27.8716 55.9738 26.6481 54.7415 26.635 53.2601C26.6306 52.727 26.6262 52.1939 26.635 51.6652C26.6394 51.4205 26.5432 51.3243 26.2985 51.3331C25.9314 51.3418 25.5644 51.3156 25.1973 51.3418C24.6424 51.3768 24.2447 51.1539 24 50.647ZM41.0553 34.6492C44.4637 34.6492 47.8766 34.6492 51.285 34.6492C51.8094 34.6492 51.8094 34.6492 51.6783 34.1248C51.1801 32.1366 50.682 30.1483 50.1838 28.16C49.8386 26.7792 48.9078 26.0494 47.4658 26.0494C43.2009 26.0494 38.936 26.0494 34.6667 26.0494C33.2246 26.0494 32.2982 26.7748 31.9487 28.1644C31.4461 30.1614 30.948 32.1628 30.4454 34.1598C30.3275 34.6361 30.3318 34.6448 30.8212 34.6448C34.2341 34.6492 37.6469 34.6492 41.0553 34.6492ZM41.0728 36.6986C37.1531 36.6986 33.229 36.6986 29.3093 36.6986C28.9641 36.6986 28.6189 36.7248 28.2868 36.8079C26.9278 37.1443 26.0407 38.3198 26.032 39.8099C26.0232 41.4967 26.0276 43.179 26.0276 44.8658C26.0276 45.2896 26.0363 45.2984 26.4602 45.2984C29.3836 45.2984 32.3026 45.294 35.226 45.3027C35.5406 45.3027 35.6586 45.2153 35.6542 44.8876C35.6368 43.8476 35.6455 42.8032 35.6499 41.7632C35.6499 41.0466 36.0475 40.6445 36.7598 40.6445C39.6351 40.6402 42.5148 40.6402 45.3901 40.6445C46.1024 40.6445 46.5001 41.0466 46.5001 41.7632C46.5044 42.8163 46.5088 43.8695 46.4957 44.9226C46.4913 45.2153 46.5962 45.3071 46.8846 45.3071C49.8386 45.2984 52.7926 45.2984 55.7509 45.3071C56.0218 45.3071 56.1267 45.2197 56.1224 44.9444C56.1136 43.2271 56.1311 41.5054 56.1136 39.7881C56.1005 38.5995 55.598 37.6731 54.5449 37.0744C54.0249 36.7816 53.4568 36.703 52.8712 36.703C48.9384 36.6943 45.0056 36.6986 41.0728 36.6986ZM41.1077 47.3434C36.9521 47.3434 32.8008 47.3434 28.6451 47.3434C27.8891 47.3434 27.1331 47.3522 26.3772 47.3391C26.1193 47.3347 26.0145 47.4265 26.0232 47.6887C26.0363 48.0426 26.0276 48.3966 26.0276 48.7549C26.0276 49.288 26.0276 49.288 26.5563 49.288C36.2311 49.288 45.9058 49.288 55.5805 49.288C55.6592 49.288 55.7378 49.2836 55.8121 49.288C56.0218 49.2967 56.118 49.205 56.1136 48.9908C56.1092 48.615 56.1136 48.2349 56.1136 47.8591C56.1136 47.3434 56.1136 47.3434 55.6023 47.3434C50.7694 47.3434 45.9364 47.3434 41.1077 47.3434ZM41.0335 45.294C42.056 45.294 43.0742 45.2896 44.0967 45.2984C44.3545 45.3027 44.4506 45.2066 44.4463 44.9488C44.4332 44.3064 44.4375 43.6641 44.4463 43.0217C44.4506 42.7814 44.3632 42.6809 44.1185 42.6852C42.0866 42.6896 40.059 42.6896 38.027 42.6852C37.7823 42.6852 37.6906 42.777 37.6949 43.0173C37.7037 43.6379 37.7124 44.2584 37.6906 44.8789C37.6818 45.1935 37.778 45.3115 38.1057 45.3027C39.0802 45.2853 40.059 45.294 41.0335 45.294ZM30.358 51.3374C29.9036 51.3374 29.4491 51.3418 28.9947 51.3374C28.7849 51.3331 28.6932 51.4248 28.6975 51.6346C28.7019 52.1109 28.6888 52.5872 28.7019 53.0635C28.715 53.6403 29.0122 53.9331 29.6021 53.9462C30.0915 53.9549 30.5765 53.9549 31.066 53.9462C31.669 53.9375 31.9661 53.6447 31.9792 53.0416C31.988 52.5872 31.9705 52.1327 31.9836 51.6783C31.9924 51.4161 31.8787 51.3243 31.6253 51.3331C31.2014 51.3462 30.7775 51.3374 30.358 51.3374ZM51.7919 53.9462C52.0453 53.9462 52.3032 53.9549 52.5566 53.9462C53.129 53.9287 53.4218 53.6447 53.4393 53.081C53.4524 52.6047 53.4393 52.1284 53.4437 51.6521C53.448 51.4248 53.3563 51.3331 53.129 51.3331C52.242 51.3374 51.3549 51.3374 50.4678 51.3331C50.2625 51.3331 50.1576 51.4073 50.162 51.6258C50.1663 52.124 50.1488 52.6221 50.1707 53.1203C50.1925 53.6316 50.4809 53.9112 50.9922 53.9375C51.2588 53.9549 51.5253 53.9462 51.7919 53.9462Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M31.0092 37.9746C32.696 37.9746 34.0287 39.3074 34.0287 40.9941C34.0287 42.694 32.6916 44.018 30.9786 44.0137C29.3006 44.0093 27.9722 42.6678 27.9766 40.9766C27.9766 39.303 29.3181 37.9746 31.0092 37.9746ZM31.9662 41.0116C31.9793 40.5178 31.5205 40.0459 31.0136 40.0328C30.5198 40.0197 30.0435 40.4829 30.0304 40.981C30.0173 41.4748 30.4805 41.9467 30.983 41.9599C31.4811 41.973 31.9531 41.5141 31.9662 41.0116Z"
                        fill="#0B56E4"
                      />
                      <path
                        d="M54.1655 41.0072C54.1611 42.6896 52.8283 44.018 51.1372 44.0137C49.4373 44.0137 48.1089 42.6765 48.1133 40.9635C48.1177 39.2899 49.4636 37.9702 51.159 37.9702C52.8414 37.979 54.1655 39.3161 54.1655 41.0072ZM52.1029 41.0116C52.116 40.5178 51.6572 40.0459 51.1503 40.0328C50.6565 40.0197 50.1802 40.4829 50.1671 40.981C50.154 41.4748 50.6172 41.9467 51.1197 41.9599C51.6179 41.973 52.0942 41.5141 52.1029 41.0116Z"
                        fill="#0B56E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3391_297">
                        <rect
                          width="34.1412"
                          height="32"
                          fill="white"
                          transform="translate(24 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Hospitality</h3>
                  <p>
                    Discover best professional services with comprehensive web
                    offering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* this is Ankit slier   our work*/}
        <div className="USA-ourWork-banner">
          <div className="USA-ourWork-main-container">
            <div className="USA-ourWork-Top">
              <div className="USA-ourWork-topleft">
                <h3>Our Works</h3>
              </div>
              <div className="USA-ourWork-toprighty">
                <a href={currentItem.link} target={currentItem.target}>
                  <p>Visit Link</p>
                  <svg
                    width="70"
                    height="60"
                    viewBox="0 0 116 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.66005"
                      y="1.30556"
                      width="113.035"
                      height="91.3889"
                      rx="45.6944"
                      fill="#0E151D"
                    />
                    <rect
                      x="1.66005"
                      y="1.30556"
                      width="113.035"
                      height="91.3889"
                      rx="45.6944"
                      stroke="#F3F3F4"
                      strokeWidth="2.61111"
                    />
                    <path
                      d="M63.889 43.4954L50.4511 56.9333L48.2437 54.7258L61.6816 41.2879L49.3198 41.2879L49.3474 38.1699H67.0071V55.8295L63.889 55.8571L63.889 43.4954Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="USA-ourWork-content">
              <div className="USA-ourWork-left-card">
                {currentItem.svgleft}
                <h2>{currentItem.leftitle}</h2>
                <p>{currentItem.quote}</p>
                <a href={currentItem.link} target={currentItem.target || "_self"}>
                  <div className="USA-ourWork-buton-group23">
                    <button type="button">
                      <span>Case study </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.707 17.707L16.414 12L10.707 6.29303L9.29297 7.70703L13.586 12L9.29297 16.293L10.707 17.707Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </a>

                <div className="USA-ourWork-aero-left">
                  <svg
                    onClick={handlePrev}
                    width="52"
                    height="52"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow-btn"
                  >
                    <rect
                      x="-1"
                      y="1"
                      width="70"
                      height="70"
                      rx="35"
                      transform="matrix(-1 0 0 1 70 0)"
                      fill="white"
                    />
                    <rect
                      x="-1"
                      y="1"
                      width="70"
                      height="70"
                      rx="35"
                      transform="matrix(-1 0 0 1 70 0)"
                      stroke="#F3F3F4"
                      strokeWidth="2"
                    />
                    <path
                      d="M31.825 37H44V35H31.825L37.425 29.4L36 28L28 36L36 44L37.425 42.6L31.825 37Z"
                      fill="#737476"
                    />
                  </svg>
                  <svg
                    onClick={handleNext}
                    width="52"
                    height="52"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow-btn"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="70"
                      height="70"
                      rx="35"
                      fill="white"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="70"
                      height="70"
                      rx="35"
                      stroke="#F3F3F4"
                      strokeWidth="2"
                    />
                    <path
                      d="M40.175 37H28V35H40.175L34.575 29.4L36 28L44 36L36 44L34.575 42.6L40.175 37Z"
                      fill="#737476"
                    />
                  </svg>
                </div>
              </div>
              <div className="USA-ourWork-right-image2">
                <img
                  src={currentItem.rightimg}
                  alt={currentItem.leftitle}
                  title={currentItem.leftitle}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="logo-container">
          <div className="logo-sliders">
            <div className="logo-heading">
              <p className="primary-heading">
                Our esteemed clients
              </p>
            </div>
            {renderSlider(slider1Images)}
            {/* {renderSlider(slider2Images, true)} */}
            {/* {renderSlider(slider3Images)} */}
          </div>
        </div>
      </div>


      <IndustriesFAQ />

      <Website/>
      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <img
            className="what-image-universal"
            src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172941/whatsapp_cowbb8.png'
            alt="whatsApp-kusheldigi"
            title="whatsApp-kusheldigi"
          />
        </button>
        <button onClick={callHandler}>
          <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172987/telephone_qjoh3j.png' alt="call-icon" title="call-icon" />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Industries;
