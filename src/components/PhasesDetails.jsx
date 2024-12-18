import React from "react";

const PhasesDetails = ({
  descriptionTitle,
  descriptionText,
  galleryImages,
  desTitle,
  dec2,
}) => {
  return (
    <div className="min-h-screen relative bg-cover bg-fixed bg-center text-[#707070]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/1111.png")' }}
      ></div>
      <div className="absolute inset-0 bg-white/70"></div>
      {/* Background Section */}
      <div className="relative  max-w-6xl   mx-auto bg-cover bg-center flex items-center justify-center">
        {/* Main Content */}
        <div className="text-center">
          {/* <h1 className="text-3xl font-bold my-4">
            <span className="border-b-2 border-[#707070]">{phaseTitle}</span>
          </h1> */}
          {/* <div className="relative max-w-5xl mx-2  inline-block">
            <img
              src={mainImage} // Dynamic main image
              alt="Phase Details"
              className="rounded-md object-cover "
            />
          </div> */}
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-5 relative px-4 py-2 mx-2 md:mx-auto max-w-5xl bg-white shadow-md shadow-gray-800 lg:px-14 text-center">
        <p className="text-[.7rem] font-bold">{descriptionTitle}</p>
        <p className="mt-2 text-[.7rem] font-bold leading-relaxed max-w-4xl mx-auto">
          {descriptionText}
        </p>
        <h1 className="text-[.7rem] py-2  font-bold">{desTitle}</h1>
        <p className="text-[.7rem] pb-1 font-bold">{dec2}</p>
      </div>

      {/* Images Section */}
      <div className="mt-5 relative pb-5">
        <h2 className="text-center text-2xl font-bold mb-8">
          <span className="border-b-2 border-[#707070]">Images</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 px-4 md:px-10 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image} // Dynamic gallery images
              alt={`Gallery Image ${index + 1}`}
              className="rounded object-cover w-full h-56 p-0 m-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhasesDetails;
