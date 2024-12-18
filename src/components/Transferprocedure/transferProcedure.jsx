import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const TransferProcedure = () => {
  const procedures = [
    { id: 1, name: "Affidavit by Seller" },
    { id: 2, name: "Undertaking by Purchaser" },
    { id: 3, name: "Agreement to Sell Plot" },
    { id: 4, name: "Authority Letter for Collection of Statement of dues and NDC" },
    { id: 5, name: "Application Form for Transfer of Plot" },
    { id: 6, name: "Membership Form" },
    { id: 7, name: "Request for Statement of dues for house-shop & Plot" },
    { id: 8, name: "Issuance Of NDC (No Demand Certificate)" },
  ];

  return (
    <div
      className=" relative min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('/uper gradiant copy.jpg')" // Add your image URL here
      }}
    >
        <div className="absolute inset-0 bg-white/70 "></div>
      <div className=" relative max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-primary">Transfer Procedure</h1>
        </div>
        <div className="p-6 w-60 md:w-full overflow-x-scroll md:overflow-hidden scroll-smooth">
          <table className=" w-full text-left border-collapse text-nowrap ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-primary">#</th>
                <th className="py-2 px-4 border-b text-primary">Procedure</th>
                <th className="py-2 px-4 border-b text-primary text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {procedures.map((procedure, index) => (
                <tr key={procedure.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{procedure.name}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <IoCloudDownloadOutline className="w-8 h-8 text-primary" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransferProcedure;


