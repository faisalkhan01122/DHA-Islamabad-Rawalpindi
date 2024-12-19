import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionBlocks from "../../components/Home/SectionBlocks";

import parks1 from "../../assets/Images/RandomImages/education1.png";
import parks2 from "../../assets/Images/RandomImages/education2.png";
import parks3 from "../../assets/Images/RandomImages/education3.png";
import parks4 from "../../assets/Images/RandomImages/education4.png";
import parks5 from "../../assets/Images/RandomImages/education5.png";
import parks6 from "../../assets/Images/RandomImages/education6.png";
const onGoings = [
  {
    title: "APS",

    link: "/phase-V-details",
    img: parks1,
    description: "Data Required",
  },
  {
    title: "APS",

    link: "/phase-V-details",
    img: parks2,
    description: "Data Required",
  },
  {
    title: "APS",

    link: "/phase-V-details",
    img: parks3,
    description: "Data Required",
  },
  {
    title: "APS",

    link: "/phase-V-details",
    img: parks4,
    description: "Data Required",
  },
  {
    title: "APS",

    link: "/phase-V-details",
    img: parks5,
    description: "Data Required",
  },
  {
    title: "APS",

    link: "/phase-V-details",
    img: parks6,
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

export default ParkPage;