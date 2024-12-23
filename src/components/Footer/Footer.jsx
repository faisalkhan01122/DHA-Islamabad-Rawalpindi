// import React from "react";
// import { BsTwitterX } from "react-icons/bs";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // Adjust the path to your logo

// const Footer = () => {
//   const links = [
//     "FAQ's",
//     "Ballot - dha PH-VII(Comm) ",
//     "Buy/Sell Your Property",
//     "Register as JV Partner",
//     "Career Opportunities",
//   ];

//   return (
//     <footer className="bg-primary text-black">
//       <div className="flex flex-col md:flex-row gap-4 w-full mx-auto p-6">
//         {/* Column 1: Address and Contact Info */}
//         <div className="flex  md:w-1/4 items-center justify-center text-center">
//           <img
//             src="/dhalog1o.jpg"
//             alt="logo"
//             className="object-cover w-40 pb-5 h-48 md:h-54"
//           />
//           <img
//             src="/footerimg.png"
//             alt="logo"
//             className="object-cover  pb-5 h-48 md:h-54"
//           />
//         </div>

//         {/* Column 2: Quick Links */}
//         <div className="flex flex-col md:w-1/4 items-center md:items-start">
//           <h3 className="text-center text-[1.2rem] font-bold mb-4">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 ">
//             {links.map((link, index) => (
//               <li
//                 key={index}
//                 className="text-[.8rem] font-semibold md:text-[.9rem]"
//               >
//                 <a href="#" className="hover:text-gray-300">
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3: Site Links */}
//         <div className="flex flex-col md:w-1/4 items-center md:items-start">
//           <h3 className="text-[1rem] md:text-[1.2rem] font-bold mb-4">
//             Site Links
//           </h3>
//           <ul className="space-y-2">
//             <li className="text-[.8rem] font-semibold md:text-[.9rem]">
//               <a href="/">Call Us:</a>
//               <h1>+92-51-111-555-400</h1>
//             </li>
//             <li className="text-[.8rem] font-semibold md:text-[.9rem]">
//               <a href="/">Send an Email:</a>
//               <h1>info@dhai-r.com.pk</h1>
//             </li>
//             <li className="text-[.8rem] font-semibold md:text-[.9rem]">
//               <h1 className="flex  text-[1.6rem] gap-4 mt-2">
//                 <Link to={"https://www.youtube.com/@DhaIslamabad-rawalpindi"}>
//                   <FaYoutube className="text-red-700" />
//                 </Link>
//                 <Link
//                   to={
//                     "https://www.linkedin.com/company/defence-housing-authority-dha-islamabad/"
//                   }
//                 >
//                   <FaLinkedin className="text-blue-800" />
//                 </Link>

//                 <Link to={"https://www.instagram.com/dhaislamabad_official/"}>
//                   <FaInstagram className="text-red-400" />
//                 </Link>

//                 <Link
//                   to={
//                     "https://www.facebook.com/profile.php?id=100077164429184&ref=xav_ig_profile_web"
//                   }
//                 >
//                   <FaFacebookF className="text-blue-600" />
//                 </Link>
//                 <Link to={"https://twitter.com/Dhair_official"}>
//                   <BsTwitterX className="text-black" />
//                 </Link>
//               </h1>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { text: "FAQ's", href: "#" },
    { text: "Ballot - dha PH-VII(Comm)", href: "#" },
    { text: "Buy/Sell Your Property", href: "#" },
    { text: "Register as JV Partner", href: "#" },
    { text: "Career Opportunities", href: "#" },
  ];

  const socialLinks = [
    {
      href: "https://www.youtube.com/@DhaIslamabad-rawalpindi",
      icon: <FaYoutube className="text-red-700" />,
    },
    {
      href: "https://www.linkedin.com/company/defence-housing-authority-dha-islamabad/",
      icon: <FaLinkedin className="text-blue-800" />,
    },
    {
      href: "https://www.instagram.com/dhaislamabad_official/",
      icon: <FaInstagram className="text-red-400" />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=100077164429184&ref=xav_ig_profile_web",
      icon: <FaFacebookF className="text-blue-600" />,
    },
    {
      href: "https://twitter.com/Dhair_official",
      icon: <BsTwitterX className="text-black" />,
    },
  ];

  return (
    <footer className="bg-primary text-black">
      <div className="flex flex-col md:flex-row gap-6 w-full mx-auto p-6">
        {/* Column 1: Images */}
        <div className="flex gap-4 items-center md:w-2/3">
          <div className="mb-4 flex items-center">
            <img
              src="/dhalog1o.jpg"
              alt="DHA Logo"
              className="object-contain w-32 h-auto" // Reduced width for the logo
            />
          </div>
          <div>
            <img
              src="/footerimg.png"
              alt="QR Mobile App"
              className="object-contain w-32 h-auto" // Set to appropriate size for the QR code
            />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col md:w-1/3 items-center md:items-start">
          <h3 className="text-center text-[1.2rem] font-bold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-[.8rem] font-semibold md:text-[.9rem]"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Site Links */}
        <div className="flex flex-col md:w-1/3 items-center md:items-start">
          <h3 className="text-[1rem] md:text-[1.2rem] font-bold mb-4">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="text-[.8rem] font-semibold md:text-[.9rem]">
              <span>Call Us:</span>
              <p className="mt-1 text-base font-bold">+92-51-111-555-400</p>
            </li>
            <li className="text-[.8rem] font-semibold md:text-[.9rem]">
              <span>Email:</span>
              <p className="mt-1 text-base font-bold">info@dhai-r.com.pk</p>
            </li>
            <li className="text-[1rem] font-semibold md:text-[1.5rem]">
              <div className="flex gap-4 mt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75 transition-opacity duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
