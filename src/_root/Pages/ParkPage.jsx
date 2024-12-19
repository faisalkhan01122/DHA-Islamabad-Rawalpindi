import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import parks from "../../assets/Images/RandomImages/parks1.png";
import parks1 from "../../assets/Images/RandomImages/parks2.png";
import parks2 from "../../assets/Images/RandomImages/parks3.png";

import AdvertisementCard from "../../components/Advertisement/AdvertisementCard";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
const onGoings = [
  {
    // title: "APS",

    link: "/phase-V-details",
    imageUrl: parks1,
    description: "Data Required",
  },
  {
    // title: "APS",

    link: "/phase-V-details",
    imageUrl: parks2,
    description: "Data Required",
  },
];

const ParkPage = () => {
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
        backgroundImage={parks}
        heading="CORNICE PARK PH-I"
      />
      <div
        className=" text-white relative px-5 py-4  "
        style={{
          backgroundImage: "url(/bgimg.jpg)",
          height: "100%",
          backgroundPosition: "",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "150px 150px",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">PArks</span>
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

export default ParkPage;
