import React from "react";
import Slider from "react-slick";

// Import the required styles (if not imported globally)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LifeStyle1 from "../assets/Images/RandomImages/sports.png";
import LifeStyle2 from "../assets/Images/RandomImages/DJI_0287.png";
import LifeStyle3 from "../assets/Images/RandomImages/DSC_9794.png";
import LifeStyle4 from "../assets/Images/RandomImages/3RWDS.png";
const LifeStyleSlider = () => {
  const images = [
    { src: LifeStyle1, buttonText: "Sports" },
    { src: LifeStyle2, buttonText: "Park" },
    { src: LifeStyle3, buttonText: "Education" },
    { src: LifeStyle4, buttonText: "HealthCare" },

    { src: "/aminities.jpeg", buttonText: "Amenities" },
  ];

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: false, // Autoplay the slides
    autoplaySpeed: 3000, // Delay between slides
    responsive: [
      {
        breakpoint: 1024, // For medium screens (laptop)
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 640, // For small screens (mobile)
        settings: {
          slidesToShow: 2, // Show 1 slide
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-3 py-3 ">
      <Slider {...settings} className="">
        {images.map((image, index) => (
          <div key={index} className="relative px-2 md:px-4 ">
            {/* Gap between slides */}
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-56 md:h-96 object-cover"
            />
            {/* Button positioned at the bottom-left */}
            <div className="absolute bottom-0 h-10 md:h-16  left-2 md:left-4 w-[91%] md:w-[91%] flex items-center justify-start backdrop-blur-sm bg-white/5 p-2 ">
              <button className="px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-1 text-[.5rem] text-gray-700 sm:text-base md:text-lg bg-[#BBB2B1]  font-bold  shadow-lg hover:bg-primary-dark transition duration-300">
                {image.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LifeStyleSlider;
