import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import jk from "../../assets/Images/RandomImages/jk1.png";
import jk1 from "/dining-tables.jpg";
// import jk2 from "../../assets/Images/RandomImages/jk3.png";
// import jk3 from "../../assets/Images/RandomImages/jk4.png";
// import jk4 from "../../assets/Images/RandomImages/jk5.png";
import AdvertisementCard from "../../components/Advertisement/AdvertisementCard";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
const onGoings = [
  {
    title: "jacaranda family club",

    link: "https://www.jacarandadha.com/",
    imageUrl: jk1,
    description: "Data Required",
  },
  // {
  //   title: "Coffee Shop	",

  //   link: "/phase-V-details",
  //   imageUrl: jk2,
  //   description: "Data Required",
  // },
  // {
  //   title: "Western Restaurnat",

  //   link: "/phase-V-details",
  //   imageUrl: jk3,
  //   description: "Data Required",
  // },
  // {
  //   title: "Jacaranda Wok ",

  //   link: "/phase-V-details",
  //   imageUrl: jk4,
  //   description: "Data Required",
  // },
];

const HospitalPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <HeroSectionWithHeading backgroundImage={jk} heading="Hospitality" />
      <div className=" text-white relative px-5 py-4  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">
              Hospitality
            </span>
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

export default HospitalPage;
