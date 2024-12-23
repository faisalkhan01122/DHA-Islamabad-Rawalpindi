import React from "react";

const Mepengineers = () => {
  // Data for the table
  const dealers = [
    {
      id: "MEP-001",
      regdno: "MEP-001",
      NAMEOFFIRM: "M/S Reckon Consulting Engineers",
      ENGRNAME: "Sarfraz Ahmad",
      ADDRESS: "House no 8, Street No 169, G-13/3 Islamabad",
      CONTACTNO: "0300-8540978",
    },
    {
      id: "MEP-001",
      regdno: "MEP-001",
      NAMEOFFIRM: "M/S Reckon Consulting Engineers",
      ENGRNAME: "Sarfraz Ahmad",
      ADDRESS: "House no 8, Street No 169, G-13/3 Islamabad",
      CONTACTNO: "0300-8540978",
    },
  ];

  return (
    <>
      <div
        className="bg-cover relative"
        style={{ backgroundImage: "url(/uper gradiant copy.jpg" }}
      >
        {/* <div className="bg-[#CEB682] flex text-center justify-center p-5">
          <h1 className="text-white text-3xl font-bold">MEP Engineers</h1>
        </div> */}
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative p-4  flex justify-center items-center">
          <div className="text-primary bg-white rounded-lg  w-full max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center p-4">
              LIST OF MEP ENGINEER - DHA ISLAMABAD - FOR THE YEAR 2024
            </h2>
            {/* Responsive Table */}
            <div className="overflow-x-auto h-full">
              <table className="min-w-full border-collapse border border-primary text-nowrap ">
                <thead>
                  <tr>
                    <th className="border border-primary px-2 py-1 text-left text-sm md:text-base">
                      Ser
                    </th>
                    <th className="border border-primary px-2 py-1 text-left text-sm md:text-base">
                      REGD NO
                    </th>
                    <th className="border border-primary px-2 py-1 text-left text-sm md:text-base">
                      NAME OF FIRM
                    </th>
                    <th className="border border-primary px-2 py-1 text-left text-sm md:text-base">
                      ENGR NAME
                    </th>
                    <th className="border border-primary px-2 py-1 text-left text-sm md:text-base">
                      ADDRESS
                    </th>
                    <th className="border border-primary px-2 py-1 text-left text-sm md:text-base">
                      CONTACT NO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dealers.map((dealer, index) => (
                    <tr key={dealer.id}>
                      <td className="border border-primary px-2 py-1 text-sm md:text-base">
                        {index + 1}
                      </td>
                      <td className="border border-primary px-2 py-1 text-sm md:text-base">
                        {dealer.regdno}
                      </td>
                      <td className="border border-primary px-2 py-1 text-sm md:text-base">
                        {dealer.NAMEOFFIRM}
                      </td>
                      <td className="border border-primary px-2 py-1 text-sm md:text-base">
                        {dealer.ENGRNAME}
                      </td>
                      <td className="border border-primary px-2 py-1 text-sm md:text-base">
                        {dealer.ADDRESS}
                      </td>
                      <td className="border border-primary px-2 py-1 text-sm md:text-base">
                        {dealer.CONTACTNO}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mepengineers;
