import React, { useEffect } from "react";
import SectionTitle from "../Card/SectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";
import SectionBlocks from "../Home/SectionBlocks";
const LatestProjects = [
  {
    title: "Phase III",
    link: "/phase-III-details",

    img: "upcoming1.jfif",
    description:
      "Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential...",
  },
  {
    title: "Phase IV",
    link: "/phase-IV-details",

    img: "/upcoming2.jpg",
    description:
      "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I...",
  },
  {
    title: "Phase VI (Ex Phase - II Ext)",
    link: "/phase-VI-details",
    videoUrl:
      "/DHA Phase 2 Islamabad Central Park  4K  Drone Cinematics720p.mp4",
    img: "/upcoming3.jfif",
    description:
      "DHA Islamabad-Rawalpindi Phase VI (Ex Phase – II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals...",
  },
];

const Upcoming = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div
        className=" text-white relative px-5 py-4  "
        // style={{
        //   backgroundImage: "url(/1111.png)",
        //   // backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   // backgroundSize: "150px 150px",
        // }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 border-primary">UPCOMING PROJECTS</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {LatestProjects.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="zoom-in"
              >
                <SectionBlocks
                  img={phase.img}
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                  description={phase.description}
                  link={phase.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
