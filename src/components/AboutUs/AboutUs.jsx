import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import CoreValues from "./CoreValues";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: true, // Animate only once when scrolling
    });
  }, []);

  const aboutUsData = [
    {
      title: "Our Vision",
      description:
        "To be a leading Housing Authority of Pakistan by providing safe, secure and healthy living community environment to all the clients of Housing Authority Islamabad-Rawalpindi.",
    },
    {
      title: "Our Mission",
      description:
        "Defence Housing Authority Islamabad-Rawalpindi is committed to develop and maintain safe, secure and environmentally friendly living community meeting all the social needs of its clients through quality services at affordable cost using state-of-the-art technology.",
    },
  ];

  return (
    <div className=" mx-auto relative  bg-cover bg-center w-full flex flex-col items-center  p-10">
      {" "}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-white/70"></div>{" "}
      <h1
        className="text-2xl font-bold relative text-primary mb-5"
        data-aos="fade-up"
      >
        <span className="border-b-2 border-primary"> ABOUT US</span>
      </h1>
      <div className="w-full relative px-4 ">
        {aboutUsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md shadow-gray-900 rounded-lg p-3 mb-6"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <h2 className="text-xl  font-bold text-primary mb-4">
              <span className="border-b border-primary">{item.title}</span>
            </h2>
            <p className="text-gray-500 text-[.7rem] font-bold">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <CoreValues />
    </div>
  );
};

export default AboutUs;
