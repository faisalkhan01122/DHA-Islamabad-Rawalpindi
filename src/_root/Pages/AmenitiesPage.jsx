import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Aminty from "../../assets/Images/RandomImages/aminty1.jpg";
import Aminty1 from "../../assets/Images/RandomImages/sports6.png";
import Aminty2 from "../../assets/Images/RandomImages/masjid.jpeg";
// import Aminty3 from "../../assets/Images/RandomImages/aminties2323.jpeg";
// import Aminty4 from "../../assets/Images/RandomImages/amintiessss.jpeg";
import Aminty3 from "../../assets/Images/RandomImages/amintiessss.jpeg";
import Aminty4 from "../../assets/Images/RandomImages/aminties2323.jpeg";
// import Aminty5 from "../../assets/Images/RandomImages/aminty3.jpeg";
// import Aminty6 from "../../assets/Images/RandomImages/amity2.webp";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import SectionBlocks from "../../components/Home/SectionBlocks";
const onGoings = [
  {
    title: " Sports Complexes",

    link: "/phase-V-details",
    img: Aminty1,
    description:
      "State-of-the-art facilities offering various sports like futsal, tennis, and cricket.",
  },
  {
    title: "Mosques",

    link: "/phase-VI-details",
    img: Aminty2,
    description:
      " Beautifully designed mosques providing serene spaces for prayer and reflection.",
  },
  // {
  //   title: "Community Clubs",

  //   link: "/phase-V-details",
  //   img: Aminty5,
  //   description:
  //     " Exclusive clubs featuring dining options, gyms, swimming pools, and event spaces.",
  // },
  {
    title: " Fitness Centers",

    link: "/phase-I-details",
    img: Aminty4,
    description:
      " Modern gyms equipped with the latest fitness equipment for health enthusiasts.",
  },
  {
    title: "Entertainment Zones",

    link: "/phase-II-details",
    img: Aminty3,
    description:
      " Areas dedicated to cinemas, gaming zones, and children's play areas for family entertainment.",
  },
];

const AmenitiesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <HeroSectionWithHeading heading="Amenities" backgroundImage={Aminty} />
      <div className="relative text-white px-5 py-4  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">
              Amenities
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

export default AmenitiesPage;
