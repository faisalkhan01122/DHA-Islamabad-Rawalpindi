import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const DownloadPage = () => {
  const items = [
    {
      category: "SUPPLIER, CONTRACTOR AND PROPERTY DEALER'S REGISTRATION AND VERIFICATION FORMS",
      links: [
        { name: "Supplier Registration Form (SCM)", id: 1 },
        { name: "Contractors Registration Form (Chief Engr Branch)", id: 2 },
        { name: "Contractors / Vendors Registration Form (Building Control)", id: 3 },
        { name: "Contractors / Suppliers / Vendors Verification Form (Security)", id: 4 },
        { name: "Property Dealers Registration Form (Transfer & Record)", id: 5 }
      ]
    },
    {
      category: "PROCEDURES (ALL PROJECTS)",
      links: [
        { name: "Collection of Allotment Procedure", id: 6 },
        { name: "Duplicate Allotment Letter Procedure", id: 7 },
        { name: "Allotment Certificate Endorsement Procedure", id: 8 },
        { name: "All Transfer Procedure", id: 9 },
        { name: "Normal Transfer Procedure", id: 10 },
        { name: "Gift Transfer Procedure", id: 11 },
        { name: "Widow Legal Heir Transfer Procedure", id: 12 },
        { name: "GPA Transfer Procedure", id: 13 },
        { name: "SPA Transfer Procedure", id: 14 },
        { name: "Out station transfer procedure", id: 15 },
        { name: "DHA Own project & Valley file Conversion Procedure", id: 16 },
        { name: "NOC NEC Lien Marking Procedure", id: 17 }
      ]
    },
    {
      category: "DOCUMENTS (ALL PROJECTS)",
      links: [
        { name: "Risk Certificate", id: 18 },
        { name: "Authority For Collection Of Allotment Letter", id: 19 },
        { name: "Duplicate Allotment Letter (Specimen)", id: 20 },
        { name: "Application for Transfer of Plot", id: 21 },
        { name: "Affidavit by Seller", id: 22 },
        { name: "Undertaking by Purchaser", id: 23 },
        { name: "Agreement to Sell Plot", id: 24 },
        { name: "Application for Gift of Plot", id: 25 },
        { name: "Affidavit by Donor", id: 26 },
        { name: "Undertaking by Donee", id: 27 },
        { name: "Gift Deed", id: 28 },
        { name: "Application For Legal Heir Transfer", id: 29 },
        { name: "Undertaking by the Widow Legal Heir", id: 30 },
        { name: "Affidavit for Surrender of Rights", id: 31 },
        { name: "General Power of Attorney", id: 32 },
        { name: "Special Power of Attorney", id: 33 },
        { name: "Authority Letter for Collection of Statement of dues and NDC", id: 34 },
        { name: "Plot Verification Form", id: 35 },
        { name: "Application for Change of Address", id: 36 }
      ]
    }
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('/uper gradiant copy.jpg')" // Add your image URL here
      }}
    >
      <div className="absolute inset-0 bg-white/70 "></div>
      <div className="relative max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-primary">Download Forms </h1>
        </div>
        <div className="p-6 w-full overflow-x-scroll md:overflow-hidden scroll-smooth">
          {items.map((item, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">{item.category}</h2>
              <table className="w-full text-left border-collapse text-nowrap">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-primary">#</th>
                    <th className="py-2 px-4 border-b text-primary">Name</th>
                    <th className="py-2 px-4 border-b text-primary text-center">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {item.links.map((link, idx) => (
                    <tr key={link.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{idx + 1}</td>
                      <td className="py-2 px-4 border-b">{link.name}</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button className="text-blue-500 hover:text-blue-700">
                          <IoCloudDownloadOutline className="w-6 h-6 text-primary" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
