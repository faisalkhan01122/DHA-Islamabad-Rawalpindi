import React from "react";
import PhasesDetails from "../../components/PhasesDetails";
import phase4 from "../../assets/Phases/phase4.mp4";
import HeroSectionWithHeading from "../../components/Share/HeroScetionWithHeading";
import security from "../../assets/Images/RandomImages/sec.jpeg";
import phase4details1 from "../../assets/Images/RandomImages/se1.jpg";
import phase4details2 from "../../assets/Images/RandomImages/se2.jpg";
import phase4details3 from "../../assets/Images/RandomImages/se3.jpg";
import phase4details4 from "../../assets/Images/RandomImages/sec.jpeg";
const SecurityPage = () => {
  const phaseData = {
    // Overall background image
    // phaseTitle: "DHA PHASE-IV",
    // mainImage: "/phaseIV.png", // Main section image
    descriptionTitle: "DHA Islamabad-Rawalpindi Security",
    descriptionText: `
          DHA Islamabad-Rawalpindi provides its residents with 24-hour security. Security personnel conduct mobile patrolling during the night. All security personnel are equipped with efficient wireless communication. 
          `,
    galleryImages: [
      phase4details1,
      phase4details2,
      phase4details3,
      phase4details4,
    ],

    dec2: " There are special surveillance cameras and Integrated Security System through a Central Fiber Network and Smart Card at check post are also planned to ensure the secure and peaceful environment for the residents.",
    // desTitle: " Location ",
  };
  return (
    <div>
      <HeroSectionWithHeading heading="Security " backgroundImage={security} />
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

export default SecurityPage;
