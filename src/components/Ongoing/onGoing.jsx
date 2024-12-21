import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionBlocks from "../Home/SectionBlocks";
import ongoing from "../../assets/Images/Phases/DHA Down Town.jpg";
import ongoing2 from "../../assets/Images/Phases/RVN Pic.jpg";
import ongoing1 from "../../assets/Images/Phases/RVS Pic (1).jpg";

import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";
// import AdvertisementCard from "../Advertisement/AdvertisementCard";
const onGoings = [
  {
    title: "River View South",

    link: "/phase-V-details",
    img: ongoing1,
    description:
      "DHA Islamabad-Rawalpindi has  announced the launch of limited residential plots in Sector River View South, Phase-IV. The available plot sizes include 5 Marla, 7 Marla, 10 Marla, and 1 Kanal, catering to both local and overseas Pakistanis. Situated on Adyala Road, the project boasts a spacious entrance and a gated community with meticulous town planning adhering to global standards.",
  },
  {
    title: "River View North ",

    link: "/phase-IV-details",
    img: ongoing2,
    description:
      "This area is located between River View South and Garden Villas and DHAI-R machinery is operational 24/7 to ensure extensive development and infrastructure.",
  },
  {
    title: "DHA Down Town ",

    link: "/phase-V-details",
    img: ongoing,
    description:
      "Strategically located on main GT Road in the most prime commercial locality of the twin cities, DHA Downtown is master-planned to be Rawalpindi-Islamabad’s most futuristic commercial hub.",
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

        <div className="w-full max-w-2xl mx-auto my-3 px-4 relative">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 border-primary">ONGOING PROJECTS</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 ">
            {onGoings.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="zoom-in"
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

export default OnGoing;
