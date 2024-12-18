import React, { useEffect } from "react";
import FacilitiesCard from "./FacilitiesCard";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import SectionBlocks from "../Home/SectionBlocks";
import { link } from "framer-motion/client";

const facilitiesData = [
  {
    title: "Mobile Transfer Van",
    description: "Data Required.",
    img: "/facilityOne.jpg",
  },
  {
    title: "Complaint Management Service",
    description:
      "Automated Complaint Management System In pursuance to enhance quality of service for valued residents, DHAI-R launches automated and interactive Complaint Management System.",
    img: "/facilityTwo.jpg",
  },
  {
    title: "Online Payment",
    description:
      "Islamabad-Rawalpindi is pleased to introduce online payment system! To make your payment to DHAI-R online, sign up on the DHAI-R Online",
    img: "/facilityThree.jpg",
  },
  {
    title: "Emergency Relief Services",
    description: "Data Required",
    img: "/facilityFour.jpg",
  },
  {
    // link:'',
    title: "Resident App",
    description: "Data Required",
    img: "/facilityFive.jpg",
  },
];

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="text-white relative  pb-5 bg-cover">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="w-full relative max-w-4xl mx-auto">
        <h1 className=" text-center text-primary text-lg py-5  md:text-3xl font-bold">
          <span className="border-b-2 border-primary">Facilities</span>
        </h1>
        {/* Facilities Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl p-4 mx-auto"
          data-aos="zoom-in"
        >
          {facilitiesData.map((phase, index) => (
            <SectionBlocks
              // key={index}
              // title={facility.title}
              // description={facility.description}
              // imageUrl={facility.imageUrl}
              img={phase.img}
              title={phase.title}
              description={phase.description}
              // link={phase.link}
            />

            // bgImg={phase.bgImg}
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
