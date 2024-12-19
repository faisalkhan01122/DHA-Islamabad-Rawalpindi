import React from "react";
import PhasesDetails from "../../components/PhasesDetails";
import phase5 from "../../assets/Phases/phase567.mp4";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";

import phase5details1 from "../../assets/Images/Phases/phasev1.png";
import phase5details2 from "../../assets/Images/Phases/phasev2.png";
import phase5details3 from "../../assets/Images/Phases/phasev3.png";
import phase5details4 from "../../assets/Images/Phases/phasev4.png";
const PhaseVDetailsPage = () => {
  const phaseData = {
    // Overall background image
    // phaseTitle: "DHA PHASE-V",
    // mainImage: "/phasev.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase V Community",
    descriptionText: `
           Formerly launched as Commoner's Town in 2006, over an area of approx 7000 kanals, it has been renamed as DHA Phase V with Sector A, B, C, D, E, F, G & H. Phase-V is located along the Main Islamabad Highway, having dual access through DHA Expressway and L.A.K Boulevard. It exists in an area with tremendous landscape and natural beauty.
          `,
    galleryImages: [
      phase5details1,
      phase5details2,
      phase5details3,
      phase5details4, // Add more image paths as needed
    ],
    dec2: "  Expansion of FTTH network caring PTCL and Transworld services is currently in progress. Cellular operators are engaged to enhance services in the area.",
    desTitle: " Location ",
  };
  return (
    <div>
      <HeroSectionWithHeading heading="DHA PHASE-V" backgroundVideo={phase5} />
      <PhasesDetails
        // phaseTitle={phaseData.phaseTitle}
        // mainImage={phaseData.mainImage}
        descriptionTitle={phaseData.descriptionTitle}
        descriptionText={phaseData.descriptionText}
        galleryImages={phaseData.galleryImages}
        desTitle={phaseData.desTitle}
        dec2={phaseData.dec2}
      />
    </div>
  );
};

export default PhaseVDetailsPage;
