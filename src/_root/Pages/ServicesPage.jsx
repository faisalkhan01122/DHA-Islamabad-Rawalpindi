import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { ServiceData } from "../../Utils/data";

import ServicesCard from "../../components/ServicesCard";
const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className=" text-white relative px-5 py-4  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 border-primary">Services</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {ServiceData.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="zoom-in"
              >
                <ServicesCard
                  img={phase.img}
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                  description={phase.description}
                  description1={phase.description1}
                  description2={phase.description2}
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

export default ServicesPage;
