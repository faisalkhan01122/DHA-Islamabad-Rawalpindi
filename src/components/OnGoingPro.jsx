import React from "react";
import Slider from "react-slick";
import "./OurProjectSlider.css";
// Import the required styles (if not imported globally)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ourproject1 from "../assets/Images/Phases/DHA Down Town.jpg";
import ourproject2 from "../assets/Images/Phases/RVN Pic.jpg";
import ourproject3 from "../assets/Images/Phases/RVS Pic (1).jpg";
import { Link } from "react-router-dom";

const OnGoingPro = () => {
  const slides = [
    {
      img: ourproject1,
      link: "/OnGoing",
      title: "DHA Down Town",
    },
    {
      img: ourproject2,
      link: "/OnGoing",
      title: "River View North ",
    },
    {
      img: ourproject3,
      link: "/OnGoing",
      title: "River View South",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <button className="slick-prev">
        <span className="text-primary text-3xl">&#10094;</span>{" "}
        {/* Left arrow */}
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <span className="text-primary text-3xl">&#10095;</span>{" "}
        {/* Right arrow */}
      </button>
    ),
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-3 px-4 md:px-0 relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full  md:h-[70vh] object-cover  rounded-md p-0 m-0"
            />
            <div className="absolute bottom-4 left-0 bg-black opacity-50 h-20 flex items-center gap-4 w-full text-start ">
              <Link
                to={slide.link}
                className="inline-block bg-transparent border-2 border-primary ms-4 px-6 py-2 text-sm font-bold text-primary rounded-lg hover:bg-primary-dark transition-all"
              >
                See More
              </Link>
              <div className="flex justify-center items-center md:w-[40%]">
                <h1 className="text-center text-xl md:text-2xl font-bold text-white">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OnGoingPro;
