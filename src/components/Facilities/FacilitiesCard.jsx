import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FacilitiesCard = ({ imageUrl, title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="bg-white overflow-hidden h-auto w-full transform transition duration-500 hover:scale-105 hover:shadow-lg"
    >
      
      <img
        className="w-full h-auto object-cover transition-opacity duration-500 hover:opacity-80"
        src={imageUrl}
        alt={title}
        data-aos="fade-in"
        data-aos-delay="200"
      />
      <div className="p-4" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-lg font-semibold text-center py-2 text-primary transition-colors duration-300 hover:text-orange-300">
          {title}
        </h2>
        <p
          className="text-gray-500 mt-2 text-[1rem] transition-colors duration-300 hover:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {description}
        </p>
        <Link
          to={"/"}
          className="hover:text-orange-300 float-end text-[1rem]  text-primary font-semibold"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default FacilitiesCard;

