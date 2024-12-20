import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Retail1 from "../../assets/Images/RandomImages/retails11.jpg";
import Retail2 from "../../assets/Images/RandomImages/retails2.jpg";
import Retails from "../../assets/Images/RandomImages/retails1.jpg";
import Retail3 from "../../assets/Images/RandomImages/retails3.jpg";
import Retail4 from "../../assets/Images/RandomImages/retails.jpg";
// import AdvertisementCard from "../../components/Advertisement/AdvertisementCard";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import SectionBlocks from "../../components/Home/SectionBlocks";
const onGoings = [
  {
    title: "Giga Mall",

    link: "/phase-V-details",
    img: Retail1,
    description:
      "Located in DHA Phase II, Giga Mall is one of the largest shopping centers in Islamabad, featuring over 200 national and international brands, a food court, and entertainment facilities.",
  },
  {
    title: "Amazon Mall",

    link: "/phase-V-details",
    img: Retail2,
    description:
      "Situated in DHA Phase II, Amazon Mall features factory outlets of various brands, offering a range of products at competitive prices",
  },
  {
    title: "Hamleys Toy Store",

    link: "/phase-V-details",
    img: Retail3,
    description:
      "A renowned British toy retailer with a branch in DHA Phase II, offering a wide selection of toys and games for children.",
  },
  {
    title: "World Trade Center Islamabad",

    link: "/phase-V-details",
    img: Retail4,
    description:
      "Also known as Giga Mall Extension, this complex in DHA Phase II includes retail outlets, offices, and dining options, enhancing the shopping experience.",
  },
];

const RetailPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <HeroSectionWithHeading heading="Retail" backgroundImage={Retails} />
      <div className=" text-white relative px-5 py-4  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="w-full relative max-w-4xl mx-auto my-3 px-4">
          <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">Retail</span>
          </h1>
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {onGoings.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="flip-right"
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

export default RetailPage;
