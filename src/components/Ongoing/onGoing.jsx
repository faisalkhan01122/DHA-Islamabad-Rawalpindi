import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionBlocks from "../Home/SectionBlocks";
import ongoing from "../../assets/Images/Phases/DHA Down Town.jpg";
import ongoing2 from "../../assets/Images/Phases/RVN Pic.jpg";
import ongoing1 from "../../assets/Images/Phases/RVS Pic (1).jpg";

import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
import AdvertisementCard from "../Advertisement/AdvertisementCard";
const onGoings = [
  {
    title: "RVS ",

    link: "/phase-V-details",
    imageUrl: ongoing1,
    description:
      "The FGEHA, in partnership with DHA and SCBA, has launched the 'Margalla Orchards' housing project on Park Road, Islamabad.",
  },
  {
    title: "RVN ",

    link: "/phase-IV-details",
    imageUrl: ongoing2,
    description:
      "The DHA and CDA have partnered to develop a 10,000-kanal housing scheme in Islamabad’s Zone IV, with plots shared under a land-sharing formula.",
  },
];

const OnGoing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <HeroSectionWithHeading backgroundImage={ongoing} />
      <div className=" text-white px-5 py-4 relative ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="w-full max-w-4xl mx-auto my-3 px-4 relative">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 border-primary">ONGOING PROJECTS</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {onGoings.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="zoom-in"
              >
                <AdvertisementCard
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                />
                {/* <SectionBlocks
                  img={phase.img}
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                  description={phase.description}
                  link={phase.link}
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnGoing;
