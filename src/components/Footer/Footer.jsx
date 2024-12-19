import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// Adjust the path to your logo

const Footer = () => {
  const links = [
    "FAQ's",
    "Ballot - dha PH-VII(Comm) ",
    "Buy/Sell Your Property",
    "Register as JV Partner",
    "Career Opportunities",
  ];

  return (
    <footer className="bg-primary text-black">
      <div className="flex flex-col md:flex-row gap-4 w-full mx-auto p-6">
        {/* Column 1: Address and Contact Info */}
        <div className="flex flex-col md:w-3/4 items-center justify-center text-center">
          <img
            src="/footerimg.png"
            alt="logo"
            className="object-cover  pb-5 h-48 md:h-56"
          />
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col md:w-1/4 items-center md:items-start">
          <h3 className="text-center text-[1.2rem] font-bold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 ">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-[.8rem] font-semibold md:text-[.9rem]"
              >
                <a href="#" className="hover:text-gray-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Site Links */}
        <div className="flex flex-col md:w-1/4 items-center md:items-start">
          <h3 className="text-[1rem] md:text-[1.2rem] font-bold mb-4">
            Site Links
          </h3>
          <ul className="space-y-2">
            <li className="text-[.8rem] font-semibold md:text-[.9rem]">
              <a href="/">Call Us:</a>
              <h1>+92-51-111-555-400</h1>
            </li>
            <li className="text-[.8rem] font-semibold md:text-[.9rem]">
              <a href="/">Send an Email:</a>
              <h1>info@dhai-r.com.pk</h1>
            </li>
            <li className="text-[.8rem] font-semibold md:text-[.9rem]">
              <a href="/">Release Date: 01 Jan, 2020 Ver: 1.4</a>
              <h1 className="flex  text-[1.6rem] gap-4 mt-2">
                <Link to={"https://www.youtube.com/@DhaIslamabad-rawalpindi"}>
                  <FaYoutube className="text-red-700" />
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/company/defence-housing-authority-islamabad-rawalpindi/?_l=en_US"
                  }
                >
                  <FaLinkedin className="text-blue-800" />
                </Link>

                <Link to={"https://www.instagram.com/dhaislamabad_official/"}>
                  <FaInstagram className="text-red-400" />
                </Link>

                <Link
                  to={
                    "https://www.facebook.com/profile.php?id=100077164429184&ref=xav_ig_profile_web"
                  }
                >
                  <FaFacebookF className="text-blue-600" />
                </Link>
                <Link to={"https://twitter.com/Dhair_official"}>
                  <BsTwitterX className="text-black" />
                </Link>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
