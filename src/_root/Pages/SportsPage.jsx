import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionBlocks from "../../components/Home/SectionBlocks";
import sports1 from "../../assets/Images/RandomImages/sports1.png";
import sports2 from "../../assets/Images/RandomImages/sports2.png";
const SportsData = [
  {
    title: "Sector E Sports Complex",

    link: "/phase-V-details",
    img: sports1,
    description:
      "A premier destination for fitness and sports enthusiasts, offering state-of-the-art facilities and expert guidance.",
  },
  {
    title: "Phase II Playground",

    link: "/phase-V-details",
    img: sports1,
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

export default SportsPage;
