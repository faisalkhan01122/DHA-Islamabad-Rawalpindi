import React from "react";
// import ptcl from "../../assets/Images/PTCL_Logo.jpg";
// import HeroSectionWithHeading from "../Share/HeroScetionWithHeading";

const Ptcl = () => {
  return (
    <>
      <div
        className="bg-golden relative"
        style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
      >
        {/* Header Section */}
        {/* <HeroSectionWithHeading backgroundImage={ptcl} heading="PTCl" /> */}
        <div className="absolute inset-0 bg-white/70"></div>
        {/* Text Section */}
        <div className=" relative flex flex-col items-center justify-center gap-10 p-5 ">
          <div className="bg-white shadow-lg py-4 w-full max-w-4xl">
            <h1 className="text-xl md:text-2xl  font-bold mt-4 text-primary mb-4 text-center">
              Pakistan Telecommunication Company Limited (PTCL):
            </h1>
            <p className="text-gray-700 p-4 text-base  leading-relaxed text-justify w-full mx-auto">
              DHA Islamabad-Rawalpindi entered into an MOU on 6th January, 2011.
              PTCL has set up the infrastructure to provide Information and
              Communication Technology (ICT) facilities to the residents of
              Phase-II and other projects of DHA Islamabad-Rawalpindi. The ICT
              facilities include telephony, DSL, IPTV, and security services for
              domestic customers, and leased lines, DXX, IPLC, and conference
              calling for corporate customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ptcl;
