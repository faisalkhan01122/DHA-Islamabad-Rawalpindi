import React, { useEffect } from "react";
import upcoming from "../../assets/Images/Phases/DHA Gandhara.jpg";
import upcoming1 from "../../assets/Images/Phases/Margalla Enclave Pic.jpg";
import upcoming2 from "../../assets/Images/Phases/Margalla Orchard Pic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
// import AdvertisementCard from "../Advertisement/AdvertisementCard";
import SectionBlocks from "../Home/SectionBlocks";
const LatestProjects = [
  {
    title: "Margalla Orchard",
    link: "/phase-IV-details",

    img: upcoming2,
    description:
      " Margalla Orchards Islamabad is now managed and owned by DHAI-R. Previously, it stood as a joint venture between the Supreme Court Bar Association Pakistan (SCBAP), the Federal Government Employees Housing Authority (FGEHA) and the Defence Housing Authority Islamabad-Rawalpindi (DHAI-R). The project will bring a balanced blend of exclusivity, quality and value to different segments of the population.",
  },
  {
    title: "Margalla Enclave",
    link: "/phase-III-details",

    img: upcoming1,
    description:
      " A joint venture project between CDA and DHAI-R on the Kuri Road, Zone 4, DHAI-R, located near Bahria Enclave. This project will be launched soon.",
  },
  {
    title: "DHA Gandhara",
    link: "/phase-IV-details",

    img: upcoming,
    description:
      "DHA Gandhara is an exciting new development by the DHAI-R in Islamabad, a premier residential project with masterplan designed by Surbana Jurong, dedicated motorway access and top notch amenities. It will be launched soon.",
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
      <HeroSectionWithHeading
        // heading="UpComing Project"
        backgroundImage={upcoming}
      />
      <div className=" text-white relative px-5 py-4  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-2xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 border-primary">UPCOMING PROJECTS</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 ">
            {LatestProjects.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="flip-right"
              >
                {/* <AdvertisementCard
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                /> */}
                <SectionBlocks
                  img={phase.img}
                  // imageUrl={phase.imageUrl}
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
