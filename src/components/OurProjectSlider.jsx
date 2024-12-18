import React from "react";
import Slider from "react-slick";
import "./OurProjectSlider.css";
// Import the required styles (if not imported globally)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourproject1 from "../assets/Images/RandomImages/Picture1.png";
import ourproject2 from "../assets/Images/RandomImages/MaskGroup1(1).png";
import ourproject3 from "../assets/Images/RandomImages/MaskGroup1(2).png";

const OurProjectSlider = () => {
  const slides = [
    {
      img: ourproject1,
      link: "/details-1",
    },
    {
      img: ourproject2,
      link: "/details-2",
    },
    {
      img: ourproject3,
      link: "/details-3",
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
            <div className="absolute bottom-4 left-0 bg-black opacity-50 h-20 flex items-center w-full text-start">
              <a
                href={slide.link}
                className="inline-block bg-transparent border-2 border-primary ms-4 px-6 py-2 text-sm font-bold text-primary rounded-lg hover:bg-primary-dark transition-all"
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurProjectSlider;
