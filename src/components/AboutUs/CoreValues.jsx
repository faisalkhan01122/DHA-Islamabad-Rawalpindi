import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CoreValues = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing for animations
      once: true, // Animate only once when scrolling
    });
  }, []);

  const coreValuesData = [
    {
      title: "Team Work",
      description:
        "We accomplish more together than we could alone, knowing that inclusiveness is essential to teamwork, and we are willing to give more than we receive.",
    },
    {
      title: "Intensity",
      description:
        "We are incisive, committed, and relentlessly pursue all that we undertake.",
    },
    {
      title: "Excellence",
      description:
        "We expect and accept only the best and strive towards the adaptation of best practices.",
    },
    {
      title: "Services",
      description:
        "We endeavor to serve and care for our customers/clients, our organization, each other, our profession, our community, and our country.",
    },
    {
      title: "Personal Growth",
      description:
        "We challenge ourselves and will continue to examine and raise our expectations.",
    },
    {
      title: "Commitment",
      description:
        "We are loyal to our clients and each other and extend long-term opportunity and stability.",
    },
    {
      title: "Integrity",
      description:
        "We are fair, honest, and ethical in all we do. The truth is absolute – regardless of consequences.",
    },
    {
      title: "Awareness",
      description:
        "We are very conscious about the ever-changing external & internal situations in meeting the threats and opportunities – our success story.",
    },
    {
      title: "Dependability",
      description:
        "We take responsibility, act professionally, and strive to meet or exceed expectations – our credibility is our inspiration.",
    },

    {
      title: "Environment",
      description:
        "We believe that environment must be recovered and developed in our business towards a much greater source of inspiration for our customers/clients.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center  px-6"
      style={{
        backgroundImage: "url('/')", // Replace with your background image
      }}
    >
      <h1
        className="text-center text-xl font-bold text-primary mb-10"
        data-aos="fade-up"
      >
        <span className="border-b-2 border-primary"> Our Core Values</span>
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {coreValuesData.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md shadow-gray-900 p-6"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h2 className="text-sm font-bold text-primary mb-2">
              <span className=""> {value.title}</span>
            </h2>
            <p className="text-gray-500 font-bold text-[.7rem]">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
