import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const FileOpening = () => {
  return (
    <div
      className="bg-golden h-[100vh] p-8 bg-cover relative"
      style={{ backgroundImage: "url(/uper gradiant copy.jpg)" }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className=" relative p-4 grid grid-cols-1 md:grid-cols-2 justify-center mt-4   ">
        {" "}
        {/* Flex container for side-by-side layout */}
        {/* Procedure Section */}
        <div className="border shadow-lg bg-primary p-4 rounded-large w-full  md:w-[40vw]">
          {" "}
          {/* Adjusted width */}
          <h3 className="text-2xl font-bold text-cream">Procedure:</h3>
          <div className="flex justify-between items-center mt-2">
            <a href="#" className=" text-xl text-cream">
              File Opening Procedure
            </a>
            <FaCloudDownloadAlt className="text-cream text-2xl" />
          </div>
        </div>
        {/* Document Section */}
        <div className="border shadow-lg bg-primary rounded-large p-4 w-full md:w-[40vw]">
          {" "}
          {/* Adjusted width */}
          <h3 className="text-2xl font-bold text-cream">Document:</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between items-center">
              <a href="#" className="text-cream text-xl w-[60%] md:w-full">
                1- REQUEST FOR ISSUANCE OF OPEN ALLOTMENT CERTIFICATE
              </a>
              <FaCloudDownloadAlt className="text-cream text-2xl" />
            </li>
            <li className="flex justify-between items-center">
              <a href="#" className="text-cream text-xl">
                2- Membership Form
              </a>
              <FaCloudDownloadAlt className="text-cream text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FileOpening;
