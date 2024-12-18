import React from "react";
import SectionBlocks from "../Home/SectionBlocks";

const Renthome = () => {
  // Data for SectionBlocks
  const sectionData = [
    {
      img: "https://propertyguide.com.pk/wp-content/uploads/2022/01/DHA-Islamabad.jpg",
      title: "DHA Islamabad",
      description:
        "Explore the luxury living and amenities in DHA Islamabad. Offering top-tier homes for rent.",
      link: "/dha-islamabad",
      bgImg: "https://example.com/bg-image1.jpg", // Replace with actual background image
    },
    {
      img: "https://propertyguide.com.pk/wp-content/uploads/2022/01/DHA-Islamabad.jpg",
      title: "DHA Islamabad",
      description:
        "Explore the luxury living and amenities in DHA Islamabad. Offering top-tier homes for rent.",
      link: "/dha-islamabad",
      bgImg: "https://example.com/bg-image1.jpg", // Replace with actual background image
    },
    {
      img: "https://propertyguide.com.pk/wp-content/uploads/2022/01/DHA-Islamabad.jpg",
      title: "DHA Islamabad",
      description:
        "Explore the luxury living and amenities in DHA Islamabad. Offering top-tier homes for rent.",
      link: "/dha-islamabad",
      bgImg: "https://example.com/bg-image1.jpg", // Replace with actual background image
    },
    {
      img: "https://propertyguide.com.pk/wp-content/uploads/2022/01/DHA-Islamabad.jpg",
      title: "DHA Islamabad",
      description:
        "Explore the luxury living and amenities in DHA Islamabad. Offering top-tier homes for rent.",
      link: "/dha-islamabad",
      bgImg: "https://example.com/bg-image1.jpg", // Replace with actual background image
    },

    // Add more blocks as needed
  ];

  return (
    <>
      <div
        className="bg-golden relative"
        style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center p-5 gap-4 max-w-4xl mx-auto">
          {/* Map over the sectionData array and render SectionBlocks */}
          {sectionData.map((section, index) => (
            <SectionBlocks
              key={index}
              img={section.img}
              title={section.title}
              description={section.description}
              link={section.link}
              bgImg={section.bgImg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Renthome;
