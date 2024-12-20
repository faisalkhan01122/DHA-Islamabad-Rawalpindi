import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sports from "../../assets/Images/RandomImages/sports6.png";
import sports1 from "../../assets/Images/RandomImages/sports1.png";
import sports2 from "../../assets/Images/RandomImages/sports2.png";
import sports3 from "../../assets/Images/RandomImages/sports3.png";
import sports4 from "../../assets/Images/RandomImages/sports4.png";
import sports5 from "../../assets/Images/RandomImages/sports5.png";
import sports6 from "../../assets/Images/RandomImages/sports6.png";
import AdvertisementCard from "../../components/Advertisement/AdvertisementCard";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
const SportsData = [
  {
    title: "Gym Ph-1",

    link: "/phase-V-details",
    imageUrl: sports1,
    description:
      "A premier destination for fitness and sports enthusiasts, offering state-of-the-art facilities and expert guidance.",
  },
  {
    title: "Tennis  Courts Ph-1",

    link: "/phase-V-details",
    imageUrl: sports4,
    description:
      "A dynamic space featuring courts for basketball, football, and tennis, fostering skill development and spirited matches.",
  },
  {
    title: "Table Tennis Ph- l (Emp Only)",

    link: "/phase-V-details",
    imageUrl: sports2,
    description:
      "A dynamic space featuring courts for basketball, football, and tennis, fostering skill development and spirited matches.",
  },
  {
    title: "Mini Gym Ph-l (Emp Only)",

    link: "/phase-V-details",
    imageUrl: sports3,
    description:
      "A premier destination for fitness and sports enthusiasts, offering state-of-the-art facilities and expert guidance.",
  },

  {
    title: "Basketball Court Ph-1",

    link: "/phase-V-details",
    imageUrl: sports5,
    description:
      "A premier destination for fitness and sports enthusiasts, offering state-of-the-art facilities and expert guidance.",
  },
  {
    title: "Futsal Ph-1",

    link: "/phase-V-details",
    imageUrl: sports6,
    description:
      "A dynamic space featuring courts for basketball, football, and tennis, fostering skill development and spirited matches.",
  },
];

const SportsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <HeroSectionWithHeading backgroundImage={sports} heading="Sports" />
      <div className="relative text-white px-5 py-4  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">Sports</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {SportsData.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="flip-right"
              >
                <AdvertisementCard
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsPage;
