import React from "react";
import PhasesDetails from "../../components/PhasesDetails";
import phase6 from "../../assets/Phases/phase567.mp4";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";

import phase6details1 from "../../assets/Images/Phases/phasevi1.png";
import phase6details2 from "../../assets/Images/Phases/phasevi2.png";
import phase6details3 from "../../assets/Images/Phases/phasevi3.png";
import phase6details4 from "../../assets/Images/Phases/phasevi4.png";
const PhaseVIDetailsPage = () => {
  const phaseData = {
    // Overall background image
    // phaseTitle: "DHA PHASE-VI",
    // mainImage: "/phasevi.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase VI Community",
    descriptionText: `
            DHA Islamabad-Rawalpindi Phase VI (Ex Phase II Ext) was launched in March 2005 and is spread over an area of approximately 55,000 kanals (estimated). Following the redesign of the master plan, incorporating the Overseas Sector, DHA Valley, and DHA Expressway, the contract for the development of Phase VI (Ex Phase II Ext) has been concluded, and development work is underway.
          `,
    galleryImages: [
      phase6details1,
      phase6details2,
      phase6details3,
      phase6details4, // Add more image paths as needed
    ],
    dec2: "  Since June 25, 2009, DHA Islamabad-Rawalpindi has mobilized massive equipment and resources worth 4.5 billion rupees to complete the development of Phase VI (Ex Phase II Ext). Onsite project offices have been established to supervise and ensure fast-track development. According to the new design, Phase VI (Ex Phase II Ext) has been divided into four sectors (A,",
  };
  return (
    <div>
      <HeroSectionWithHeading heading="DHA PHASE-VI" backgroundVideo={phase6} />
      <PhasesDetails
        // phaseTitle={phaseData.phaseTitle}
        // mainImage={phaseData.mainImage}
        descriptionTitle={phaseData.descriptionTitle}
        descriptionText={phaseData.descriptionText}
        galleryImages={phaseData.galleryImages}
        dec2={phaseData.dec2}
      />
    </div>
  );
};

export default PhaseVIDetailsPage;
