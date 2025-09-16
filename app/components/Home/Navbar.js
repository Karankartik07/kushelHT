// import { useState } from "react";
// import OutsideClickHandler from "react-outside-click-handler";
// import Image from "next/image";
// import { FiPlus, FiMinus } from "react-icons/fi";
// import { RxCross2 } from "react-icons/rx";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import Link from 'next/link'; // Use Next.js Link for navigation

// import location from "../images/location.png";
// import mail from "../images/mail.png";
// import logo from "../images/logo.png";
// import letter2 from "../images/letter2.png";
// import letter3 from "../images/letter3.png";
// import aboutimg from "../images/aboutimg.png";
// import layer from "../images/Layer_1.png";

// const data = [
//   {
//     title: "About",
//     subpart: [
//       {
//         title: "Careers",
//         navigate: "/career"
//       },
//     ]
//   },
//   {
//     title: "Services",
//     subpart: [
//       {
//         title: "Mobile App Development",
//         navigate: "/mobile-application-development",
//         subpart: [
//           {
//             title: "iOS",
//             navigate: "/ios"
//           },
//           {
//             title: "Android",
//             navigate: "/android"
//           }
//         ]
//       },
//       {
//         title: "E-commerce development",
//         navigate: "/ecommerce-development",
//         subpart: [
//           {
//             title: "Bigcommerce",
//             navigate: "/bigcommerce-development"
//           },
//           {
//             title: "Shopify",
//             navigate: "/shopify"
//           },
//           {
//             title: "Magento",
//             navigate: "/magento"
//           },
//           {
//             title: "WooCommerce",
//             navigate: "/woocommerce"
//           },
//         ]
//       },
//       {
//         title: "Website Development",
//         navigate: "/web-development",
//         subpart: [
//           {
//             title: "PHP",
//             navigate: "/php"
//           },
//           {
//             title: "React.js",
//             navigate: "/react-js"
//           },
//           {
//             title: "HTML5",
//             navigate: "/html5"
//           },
//           {
//             title: "Node.js",
//             navigate: "/node-js"
//           },
//           {
//             title: "WordPress",
//             navigate: "/wordpress"
//           },
//           {
//             title: "Next.js",
//             navigate: "/next-js"
//           },
//         ]
//       },
//       {
//         title: "Cross Platform App Development",
//         navigate: "/react-native",
//         subpart: [
//           {
//             title: "React Native",
//             navigate: "/react-native"
//           },
//           {
//             title: "Flutter",
//             navigate: "/flutter"
//           },
//           {
//             title: "Kotlin",
//             navigate: "/kotlin"
//           },
//         ]
//       },
//       {
//         title: "Headless Commerce",
//         navigate: "/headless-commerce"
//       },
//       {
//         title: "Graphic Design",
//         navigate: "/graphic-design",
//         subpart: [
//           {
//             title: "Adobe Photoshop",
//             navigate: "/graphic-design"
//           },
//           {
//             title: "Adobe Illustrator",
//             navigate: "/graphic-design"
//           },
//           {
//             title: "CorelDraw",
//             navigate: "/graphic-design"
//           },
//         ]
//       },
//       {
//         title: "Digital Marketing",
//         navigate: "/digital-marketing-agency",
//         subpart: [
//           {
//             title: "SEO",
//             navigate: "/seo"
//           },
//           {
//             title: "SMM",
//             navigate: "/smm"
//           },
//           {
//             title: "PPC",
//             navigate: "/ppc"
//           },
//         ]
//       },
//       {
//         title: "App & Web Designing",
//         navigate: "/ui-ux-design",
//         subpart: [
//           {
//             title: "UI & UX Designing",
//             navigate: "/ui-ux-design"
//           },
//         ]
//       },
//       {
//         title: "Custom Software Development",
//         navigate: "/custom-software-development"
//       },
//     ]
//   },
//   {
//     title: "Solutions",
//     navigate: "/solutions"
//   },
//   {
//     title: "Industries",
//     navigate: "/industries"
//   },
//   {
//     title: "Portfolio",
//     navigate: "/portfolio"
//   },
//   {
//     title: "Blogs",
//     navigate: "/blog"
//   },
//   {
//     title: "Hire",
//     subpart: [
//       {
//         title: "Hire PHP Developer",
//         navigate: "/hire/php-developer"
//       },
//       {
//         title: "Hire Laravel Developer",
//         navigate: "/hire/laravel-developer"
//       },
//       {
//         title: "Hire Node.js Developer",
//         navigate: "/hire/nodejs-developer"
//       },
//       {
//         title: "Hire React.js Developer",
//         navigate: "/hire/react-js-developer"
//       },
//       {
//         title: "Hire WordPress Developer",
//         navigate: "/hire/wordpress-developer"
//       },
//       {
//         title: "Hire Android Developer",
//         navigate: "/hire/android-developer"
//       },
//       {
//         title: "Hire iOS Developer",
//         navigate: "/hire/ios-developer"
//       },
//       {
//         title: "Hire Flutter Developer",
//         navigate: "/hire/flutter-developer"
//       },
//       {
//         title: "Hire React Native Developer",
//         navigate: "/hire/react-native-developer"
//       },
//     ]
//   },
// ];

// const Navbar = () => {
//   const [curopen, setcuropen] = useState(false);
//   const [toggle, setToggle] = useState(false);

//   const toggleMenu = () => {
//     document.querySelector(".mob-nav2").classList.toggle("mob-nav2-active");
//   };

//   const toggleService1 = () => {
//     document.querySelector(".ser-nav-mob").classList.toggle("hidden");
//   };

//   const toggleService2 = () => {
//     document.querySelector(".ser-nav-mob1").classList.toggle("hidden");
//   };

//   const toggleService3 = () => {
//     document.querySelector(".ser-nav-mob2").classList.toggle("hidden");
//   };

//   return (
//     <div className="navbar">
//       <div className="logo">
//         <Image src={logo} alt="Logo" />
//       </div>
//       <div className="menu">
//         {data.map((item, index) => (
//           <div key={index}>
//             <Link href={item.navigate || "#"}>
//               <a>{item.title}</a>
//             </Link>
//             {item.subpart && (
//               <div>
//                 {item.subpart.map((subitem, subindex) => (
//                   <div key={subindex}>
//                     <Link href={subitem.navigate}>
//                       <a>{subitem.title}</a>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
