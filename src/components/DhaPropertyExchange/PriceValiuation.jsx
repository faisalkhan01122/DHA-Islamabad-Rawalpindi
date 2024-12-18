import React from "react";

const PriceValiuation = () => {
  const documentUrl =
    "E:/Light House Development/DHA-Islamabad-Web/src/assets/DHA Documents/DHA document.pdf";

  return (
    <div
      className="bg-golden h-[100vh] bg-cover relative"
      style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="p-4 flex justify-center items-center relative">
        <div className="  rounded-lg  w-full max-w-4xl mx-auto">
          <div className="p-4 rounded-large mt-10 shadow-xl max-w-4xl w-full mx-auto bg-white  ">
            <h1 className="text-2xl font-bold mb-4 text-primary">
              Price Valuation Document
            </h1>
            <p className="mb-6 text-gray-700">
              Click the link below to view or download the price valuation PDF
              document:
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={documentUrl}
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primarylight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
              >
                Download Document
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceValiuation;
