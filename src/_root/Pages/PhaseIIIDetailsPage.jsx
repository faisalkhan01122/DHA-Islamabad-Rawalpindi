import React from "react";
import PhasesDetails from "../../components/PhasesDetails";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import phase3 from "../../assets/Phases/phase567.mp4";

import phase3details1 from "../../assets/Images/Phases/phase41.png";
import phase3details2 from "../../assets/Images/Phases/phase42.png";
import phase3details3 from "../../assets/Images/Phases/phase43.png";
import phase3details4 from "../../assets/Images/Phases/phase44.png";
const PhaseIIIDetailsPage = () => {
  const phaseData = {
    // Overall background image
    // phaseTitle: "DHA PHASE-III",
    // mainImage: "/phaseiii.png", // Main section image
    descriptionTitle:
      "Discover the unique lifestyle and scenic beauty of DHA Phase III Community",
    descriptionText: `
            Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential and commercial areas set in a serene & secure environment. Development of this Phase has commenced since Dec 2016 with full swing and so far approx 3500 Kanal has been developed. Stretch your imagination to fill in your address at DHA Phase III. Its grand landscapes are a full delight and its proximity to major schools, hospitals, banks, shopping mall, restaurants and cineplexes maximizes your living joy... Come live life at its bountiful best!.
          `,

    galleryImages: [
      phase3details1,
      phase3details2,
      phase3details3,
      phase3details4,
    ],
    dec2: " Cellular services of both Jazz & Ufone made available along with Zong. Where, Transworld services over FTTH network are already in place.",
    desTitle: " Telecom Services",
  };
  return (
    <div>
      <HeroSectionWithHeading
        heading="DHA PHASE-III"
        backgroundVideo={phase3}
      />{" "}
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

export default PhaseIIIDetailsPage;
