import { useEffect } from "react";
// import ad1 from "../../assets/Images/RandomImages/images5.png";
import ad2 from "../../assets/Images/RandomImages/images5.png";
import ad3 from "../../assets/Images/RandomImages/imges22.png";
import ad4 from "../../assets/Images/RandomImages/images5(2).png";
import ad5 from "../../assets/Images/RandomImages/images (1).jpeg";
import ad1 from "../.././assets/Images/RandomImages/download.jpeg";
import SectionBlocks from "./SectionBlocks";
import AOS from "aos";
import "aos/dist/aos.css";

import OurProjectSlider from "../OurProjectSlider";
import LifeStyleSlider from "../LifeStyleSlider";

import { phasesData } from "../../Utils/data";
import bgvideo from "../../assets/Phases/homedha.mp4";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);

  const images = [ad1, ad2, ad3, ad4, ad5];

  return (
    <>
      {/* Video Background */}
      <div className="relative w-full h-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
          src={bgvideo} // Replace with your video path
          autoPlay
          loop
          muted
        ></video>

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Phases Section */}
          <div className="text-white grid grid-cols-1 md:grid-cols-2 px-4 gap-6 py-5 mx-auto max-w-4xl">
            {phasesData.map((phase, index) => (
              <div data-aos="flip-right" key={index}>
                <SectionBlocks
                  img={phase.img}
                  title={phase.title}
                  description={phase.description}
                  link={phase.link}
                  bgImg={phase.bgImg}
                />
              </div>
            ))}
          </div>

          {/* Our Project Slider Section */}
          <div className="max-w-4xl w-full mx-auto" data-aos="zoom-in">
            <h1 className="text-center text-primary text-lg md:text-3xl font-bold">
              <span className="border-b-2 border-primary">Our Project</span>
            </h1>
            <OurProjectSlider />
          </div>

          {/* Lifestyle Slider Section */}
          <div data-aos="flip-left">
            <h1 className="pt-4 text-center text-primary text-lg uppercase md:text-3xl font-bold">
              <span className="border-b-2 border-primary">LifeStyle</span>
            </h1>
            <LifeStyleSlider />
          </div>

          {/* Images Grid */}
          <div
            className="max-w-4xl mx-auto p-4 mt-5 grid grid-cols-2 md:grid-cols-5 gap-4"
            data-aos="flip-right"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="object-fill h-32 rounded-md shadow-md shadow-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
