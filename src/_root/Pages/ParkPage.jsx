import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import parks from "../../assets/Images/RandomImages/parks1.png";
import parks1 from "../../assets/Images/RandomImages/parks11.png";
import parks2 from "../../assets/Images/RandomImages/parks3.png";
import parks3 from "../../assets/Images/RandomImages/parkkks.png";
import parks4 from "../../assets/Images/RandomImages/prrks.png";
import parks5 from "../../assets/Images/RandomImages/prkss.png";
import parks6 from "../../assets/Images/RandomImages/pppsrks.png";
// import AdvertisementCard from "../../components/Advertisement/AdvertisementCard";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import SectionBlocks from "../../components/Home/SectionBlocks";
const onGoings = [
  {
    title: "RIVER VIEW CPLX PARK  PH-I",

    link: "/phase-I-details",
    img: parks1,
    description:
      "River View Sports Complex is opening soon and registration is open for the facilities. Futsal Ground: Starting from Rs. 4000/match.",
  },
  {
    title: "CORNICE PARK  PH-I ",

    link: "/phase-I-details",
    img: parks2,
    description:
      "DHA Phase I offers a modern lifestyle in a scenic, semi-mountainous area, designed for exceptional living and exclusive DHA standards.",
  },

  {
    title: "BEE FAMILY PARK  PH-II",

    link: "/phase-I-details",
    img: parks3,
    description:
      "Family Bee Park DHA Phase 2 has set a perfect precedent of modern infrastructure and exceptional experience. Our development team has worked extensively to provide our residents with a serene and tranquil environment in this park.",
  },
  {
    title: "SERENE PARK  PH-III",

    link: "/phase-I-details",
    img: parks4,
    description:
      "Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential and commercial areas.",
  },
  {
    title: "HILL VIEW PARK PH-V",

    link: "/phase-I-details",
    img: parks5,
    description:
      "DHA Islamabad is developing Hill View Park of DHA Phase 5 Islamabad, just across of Overseas Sector J. We present a quick look of the amazing feature of DHA Phase 5 Islamabad.",
  },
  {
    title: "RISING SUN PARK PH-III",

    link: "/phase-I-details",
    img: parks6,
    description:
      "Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential and commercial areas.",
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
      <HeroSectionWithHeading backgroundImage={parks} heading=" PARKS" />
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
          {/* <h1 className=" text-center text-primary text-lg my-5  md:text-3xl font-bold">
            <span className="border-b-2 uppercase border-primary">PArks</span>
          </h1> */}
          {/* <SectionTitle title="" /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {onGoings.map((phase, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-102 hover:shadow-xl hover:bg-opacity-90 duration-300 ease-in-out   rounded-lg"
                data-aos="flip-left"
              >
                {/* <AdvertisementCard
                  imageUrl={phase.imageUrl}
                  title={phase.title}
                /> */}
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
