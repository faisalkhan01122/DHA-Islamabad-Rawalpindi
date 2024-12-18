import React from "react";
import PhasesDetails from "../../components/PhasesDetails";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import phase1 from "../../assets/Phases/phase1.mp4";
import phased1 from "../../assets/Images/Phases/unknown1 (2).png";

import phased2 from "../../assets/Images/Phases/unknown1 (1).png";
import phased3 from "../../assets/Images/Phases/unknown (1).png";
import phased4 from "../../assets/Images/Phases/phases4.png";
const PhaseIDetailsPage = () => {
  const phaseData = {
    backgroundImage: "/1111.png", // Overall background image
    phaseTitle: "DHA PHASE-I",
    mainImage: "/Screenshot 2024-11-2.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase I Community",
    descriptionText: `
          DHA Phase I Community has been meticulously planned and designed to meet the highest standards,
          offering residents an exceptional way of life and quality living in a semi-mountainous area with
          breathtaking views. Residents enjoy a contemporary lifestyle that is exclusive to DHA.
        `,
    galleryImages: [phased1, phased2, phased3, phased4],
  };
  return (
    <div>
      <HeroSectionWithHeading backgroundVideo={phase1} heading="DHA PHASE-I" />
      <PhasesDetails
        phaseTitle={phaseData.phaseTitle}
        // mainImage={phaseData.mainImage}
        descriptionTitle={phaseData.descriptionTitle}
        descriptionText={phaseData.descriptionText}
        galleryImages={phaseData.galleryImages}
      />
    </div>
  );
};

export default PhaseIDetailsPage;
