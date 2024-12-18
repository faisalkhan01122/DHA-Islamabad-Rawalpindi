import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionBlocks from "../../components/Home/SectionBlocks";

import healthcare1 from "../../assets/Images/RandomImages/health3.jpg";
import healthcare2 from "../../assets/Images/RandomImages/health2.jpg";
import healthcare3 from "../../assets/Images/RandomImages/health1.jpg";
import healthcare4 from "../../assets/Images/RandomImages/health4.jpg";
const onGoings = [
  {
    title: " Emergency Care",

    link: "/phase-V-details",
    img: healthcare1,
    description:
      "24/7 emergency surgical and medical aid with advanced equipment and medicines for employees and residents.",
  },
  {
    title: "Health Awareness ",

    link: "/phase-V-details",
    img: healthcare2,
    description:
      "Regular lectures and programs to promote health education and disease prevention.",
  },
  {
    title: "Consultation & Ambulance",

    link: "/phase-V-details",
    img: healthcare3,
    description:
      "Outdoor consultations and 24/7 ambulance services for residents of all ages.Let me know if you need further edits!",
  },
  {
    title: "On-Site Medical Facilities",

    link: "/phase-V-details",
    img: healthcare4,
    description:
      "Fully equipped with modern medical equipment, furniture, and essential medicines for immediate care.",
  },
];

const HealthCarePage = () => {
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
        className="relative text-white px-5 py-4  "
        // style={{
        //   backgroundImage: "url(/bgimg.jpg)",
        //   height: "100%",
        //   backgroundPosition: "",
        //   //   backgroundRepeat: "no-repeat",
        //   //   backgroundSize: "150px 150px",
        // }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">
              HealthCare
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

export default HealthCarePage;
