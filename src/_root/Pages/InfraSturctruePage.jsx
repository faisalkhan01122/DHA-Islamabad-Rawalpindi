import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import infra from "../../assets/Images/RandomImages/infra66.jpg";
import infra1 from "../../assets/Images/RandomImages/infras1.jpeg";
import infra2 from "../../assets/Images/RandomImages/infras2.jpeg";
import infra3 from "../../assets/Images/RandomImages/infras3.jpeg";
import infra4 from "../../assets/Images/RandomImages/infras4.jpeg";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import SectionBlocks from "../../components/Home/SectionBlocks";
const onGoings = [
  {
    title: " Road Networks",

    link: "/phase-V-details",
    img: infra1,
    description:
      "Wide, paved roads with signal-free corridors ensure smooth traffic flow.",
  },
  {
    title: "Healthcare Facilities",

    link: "/phase-V-details",
    img: infra2,
    description:
      " Well-equipped hospitals and clinics, including DHA Medical Centre, cater to residents' health needs.",
  },
  {
    title: "Commercial Hubs",

    link: "/phase-V-details",
    img: infra3,
    description:
      " Shopping centers like Giga Mall and Amazon Mall offer diverse retail options.",
  },
  {
    title: "Recreational Spaces",

    link: "/phase-V-details",
    img: infra4,
    description:
      "Parks, playgrounds, and sports complexes like River View Sports Complex promote a healthy lifestyle.",
  },
];

const InfraSturctruePage = () => {
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
        heading="InfraSturctrue"
        backgroundImage={infra}
      />
      <div className=" text-white relative px-5 py-4  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">
              InfraSturctrue
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

export default InfraSturctruePage;
