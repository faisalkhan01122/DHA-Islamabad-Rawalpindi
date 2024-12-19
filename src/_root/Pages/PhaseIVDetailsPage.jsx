import React from "react";
import PhasesDetails from "../../components/PhasesDetails";
import phase4 from "../../assets/Phases/phase4.mp4";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";

import phase4details1 from "../../assets/Images/Phases/phaseIV1.png";
import phase4details2 from "../../assets/Images/Phases/phaseIV2.png";
import phase4details3 from "../../assets/Images/Phases/phaseIV3.png";
import phase4details4 from "../../assets/Images/Phases/phaseIV4.png";
const PhaseIVDetailsPage = () => {
  const phaseData = {
    // Overall background image
    // phaseTitle: "DHA PHASE-IV",
    // mainImage: "/phaseIV.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase IV Community",
    descriptionText: `
           Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I along Soan River. Beautifully set in a semi-hilly area having eye-catching natural landscape with contoured terraces providing a scenic view to residents. The natural topography has been respected to the greatest possible extent while trying to achieve a viable number of plots with an economical and well-engineered infrastructure of civic and municipal services. The project will offer high-end amenities with recreational facilities & green areas.
          `,
    galleryImages: [
      phase4details1,
      phase4details2,
      phase4details3,
      phase4details4,
    ],

    dec2: " The project is being developed along a meandering spinal road that connects the area to both DHA Phase I housing towards the north and Rawalpindi M2 Motorway link towards the south.",
    desTitle: " Location ",
  };
  return (
    <div>
      <HeroSectionWithHeading heading="DHA PHASE-IV" backgroundVideo={phase4} />
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

export default PhaseIVDetailsPage;
